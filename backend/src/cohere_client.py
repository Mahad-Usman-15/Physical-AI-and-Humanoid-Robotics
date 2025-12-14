from cohere import Client
from pydantic_settings import BaseSettings, SettingsConfigDict


# --- Configuration ---
class Settings(BaseSettings):
    COHERE_API_KEY: str

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()


# --- Cohere Client Setup ---
class CohereManager:
    def __init__(self):
        self.client = Client(settings.COHERE_API_KEY)

    def get_client(self) -> Client:
        return self.client


# --- Dependency to get Cohere client ---
def get_cohere_client() -> Client:
    manager = CohereManager()
    return manager.get_client()


# --- Manual Test ---
if __name__ == "__main__":
    print("Initializing Cohere client...")

    try:
        cohere_manager = CohereManager()
        client = cohere_manager.get_client()
        print("✅ Cohere client initialized successfully.")
    except Exception as e:
        print(f"❌ Failed to initialize Cohere client: {e}")
