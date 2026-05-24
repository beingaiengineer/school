from pathlib import Path
import re

root = Path(r"d:\Projects\playbook\docs\school\python")

categories = [
    "intro",
    "fundamentals",
    "control-flow",
    "functions",
    "collections",
    "strings",
    "oops",
    "error-handling",
    "file-handling",
    "modules-packages",
    "advanced-python",
    "concurrency",
    "api-development",
    "databases",
    "testing",
    "performance",
    "system-design",
    "ai-engineering",
    "interview-prep",
    "best-practices",
]

files_by_category = {
    "intro": [
        "what-is-python.mdx",
        "setup-python.mdx",
        "python-execution-flow.mdx",
        "first-python-program.mdx",
    ],
    "fundamentals": [
        "variables.mdx",
        "data-types.mdx",
        "operators.mdx",
        "input-output.mdx",
        "type-conversion.mdx",
        "comments-docstrings.mdx",
    ],
    "control-flow": [
        "if-else.mdx",
        "nested-conditions.mdx",
        "loops.mdx",
        "break-continue-pass.mdx",
        "pattern-programs.mdx",
        "match-case.mdx",
    ],
    "functions": [
        "functions-basics.mdx",
        "arguments-parameters.mdx",
        "return-values.mdx",
        "lambda-functions.mdx",
        "recursion.mdx",
        "decorators.mdx",
        "generators.mdx",
        "iterators.mdx",
        "closures.mdx",
    ],
    "collections": [
        "lists.mdx",
        "tuples.mdx",
        "sets.mdx",
        "dictionaries.mdx",
        "list-comprehension.mdx",
        "dictionary-comprehension.mdx",
        "collections-module.mdx",
        "deque.mdx",
        "counter.mdx",
        "defaultdict.mdx",
    ],
    "strings": [
        "string-basics.mdx",
        "string-methods.mdx",
        "string-formatting.mdx",
        "regex.mdx",
        "unicode.mdx",
        "f-strings.mdx",
    ],
    "oops": [
        "classes-objects.mdx",
        "constructors.mdx",
        "inheritance.mdx",
        "polymorphism.mdx",
        "encapsulation.mdx",
        "abstraction.mdx",
        "magic-methods.mdx",
        "dataclasses.mdx",
        "solid-principles.mdx",
        "composition-vs-inheritance.mdx",
    ],
    "error-handling": [
        "exceptions.mdx",
        "custom-exceptions.mdx",
        "logging.mdx",
        "debugging.mdx",
        "production-debugging.mdx",
    ],
    "file-handling": [
        "reading-files.mdx",
        "writing-files.mdx",
        "csv-files.mdx",
        "json-files.mdx",
        "pathlib.mdx",
        "file-best-practices.mdx",
    ],
    "modules-packages": [
        "modules.mdx",
        "packages.mdx",
        "virtual-environments.mdx",
        "pip.mdx",
        "pyproject-toml.mdx",
        "dependency-management.mdx",
    ],
    "advanced-python": [
        "memory-management.mdx",
        "garbage-collection.mdx",
        "shallow-vs-deep-copy.mdx",
        "mutability.mdx",
        "context-managers.mdx",
        "descriptors.mdx",
        "metaclasses.mdx",
        "monkey-patching.mdx",
        "dynamic-typing.mdx",
        "python-internals.mdx",
    ],
    "concurrency": [
        "threading.mdx",
        "multiprocessing.mdx",
        "asyncio.mdx",
        "async-await.mdx",
        "race-conditions.mdx",
        "queues.mdx",
        "locks-semaphores.mdx",
        "gil.mdx",
    ],
    "api-development": [
        "requests-library.mdx",
        "rest-api-basics.mdx",
        "fastapi.mdx",
        "flask.mdx",
        "authentication.mdx",
        "middleware.mdx",
        "api-versioning.mdx",
        "rate-limiting.mdx",
    ],
    "databases": [
        "sqlite.mdx",
        "postgresql.mdx",
        "sqlalchemy.mdx",
        "orm-vs-raw-sql.mdx",
        "transactions.mdx",
        "indexing.mdx",
        "connection-pooling.mdx",
    ],
    "testing": [
        "pytest.mdx",
        "unit-testing.mdx",
        "mocking.mdx",
        "integration-testing.mdx",
        "load-testing.mdx",
        "test-best-practices.mdx",
    ],
    "performance": [
        "profiling.mdx",
        "memory-optimization.mdx",
        "caching.mdx",
        "lazy-loading.mdx",
        "vectorization.mdx",
        "numpy-performance.mdx",
        "performance-best-practices.mdx",
    ],
    "system-design": [
        "python-architecture.mdx",
        "scalable-python.mdx",
        "event-driven-systems.mdx",
        "queue-systems.mdx",
        "distributed-systems.mdx",
        "microservices.mdx",
        "production-patterns.mdx",
    ],
    "ai-engineering": [
        "python-for-ai.mdx",
        "numpy.mdx",
        "pandas.mdx",
        "llm-basics.mdx",
        "rag-pipelines.mdx",
        "vector-databases.mdx",
        "ai-agents.mdx",
        "async-ai-workflows.mdx",
        "ai-observability.mdx",
    ],
    "interview-prep": [
        "top-python-interview-questions.mdx",
        "tricky-python-questions.mdx",
        "debugging-rounds.mdx",
        "coding-round-patterns.mdx",
        "system-design-rounds.mdx",
        "senior-python-questions.mdx",
    ],
    "best-practices": [
        "clean-code.mdx",
        "project-structure.mdx",
        "coding-standards.mdx",
        "security-best-practices.mdx",
        "production-checklists.mdx",
        "scalability-guidelines.mdx",
        "engineering-principles.mdx",
    ],
}


def update_file_position(path: Path, position: int):
    text = path.read_text(encoding='utf-8')
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1].strip().splitlines()
            body = parts[2]
            new_lines = []
            found = False
            for line in frontmatter:
                if line.startswith('sidebar_position:'):
                    new_lines.append(f'sidebar_position: {position}')
                    found = True
                else:
                    new_lines.append(line)
            if not found:
                new_lines.append(f'sidebar_position: {position}')
            new_frontmatter = '\n'.join(new_lines)
            path.write_text('---\n' + new_frontmatter + '\n---' + body, encoding='utf-8')
            return
    path.write_text(f'---\nsidebar_position: {position}\n---\n\n' + path.read_text(encoding='utf-8'), encoding='utf-8')


def update_category_file(path: Path, label: str, position: int):
    content = {
        "label": label,
        "collapsed": False,
        "position": position,
    }
    json_text = '{"label": "' + label + '", "collapsed": false, "position": ' + str(position) + '}'
    path.write_text(json_text, encoding='utf-8')

if not root.exists():
    raise FileNotFoundError(f"Root path does not exist: {root}")

# Update top-level category ordering
update_category_file(root / '_category_.json', 'Python', 1)

# Update categories and files
for idx, category in enumerate(categories, start=1):
    category_path = root / category
    if not category_path.exists():
        print(f"Warning: missing category folder {category_path}")
        continue
    label = category.replace('-', ' ').title()
    update_category_file(category_path / '_category_.json', label, idx + 1)
    files = files_by_category.get(category, [])
    for file_idx, file_name in enumerate(files, start=1):
        file_path = category_path / file_name
        if not file_path.exists():
            print(f"Warning: missing file {file_path}")
            continue
        update_file_position(file_path, file_idx)

print('Ordering update complete.')
