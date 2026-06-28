# Jules Autonomous Session Instructions

> **READ THIS FILE FIRST on every session. This is your bootstrap.**

---

## Step 1: Read Instructions

Read these files in order before doing anything:
1. `CLAUDE.md` — global BAE School guidelines, 15-section template, diagram rules
2. Check the `## Task Queue` in the relevant agent memory file (see Step 2) to identify your course
3. Read the course-specific agent file under `.claude/agents/`
4. Read the course-specific memory file fully

---

## Step 2: Find Your Task

Open the relevant agent memory file:
- Python course: `.claude/agent-memory/python-agent/MEMORY.md`
- Agentic Frameworks course: `.claude/agent-memory/agentic-frameworks-agent/MEMORY.md`

Scroll to `## Task Queue`.

Pick **up to 10** consecutive `- [ ]` items starting from `### Next Task`. These are your jobs for this session.

If `### Next Task` has fewer than 10 items, promote items from `### Backlog` to fill up to 10.

If both are empty, stop and report: "All tasks complete. No pending work."

---

## Step 3: Execute

1. **Create a single branch** using the batch name (e.g., `jules/batch-001-intro` or `jules/batch-015-concurrency`)
2. **Implement all assigned topics** (up to 10 per session)
3. For each topic page, ensure it has all **15 mandatory sections** from CLAUDE.md:
   - Quick Summary table
   - Real-World Analogy
   - Concept Explanation
   - Syntax Table
   - Beginner Example
   - Real-World Engineering Example
   - Internal Working (with `<LearningFlow>` React Flow diagram)
   - Performance Table
   - Top Interview Questions (min 5, code-heavy)
   - Tricky Questions & Edge Cases
   - Real-World Usage
   - Best Practices (DO/DON'T tables)
   - Production Notes (warning callout)
   - Common Mistakes (table with fixes)
   - Related Topics
4. Ensure every `<LearningFlow>` diagram is unique and topic-specific
5. For **new content creation** tasks: research thoroughly, use real-world examples, community feedback, and production scenarios

---

## Step 4: Validate

Run these commands and ensure both pass:
```bash
npm run typecheck
npm run build
```

If the build fails, fix the errors and rebuild. Do not raise a PR with a broken build.

---

## Step 5: Update Memory

In the relevant agent memory file:
1. Mark all completed tasks as `- [x]`
2. Move completed tasks to `### Completed This Cycle` (append them)
3. Promote the next batch of `- [ ]` items from `### Backlog` into `### Next Task` (up to 10)

---

## Step 6: Commit & PR

1. Stage all changed files (content files + MEMORY.md)
2. Commit with message: `feat(<course>): <batch description>`
3. Push the branch
4. Raise a PR with:
   - Title: batch description (e.g., "Agentic Frameworks: Intro batch — 10 topics")
   - Body: list of topics created/fixed, build status confirmation

---

## Rules

- **Up to 10 topics per session.** Do not exceed 10.
- **Do not skip validation.** Every session must end with a green build.
- **Do not modify files outside your task scope.** Surgical changes only.
- **Always update MEMORY.md.** The next session depends on it.
- **Use the "bro" mentor tone** as described in CLAUDE.md. Keep it natural.
- **Diagrams must be unique.** No copy-paste React Flow configs between pages.
- **Research thoroughly.** For new content, consider community feedback, GitHub stars, production adoption, pros/cons, and future outlook before writing.
