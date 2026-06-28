# Project Memory — Agentic Frameworks Course

This file captures the working agreements, implementation habits, and task queue for the Agentic Frameworks course.

## Project Goal

Create a comprehensive, production-grade Agentic Frameworks course for BAE School covering every major AI agent framework, architecture pattern, protocol, and production concern.

The content should teach AI agent engineering in a practical, engineering-focused way for:
- AI engineers building agent systems
- Backend engineers adding agentic capabilities
- Developers evaluating frameworks for production use
- Interview preparation for agent-related roles

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [design.md](../../../docs/school/agentic-frameworks/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [agentic-frameworks-agent.md](../../agents/agentic-frameworks-agent.md) — course-specific rules

---

## Content Workflow

1. Work in batches of up to 10 topics per session.
2. Create topic folders with `_category_.json` files first, then content files.
3. Every page must follow the 15-section template from CLAUDE.md.
4. Every framework page must include the research-first sections from the agent file (Community Verdict, Should You Use This?, Do & Don't).
5. Run `npm run build` after every batch.
6. Update this file's checklists and task queue immediately.

---

## Research Requirements

For every framework deep-dive, the content must be backed by:
- **Official docs review**: Read the framework's official documentation
- **GitHub analysis**: Stars, contributors, release cadence, open issues
- **Community sentiment**: Reddit, HackerNews, Discord feedback
- **Production case studies**: Real companies using it at scale
- **Comparison context**: How it stacks against alternatives

Do NOT write generic "feature list" pages. Write opinionated, engineer-to-engineer analysis.

---

## React Flow Diagram Guidelines

Same as the Python course — use the `<LearningFlow>` component:
- Component path: `src/components/LearningFlow/index.tsx`
- Styles: `src/components/LearningFlow/styles.module.css`

For agentic framework topics, diagrams should focus on:
- Agent loop lifecycles (think → act → observe)
- Multi-agent communication flows
- Tool invocation pipelines
- State machine graphs
- Protocol handshakes (MCP client-server, A2A agent cards)

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [ ] `af-001` | Create `_category_.json` files for all 17 categories | Branch: `jules/af-batch-001-setup`
- [ ] `af-002` | Create `intro/what-are-ai-agents.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-003` | Create `intro/agent-vs-chatbot.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-004` | Create `intro/anatomy-of-an-agent.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-005` | Create `intro/agent-types.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-006` | Create `intro/how-agents-think.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-007` | Create `intro/agent-ecosystem-landscape.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-008` | Create `intro/choosing-a-framework.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-009` | Create `intro/your-first-agent.mdx` | Branch: `jules/af-batch-001-setup`
- [ ] `af-010` | Create `architecture-patterns/react-pattern.mdx` | Branch: `jules/af-batch-001-setup`

### Backlog

#### Batch 2 — Architecture Patterns
- [ ] `af-011` | Create `architecture-patterns/plan-and-execute.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-012` | Create `architecture-patterns/reflection-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-013` | Create `architecture-patterns/tool-use-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-014` | Create `architecture-patterns/routing-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-015` | Create `architecture-patterns/parallelization-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-016` | Create `architecture-patterns/human-in-the-loop.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-017` | Create `architecture-patterns/agent-architectures-compared.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-018` | Create `langchain-langgraph/langchain-fundamentals.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-019` | Create `langchain-langgraph/langgraph-intro.mdx` | Branch: `jules/af-batch-002-patterns`
- [ ] `af-020` | Create `langchain-langgraph/langgraph-state-machines.mdx` | Branch: `jules/af-batch-002-patterns`

#### Batch 3 — LangGraph Deep Dive
- [ ] `af-021` | Create `langchain-langgraph/langgraph-memory.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-022` | Create `langchain-langgraph/langgraph-human-in-loop.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-023` | Create `langchain-langgraph/langgraph-multi-agent.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-024` | Create `langchain-langgraph/langsmith-observability.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-025` | Create `langchain-langgraph/langgraph-production.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-026` | Create `crewai/crewai-fundamentals.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-027` | Create `crewai/crewai-agents-roles.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-028` | Create `crewai/crewai-tasks-tools.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-029` | Create `crewai/crewai-flows.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] `af-030` | Create `crewai/crewai-memory.mdx` | Branch: `jules/af-batch-003-langgraph`

#### Batch 4 — CrewAI + OpenAI SDK
- [ ] `af-031` | Create `crewai/crewai-multi-agent.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-032` | Create `crewai/crewai-production.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-033` | Create `openai-agents-sdk/openai-sdk-fundamentals.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-034` | Create `openai-agents-sdk/openai-sdk-tools.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-035` | Create `openai-agents-sdk/openai-sdk-handoffs.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-036` | Create `openai-agents-sdk/openai-sdk-guardrails.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-037` | Create `openai-agents-sdk/openai-sdk-tracing.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-038` | Create `openai-agents-sdk/openai-sdk-production.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-039` | Create `google-adk/google-adk-fundamentals.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] `af-040` | Create `google-adk/google-adk-tools.mdx` | Branch: `jules/af-batch-004-crewai-openai`

#### Batch 5 — Google ADK + AutoGen
- [ ] `af-041` | Create `google-adk/google-adk-multi-agent.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-042` | Create `google-adk/google-adk-sessions.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-043` | Create `google-adk/google-adk-callbacks.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-044` | Create `google-adk/google-adk-production.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-045` | Create `autogen/autogen-fundamentals.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-046` | Create `autogen/autogen-agents.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-047` | Create `autogen/autogen-group-chat.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-048` | Create `autogen/autogen-code-execution.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-049` | Create `autogen/autogen-production.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] `af-050` | Create `pydantic-ai/pydantic-ai-fundamentals.mdx` | Branch: `jules/af-batch-005-adk-autogen`

#### Batch 6 — Pydantic AI + Semantic Kernel
- [ ] `af-051` | Create `pydantic-ai/pydantic-ai-type-safety.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-052` | Create `pydantic-ai/pydantic-ai-tools.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-053` | Create `pydantic-ai/pydantic-ai-structured-output.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-054` | Create `pydantic-ai/pydantic-ai-production.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-055` | Create `semantic-kernel/semantic-kernel-fundamentals.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-056` | Create `semantic-kernel/semantic-kernel-plugins.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-057` | Create `semantic-kernel/semantic-kernel-planners.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-058` | Create `semantic-kernel/semantic-kernel-memory.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-059` | Create `semantic-kernel/semantic-kernel-production.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] `af-060` | Create `emerging-frameworks/smolagents.mdx` | Branch: `jules/af-batch-006-pydantic-sk`

