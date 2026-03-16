import sys
import os

filepath = r"c:\Users\Marlo\OneDrive\Documents\WorkSpace\Cobbledatapacks\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find exact start and end of the block to replace
start_idx: int = -1
end_idx: int = -1

for i, line in enumerate(lines):
    if '<!-- CDN: JSZip y Lucide Icons -->' in line:
        start_idx = i
        break

for i in range(len(lines)-1, -1, -1):
    if '</script>' in lines[i] and '</div>' not in lines[i] and 'lucide' not in lines[i]: 
        pass # Wait, let me just find exactly line 1467 where the large script ends.
    if lines[i].strip() == '</body>':
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_lines = lines[:start_idx] + [  # type: ignore
        '  <!-- Scripts Locales -->\n',
        '  <script src="js/config.js"></script>\n',
        '  <script src="js/data.js"></script>\n',
        '  <script src="js/generator.js"></script>\n',
        '  <script src="js/ui.js"></script>\n',
        '  <script src="js/app.js"></script>\n'
    ] + lines[end_idx:]  # type: ignore
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Replace successful. Start index:", start_idx, "End index:", end_idx)
else:
    print("Could not find boundaries. start:", start_idx, "end:", end_idx)
