# Project Memory

This file captures the working agreements and implementation habits for future sessions on this repo.

## Project Goal

This is a Docusaurus-based Python School playbook.

The content should teach Python in a practical, engineering-focused way for:

- beginner developers
- backend engineers
- AI engineers
- interview preparation learners
- production-minded software engineers

## Must-Read Instructions

Before writing Python school content, read:

- `design.md`
- `Agents/python-teacher.md`

These are the source of truth for content structure, tone, and workflow.

## Content Workflow Habit

Do not bulk-generate all topics unless the user explicitly asks for that.

Preferred workflow:

1. Work topic by topic.
2. Let the user review style.
3. Keep content concise.
4. Put relevant content only in the matching topic file.
5. Run validation after meaningful changes.

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

## React Flow Diagram Habit

The user does not want all diagrams to look the same.

React Flow diagrams must be topic-specific.

Use the official React Flow concepts:

- nodes represent real concepts
- handles show connection points
- edges show relationships
- labels explain transitions
- different layouts should match the topic
- use different node kinds and edge types where useful

Current reusable component:

- `src/components/LearningFlow/index.tsx`
- `src/components/LearningFlow/styles.module.css`

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

## Interview Prep Habit

The user wants interview prep to be serious and code-heavy.

There is an interactive quiz component:

- `src/components/PythonInterviewPrep/index.tsx`
- stores progress in browser `localStorage`
- validates answers
- explains correct answers

There is also a cheat sheet table component:

- `src/components/InterviewCheatSheet/index.tsx`
- `src/components/InterviewCheatSheet/styles.module.css`

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

## Current Interview Prep Status

Pages under `docs/school/python/interview-prep/` exist.

The top questions page has been replaced with a curated 50-question code-heavy table.

Other interview prep pages still use generated code-heavy patterns. They may need the same curated treatment later if the user asks.

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

- title: `Python School`
- blog disabled
- sidebar id: `pythonSidebar`
- homepage points to Python School and Interview Prep

Keep:

- `docs/school/python/`
- `Agents/python-teacher.md`
- `design.md`
- `scripts/`
- custom components under `src/components/`

## Validation Habit

After meaningful edits, run:

```bash
npm run typecheck
npm run build
```

Known harmless warning:

Docusaurus may fail its update check due to local config-store permissions. This is unrelated to content/build correctness.

## Editing Habit

Use `apply_patch` for file edits.

Do not overwrite user work casually.

Before deleting files:

- audit first
- confirm they are boilerplate or unwanted
- verify paths are inside the workspace

## Current Progress

**Completed Topics:**
- `intro`: what-is-python, setup-python, python-execution-flow, first-python-program
- `fundamentals`: variables, data-types, operators, input-output, type-conversion, comments-docstrings
- `control-flow`: if-else

**Pending Topics (Next Up):**
- `control-flow`: nested-conditions, loops, break-continue-pass, pattern-programs, match-case
- `functions`: all topics
- `collections`: all topics
- `strings`: all topics
- `oops`: all topics
- `error-handling`: all topics
- `file-handling`: all topics
- `modules-packages`: all topics
- `advanced-python`: all topics
- `concurrency`: all topics
- `api-development`: all topics
- `databases`: all topics
- `testing`: all topics
- `performance`: all topics
- `system-design`: all topics
- `ai-engineering`: all topics
- `best-practices`: all topics

## Current User Preferences

- Work topic by topic when creating course content.
- Create PR's once 5 topics are done.
- Content should have "bro feel."
- Avoid very lengthy topic pages.
- Diagrams should be professional and topic-specific.
- Interview prep must be code-heavy, not theory-heavy.
- The user prefers direct correction and practical output.