#### Batch 7 — Emerging Frameworks
- [ ] `af-061` | Create `emerging-frameworks/agno.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-062` | Create `emerging-frameworks/llamaindex-agents.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-063` | Create `emerging-frameworks/haystack-agents.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-064` | Create `emerging-frameworks/mastra.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-065` | Create `emerging-frameworks/camel-ai.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-066` | Create `emerging-frameworks/metagpt.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-067` | Create `protocols/mcp-protocol.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-068` | Create `protocols/mcp-servers.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-069` | Create `protocols/mcp-building-servers.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] `af-070` | Create `protocols/a2a-protocol.mdx` | Branch: `jules/af-batch-007-emerging`

#### Batch 8 — Protocols + Multi-Agent
- [ ] `af-071` | Create `protocols/a2a-agent-cards.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-072` | Create `protocols/mcp-vs-a2a.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-073` | Create `multi-agent-systems/multi-agent-patterns.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-074` | Create `multi-agent-systems/orchestrator-worker.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-075` | Create `multi-agent-systems/supervisor-pattern.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-076` | Create `multi-agent-systems/hierarchical-agents.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-077` | Create `multi-agent-systems/agent-communication.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-078` | Create `multi-agent-systems/multi-agent-debugging.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-079` | Create `memory-and-state/agent-memory-types.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] `af-080` | Create `memory-and-state/short-term-memory.mdx` | Branch: `jules/af-batch-008-protocols`

