# Project Memory

This file captures the working agreements and implementation habits for future sessions on this repo.

## Project Goal

This is a Docusaurus-based multi-topic playbook platform called **BAE School**.

The content should teach technology topics (starting with Python) in a practical, engineering-focused way for:
- beginner developers
- backend engineers
- AI engineers
- interview preparation learners
- production-minded software engineers

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, making changes to the codebase, or submitting a commit/PR, you MUST always read the project memory file completely:
- [MEMORY.md](./MEMORY.md)

Before writing Python school content, read:
- [JULES.md](../../../JULES.md) — autonomous session workflow (for Jules sessions)
- [design.md](../../../design.md)
- [CLAUDE.md](../../../CLAUDE.md)
- [python-agent.md](../../agents/python-agent.md)

These are the source of truth for content structure, tone, and workflow.

---

## Content Workflow Habit

Do not bulk-generate all topics unless the user explicitly asks for that.

Preferred workflow:
1. Work topic by topic.
2. Let the user review style.
3. Keep content concise.
4. Put relevant content only in the matching topic file.
5. Run validation after meaningful changes.
6. Update the checklists and progress status in [MEMORY.md](./MEMORY.md) immediately.

---

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

---

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

---

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

---

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
- [LearningFlow/index.tsx](../../../src/components/LearningFlow/index.tsx)
- [LearningFlow/styles.module.css](../../../src/components/LearningFlow/styles.module.css)

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

---

## Interview Prep Habit

The user wants interview prep to be serious and code-heavy.

There is an interactive quiz component:
- [PythonInterviewPrep/index.tsx](../../../src/components/PythonInterviewPrep/index.tsx)
- stores progress in browser `localStorage`
- validates answers
- explains correct answers

There is also a cheat sheet table component:
- [InterviewCheatSheet/index.tsx](../../../src/components/InterviewCheatSheet/index.tsx)
- [InterviewCheatSheet/styles.module.css](../../../src/components/InterviewCheatSheet/styles.module.css)

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

---

## Current Interview Prep Status

Pages under [interview-prep](../../../docs/school/python/interview-prep/) exist.

The top questions page has been replaced with a curated 50-question code-heavy table.

Other interview prep pages still use generated code-heavy patterns. They may need the same curated treatment later if the user asks.

---

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
- title: `BAE School`
- blog disabled
- sidebar id: `pythonSidebar` (supports additional course sidebars under a general Courses dropdown)
- homepage points to BAE School Course Catalog, Python Course, and Interview Prep

Keep:
- `docs/school/python/`
- `CLAUDE.md`
- `design.md`
- `scripts/`
- custom components under `src/components/`

---

## Validation Habit

After meaningful edits, run:
```bash
npm run typecheck
npm run build
```

Known harmless warning:
Docusaurus may fail its update check due to local config-store permissions. This is unrelated to content/build correctness.

---

## Editing Habit

Use `apply_patch` for file edits.

Do not overwrite user work casually.

Before deleting files:
- audit first
- confirm they are boilerplate or unwanted
- verify paths are inside the workspace

---

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

---

## Task Queue

> **Jules: Pick the first `- [ ]` under `### Next Task`. If empty, promote from `### Backlog`.**

### Next Task
- [ ] `review-001` | **Audit & rewrite** `intro/what-is-python.mdx` | Branch: `jules/review-what-is-python`

