# Design Document: Python School Docs Structure and Content Instructions

## Purpose

This document defines the required design for the new Python learning section in the Docusaurus playbook.
The primary goal is to create a full `docs/school/python/` structure from scratch and enforce the exact Python content creation workflow.

## Required Docs Structure

The Python docs section must follow this exact folder and topic tree:

```
docs/
│
├── school/
│   │
│   ├── python/
│   │   │
│   │   ├── intro/
│   │   │   ├── what-is-python.mdx
│   │   │   ├── setup-python.mdx
│   │   │   ├── python-execution-flow.mdx
│   │   │   └── first-python-program.mdx
│   │   │
│   │   ├── fundamentals/
│   │   │   ├── variables.mdx
│   │   │   ├── data-types.mdx
│   │   │   ├── operators.mdx
│   │   │   ├── input-output.mdx
│   │   │   ├── type-conversion.mdx
│   │   │   └── comments-docstrings.mdx
│   │   │
│   │   ├── control-flow/
│   │   │   ├── if-else.mdx
│   │   │   ├── nested-conditions.mdx
│   │   │   ├── loops.mdx
│   │   │   ├── break-continue-pass.mdx
│   │   │   ├── pattern-programs.mdx
│   │   │   └── match-case.mdx
│   │   │
│   │   ├── functions/
│   │   │   ├── functions-basics.mdx
│   │   │   ├── arguments-parameters.mdx
│   │   │   ├── return-values.mdx
│   │   │   ├── lambda-functions.mdx
│   │   │   ├── recursion.mdx
│   │   │   ├── decorators.mdx
│   │   │   ├── generators.mdx
│   │   │   ├── iterators.mdx
│   │   │   └── closures.mdx
│   │   │
│   │   ├── collections/
│   │   │   ├── lists.mdx
│   │   │   ├── tuples.mdx
│   │   │   ├── sets.mdx
│   │   │   ├── dictionaries.mdx
│   │   │   ├── list-comprehension.mdx
│   │   │   ├── dictionary-comprehension.mdx
│   │   │   ├── collections-module.mdx
│   │   │   ├── deque.mdx
│   │   │   ├── counter.mdx
│   │   │   └── defaultdict.mdx
│   │   │
│   │   ├── strings/
│   │   │   ├── string-basics.mdx
│   │   │   ├── string-methods.mdx
│   │   │   ├── string-formatting.mdx
│   │   │   ├── regex.mdx
│   │   │   ├── unicode.mdx
│   │   │   └── f-strings.mdx
│   │   │
│   │   ├── oops/
│   │   │   ├── classes-objects.mdx
│   │   │   ├── constructors.mdx
│   │   │   ├── inheritance.mdx
│   │   │   ├── polymorphism.mdx
│   │   │   ├── encapsulation.mdx
│   │   │   ├── abstraction.mdx
│   │   │   ├── magic-methods.mdx
│   │   │   ├── dataclasses.mdx
│   │   │   ├── solid-principles.mdx
│   │   │   └── composition-vs-inheritance.mdx
│   │   │
│   │   ├── error-handling/
│   │   │   ├── exceptions.mdx
│   │   │   ├── custom-exceptions.mdx
│   │   │   ├── logging.mdx
│   │   │   ├── debugging.mdx
│   │   │   └── production-debugging.mdx
│   │   │
│   │   ├── file-handling/
│   │   │   ├── reading-files.mdx
│   │   │   ├── writing-files.mdx
│   │   │   ├── csv-files.mdx
│   │   │   ├── json-files.mdx
│   │   │   ├── pathlib.mdx
│   │   │   └── file-best-practices.mdx
│   │   │
│   │   ├── modules-packages/
│   │   │   ├── modules.mdx
│   │   │   ├── packages.mdx
│   │   │   ├── virtual-environments.mdx
│   │   │   ├── pip.mdx
│   │   │   ├── pyproject-toml.mdx
│   │   │   └── dependency-management.mdx
│   │   │
│   │   ├── advanced-python/
│   │   │   ├── memory-management.mdx
│   │   │   ├── garbage-collection.mdx
│   │   │   ├── shallow-vs-deep-copy.mdx
│   │   │   ├── mutability.mdx
│   │   │   ├── context-managers.mdx
│   │   │   ├── descriptors.mdx
│   │   │   ├── metaclasses.mdx
│   │   │   ├── monkey-patching.mdx
│   │   │   ├── dynamic-typing.mdx
│   │   │   └── python-internals.mdx
│   │   │
│   │   ├── concurrency/
│   │   │   ├── threading.mdx
│   │   │   ├── multiprocessing.mdx
│   │   │   ├── asyncio.mdx
│   │   │   ├── async-await.mdx
│   │   │   ├── race-conditions.mdx
│   │   │   ├── queues.mdx
│   │   │   ├── locks-semaphores.mdx
│   │   │   └── gil.mdx
│   │   │
│   │   ├── api-development/
│   │   │   ├── requests-library.mdx
│   │   │   ├── rest-api-basics.mdx
│   │   │   ├── fastapi.mdx
│   │   │   ├── flask.mdx
│   │   │   ├── authentication.mdx
│   │   │   ├── middleware.mdx
│   │   │   ├── api-versioning.mdx
│   │   │   └── rate-limiting.mdx
│   │   │
│   │   ├── databases/
│   │   │   ├── sqlite.mdx
│   │   │   ├── postgresql.mdx
│   │   │   ├── sqlalchemy.mdx
│   │   │   ├── orm-vs-raw-sql.mdx
│   │   │   ├── transactions.mdx
│   │   │   ├── indexing.mdx
│   │   │   └── connection-pooling.mdx
│   │   │
│   │   ├── testing/
│   │   │   ├── pytest.mdx
│   │   │   ├── unit-testing.mdx
│   │   │   ├── mocking.mdx
│   │   │   ├── integration-testing.mdx
│   │   │   ├── load-testing.mdx
│   │   │   └── test-best-practices.mdx
│   │   │
│   │   ├── performance/
│   │   │   ├── profiling.mdx
│   │   │   ├── memory-optimization.mdx
│   │   │   ├── caching.mdx
│   │   │   ├── lazy-loading.mdx
│   │   │   ├── vectorization.mdx
│   │   │   ├── numpy-performance.mdx
│   │   │   └── performance-best-practices.mdx
│   │   │
│   │   ├── system-design/
│   │   │   ├── python-architecture.mdx
│   │   │   ├── scalable-python.mdx
│   │   │   ├── event-driven-systems.mdx
│   │   │   ├── queue-systems.mdx
│   │   │   ├── distributed-systems.mdx
│   │   │   ├── microservices.mdx
│   │   │   └── production-patterns.mdx
│   │   │
│   │   ├── ai-engineering/
│   │   │   ├── python-for-ai.mdx
│   │   │   ├── numpy.mdx
│   │   │   ├── pandas.mdx
│   │   │   ├── llm-basics.mdx
│   │   │   ├── rag-pipelines.mdx
│   │   │   ├── vector-databases.mdx
│   │   │   ├── ai-agents.mdx
│   │   │   ├── async-ai-workflows.mdx
│   │   │   └── ai-observability.mdx
│   │   │
│   │   ├── interview-prep/
│   │   │   ├── top-python-interview-questions.mdx
│   │   │   ├── tricky-python-questions.mdx
│   │   │   ├── debugging-rounds.mdx
│   │   │   ├── coding-round-patterns.mdx
│   │   │   ├── system-design-rounds.mdx
│   │   │   └── senior-python-questions.mdx
│   │   │
│   │   └── best-practices/
│   │       ├── clean-code.mdx
│   │       ├── project-structure.mdx
│   │       ├── coding-standards.mdx
│   │       ├── security-best-practices.mdx
│   │       ├── production-checklists.mdx
│   │       ├── scalability-guidelines.mdx
│   │       └── engineering-principles.mdx
│   │
```

