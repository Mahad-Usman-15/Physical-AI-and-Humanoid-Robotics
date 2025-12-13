# Feature Specification: AI-Powered Book Platform

**Feature Branch**: `1-book-ai-platform`
**Created**: 2025-12-04
**Status**: Draft
**Input**: User description: "A. Functional Specification
1. Book Development
Use Docusaurus
Auto-generated structure using Spec-Kit Plus
Chapters covering:
Physical AI
Humanoid Robotics
ROS2
Gazebo
NVIDIA Isaac
VLA robotics
Hardware requirements
Cloud vs On-prem lab
2. RAG Chatbot
Chatbot must:
Process all book markdown files
Answer questions about the content
When user selects text → answer using ONLY selected text
Provide citations
Use OpenAI Agents + ChatKit SDK
Use Qdrant for vector storage
Use NeonDB for metadata
Live embed inside UI (floating widget or sidebar widget)
3. User Authentication
Using Better-Auth:
Signup page asks:
Programming background
Hardware owned
GPU availability
Linux familiarity
User info saved in NeonDB
Logged-in user sees a profile panel
Personalization uses the stored attributes
4. Personalization Button
At the top of each chapter:
Button: "Personalize Chapter for Me"
When clicked:
Send user profile + chapter markdown to Agent Skill
Rewrite the chapter for:
Difficulty level
Hardware context
Learning speed
5. Urdu Translation Button
At the top of each chapter:
Button: "Translate to Urdu"
Uses an Agent Skill to:
Translate markdown while preserving:
Code blocks
Tables
Headings
Docusaurus MDX components
6. Subagents & Agent Skills
Required Subagents:
BookGeneratorAgent – Writes book content
PersonalizerAgent – Rewrites chapters based on user profile
TranslatorAgent – Urdu translations
RAGRetrieverAgent – Handles chunking + embeddings
AuthAgent – Manages Better-Auth integration
DeploymentAgent – Ensures CI/CD consistency
7. Deployment
GitHub Actions pipelinenstall Node & Python
Build Docusaurus
Deploy to GitHub Pages
Deploy backend (FastAPI) → Railway /render.com"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Book Content (Priority: P1)

A user wants to read a technical chapter of the book to learn about a specific AI/Robotics topic.

**Why this priority**: Core functionality of the platform - without content access, other features are irrelevant.

**Independent Test**: User can navigate to any chapter (e.g., "Physical AI"), view its content rendered correctly, and scroll through without issues.

**Acceptance Scenarios**:

1.  **Given** a user opens the book platform, **When** they select a chapter (e.g., "ROS2"), **Then** the chapter content is displayed accurately and completely.
2.  **Given** a user is viewing a chapter, **When** they navigate to another chapter, **Then** the new chapter's content loads swiftly.

---

### User Story 2 - Get Chapter-Specific Answers (Priority: P1)

A user wants to ask questions about the current chapter they are reading and receive accurate, cited answers.

**Why this priority**: Essential for learning and understanding, directly addresses knowledge acquisition.

**Independent Test**: A user can open a chapter, ask a question relevant to its content, and receive a correct answer with citations, or select text within the chapter and get an answer based only on that selection.

**Acceptance Scenarios**:

1.  **Given** a user is viewing a chapter with the RAG Chatbot embedded, **When** they type a question about the chapter's content, **Then** the chatbot provides a relevant answer with citations from the book.
2.  **Given** a user is viewing a chapter, **When** they select a specific passage of text and ask a question, **Then** the chatbot provides an answer using only the selected text and includes citations.

---

### User Story 3 - Personalize Learning Experience (Priority: P2)

A user wants to personalize the content of a chapter to match their specific background, hardware, and learning preferences.

**Why this priority**: Enhances user engagement and caters to individual learning needs, a key differentiator.

**Independent Test**: A user can create a profile, then click the "Personalize Chapter for Me" button on any chapter, and see the chapter content rewritten to suit their profile attributes (e.g., simpler language for beginner, specific hardware context).

**Acceptance Scenarios**:

1.  **Given** a user is logged in with a completed profile, **When** they click "Personalize Chapter for Me" on a chapter, **Then** the chapter is rewritten based on their profile (e.g., programming background, hardware owned, learning speed).
2.  **Given** a personalized chapter is displayed, **When** the user's profile attributes change, **Then** subsequent personalization requests reflect the updated profile.

---

### User Story 4 - Translate Chapter Content (Priority: P2)

An Urdu-speaking user wants to translate a chapter's content into Urdu while maintaining formatting.

**Why this priority**: Increases accessibility for a specific user segment, broadening the platform's reach.

**Independent Test**: A user can click the "Translate to Urdu" button on any chapter and see the chapter content translated into Urdu, with all code blocks, tables, and headings preserved and Docusaurus MDX components correctly rendered.

**Acceptance Scenarios**:

1.  **Given** a user is viewing an English chapter, **When** they click "Translate to Urdu", **Then** the entire chapter content is displayed in Urdu, with original formatting (code blocks, tables, headings, MDX) intact.
2.  **Given** a chapter has been translated, **When** the user switches back to English, **Then** the original English content is restored accurately.

---

### User Story 5 - User Account Management (Priority: P3)

A user wants to create an account, manage their profile, and have their preferences used for personalization.

**Why this priority**: Enables personalization and secures user-specific data, foundational for advanced features.

**Independent Test**: A user can sign up, provide their programming background, hardware details, GPU availability, and Linux familiarity, log in, view their profile, and see their stored attributes used for content personalization.

**Acceptance Scenarios**:

