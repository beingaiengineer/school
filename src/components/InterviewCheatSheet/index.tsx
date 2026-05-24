import styles from './styles.module.css';

type Concept = {
  concept: string;
  answer: string;
  example: string;
  trap: string;
  production: string;
  trick: string;
};

type CheatSheetTopic =
  | 'top'
  | 'tricky'
  | 'debugging'
  | 'coding'
  | 'system-design'
  | 'senior';

type Row = {
  question: string;
  code?: string;
  answer: string;
  explanation: string;
};

const topics: Record<CheatSheetTopic, {title: string; concepts: Concept[]}> = {
  top: {
    title: 'Top Python Interview Questions',
    concepts: [
      {concept: 'Python language purpose', answer: 'Python is a high-level, general-purpose language used for APIs, automation, data, AI, and tooling.', example: 'Why is Python used in backend and AI teams?', trap: 'Do not call it only a scripting language.', production: 'Mention ecosystem, readability, hiring pool, and fast delivery.', trick: 'Interviewer may ask when Python is not the best choice.'},
      {concept: 'Dynamic typing', answer: 'Types are checked at runtime, while type hints are optional developer tooling.', example: 'Can `x = 1` later become `x = "one"`?', trap: 'Type hints do not enforce runtime checks by default.', production: 'Use type hints, tests, and linters in larger codebases.', trick: 'Explain the difference between dynamic typing and weak typing.'},
      {concept: 'Mutability', answer: 'Mutable objects can change in place; immutable objects create new values.', example: 'Why does `list.append()` change the same list?', trap: 'Confusing variable reassignment with object mutation.', production: 'Avoid shared mutable defaults and accidental state leaks.', trick: 'Ask about tuple immutability when it contains a list.'},
      {concept: 'Lists vs tuples', answer: 'Lists are mutable and good for changing ordered data; tuples are immutable and good for fixed records.', example: 'When should you use tuple instead of list?', trap: 'Saying tuple is always faster without context.', production: 'Use tuples for stable return values or coordinates.', trick: 'Tuple can contain mutable objects.'},
      {concept: 'Dictionaries', answer: 'Dictionaries store key-value pairs and offer average O(1) lookup.', example: 'Why use dict for user lookup by ID?', trap: 'Keys must be hashable.', production: 'Use dicts for indexes, caches, configs, and payloads.', trick: 'Ask what happens when a key is missing.'},
      {concept: 'Functions', answer: 'Functions package reusable behavior and create clearer boundaries.', example: 'Why split code into functions?', trap: 'Huge functions become hard to test.', production: 'Keep functions focused, typed, and testable.', trick: 'Ask about default argument evaluation.'},
      {concept: 'Exceptions', answer: 'Exceptions represent failure paths and can be caught intentionally.', example: 'When should you catch `ValueError`?', trap: 'Catching bare `Exception` hides bugs.', production: 'Log context and catch specific exceptions near recovery points.', trick: 'Ask about `finally` execution.'},
      {concept: 'Modules and packages', answer: 'Modules are Python files; packages organize modules into folders.', example: 'What is the difference between module and package?', trap: 'Circular imports can break startup.', production: 'Keep imports clean and avoid import-time side effects.', trick: 'Ask why `python -m` helps.'},
      {concept: 'Virtual environments', answer: 'A virtual environment isolates project dependencies.', example: 'Why use `.venv`?', trap: 'Installing all packages globally.', production: 'Make setup reproducible in CI and deployment.', trick: 'Ask why `python -m pip` is safer.'},
      {concept: 'GIL', answer: 'The GIL lets one CPython thread execute Python bytecode at a time.', example: 'Why may threading not speed CPU-heavy Python code?', trap: 'Thinking threads are useless for I/O.', production: 'Use threads for I/O, multiprocessing or native libs for CPU work.', trick: 'Ask about asyncio vs threading.'},
    ],
  },
  tricky: {
    title: 'Tricky Python Questions',
    concepts: [
      {concept: 'Mutable default arguments', answer: 'Default arguments are evaluated once when the function is defined.', example: '`def add(x, items=[]): items.append(x)`', trap: 'The same list is reused across calls.', production: 'Use `None` and create a new list inside.', trick: 'Ask why the bug appears only after multiple calls.'},
      {concept: 'List multiplication references', answer: '`[[]] * 3` repeats references to the same inner list.', example: '`arr = [[]] * 3; arr[0].append(1)`', trap: 'All rows change together.', production: 'Use `[[] for _ in range(3)]`.', trick: 'Ask difference between shallow and deep copy.'},
      {concept: 'Late binding closures', answer: 'Closures capture variables, not frozen values.', example: 'Functions created in a loop all read the final loop value.', trap: 'Every function returns the same value.', production: 'Bind values with default args or helper factories.', trick: 'Ask how `lambda i=i` works.'},
      {concept: 'Identity vs equality', answer: '`is` checks identity; `==` checks value equality.', example: '`a == b` vs `a is b`', trap: 'Using `is` for strings or numbers.', production: 'Use `is None` only for singleton checks.', trick: 'Ask about small integer interning.'},
      {concept: 'Truthiness', answer: 'Empty containers, zero, `None`, and `False` are falsy.', example: '`if items:`', trap: 'Confusing empty list with missing value.', production: 'Use explicit `is None` when absence matters.', trick: 'Ask about custom `__bool__`.'},
      {concept: 'Shallow copy', answer: 'A shallow copy copies the outer container but keeps inner references.', example: '`copy.copy(nested)`', trap: 'Nested lists still mutate together.', production: 'Use deep copy carefully because it can be expensive.', trick: 'Ask when deep copy is dangerous.'},
      {concept: 'Generator exhaustion', answer: 'Generators produce values once and then become exhausted.', example: '`sum(gen); list(gen)`', trap: 'Second read returns nothing.', production: 'Materialize only when reuse is required.', trick: 'Ask about memory benefits.'},
      {concept: 'LEGB scope', answer: 'Python resolves names through Local, Enclosing, Global, Built-in scopes.', example: 'Why does assignment inside function create local name?', trap: 'Forgetting `nonlocal` or `global`.', production: 'Avoid global mutable state.', trick: 'Ask why `UnboundLocalError` happens.'},
      {concept: 'Dictionary key hashing', answer: 'Dict keys must be hashable and stable.', example: 'Can a list be a dict key?', trap: 'Mutable keys are not allowed.', production: 'Use strings, ints, tuples of immutable values.', trick: 'Ask what happens if hash changes.'},
      {concept: 'Floating point precision', answer: 'Floats are binary approximations of decimal values.', example: '`0.1 + 0.2 == 0.3`', trap: 'Exact equality can fail.', production: 'Use `Decimal` for money and tolerances for measurements.', trick: 'Ask why printing looks rounded.'},
    ],
  },
  debugging: {
    title: 'Debugging Rounds',
    concepts: [
      {concept: 'Reading tracebacks', answer: 'Start with the exception type and final stack frame, then inspect the call path.', example: 'How do you debug a long traceback?', trap: 'Reading only the first line.', production: 'Capture logs with request IDs and context.', trick: 'Ask which frame is your code vs library code.'},
      {concept: 'SyntaxError vs runtime error', answer: 'Syntax errors stop parsing; runtime errors happen during execution.', example: 'Why does no print run before bad syntax?', trap: 'Expecting earlier lines to execute.', production: 'CI catches syntax before deploy.', trick: 'Ask about import-time syntax errors.'},
      {concept: 'NameError', answer: 'A name was used before it existed in scope.', example: '`print(total)` before assignment', trap: 'Assuming typo is a package problem.', production: 'Use linters to catch undefined names.', trick: 'Ask about `UnboundLocalError`.'},
      {concept: 'TypeError', answer: 'An operation received an object of the wrong type.', example: '`"1" + 2`', trap: 'Blindly casting without checking data source.', production: 'Validate API payloads and use type hints.', trick: 'Ask why duck typing still has TypeErrors.'},
      {concept: 'KeyError', answer: 'A dictionary key was missing.', example: '`user["email"]`', trap: 'Assuming all payloads are complete.', production: 'Use `.get()`, schema validation, or explicit error handling.', trick: 'Ask when `.get()` hides bugs.'},
      {concept: 'IndexError', answer: 'A sequence index was out of range.', example: '`items[0]` on empty list', trap: 'Not checking empty results.', production: 'Guard external data and query results.', trick: 'Ask about negative indexes.'},
      {concept: 'ImportError', answer: 'Python could not import a module or name.', example: 'Circular import during app startup', trap: 'Installing packages when the issue is local naming.', production: 'Avoid circular dependencies and shadowing module names.', trick: 'Ask why `random.py` breaks imports.'},
      {concept: 'Logging', answer: 'Logging records useful runtime events with levels and context.', example: 'What should you log during a failed payment?', trap: 'Logging secrets or noisy useless messages.', production: 'Use structured logs and correlation IDs.', trick: 'Ask when to use warning vs error.'},
      {concept: 'Reproduction', answer: 'A bug should be reduced to a small repeatable case.', example: 'How do you debug a flaky test?', trap: 'Changing many things at once.', production: 'Capture inputs, environment, versions, and timing.', trick: 'Ask how to isolate nondeterminism.'},
      {concept: 'Observability', answer: 'Logs, metrics, and traces explain behavior in running systems.', example: 'How do you debug production latency?', trap: 'Using print statements in production.', production: 'Measure p95, error rates, queue depth, and dependencies.', trick: 'Ask what metric proves the fix.'},
    ],
  },
  coding: {
    title: 'Coding Round Patterns',
    concepts: [
      {concept: 'Two pointers', answer: 'Use two indexes moving through a sequence to reduce nested loops.', example: 'Sorted pair sum problem', trap: 'Using O(n²) when sorted order helps.', production: 'Good for arrays, strings, and merge-like scans.', trick: 'Ask how duplicates are handled.'},
      {concept: 'Sliding window', answer: 'Maintain a moving range to solve subarray or substring problems.', example: 'Longest substring without repeating characters', trap: 'Resetting the whole window unnecessarily.', production: 'Useful for streaming windows and rate checks.', trick: 'Ask fixed vs variable window.'},
      {concept: 'Hash map lookup', answer: 'Store seen values for average O(1) access.', example: 'Two sum', trap: 'Forgetting duplicate values.', production: 'Build indexes for fast lookup.', trick: 'Ask memory tradeoff.'},
      {concept: 'Stack', answer: 'Use LIFO behavior for nested or previous-state problems.', example: 'Valid parentheses', trap: 'Not checking stack empty before pop.', production: 'Useful in parsing and undo flows.', trick: 'Ask about monotonic stacks.'},
      {concept: 'Queue', answer: 'Use FIFO behavior for level-order and scheduling.', example: 'BFS traversal', trap: 'Using list `pop(0)` instead of deque.', production: 'Use `collections.deque` for efficient queues.', trick: 'Ask complexity of `popleft()`.'},
      {concept: 'Binary search', answer: 'Halve the search space when the predicate is monotonic.', example: 'Find first bad version', trap: 'Off-by-one boundaries.', production: 'Useful for sorted data and capacity search.', trick: 'Ask what makes a predicate monotonic.'},
      {concept: 'DFS recursion', answer: 'Explore depth-first using recursion or stack.', example: 'Count connected components', trap: 'Recursion depth on large graphs.', production: 'Use iterative DFS when depth is unknown.', trick: 'Ask visited-set placement.'},
      {concept: 'Dynamic programming', answer: 'Reuse overlapping subproblem results.', example: 'Climbing stairs', trap: 'Writing recursion without memoization.', production: 'Useful for optimization problems, less common in app code.', trick: 'Ask state definition first.'},
      {concept: 'Sorting with keys', answer: 'Sort by derived values using `key=`.', example: 'Sort users by score then name', trap: 'Writing custom comparator unnecessarily.', production: 'Stable sorting helps multi-step ordering.', trick: 'Ask about time complexity.'},
      {concept: 'Heap', answer: 'Use priority queue behavior for top-k or scheduling.', example: 'Find k largest elements', trap: 'Sorting everything when k is small.', production: 'Useful for task priority and streaming top-k.', trick: 'Ask min-heap vs max-heap in Python.'},
    ],
  },
  'system-design': {
    title: 'System Design Rounds',
    concepts: [
      {concept: 'API design', answer: 'Define clear resources, methods, status codes, and contracts.', example: 'Design a payment retry API', trap: 'Ignoring idempotency.', production: 'Version APIs and validate payloads.', trick: 'Ask how clients retry safely.'},
      {concept: 'Idempotency', answer: 'Repeated same request should not create duplicate side effects.', example: 'Duplicate payment request', trap: 'Using only client timestamps.', production: 'Use idempotency keys and durable storage.', trick: 'Ask how long keys are retained.'},
      {concept: 'Caching', answer: 'Store frequently needed data closer to the caller.', example: 'Cache product catalog response', trap: 'Serving stale critical data.', production: 'Define TTL, invalidation, and fallback.', trick: 'Ask cache stampede prevention.'},
      {concept: 'Queues', answer: 'Queues decouple producers and consumers for async processing.', example: 'Email sending queue', trap: 'Assuming queue means exactly-once processing.', production: 'Handle retries, DLQs, and idempotent consumers.', trick: 'Ask ordering guarantees.'},
      {concept: 'Database indexing', answer: 'Indexes speed reads by adding write and storage cost.', example: 'Index `user_id` for lookup', trap: 'Indexing every column.', production: 'Use query plans and real access patterns.', trick: 'Ask compound index order.'},
      {concept: 'Rate limiting', answer: 'Limit requests per user, IP, token, or tenant.', example: 'Protect login endpoint', trap: 'Only limiting globally.', production: 'Use sliding window or token bucket.', trick: 'Ask distributed rate limiting.'},
      {concept: 'Observability', answer: 'Expose logs, metrics, and traces for system behavior.', example: 'Debug slow checkout', trap: 'Only logging errors.', production: 'Track latency percentiles and dependency failures.', trick: 'Ask what dashboard you build.'},
      {concept: 'Horizontal scaling', answer: 'Add more instances behind a load balancer.', example: 'Scale FastAPI workers', trap: 'Keeping session state only in memory.', production: 'Externalize state and use health checks.', trick: 'Ask sticky sessions tradeoff.'},
      {concept: 'Consistency', answer: 'Choose how fresh and synchronized data must be.', example: 'Wallet balance vs analytics counter', trap: 'Using eventual consistency for money incorrectly.', production: 'Use transactions for critical invariants.', trick: 'Ask strong vs eventual consistency.'},
      {concept: 'Background jobs', answer: 'Move slow work outside request-response path.', example: 'Generate invoice PDF after order', trap: 'Losing job status and retries.', production: 'Store job state and retry safely.', trick: 'Ask how user checks progress.'},
    ],
  },
  senior: {
    title: 'Senior Python Questions',
    concepts: [
      {concept: 'Architecture boundaries', answer: 'Separate domain logic, infrastructure, and presentation concerns.', example: 'How would you structure a Python service?', trap: 'Putting all logic in route handlers.', production: 'Use clear modules, interfaces, and tests.', trick: 'Ask how boundaries affect refactoring.'},
      {concept: 'Concurrency choice', answer: 'Choose threads, asyncio, multiprocessing, or external workers based on workload.', example: 'API calls vs image processing', trap: 'Using threads for CPU-heavy Python loops.', production: 'Measure bottlenecks and pick the simplest model.', trick: 'Ask about GIL impact.'},
      {concept: 'Memory profiling', answer: 'Measure object growth, references, and allocation hot spots.', example: 'Worker memory keeps increasing', trap: 'Calling every increase a leak.', production: 'Use tracemalloc, objgraph, and metrics.', trick: 'Ask about caches and reference cycles.'},
      {concept: 'Dependency governance', answer: 'Control versions, licenses, vulnerabilities, and upgrade paths.', example: 'How do you manage package risk?', trap: 'Blindly running latest packages in production.', production: 'Pin, scan, test, and upgrade intentionally.', trick: 'Ask transitive dependency risk.'},
      {concept: 'Testing strategy', answer: 'Balance unit, integration, contract, and end-to-end tests.', example: 'Testing a payment workflow', trap: 'Mocking everything and testing nothing real.', production: 'Use test pyramid with targeted integration tests.', trick: 'Ask what should not be mocked.'},
      {concept: 'Performance profiling', answer: 'Profile before optimizing and focus on measured hot spots.', example: 'Endpoint p95 latency doubled', trap: 'Optimizing random code paths.', production: 'Use cProfile, py-spy, metrics, and load tests.', trick: 'Ask CPU vs I/O diagnosis.'},
      {concept: 'Error handling design', answer: 'Classify recoverable, retryable, user, and system errors.', example: 'Payment provider timeout', trap: 'Retrying non-idempotent operations blindly.', production: 'Use specific exceptions, retries, and circuit breakers.', trick: 'Ask retry budget.'},
      {concept: 'Data model evolution', answer: 'Design migrations and compatibility for changing schemas.', example: 'Add required field to user profile', trap: 'Breaking old producers or consumers.', production: 'Roll out additive changes first.', trick: 'Ask backwards compatibility.'},
      {concept: 'Code review judgment', answer: 'Review correctness, maintainability, observability, and operational risk.', example: 'What do you check in a PR?', trap: 'Only checking style.', production: 'Look for failure modes and missing tests.', trick: 'Ask when to block vs comment.'},
      {concept: 'Production readiness', answer: 'A service needs tests, logs, metrics, health checks, config, and rollback plan.', example: 'How do you launch a Python API?', trap: 'Only saying Docker and deploy.', production: 'Define SLOs, alerts, runbooks, and ownership.', trick: 'Ask what happens at 3 AM.'},
    ],
  },
};