### Backlog
- [ ] `review-002` | Audit `intro/setup-python.mdx` | Branch: `jules/review-setup-python`
- [ ] `review-003` | Audit `intro/python-execution-flow.mdx` | Branch: `jules/review-python-execution-flow`
- [ ] `review-004` | Audit `intro/first-python-program.mdx` | Branch: `jules/review-first-python-program`
- [ ] `review-005` | Audit `fundamentals/variables.mdx` | Branch: `jules/review-variables`
- [ ] `review-006` | Audit `fundamentals/data-types.mdx` | Branch: `jules/review-data-types`
- [ ] `review-007` | Audit `fundamentals/operators.mdx` | Branch: `jules/review-operators`
- [ ] `review-008` | Audit `fundamentals/input-output.mdx` | Branch: `jules/review-input-output`
- [ ] `review-009` | Audit `fundamentals/type-conversion.mdx` | Branch: `jules/review-type-conversion`
- [ ] `review-010` | Audit `fundamentals/comments-docstrings.mdx` | Branch: `jules/review-comments-docstrings`
- [ ] `review-011` | Audit `control-flow/if-else.mdx` | Branch: `jules/review-if-else`
- [ ] `review-012` | Audit `control-flow/nested-conditions.mdx` | Branch: `jules/review-nested-conditions`
- [ ] `review-013` | Audit `control-flow/loops.mdx` | Branch: `jules/review-loops`
- [ ] `review-014` | Audit `control-flow/break-continue-pass.mdx` | Branch: `jules/review-break-continue-pass`
- [ ] `review-015` | Audit `control-flow/pattern-programs.mdx` | Branch: `jules/review-pattern-programs`
- [ ] `review-016` | Audit `control-flow/match-case.mdx` | Branch: `jules/review-match-case`
- [ ] `review-017` | Audit `functions/functions-basics.mdx` | Branch: `jules/review-functions-basics`
- [ ] `review-018` | Audit `functions/arguments-parameters.mdx` | Branch: `jules/review-arguments-parameters`
- [ ] `review-019` | Audit `functions/return-values.mdx` | Branch: `jules/review-return-values`
- [ ] `review-020` | Audit `functions/lambda-functions.mdx` | Branch: `jules/review-lambda-functions`
- [ ] `review-021` | Audit `functions/recursion.mdx` | Branch: `jules/review-recursion`
- [ ] `review-022` | Audit `functions/decorators.mdx` | Branch: `jules/review-decorators`
- [ ] `review-023` | Audit `functions/generators.mdx` | Branch: `jules/review-generators`
- [ ] `review-024` | Audit `functions/iterators.mdx` | Branch: `jules/review-iterators`
- [ ] `review-025` | Audit `functions/closures.mdx` | Branch: `jules/review-closures`
- [ ] `review-026` | Audit `collections/lists.mdx` | Branch: `jules/review-lists`
- [ ] `review-027` | Audit `collections/tuples.mdx` | Branch: `jules/review-tuples`
- [ ] `review-028` | Audit `collections/sets.mdx` | Branch: `jules/review-sets`
- [ ] `review-029` | Audit `collections/dictionaries.mdx` | Branch: `jules/review-dictionaries`
- [ ] `review-030` | Audit `collections/list-comprehension.mdx` | Branch: `jules/review-list-comprehension`
- [ ] `review-031` | Audit `collections/dictionary-comprehension.mdx` | Branch: `jules/review-dictionary-comprehension`
- [ ] `review-032` | Audit `collections/collections-module.mdx` | Branch: `jules/review-collections-module`
- [ ] `review-033` | Audit `collections/deque.mdx` | Branch: `jules/review-deque`
- [ ] `review-034` | Audit `collections/counter.mdx` | Branch: `jules/review-counter`
- [ ] `review-035` | Audit `collections/defaultdict.mdx` | Branch: `jules/review-defaultdict`
- [ ] `review-036` | Audit `strings/string-basics.mdx` | Branch: `jules/review-string-basics`
- [ ] `review-037` | Audit `strings/string-methods.mdx` | Branch: `jules/review-string-methods`
- [ ] `review-038` | Audit `strings/string-formatting.mdx` | Branch: `jules/review-string-formatting`
- [ ] `review-039` | Audit `strings/regex.mdx` | Branch: `jules/review-regex`
- [ ] `review-040` | Audit `strings/unicode.mdx` | Branch: `jules/review-unicode`
- [ ] `review-041` | Audit `strings/f-strings.mdx` | Branch: `jules/review-f-strings`
- [ ] `review-042` | Audit `oops/classes-objects.mdx` | Branch: `jules/review-classes-objects`
- [ ] `review-043` | Audit `oops/constructors.mdx` | Branch: `jules/review-constructors`
- [ ] `review-044` | Audit `oops/inheritance.mdx` | Branch: `jules/review-inheritance`
- [ ] `review-045` | Audit `oops/polymorphism.mdx` | Branch: `jules/review-polymorphism`
- [ ] `review-046` | Audit `oops/encapsulation.mdx` | Branch: `jules/review-encapsulation`
- [ ] `review-047` | Audit `oops/abstraction.mdx` | Branch: `jules/review-abstraction`
- [ ] `review-048` | Audit `oops/magic-methods.mdx` | Branch: `jules/review-magic-methods`
- [ ] `review-049` | Audit `oops/dataclasses.mdx` | Branch: `jules/review-dataclasses`
- [ ] `review-050` | Audit `oops/solid-principles.mdx` | Branch: `jules/review-solid-principles`
- [ ] `review-051` | Audit `oops/composition-vs-inheritance.mdx` | Branch: `jules/review-composition-vs-inheritance`
- [ ] `review-052` | Audit `error-handling/exceptions.mdx` | Branch: `jules/review-exceptions`
- [ ] `review-053` | Audit `error-handling/custom-exceptions.mdx` | Branch: `jules/review-custom-exceptions`
- [ ] `review-054` | Audit `error-handling/logging.mdx` | Branch: `jules/review-logging`
- [ ] `review-055` | Audit `error-handling/debugging.mdx` | Branch: `jules/review-debugging`
- [ ] `review-056` | Audit `error-handling/production-debugging.mdx` | Branch: `jules/review-production-debugging`
- [ ] `review-057` | Audit `file-handling/reading-files.mdx` | Branch: `jules/review-reading-files`
- [ ] `review-058` | Audit `file-handling/writing-files.mdx` | Branch: `jules/review-writing-files`
- [ ] `review-059` | Audit `file-handling/csv-files.mdx` | Branch: `jules/review-csv-files`
- [ ] `review-060` | Audit `file-handling/json-files.mdx` | Branch: `jules/review-json-files`
- [ ] `review-061` | Audit `file-handling/pathlib.mdx` | Branch: `jules/review-pathlib`
- [ ] `review-062` | Audit `file-handling/file-best-practices.mdx` | Branch: `jules/review-file-best-practices`
- [ ] `review-063` | Audit `modules-packages/modules.mdx` | Branch: `jules/review-modules`
- [ ] `review-064` | Audit `modules-packages/packages.mdx` | Branch: `jules/review-packages`
- [ ] `review-065` | Audit `modules-packages/virtual-environments.mdx` | Branch: `jules/review-virtual-environments`
- [ ] `review-066` | Audit `modules-packages/pip.mdx` | Branch: `jules/review-pip`
- [ ] `review-067` | Audit `modules-packages/pyproject-toml.mdx` | Branch: `jules/review-pyproject-toml`
- [ ] `review-068` | Audit `modules-packages/dependency-management.mdx` | Branch: `jules/review-dependency-management`
- [ ] `review-069` | Audit `advanced-python/memory-management.mdx` | Branch: `jules/review-memory-management`
- [ ] `review-070` | Audit `advanced-python/garbage-collection.mdx` | Branch: `jules/review-garbage-collection`
- [ ] `review-071` | Audit `advanced-python/shallow-vs-deep-copy.mdx` | Branch: `jules/review-shallow-vs-deep-copy`
- [ ] `review-072` | Audit `advanced-python/mutability.mdx` | Branch: `jules/review-mutability`
- [ ] `review-073` | Audit `advanced-python/context-managers.mdx` | Branch: `jules/review-context-managers`
- [ ] `review-074` | Audit `advanced-python/descriptors.mdx` | Branch: `jules/review-descriptors`
- [ ] `review-075` | Audit `advanced-python/metaclasses.mdx` | Branch: `jules/review-metaclasses`
- [ ] `review-076` | Audit `advanced-python/monkey-patching.mdx` | Branch: `jules/review-monkey-patching`
- [ ] `review-077` | Audit `advanced-python/dynamic-typing.mdx` | Branch: `jules/review-dynamic-typing`
- [ ] `review-078` | Audit `advanced-python/python-internals.mdx` | Branch: `jules/review-python-internals`
- [ ] `review-079` | Audit `concurrency/threading.mdx` | Branch: `jules/review-threading`
- [ ] `review-080` | Audit `concurrency/multiprocessing.mdx` | Branch: `jules/review-multiprocessing`
- [ ] `review-081` | Audit `concurrency/asyncio.mdx` | Branch: `jules/review-asyncio`
- [ ] `review-082` | Audit `concurrency/async-await.mdx` | Branch: `jules/review-async-await`
- [ ] `review-083` | Audit `concurrency/race-conditions.mdx` | Branch: `jules/review-race-conditions`
- [ ] `review-084` | Audit `concurrency/queues.mdx` | Branch: `jules/review-queues`
- [ ] `review-085` | Audit `concurrency/locks-semaphores.mdx` | Branch: `jules/review-locks-semaphores`
- [ ] `review-086` | Audit `concurrency/gil.mdx` | Branch: `jules/review-gil`
- [ ] `review-087` | Audit `api-development/requests-library.mdx` | Branch: `jules/review-requests-library`
- [ ] `review-088` | Audit `api-development/rest-api-basics.mdx` | Branch: `jules/review-rest-api-basics`
- [ ] `review-089` | Audit `api-development/fastapi.mdx` | Branch: `jules/review-fastapi`
- [ ] `review-090` | Audit `api-development/flask.mdx` | Branch: `jules/review-flask`
- [ ] `review-091` | Audit `api-development/authentication.mdx` | Branch: `jules/review-authentication`
- [ ] `review-092` | Audit `api-development/middleware.mdx` | Branch: `jules/review-middleware`
- [ ] `review-093` | Audit `api-development/api-versioning.mdx` | Branch: `jules/review-api-versioning`
- [ ] `review-094` | Audit `api-development/rate-limiting.mdx` | Branch: `jules/review-rate-limiting`
- [ ] `review-095` | Audit `databases/sqlite.mdx` | Branch: `jules/review-sqlite`
- [ ] `review-096` | Audit `databases/postgresql.mdx` | Branch: `jules/review-postgresql`
- [ ] `review-097` | Audit `databases/sqlalchemy.mdx` | Branch: `jules/review-sqlalchemy`
- [ ] `review-098` | Audit `databases/orm-vs-raw-sql.mdx` | Branch: `jules/review-orm-vs-raw-sql`
- [ ] `review-099` | Audit `databases/transactions.mdx` | Branch: `jules/review-transactions`
- [ ] `review-100` | Audit `databases/indexing.mdx` | Branch: `jules/review-indexing`
- [ ] `review-101` | Audit `databases/connection-pooling.mdx` | Branch: `jules/review-connection-pooling`
- [ ] `review-102` | Audit `testing/pytest.mdx` | Branch: `jules/review-pytest`
- [ ] `review-103` | Audit `testing/unit-testing.mdx` | Branch: `jules/review-unit-testing`
- [ ] `review-104` | Audit `testing/mocking.mdx` | Branch: `jules/review-mocking`
- [ ] `review-105` | Audit `testing/integration-testing.mdx` | Branch: `jules/review-integration-testing`
- [ ] `review-106` | Audit `testing/load-testing.mdx` | Branch: `jules/review-load-testing`
- [ ] `review-107` | Audit `testing/test-best-practices.mdx` | Branch: `jules/review-test-best-practices`
- [ ] `review-108` | Audit `performance/profiling.mdx` | Branch: `jules/review-profiling`
- [ ] `review-109` | Audit `performance/memory-optimization.mdx` | Branch: `jules/review-memory-optimization`
- [ ] `review-110` | Audit `performance/caching.mdx` | Branch: `jules/review-caching`
- [ ] `review-111` | Audit `performance/lazy-loading.mdx` | Branch: `jules/review-lazy-loading`
- [ ] `review-112` | Audit `performance/vectorization.mdx` | Branch: `jules/review-vectorization`
- [ ] `review-113` | Audit `performance/numpy-performance.mdx` | Branch: `jules/review-numpy-performance`
- [ ] `review-114` | Audit `performance/performance-best-practices.mdx` | Branch: `jules/review-performance-best-practices`
- [ ] `review-115` | Audit `system-design/python-architecture.mdx` | Branch: `jules/review-python-architecture`
- [ ] `review-116` | Audit `system-design/scalable-python.mdx` | Branch: `jules/review-scalable-python`
- [ ] `review-117` | Audit `system-design/event-driven-systems.mdx` | Branch: `jules/review-event-driven-systems`
- [ ] `review-118` | Audit `system-design/queue-systems.mdx` | Branch: `jules/review-queue-systems`
- [ ] `review-119` | Audit `system-design/distributed-systems.mdx` | Branch: `jules/review-distributed-systems`
- [ ] `review-120` | Audit `system-design/microservices.mdx` | Branch: `jules/review-microservices`
- [ ] `review-121` | Audit `system-design/production-patterns.mdx` | Branch: `jules/review-production-patterns`
- [ ] `review-122` | Audit `ai-engineering/python-for-ai.mdx` | Branch: `jules/review-python-for-ai`
- [ ] `review-123` | Audit `ai-engineering/numpy.mdx` | Branch: `jules/review-numpy`
- [ ] `review-124` | Audit `ai-engineering/pandas.mdx` | Branch: `jules/review-pandas`
- [ ] `review-125` | Audit `ai-engineering/llm-basics.mdx` | Branch: `jules/review-llm-basics`
- [ ] `review-126` | Audit `ai-engineering/rag-pipelines.mdx` | Branch: `jules/review-rag-pipelines`
- [ ] `review-127` | Audit `ai-engineering/vector-databases.mdx` | Branch: `jules/review-vector-databases`
- [ ] `review-128` | Audit `ai-engineering/ai-agents.mdx` | Branch: `jules/review-ai-agents`
- [ ] `review-129` | Audit `ai-engineering/async-ai-workflows.mdx` | Branch: `jules/review-async-ai-workflows`
- [ ] `review-130` | Audit `ai-engineering/ai-observability.mdx` | Branch: `jules/review-ai-observability`
- [ ] `review-131` | Audit `interview-prep/top-python-interview-questions.mdx` | Branch: `jules/review-top-python-interview-questions`
- [ ] `review-132` | Audit `interview-prep/tricky-python-questions.mdx` | Branch: `jules/review-tricky-python-questions`
- [ ] `review-133` | Audit `interview-prep/debugging-rounds.mdx` | Branch: `jules/review-debugging-rounds`
- [ ] `review-134` | Audit `interview-prep/coding-round-patterns.mdx` | Branch: `jules/review-coding-round-patterns`
- [ ] `review-135` | Audit `interview-prep/system-design-rounds.mdx` | Branch: `jules/review-system-design-rounds`
- [ ] `review-136` | Audit `interview-prep/senior-python-questions.mdx` | Branch: `jules/review-senior-python-questions`
- [ ] `review-137` | Audit `best-practices/clean-code.mdx` | Branch: `jules/review-clean-code`
- [ ] `review-138` | Audit `best-practices/project-structure.mdx` | Branch: `jules/review-project-structure`
- [ ] `review-139` | Audit `best-practices/coding-standards.mdx` | Branch: `jules/review-coding-standards`
- [ ] `review-140` | Audit `best-practices/security-best-practices.mdx` | Branch: `jules/review-security-best-practices`
- [ ] `review-141` | Audit `best-practices/production-checklists.mdx` | Branch: `jules/review-production-checklists`
- [ ] `review-142` | Audit `best-practices/scalability-guidelines.mdx` | Branch: `jules/review-scalability-guidelines`
- [ ] `review-143` | Audit `best-practices/engineering-principles.mdx` | Branch: `jules/review-engineering-principles`

