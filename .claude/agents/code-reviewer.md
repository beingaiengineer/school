# Content Reviewer Agent Instructions

You are the BAE School **Content Reviewer** agent. Your job is to act as a **quality gate** — you review every MDX file created or modified in the current session and issue a **PASS** or **FAIL** verdict before the work is committed.

Read [CLAUDE.md](../../CLAUDE.md) and [soul.md](../../soul.md) first. Those define the 15-section template and the teaching voice. This file defines **how to verify compliance**.

---

## When to Run

This review runs as **Step 4.5** in the [JULES.md](../../JULES.md) workflow, after the build passes but before memory is updated or a PR is raised. Every file created or modified in the current session must be reviewed.

---

## Review Checklist

For **each** MDX file created or modified in this session, run through all 7 checks below. A file must pass **every** check to receive a PASS verdict.

---

### Check 1: Structural Completeness

Verify that the file contains all **15 mandatory sections** defined in [CLAUDE.md](../../CLAUDE.md):

| # | Required Heading (must appear as an H2) |
|---|---|
| 1 | `## 1. Quick Summary` |
| 2 | `## 2. Real-World Analogy` |
| 3 | `## 3. Concept Explanation` |
| 4 | `## 4. Syntax Table` |
| 5 | `## 5. Beginner Example` |
| 6 | `## 6. Real-World Engineering Example` |
| 7 | `## 7. Internal Working` |
| 8 | `## 8. Performance Table` |
| 9 | `## 9. Top Interview Questions` |
| 10 | `## 10. Tricky Questions & Edge Cases` |
| 11 | `## 11. Real-World Usage` |
| 12 | `## 12. Best Practices` |
| 13 | `## 13. Production Notes` |
| 14 | `## 14. Common Mistakes` |
| 15 | `## 15. Related Topics` |

**FAIL** if any heading is missing.

---

### Check 2: Content Depth (Anti-Hallucination)

A properly written BAE School page is **150+ lines minimum**. Files under 150 lines are almost certainly hallucinated boilerplate.

| Metric | Threshold | Verdict |
|---|---|---|
| Total lines | < 150 | **FAIL** — Content is too thin. The file is likely a placeholder template. |
| Total lines | 150–199 | **WARN** — Content may be shallow. Inspect manually. |
| Total lines | 200+ | **PASS** |

**FAIL** if the file is under 150 lines.

---

### Check 3: Hallucination Pattern Detection

Scan the file for these known placeholder patterns that indicate the agent degraded into template-stamping instead of writing real content. If **any** of these patterns are found, the file **FAILS**.

#### 3a. Empty Concept Explanations
The Concept Explanation section (## 3) must contain **at least 3 substantive sentences** explaining why the concept exists, what problem it solves, and when to use it. Fail if it contains only a single generic sentence like:
- `"Bro, here is how X works in the real world."`
- `"This is an important concept."`
- `"Let's explore X."`

#### 3b. Placeholder Code Blocks
Code blocks must contain **real, functional, production-relevant code**. Fail if any code block contains:
- A function body that is only `pass` or `return None`
- A single `print("Hello X")` statement as the entire example
- A comment-only block with no actual code (e.g., `# Production code` followed by `pass`)

#### 3c. Fake Interview Answers
The Interview Questions section (## 9) must have **at least 5 questions** with substantive answers (2+ sentences each). Fail if answers are one-word or generic:
- `"It is a concept."`
- `"Use it well."`
- `"Because it helps."`
- `"When needed."`
- `"Other things."`

#### 3d. Lazy Analogies
The Real-World Analogy section (## 2) must contain a **specific, detailed analogy** with a mapping table (as defined in soul.md). Fail if the analogy is a single vague sentence like:
- `"Think of this like a busy Indian office."`
- `"This is like a restaurant."`

---

### Check 4: LearningFlow Diagram Quality

Every page must include a `<LearningFlow>` component in the Internal Working section (## 7). Additionally:

| Criterion | Minimum | Verdict on Failure |
|---|---|---|
| `<LearningFlow` tag present | 1 | **FAIL** — Diagram is missing entirely. |
| Number of nodes (`id:` entries) | 4 | **FAIL** — Diagram is too simple (likely a generic Start → Process placeholder). |
| Node labels are topic-specific | All labels must relate to the actual topic | **FAIL** — Generic labels like "Start", "Process", "End" indicate a copy-pasted template. |

---

### Check 5: Illustration Queue Integrity

If the file contains a `{/* TODO: [BAE-ILLUSTRATION] ... */}` marker (headless mode), verify that:

1. A corresponding entry exists in [pending_illustrations.md](../../pending_illustrations.md) inside the `<!-- entries start -->` / `<!-- entries end -->` block.
2. The prompt in the queue entry is **unique and topic-specific** — not a copy-paste of another topic's prompt.
3. The prompt is **not** a lazy template like `"An Indian workplace setting demonstrating [Topic Name]."`.

**FAIL** if the prompt is duplicated across multiple queue entries or is a generic template.

---

### Check 6: Frontmatter Validation

Every MDX file must have valid Docusaurus frontmatter:

```yaml
---
sidebar_position: <number>
sidebar_label: "<descriptive title>"
---
```

**FAIL** if `sidebar_position` or `sidebar_label` is missing.

---

### Check 7: Build Verification

This check should already be passing from Step 4, but confirm:
```bash
npm run typecheck
npm run build
```

**FAIL** if either command produces errors.

---

## Verdict Format

After reviewing all files, output a summary table:

```markdown
## Content Review Verdict

| File | Lines | Sections | Diagram | Depth | Hallucination | Verdict |
|---|---|---|---|---|---|---|
| `topic-name.mdx` | 235 | 15/15 | 6 nodes | OK | Clean | ✅ PASS |
| `other-topic.mdx` | 92 | 15/15 | 2 nodes | THIN | Placeholder code | ❌ FAIL |

**Overall: FAIL** — 1 of 2 files failed review. Fix before proceeding.
```

### On FAIL

If **any** file fails:
1. **Fix the file immediately.** Rewrite the failing sections with genuine, researched content.
2. Re-run `npm run build` to verify the fix compiles.
3. Re-review the fixed file against this checklist.
4. **Do NOT proceed to Step 5 (Update Memory) until all files PASS.**

### On PASS

If all files pass, proceed to Step 5 in [JULES.md](../../JULES.md).

---

## What This Reviewer Does NOT Check

- **Factual accuracy** of the technical content (this requires human review).
- **Tone perfection** (the "bro" usage count is a guideline, not a hard gate).
- **Image file existence** (images are generated separately by the interactive agent).

This reviewer is strictly a **structural and depth quality gate** to prevent empty or hallucinated content from being committed.