const topPythonRows: Row[] = [
  {
    question: 'What is the output?',
    code: 'x = [1, 2]\ny = x\ny.append(3)\nprint(x)',
    answer: '[1, 2, 3]',
    explanation: 'Both names point to the same list object. Bro, explain references before saying mutable.',
  },
  {
    question: 'What is the output?',
    code: 'x = 10\ny = x\ny += 5\nprint(x, y)',
    answer: '10 15',
    explanation: 'Integers are immutable. `y += 5` creates a new integer and rebinds `y`.',
  },
  {
    question: 'What is the output?',
    code: 'a = [1, 2]\nb = [1, 2]\nprint(a == b)\nprint(a is b)',
    answer: 'True, then False',
    explanation: '`==` checks value equality. `is` checks whether both names point to the same object.',
  },
  {
    question: 'What is the output?',
    code: 'items = []\nprint(bool(items))\nprint(items is None)',
    answer: 'False, then False',
    explanation: 'An empty list is falsy, but it is not `None`. Use `is None` when absence matters.',
  },
  {
    question: 'What is wrong with this function?',
    code: 'def add_user(name, users=[]):\n    users.append(name)\n    return users',
    answer: 'The default list is shared across calls.',
    explanation: 'Default arguments are evaluated once. Use `users=None` and create a new list inside.',
  },
  {
    question: 'What is the output?',
    code: 'def add_user(name, users=[]):\n    users.append(name)\n    return users\n\nprint(add_user("Asha"))\nprint(add_user("Ravi"))',
    answer: "['Asha'] then ['Asha', 'Ravi']",
    explanation: 'The same default list is reused. This is one of the most common Python interview traps.',
  },
  {
    question: 'Fix this function.',
    code: 'def add_user(name, users=[]):\n    users.append(name)\n    return users',
    answer: 'Use `users=None`, then create a new list inside the function.',
    explanation: 'Safe version: `if users is None: users = []`. Bro, always mention why the old version leaks state.',
  },
  {
    question: 'What is the output?',
    code: 'matrix = [[]] * 3\nmatrix[0].append(1)\nprint(matrix)',
    answer: '[[1], [1], [1]]',
    explanation: 'The outer list contains three references to the same inner list.',
  },
  {
    question: 'Fix this matrix initialization.',
    code: 'matrix = [[]] * 3',
    answer: 'Use `matrix = [[] for _ in range(3)]`.',
    explanation: 'A comprehension creates a fresh inner list each time.',
  },
  {
    question: 'What is the output?',
    code: 'nums = [1, 2, 3]\nprint(nums.append(4))\nprint(nums)',
    answer: 'None, then [1, 2, 3, 4]',
    explanation: '`append()` mutates the list and returns `None`.',
  },
  {
    question: 'What is the output?',
    code: 'text = "python"\nprint(text[1:4])\nprint(text[::-1])',
    answer: 'yth, then nohtyp',
    explanation: 'Slicing excludes the stop index. `[::-1]` reverses the string.',
  },
  {
    question: 'What is the output?',
    code: 'print("1" + "2")\nprint(1 + 2)',
    answer: '12, then 3',
    explanation: 'Same operator, different behavior. Strings concatenate; numbers add.',
  },
  {
    question: 'What error happens?',
    code: 'print("1" + 2)',
    answer: 'TypeError',
    explanation: 'Python will not automatically convert int to str for concatenation.',
  },
  {
    question: 'Fix this code.',
    code: 'age = 21\nprint("Age: " + age)',
    answer: 'Use `print("Age: " + str(age))` or `print(f"Age: {age}")`.',
    explanation: 'F-strings are usually cleaner and safer for readable formatting.',
  },
  {
    question: 'What is the output?',
    code: 'user = {"name": "Asha"}\nprint(user.get("email"))',
    answer: 'None',
    explanation: '`dict.get()` returns `None` by default when the key is missing.',
  },
  {
    question: 'What error happens?',
    code: 'user = {"name": "Asha"}\nprint(user["email"])',
    answer: 'KeyError',
    explanation: 'Indexing a missing dictionary key raises `KeyError`.',
  },
  {
    question: 'What is the output?',
    code: 'numbers = {1, 2, 2, 3}\nprint(numbers)',
    answer: '{1, 2, 3} in some display order',
    explanation: 'Sets store unique values and are unordered for logical use.',
  },
  {
    question: 'Why use a set here?',
    code: 'seen = set()\nfor user_id in user_ids:\n    if user_id in seen:\n        print("duplicate")\n    seen.add(user_id)',
    answer: 'Set membership is average O(1).',
    explanation: 'Bro, this is better than scanning a list for large lookup-heavy checks.',
  },
  {
    question: 'What is the output?',
    code: 'a = (1, 2)\na[0] = 99\nprint(a)',
    answer: 'TypeError',
    explanation: 'Tuples are immutable. You cannot assign to an index.',
  },
  {
    question: 'Is this tuple fully safe from mutation?',
    code: 't = ([1, 2], 3)\nt[0].append(99)\nprint(t)',
    answer: 'It prints `([1, 2, 99], 3)`.',
    explanation: 'The tuple is immutable, but it can contain a mutable object.',
  },
  {
    question: 'What is the output?',
    code: 'for i in range(3):\n    print(i)',
    answer: '0, 1, 2',
    explanation: '`range(3)` starts at 0 and stops before 3.',
  },
  {
    question: 'What is the output?',
    code: 'for i in range(2, 7, 2):\n    print(i)',
    answer: '2, 4, 6',
    explanation: 'Start is 2, stop is excluded, step is 2.',
  },
  {
    question: 'What is the output?',
    code: 'for i in range(5):\n    if i == 2:\n        break\n    print(i)',
    answer: '0, 1',
    explanation: '`break` exits the loop completely.',
  },
  {
    question: 'What is the output?',
    code: 'for i in range(4):\n    if i == 2:\n        continue\n    print(i)',
    answer: '0, 1, 3',
    explanation: '`continue` skips the current iteration only.',
  },
  {
    question: 'What is the output?',
    code: 'for i in range(2):\n    pass\nprint("done")',
    answer: 'done',
    explanation: '`pass` is a placeholder statement. It does nothing.',
  },
  {
    question: 'What is the output?',
    code: 'def greet(name):\n    return f"Hi {name}"\n\nprint(greet("Asha"))',
    answer: 'Hi Asha',
    explanation: '`return` sends a value back to the caller.',
  },
  {
    question: 'What is the output?',
    code: 'def greet(name):\n    print(f"Hi {name}")\n\nresult = greet("Asha")\nprint(result)',
    answer: 'Hi Asha, then None',
    explanation: 'A function without `return` returns `None`.',
  },
  {
    question: 'What is the output?',
    code: 'def total(a, b=10):\n    return a + b\n\nprint(total(5))\nprint(total(5, 2))',
    answer: '15, then 7',
    explanation: 'Default arguments are used only when the caller does not pass that argument.',
  },
  {
    question: 'What error happens?',
    code: 'def total(a, b):\n    return a + b\n\nprint(total(5))',
    answer: 'TypeError',
    explanation: 'The required argument `b` is missing.',
  },
  {
    question: 'What is the output?',
    code: 'square = lambda x: x * x\nprint(square(4))',
    answer: '16',
    explanation: 'A lambda is a small anonymous function expression.',
  },
  {
    question: 'What is the output?',
    code: 'funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint([fn() for fn in funcs])',
    answer: '[2, 2, 2]',
    explanation: 'Closures capture the variable, not the value at each loop iteration.',
  },
  {
    question: 'Fix the closure bug.',
    code: 'funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)',
    answer: 'Use `lambda i=i: i`.',
    explanation: 'The default argument captures the current value of `i`.',
  },
  {
    question: 'What is the output?',
    code: 'nums = [1, 2, 3]\ndoubled = [n * 2 for n in nums]\nprint(doubled)',
    answer: '[2, 4, 6]',
    explanation: 'List comprehensions create a new list from an iterable.',
  },
  {
    question: 'What is the output?',
    code: 'nums = [1, 2, 3, 4]\nevens = [n for n in nums if n % 2 == 0]\nprint(evens)',
    answer: '[2, 4]',
    explanation: 'The `if` filters values before adding them to the result list.',
  },
  {
    question: 'What is the output?',
    code: 'pairs = {x: x * x for x in range(3)}\nprint(pairs)',
    answer: '{0: 0, 1: 1, 2: 4}',
    explanation: 'Dictionary comprehensions create key-value pairs.',
  },
  {
    question: 'What is the output?',
    code: 'gen = (x * 2 for x in range(3))\nprint(list(gen))\nprint(list(gen))',
    answer: '[0, 2, 4], then []',
    explanation: 'Generators are exhausted after one complete iteration.',
  },
  {
    question: 'Why use a generator here?',
    code: 'def read_rows(rows):\n    for row in rows:\n        yield row.strip()',
    answer: 'It streams values lazily instead of building a full list.',
    explanation: 'Useful for large files or pipelines where memory matters.',
  },
  {
    question: 'What is the output?',
    code: 'try:\n    print(int("10"))\nexcept ValueError:\n    print("bad")\nelse:\n    print("ok")',
    answer: '10, then ok',
    explanation: '`else` runs when no exception is raised in the `try` block.',
  },
  {
    question: 'What is the output?',
    code: 'try:\n    print(int("x"))\nexcept ValueError:\n    print("bad")\nfinally:\n    print("done")',
    answer: 'bad, then done',
    explanation: '`finally` runs whether an exception happened or not.',
  },
  {
    question: 'What is wrong with this exception handling?',
    code: 'try:\n    charge_payment(order)\nexcept Exception:\n    pass',
    answer: 'It hides failures.',
    explanation: 'Catch specific exceptions, log context, and recover intentionally.',
  },
  {
    question: 'What is the output?',
    code: 'class User:\n    pass\n\nu = User()\nu.name = "Asha"\nprint(u.name)',
    answer: 'Asha',
    explanation: 'Regular Python objects can receive attributes unless restricted by design.',
  },
  {
    question: 'What is the output?',
    code: 'class User:\n    def __init__(self, name):\n        self.name = name\n\nprint(User("Asha").name)',
    answer: 'Asha',
    explanation: '`__init__` initializes object state after object creation.',
  },
  {
    question: 'What is the output?',
    code: 'class Counter:\n    count = 0\n\nCounter.count += 1\nprint(Counter.count)',
    answer: '1',
    explanation: '`count` is a class attribute shared through the class.',
  },
  {
    question: 'What is the output?',
    code: 'from dataclasses import dataclass\n\n@dataclass\nclass User:\n    name: str\n    age: int\n\nprint(User("Asha", 21))',
    answer: "User(name='Asha', age=21)",
    explanation: 'Dataclasses generate useful methods like `__init__` and `__repr__`.',
  },
  {
    question: 'What does this context manager guarantee?',
    code: 'with open("data.txt", "w") as file:\n    file.write("hello")',
    answer: 'The file is closed after the block.',
    explanation: '`with` handles setup and cleanup even when errors happen.',
  },
  {
    question: 'What is wrong here?',
    code: 'file = open("data.txt")\ncontent = file.read()',
    answer: 'The file may remain open.',
    explanation: 'Use `with open(...) as file:` so cleanup is automatic.',
  },
  {
    question: 'What is the output?',
    code: 'import json\npayload = json.loads(\'{"name": "Asha"}\')\nprint(payload["name"])',
    answer: 'Asha',
    explanation: '`json.loads()` converts a JSON string into Python objects.',
  },
  {
    question: 'What is the output?',
    code: 'from collections import Counter\n\nitems = ["tea", "tea", "coffee"]\nprint(Counter(items)["tea"])',
    answer: '2',
    explanation: '`Counter` counts hashable values.',
  },
  {
    question: 'What is the output?',
    code: 'from collections import defaultdict\n\ngroups = defaultdict(list)\ngroups["python"].append("Asha")\nprint(groups["python"])',
    answer: "['Asha']",
    explanation: '`defaultdict(list)` creates an empty list automatically for missing keys.',
  },
  {
    question: 'What is the output?',
    code: 'from collections import deque\n\nq = deque(["a", "b"])\nq.append("c")\nprint(q.popleft())\nprint(list(q))',
    answer: "a, then ['b', 'c']",
    explanation: '`deque` gives efficient queue operations from both ends.',
  },
];

