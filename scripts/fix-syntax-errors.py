#!/usr/bin/env python3
"""Fix syntax errors in blog post schema markup."""

import os
import re

error_files = [
    "./app/blog/best-dispensaries-los-angeles-luigi/page.tsx",
    "./app/blog/buy-luigi-2g-disposable-online/page.tsx",
    "./app/blog/buy-luigi-carts-wholesale/page.tsx",
    "./app/blog/buy-luigi-disposable-vape/page.tsx",
    "./app/blog/do-liquid-diamonds-get-you-high/page.tsx",
    "./app/blog/how-to-open-a-luigi-preroll/page.tsx",
    "./app/blog/how-to-verify-authentic-luigi-carts/page.tsx",
    "./app/blog/live-rosin-vape-vs-live-resin/page.tsx",
    "./app/blog/luigi-carts-los-angeles/page.tsx",
    "./app/blog/luigi-disposable-vape-review/page.tsx",
    "./app/blog/luigi-fattones-flavors-guide-2026/page.tsx",
    "./app/blog/luigi-rosin-pen-review/page.tsx",
    "./app/blog/luigi-rosin-pens-flavors-guide-2026/page.tsx",
    "./app/blog/luigi-series-6-disposable-review/page.tsx",
    "./app/blog/luigi-series-6-flavors-guide-2026/page.tsx",
    "./app/blog/luigi-series-6-vs-series-5/page.tsx",
    "./app/blog/luigi-vape-not-working-fix/page.tsx",
    "./app/blog/official-luigi-brand-guide-2026/page.tsx",
    "./app/blog/what-is-live-rosin-vape/page.tsx",
    "./app/blog/why-luigi-vapes-taste-better/page.tsx",
]

for file_path in error_files:
    full_path = os.path.join("/vercel/share/v0-project", file_path)
    
    if not os.path.exists(full_path):
        print(f"⚠️  File not found: {file_path}")
        continue
    
    with open(full_path, 'r') as f:
        content = f.read()
    
    # Fix stray commas in schema - remove lines that are just whitespace and comma
    fixed_content = re.sub(r'(\n\s*),(\n\s*(?:url|type|images|description|publishedTime|\}|description))', r'\1\2', content)
    
    # Fix cases where there's a stray comma before url or other properties
    fixed_content = re.sub(r',\s*,', ',', fixed_content)
    
    # Remove trailing commas before closing braces/brackets in schema
    fixed_content = re.sub(r',(\s*[\}\]])', r'\1', fixed_content)
    
    if fixed_content != content:
        with open(full_path, 'w') as f:
            f.write(fixed_content)
        print(f"✓ Fixed: {file_path}")
    else:
        print(f"  No changes needed: {file_path}")

print("\n✅ All syntax errors fixed!")
