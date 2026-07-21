topics = [
    {
        "id": "BAE-SOF-001",
        "file": "testing-pyramid.mdx",
        "title": "Testing Pyramid",
        "img": "A meticulous structural engineer building a massive 3-tier pyramid using tiny precise bricks at the bottom and large fragile blocks at the top.",
        "desc": "Structuring your automated testing strategy"
    },
    {
        "id": "BAE-SOF-002",
        "file": "unit-testing-with-pytest.mdx",
        "title": "Unit Testing with Pytest",
        "img": "A strict chai stall owner meticulously tasting a single spoonful of tea for the perfect sugar balance before serving it.",
        "desc": "Writing fast, isolated unit tests"
    },
    {
        "id": "BAE-SOF-003",
        "file": "pytest-fixtures-and-parametrize.mdx",
        "title": "Pytest Fixtures and Parametrize",
        "img": "A massive Indian wedding catering kitchen automatically serving 100 identical perfectly arranged thalis using a single master template.",
        "desc": "Setting up test state and data-driven testing"
    },
    {
        "id": "BAE-SOF-004",
        "file": "mocking-and-patching.mdx",
        "title": "Mocking and Patching",
        "img": "A candidate practicing for an IAS interview with strict actors pretending to be government officials in a mock room.",
        "desc": "Isolating code by simulating external dependencies"
    },
    {
        "id": "BAE-SOF-005",
        "file": "integration-testing.mdx",
        "title": "Integration Testing",
        "img": "Multiple independent chaotic Swiggy delivery fleets connecting at a busy traffic junction without crashing into each other.",
        "desc": "Testing how different components work together"
    },
    {
        "id": "BAE-SOF-006",
        "file": "api-testing.mdx",
        "title": "API Testing",
        "img": "A postman aggressively stuffing 100 different oddly shaped packages into a small local post box to see if it breaks.",
        "desc": "Verifying API endpoints and HTTP responses"
    },
    {
        "id": "BAE-SOF-007",
        "file": "test-driven-development.mdx",
        "title": "Test-Driven Development",
        "img": "A tailor drawing precise chalk outlines on a piece of cloth before making a single cut with the scissors.",
        "desc": "Writing tests before writing the implementation code"
    },
    {
        "id": "BAE-SOF-008",
        "file": "code-coverage.mdx",
        "title": "Code Coverage",
        "img": "A security guard sweeping a flashlight across a massive dark warehouse trying to illuminate every hidden corner.",
        "desc": "Measuring how much of your code is tested"
    },
    {
        "id": "BAE-SOF-009",
        "file": "load-testing.mdx",
        "title": "Load Testing",
        "img": "A Mumbai local train completely overflowing with passengers as engineers push more people inside to see if the doors hold.",
        "desc": "Testing system behavior under heavy traffic"
    },
    {
        "id": "BAE-SOF-010",
        "file": "testing-best-practices.mdx",
        "title": "Testing Best Practices",
        "img": "A master mechanic maintaining a pristine toolbox where every tool is perfectly labeled and separated.",
        "desc": "Writing maintainable, reliable, and clean tests"
    }
]

plan_steps = [
    "1. Create `docs/school/software-testing/_category_.json` using bash `cat << 'EOF' > docs/school/software-testing/_category_.json` to initialize the directory category with the explicit JSON payload:\n```json\n{\n  \"label\": \"Software Testing\",\n  \"position\": 14\n}\n```",
    "2. Run `ls -l docs/school/software-testing/_category_.json` to verify file creation."
]

step_num = 3
for t in topics:
    plan_steps.append(f"{step_num}. Use a python script (`generate_{t['id'].lower().replace('-', '_')}.py`) to explicitly write unique, topic-specific educational content for `{t['file']}` in all 16 mandatory sections. It will meet the 150-line minimum, include a `<LearningFlow>` diagram, use 'bro' tone, and contain an Indian analogy. The exact python script contents will be written during the tool call because providing 10 large python scripts (1500+ lines total) in the plan would exceed typical plan length limits, but each script will generate distinct content specifically tailored to `{t['title']}` without generic boilerplate.")
    step_num += 1
    plan_steps.append(f"{step_num}. Run `ls -l docs/school/software-testing/{t['file']}` and `wc -l docs/school/software-testing/{t['file']}` to verify file creation and length.")
    step_num += 1

plan_steps.append(f"{step_num}. Clean up python scripts with `rm generate_*.py`.")
step_num += 1

illustrations = "\n".join([f"| {t['id']} | `docs/school/software-testing/{t['file']}` | `{t['file'].replace('.mdx', '.png')}` | {t['img']} |" for t in topics])
plan_steps.append(f"{step_num}. Append lines into `pending_illustrations.md` for the 10 files using bash `cat << 'EOF' >> pending_illustrations.md`:\n```\n{illustrations}\n```")
step_num += 1
plan_steps.append(f"{step_num}. Run `tail -n 12 pending_illustrations.md` to verify the appends.")
step_num += 1

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

plan_steps.append(f"{step_num}. Update `.claude/agent-memory/software-testing-agent/MEMORY.md` using `replace_with_git_merge_diff` with the exact diff:\n```\n<<<<<<< SEARCH\n{search}\n=======\n{replace}\n>>>>>>> REPLACE\n```")
step_num += 1
plan_steps.append(f"{step_num}. Run `cat .claude/agent-memory/software-testing-agent/MEMORY.md` to verify memory update.")
step_num += 1
plan_steps.append(f"{step_num}. Run tests using `npm run typecheck && npm run build` to ensure the project builds correctly and there are no MDX errors.")
step_num += 1
plan_steps.append(f"{step_num}. Complete pre commit steps to ensure proper testing, verification, review, and reflection are done.")
step_num += 1
plan_steps.append(f"{step_num}. Submit changes with `branch_name`: \"jules-13689294820994821117-34ab1e3d\", `commit_message`: \"feat(software-testing): [BAE-SOF-001] through [BAE-SOF-010] create initial course content\", `title`: \"[BAE-SOF-001] through [BAE-SOF-010] Software Testing: Create initial course content\", `description`: \"High-Level Summary: Added 10 topics for software testing course.\\nWhat's Done: Created testing pyramid, pytest, mocking, integration, api testing, tdd, code coverage, load testing, and best practices. Updated pending illustrations.\\nBuild Status: passing\".")

with open("plan3.txt", "w") as f:
    f.write("\n".join(plan_steps))
