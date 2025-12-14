import os
import sys

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api import chat  # Changed from from src.api import chat, users

# Add the 'src' directory to the Python path
sys.path.append(os.path.join(os.path.dirname(__file__), "src"))

app = FastAPI()

print("✅ Backend running")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.options("/{path:path}")
async def preflight_handler(path: str):
    return {}


app.include_router(chat.router, prefix="/api/v1")
# app.include_router(users.router, prefix="/api/v1/users") # users router is not yet implemented fully


@app.get("/")
async def root():
    return {"status": "ok"}