### Completed This Cycle
_(Jules appends completed tasks here)_

---

# BAE School Roadmap & Progress

This checklist tracks the implementation of BAE School playbook topics. Completed topics have comprehensive, production-grade content. Pending topics currently have boilerplate placeholder files.

## 1. Intro
- [x] What is Python (intro/what-is-python.mdx)
- [x] Setup Python (intro/setup-python.mdx)
- [x] Python Execution Flow (intro/python-execution-flow.mdx)
- [x] First Python Program (intro/first-python-program.mdx)

## 2. Fundamentals
- [x] Variables (fundamentals/variables.mdx)
- [x] Data Types (fundamentals/data-types.mdx)
- [x] Operators (fundamentals/operators.mdx)
- [x] Input / Output (fundamentals/input-output.mdx)
- [x] Type Conversion (fundamentals/type-conversion.mdx)
- [x] Comments & Docstrings (fundamentals/comments-docstrings.mdx)

## 3. Control Flow
- [x] If-Else (control-flow/if-else.mdx)
- [x] Nested Conditions (control-flow/nested-conditions.mdx)
- [x] Loops (control-flow/loops.mdx)
- [x] Break, Continue, Pass (control-flow/break-continue-pass.mdx)
- [x] Pattern Programs (control-flow/pattern-programs.mdx)
- [x] Match-Case (control-flow/match-case.mdx)

