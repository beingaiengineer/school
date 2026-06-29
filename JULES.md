# Jules Autonomous Session Instructions

> **READ THIS FILE FIRST on every session. This is your bootstrap.**

---

## Step 1: Read Instructions

Read these files in order before doing anything:
1. [soul.md](./soul.md) — **The core BAE School teaching voice and tone**. Internalize it. Every page you write must sound like a senior engineer mentor talking to a junior dev over chai, not a textbook.
2. [CLAUDE.md](./CLAUDE.md) — global BAE School guidelines, 15-section template, diagram rules
3. Check the `## Task Queue` in the relevant agent memory file (see Step 2) to identify your course
4. Read the course-specific agent file under `.claude/agents/` — it has course-specific tone examples and content rules
5. Read the course-specific memory file fully

---

## Step 2: Find Your Task

Scan the subdirectories inside `.claude/agent-memory/` and check the `MEMORY.md` files. 
Find the **first** `MEMORY.md` file that still has unchecked `- [ ]` items under its `### Next Task` or `### Backlog` section. That course is your target for this session.

Open that specific `MEMORY.md` file and scroll to `## Task Queue`.

Pick **up to 10** consecutive `- [ ]` items starting from `### Next Task`. These are your jobs for this session.

Task file paths are relative to the `**Course Path:**` declared in the relevant `MEMORY.md`. For example, if the course path is `docs/school/app-security/`, then `security-mindset.mdx` means `docs/school/app-security/security-mindset.mdx`.

If `### Next Task` has fewer than 10 items, promote items from `### Backlog` to fill up to 10.

If both are empty, stop and report: "All tasks complete. No pending work."

---

## Step 3: Execute

1. **Calculate the session ID**: Look at the `### Completed This Cycle` table in your current `MEMORY.md`. Count only completed data rows, not the header. If there are 0 rows, your ID is 1; if there are 2 rows, your ID is 3. Prefix it with the course code (e.g., `[BAE-INC-3]`).
2. **Create a single branch** using the batch name and ID (e.g., `jules/BAE-INC-3-intro` or `jules/BAE-FAST-12-concurrency`)
3. **Implement all assigned topics** (up to 10 per session)
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
1. Mark the completed tasks in the `### Next Task` checklist as `- [x]`. Leave them in the list.
2. In the `### Completed This Cycle` section, append a new row to the session tracking table. The table should only track the BAE ID and a High-Level Summary.
   - Example format:
     | BAE ID | What's Done (High Level) |
     |---|---|
     | `[BAE-INC-3]` | Created intro to incidents, covered severity levels, and on-call culture |
3. Promote the next batch of `- [ ]` items from `### Backlog` into `### Next Task` (up to 10).

---

## Step 6: Commit & PR

1. Stage all changed files (content files and MEMORY.md).
2. Commit with message: `feat(<course>): [BAE-X] <batch description>`
3. Push the branch.
4. Raise a PR with:
   - **Title**: `[BAE-X] <Course Name>: <Batch Description>` (e.g., "[BAE-INC-3] Incident Management: Intro batch — 10 topics")
   - **Body**: 
     - **High-Level Summary**: A clear description of the concepts covered in this batch.
     - **What's Done**: A detailed list of the exact files created/modified and the topics covered.
     - **Build Status**: Confirmation that `npm run typecheck` and `npm run build` passed locally.

---

## Rules

- **Up to 10 topics per session.** Do not exceed 10.
- **Do not skip validation.** Every session must end with a green build.
- **Do not modify files outside your task scope.** Surgical changes only.
- **Always update MEMORY.md.** The next session depends on it.
- **Use the "bro" mentor tone** as described in CLAUDE.md. Keep it natural.
- **Diagrams must be unique.** No copy-paste React Flow configs between pages.
- **Research thoroughly.** For new content, consider community feedback, GitHub stars, production adoption, pros/cons, and future outlook before writing.
