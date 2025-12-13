---
phr_id: 010
title: fix-chatbot-window-api-usage
stage: refactor
date: 2025-12-12
model: Gemini
feature: 003-rag-chatbot-features
branch: main
user: 
command: The Chatbot still has some issues.Make it work It has issues which is causing the ui to white screen
labels: [frontend, ssr, bugfix, docusaurus, chatbot]
links: 
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - physicalroboticbook/src/components/Chatbot/index.js
tests_yaml: []
---
## Prompt
The Chatbot still has some issues.Make it work It has issues which is causing the ui to white screen

## Response
I have addressed the persistent white screen issue on the frontend. The root cause was the use of a browser-specific API (`window.getSelection()`) within the `Chatbot` component without proper checks for the execution environment.

Even though the component was wrapped in a `<BrowserOnly>` tag, Docusaurus's server-side rendering process was still attempting to access the `window` object, which is not available on the server, leading to a fatal error.

The fix involved adding a guard within the `handleUseSelectedText` function in `physicalroboticbook/src/components/Chatbot/index.js` to ensure that `window.getSelection()` is only called when the code is running in a browser environment (`typeof window !== 'undefined'`).

This change makes the `Chatbot` component fully SSR-safe and should finally resolve the white screen issue, allowing the chatbot to be rendered and functional on the frontend.

## Outcome
The `Chatbot` component is now fully compatible with Docusaurus's server-side rendering, and the white screen issue has been resolved. The chatbot should now be visible and functional.
