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
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/agentic-frameworks/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [agentic-frameworks-agent.md](../../agents/agentic-frameworks-agent.md) — course-specific rules

---

## Content Workflow

1. Work in batches of up to 10 topics per session.
2. Create topic folders with `_category_.json` files first, then content files.
3. Every page must follow the 15-section template from CLAUDE.md.
4. Every framework page must include the research-first sections from the agent file (Community Verdict, Should You Use This?, Do & Don't).
5. Run `npm run typecheck` and `npm run build` after every batch.
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
- [x] [BAE-AF-001] | Create `_category_.json` files for all 17 categories | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-002] | Create `intro/what-are-ai-agents.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-003] | Create `intro/agent-vs-chatbot-vs-rag.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-004] | Create `intro/anatomy-of-an-agent.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-005] | Create `intro/agent-types-and-taxonomies.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-006] | Create `intro/how-agents-think.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-007] | Create `intro/agent-ecosystem-landscape-2026.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-008] | Create `intro/choosing-a-framework.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-009] | Create `intro/your-first-agent.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-010] | Create `architecture-patterns/react-pattern.mdx` | Branch: `jules/af-batch-001-setup`
- [x] [BAE-AF-011] | Create `architecture-patterns/plan-and-execute.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-012] | Create `architecture-patterns/reflection-and-reflexion.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-013] | Create `architecture-patterns/tool-use-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-014] | Create `architecture-patterns/routing-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-015] | Create `architecture-patterns/parallelization-pattern.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-016] | Create `architecture-patterns/human-in-the-loop.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-017] | Create `architecture-patterns/agent-architectures-compared.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-018] | Create `langchain-langgraph/langchain-fundamentals.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-019] | Create `langchain-langgraph/langgraph-intro.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-020] | Create `langchain-langgraph/langgraph-state-machines.mdx` | Branch: `jules/af-batch-002-patterns`
- [x] [BAE-AF-021] | Create `langchain-langgraph/langgraph-memory.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-022] | Create `langchain-langgraph/langgraph-human-in-loop.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-023] | Create `langchain-langgraph/langgraph-multi-agent.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-024] | Create `langchain-langgraph/langsmith-observability.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-025] | Create `langchain-langgraph/langgraph-production-deployment.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-026] | Create `crewai/crewai-fundamentals.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-027] | Create `crewai/crewai-agents-and-roles.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-028] | Create `crewai/crewai-tasks-and-processes.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-029] | Create `crewai/crewai-flows-and-pipelines.mdx` | Branch: `jules/af-batch-003-langgraph`
- [x] [BAE-AF-030] | Create `crewai/crewai-memory-system.mdx` | Branch: `jules/af-batch-003-langgraph`
- [ ] [BAE-AF-031] | Create `crewai/crewai-multi-agent-crews.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-032] | Create `crewai/crewai-production-deployment.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-033] | Create `openai-agents-sdk/openai-sdk-fundamentals.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-034] | Create `openai-agents-sdk/openai-sdk-tools-and-functions.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-035] | Create `openai-agents-sdk/openai-sdk-handoffs.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-036] | Create `openai-agents-sdk/openai-sdk-guardrails.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-037] | Create `openai-agents-sdk/openai-sdk-tracing.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-038] | Create `openai-agents-sdk/openai-sdk-production-deployment.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-039] | Create `google-adk/google-adk-fundamentals.mdx` | Branch: `jules/af-batch-004-crewai-openai`
- [ ] [BAE-AF-040] | Create `google-adk/google-adk-tools-and-functions.mdx` | Branch: `jules/af-batch-004-crewai-openai`

### Backlog

#### Batch 4 — CrewAI + OpenAI SDK

#### Batch 5 — Google ADK + AutoGen
- [ ] [BAE-AF-041] | Create `google-adk/google-adk-multi-agent-orchestration.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-042] | Create `google-adk/google-adk-sessions-and-state.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-043] | Create `google-adk/google-adk-callbacks-and-hooks.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-044] | Create `google-adk/google-adk-production-deployment.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-045] | Create `autogen/autogen-fundamentals.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-046] | Create `autogen/autogen-conversable-agents.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-047] | Create `autogen/autogen-group-chat-patterns.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-048] | Create `autogen/autogen-code-execution.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-049] | Create `autogen/autogen-production-deployment.mdx` | Branch: `jules/af-batch-005-adk-autogen`
- [ ] [BAE-AF-050] | Create `pydantic-ai/pydantic-ai-fundamentals.mdx` | Branch: `jules/af-batch-005-adk-autogen`

#### Batch 6 — Pydantic AI + Semantic Kernel
- [ ] [BAE-AF-051] | Create `pydantic-ai/pydantic-ai-type-safe-agents.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-052] | Create `pydantic-ai/pydantic-ai-tools-and-dependencies.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-053] | Create `pydantic-ai/pydantic-ai-structured-output.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-054] | Create `pydantic-ai/pydantic-ai-production-deployment.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-055] | Create `semantic-kernel/semantic-kernel-fundamentals.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-056] | Create `semantic-kernel/semantic-kernel-plugins-and-functions.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-057] | Create `semantic-kernel/semantic-kernel-planners.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-058] | Create `semantic-kernel/semantic-kernel-memory-and-embeddings.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-059] | Create `semantic-kernel/semantic-kernel-production-deployment.mdx` | Branch: `jules/af-batch-006-pydantic-sk`
- [ ] [BAE-AF-060] | Create `emerging-frameworks/smolagents-huggingface.mdx` | Branch: `jules/af-batch-006-pydantic-sk`

#### Batch 7 — Emerging Frameworks
- [ ] [BAE-AF-061] | Create `emerging-frameworks/agno-formerly-phidata.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-062] | Create `emerging-frameworks/llamaindex-agents-and-workflows.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-063] | Create `emerging-frameworks/haystack-agents.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-064] | Create `emerging-frameworks/mastra-typescript-agents.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-065] | Create `emerging-frameworks/camel-ai.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-066] | Create `emerging-frameworks/metagpt.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-067] | Create `protocols/mcp-protocol-deep-dive.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-068] | Create `protocols/mcp-popular-servers.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-069] | Create `protocols/mcp-server-development.mdx` | Branch: `jules/af-batch-007-emerging`
- [ ] [BAE-AF-070] | Create `protocols/a2a-protocol-deep-dive.mdx` | Branch: `jules/af-batch-007-emerging`

#### Batch 8 — Protocols + Multi-Agent
- [ ] [BAE-AF-071] | Create `protocols/a2a-agent-cards.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-072] | Create `protocols/mcp-vs-a2a-when-to-use.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-073] | Create `multi-agent-systems/multi-agent-patterns-overview.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-074] | Create `multi-agent-systems/orchestrator-worker-pattern.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-075] | Create `multi-agent-systems/supervisor-pattern.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-076] | Create `multi-agent-systems/hierarchical-agent-teams.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-077] | Create `multi-agent-systems/agent-communication-protocols.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-078] | Create `multi-agent-systems/multi-agent-debugging.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-079] | Create `memory-and-state/agent-memory-types-overview.mdx` | Branch: `jules/af-batch-008-protocols`
- [ ] [BAE-AF-080] | Create `memory-and-state/short-term-memory-context-window.mdx` | Branch: `jules/af-batch-008-protocols`

#### Batch 9 — Memory + Tools
- [ ] [BAE-AF-081] | Create `memory-and-state/long-term-memory-persistence.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-082] | Create `memory-and-state/vector-store-memory.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-083] | Create `memory-and-state/conversation-management.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-084] | Create `memory-and-state/state-persistence-and-checkpointing.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-085] | Create `tools-and-actions/tool-design-principles.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-086] | Create `tools-and-actions/function-calling-deep-dive.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-087] | Create `tools-and-actions/api-tools-rest-graphql.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-088] | Create `tools-and-actions/database-tools.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-089] | Create `tools-and-actions/code-execution-sandboxes.mdx` | Branch: `jules/af-batch-009-memory-tools`
- [ ] [BAE-AF-090] | Create `tools-and-actions/tool-error-handling-and-retries.mdx` | Branch: `jules/af-batch-009-memory-tools`

#### Batch 10 — Production
- [ ] [BAE-AF-091] | Create `production/agent-evaluation-frameworks.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-092] | Create `production/agent-observability-and-tracing.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-093] | Create `production/agent-guardrails-and-safety.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-094] | Create `production/agent-security-threats.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-095] | Create `production/agent-cost-optimization.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-096] | Create `production/agent-deployment-patterns.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-097] | Create `production/agent-scaling-strategies.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-098] | Create `interview-prep/agent-interview-questions.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-099] | Create `interview-prep/framework-comparison-questions.mdx` | Branch: `jules/af-batch-010-production`
- [ ] [BAE-AF-100] | Create `interview-prep/agent-design-rounds.mdx` | Branch: `jules/af-batch-010-production`

#### Batch 11 — Interview Prep + Best Practices
- [ ] [BAE-AF-101] | Create `interview-prep/agent-coding-rounds.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-102] | Create `interview-prep/agent-system-design.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-103] | Create `best-practices/framework-selection-guide.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-104] | Create `best-practices/agent-design-patterns.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-105] | Create `best-practices/agent-testing.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-106] | Create `best-practices/agent-anti-patterns.mdx` | Branch: `jules/af-batch-011-interview`
- [ ] [BAE-AF-107] | Create `best-practices/future-of-agents.mdx` | Branch: `jules/af-batch-011-interview`

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-AF-1]` | Created intro categories and first 9 concepts including ReAct pattern. |
| `[BAE-AF-2]` | Created 10 architecture patterns and LangGraph fundamentals concepts. |
| `[BAE-AF-3]` | Created LangGraph advanced topics and CrewAI fundamentals (af-021 through af-030). |

---

# Course Roadmap & Progress

## 1. Intro
- [ ] What Are AI Agents (intro/what-are-ai-agents.mdx)
- [ ] Agent vs Chatbot (intro/agent-vs-chatbot-vs-rag.mdx)
- [ ] Anatomy of an Agent (intro/anatomy-of-an-agent.mdx)
- [ ] Agent Types (intro/agent-types-and-taxonomies.mdx)
- [ ] How Agents Think (intro/how-agents-think.mdx)
- [ ] Agent Ecosystem Landscape (intro/agent-ecosystem-landscape-2026.mdx)
- [ ] Choosing a Framework (intro/choosing-a-framework.mdx)
- [ ] Your First Agent (intro/your-first-agent.mdx)

## 2. Architecture Patterns
- [ ] ReAct Pattern (architecture-patterns/react-pattern.mdx)
- [ ] Plan and Execute (architecture-patterns/plan-and-execute.mdx)
- [ ] Reflection Pattern (architecture-patterns/reflection-and-reflexion.mdx)
- [ ] Tool Use Pattern (architecture-patterns/tool-use-pattern.mdx)
- [ ] Routing Pattern (architecture-patterns/routing-pattern.mdx)
- [ ] Parallelization Pattern (architecture-patterns/parallelization-pattern.mdx)
- [ ] Human in the Loop (architecture-patterns/human-in-the-loop.mdx)
- [ ] Agent Architectures Compared (architecture-patterns/agent-architectures-compared.mdx)

## 3. LangChain & LangGraph
- [ ] LangChain Fundamentals (langchain-langgraph/langchain-fundamentals.mdx)
- [ ] LangGraph Intro (langchain-langgraph/langgraph-intro.mdx)
- [ ] LangGraph State Machines (langchain-langgraph/langgraph-state-machines.mdx)
- [x] LangGraph Memory (langchain-langgraph/langgraph-memory.mdx)
- [x] LangGraph Human in Loop (langchain-langgraph/langgraph-human-in-loop.mdx)
- [x] LangGraph Multi-Agent (langchain-langgraph/langgraph-multi-agent.mdx)
- [x] LangSmith Observability (langchain-langgraph/langsmith-observability.mdx)
- [x] LangGraph Production (langchain-langgraph/langgraph-production-deployment.mdx)

## 4. CrewAI
- [x] CrewAI Fundamentals (crewai/crewai-fundamentals.mdx)
- [x] CrewAI Agents & Roles (crewai/crewai-agents-and-roles.mdx)
- [x] CrewAI Tasks & Tools (crewai/crewai-tasks-and-processes.mdx)
- [x] CrewAI Flows (crewai/crewai-flows-and-pipelines.mdx)
- [x] CrewAI Memory (crewai/crewai-memory-system.mdx)
- [ ] CrewAI Multi-Agent (crewai/crewai-multi-agent-crews.mdx)
- [ ] CrewAI Production (crewai/crewai-production-deployment.mdx)

## 5. OpenAI Agents SDK
- [ ] OpenAI SDK Fundamentals (openai-agents-sdk/openai-sdk-fundamentals.mdx)
- [ ] OpenAI SDK Tools (openai-agents-sdk/openai-sdk-tools-and-functions.mdx)
- [ ] OpenAI SDK Handoffs (openai-agents-sdk/openai-sdk-handoffs.mdx)
- [ ] OpenAI SDK Guardrails (openai-agents-sdk/openai-sdk-guardrails.mdx)
- [ ] OpenAI SDK Tracing (openai-agents-sdk/openai-sdk-tracing.mdx)
- [ ] OpenAI SDK Production (openai-agents-sdk/openai-sdk-production-deployment.mdx)

## 6. Google ADK
- [ ] Google ADK Fundamentals (google-adk/google-adk-fundamentals.mdx)
- [ ] Google ADK Tools (google-adk/google-adk-tools-and-functions.mdx)
- [ ] Google ADK Multi-Agent (google-adk/google-adk-multi-agent-orchestration.mdx)
- [ ] Google ADK Sessions (google-adk/google-adk-sessions-and-state.mdx)
- [ ] Google ADK Callbacks (google-adk/google-adk-callbacks-and-hooks.mdx)
- [ ] Google ADK Production (google-adk/google-adk-production-deployment.mdx)

## 7. AutoGen
- [ ] AutoGen Fundamentals (autogen/autogen-fundamentals.mdx)
- [ ] AutoGen Agents (autogen/autogen-conversable-agents.mdx)
- [ ] AutoGen Group Chat (autogen/autogen-group-chat-patterns.mdx)
- [ ] AutoGen Code Execution (autogen/autogen-code-execution.mdx)
- [ ] AutoGen Production (autogen/autogen-production-deployment.mdx)

## 8. Pydantic AI
- [ ] Pydantic AI Fundamentals (pydantic-ai/pydantic-ai-fundamentals.mdx)
- [ ] Pydantic AI Type Safety (pydantic-ai/pydantic-ai-type-safe-agents.mdx)
- [ ] Pydantic AI Tools (pydantic-ai/pydantic-ai-tools-and-dependencies.mdx)
- [ ] Pydantic AI Structured Output (pydantic-ai/pydantic-ai-structured-output.mdx)
- [ ] Pydantic AI Production (pydantic-ai/pydantic-ai-production-deployment.mdx)

## 9. Semantic Kernel
- [ ] Semantic Kernel Fundamentals (semantic-kernel/semantic-kernel-fundamentals.mdx)
- [ ] Semantic Kernel Plugins (semantic-kernel/semantic-kernel-plugins-and-functions.mdx)
- [ ] Semantic Kernel Planners (semantic-kernel/semantic-kernel-planners.mdx)
- [ ] Semantic Kernel Memory (semantic-kernel/semantic-kernel-memory-and-embeddings.mdx)
- [ ] Semantic Kernel Production (semantic-kernel/semantic-kernel-production-deployment.mdx)

## 10. Emerging Frameworks
- [ ] Smolagents (emerging-frameworks/smolagents-huggingface.mdx)
- [ ] Agno (emerging-frameworks/agno-formerly-phidata.mdx)
- [ ] LlamaIndex Agents (emerging-frameworks/llamaindex-agents-and-workflows.mdx)
- [ ] Haystack Agents (emerging-frameworks/haystack-agents.mdx)
- [ ] Mastra (emerging-frameworks/mastra-typescript-agents.mdx)
- [ ] Camel AI (emerging-frameworks/camel-ai.mdx)
- [ ] MetaGPT (emerging-frameworks/metagpt.mdx)

## 11. Protocols
- [ ] MCP Protocol (protocols/mcp-protocol-deep-dive.mdx)
- [ ] MCP Servers (protocols/mcp-popular-servers.mdx)
- [ ] MCP Building Servers (protocols/mcp-server-development.mdx)
- [ ] A2A Protocol (protocols/a2a-protocol-deep-dive.mdx)
- [ ] A2A Agent Cards (protocols/a2a-agent-cards.mdx)
- [ ] MCP vs A2A (protocols/mcp-vs-a2a-when-to-use.mdx)

## 12. Multi-Agent Systems
- [ ] Multi-Agent Patterns (multi-agent-systems/multi-agent-patterns-overview.mdx)
- [ ] Orchestrator Worker (multi-agent-systems/orchestrator-worker-pattern.mdx)
- [ ] Supervisor Pattern (multi-agent-systems/supervisor-pattern.mdx)
- [ ] Hierarchical Agents (multi-agent-systems/hierarchical-agent-teams.mdx)
- [ ] Agent Communication (multi-agent-systems/agent-communication-protocols.mdx)
- [ ] Multi-Agent Debugging (multi-agent-systems/multi-agent-debugging.mdx)

## 13. Memory & State
- [ ] Agent Memory Types (memory-and-state/agent-memory-types-overview.mdx)
- [ ] Short-Term Memory (memory-and-state/short-term-memory-context-window.mdx)
- [ ] Long-Term Memory (memory-and-state/long-term-memory-persistence.mdx)
- [ ] Vector Store Memory (memory-and-state/vector-store-memory.mdx)
- [ ] Conversation Management (memory-and-state/conversation-management.mdx)
- [ ] State Persistence (memory-and-state/state-persistence-and-checkpointing.mdx)

## 14. Tools & Actions
- [ ] Tool Design Principles (tools-and-actions/tool-design-principles.mdx)
- [ ] Function Calling (tools-and-actions/function-calling-deep-dive.mdx)
- [ ] API Tools (tools-and-actions/api-tools-rest-graphql.mdx)
- [ ] Database Tools (tools-and-actions/database-tools.mdx)
- [ ] Code Execution Tools (tools-and-actions/code-execution-sandboxes.mdx)
- [ ] Tool Error Handling (tools-and-actions/tool-error-handling-and-retries.mdx)

## 15. Production
- [ ] Agent Evaluation (production/agent-evaluation-frameworks.mdx)
- [ ] Agent Observability (production/agent-observability-and-tracing.mdx)
- [ ] Agent Guardrails (production/agent-guardrails-and-safety.mdx)
- [ ] Agent Security (production/agent-security-threats.mdx)
- [ ] Agent Cost Optimization (production/agent-cost-optimization.mdx)
- [ ] Agent Deployment (production/agent-deployment-patterns.mdx)
- [ ] Agent Scaling (production/agent-scaling-strategies.mdx)

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


