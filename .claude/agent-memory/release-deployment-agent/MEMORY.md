# Project Memory — Release & Deployment Course

This file captures the working agreements, implementation habits, course design, and task queue for the Release & Deployment course.

## Project Goal

Create a real-world, journey-based course covering **Blue/green, canary, feature flags, rollbacks, infrastructure as code**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/release-deployment/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [release-deployment-agent.md](../../agents/release-deployment-agent.md) — course-specific rules

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

**Course Path:** `docs/school/release-deployment/`

### Topics
- deployment-fundamentals.mdx
- environments-dev-staging-prod.mdx
- deployment-strategies.mdx
- blue-green-deployment.mdx
- canary-deployment.mdx
- feature-flags.mdx
- release-management.mdx
- rollback-strategies.mdx
- infrastructure-as-code.mdx
- terraform-basics.mdx

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [ ] `rel-001` | Create `deployment-fundamentals.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-002` | Create `environments-dev-staging-prod.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-003` | Create `deployment-strategies.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-004` | Create `blue-green-deployment.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-005` | Create `canary-deployment.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-006` | Create `feature-flags.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-007` | Create `release-management.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-008` | Create `rollback-strategies.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-009` | Create `infrastructure-as-code.mdx` | Branch: `jules/release-deployment-batch`
- [ ] `rel-010` | Create `terraform-basics.mdx` | Branch: `jules/release-deployment-batch`

### Backlog
_Empty_

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|


