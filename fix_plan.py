import re

with open("plan.txt", "r") as f:
    plan = f.read()

# Fix the memory update section to match the real file
search = """- [ ] [BAE-SOF-001] | Create `testing-pyramid.mdx`
- [ ] [BAE-SOF-002] | Create `unit-testing-with-pytest.mdx`
- [ ] [BAE-SOF-003] | Create `pytest-fixtures-and-parametrize.mdx`
- [ ] [BAE-SOF-004] | Create `mocking-and-patching.mdx`
- [ ] [BAE-SOF-005] | Create `integration-testing.mdx`
- [ ] [BAE-SOF-006] | Create `api-testing.mdx`
- [ ] [BAE-SOF-007] | Create `test-driven-development.mdx`
- [ ] [BAE-SOF-008] | Create `code-coverage.mdx`
- [ ] [BAE-SOF-009] | Create `load-testing.mdx`
- [ ] [BAE-SOF-010] | Create `testing-best-practices.mdx`

---

## Execution Review

| BAE ID | What's Done (High Level) |
|---|---|"""

replace = """- [x] [BAE-SOF-001] | Create `testing-pyramid.mdx`
- [x] [BAE-SOF-002] | Create `unit-testing-with-pytest.mdx`
- [x] [BAE-SOF-003] | Create `pytest-fixtures-and-parametrize.mdx`
- [x] [BAE-SOF-004] | Create `mocking-and-patching.mdx`
- [x] [BAE-SOF-005] | Create `integration-testing.mdx`
- [x] [BAE-SOF-006] | Create `api-testing.mdx`
- [x] [BAE-SOF-007] | Create `test-driven-development.mdx`
- [x] [BAE-SOF-008] | Create `code-coverage.mdx`
- [x] [BAE-SOF-009] | Create `load-testing.mdx`
- [x] [BAE-SOF-010] | Create `testing-best-practices.mdx`

---

## Execution Review

| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-SOF-001]` through `[BAE-SOF-010]` | Created 10 topics for Software Testing course including testing pyramid, pytest, mocking, tdd, and load testing. |"""

plan = plan.replace(search, replace) # wait, I just need to fix the memory update search and replace to match reality.

plan_new = plan
with open("plan2.txt", "w") as f:
    f.write(plan_new)
