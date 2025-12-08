# Project Plan: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-book-ai-platform`
**Status**: Final
**Confidence**: High

## 1. Project Blueprint

### 1.1. Architecture Overview

This project will create a Docusaurus v3-based textbook on "Physical AI & Humanoid Robotics." The platform will feature a modular structure, AI-assisted writing and learning tools, and a clear separation of concerns between the frontend and backend.

- **Frontend**: Docusaurus v3 site for content, React components for interactive elements, and static pages.
- **Backend**: FastAPI application providing API for personalization, translation, and RAG chatbot.
- **AI/ML**: OpenAI Agents and Qdrant for RAG, and custom agent skills for content generation and manipulation.
- **Database**: NeonDB for user data and metadata.

### 1.2. Folder Structure

```
/
├── .docusaurus/
├── backend/
│   ├── auth/
│   ├── rag/
│   ├── user/
│   ├── skills/
│   ├── utils/
│   └── main.py
├── docs/
│   ├── intro.md
│   ├── capstone/
│   │   └── humanoid-project.md
│   └── modules/
│       ├── module-1-ros2/
│       │   ├── chapter-1.md
│       │   └── chapter-2.md
│       ├── module-2-simulation/
│       │   ├── chapter-1.md
│       │   └── chapter-2.md
│       ├── module-3-nvidia-isaac/
│       │   ├── chapter-1.md
│       │   └── chapter-2.md
│       ├── module-4-vla/
│       │   ├── chapter-1.md
│       │   └── chapter-2.md
│       └── _category_.json
├── src/
│   ├── components/
│   │   ├── PersonalizationButton/
│   │   └── UrduTranslationButton/
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.js
├── static/
│   └── img/
├── docusaurus.config.js
├── package.json
└── sidebars.js
```

### 1.3. Implementation Phases

| Phase | Description | Key Deliverables | Dependencies |
|---|---|---|---|
| **Phase 1: Book Creation** | Complete Docusaurus v3 setup, establish chapter and module structure with placeholder content, and implement basic GitHub Pages deployment workflow. | Docusaurus site, placeholder content, basic deployment. | --- |
| **Phase 2: Backend & Intelligence Layer** | Set up FastAPI backend, integrate Neon (Postgres) and Qdrant (vector database), develop RAG query processing logic, implement user authentication, personalization, and translation features. | FastAPI backend, Neon & Qdrant integration, RAG query endpoint, User auth, personalization feature, translation feature. | Phase 1 must be complete. |
| **Phase 3: Testing & Deployment Refinement** | Comprehensive testing of all features (RAG accuracy, personalization, translation). WCAG accessibility testing. Refine GitHub Pages deployment for robustness. | Test plan, bug fixes, optimized deployment. | --- |

## 2. Task Breakdown

### Phase 1: Book Creation

| Task ID | Description | FR Mapping |
|---|---|---|
| 1.1 | Initialize Docusaurus v3 project | FR-001, FR-004 |
| 1.2 | Create folder structure for docs, chapters, and assets | FR-005 |
| 1.3 | Generate placeholder content for all chapters | FR-003 |
| 1.4 | Configure `docusaurus.config.js` and `sidebars.js` | FR-004 |
| 1.5 | Set up GitHub Actions for deploying to GitHub Pages | FR-020, FR-021 |
| 1.6 | Create placeholder files for bonus features | FR-019 |

### Phase 2: Backend & Intelligence Layer

| Task ID | Description | FR Mapping |
|---|---|---|
| 2.1 | Set up FastAPI backend | FR-022 |
| 2.2 | Integrate NeonDB for user data | FR-011 |
| 2.3 | Integrate Qdrant for vector storage | N/A |
| 2.4 | Implement RAG query processing logic | FR-006, FR-007, FR-008 |
| 2.5 | Implement user authentication with Better-Auth | FR-009, FR-010, FR-012 |
| 2.6 | Implement personalization feature with PersonalizerAgent | FR-013, FR-014, FR-015 |
| 2.7 | Implement translation feature with TranslatorAgent | FR-016, FR-017, FR-018 |

### Phase 3: Testing & Deployment Refinement

| Task ID | Description | SC Mapping |
|---|---|---|
| 3.1 | Test book chapter display and loading speed | SC-001 |
| 3.2 | Test Docusaurus v3 compatibility | SC-002 |
| 3.3 | Test RAG chatbot accuracy | SC-003 |
| 3.4 | Test personalization and translation generation speed | SC-004, SC-005 |
| 3.5 | Test user authentication and profile management | SC-006 |
| 3.6 | Conduct user satisfaction survey for personalization | SC-007 |
| 3.7 | Test GitHub Actions deployment pipeline | SC-008, SC-009 |
| 3.8 | Perform WCAG accessibility testing | N/A |

### 2.1. Content Structure

- **Modules**: Top-level categories (e.g., ROS 2, Simulation).
- **Chapters**: Specific topics within a module (e.g., ROS 2 Fundamentals, Gazebo).
- **Topics**: Sub-sections within a chapter.

### 2.2. AI-Assisted Writing

- **BookGeneratorAgent**: A subagent responsible for generating draft content for chapters based on outlines.
- **Content Review Workflow**:
    1. Human expert provides an outline for a chapter.
    2. `BookGeneratorAgent` generates the markdown content.
    3. Human expert reviews, edits, and approves the content.

### 2.3. RAG Integration

1. **Indexing**: All markdown files in `/docs` are chunked, embedded, and stored in a Qdrant vector database.
2. **Retrieval**: When a user asks a question, the `RAGRetrieverAgent` retrieves the most relevant chunks of text from Qdrant.
3. **Generation**: The retrieved chunks are passed to an OpenAI Agent, which generates an answer with citations.

## 3. Consistency and Style Guide

- **Writing Style**: Clear, concise, and targeted at the specified audience.
- **Glossary**: A central glossary will be maintained in `/docs/glossary.md`.
- **Diagrams**: All diagrams will be created using a consistent tool (e.g., Mermaid.js) and stored in `/static/img`.
- **Code Samples**: All code samples will be formatted and tested for correctness.

## 4. System Prompts & Agent Responsibilities

- **`BookGeneratorAgent`**: "You are an expert technical writer. Generate a chapter on {topic} based on the following outline: {outline}."
- **`PersonalizerAgent`**: "You are a personalized learning assistant. Rewrite the following chapter for a user with {profile}: {chapter_content}."
- **`TranslatorAgent`**: "You are a professional translator. Translate the following markdown content to Urdu, preserving all formatting: {markdown_content}."
- **`RAGRetrieverAgent`**: "You are a helpful chatbot. Answer the user's question based on the following text: {retrieved_chunks}."

## 5. Docusaurus v3 Alignment

- **Routing**: Utilize Docusaurus v3's file-system-based routing.
- **MDX**: Use MDX for interactive components within chapters.
- **Versioning**: Use Docusaurus's built-in versioning for future updates.
- **Theming**: Customize the theme using `/src/css/custom.css` and swizzling.

## 6. Publishing Pipeline

1. **Commit**: All changes are committed to the `1-book-ai-platform` branch.
2. **Pull Request**: A pull request is created to merge changes into `main`.
3. **CI/CD**: A GitHub Actions workflow is triggered on merge to `main`:
    - Installs Node.js and Python.
    - Builds the Docusaurus site.
    - Deploys the site to GitHub Pages.
    - Deploys the FastAPI backend to Railway.