## 4. Functions
- [x] Functions Basics (functions/functions-basics.mdx)
- [x] Arguments & Parameters (functions/arguments-parameters.mdx)
- [x] Return Values (functions/return-values.mdx)
- [x] Lambda Functions (functions/lambda-functions.mdx)
- [x] Recursion (functions/recursion.mdx)
- [x] Decorators (functions/decorators.mdx)
- [x] Generators (functions/generators.mdx)
- [x] Iterators (functions/iterators.mdx)
- [x] Closures (functions/closures.mdx)

## 5. Collections
- [x] Lists (collections/lists.mdx)
- [x] Tuples (collections/tuples.mdx)
- [x] Sets (collections/sets.mdx)
- [x] Dictionaries (collections/dictionaries.mdx)
- [x] List Comprehension (collections/list-comprehension.mdx)
- [x] Dictionary Comprehension (collections/dictionary-comprehension.mdx)
- [x] Collections Module (collections/collections-module.mdx)
- [x] Deque (collections/deque.mdx)
- [x] Counter (collections/counter.mdx)
- [x] Defaultdict (collections/defaultdict.mdx)

## 6. Strings
- [x] String Basics (strings/string-basics.mdx)
- [x] String Methods (strings/string-methods.mdx)
- [x] String Formatting (strings/string-formatting.mdx)
- [x] Regex (strings/regex.mdx)
- [x] Unicode (strings/unicode.mdx)
- [x] F-Strings (strings/f-strings.mdx)

