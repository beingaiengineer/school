# Project Memory — Git & Workflows Course

This file captures the working agreements, implementation habits, course design, and task queue for the Git & Workflows course.

## Project Goal

Create a real-world, journey-based course covering **Git internals, branching strategies, PRs, monorepos, code reviews**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/git-workflows/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [git-workflows-agent.md](../../agents/git-workflows-agent.md) — course-specific rules

---

## Content Workflow

1. Work in batches of up to 10 topics per session.
2. If a folder doesn't exist, create it along with a `_category_.json` file.
3. Every page must follow the 15-section template from CLAUDE.md + Section 16 (Top GitHub Repos).
4. Run `npm run typecheck` and `npm run build` after every batch to ensure the site compiles.
5. Update this file's checklists and task queue immediately after finishing a task.

---

## Course Design & Outline

Below are the topics that make up this course. This list serves as the structural design spec.

**Course Path:** `docs/school/git-workflows/`

### Topics
- git-fundamentals.mdx
- branching-strategies.mdx
- pull-requests.mdx
- code-review-culture.mdx
- merge-conflicts.mdx
- git-rebase-vs-merge.mdx
- git-hooks-and-automation.mdx
- monorepo-vs-polyrepo.mdx
- git-advanced-operations.mdx
- conventional-commits.mdx

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [x] `git-001` | Create `git-fundamentals.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-002` | Create `branching-strategies.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-003` | Create `pull-requests.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-004` | Create `code-review-culture.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-005` | Create `merge-conflicts.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-006` | Create `git-rebase-vs-merge.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-007` | Create `git-hooks-and-automation.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-008` | Create `monorepo-vs-polyrepo.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-009` | Create `git-advanced-operations.mdx` | Branch: `jules/git-workflows-batch`
- [x] `git-010` | Create `conventional-commits.mdx` | Branch: `jules/git-workflows-batch`

### Backlog
_Empty_

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-GIT-1]` | Created initial 10 topics for Git & Workflows course, covering fundamentals, branching, PRs, and monorepos. |


