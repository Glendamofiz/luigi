#!/usr/bin/env python3
import re
import os
from pathlib import Path

# Mapping of blog slug to OG image and product link
blog_mapping = {
    "are-luigi-carts-worth-it": ("blog-are-luigi-carts-worth-it.png", "/products", "Luigi Carts"),
    "best-dispensaries-los-angeles-luigi": ("blog-best-dispensaries-los-angeles.png", "/products", "Luigi Products"),
    "best-infused-pre-rolls": ("blog-best-infused-pre-rolls.png", "/products/fattones", "Luigi Fattones"),
    "buy-luigi-2g-disposable-online": ("blog-buy-luigi-2g-online.png", "/products/series-6", "Luigi 2G Disposables"),
    "buy-luigi-carts-wholesale": ("blog-buy-luigi-carts-wholesale.png", "/products", "Luigi Carts"),
    "buy-luigi-disposable-vape": ("blog-buy-luigi-disposable.png", "/products/series-6", "Luigi Disposables"),
    "do-liquid-diamonds-get-you-high": ("blog-liquid-diamonds-high.png", "/products/series-6", "Luigi Liquid Diamonds"),
    "how-long-do-luigi-disposables-last": ("blog-how-long-disposables-last.png", "/products/series-6", "Luigi Disposables"),
    "how-to-open-a-luigi-preroll": ("blog-how-to-open-preroll.png", "/products/fattones", "Luigi Fattones"),
    "how-to-verify-authentic-luigi-carts": ("blog-authentic-luigi-oil.png", "/products", "Luigi Carts"),
    "infused-pre-rolls-vs-regular": ("blog-best-infused-pre-rolls.png", "/products/fattones", "Luigi Fattones"),
    "live-rosin-vape-vs-live-resin": ("blog-live-rosin-vs-liquid.png", "/products/rosin-pens", "Luigi Rosin Pens"),
    "live-rosin-vs-liquid-diamonds": ("blog-rosin-vs-diamonds.png", "/products/rosin-pens", "Luigi Rosin Pens"),
    "luigi-carts-los-angeles": ("blog-luigi-carts-la.png", "/products", "Luigi Carts"),
    "luigi-disposable-vape-review": ("blog-disposable-vape-review.png", "/products/series-6", "Luigi Disposables"),
    "luigi-fattones-flavors-guide-2026": ("blog-luigi-fattones-flavors-guide.png", "/products/fattones", "Luigi Fattones"),
    "luigi-rosin-pen-review": ("blog-luigi-rosin-pen-review.png", "/products/rosin-pens", "Luigi Rosin Pens"),
    "luigi-rosin-pens-flavors-guide-2026": ("blog-rosin-pens-flavors.png", "/products/rosin-pens", "Luigi Rosin Pens"),
    "luigi-series-6-disposable-review": ("blog-series-6-disposables.png", "/products/series-6", "Luigi Series 6"),
    "luigi-series-6-flavors-guide-2026": ("blog-series-6-flavors.png", "/products/series-6", "Luigi Series 6"),
    "luigi-series-6-vs-series-5": ("blog-series-6-vs-5.png", "/products/series-6", "Luigi Series 6"),
    "luigi-vape-not-working-fix": ("blog-vape-not-working.png", "/products/series-6", "Luigi Support"),
    "official-luigi-brand-guide-2026": ("blog-official-luigi-guide.png", "/products", "Luigi Products"),
    "what-is-live-rosin-vape": ("blog-what-is-live-rosin.png", "/products/rosin-pens", "Luigi Rosin Pens"),
    "why-luigi-vapes-taste-better": ("blog-why-taste-better.png", "/products", "Luigi Products"),
}

blog_dir = Path("/vercel/share/v0-project/app/blog")

for slug, (og_image, product_link, product_name) in blog_mapping.items():
    page_path = blog_dir / slug / "page.tsx"
    
    if not page_path.exists():
        print(f"⚠️  Skipping {slug} - file not found")
        continue
    
    with open(page_path, 'r') as f:
        content = f.read()
    
    # Skip if already has ProductCTA
    if "ProductCTA" in content:
        print(f"✓ {slug} - already updated")
        continue
    
    # Add ProductCTA import
    if "ProductCTA" not in content:
        import_pattern = r'(import.*RelatedGuides.*\n)'
        if re.search(import_pattern, content):
            content = re.sub(
                import_pattern,
                r'\1import { ProductCTA } from "@/components/product-cta"\n',
                content
            )
    
    # Update OG image URL
    old_og = r'url: "https://hebbkx1anhila5yf\.public\.blob\.vercel-storage\.com/HOME-PAGE-BANNER-DEVICES-for-mobile-[^"]+\.jpg"'
    new_og = f'url: "https://www.luigiofficialbrand.com/og-images/{og_image}"'
    content = re.sub(old_og, new_og, content)
    
    # Add ProductCTA before RelatedGuides (find RelatedGuides pattern and add ProductCTA before it)
    related_guides_pattern = r'(\s+)<RelatedGuides'
    product_cta_section = f'''      <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="{product_name}"
          productLink="{product_link}"
          description="Ready to experience the best? Browse our complete collection of premium products."
        />
      </section>

\1<RelatedGuides'''
    
    if re.search(related_guides_pattern, content):
        content = re.sub(related_guides_pattern, product_cta_section, content)
    
    with open(page_path, 'w') as f:
        f.write(content)
    
    print(f"✓ Updated {slug}")

print("\n✅ All blog posts updated!")
