from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.services.rag import get_rag_response

router = APIRouter()


class ChatRequest(BaseModel):
    message: str
    context: Optional[str] = None


class ChatResponse(BaseModel):
    response: str


@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """
    Handles chat requests from the frontend.
    Expects JSON: { "message": "...", "context": "..." }
    Responds with JSON: { "response": "..." }
    """
    try:
        # Call the RAG pipeline
        response_text = await get_rag_response(
            query=request.message, context=request.context
        )

        return ChatResponse(response=response_text)

    except Exception as e:
        # Print error for debugging
        print("❌ Chat endpoint failed:", e)

        # Return generic 500 so frontend doesn’t see raw trace
        raise HTTPException(
            status_code=500,
            detail="Internal server error while generating chat response",
        )