#### Batch 9 — Memory + Tools
- [ ] `af-081` | Create `memory-and-state/long-term-memory.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-082` | Create `memory-and-state/vector-store-memory.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-083` | Create `memory-and-state/conversation-management.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-084` | Create `memory-and-state/state-persistence.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-085` | Create `tools-and-actions/tool-design-principles.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-086` | Create `tools-and-actions/function-calling.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-087` | Create `tools-and-actions/api-tools.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-088` | Create `tools-and-actions/database-tools.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-089` | Create `tools-and-actions/code-execution-tools.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] `af-090` | Create `tools-and-actions/tool-error-handling.mdx` | Branch: `jules/af-batch-009-memory-tools`

#### Batch 10 — Production
- [ ] `af-091` | Create `production/agent-evaluation.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-092` | Create `production/agent-observability.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-093` | Create `production/agent-guardrails.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-094` | Create `production/agent-security.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-095` | Create `production/agent-cost-optimization.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-096` | Create `production/agent-deployment.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-097` | Create `production/agent-scaling.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-098` | Create `interview-prep/agent-interview-questions.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-099` | Create `interview-prep/framework-comparison-questions.mdx` | Branch: `jules/af-batch-010-production`
- [ ] `af-100` | Create `interview-prep/agent-design-rounds.mdx` | Branch: `jules/af-batch-010-production`

#### Batch 11 — Interview Prep + Best Practices
- [ ] `af-101` | Create `interview-prep/agent-coding-rounds.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-102` | Create `interview-prep/agent-system-design.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-103` | Create `best-practices/framework-selection-guide.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-104` | Create `best-practices/agent-design-patterns.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-105` | Create `best-practices/agent-testing.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-106` | Create `best-practices/agent-anti-patterns.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] `af-107` | Create `best-practices/future-of-agents.mdx` | Branch: `jules/af-batch-011-interview`

### Completed This Cycle
_(Jules appends completed tasks here)_

---

# Course Roadmap & Progress

## 1. Intro
- [ ] What Are AI Agents (intro/what-are-ai-agents.mdx)
- [ ] Agent vs Chatbot (intro/agent-vs-chatbot.mdx)
- [ ] Anatomy of an Agent (intro/anatomy-of-an-agent.mdx)
- [ ] Agent Types (intro/agent-types.mdx)
- [ ] How Agents Think (intro/how-agents-think.mdx)
- [ ] Agent Ecosystem Landscape (intro/agent-ecosystem-landscape.mdx)
- [ ] Choosing a Framework (intro/choosing-a-framework.mdx)
- [ ] Your First Agent (intro/your-first-agent.mdx)

## 2. Architecture Patterns
- [ ] ReAct Pattern (architecture-patterns/react-pattern.mdx)
- [ ] Plan and Execute (architecture-patterns/plan-and-execute.mdx)
- [ ] Reflection Pattern (architecture-patterns/reflection-pattern.mdx)
- [ ] Tool Use Pattern (architecture-patterns/tool-use-pattern.mdx)
- [ ] Routing Pattern (architecture-patterns/routing-pattern.mdx)
- [ ] Parallelization Pattern (architecture-patterns/parallelization-pattern.mdx)
- [ ] Human in the Loop (architecture-patterns/human-in-the-loop.mdx)
- [ ] Agent Architectures Compared (architecture-patterns/agent-architectures-compared.mdx)

## 3. LangChain & LangGraph
- [ ] LangChain Fundamentals (langchain-langgraph/langchain-fundamentals.mdx)
- [ ] LangGraph Intro (langchain-langgraph/langgraph-intro.mdx)
- [ ] LangGraph State Machines (langchain-langgraph/langgraph-state-machines.mdx)
- [ ] LangGraph Memory (langchain-langgraph/langgraph-memory.mdx)
- [ ] LangGraph Human in Loop (langchain-langgraph/langgraph-human-in-loop.mdx)
- [ ] LangGraph Multi-Agent (langchain-langgraph/langgraph-multi-agent.mdx)
- [ ] LangSmith Observability (langchain-langgraph/langsmith-observability.mdx)
- [ ] LangGraph Production (langchain-langgraph/langgraph-production.mdx)