## 7. OOPs
- [x] Classes & Objects (oops/classes-objects.mdx)
- [x] Constructors (oops/constructors.mdx)
- [x] Inheritance (oops/inheritance.mdx)
- [x] Polymorphism (oops/polymorphism.mdx)
- [x] Encapsulation (oops/encapsulation.mdx)
- [x] Abstraction (oops/abstraction.mdx)
- [x] Magic Methods (oops/magic-methods.mdx)
- [x] Dataclasses (oops/dataclasses.mdx)
- [x] SOLID Principles (oops/solid-principles.mdx)
- [x] Composition vs Inheritance (oops/composition-vs-inheritance.mdx)

## 8. Error Handling
- [x] Exceptions (error-handling/exceptions.mdx)
- [x] Custom Exceptions (error-handling/custom-exceptions.mdx)
- [x] Logging (error-handling/logging.mdx)
- [x] Debugging (error-handling/debugging.mdx)
- [x] Production Debugging (error-handling/production-debugging.mdx)

## 9. File Handling
- [x] Reading Files (file-handling/reading-files.mdx)
- [x] Writing Files (file-handling/writing-files.mdx)
- [x] CSV Files (file-handling/csv-files.mdx)
- [x] JSON Files (file-handling/json-files.mdx)
- [x] Pathlib (file-handling/pathlib.mdx)
- [x] File Best Practices (file-handling/file-best-practices.mdx)

