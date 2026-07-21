#!/usr/bin/env python3
"""Add missing ProductCTA imports to blog posts."""

import re

files = [
    "/vercel/share/v0-project/app/blog/best-infused-pre-rolls/page.tsx",
    "/vercel/share/v0-project/app/blog/buy-luigi-2g-disposable-online/page.tsx",
    "/vercel/share/v0-project/app/blog/buy-luigi-disposable-vape/page.tsx",
    "/vercel/share/v0-project/app/blog/how-long-do-luigi-disposables-last/page.tsx",
    "/vercel/share/v0-project/app/blog/infused-pre-rolls-vs-regular/page.tsx",
    "/vercel/share/v0-project/app/blog/live-rosin-vape-vs-live-resin/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-disposable-vape-review/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-rosin-pens-flavors-guide-2026/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-series-6-disposable-review/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-series-6-vs-series-5/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-vape-not-working-fix/page.tsx",
    "/vercel/share/v0-project/app/blog/what-is-live-rosin-vape/page.tsx",
    "/vercel/share/v0-project/app/blog/why-luigi-vapes-taste-better/page.tsx",
]

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Find the RelatedGuides import and add ProductCTA after it
    if 'import { RelatedGuides }' in content and 'ProductCTA' not in content:
        fixed = content.replace(
            'import { RelatedGuides } from "@/components/related-guides"',
            'import { RelatedGuides } from "@/components/related-guides"\nimport { ProductCTA } from "@/components/product-cta"'
        )
        
        with open(file_path, 'w') as f:
            f.write(fixed)
        print(f"✓ Added import: {file_path.split('/')[-2]}")
    else:
        print(f"  Skipped: {file_path.split('/')[-2]}")

print("\n✅ All ProductCTA imports added!")
