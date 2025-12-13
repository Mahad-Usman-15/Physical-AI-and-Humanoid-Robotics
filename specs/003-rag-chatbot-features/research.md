# Research Plan: RAG Chatbot and Interactive Features

This document outlines the key research tasks required to resolve ambiguities and define the technical approach for implementing the RAG chatbot and interactive book features.

## Phase 0 Research Tasks

### 1. URL Content Ingestion

**Task**: Research and decide on a robust method to scrape, clean, and chunk text content from the provided live URLs (`https://physical-ai-and-humanoid-robotics-red.vercel.app` and its sitemap) for ingestion into the Qdrant vector database.

**Questions to Answer**:
- What are the best Python libraries for web scraping and content extraction (e.g., BeautifulSoup, Scrapy, Playwright)?
- How can we use the sitemap.xml to discover all relevant content pages?
- What is the most effective way to clean the scraped HTML to extract only the main textual content, excluding headers, footers, and navigation?
- What chunking strategy (e.g., recursive character splitting, semantic chunking) should be used to prepare the text for embedding?

**Decision**: TBD
**Rationale**: TBD
**Alternatives considered**: TBD

### 2. Docusaurus-FastAPI Integration

**Task**: Investigate best practices for integrating a React-based Docusaurus frontend with a separate FastAPI backend.

**Questions to Answer**:
- How should Cross-Origin Resource Sharing (CORS) be configured in FastAPI to allow requests from the Docusaurus frontend?
- What is the best way to manage environment variables for the backend API URL in the Docusaurus project?
- How will the frontend authenticate with the backend? (To be answered in conjunction with Better-Auth research).
- Are there any recommended patterns for creating API service layers in a React application to communicate with the backend?

**Decision**: TBD
**Rationale**: TBD
**Alternatives considered**: TBD

### 3. Cohere RAG Implementation

**Task**: Research the latest documentation and examples for implementing a RAG pipeline using the Cohere models.

**Questions to Answer**:
- What are the specific functions and classes within the Cohere SDK that facilitate RAG?
- How can we implement response streaming to the frontend for a better user experience with Cohere?
- What is the recommended approach for including citations/sources in the chatbot's responses when using Cohere?
- How can the RAG pipeline be conditioned to search over the entire book vs. only a user-selected portion of text using Cohere?

**Decision**: TBD
**Rationale**: TBD
**Alternatives considered**: TBD

### 4. Better-Auth Integration

**Task**: Document the step-by-step process for integrating Better-Auth with the Docusaurus frontend and FastAPI backend.

**Questions to Answer**:
- What is the exact OAuth/OIDC flow for Better-Auth?
- How does the frontend receive and store the authentication token?
- How should the FastAPI backend validate the token received from the frontend?
- How is user profile information (programming background, etc.) retrieved from Better-Auth after signup?

**Decision**: TBD
**Rationale**: TBD
**Alternatives considered**: TBD

### 5. Content Personalization & Translation Strategy

**Task**: Outline a technical strategy for the "Personalize Chapter" and "Translate Chapter to Urdu" features.

**Questions to Answer**:
- Which specific LLM models are best suited for content personalization (taking user background into account) and translation to Urdu?
- What prompt engineering techniques will be most effective for these tasks?
- How should the personalized or translated content be managed? Should it be cached in the database, or generated on-the-fly?
- What are the potential costs and performance implications of these features?

**Decision**: TBD
**Rationale**: TBD
**Alternatives considered**: TBD