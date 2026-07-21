#!/usr/bin/env python3
"""Fix all schema markup issues in blog posts."""

import os
import re
import glob

# Find all blog post page files
blog_files = glob.glob("/vercel/share/v0-project/app/blog/*/page.tsx")

fixes_applied = 0

for file_path in sorted(blog_files):
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix 1: Remove duplicate url properties in openGraph
    content = re.sub(
        r'(openGraph:\s*\{[^}]*url[^}]*)\n\s*url:',
        r'\1\n    images:',
        content,
        flags=re.DOTALL
    )
    
    # Fix 2: Remove stray commas before closing brackets
    content = re.sub(r',(\s*[\}\]])', r'\1', content)
    
    # Fix 3: Remove duplicate commas
    content = re.sub(r',,+', ',', content)
    
    # Fix 4: Fix broken schema with single quotes in property names that conflict with JSX
    # Replace patterns like 'What's the... with escaped version
    content = re.sub(
        r"'name':\s*'([^']*)'s([^']*)'",
        r"'name': \"\1's\2\"",
        content
    )
    
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        fixes_applied += 1
        print(f"✓ Fixed: {os.path.basename(os.path.dirname(file_path))}")

print(f"\n✅ Fixed {fixes_applied} blog files")
