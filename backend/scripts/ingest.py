import sys
from pathlib import Path
import markdown
from qdrant_client.http.models import PointStruct
import uuid

# Add the src directory to the Python path
sys.path.append(str(Path(__file__).parent.parent / "src"))
from cohere_client import get_cohere_client
from qdrant import QdrantManager

# --- Simple Text Splitter ---
def split_text_by_paragraph(text: str, chunk_size: int = 500, chunk_overlap: int = 50):
    """
    A simple text splitter that splits text by paragraphs.
    If a paragraph is larger than chunk_size, it will be split further.
    """
    paragraphs = text.split("\n\n")
    chunks = []
    for p in paragraphs:
        if len(p) <= chunk_size:
            chunks.append(p)
        else:
            for i in range(0, len(p), chunk_size - chunk_overlap):
                chunks.append(p[i:i + chunk_size])
    return chunks

# --- Main Ingestion Logic ---
def ingest_docs():
    """
    Finds all markdown files, chunks them, generates embeddings, and stores them in Qdrant.
    """
    cohere_client = get_cohere_client()
    qdrant_manager = QdrantManager()
    
    # Ensure the Qdrant collection exists. 
    # The vector size for Cohere's 'embed-english-v3.0' model is 1024.
    qdrant_manager.create_collection(vector_size=1024) 
    
    docs_path = Path(__file__).parent.parent.parent / "physicalroboticbook" / "docs"
    points = []

    print(f"Scanning for markdown files in: {docs_path}")
    markdown_files = list(docs_path.rglob("*.md"))
    print(f"Found {len(markdown_files)} markdown files.")

    for md_file in markdown_files:
        print(f"Processing file: {md_file.name}")
        with open(md_file, "r", encoding="utf-8") as f:
            from bs4 import BeautifulSoup

            # Convert markdown to HTML
            html = markdown.markdown(f.read())
            # Strip HTML tags to get plain text
            soup = BeautifulSoup(html, "html.parser")
            text_content = soup.get_text()

            chunks = split_text_by_paragraph(text_content)
            
            # Generate embeddings for the chunks
            if chunks:
                response = cohere_client.embed(
                    texts=chunks,
                    model='embed-english-v3.0',
                    input_type='search_document'
                )
                embeddings = response.embeddings
                
                # Create points for Qdrant
                for i, chunk in enumerate(chunks):
                    point = PointStruct(
                        id=str(uuid.uuid4()),
                        vector=embeddings[i],
                        payload={"text": chunk, "source": md_file.name}
                    )
                    points.append(point)

    if points:
        batch_size = 50
        print(f"Upserting {len(points)} points to Qdrant in batches of {batch_size}...")
        for i in range(0, len(points), batch_size):
            batch = points[i:i + batch_size]
            print(f"Upserting batch {i//batch_size + 1}...")
            qdrant_manager.get_client().upsert(
                collection_name=qdrant_manager.collection_name,
                points=batch,
                wait=True
            )
        print("Upsert complete.")
    else:
        print("No points to upsert.")

if __name__ == "__main__":
    ingest_docs()
