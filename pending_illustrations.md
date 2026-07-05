# Pending BAE School Illustrations Queue

This file tracks illustrations that need to be generated for BAE School course topics. 
When Jules runs in an autonomous/headless server environment where the `generate_image` tool is not available, it embeds a `{/* TODO: [BAE-ILLUSTRATION] ... */}` comment marker instead of an image tag to avoid using placeholder images or breaking the Docusaurus build, and queues the details here.

An agent in an interactive chat session can then read this file, generate the images, save them to their asset paths, insert the proper image tag replacing the comment marker in the MDX files, and clear the entries from this queue.

## Queue

<!-- entries start -->
<!-- entries end -->

## Formatting Guidelines
When generating images in the interactive session, ensure:
1. **Style**: Modern black and white illustration, clean ink or vector style. Pure white background. Strictly grayscale, no colors. Minimal text.
2. **Character**: The main character is Bae, a cute baby elephant drawn in black and white, wearing a backward baseball cap and oversized thick-rimmed glasses.
3. **Format**: PNG, saved to the target paths specified in the queue.