1.  **Given** a new user, **When** they visit the signup page, **Then** they are prompted for programming background, hardware owned, GPU availability, and Linux familiarity, and their information is saved upon submission.
2.  **Given** a user is logged in, **When** they navigate to their profile, **Then** their stored attributes are displayed correctly.
3.  **Given** a user updates their profile information, **When** they save changes, **Then** the updates are reflected in their personalization experience.

---

### Edge Cases

-   What happens when a book markdown file is malformed? The RAG chatbot should gracefully handle errors and either indicate it cannot process the file or skip it, without crashing.
-   How does the system handle an unsupported language for translation? The "Translate to Urdu" button should only be active for supported languages, or provide an error message if an unsupported target language is implicitly requested.
-   What if an agent skill fails during personalization or translation? The system should revert to the original content and inform the user of the failure.
-   What happens if a user tries to personalize a chapter without a complete profile? The system should prompt the user to complete their profile first.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**:  The system MUST create a root directory named physicalroboticbook.
-   **FR-002**: The platform MUST automatically generate the book structure using Spec-Kit Plus principles.
-   **FR-003**: The book content MUST cover topics including Physical AI, Humanoid Robotics, ROS2, Gazebo, NVIDIA Isaac, VLA robotics, Hardware requirements, Cloud vs On-prem lab, and Hackathon tasks.
-   **FR-004**: The system MUST include a minimal, standard Docusaurus v3 configuration in docusaurus.config.js and package.json for immediate GitHub Pages deployment..
- **FR-005**:The system MUST create dedicated top-level folders for specs/, docs/chapters/, docs/assets/images/, docs/assets/files/, and backend/.

-   **FR-006**: The RAG Chatbot MUST answer user questions about the book's content.
-   **FR-007**: The RAG Chatbot MUST provide answers based ONLY on selected text when a user highlights content.
-   **FR-008**: The RAG Chatbot MUST provide citations for its answers from the book content.
-   **FR-009**: The platform MUST integrate user authentication via Better-Auth.
-   **FR-010**: The signup process MUST collect programming background, hardware owned, GPU availability, and Linux familiarity.
-   **FR-011**: User profile information MUST be saved to NeonDB.
-   **FR-012**: Logged-in users MUST have access to a profile panel displaying their attributes.
-   **FR-013**: The platform MUST offer a "Personalize Chapter for Me" button at the top of each chapter.
-   **FR-014**: Clicking the personalization button MUST send the user's profile and chapter markdown to a PersonalizerAgent Skill.
-   **FR-015**: The PersonalizerAgent Skill MUST rewrite the chapter content based on difficulty level, hardware context, and learning speed.
-   **FR-016**: The platform MUST offer a "Translate to Urdu" button at the top of each chapter.
-   **FR-017**: Clicking the translation button MUST use a TranslatorAgent Skill.
-   **FR-018**: The TranslatorAgent Skill MUST translate markdown to Urdu while preserving code blocks, tables, headings, and Docusaurus MDX components.
-   **FR-019**:The system MUST create placeholder files for bonus features: src/pages/_bonus_auth.js, src/pages/_bonus_personalization.js, src/pages/_bonus_urdu.js.
-   **FR-020**: The deployment process MUST include a GitHub Actions pipeline.
-   **FR-021**: The GitHub Actions pipeline MUST install Node & Python, build Docusaurus, and deploy to GitHub Pages.
-   **FR-022**: The backend (FastAPI) MUST be deployed to Railway or Render.com.
- **FR-023**:The system must not focus on implementing any backend requirements before completing phase 1 of creating book.



### Key Entities *(include if feature involves data)*
- **Project Structure**: The hierarchical arrangement of files and directories.
-   **User**: Represents an individual interacting with the platform. Key attributes include programming background, hardware owned, GPU availability, and Linux familiarity.
- **Docusaurus Configuration**: Files (docusaurus.config.js, package.json, etc.) that define the behavior and appearance of the Docusaurus site.
Content Folders: Directories (docs/chapters/, docs/assets/) designated for textbook content and associated media.
-   **Chapter**: A section of the book content, typically in markdown format, that can be displayed, personalized, and translated.
- **Content Folders**: Directories (docs/chapters/, docs/assets/) designated for textbook content and associated media.
-   **User Profile**: Stores personalization attributes associated with a User, used by the PersonalizerAgent.
-   **Book Content**: The collection of all chapters and associated assets.
-   **Chatbot Query**: User's input question to the RAG Chatbot.
-   **Chatbot Response**: The RAG Chatbot's answer, including citations.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: 99% of book chapters are displayed accurately and load within 3 seconds for users.
- **SC-002**:The generated file structure is immediately compatible with Docusaurus v3, as confirmed by successful initialization commands (e.g., npm install and npm start should execute without structure-related errors, though content will be empty).
-   **SC-003**: The RAG Chatbot provides relevant and cited answers to a predefined set of 20 questions with 90% accuracy.
-   **SC-004**: Personalized chapters are generated and displayed within 5 seconds of a user clicking the "Personalize Chapter for Me" button.
-   **SC-005**: Urdu translations of chapters are generated within 5 seconds and maintain 100% of the original markdown formatting.
-   **SC-006**: User signup and login processes complete within 10 seconds.
-   **SC-007**: 95% of users report satisfaction with the personalization feature's relevance to their profile.
-   **SC-008**: The GitHub Actions pipeline for frontend deployment completes successfully 99% of the time.
-   **SC-009**: The backend deployment to Railway/Render.com completes successfully 99% of the time.
