from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api import chat, users

app = FastAPI()

print("✅ Backend running")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://physical-ai-and-humanoid-robotics-red.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.options("/{path:path}")
async def preflight_handler(path: str):
    return {}

app.include_router(chat.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1/users")

@app.get("/")
async def root():
    return {"status": "ok"}
