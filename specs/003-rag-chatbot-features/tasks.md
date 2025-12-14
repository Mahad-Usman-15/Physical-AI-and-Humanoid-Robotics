# Tasks: RAG-based Intelligent Chatbot and Interactive Book Features

**Input**: Design documents from `specs/003-rag-chatbot-features/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 [P] Create `backend` directory with `src` and `tests` subdirectories.
- [X] T002 [P] Initialize Python project in `backend` with `uv`.
- [X] T003 [P] Install FastAPI and other dependencies in `backend`.
- [X] T004 [P] Set up `pre-commit` hooks for linting and formatting in `backend`.
- [X] T005 [P] Create a basic "hello world" FastAPI app in `backend/src/main.py`.
- [X] T006 [P] Install dependencies for `physicalroboticbook` with `npm install`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [X] T007 Set up database connection to NeonDB in `backend/src/database.py`.
- [X] T008 Set up Qdrant client and connection in `backend/src/qdrant.py`.
-   [X] T009 [P] Set up Cohere API client in `backend/src/cohere_client.py`.
- [] T010 [P] Implement Better-Auth integration in `backend/src/auth.py`.
- [X] T011 Create a data ingestion script `backend/scripts/ingest.py` to process markdown files, generate embeddings, and store them in Qdrant.

---

## Phase 3: User Story 1 - Ask Questions about the Book (Priority: P1) 🎯 MVP

**Goal**: Implement the core RAG chatbot functionality.

**Independent Test**: A user can open the chatbot UI, ask a question, and receive an answer from the book's content.

### Implementation for User Story 1
- [X] T012 [P] [US1] Create a `Chatbot` React component in `physicalroboticbook/src/components/Chatbot/index.js`.
- [X] T013 [US1] Add the `Chatbot` component to the Docusaurus layout.
- [X] T014 [US1] Implement the chatbot UI with a chat window, input field, and send button.
- [X] T015 [P] [US1] Create a `chat` service in `physicalroboticbook/src/services/chat.js` to make API calls to the backend.
- [X] T016 [US1] Implement the `/chat` endpoint in `backend/src/api/chat.py`.
- [X] T017 [US1] Implement the RAG pipeline logic in `backend/src/services/rag.py`.
- [X] T018 [US1] The `/chat` endpoint should use the RAG service to get answers.
- [X] T019 [US1] The frontend should display the chatbot's response.
- [X] T020 [US1] Implement handling of selected text as context for questions.

---

## Phase 4: User Story 2 - User Authentication (Priority: P2)

**Goal**: Implement user authentication using Better-Auth.

**Independent Test**: A user can sign up, log in, and see their authenticated status.

### Implementation for User Story 2
- [X] T021 [P] [US2] Create an `Auth` React component in `physicalroboticbook/src/components/Auth/index.js` for "Sign In" and "Sign Out" buttons.
- [X] T022 [US2] Add the `Auth` component to the Docusaurus header.
- [X] T023 [P] [US2] Implement the frontend logic for handling authentication with Better-Auth.
- [] T024 [P] [US2] Create a `/users/me` endpoint in `backend/src/api/users.py` to return the current user's profile.
- [ ] T025 [US2] Protect the `/personalize` and `/translate` endpoints with Better-Auth authentication middleware in the FastAPI backend.
- [ ] T026 [P] [US2] Create a `users` table in NeonDB to store user profiles.
- [ ] T027 [US2] Implement logic to save user profile information upon signup.

---

## Phase 5: User Story 3 - Content Personalization and Translation (Priority: P3)

**Goal**: Implement content personalization and translation features for authenticated users.

**Independent Test**: A logged-in user can click the "Personalize" or "Translate" buttons and see the chapter content update accordingly.

### Implementation for User Story 3
- [X] T028 [P] [US3] Add "Personalize Chapter" and "Translate Chapter to Urdu" buttons to the chapter UI in `physicalroboticbook`.
- [ ] T029 [US3] The buttons should only be visible to authenticated users.
- [ ] T030 [P] [US3] Implement the `/personalize` endpoint in `backend/src/api/personalize.py`.
- [ ] T031 [P] [US3] Implement the `/translate` endpoint in `backend/src/api/translate.py`.
- [ ] T032 [US3] The `/personalize` endpoint should use the Cohere API to rewrite the chapter content.
- [ ] T033 [US3] The `/translate` endpoint should use the Cohere API to translate the chapter content.
- [ ] T034 [P] [US3] Create services in `physicalroboticbook/src/services/` to call the new endpoints.
- [ ] T035 [US3] The frontend should update the chapter content with the response from the API.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [ ] T036 [P] Add comprehensive error handling and logging to the backend.
- [ ] T037 [P] Add loading indicators to the frontend for all asynchronous operations.
- [ ] T038 [P] Improve the styling of the chatbot and other new UI elements.
- [ ] T039 Write end-to-end tests for the main user flows.
- [ ] T040 Review and update all documentation.

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3-5)**: Depend on Foundational completion.
- **Polish (Phase N)**: Depends on all user stories being complete.

### User Story Dependencies
- **User Story 1 (P1)**: Depends on Phase 2.
- **User Story 2 (P2)**: Depends on Phase 2.
- **User Story 3 (P3)**: Depends on Phase 4 (User Story 2).
