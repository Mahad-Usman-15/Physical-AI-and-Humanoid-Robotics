# Quickstart

This document provides a quick overview of how to get the project up and running.

## Prerequisites
- Python 3.11+
- Node.js 20.x+
- A Cohere API key
- A Qdrant Cloud account and API key
- A NeonDB account and connection string
- A Better-Auth account

## Backend Setup
1.  Navigate to the `backend` directory.
2.  Create a virtual environment: `python -m venv venv`
3.  Activate the virtual environment: `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
4.  Install the dependencies: `pip install -r requirements.txt`
5.  Create a `.env` file and add the following environment variables:
    ```
    COHERE_API_KEY=...
    QDRANT_API_KEY=...
    QDRANT_URL=...
    NEON_CONNECTION_STRING=...
    BETTER_AUTH_CLIENT_ID=...
    BETTER_AUTH_CLIENT_SECRET=...
    ```
6.  Run the backend server: `uvicorn main:app --reload`

## Frontend Setup
1.  Navigate to the `physicalroboticbook` directory.
2.  Install the dependencies: `npm install`
3.  Create a `.env` file and add the following environment variables:
    ```
    REACT_APP_API_URL=http://localhost:8000
    ```
4.  Run the frontend development server: `npm start`

## Data Ingestion
1.  Run the data ingestion script to populate the Qdrant collection with the book's content.
    ```
    python backend/scripts/ingest.py
    ```