## Instruction Requirements

### Primary workflow

1. Build the `docs/school/python/` folder tree first.
2. Create placeholder `.mdx` files for every topic path in the tree.
3. Document and validate the structure before writing detailed content.
4. Only after the structure is in place, author topic content using the Python teacher style rules.

### Placeholders

Each `.mdx` file should include frontmatter, a title, and a one-sentence description when first created.
Example placeholder content:

```md
---
sidebar_position: 1
---

# What is Python

Placeholder: introduce Python, what it is, and why it matters.
```

## Python Content Rules

Every Python topic page must follow this structure:

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

### Content style

- Use extremely clear English.
- Use short paragraphs.
- Use structured sections.
- Use tables heavily.
- Use real-world examples.
- Explain WHY, not just HOW.
- Include performance considerations.
- Include production insights.
- Include tricky edge cases.
- Include best practices and anti-patterns.
- Keep explanations concise.

### Tone

- Practical
- Engineering-focused
- Friendly
- Confident
- Modern

Avoid:

- academic tone
- robotic phrasing
- unnecessary jargon
- motivational fluff
- overusing buzzwords

### Communication style

- Address the reader as "bro" naturally.
- Do not overuse "bro" in every sentence.
- Keep tone professional and mentor-like.

## Docusaurus Formatting Rules

This workspace uses:

- Docusaurus
- MDX
- Markdown tables
- Mermaid diagrams

The content must be compatible with Docusaurus.

### Sidebar and navigation

The site uses autogenerated sidebars from the `docs/` folder structure.
Therefore, correct folder hierarchy and filenames are the main navigation control.

### Frontmatter

Each page should use frontmatter when needed for order and sidebar labels:

```md
---
sidebar_label: "Python Lists"
sidebar_position: 1
---
```

## Validation

After creating structure and content:

- Run `yarn build`
- Optionally run `yarn start`
- Verify the new pages render correctly
- Confirm the sidebar includes the `school/python` section
- Confirm tables, code blocks, and MDX render cleanly

## Notes

- Start from structure first, not content.
- The full topic list is the source of truth.
- The agent instructions must require the structure before authoring details.
- This document is the design reference for the Python school docs rollout.
