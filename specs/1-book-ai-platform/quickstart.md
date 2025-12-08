# Quickstart Guide: AI-Powered Book Platform

This guide provides instructions to set up and run the AI-Powered Book Platform locally.

## 1. Prerequisites

Ensure you have the following installed:

-   **Node.js**: v18.x or later (for Docusaurus frontend)
-   **Python**: v3.9 or later (for FastAPI backend)
-   **Git**

## 2. Clone the Repository

```bash
git clone <repository-url>
cd book
```

## 3. Backend Setup (FastAPI)

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2.  **Install Python dependencies (using Poetry)**:
    ```bash
    poetry install
    ```

3.  **Database Setup (NeonDB / PostgreSQL)**:
    -   Create a NeonDB project and obtain your connection string.
    -   Alternatively, for local development, you can run a PostgreSQL container via Docker:
        ```bash
        docker run --name local-postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=book_db -p 5432:5432 -d postgres:14
        ```

4.  **Vector Database Setup (Qdrant)**:
    -   Sign up for Qdrant Cloud and get your API key and URL.
    -   Alternatively, for local development, run a Qdrant container via Docker:
        ```bash
        docker run --name local-qdrant -p 6333:6333 -p 6334:6334 -d qdrant/qdrant
        ```

5.  **Environment Variables**: Create a `.env` file in the `backend/` directory based on a `.env.example` (which should be provided in the repository) with:
    -   `DATABASE_URL=<your-neon-db-connection-string>`
    -   `QDRANT_HOST=<qdrant-cloud-url>` (or `localhost:6333` for local Docker)
    -   `QDRANT_API_KEY=<your-qdrant-api-key>` (or leave empty for local Docker)
    -   `OPENAI_API_KEY=<your-openai-api-key>` (for RAG Chatbot and agents)
    -   `BETTER_AUTH_SECRET_KEY=<a-strong-secret-key>`
    -   `URDU_TRANSLATION_AGENT_SKILL_ID=<agent-skill-id>`
    -   `PERSONALIZATION_AGENT_SKILL_ID=<agent-skill-id>`
    -   `RAG_RETRIEVER_AGENT_SKILL_ID=<agent-skill-id>`
    -   `BOOK_GENERATOR_AGENT_SKILL_ID=<agent-skill-id>`
    -   `AUTH_AGENT_SKILL_ID=<agent-skill-id>`
    -   `DEPLOYMENT_AGENT_SKILL_ID=<agent-skill-id>`

6.  **Run Migrations** (if applicable, needs to be defined later).

7.  **Start the FastAPI backend**:
    ```bash
    poetry run uvicorn main:app --reload
    ```

## 4. Frontend Setup (Docusaurus)

1.  **Navigate to the docs directory** (or wherever Docusaurus root is):
    ```bash
    cd docs
    ```

2.  **Install Node.js dependencies**:
    ```bash
    npm install
    # or yarn install
    ```

3.  **Start the Docusaurus development server**:
    ```bash
    npm run start
    # or yarn start
    ```

    The frontend should now be accessible at `http://localhost:3000` (or similar).

## 5. Agent Skills Setup

This project relies on several Claude Code Agent Skills. You will need to deploy and configure these as per the Claude Agent SDK documentation, providing their respective IDs in the backend's `.env` file.

-   `BookGeneratorAgent`
-   `PersonalizerAgent`
-   `TranslatorAgent`
-   `RAGRetrieverAgent`
-   `AuthAgent`
-   `DeploymentAgent`

## 6. Initial Book Content Loading (for RAG)

Once the backend is running and Qdrant is accessible, there will be a mechanism (e.g., a CLI command or API endpoint) to load the initial book markdown files into Qdrant for the RAG chatbot to function. This step needs to be implemented. (NEEDS IMPLEMENTATION)

## 7. Accessing the Platform

-   Frontend: `http://localhost:3000`
-   Backend API: `http://localhost:8000/api/v1` (adjust port if different)
