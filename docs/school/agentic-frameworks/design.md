# Agentic Frameworks Course Design & Outline Spec

This document outlines the directory structure, lesson tree, and sidebar navigation requirements for the Agentic Frameworks course on BAE School.

## Folder Structure
The course must be organized under `docs/school/agentic-frameworks/` with category-based subdirectories:

```
docs/school/agentic-frameworks/
├── _category_.json
│
├── intro/
│   ├── _category_.json
│   ├── what-are-ai-agents.mdx
│   ├── agent-vs-chatbot-vs-rag.mdx
│   ├── anatomy-of-an-agent.mdx
│   ├── agent-types-and-taxonomies.mdx
│   ├── how-agents-think.mdx
│   ├── llm-as-reasoning-engine.mdx
│   ├── agent-ecosystem-landscape-2026.mdx
│   ├── choosing-a-framework.mdx
│   ├── agent-safety-and-ethics.mdx
│   └── your-first-agent.mdx
│
├── architecture-patterns/
│   ├── _category_.json
│   ├── react-pattern.mdx
│   ├── plan-and-execute.mdx
│   ├── reflection-and-reflexion.mdx
│   ├── tool-use-pattern.mdx
│   ├── routing-pattern.mdx
│   ├── parallelization-pattern.mdx
│   ├── chain-of-thought-agents.mdx
│   ├── self-ask-pattern.mdx
│   ├── rewoo-pattern.mdx
│   ├── map-reduce-agents.mdx
│   ├── human-in-the-loop.mdx
│   └── agent-architectures-compared.mdx
│
├── langchain-langgraph/
│   ├── _category_.json
│   ├── langchain-fundamentals.mdx
│   ├── langchain-chains-vs-agents.mdx
│   ├── langchain-tools-and-toolkits.mdx
│   ├── langgraph-intro.mdx
│   ├── langgraph-state-machines.mdx
│   ├── langgraph-nodes-and-edges.mdx
│   ├── langgraph-conditional-routing.mdx
│   ├── langgraph-checkpointing.mdx
│   ├── langgraph-memory.mdx
│   ├── langgraph-streaming.mdx
│   ├── langgraph-human-in-loop.mdx
│   ├── langgraph-multi-agent.mdx
│   ├── langgraph-subgraphs.mdx
│   ├── langgraph-studio.mdx
│   ├── langsmith-observability.mdx
│   └── langgraph-production-deployment.mdx
│
├── crewai/
│   ├── _category_.json
│   ├── crewai-fundamentals.mdx
│   ├── crewai-agents-and-roles.mdx
│   ├── crewai-tasks-and-processes.mdx
│   ├── crewai-tools-ecosystem.mdx
│   ├── crewai-flows-and-pipelines.mdx
│   ├── crewai-memory-system.mdx
│   ├── crewai-knowledge-sources.mdx
│   ├── crewai-training-and-testing.mdx
│   ├── crewai-multi-agent-crews.mdx
│   └── crewai-production-deployment.mdx
│
├── openai-agents-sdk/
│   ├── _category_.json
│   ├── openai-sdk-fundamentals.mdx
│   ├── openai-sdk-agents-and-runners.mdx
│   ├── openai-sdk-tools-and-functions.mdx
│   ├── openai-sdk-handoffs.mdx
│   ├── openai-sdk-context-variables.mdx
│   ├── openai-sdk-guardrails.mdx
│   ├── openai-sdk-tracing.mdx
│   ├── openai-responses-api.mdx
│   └── openai-sdk-production-deployment.mdx
│
├── google-adk/
│   ├── _category_.json
│   ├── google-adk-fundamentals.mdx
│   ├── google-adk-agent-types.mdx
│   ├── google-adk-tools-and-functions.mdx
│   ├── google-adk-multi-agent-orchestration.mdx
│   ├── google-adk-sessions-and-state.mdx
│   ├── google-adk-callbacks-and-hooks.mdx
│   ├── google-adk-artifact-management.mdx
│   ├── google-adk-evaluation.mdx
│   └── google-adk-production-deployment.mdx
│
├── autogen/
│   ├── _category_.json
│   ├── autogen-fundamentals.mdx
│   ├── autogen-conversable-agents.mdx
│   ├── autogen-group-chat-patterns.mdx
│   ├── autogen-code-execution.mdx
│   ├── autogen-teams-and-swarms.mdx
│   ├── autogen-studio.mdx
│   └── autogen-production-deployment.mdx
│
├── pydantic-ai/
│   ├── _category_.json
│   ├── pydantic-ai-fundamentals.mdx
│   ├── pydantic-ai-type-safe-agents.mdx
│   ├── pydantic-ai-tools-and-dependencies.mdx
│   ├── pydantic-ai-structured-output.mdx
│   ├── pydantic-ai-result-validation.mdx
│   ├── pydantic-ai-testing.mdx
│   └── pydantic-ai-production-deployment.mdx
│
├── semantic-kernel/
│   ├── _category_.json
│   ├── semantic-kernel-fundamentals.mdx
│   ├── semantic-kernel-plugins-and-functions.mdx
│   ├── semantic-kernel-planners.mdx
│   ├── semantic-kernel-memory-and-embeddings.mdx
│   ├── semantic-kernel-agents.mdx
│   ├── semantic-kernel-dotnet-vs-python.mdx
│   └── semantic-kernel-production-deployment.mdx
│
├── emerging-frameworks/
│   ├── _category_.json
│   ├── smolagents-huggingface.mdx
│   ├── agno-formerly-phidata.mdx
│   ├── llamaindex-agents-and-workflows.mdx
│   ├── haystack-agents.mdx
│   ├── mastra-typescript-agents.mdx
│   ├── camel-ai.mdx
│   ├── metagpt.mdx
│   ├── bee-agent-ibm.mdx
│   ├── agency-swarm.mdx
│   └── dspy-declarative-agents.mdx
│
├── llm-for-agents/
│   ├── _category_.json
│   ├── choosing-llms-for-agents.mdx
│   ├── openai-models-for-agents.mdx
│   ├── gemini-models-for-agents.mdx
│   ├── claude-models-for-agents.mdx
│   ├── open-source-models-for-agents.mdx
│   ├── model-routing-and-fallbacks.mdx
│   └── cost-vs-quality-tradeoffs.mdx
│
├── prompt-engineering-for-agents/
│   ├── _category_.json
│   ├── system-prompts-for-agents.mdx
│   ├── few-shot-prompting-agents.mdx
│   ├── chain-of-thought-prompting.mdx
│   ├── tool-description-design.mdx
│   ├── agent-persona-design.mdx
│   └── prompt-injection-defense.mdx
│
├── protocols/
│   ├── _category_.json
│   ├── mcp-protocol-deep-dive.mdx
│   ├── mcp-architecture-client-server.mdx
│   ├── mcp-tools-resources-prompts.mdx
│   ├── mcp-server-development.mdx
│   ├── mcp-popular-servers.mdx
│   ├── mcp-security-and-auth.mdx
│   ├── a2a-protocol-deep-dive.mdx
│   ├── a2a-agent-cards.mdx
│   ├── a2a-task-management.mdx
│   ├── a2a-streaming-and-push.mdx
│   └── mcp-vs-a2a-when-to-use.mdx
│
├── multi-agent-systems/
│   ├── _category_.json
│   ├── multi-agent-patterns-overview.mdx
│   ├── orchestrator-worker-pattern.mdx
│   ├── supervisor-pattern.mdx
│   ├── hierarchical-agent-teams.mdx
│   ├── peer-to-peer-agents.mdx
│   ├── agent-communication-protocols.mdx
│   ├── shared-state-vs-message-passing.mdx
│   ├── swarm-intelligence.mdx
│   ├── agent-handoffs-and-delegation.mdx
│   └── multi-agent-debugging.mdx
│
├── memory-and-state/
│   ├── _category_.json
│   ├── agent-memory-types-overview.mdx
│   ├── short-term-memory-context-window.mdx
│   ├── long-term-memory-persistence.mdx
│   ├── episodic-memory.mdx
│   ├── semantic-memory.mdx
│   ├── vector-store-memory.mdx
│   ├── rag-as-agent-memory.mdx
│   ├── conversation-management.mdx
│   ├── state-persistence-and-checkpointing.mdx
│   └── memory-architecture-patterns.mdx
│
├── tools-and-actions/
│   ├── _category_.json
│   ├── tool-design-principles.mdx
│   ├── function-calling-deep-dive.mdx
│   ├── api-tools-rest-graphql.mdx
│   ├── database-tools.mdx
│   ├── code-execution-sandboxes.mdx
│   ├── browser-automation-tools.mdx
│   ├── file-system-tools.mdx
│   ├── search-and-retrieval-tools.mdx
│   ├── custom-tool-development.mdx
│   └── tool-error-handling-and-retries.mdx
│
├── agent-ux/
│   ├── _category_.json
│   ├── agent-ui-patterns.mdx
│   ├── streaming-responses.mdx
│   ├── progress-indicators-for-agents.mdx
│   ├── human-approval-workflows.mdx
│   ├── agent-chat-interfaces.mdx
│   └── agent-dashboards-and-monitoring.mdx
│
├── production/
│   ├── _category_.json
│   ├── agent-evaluation-frameworks.mdx
│   ├── agent-observability-and-tracing.mdx
│   ├── agent-guardrails-and-safety.mdx
│   ├── agent-security-threats.mdx
│   ├── agent-cost-optimization.mdx
│   ├── agent-deployment-patterns.mdx
│   ├── agent-scaling-strategies.mdx
│   ├── agent-logging-and-auditing.mdx
│   ├── agent-versioning-and-rollback.mdx
│   ├── agent-ab-testing.mdx
│   └── agent-reliability-engineering.mdx
│
├── real-world-projects/
│   ├── _category_.json
│   ├── build-a-research-agent.mdx
│   ├── build-a-coding-assistant.mdx
│   ├── build-a-customer-support-agent.mdx
│   ├── build-a-data-analysis-agent.mdx
│   ├── build-a-multi-agent-pipeline.mdx
│   └── build-an-autonomous-workflow.mdx
│
├── interview-prep/
│   ├── _category_.json
│   ├── agent-fundamentals-questions.mdx
│   ├── framework-comparison-questions.mdx
│   ├── agent-architecture-design-rounds.mdx
│   ├── agent-coding-rounds.mdx
│   ├── agent-system-design-rounds.mdx
│   ├── agent-debugging-scenarios.mdx
│   └── agent-production-scenarios.mdx
│
└── best-practices/
    ├── _category_.json
    ├── framework-selection-decision-tree.mdx
    ├── agent-design-patterns-catalog.mdx
    ├── agent-testing-strategies.mdx
    ├── agent-anti-patterns.mdx
    ├── agent-migration-guides.mdx
    └── future-of-ai-agents.mdx
```

