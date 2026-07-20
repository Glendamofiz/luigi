#!/usr/bin/env python3
"""
Script to update blog posts with unique OG images and ProductCTA components.
Maps blog post slugs to their unique OG image names and product links.
"""

import os
import re

# Mapping of blog post directories to their OG image files and product CTAs
BLOG_POSTS = {
    "are-luigi-carts-worth-it": {
        "og_image": "blog-buy-luigi-carts-wholesale.png",
        "product_name": "Luigi Carts",
        "product_link": "/products",
        "description": "Find out if Luigi carts deliver on quality and value."
    },
    "best-dispensaries-los-angeles-luigi": {
        "og_image": "blog-buy-luigi-carts-wholesale.png",
        "product_name": "Luigi Products",
        "product_link": "/products",
        "description": "Find the best dispensaries near you that carry Luigi Oil products."
    },
    "best-infused-pre-rolls": {
        "og_image": "blog-luigi-fattones-flavors-guide.png",
        "product_name": "Luigi Fattones",
        "product_link": "/products/fattones",
        "description": "Experience the premium infused pre-rolls that set the standard for quality."
    },
    "buy-luigi-2g-disposable-online": {
        "og_image": "product-2g-disposables.png",
        "product_name": "Luigi 2G Disposables",
        "product_link": "/products",
        "description": "Get maximum value with Luigi's premium 2G disposable vapes."
    },
    "buy-luigi-disposable-vape": {
        "og_image": "product-2g-disposables.png",
        "product_name": "Luigi Disposables",
        "product_link": "/products",
        "description": "Shop our complete collection of premium Luigi disposable vapes."
    },
    "do-liquid-diamonds-get-you-high": {
        "og_image": "blog-live-resin-liquid-diamonds.png",
        "product_name": "Liquid Diamonds",
        "product_link": "/products",
        "description": "Discover the potency and effects of premium liquid diamonds."
    },
    "how-long-do-luigi-disposables-last": {
        "og_image": "product-2g-disposables.png",
        "product_name": "Luigi Disposables",
        "product_link": "/products",
        "description": "See how long Luigi disposables last and maximize your investment."
    },
    "how-to-open-a-luigi-preroll": {
        "og_image": "blog-luigi-fattones-flavors-guide.png",
        "product_name": "Luigi Fattones",
        "product_link": "/products/fattones",
        "description": "Learn the proper way to open and enjoy Luigi pre-rolls."
    },
    "how-to-verify-authentic-luigi-carts": {
        "og_image": "blog-authentic-luigi-oil.png",
        "product_name": "Authentic Luigi Products",
        "product_link": "/products",
        "description": "Ensure you're buying authentic Luigi products from authorized retailers."
    },
    "infused-pre-rolls-vs-regular": {
        "og_image": "blog-luigi-fattones-flavors-guide.png",
        "product_name": "Luigi Fattones",
        "product_link": "/products/fattones",
        "description": "Discover why infused pre-rolls deliver superior effects and flavor."
    },
    "live-rosin-vape-vs-live-resin": {
        "og_image": "blog-live-resin-liquid-diamonds.png",
        "product_name": "Luigi Rosin Pens",
        "product_link": "/products/rosin-pens",
        "description": "Compare live rosin vapes and live resin to find your perfect product."
    },
    "live-rosin-vs-liquid-diamonds": {
        "og_image": "blog-live-resin-liquid-diamonds.png",
        "product_name": "Premium Concentrates",
        "product_link": "/products",
        "description": "Explore the differences between live rosin and liquid diamonds."
    },
    "luigi-carts-los-angeles": {
        "og_image": "blog-buy-luigi-carts-wholesale.png",
        "product_name": "Luigi Carts",
        "product_link": "/products",
        "description": "Find premium Luigi carts at the best dispensaries in Los Angeles."
    },
    "luigi-disposable-vape-review": {
        "og_image": "product-2g-disposables.png",
        "product_name": "Luigi Disposables",
        "product_link": "/products",
        "description": "Read our comprehensive review of Luigi disposable vapes."
    },
    "luigi-rosin-pens-flavors-guide-2026": {
        "og_image": "product-rosin-pens.png",
        "product_name": "Luigi Rosin Pens",
        "product_link": "/products/rosin-pens",
        "description": "Explore all Luigi rosin pen flavors and find your favorite."
    },
    "luigi-series-6-disposable-review": {
        "og_image": "blog-series-6-disposables.png",
        "product_name": "Luigi Series 6",
        "product_link": "/products/series-6",
        "description": "Discover why Series 6 represents the latest evolution in Luigi disposables."
    },
    "luigi-series-6-flavors-guide-2026": {
        "og_image": "blog-series-6-disposables.png",
        "product_name": "Luigi Series 6",
        "product_link": "/products/series-6",
        "description": "Explore the complete lineup of Luigi Series 6 flavors."
    },
    "luigi-series-6-vs-series-5": {
        "og_image": "blog-series-6-disposables.png",
        "product_name": "Luigi Series 6",
        "product_link": "/products/series-6",
        "description": "See how Series 6 improves on the proven Series 5 design."
    },
    "luigi-vape-not-working-fix": {
        "og_image": "blog-series-6-disposables.png",
        "product_name": "Luigi Support",
        "product_link": "/contact",
        "description": "Troubleshoot your Luigi vape or contact our support team for help."
    },
    "official-luigi-brand-guide-2026": {
        "og_image": "blog-authentic-luigi-oil.png",
        "product_name": "Luigi Products",
        "product_link": "/products",
        "description": "The complete 2026 guide to all authentic Luigi brand products."
    },
    "what-is-live-rosin-vape": {
        "og_image": "blog-live-resin-liquid-diamonds.png",
        "product_name": "Luigi Rosin Pens",
        "product_link": "/products/rosin-pens",
        "description": "Learn about live rosin vaping and why it's gaining popularity."
    },
    "why-luigi-vapes-taste-better": {
        "og_image": "product-2g-disposables.png",
        "product_name": "Luigi Vapes",
        "product_link": "/products",
        "description": "Discover the science behind Luigi's superior flavor profile."
    }
}

def update_blog_post(slug, config):
    """Update a single blog post with OG image and ProductCTA."""
    filepath = f"/vercel/share/v0-project/app/blog/{slug}/page.tsx"
    
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return False
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Update imports
    if "ProductCTA" not in content:
        content = content.replace(
            'import { Calendar, Clock, ArrowLeft }',
            'import { ProductCTA } from "@/components/product-cta"\nimport { Calendar, Clock, ArrowLeft }'
        )
    
    # Update OG image URL
    old_og = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-XEoqV0endTG9hI2jLyeussqr64rj0r.jpg'
    new_og = f'https://www.luigiofficialbrand.com/og-images/{config["og_image"]}'
    
    if old_og in content:
        content = content.replace(old_og, new_og)
    
    # Add ProductCTA before RelatedGuides
    if '<RelatedGuides />' in content and '<ProductCTA' not in content:
        cta_component = f'''      <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="{config['product_name']}"
          productLink="{config['product_link']}"
          description="{config['description']}"
        />
      </section>

      '''
        content = content.replace('<RelatedGuides />', cta_component + '<RelatedGuides />')
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated: {slug}")
    return True

def main():
    """Update all blog posts."""
    updated_count = 0
    for slug, config in BLOG_POSTS.items():
        if update_blog_post(slug, config):
            updated_count += 1
    
    print(f"\nTotal updated: {updated_count}/{len(BLOG_POSTS)}")

if __name__ == "__main__":
    main()
