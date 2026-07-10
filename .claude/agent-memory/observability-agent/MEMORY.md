# Project Memory — Observability Course

This file captures the working agreements, implementation habits, course design, and task queue for the Observability course.

## Project Goal

Create a real-world, journey-based course covering **Logs, metrics, traces, Prometheus, Grafana, OpenTelemetry**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Must-Read Instructions

**CRITICAL:** Before starting any new task, you MUST read:
- [MEMORY.md](./MEMORY.md) — this file, fully
- [JULES.md](../../../JULES.md) — autonomous session workflow
- [soul.md](../../../soul.md) — core BAE School teaching voice and tone
- [design.md](../../../docs/school/observability/design.md) — course outline and folder structure
- [CLAUDE.md](../../../CLAUDE.md) — global BAE School guidelines
- [observability-agent.md](../../agents/observability-agent.md) — course-specific rules

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

**Course Path:** `docs/school/observability/`

### Topics
- what-is-observability.mdx
- structured-logging.mdx
- centralized-logging.mdx
- metrics-and-dashboards.mdx
- prometheus-grafana.mdx
- distributed-tracing.mdx
- opentelemetry.mdx
- alerting-rules.mdx
- health-checks.mdx
- golden-signals.mdx

---

## Task Queue

> **Jules: Pick the first batch of `- [ ]` items (up to 10) under `### Next Task`. If fewer than 10, promote from `### Backlog`.**

### Next Task
- [x] [BAE-OBS-001] | Create `what-is-observability.mdx`
- [x] [BAE-OBS-002] | Create `structured-logging.mdx`
- [x] [BAE-OBS-003] | Create `centralized-logging.mdx`
- [x] [BAE-OBS-004] | Create `metrics-and-dashboards.mdx`
- [x] [BAE-OBS-005] | Create `prometheus-grafana.mdx`
- [x] [BAE-OBS-006] | Create `distributed-tracing.mdx`
- [x] [BAE-OBS-007] | Create `opentelemetry.mdx`
- [x] [BAE-OBS-008] | Create `alerting-rules.mdx`
- [x] [BAE-OBS-009] | Create `health-checks.mdx`
- [x] [BAE-OBS-010] | Create `golden-signals.mdx`

### Backlog
_Empty_

### Completed This Cycle
| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-OBS-001]` through `[BAE-OBS-010]` | Created observability introduction batch including what is observability, logging strategies, metrics, tracing, prometheus, grafana, open telemetry, alerting, health checks, and golden signals. |


