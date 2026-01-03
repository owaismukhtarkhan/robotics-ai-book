# Technical Specification: Physical AI & Humanoid Robotics Textbook

## 1. System Overview
A hybrid educational platform: static documentation (Docusaurus) + dynamic agent-driven RAG backend (FastAPI + Qdrant).

## 2. Technical Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | Docusaurus, Tailwind CSS |
| **Backend** | FastAPI, Neon Postgres, Qdrant |
| **AI** | OpenAI Agents, ChatKit SDK |
| **Automation** | GitHub MCP Server, Docusaurus MCP Server (context7) |

## 3. Architecture & Data Flow
### 3.1 Content & Repo Management
* **GitHub MCP:** Automates branch management, PR reviews, and issue tracking for each module.
* **Docusaurus MCP:** Performs recursive site-map analysis to maintain structural integrity across modules.

### 3.2 RAG Chatbot
* **Inquiry:** User submits via ChatKit.
* **Retrieval:** FastAPI queries Qdrant chunks; Docusaurus MCP ensures links in responses are valid.

## 4. Development Workflow
1. **State Discovery:** Query Docusaurus MCP to verify current site structure.
2. **Task Creation:** Use GitHub MCP to create issues for new textbook chapters.
3. **Embedding Pipeline:** Update Qdrant whenever GitHub MCP detects a merge to `main`.
4. **Validation:** All updates must pass a context7 deep-scan for link integrity.

## 5. Security & Auth
* **Better-Auth:** Social login and progress tracking stored in Neon Postgres.