## 10. Modules & Packages
- [x] Modules (modules-packages/modules.mdx)
- [x] Packages (modules-packages/packages.mdx)
- [x] Virtual Environments (modules-packages/virtual-environments.mdx)
- [x] Pip (modules-packages/pip.mdx)
- [x] Pyproject.toml (modules-packages/pyproject-toml.mdx)
- [x] Dependency Management (modules-packages/dependency-management.mdx)

## 11. Advanced Python
- [x] Memory Management (advanced-python/memory-management.mdx)
- [x] Garbage Collection (advanced-python/garbage-collection.mdx)
- [x] Shallow vs Deep Copy (advanced-python/shallow-vs-deep-copy.mdx)
- [x] Mutability (advanced-python/mutability.mdx)
- [x] Context Managers (advanced-python/context-managers.mdx)
- [x] Descriptors (advanced-python/descriptors.mdx)
- [x] Metaclasses (advanced-python/metaclasses.mdx)
- [x] Monkey Patching (advanced-python/monkey-patching.mdx)
- [x] Dynamic Typing (advanced-python/dynamic-typing.mdx)
- [x] Python Internals (advanced-python/python-internals.mdx)

## 12. Concurrency
- [x] Threading (concurrency/threading.mdx)
- [x] Multiprocessing (concurrency/multiprocessing.mdx)
- [x] Asyncio (concurrency/asyncio.mdx)
- [x] Async/Await (concurrency/async-await.mdx)
- [x] Race Conditions (concurrency/race-conditions.mdx)
- [x] Queues (concurrency/queues.mdx)
- [x] Locks & Semaphores (concurrency/locks-semaphores.mdx)
- [x] GIL (concurrency/gil.mdx)

