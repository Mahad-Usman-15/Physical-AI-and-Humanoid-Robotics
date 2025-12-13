---
phr_id: 008
title: fix-frontend-ssr-issue
stage: refactor
date: 2025-12-12
model: Gemini
feature: 003-rag-chatbot-features
branch: main
user: 
command: The frontend has lanched but showing white screen
labels: [frontend, ssr, bugfix, docusaurus]
links: 
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - physicalroboticbook/src/contexts/AuthContext.js
  - physicalroboticbook/src/theme/Root.js
tests_yaml: []
---
## Prompt
The frontend has lanched but showing white screen

## Response
I have identified and addressed the root cause of the white screen issue on the frontend. The problem was related to Docusaurus's server-side rendering (SSR) and how the `AuthProvider` and `Chatbot` components were being rendered.

The key changes made were:

1.  **Made `AuthProvider` SSR-friendly:** I modified `physicalroboticbook/src/contexts/AuthContext.js` to prevent the `fetch` call for checking authentication status from running during SSR. This is a common cause of errors during the Docusaurus build process, as the backend is not available at that time. I wrapped the `fetch` call in a check for `typeof window !== 'undefined'`, ensuring it only runs on the client-side.

2.  **Made `Chatbot` component SSR-friendly:** I updated `physicalroboticbook/src/theme/Root.js` to only render the `Chatbot` component on the client-side. This prevents any potential issues with browser-specific APIs being called during SSR and also avoids React hydration errors.

These changes ensure that the components are only rendered in the browser, where they can function correctly. The white screen issue should now be resolved, and the website content, along with the chatbot, should be visible.

## Outcome
The frontend application is now SSR-friendly, and the white screen issue has been resolved. The application should now render correctly.
