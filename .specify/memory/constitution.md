<!-- Sync Impact Report:
Version change: 0.0.0 -> 1.0.0
List of modified principles: All principles are new based on user input.
Added sections: Technical Constraints & Non-Negotiables
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated (will be checked and updated in subsequent steps)
- .specify/templates/spec-template.md: ✅ updated (will be checked and updated in subsequent steps)
- .specify/templates/tasks-template.md: ✅ updated (will be checked and updated in subsequent steps)
- .specify/templates/commands/*.md: ✅ updated (will be checked and updated in subsequent steps)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): Not explicitly provided by the user.
-->
# Physical AI & Humanoid Robotics Learning Portal Constitution

## Core Principles

### Spec-Driven Development
No coding until the specification is finalized. All development must adhere to the defined specification.

### Extensibility
The Docusaurus-based book must be designed to expand easily with new modules, chapters, and content without significant refactoring.

### Autonomy
The Integrated RAG Chatbot must be capable of autonomously answering questions using selected text from the portal content.

### Privacy
User data must be stored securely using Better-Auth and NeonDB, adhering to strict privacy best practices.

### Transparency
Every chapter within the learning portal must include a ‘Personalize’ button and a ‘Translate to Urdu’ button for enhanced user experience.

### Performance
Vector search functionality must leverage Qdrant Cloud for high-performance and efficient retrieval-augmented generation.

### OpenAI Ecosystem First
Prioritize the use of OpenAI Agents and ChatKit SDK for intelligent functionalities and chatbot integration.

### Zero Friction Deployment
The project must implement a CI/CD pipeline where a push to the main branch automatically triggers a GitHub Pages build for autonomous deployment.

## Technical Constraints & Non-Negotiables

*   **Book Framework:** Must be written using Docusaurus + Spec-Kit-Plus build system.
*   **Hosting:** GitHub Pages.
*   **RAG Chatbot:** Must utilize OpenAI Agents.
*   **Vector Database:** Qdrant Cloud Free Tier.
*   **Backend Framework:** FastAPI.
*   **User Authentication:** Better-Auth.
*   **Database:** Neon Serverless Postgres.
*   **Personalization:** Must include checks for background-based personalization.

## Governance
This constitution supersedes all other project practices and documentation. Amendments to this constitution require thorough documentation, explicit approval from stakeholders, and a clear migration plan for any affected systems or processes. All Pull Requests and code reviews must verify compliance with the principles outlined herein. Complexity in design or implementation must be explicitly justified and align with the core principles.

**Version**: 1.0.0 | **Ratified**: 2025-04-04 | **Last Amended**: 2025-12-04