## 13. API Development
- [x] Requests Library (api-development/requests-library.mdx)
- [x] REST API Basics (api-development/rest-api-basics.mdx)
- [x] FastAPI (api-development/fastapi.mdx)
- [x] Flask (api-development/flask.mdx)
- [x] Authentication (api-development/authentication.mdx)
- [x] Middleware (api-development/middleware.mdx)
- [x] API Versioning (api-development/api-versioning.mdx)
- [x] Rate Limiting (api-development/rate-limiting.mdx)

## 14. Databases
- [x] SQLite (databases/sqlite.mdx)
- [x] PostgreSQL (databases/postgresql.mdx)
- [x] SQLAlchemy (databases/sqlalchemy.mdx)
- [x] ORM vs Raw SQL (databases/orm-vs-raw-sql.mdx)
- [x] Transactions (databases/transactions.mdx)
- [x] Indexing (databases/indexing.mdx)
- [x] Connection Pooling (databases/connection-pooling.mdx)

## 15. Testing
- [x] Pytest (testing/pytest.mdx)
- [x] Unit Testing (testing/unit-testing.mdx)
- [x] Mocking (testing/mocking.mdx)
- [x] Integration Testing (testing/integration-testing.mdx)
- [x] Load Testing (testing/load-testing.mdx)
- [x] Test Best Practices (testing/test-best-practices.mdx)

## 16. Performance
- [x] Profiling (performance/profiling.mdx)
- [x] Memory Optimization (performance/memory-optimization.mdx)
- [x] Caching (performance/caching.mdx)
- [x] Lazy Loading (performance/lazy-loading.mdx)
- [x] Vectorization (performance/vectorization.mdx)
- [x] NumPy Performance (performance/numpy-performance.mdx)
- [x] Performance Best Practices (performance/performance-best-practices.mdx)

## 17. System Design
- [x] Python Architecture (system-design/python-architecture.mdx)
- [x] Scalable Python (system-design/scalable-python.mdx)
- [x] Event-Driven Systems (system-design/event-driven-systems.mdx)
- [x] Queue Systems (system-design/queue-systems.mdx)
- [x] Distributed Systems (system-design/distributed-systems.mdx)
- [x] Microservices (system-design/microservices.mdx)
- [x] Production Patterns (system-design/production-patterns.mdx)

## 18. AI Engineering
- [x] Python for AI (ai-engineering/python-for-ai.mdx)
- [x] NumPy (ai-engineering/numpy.mdx)
- [x] Pandas (ai-engineering/pandas.mdx)
- [x] LLM Basics (ai-engineering/llm-basics.mdx)
- [x] RAG Pipelines (ai-engineering/rag-pipelines.mdx)
- [x] Vector Databases (ai-engineering/vector-databases.mdx)
- [x] AI Agents (ai-engineering/ai-agents.mdx)
- [x] Async AI Workflows (ai-engineering/async-ai-workflows.mdx)
- [x] AI Observability (ai-engineering/ai-observability.mdx)

## 19. Interview Prep
- [x] Top Python Interview Questions (interview-prep/top-python-interview-questions.mdx)
- [x] Tricky Python Questions (interview-prep/tricky-python-questions.mdx)
- [x] Debugging Rounds (interview-prep/debugging-rounds.mdx)
- [x] Coding Round Patterns (interview-prep/coding-round-patterns.mdx)
- [x] System Design Rounds (interview-prep/system-design-rounds.mdx)
- [x] Senior Python Questions (interview-prep/senior-python-questions.mdx)

## 20. Best Practices
- [x] Clean Code (best-practices/clean-code.mdx)
- [x] Project Structure (best-practices/project-structure.mdx)
- [x] Coding Standards (best-practices/coding-standards.mdx)
- [x] Security Best Practices (best-practices/security-best-practices.mdx)
- [x] Production Checklists (best-practices/production-checklists.mdx)
- [x] Scalability Guidelines (best-practices/scalability-guidelines.mdx)
- [x] Engineering Principles (best-practices/engineering-principles.mdx)
