#!/usr/bin/env python3
"""Fix all 'images:' that should be 'url:' in OG image properties."""

import re

files = [
    "/vercel/share/v0-project/app/blog/are-luigi-carts-worth-it/page.tsx",
    "/vercel/share/v0-project/app/blog/best-dispensaries-los-angeles-luigi/page.tsx",
    "/vercel/share/v0-project/app/blog/best-infused-pre-rolls/page.tsx",
    "/vercel/share/v0-project/app/blog/buy-luigi-2g-disposable-online/page.tsx",
    "/vercel/share/v0-project/app/blog/buy-luigi-carts-wholesale/page.tsx",
    "/vercel/share/v0-project/app/blog/buy-luigi-disposable-vape/page.tsx",
    "/vercel/share/v0-project/app/blog/do-liquid-diamonds-get-you-high/page.tsx",
    "/vercel/share/v0-project/app/blog/how-long-do-luigi-disposables-last/page.tsx",
    "/vercel/share/v0-project/app/blog/how-to-open-a-luigi-preroll/page.tsx",
    "/vercel/share/v0-project/app/blog/infused-pre-rolls-vs-regular/page.tsx",
    "/vercel/share/v0-project/app/blog/live-rosin-vape-vs-live-resin/page.tsx",
    "/vercel/share/v0-project/app/blog/live-rosin-vs-liquid-diamonds/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-carts-los-angeles/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-disposable-vape-review/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-fattones-flavors-guide-2026/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-rosin-pen-review/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-rosin-pens-flavors-guide-2026/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-series-6-flavors-guide-2026/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-series-6-vs-series-5/page.tsx",
    "/vercel/share/v0-project/app/blog/luigi-vape-not-working-fix/page.tsx",
    "/vercel/share/v0-project/app/blog/what-is-live-rosin-vape/page.tsx",
    "/vercel/share/v0-project/app/blog/why-luigi-vapes-taste-better/page.tsx",
]

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace images: with url: in OG metadata blocks
    fixed = re.sub(
        r'(\s+)images:\s*"(https://www\.luigiofficialbrand\.com/og-images/[^"]+)"',
        r'\1url: "\2"',
        content
    )
    
    if fixed != content:
        with open(file_path, 'w') as f:
            f.write(fixed)
        print(f"✓ Fixed: {file_path.split('/')[-2]}")
    else:
        print(f"  Skipped: {file_path.split('/')[-2]}")

print("\n✅ All OG image properties fixed!")
