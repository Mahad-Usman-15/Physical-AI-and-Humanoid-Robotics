# Tasks: UI/UX and Styling Enhancement

**Input**: Design documents from `specs/ui-ux-revamp/`
**Prerequisites**: plan.md, spec.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure the development environment is ready.

- [x] T001 Navigate to the `physicalroboticbook` directory and run `npm install` to ensure all dependencies are present.

---

## Phase 2: Foundational Styling (Blocking Prerequisites)

**Purpose**: Establish the core styling foundation for the new theme.

- [x] T002 Create the global stylesheet at `physicalroboticbook/src/css/custom.css`.
- [x] T003 Define the new blue/dark-blue color palette, gradients, and soft shadow styles as CSS variables in `physicalroboticbook/src/css/custom.css`.
- [x] T004 Import the `custom.css` stylesheet into the Docusaurus application via `physicalroboticbook/src/pages/_app.js` or the appropriate entry point.

---

## Phase 3: User Story 1 - Visual and Interactive Polish 🎯 MVP

**Goal**: Implement the full visual and interactive overhaul of the website as per the specification.

**Independent Test**: The entire website can be visually inspected on desktop and mobile to confirm the new theme is applied consistently and all animations are working, without any change in functionality.

### Implementation for User Story 1

- [x] T005 [P] [US1] Apply the new gradient and shadow styling to all button components site-wide in `physicalroboticbook/src/css/custom.css`.
- [x] T006 [P] [US1] Implement button hover animations (scale-up, glow effect) using CSS transitions in `physicalroboticbook/src/css/custom.css`.
- [x] T007 [US1] Swizzle the Docusaurus `Layout` and `Root` components to `physicalroboticbook/src/theme/` to allow for homepage customization.
- [x] T008 [US1] Redesign the homepage hero section within the swizzled components to have a two-column layout and a full-width gradient background.
- [ ] T009 [P] [US1] Style all card-like components (e.g., for blog posts, doc sections) with the new border, shadow, and rounded corner styles in `physicalroboticbook/src/css/custom.css`.
- [x] T010 [P] [US1] Implement the new homepage sections ("Why Physical AI?", "What You’ll Learn", etc.) as static React components inside the swizzled homepage structure.
- [x] T011 [P] [US1] Add a "Ready to Read..." banner component to the bottom of the homepage.
- [x] T012 [P] [US1] Implement a smooth scroll-reveal animation for homepage sections using CSS and the Intersection Observer API if needed.
- [x] T013 [US1] Identify and swizzle the Chatbot trigger component used in the project.
- [x] T014 [US1] Style the swizzled Chatbot trigger with the new gradient theme and add the "Ask AI" text above it.
- [x] T015 [P] [US1] Style the Chatbot window to be mobile-responsive and implement the three-dot loading animation via CSS.
- [x] T016 [P] [US1] Create the new Login page at `physicalroboticbook/src/pages/login.js` with a centered card layout.
- [x] T017 [P] [US1] Create the new Signup page at `physicalroboticbook/src/pages/signup.js` with a centered card layout consistent with the theme.
- [x] T018 [US1] Swizzle the Docusaurus `Footer` component to `physicalroboticbook/src/theme/Footer`.
- [x] T019 [US1] Rebuild the footer in the swizzled component to match the new blue theme, include the Modules list, and use a clean grid layout.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and quality checks.

- [x] T020 [US1] Conduct a full visual review of the deployed site on desktop (Chrome, Firefox, Safari) to ensure consistency and adherence to the spec.
- [x] T021 [US1] Conduct a full visual review on common tablet and mobile screen sizes to ensure responsiveness.
- [x] T022 [US1] Run a Lighthouse audit on the key pages (Homepage, Docs page) and verify that Performance and Accessibility scores have not degraded by more than 5%.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed first.
- **Phase 2 (Foundational Styling)** depends on Phase 1. It blocks all other styling work.
- **Phase 3 (User Story 1)** depends on Phase 2. Many tasks within this phase are marked `[P]` and can be worked on in parallel, but it is recommended to work component-by-component (e.g., all button tasks, then all hero tasks).
- **Phase 4 (Polish)** depends on the completion of all tasks in Phase 3.

---

## Implementation Strategy

### MVP First (Complete UI Revamp)

1.  Complete Phase 1 & 2 to set the foundation.
2.  Implement all tasks in Phase 3 for User Story 1. This represents the full scope of the feature.
3.  Complete Phase 4 for verification.
4.  The MVP is the fully styled website.
