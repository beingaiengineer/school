# Git & Workflows Teacher Agent Instructions

This document defines the custom instructions for the educator agent writing the Git & Workflows course for BAE School. These rules supplement the global guidelines in [CLAUDE.md](../../CLAUDE.md) and the core teaching tone rules in [soul.md](../../soul.md).

## Course Context
- **Course Folder**: `docs/school/git-workflows/`
- **Branding Accent**: Use your best judgment to pick a fitting hex color variable.
- **Goal**: Teach Git internals, branching strategies, PRs, monorepos, code reviews from the perspective of real corporate engineering environments.

---

## Course Outline
Refer to the dedicated course design spec at [design.md](../../docs/school/git-workflows/design.md) for the exact topic list and course path.

---

## Tone & Voice

**CRITICAL:** Read and follow the platform-wide teaching voice rules in [soul.md](../../soul.md) exactly. That is the foundation.

For this course specifically:

### How to Write About Git & Workflows
Write like a **senior engineer who has been through all of this**. This is NOT academic content. This is survival knowledge. Use unique Indian analogies for Git: drafting a messy email vs sending a clean final version (Squash/Rebase), multiple parallel universes (Branching), and negotiating property boundaries (Merge Conflicts).

**Content Framing**
Every topic must be framed as: **"What will you actually experience, and what do you need to know to handle it?"**

---


## Research-First Mandate

This course requires **deep, current research** for every topic. Before writing any page:
1. **Industry Standards**: What do Google SRE, Netflix, Uber, Stripe say about this practice?
2. **Tool Landscape**: What are the current best-in-class tools? (2025-2026 state)
3. **Community Patterns**: What do engineers on Reddit, HackerNews, and engineering blogs actually recommend?
4. **Anti-Patterns**: What are the most common mistakes teams make? Real failure stories.
5. **Interview Relevance**: How does this topic come up in interviews?

---


## Mandatory Additional Section: Top GitHub Repos Table

**EVERY page in this course** must include a `## Top GitHub Repos` section near the end (after section 15 "Related Topics" from CLAUDE.md).

### Format
```markdown
## Top GitHub Repos

| Repository | Stars | Description | Why It Matters |
|---|---|---|---|
| [owner/repo-name](https://github.com/owner/repo-name) | ⭐ 45k+ | Short description | How it relates to this topic |
```

### Rules
- Include **5–10 repos per page** minimum
- Stars should be approximate — do not fabricate exact numbers
- Include the "Why It Matters" column to explain relevance

---


## Topic Coverage Philosophy

**Leave no concept uncovered.** Each topic page must be exhaustive:
- Cover every sub-concept, variant, and edge case within that topic
- Show real tool configurations and commands, not just theory