function codeFor(concept: string, variant: 'output' | 'bug' | 'production'): string {
  const key = concept.toLowerCase();

  if (key.includes('mutable default')) {
    return variant === 'bug'
      ? 'def add_item(item, bucket=[]):\n    bucket.append(item)\n    return bucket\n\nprint(add_item("tea"))\nprint(add_item("coffee"))'
      : 'def add_item(item, bucket=None):\n    if bucket is None:\n        bucket = []\n    bucket.append(item)\n    return bucket\n\nprint(add_item("tea"))';
  }

  if (key.includes('list multiplication')) {
    return 'matrix = [[]] * 3\nmatrix[0].append("x")\nprint(matrix)';
  }

  if (key.includes('closure') || key.includes('late binding')) {
    return 'funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n\nprint([fn() for fn in funcs])';
  }

  if (key.includes('identity') || key.includes('equality')) {
    return 'a = [1, 2]\nb = [1, 2]\nc = a\n\nprint(a == b)\nprint(a is b)\nprint(a is c)';
  }

  if (key.includes('truthiness')) {
    return 'items = []\nvalue = None\n\nprint(bool(items))\nprint(value is None)';
  }

  if (key.includes('copy')) {
    return 'import copy\n\noriginal = [[1], [2]]\ncloned = copy.copy(original)\ncloned[0].append(99)\nprint(original)';
  }

  if (key.includes('generator')) {
    return 'numbers = (x * 2 for x in range(3))\nprint(list(numbers))\nprint(list(numbers))';
  }

  if (key.includes('scope') || key.includes('legb')) {
    return 'count = 10\n\ndef update():\n    count += 1\n    return count\n\nprint(update())';
  }

  if (key.includes('hash') || key.includes('dictionaries')) {
    return 'lookup = {}\nkey = [1, 2]\nlookup[key] = "value"\nprint(lookup)';
  }

  if (key.includes('float')) {
    return 'print(0.1 + 0.2)\nprint(0.1 + 0.2 == 0.3)';
  }

  if (key.includes('dynamic typing')) {
    return 'value = 10\nvalue = "10"\nprint(value * 2)';
  }

  if (key.includes('mutability')) {
    return 'a = [1, 2]\nb = a\nb.append(3)\nprint(a)';
  }

  if (key.includes('lists vs tuples')) {
    return 'point = (10, 20)\npoint[0] = 99\nprint(point)';
  }

  if (key.includes('functions')) {
    return 'def total(a, b=10):\n    return a + b\n\nprint(total(5))\nprint(total(5, 2))';
  }

  if (key.includes('exceptions') || key.includes('error handling')) {
    return 'try:\n    amount = int("10x")\nexcept ValueError:\n    print("bad amount")\nfinally:\n    print("done")';
  }

  if (key.includes('module') || key.includes('import')) {
    return '# file name: random.py\nimport random\n\nprint(random.randint(1, 10))';
  }

  if (key.includes('virtual environment') || key.includes('dependency')) {
    return 'python -m venv .venv\npython -m pip install requests\npython -c "import requests; print(requests.__version__)"';
  }

  if (key.includes('gil') || key.includes('concurrency')) {
    return 'from threading import Thread\n\ndef cpu_work():\n    total = 0\n    for i in range(10_000_000):\n        total += i\n\nthreads = [Thread(target=cpu_work) for _ in range(2)]';
  }

  if (key.includes('traceback') || key.includes('debug')) {
    return 'def load_user(users):\n    return users[0]["email"]\n\nprint(load_user([]))';
  }

  if (key.includes('syntax')) {
    return 'print("before")\nif True\n    print("after")';
  }

  if (key.includes('nameerror')) {
    return 'def invoice_total():\n    return subtotal + tax\n\nprint(invoice_total())';
  }

  if (key.includes('typeerror')) {
    return 'price = "100"\nfee = 20\nprint(price + fee)';
  }

  if (key.includes('keyerror')) {
    return 'payload = {"name": "Asha"}\nprint(payload["email"])';
  }

  if (key.includes('indexerror')) {
    return 'orders = []\nprint(orders[0])';
  }

  if (key.includes('logging')) {
    return 'import logging\n\nlogger = logging.getLogger(__name__)\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    logger.exception("calculation failed")';
  }

  if (key.includes('two pointers')) {
    return 'nums = [1, 2, 4, 7, 11]\ntarget = 9\nleft, right = 0, len(nums) - 1\nwhile left < right:\n    total = nums[left] + nums[right]\n    if total == target:\n        print(left, right)\n        break\n    if total < target:\n        left += 1\n    else:\n        right -= 1';
  }

  if (key.includes('sliding window')) {
    return 'text = "abca"\nseen = set()\nleft = 0\nbest = 0\nfor right, char in enumerate(text):\n    while char in seen:\n        seen.remove(text[left])\n        left += 1\n    seen.add(char)\n    best = max(best, right - left + 1)\nprint(best)';
  }

  if (key.includes('hash map')) {
    return 'nums = [2, 7, 11, 15]\ntarget = 9\nseen = {}\nfor i, value in enumerate(nums):\n    if target - value in seen:\n        print(seen[target - value], i)\n    seen[value] = i';
  }

  if (key.includes('stack')) {
    return 'stack = []\nfor char in "(()())":\n    if char == "(":\n        stack.append(char)\n    else:\n        stack.pop()\nprint(len(stack) == 0)';
  }

  if (key.includes('queue')) {
    return 'from collections import deque\n\nqueue = deque(["a", "b"])\nqueue.append("c")\nprint(queue.popleft())\nprint(list(queue))';
  }

  if (key.includes('binary search')) {
    return 'nums = [1, 3, 5, 7]\ntarget = 5\nlo, hi = 0, len(nums) - 1\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if nums[mid] == target:\n        print(mid)\n        break\n    if nums[mid] < target:\n        lo = mid + 1\n    else:\n        hi = mid - 1';
  }

  if (key.includes('dfs')) {
    return 'graph = {1: [2, 3], 2: [], 3: []}\nseen = set()\n\ndef dfs(node):\n    seen.add(node)\n    for nxt in graph[node]:\n        if nxt not in seen:\n            dfs(nxt)\n\ndfs(1)\nprint(seen)';
  }

  if (key.includes('dynamic programming')) {
    return 'from functools import lru_cache\n\n@lru_cache(None)\ndef climb(n):\n    if n <= 2:\n        return n\n    return climb(n - 1) + climb(n - 2)\n\nprint(climb(5))';
  }

  if (key.includes('sorting')) {
    return 'users = [("Asha", 90), ("Ravi", 90), ("Meera", 95)]\nprint(sorted(users, key=lambda item: (-item[1], item[0])))';
  }

  if (key.includes('heap')) {
    return 'import heapq\n\nvalues = [5, 1, 9, 2]\nprint(heapq.nlargest(2, values))';
  }

  if (key.includes('api') || key.includes('idempotency')) {
    return 'processed = set()\n\ndef charge(idempotency_key, amount):\n    if idempotency_key in processed:\n        return "already processed"\n    processed.add(idempotency_key)\n    return f"charged {amount}"';
  }

  if (key.includes('caching')) {
    return 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef get_tax_rate(country):\n    print("loading")\n    return 0.18\n\nprint(get_tax_rate("IN"))\nprint(get_tax_rate("IN"))';
  }

  if (key.includes('database') || key.includes('index')) {
    return 'query = "SELECT * FROM orders WHERE user_id = ?"\n# Which column should be indexed and why?';
  }

  if (key.includes('rate')) {
    return 'limits = {}\n\ndef allow(user_id):\n    limits[user_id] = limits.get(user_id, 0) + 1\n    return limits[user_id] <= 3';
  }

  if (key.includes('architecture')) {
    return 'def route_handler(request):\n    amount = request["amount"]\n    tax = amount * 0.18\n    return {"total": amount + tax}\n# What would you extract into domain logic?';
  }

  if (key.includes('memory')) {
    return 'cache = []\n\ndef handle_request(payload):\n    cache.append(payload)\n    return len(cache)\n# Why can this grow forever in a worker?';
  }

  if (key.includes('testing')) {
    return 'def apply_discount(price, percent):\n    return price - (price * percent / 100)\n\nassert apply_discount(100, 10) == 90';
  }

  if (key.includes('performance')) {
    return 'result = []\nfor item in range(100000):\n    result.append(item * 2)\n# What would you profile before optimizing?';
  }

  if (key.includes('data model')) {
    return 'user = {"id": 1, "name": "Asha"}\nprint(user["email"])\n# How would you roll out a new required field safely?';
  }

  if (key.includes('code review')) {
    return 'def process(order):\n    try:\n        charge(order)\n    except Exception:\n        pass\n# What review comments would you leave?';
  }

  return 'values = [1, 2, 3]\nother = values\nother.append(4)\nprint(values)';
}

