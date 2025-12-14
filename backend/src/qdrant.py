from dotenv import load_dotenv
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict
from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams

# Load environment variables from .env file
load_dotenv()


# --- Configuration ---
class Settings(BaseSettings):
    QDRANT_URL: str = Field(..., env="QDRANT_URL")
    QDRANT_API_KEY: str = Field(..., env="QDRANT_API_KEY")

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()


# --- Qdrant Client Setup ---
class QdrantManager:
    def __init__(self):
        self.client = QdrantClient(
            url=settings.QDRANT_URL,
            api_key=settings.QDRANT_API_KEY,
        )
        self.collection_name = (
            "physical-ai-and-humanoid-robotics"  # Default collection name
        )

    def get_client(self) -> QdrantClient:
        return self.client

    def create_collection(self, vector_size: int, distance: Distance = Distance.COSINE):
        """
        Creates a Qdrant collection if it doesn't already exist.
        """
        if not self.client.collection_exists(collection_name=self.collection_name):
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=vector_size, distance=distance),
            )
            print(f"Collection '{self.collection_name}' created.")
        else:
            print(f"Collection '{self.collection_name}' already exists.")


# --- Dependency to get Qdrant client ---
def get_qdrant_client() -> QdrantClient:
    manager = QdrantManager()
    return manager.get_client()


# You might need to determine the vector_size based on your embedding model (Cohere)
# For example, Cohere's default embedding size is often 1024 or 4096.
# This will be refined during the data ingestion task.
if __name__ == "__main__":
    # Example usage:
    print("Initializing Qdrant client...")
    qdrant_manager = QdrantManager()