## 4. CrewAI
- [ ] CrewAI Fundamentals (crewai/crewai-fundamentals.mdx)
- [ ] CrewAI Agents & Roles (crewai/crewai-agents-roles.mdx)
- [ ] CrewAI Tasks & Tools (crewai/crewai-tasks-tools.mdx)
- [ ] CrewAI Flows (crewai/crewai-flows.mdx)
- [ ] CrewAI Memory (crewai/crewai-memory.mdx)
- [ ] CrewAI Multi-Agent (crewai/crewai-multi-agent.mdx)
- [ ] CrewAI Production (crewai/crewai-production.mdx)

## 5. OpenAI Agents SDK
- [ ] OpenAI SDK Fundamentals (openai-agents-sdk/openai-sdk-fundamentals.mdx)
- [ ] OpenAI SDK Tools (openai-agents-sdk/openai-sdk-tools.mdx)
- [ ] OpenAI SDK Handoffs (openai-agents-sdk/openai-sdk-handoffs.mdx)
- [ ] OpenAI SDK Guardrails (openai-agents-sdk/openai-sdk-guardrails.mdx)
- [ ] OpenAI SDK Tracing (openai-agents-sdk/openai-sdk-tracing.mdx)
- [ ] OpenAI SDK Production (openai-agents-sdk/openai-sdk-production.mdx)

## 6. Google ADK
- [ ] Google ADK Fundamentals (google-adk/google-adk-fundamentals.mdx)
- [ ] Google ADK Tools (google-adk/google-adk-tools.mdx)
- [ ] Google ADK Multi-Agent (google-adk/google-adk-multi-agent.mdx)
- [ ] Google ADK Sessions (google-adk/google-adk-sessions.mdx)
- [ ] Google ADK Callbacks (google-adk/google-adk-callbacks.mdx)
- [ ] Google ADK Production (google-adk/google-adk-production.mdx)

## 7. AutoGen
- [ ] AutoGen Fundamentals (autogen/autogen-fundamentals.mdx)
- [ ] AutoGen Agents (autogen/autogen-agents.mdx)
- [ ] AutoGen Group Chat (autogen/autogen-group-chat.mdx)
- [ ] AutoGen Code Execution (autogen/autogen-code-execution.mdx)
- [ ] AutoGen Production (autogen/autogen-production.mdx)

## 8. Pydantic AI
- [ ] Pydantic AI Fundamentals (pydantic-ai/pydantic-ai-fundamentals.mdx)
- [ ] Pydantic AI Type Safety (pydantic-ai/pydantic-ai-type-safety.mdx)
- [ ] Pydantic AI Tools (pydantic-ai/pydantic-ai-tools.mdx)
- [ ] Pydantic AI Structured Output (pydantic-ai/pydantic-ai-structured-output.mdx)
- [ ] Pydantic AI Production (pydantic-ai/pydantic-ai-production.mdx)

## 9. Semantic Kernel
- [ ] Semantic Kernel Fundamentals (semantic-kernel/semantic-kernel-fundamentals.mdx)
- [ ] Semantic Kernel Plugins (semantic-kernel/semantic-kernel-plugins.mdx)
- [ ] Semantic Kernel Planners (semantic-kernel/semantic-kernel-planners.mdx)
- [ ] Semantic Kernel Memory (semantic-kernel/semantic-kernel-memory.mdx)
- [ ] Semantic Kernel Production (semantic-kernel/semantic-kernel-production.mdx)

