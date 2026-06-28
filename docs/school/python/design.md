# Python Course Design & Outline Spec

This document outlines the directory structure, lesson tree, and sidebar navigation requirements for the Python course on BAE School.

## Folder structure
The Python course must be organized under `docs/school/python/` with the following structure:

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

## Content Creation Requirements
- **Placeholder Rule**: Placeholders must carry a valid Docusaurus frontmatter block, single `#` heading, and a brief lesson prompt.
- **Node Diagrams**: Every page must have the `<LearningFlow>` component explaining the underlying CPython execution paths or system architecture.
