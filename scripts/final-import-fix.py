#!/usr/bin/env python3
"""Final fix for all missing ProductCTA imports."""

import os
import glob

blog_files = glob.glob("/vercel/share/v0-project/app/blog/*/page.tsx")

for file_path in blog_files:
    with open(file_path, 'r') as f:
        content = f.read()
    
    # If file has ProductCTA component but no import
    if '<ProductCTA' in content and 'import { ProductCTA }' not in content:
        # Add import after RelatedGuides import
        if 'import { RelatedGuides }' in content:
            content = content.replace(
                'import { RelatedGuides } from',
                'import { ProductCTA } from "@/components/product-cta"\nimport { RelatedGuides } from'
            )
        # Try with single quotes
        elif "import { RelatedGuides } from" in content:
            content = content.replace(
                "import { RelatedGuides } from",
                'import { ProductCTA } from "@/components/product-cta"\nimport { RelatedGuides } from'
            )
        # Fallback: add after any import
        else:
            lines = content.split('\n')
            import_index = 0
            for i, line in enumerate(lines):
                if line.startswith('import '):
                    import_index = i
            lines.insert(import_index + 1, 'import { ProductCTA } from "@/components/product-cta"')
            content = '\n'.join(lines)
        
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"✓ Fixed: {os.path.basename(os.path.dirname(file_path))}")

print("\n✅ All ProductCTA imports added!")
