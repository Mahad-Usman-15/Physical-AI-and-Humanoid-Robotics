import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))

from cohere_client import get_cohere_client
from qdrant import QdrantManager, get_qdrant_client


async def get_rag_response(query: str, context: str | None = None) -> str:
    """
    Generates a response using the RAG pipeline.
    """
    cohere_client = get_cohere_client()
    qdrant_client = get_qdrant_client()
    qdrant_manager = QdrantManager()

    # ---------- CASE 1: User-selected context ----------
    if context:
        response = cohere_client.chat(
            message=query, documents=[{"title": "user_selection", "snippet": context}]
        )
        return response.text

    # ---------- CASE 2: RAG search ----------
    query_embedding = cohere_client.embed(
        texts=[query], model="embed-english-v3.0", input_type="search_query"
    ).embeddings[0]

    search_result = qdrant_client.query_points(
        collection_name=qdrant_manager.collection_name,
        query=query_embedding,
        limit=5,
        with_payload=True,
    )

    documents = [
        {
            "title": point.payload.get("source", "document"),
            "snippet": point.payload.get("text", ""),
        }
        for point in search_result.points
    ]

    response = cohere_client.chat(message=query, documents=documents)

    return response.text
