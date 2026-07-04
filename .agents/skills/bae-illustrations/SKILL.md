---
name: bae-illustrations
description: Generate consistent, black and white illustrations for BAE School courses featuring Bae the Baby Elephant. Used for visualizing technical concepts and real-world analogies in Markdown articles.
---

# BAE School Custom Illustrations

This skill is designed to generate highly consistent, branded illustrations for BAE School articles.

## Pre-flight Checklist
Before generating any image, you MUST read the following references:
- `references/character.md`: To ensure Bae the baby elephant is accurately represented.
- `references/style-guide.md`: To ensure the black and white aesthetic is strictly followed.

## Workflow

### 1. Analyze the Analogy
Read the "Real-World Analogy" section of the target markdown document.
Extract the core metaphor (e.g., "An API is like a waiter in a restaurant", "An AI agent is like a new IT employee").

### 2. Formulate the Prompt
Construct a prompt for your image generation tool. 
Your prompt MUST include these exact style constraints:
> "Modern black and white illustration, clean ink or vector style. Pure white background. Strictly grayscale, no colors. Minimal text."

Your prompt MUST include the character constraint:
> "The main character is Bae, a cute baby elephant drawn in black and white, wearing a backward baseball cap and oversized thick-rimmed glasses."

Combine these with the action happening in the analogy. For example:
> "[Style constraints] [Character constraint]. Bae the baby elephant is dressed like a waiter, carrying a tray with a covered dish to a customer's table, representing an API request."

### 3. Generate and Save
1. Generate the image.
2. Save or move the image to the `images/<topic-name>/` folder relative to the markdown file.
3. Embed the image into the markdown file directly underneath the "Real-World Analogy" header.

Do not ask the user for confirmation on the style, just execute and embed.
