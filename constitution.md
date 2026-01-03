# Constitution: Physical AI & Humanoid Robotics Textbook (Phase I)

## 1. Project Identity & Vision
**Project Name:** Physical AI & Humanoid Robotics (Hackathon I)
**Objective:** To develop a world-class, interactive, open-source textbook that serves as a definitive guide for physical AI and humanoid robotics.
**Core Philosophy:** "Learning by Building." Bridging theoretical robotics and practical implementation (NVIDIA Isaac, ROS 2, Unity).

## 2. Mission Statement
To empower developers globally via a localized (English/Urdu), AI-enhanced platform integrating high-quality documentation with a state-of-the-art RAG chatbot.

## 3. Architectural Principles (Phase I)
* **Documentation Engine:** Docusaurus (Standardized via Spec-Kit Plus).
* **AI Integration:** Integrated RAG Chatbot using OpenAI Agents/ChatKit SDK.
* **Backend:** FastAPI, Neon Postgres, and Qdrant Vector Search.
* **Tooling:** GitHub MCP Server and Docusaurus MCP Server (context7).

## 4. Content Structure & Scope
1. **Foundations:** Mechanics, DoF, and Kinematics.
2. **The Brain (AI):** LLMs, SLMs, and VLA models.
3. **The Body (Simulation):** ROS 2, Gazebo, Unity, and NVIDIA Isaac platform.
4. **Edge Intelligence:** Deployment on Jetson/Orin modules.

## 5. Agent Behavioral Guidelines (Spec-Drive Logic)
* **MCP-First Protocol:** The agent MUST prioritize GitHub and Docusaurus MCP tools for state discovery. Manual assumptions are secondary to live tool-queried data.
* **Documentation Synchronicity:** Utilizing Docusaurus MCP context, ensure all new content is cross-referenced with `sidebars.js` and existing metadata automatically.
* **Precision:** Technical robotics terms must be used with 100% accuracy.
* **Bilingual Integrity:** Urdu translations must be technical, not just literal.

## 6. Phase I Success Metrics
* Successful Docusaurus deployment with validated context7 deep-scans.
* Functional RAG chatbot and Better-Auth integration.
* All milestones tracked via GitHub MCP issues and PRs.

## 7. Compliance & Ethics
* **Open Source:** MIT/Apache 2.0.
* **Timeline:** Quality-driven development, ignoring legacy 2025 deadlines.