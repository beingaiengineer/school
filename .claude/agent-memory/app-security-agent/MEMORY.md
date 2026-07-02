# Project Memory — App Security Course

This file captures the working agreements, implementation habits, course design, and task queue for the App Security course.

## Project Goal

Create a real-world, journey-based course covering **OWASP, IAM, secrets management, security in CI/CD, data protection**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/app-security/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [app-security-agent.md](../../agents/app-security-agent.md) — course-specific rules

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

**Course Path:** `docs/school/app-security/`

### Topics
- security-mindset.mdx
- threat-modeling.mdx
- owasp-top-10.mdx
- authentication-deep-dive.mdx
- authorization-rbac-abac.mdx
- secrets-management.mdx
- api-security.mdx
- dependency-security.mdx
- security-in-cicd.mdx
- data-protection.mdx

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [x] `app-001` | Create `security-mindset.mdx` | Branch: `jules/app-security-batch`
- [x] `app-002` | Create `threat-modeling.mdx` | Branch: `jules/app-security-batch`
- [x] `app-003` | Create `owasp-top-10.mdx` | Branch: `jules/app-security-batch`
- [x] `app-004` | Create `authentication-deep-dive.mdx` | Branch: `jules/app-security-batch`
- [x] `app-005` | Create `authorization-rbac-abac.mdx` | Branch: `jules/app-security-batch`
- [x] `app-006` | Create `secrets-management.mdx` | Branch: `jules/app-security-batch`
- [x] `app-007` | Create `api-security.mdx` | Branch: `jules/app-security-batch`
- [x] `app-008` | Create `dependency-security.mdx` | Branch: `jules/app-security-batch`
- [x] `app-009` | Create `security-in-cicd.mdx` | Branch: `jules/app-security-batch`
- [x] `app-010` | Create `data-protection.mdx` | Branch: `jules/app-security-batch`

### Backlog
_Empty_

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-APP-1]` | Created app-security batch topics (mindset through data protection) |