## Total Topics: ~170

## Sidebar Categories (sidebar_position order)
1. **Intro** (10 topics) — What agents are, types, taxonomy, ecosystem, ethics, first agent
2. **Architecture Patterns** (12 topics) — ReAct, Plan-Execute, Reflection, Reflexion, CoT, Self-Ask, REWOO, Map-Reduce, Routing, Parallelization, HITL, comparison
3. **LangChain & LangGraph** (16 topics) — Chains vs agents, tools, state machines, nodes/edges, routing, checkpointing, memory, streaming, HITL, multi-agent, subgraphs, Studio, LangSmith, production
4. **CrewAI** (10 topics) — Roles, tasks, processes, tools, flows, memory, knowledge, training, multi-agent, production
5. **OpenAI Agents SDK** (9 topics) — Agents, runners, tools, handoffs, context vars, guardrails, tracing, Responses API, production
6. **Google ADK** (9 topics) — Agent types, tools, orchestration, sessions, callbacks, artifacts, evaluation, production
7. **AutoGen** (7 topics) — Conversable agents, group chat, code exec, teams, swarms, Studio, production
8. **Pydantic AI** (7 topics) — Type-safe agents, tools, dependencies, structured output, validation, testing, production
9. **Semantic Kernel** (7 topics) — Plugins, functions, planners, memory, agents, .NET vs Python, production
10. **Emerging Frameworks** (10 topics) — Smolagents, Agno, LlamaIndex, Haystack, Mastra, Camel AI, MetaGPT, Bee Agent, Agency Swarm, DSPy
11. **LLM Selection for Agents** (7 topics) — OpenAI, Gemini, Claude, open-source, routing, fallbacks, cost vs quality
12. **Prompt Engineering for Agents** (6 topics) — System prompts, few-shot, CoT, tool descriptions, persona, injection defense
13. **Protocols (MCP & A2A)** (11 topics) — MCP deep dive, architecture, tools/resources/prompts, server dev, popular servers, security, A2A deep dive, agent cards, task mgmt, streaming, comparison
14. **Multi-Agent Systems** (10 topics) — Orchestrator-worker, supervisor, hierarchical, P2P, communication, shared state, swarm intelligence, handoffs, debugging
15. **Memory & State** (10 topics) — Short/long-term, episodic, semantic, vector stores, RAG-as-memory, conversation mgmt, checkpointing, architecture patterns
16. **Tools & Actions** (10 topics) — Function calling, API tools, DB tools, code exec, browser, file system, search, custom dev, error handling
17. **Agent UX** (6 topics) — UI patterns, streaming, progress, approval workflows, chat interfaces, dashboards
18. **Production** (11 topics) — Evaluation, observability, guardrails, security, cost, deployment, scaling, logging, versioning, A/B testing, reliability
19. **Real-World Projects** (6 topics) — Research agent, coding assistant, support agent, data analysis, multi-agent pipeline, autonomous workflow
20. **Interview Prep** (7 topics) — Fundamentals, comparisons, architecture, coding, system design, debugging, production scenarios
21. **Best Practices** (6 topics) — Selection tree, patterns catalog, testing, anti-patterns, migration, future outlook

## Category JSON Template
Each subdirectory must contain a `_category_.json`:
```json
{
  "label": "Category Name",
  "position": <number>,
  "link": {
    "type": "generated-index",
    "description": "Category description"
  }
}
```

## Page Section Template (16 Sections)
Every page in this course follows the 15-section template from `CLAUDE.md` PLUS one additional section:

**Section 16: Top GitHub Repos** — A table of 5–10 top-starred GitHub repos related to the topic, with columns: Repository (linked), Stars, Description, Why It Matters. See `agentic-frameworks-agent.md` for full rules.
