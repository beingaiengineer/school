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

1. **Identify the Session Task IDs**: The tasks in the queue already have predefined Jira-style IDs (e.g., `[BAE-INC-001]`). Extract the exact ID range you are working on (e.g., `[BAE-INC-001 to BAE-INC-010]`). Do NOT invent or calculate new IDs.
2. **Create a single branch** using the batch name and task IDs (e.g., `jules/BAE-INC-001-to-010`)
3. **Implement all assigned topics** (up to 10 per session)
4. For each topic page, ensure it has all **15 mandatory sections** from CLAUDE.md:
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
5. Ensure every `<LearningFlow>` diagram is unique and topic-specific
6. **Generate an Illustration**: For every new topic page, you need an illustration featuring Bae that represents the "Real-World Analogy".
   - **If the `generate_image` tool is available (Interactive Chat Session)**:
     - Use the `bae-illustrations` skill to formulate the prompt and generate the image.
     - Save the image to the course asset path: `docs/school/<course-name>/assets/<filename>.png` and embed it as `![Real-World Analogy](../assets/<filename>.png)` below the H2 heading.
   - **If the `generate_image` tool is NOT available (Autonomous/Headless Server Environment)**:
     - **Do NOT block or stop execution, and DO NOT use/commit placeholder images.**
     - Instead of the image tag, embed an MDX comment as a marker under the "Real-World Analogy" H2 heading: `{/* TODO: [BAE-ILLUSTRATION] Generate and embed illustration here. Prompt: <formulated prompt> */}`.
     - Log the details (course name, file name, target path, and formulated prompt) in the global pending illustrations queue file: `pending_illustrations.md` in the repository root (create this file if it does not exist).
     - When an interactive agent runs, it will read `pending_illustrations.md`, generate the actual illustrations, write them to the asset paths, insert the proper `![Real-World Analogy](../assets/<filename>.png)` tag into the MDX file replacing the comment marker, and clear the queue.
7. For **new content creation** tasks: research thoroughly, use real-world examples, community feedback, and production scenarios

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
2. In the `### Completed This Cycle` section, append a new row to the session tracking table. The table should track the exact predefined Task IDs you just completed and a High-Level Summary.
   - Example format:
     | Task IDs | What's Done (High Level) |
     |---|---|
     | `[BAE-INC-001 to BAE-INC-010]` | Created intro to incidents, covered severity levels, and on-call culture |
3. Promote the next batch of `- [ ]` items from `### Backlog` into `### Next Task` (up to 10).

---

## Step 6: Commit & PR

1. Stage all changed files (content files and MEMORY.md).
2. Commit with message: `feat(<course>): [Task IDs] <batch description>`
3. Push the branch.
4. Raise a PR with:
   - **Title**: `[Task IDs] <Course Name>: <Batch Description>` (e.g., "[BAE-INC-001 to BAE-INC-010] Incident Management: Intro batch — 10 topics")
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
