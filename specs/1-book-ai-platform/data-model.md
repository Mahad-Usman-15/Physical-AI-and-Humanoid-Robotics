# Data Model: AI-Powered Book Platform

## Entities

### User
-   **Description**: Represents an individual interacting with the platform.
-   **Attributes**:
    -   `user_id`: Unique identifier for the user (Primary Key).
    -   `username`: User's chosen username (Unique).
    -   `email`: User's email address (Unique).
    -   `password_hash`: Hashed password for secure authentication.
    -   `created_at`: Timestamp of user creation.
    -   `updated_at`: Timestamp of last user update.

### User Profile
-   **Description**: Stores personalization attributes linked to a `User`.
-   **Attributes**:
    -   `profile_id`: Unique identifier for the user profile (Primary Key).
    -   `user_id`: Foreign Key referencing `User.user_id`.
    -   `programming_background`: (e.g., "beginner", "intermediate", "expert")
    -   `hardware_owned`: (e.g., "Raspberry Pi", "Jetson Nano", "High-end PC with NVIDIA GPU")
    -   `gpu_availability`: Boolean indicating GPU access.
    -   `linux_familiarity`: (e.g., "none", "basic", "proficient")
    -   `learning_speed`: (e.g., "slow", "medium", "fast")

### Chapter
-   **Description**: A section of the book content.
-   **Attributes**:
    -   `chapter_id`: Unique identifier for the chapter (Primary Key).
    -   `title`: Title of the chapter.
    -   `content_markdown`: The original markdown content of the chapter.
    -   `content_vector`: Vector embedding of the chapter content (for RAG).
    -   `book_id`: Foreign Key referencing `Book.book_id` (if a Book entity is introduced for grouping).
    -   `order`: Integer representing the chapter's order within the book.
    -   `created_at`: Timestamp of chapter creation.
    -   `updated_at`: Timestamp of last chapter update.

### Personalized Chapter (Conceptual)
-   **Description**: Represents a version of a chapter rewritten for a specific user profile. This might be dynamically generated or cached.
-   **Attributes**:
    -   `personalized_chapter_id`: Unique identifier.
    -   `original_chapter_id`: Foreign Key referencing `Chapter.chapter_id`.
    -   `user_id`: Foreign Key referencing `User.user_id`.
    -   `personalized_content_markdown`: Rewritten markdown content.
    -   `difficulty_level_applied`: The difficulty level used for personalization.
    -   `hardware_context_applied`: The hardware context used for personalization.
    -   `learning_speed_applied`: The learning speed used for personalization.
    -   `generated_at`: Timestamp of personalization.

### Translated Chapter (Conceptual)
-   **Description**: Represents a version of a chapter translated into a specific language. This might be dynamically generated or cached.
-   **Attributes**:
    -   `translated_chapter_id`: Unique identifier.
    -   `original_chapter_id`: Foreign Key referencing `Chapter.chapter_id`.
    -   `language`: The target language (e.g., "ur" for Urdu).
    -   `translated_content_markdown`: Translated markdown content.
    -   `generated_at`: Timestamp of translation.

### Chatbot Query
-   **Description**: A user's input question to the RAG Chatbot.
-   **Attributes**:
    -   `query_id`: Unique identifier (Primary Key).
    -   `user_id`: Foreign Key referencing `User.user_id`.
    -   `chapter_id`: Foreign Key referencing `Chapter.chapter_id` (context of query).
    -   `query_text`: The actual question asked by the user.
    -   `query_time`: Timestamp of the query.

### Chatbot Response
-   **Description**: The RAG Chatbot's answer to a `Chatbot Query`, including citations.
-   **Attributes**:
    -   `response_id`: Unique identifier (Primary Key).
    -   `query_id`: Foreign Key referencing `Chatbot Query.query_id`.
    -   `response_text`: The generated answer from the chatbot.
    -   `citations`: List of citations (e.g., chapter sections, page numbers).
    -   `response_time`: Timestamp of the response generation.

### Book Content (Conceptual Collection)
-   **Description**: The overall collection of all chapters and associated assets. This might not be a single database entity but rather an aggregation of `Chapter` entities and related files.