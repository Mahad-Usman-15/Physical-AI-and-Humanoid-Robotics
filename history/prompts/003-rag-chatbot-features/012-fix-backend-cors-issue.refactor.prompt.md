---
phr_id: 012
title: fix-backend-cors-issue
stage: refactor
date: 2025-12-12
model: Gemini
feature: 003-rag-chatbot-features
branch: main
user: 
command: the chatbt is not working showing consoleerror...
labels: [backend, bugfix, python, cors]
links: 
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - backend/src/main.py
tests_yaml: []
---
## Prompt
the chatbt is not working showing consoleerror intro:1 Access to fetch at 'http://localhost:8000/api/v1/chat' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error
chat.js:2  POST http://localhost:8000/api/v1/chat net::ERR_FAILED
...

## Response
I have identified and resolved the CORS (Cross-Origin Resource Sharing) error that was preventing the frontend from communicating with the backend.

The error was caused by a custom preflight handler (`@app.options("/{full_path:path}")`) that was added to `backend/src/main.py`. This handler was intercepting the browser's `OPTIONS` requests and returning a response without the necessary CORS headers, causing the browser to block the subsequent `POST` request.

I have fixed this by removing the custom preflight handler and relying on FastAPI's built-in `CORSMiddleware` to handle CORS requests correctly. I also explicitly added `'Content-Type'` to the `allow_headers` list to ensure that this header is permitted.

After restarting the backend server to apply these changes, the CORS error should be resolved, and the chatbot should be able to communicate with the backend without any issues.

## Outcome
The backend server is now correctly configured to handle CORS requests from the frontend. The chatbot should now be fully functional.
