# Project Memory

This file captures the working agreements and implementation habits for future sessions on this repo.

## Project Goal

This is a Docusaurus-based Python School playbook.

The content should teach Python in a practical, engineering-focused way for:

- beginner developers
- backend engineers
- AI engineers
- interview preparation learners
- production-minded software engineers

## Must-Read Instructions

**CRITICAL:** Before starting any new task, making changes to the codebase, or submitting a commit/PR, you MUST always read `task.md` and this `MEMORY.md` file completely.

Before writing Python school content, read:

- `design.md`
- `Agents/agent.md`

These are the source of truth for content structure, tone, and workflow.

## Content Workflow Habit

Do not bulk-generate all topics unless the user explicitly asks for that.

Preferred workflow:

1. Work topic by topic.
2. Let the user review style.
3. Keep content concise.
4. Put relevant content only in the matching topic file.
5. Run validation after meaningful changes.
6. Update the checklists and progress status in `task.md` and `MEMORY.md` immediately.

## Python Topic Page Structure

Each Python topic page should follow the required 15-section structure:

1. Quick Summary
2. Real-World Analogy
3. Concept Explanation
4. Syntax Table
5. Beginner Example
6. Real-World Engineering Example
7. Internal Working
8. Performance Table
9. Top Interview Questions
10. Tricky Questions & Edge Cases
11. Real-World Usage
12. Best Practices
13. Production Notes
14. Common Mistakes
15. Related Topics

## Tone Habit

Use a natural "bro" mentor feel.

Good:

- "Bro, this is where Python shines in real teams."
- "Bro, explain references before saying mutable."

Avoid:

- using "bro" in every sentence
- sounding cringe
- sounding robotic
- academic filler

The tone should be friendly, practical, confident, and engineering-focused.

## Content Quality Habit

For every topic:

- explain why, not just how
- use tables
- include code
- include real-world engineering examples
- include performance notes
- include production notes
- include interview traps
- include common mistakes
- keep sections concise

## React Flow Diagram Habit

The user does not want all diagrams to look the same.

**MANDATORY:** React Flow diagrams must be included on every single page and concept. They must be highly unique, clean, and use real-world examples/analogies to make the concepts incredibly easy to understand.

React Flow diagrams must be topic-specific.

Use the official React Flow concepts:
- nodes represent real concepts
- handles show connection points
- edges show relationships
- labels explain transitions
- different layouts should match the topic
- use different node kinds and edge types where useful

Current reusable component paths:
- `src/components/LearningFlow/index.tsx`
- `src/components/LearningFlow/styles.module.css`

It supports:
- custom node positions
- node kinds: `core`, `process`, `data`, `tool`, `warning`, `output`
- labelled edges
- edge types: `default`, `smoothstep`, `step`, `straight`
- arrows
- optional minimap

Do not use the old generic `steps` style for important diagrams unless the topic is truly linear.

Examples already implemented:

- `what-is-python.mdx`: hub-and-spoke ecosystem
- `setup-python.mdx`: environment isolation
- `python-execution-flow.mdx`: parser/bytecode/runtime branching
- `first-python-program.mdx`: feedback loop

## Interview Prep Habit

The user wants interview prep to be serious and code-heavy.

There is an interactive quiz component:

- `src/components/PythonInterviewPrep/index.tsx`
- stores progress in browser `localStorage`
- validates answers
- explains correct answers

There is also a cheat sheet table component:

- `src/components/InterviewCheatSheet/index.tsx`
- `src/components/InterviewCheatSheet/styles.module.css`

Required table shape:

| Question / Example Question | Answer | Explanation & Tricks |
|---|---|---|

Important correction:

- The user rejected generated/repetitive concept tables.
- The "Top Python Interview Questions" table must be hand-curated and mostly code/output/fix/debug questions.
- Do not create foolish repeated rows like "Explain X", "How does X matter", "Follow-up X" for the main top interview table.

For interview prep tables:

- prefer code snippets in the first column
- include output questions
- include fix-the-bug questions
- include code review questions
- include real tricks and traps
- keep answers direct
- explain the why

## Current Interview Prep Status

Pages under `docs/school/python/interview-prep/` exist.

The top questions page has been replaced with a curated 50-question code-heavy table.

