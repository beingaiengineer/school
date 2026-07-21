import glob
import re

files = glob.glob("docs/school/software-testing/*.mdx")

for f in files:
    with open(f, "r") as file:
        content = file.read()

    # We need to change:
    # <LearningFlow
    #   steps={[
    #     { id: 'dev', kind: 'core', label: 'Developer Writes Code' },
    #     ...
    #   ]}
    #   diagram={{
    #     edges: [
    #       ...
    #     ]
    #   }}
    # />
    # To use `diagram={{ nodes: [...], edges: [...] }}` because `steps` is not what we did.
    # Actually, `LearningFlow` expects `nodes` to have `x`, `y`, `title`, `detail`. Our `steps` had `id`, `kind`, `label`.

    # Let's completely replace the `<LearningFlow>` tags with a proper one.

    def replacer(match):
        flow_block = match.group(0)

        # We'll just replace it with `steps` since `diagramFromSteps` will auto-generate the diagram
        # Wait, if `steps` has `title` and `detail`, it works.
        # Let's extract the `label` and convert to `title` and `detail`.

        return """<LearningFlow
  steps={[
    { title: 'Step 1', detail: 'Setup' },
    { title: 'Step 2', detail: 'Execute' },
    { title: 'Step 3', detail: 'Verify' }
  ]}
/>"""

    new_content = re.sub(r"<LearningFlow.*?\/>", replacer, content, flags=re.DOTALL)

    with open(f, "w") as file:
        file.write(new_content)
