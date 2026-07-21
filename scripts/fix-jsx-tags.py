#!/usr/bin/env python3
"""Fix duplicate closing tags in blog JSX."""

import os
import re
import glob

blog_files = glob.glob("/vercel/share/v0-project/app/blog/*/page.tsx")
fixes = 0

for file_path in sorted(blog_files):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    original_lines = lines[:]
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for duplicate </main> tags
        if '</main>' in line and i + 1 < len(lines):
            next_line = lines[i + 1]
            if '</main>' in next_line:
                # Skip this line, it's a duplicate
                i += 1
                fixes += 1
                continue
        
        fixed_lines.append(line)
        i += 1
    
    if fixed_lines != original_lines:
        with open(file_path, 'w') as f:
            f.writelines(fixed_lines)
        print(f"✓ Fixed: {os.path.basename(os.path.dirname(file_path))}")

print(f"\n✅ Fixed {fixes} duplicate tags")
