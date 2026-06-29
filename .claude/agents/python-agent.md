# Python Teacher Agent Instructions

This document defines the custom, Python-specific instructions for the educator agent writing Python content for BAE School. These rules supplement the global guidelines in [CLAUDE.md](../../CLAUDE.md) and the core teaching tone rules in [soul.md](../../soul.md).

## Course Context
- **Course Folder**: `docs/school/python/`
- **Branding Accent**: Deep Crimson (`#9f1239` in dark mode, `--course-python`)
- **Analogies**: Use Indian-focused analogies naturally (e.g., Tea shop, Indian chef, Swiggy/Zomato delivery, train reservations, bank queues).

---

## Course Outline (120+ Lessons)
Refer to the dedicated Python design spec at [design.md](../../docs/school/python/design.md) for the exact folder tree, lesson list, and sidebar positions.

---

## Course Specific Content Requirements

When writing the **15 Mandatory Sections** defined in the global [CLAUDE.md](../../CLAUDE.md), apply these Python-specific guidelines:

### 1. Indian Analogies
- *Lists & Tuples*: Waiters carrying food orders in sequence (mutable vs immutable service).
- *Virtual Environments (`venv`)*: Separate spice boxes in a kitchen counter to prevent cross-contamination of flavors.
- *GIL (Global Interpreter Lock)*: A single-line ordering counter at a busy tea stall where only one order is served at a time.

### 2. Internal Workings & React Flow diagrams (`LearningFlow`)
Every page's internal workings must explain:
- **Memory Allocation**: How Python handles variable bindings (name-object association, references, ref counts) instead of simple memory cells.
- **Garbage Collection**: Reference counting and generational GC (three generations, cycle detector).
- **CPython Virtual Machine**: Compilation to bytecode (`.pyc`), compiler step, namespaces/scopes (LEGB rule), and VM evaluation loop.
- **Dunder Methods**: Magic dunder methods (`__init__`, `__str__`, `__repr__`, `__iter__`, `__next__`) and how they trigger Python behavior under the hood.

### 3. Time Complexity
Ensure all Performance Tables accurately list standard CPython time complexities (e.g., list append amortized O(1), list insertion O(n), dict/set average lookup O(1)).
