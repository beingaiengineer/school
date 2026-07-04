# Project Memory — Incident Management Course

This file captures the working agreements, implementation habits, course design, and task queue for the Incident Management course.

## Project Goal

Create a real-world, journey-based course covering **On-call culture, severity levels, blameless postmortems, runbooks**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/incident-management/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [incident-management-agent.md](../../agents/incident-management-agent.md) — course-specific rules

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

**Course Path:** `docs/school/incident-management/`

### Topics
- what-is-an-incident.mdx
- severity-levels.mdx
- on-call-culture.mdx
- incident-response-process.mdx
- incident-commander-role.mdx
- runbooks.mdx
- blameless-postmortems.mdx
- incident-communication.mdx
- incident-tools.mdx

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [x] [BAE-INC-001] | Create `what-is-an-incident.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-002] | Create `severity-levels.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-003] | Create `on-call-culture.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-004] | Create `incident-response-process.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-005] | Create `incident-commander-role.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-006] | Create `runbooks.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-007] | Create `blameless-postmortems.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-008] | Create `incident-communication.mdx` | Branch: `jules/incident-management-batch`
- [x] [BAE-INC-009] | Create `incident-tools.mdx` | Branch: `jules/incident-management-batch`

### Backlog
_Empty_

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-INC-1]` | Created 9 incident management core topic pages |


