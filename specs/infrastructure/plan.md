# Infrastructure Plan: Phase I - Discovery & Scaffolding

This document defines the implementation strategy for the Physical AI & Humanoid Robotics platform foundations.

## 1. Docusaurus Directory Structure (Humanoid Modules)
The documentation will be partitioned into four logical modules to ensure scalability and clarity.

### English Root (`docs/`)
- `/foundations`: Mechanics, DoF, Kinematics.
- `/brain`: LLMs, VLA Models, Cognitive Architectures.
- `/body`: Simulation (Isaac, Gazebo, ROS 2).
- `/edge`: Hardware deployment (Jetson/Orin).

### Urdu Root (`i18n/ur/docusaurus-plugin-content-docs/current/`)
- Mirror structure of English root for localized segments.

## 2. Backend Scaffolding (`backend/`)
FastAPI serves as the orchestration layer for RAG and user progress.

### Structure
- `backend/app/`: Core application logic.
  - `api/v1/`: Endpoint definitions (rag, auth, modules).
  - `services/`: Qdrant retrieval and embedding logic.
  - `models/`: Database schemas (Neon Postgres).

## 3. Qdrant Collection Schema (`robotics_rag`)
Initial Vector DB configuration for semantic search.

| Field | Configuration |
| :--- | :--- |
| **Vector Dimension** | 1536 (OpenAI text-embedding-3-small) |
| **Distance** | Cosine |
| **Payload** | `{ module: string, title: string, text: string, lang: string, url: string }` |

## 4. ADR Candidates
1. **Docusaurus-FastAPI Integration**: Implementation of the RAG Chatbot UI component within the Docusaurus theme.
2. **Postgres-Qdrant Sync**: Strategy for keeping metadata in sync between the relational DB and Vector storage.

## 5. Deployment & CI/CD Strategy
The platform follows a standard Git-based deployment workflow utilizing GitHub Actions and Cloudflare Pages.

### CI/CD Pipeline
- **Branch Strategy**: `main` is the production-ready branch.
- **Workflow**: 
  1. Push to `main` triggers a GitHub Action.
  2. Action installs dependencies (`npm install`).
  3. Action executes production build (`npm run build`).
  4. Deployment to Cloudflare Pages (or GitHub Pages as fallback).

### Node.js Compatibility Note
- **Regression Fix**: Builds on Node.js 25.2.0 require `NODE_OPTIONS="--no-experimental-webstorage"` to bypass Web Storage initialization errors.