Other interview prep pages still use generated code-heavy patterns. They may need the same curated treatment later if the user asks.

## Repo Cleanup Decisions

Removed Docusaurus starter/sample content:

- `docs/intro.mdx`
- `docs/tutorial-basics/`
- `docs/tutorial-extras/`
- `blog/`
- `src/pages/markdown-page.mdx`
- `src/components/HomepageFeatures/`
- Docusaurus sample images

Current site config:

- title: `Python School`
- blog disabled
- sidebar id: `pythonSidebar`
- homepage points to Python School and Interview Prep

Keep:

- `docs/school/python/`
- `Agents/agent.md`
- `design.md`
- `scripts/`
- custom components under `src/components/`

## Validation Habit

After meaningful edits, run:

```bash
npm run typecheck
npm run build
```

Known harmless warning:

Docusaurus may fail its update check due to local config-store permissions. This is unrelated to content/build correctness.

## Editing Habit

Use `apply_patch` for file edits.

Do not overwrite user work casually.

Before deleting files:

- audit first
- confirm they are boilerplate or unwanted
- verify paths are inside the workspace

## Current Progress

**Completed Topics:**
- `intro`: what-is-python, setup-python, python-execution-flow, first-python-program
- `fundamentals`: variables, data-types, operators, input-output, type-conversion, comments-docstrings
- `control-flow`: if-else, nested-conditions, loops, break-continue-pass, pattern-programs, match-case
- `functions`: functions-basics, arguments-parameters, return-values, lambda-functions, recursion, decorators, generators, iterators, closures
- `collections`: lists, tuples, sets, dictionaries, list-comprehension, dictionary-comprehension, collections-module, deque, counter, defaultdict
- `strings`: string-basics, string-methods, string-formatting, regex, unicode, f-strings
- `oops`: classes-objects, constructors, inheritance, polymorphism, encapsulation, abstraction, magic-methods, dataclasses, solid-principles, composition-vs-inheritance
- `error-handling`: exceptions, custom-exceptions, logging, debugging, production-debugging
- `interview-prep`: top-python-interview-questions, tricky-python-questions, debugging-rounds, coding-round-patterns, system-design-rounds, senior-python-questions
- `file-handling`: all topics (reading-files, writing-files, csv-files, json-files, pathlib, file-best-practices)
- `modules-packages`: all topics (modules, packages, virtual-environments, pip, pyproject-toml, dependency-management)
- `advanced-python`: all topics (memory-management, garbage-collection, shallow-vs-deep-copy, mutability, context-managers, descriptors, metaclasses, monkey-patching, dynamic-typing, python-internals)
- `concurrency`: all topics (threading, multiprocessing, asyncio, async-await, race-conditions, queues, locks-semaphores, gil)
- `api-development`: all topics (requests-library, rest-api-basics, fastapi, flask, authentication, middleware, api-versioning, rate-limiting)
- `databases` (completed): sqlite, postgresql

**Pending Topics (Next Up):**
- `databases`: remaining topics (sqlalchemy, orm-vs-raw-sql, transactions, indexing, connection-pooling)
- `testing`: all topics (pytest, unit-testing, mocking, integration-testing, load-testing, test-best-practices)
- `performance`: all topics (profiling, memory-optimization, caching, lazy-loading, vectorization, numpy-performance, performance-best-practices)
- `system-design`: all topics (python-architecture, scalable-python, event-driven-systems, queue-systems, distributed-systems, microservices, production-patterns)
- `ai-engineering`: all topics (python-for-ai, numpy, pandas, llm-basics, rag-pipelines, vector-databases, ai-agents, async-ai-workflows, ai-observability)
- `best-practices`: all topics (clean-code, project-structure, coding-standards, security-best-practices, production-checklists, scalability-guidelines, engineering-principles)

## Current User Preferences

- Work topic by topic when creating course content.
- Create PR's once 5 topics are done.
- Always create a new git branch for work.
- Pull Requests must have a clear, descriptive summary.
- Content should have "bro feel."
- Avoid very lengthy topic pages.
- Diagrams should be professional and topic-specific.
- Interview prep must be code-heavy, not theory-heavy.
- The user prefers direct correction and practical output.