## 10. Emerging Frameworks
- [ ] Smolagents (emerging-frameworks/smolagents.mdx)
- [ ] Agno (emerging-frameworks/agno.mdx)
- [ ] LlamaIndex Agents (emerging-frameworks/llamaindex-agents.mdx)
- [ ] Haystack Agents (emerging-frameworks/haystack-agents.mdx)
- [ ] Mastra (emerging-frameworks/mastra.mdx)
- [ ] Camel AI (emerging-frameworks/camel-ai.mdx)
- [ ] MetaGPT (emerging-frameworks/metagpt.mdx)

## 11. Protocols
- [ ] MCP Protocol (protocols/mcp-protocol.mdx)
- [ ] MCP Servers (protocols/mcp-servers.mdx)
- [ ] MCP Building Servers (protocols/mcp-building-servers.mdx)
- [ ] A2A Protocol (protocols/a2a-protocol.mdx)
- [ ] A2A Agent Cards (protocols/a2a-agent-cards.mdx)
- [ ] MCP vs A2A (protocols/mcp-vs-a2a.mdx)

## 12. Multi-Agent Systems
- [ ] Multi-Agent Patterns (multi-agent-systems/multi-agent-patterns.mdx)
- [ ] Orchestrator Worker (multi-agent-systems/orchestrator-worker.mdx)
- [ ] Supervisor Pattern (multi-agent-systems/supervisor-pattern.mdx)
- [ ] Hierarchical Agents (multi-agent-systems/hierarchical-agents.mdx)
- [ ] Agent Communication (multi-agent-systems/agent-communication.mdx)
- [ ] Multi-Agent Debugging (multi-agent-systems/multi-agent-debugging.mdx)

## 13. Memory & State
- [ ] Agent Memory Types (memory-and-state/agent-memory-types.mdx)
- [ ] Short-Term Memory (memory-and-state/short-term-memory.mdx)
- [ ] Long-Term Memory (memory-and-state/long-term-memory.mdx)
- [ ] Vector Store Memory (memory-and-state/vector-store-memory.mdx)
- [ ] Conversation Management (memory-and-state/conversation-management.mdx)
- [ ] State Persistence (memory-and-state/state-persistence.mdx)

## 14. Tools & Actions
- [ ] Tool Design Principles (tools-and-actions/tool-design-principles.mdx)
- [ ] Function Calling (tools-and-actions/function-calling.mdx)
- [ ] API Tools (tools-and-actions/api-tools.mdx)
- [ ] Database Tools (tools-and-actions/database-tools.mdx)
- [ ] Code Execution Tools (tools-and-actions/code-execution-tools.mdx)
- [ ] Tool Error Handling (tools-and-actions/tool-error-handling.mdx)

## 15. Production
- [ ] Agent Evaluation (production/agent-evaluation.mdx)
- [ ] Agent Observability (production/agent-observability.mdx)
- [ ] Agent Guardrails (production/agent-guardrails.mdx)
- [ ] Agent Security (production/agent-security.mdx)
- [ ] Agent Cost Optimization (production/agent-cost-optimization.mdx)
- [ ] Agent Deployment (production/agent-deployment.mdx)
- [ ] Agent Scaling (production/agent-scaling.mdx)

## 16. Interview Prep
- [ ] Agent Interview Questions (interview-prep/agent-interview-questions.mdx)
- [ ] Framework Comparison Questions (interview-prep/framework-comparison-questions.mdx)
- [ ] Agent Design Rounds (interview-prep/agent-design-rounds.mdx)
- [ ] Agent Coding Rounds (interview-prep/agent-coding-rounds.mdx)
- [ ] Agent System Design (interview-prep/agent-system-design.mdx)

## 17. Best Practices
- [ ] Framework Selection Guide (best-practices/framework-selection-guide.mdx)
- [ ] Agent Design Patterns (best-practices/agent-design-patterns.mdx)
- [ ] Agent Testing (best-practices/agent-testing.mdx)
- [ ] Agent Anti-Patterns (best-practices/agent-anti-patterns.mdx)
- [ ] Future of Agents (best-practices/future-of-agents.mdx)