function makeRows(concepts: Concept[]): Row[] {
  return concepts.flatMap((item) => [
    {
      question: `Code output question: What happens in this ${item.concept} snippet?`,
      code: codeFor(item.concept, 'output'),
      answer: item.answer,
      explanation: `Core trick: ${item.trap}`,
    },
    {
      question: 'Fix-the-bug question: What should you change here?',
      code: codeFor(item.concept, 'bug'),
      answer: item.production,
      explanation: 'Bro, first explain the failure, then give the safer production fix.',
    },
    {
      question: `Code review question: What mistake should you catch in ${item.concept}?`,
      code: codeFor(item.concept, 'production'),
      answer: item.trap,
      explanation: 'This is the usual interview trap. Call it out clearly before the interviewer has to push you.',
    },
    {
      question: 'Production code question: How does this matter in a real Python service?',
      code: codeFor(item.concept, 'production'),
      answer: item.production,
      explanation: 'Production answer trick: connect the concept to reliability, performance, debugging, or maintainability.',
    },
    {
      question: `Follow-up code question: ${item.example}`,
      code: codeFor(item.concept, 'output'),
      answer: item.trick,
      explanation: 'Prepare this follow-up so your answer does not stop at a beginner definition.',
    },
  ]);
}

export default function InterviewCheatSheet({topic}: {topic: CheatSheetTopic}) {
  const config = topics[topic];
  const rows = topic === 'top' ? topPythonRows : makeRows(config.concepts);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>50-question cheat sheet</p>
          <h3>{config.title}</h3>
        </div>
        <span>{rows.length} questions</span>
      </div>
      <div className={styles.tableScroller}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Question / Example Question</th>
              <th>Answer</th>
              <th>Explanation & Tricks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.question}-${index}`}>
                <td>
                  <strong>Q{index + 1}.</strong> {row.question}
                  {row.code && <pre className={styles.code}>{row.code}</pre>}
                </td>
                <td>{row.answer}</td>
                <td>{row.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
