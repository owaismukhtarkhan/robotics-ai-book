# ADR-001: Docusaurus-FastAPI RAG Integration Hook

- **Status:** Proposed
- **Date:** 2026-01-03
- **Feature:** Infrastructure
- **Context:** The project requires a seamless integration between the static Docusaurus frontend and the dynamic FastAPI/Qdrant backend for a real-time RAG chatbot. We need to decide how the frontend will communicate with the backend services.

## Decision

**Integrated RAG Flow via Docusaurus Theme Hook:**
- **Frontend Component**: Custom React component injected via Docusaurus `theme-classic`.
- **API Communication**: Direct HTTPS requests to FastAPI `/api/v1/rag/query` endpoint.
- **State Management**: React `useState` and `useEffect` for managing chat history and streaming responses.
- **Authentication**: JWT-based auth via `Better-Auth` shared between Docusaurus and FastAPI.

## Consequences

### Positive
- **Real-time Performance**: Direct communication reduces latency.
- **Thematic Consistency**: Component leverages Docusaurus existing styling (Infima/Tailwind).
- **Scalability**: Decoupled backend allows for independent scaling of the Vector DB.

### Negative
- **CORS Handling**: Requires specific configuration in FastAPI to allow Docusaurus origin.
- **Client-Side Complexity**: Increases bundle size on the frontend for chat logic.

## Alternatives Considered

**Static Injection via Cloudflare Workers:**
- **Pros**: Potentially faster globally, hides backend URL.
- **Cons**: Adds complexity to the deployment pipeline, higher maintenance overhead for a Phase I hackathon project.

## References

- Feature Spec: [spec.md](../../spec.md)
- Implementation Plan: [specs/infrastructure/plan.md](../infrastructure/plan.md)
- Related ADRs: None
