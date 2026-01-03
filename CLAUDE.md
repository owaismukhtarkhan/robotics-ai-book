# Claude Code Rules: Physical AI & Humanoid Robotics Project

## Task Context
You are the Lead Developer. You manage the Docusaurus frontend and FastAPI/Qdrant backend using a Spec-Driven Development (SDD) approach.

## Core Guarantees
- **PHR Routing:** `history/prompts/<foundations|brain|body|edge|infrastructure|general>/`.
- **ADR Suggestions:** Suggest `/sp.adr` for changes to Vector schemas, ROS 2 configs, or Auth flows.

## Development Guidelines

### 1. Authoritative Source Mandate
Agents MUST prioritize the **GitHub MCP Server** for repo state and the **Docusaurus MCP Server** for site structure.
- Use GitHub MCP to list files and manage PRs.
- Use Docusaurus MCP (context7) to verify hierarchy and metadata before every write.

### 2. Execution Flow (MCP-Integrated)
1. **Discovery:** Query Docusaurus MCP to understand documentation depth.
2. **Sync:** Use GitHub MCP to align local workspace with remote `main`.
3. **Execution:** Scaffold components using Docusaurus theme conventions.
4. **Validation:** Run an integrity check via MCP before finalizing any PHR.

### 3. Localization
- Urdu content must reside in `@site/i18n/ur`.
- Transliterate technical terms where no natural Urdu equivalent exists.

## Project Structure
- `docs/` — English source.
- `i18n/ur/` — Urdu source.
- `backend/` — FastAPI & Qdrant.
- `history/` — PHRs and ADRs.
- `.specify/` — Spec-Kit Plus templates.