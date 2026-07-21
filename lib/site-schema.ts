export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.luigiofficialbrand.com/#organization",
      "name": "Luigi Oil",
      "url": "https://www.luigiofficialbrand.com/",
      "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Gold-Rich%20%281%29-kRnLnl7dbZ8eRGDOWdRXnlObyE3GE5.png",
      "email": "support@luigiofficialbrand.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://www.luigiofficialbrand.com/#website",
      "url": "https://www.luigiofficialbrand.com/",
      "name": "Luigi Oil",
      "description": "Premium live resin liquid diamond disposables, hash rosin pens, and infused pre-rolls.",
      "publisher": { "@id": "https://www.luigiofficialbrand.com/#organization" },
      "inLanguage": "en-US"
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://www.luigiofficialbrand.com/#primary-nav",
      "name": ["Home", "Luigi Guide", "Products", "Blog", "Wholesale", "Contact"],
      "url": [
        "https://www.luigiofficialbrand.com/",
        "https://www.luigiofficialbrand.com/luigi-live-resin",
        "https://www.luigiofficialbrand.com/products",
        "https://www.luigiofficialbrand.com/blog",
        "https://www.luigiofficialbrand.com/wholesale",
        "https://www.luigiofficialbrand.com/contact"
      ]
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://www.luigiofficialbrand.com/#footer-nav",
      "name": ["About", "Privacy Policy", "Terms of Service", "Refund Policy", "Delivery & Shipping"],
      "url": [
        "https://www.luigiofficialbrand.com/about",
        "https://www.luigiofficialbrand.com/privacy",
        "https://www.luigiofficialbrand.com/terms",
        "https://www.luigiofficialbrand.com/refund-policy",
        "https://www.luigiofficialbrand.com/delivery"
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.luigiofficialbrand.com/products#collectionpage",
      "url": "https://www.luigiofficialbrand.com/products",
      "name": "Our Products",
      "isPartOf": { "@id": "https://www.luigiofficialbrand.com/#website" },
      "hasPart": [
        { "@type": "WebPage", "name": "Fattones", "url": "https://www.luigiofficialbrand.com/products/fattones" },
        { "@type": "WebPage", "name": "The Series 6 Collection", "url": "https://www.luigiofficialbrand.com/products/series-6" },
        { "@type": "WebPage", "name": "Rosin Pens", "url": "https://www.luigiofficialbrand.com/products/rosin-pens" }
      ]
    },
    {
      "@type": "Blog",
      "@id": "https://www.luigiofficialbrand.com/blog#blog",
      "url": "https://www.luigiofficialbrand.com/blog",
      "name": "Luigi Blog",
      "isPartOf": { "@id": "https://www.luigiofficialbrand.com/#website" },
      "blogPost": [
        { "@type": "BlogPosting", "headline": "What's the Difference Between Live Rosin and Liquid Diamonds?", "url": "https://www.luigiofficialbrand.com/blog/live-rosin-vs-liquid-diamonds", "datePublished": "2026-06-22" },
        { "@type": "BlogPosting", "headline": "Do Liquid Diamonds Get You High? Potency Explained", "url": "https://www.luigiofficialbrand.com/blog/do-liquid-diamonds-get-you-high", "datePublished": "2026-06-22" },
        { "@type": "BlogPosting", "headline": "How to Open a Luigi Preroll: Step-by-Step Guide for All Formats", "url": "https://www.luigiofficialbrand.com/blog/how-to-open-a-luigi-preroll", "datePublished": "2026-06-01" },
        { "@type": "BlogPosting", "headline": "How Long Do Luigi Disposables Last? (2026 Complete Guide)", "url": "https://www.luigiofficialbrand.com/blog/how-long-do-luigi-disposables-last", "datePublished": "2026-04-25" },
        { "@type": "BlogPosting", "headline": "Luigi Series 6 vs Series 5 - What Changed? (2026 Comparison Guide)", "url": "https://www.luigiofficialbrand.com/blog/luigi-series-6-vs-series-5", "datePublished": "2026-04-25" },
        { "@type": "BlogPosting", "headline": "Why Luigi Vapes Taste Better (2026 Flavor Breakdown)", "url": "https://www.luigiofficialbrand.com/blog/why-luigi-vapes-taste-better", "datePublished": "2026-04-23" },
        { "@type": "BlogPosting", "headline": "Luigi Vape Not Working? Fix It Fast (2026 Complete Guide)", "url": "https://www.luigiofficialbrand.com/blog/luigi-vape-not-working-fix", "datePublished": "2026-04-23" },
        { "@type": "BlogPosting", "headline": "Official Luigi Brand 2026 Guide", "url": "https://www.luigiofficialbrand.com/blog/official-luigi-brand-guide-2026", "datePublished": "2026-03-27" },
        { "@type": "BlogPosting", "headline": "Luigi Series 6 Disposables Flavors Guide 2026", "url": "https://www.luigiofficialbrand.com/blog/luigi-series-6-flavors-guide-2026", "datePublished": "2026-03-26" },
        { "@type": "BlogPosting", "headline": "Luigi Fattones Flavors 2026: Complete Guide to 4-in-1 Infused Packs", "url": "https://www.luigiofficialbrand.com/blog/luigi-fattones-flavors-guide-2026", "datePublished": "2026-03-26" },
        { "@type": "BlogPosting", "headline": "Luigi Rosin Pens Flavors Guide 2026", "url": "https://www.luigiofficialbrand.com/blog/luigi-rosin-pens-flavors-guide-2026", "datePublished": "2026-03-26" },
        { "@type": "BlogPosting", "headline": "Buy Luigi 2G Disposable Online: Where to Order Authentic Luigi Oil (2026)", "url": "https://www.luigiofficialbrand.com/blog/buy-luigi-2g-disposable-online", "datePublished": "2026-03-25" },
        { "@type": "BlogPosting", "headline": "Luigi Series 6 Disposable Review - Premium High Potency Vape (2026 Guide)", "url": "https://www.luigiofficialbrand.com/blog/luigi-series-6-disposable-review", "datePublished": "2026-03-20" },
        { "@type": "BlogPosting", "headline": "Luigi Disposable Vape Review", "url": "https://www.luigiofficialbrand.com/blog/luigi-disposable-vape-review", "datePublished": "2026-03-18" },
        { "@type": "BlogPosting", "headline": "Live Rosin Vape vs Live Resin - The Ultimate Comparison Guide (2026)", "url": "https://www.luigiofficialbrand.com/blog/live-rosin-vape-vs-live-resin", "datePublished": "2026-03-15" },
        { "@type": "BlogPosting", "headline": "What is Live Rosin Vape? A Beginner's Guide to Solventless Cannabis", "url": "https://www.luigiofficialbrand.com/blog/what-is-live-rosin-vape", "datePublished": "2026-03-12" },
        { "@type": "BlogPosting", "headline": "Infused Pre Rolls vs Regular - Why Potency Matters (FatTones Guide)", "url": "https://www.luigiofficialbrand.com/blog/infused-pre-rolls-vs-regular", "datePublished": "2026-03-10" },
        { "@type": "BlogPosting", "headline": "Best Infused Pre Rolls 2026 - Top Premium Picks (Luigi FatTones #1)", "url": "https://www.luigiofficialbrand.com/blog/best-infused-pre-rolls", "datePublished": "2026-03-08" },
        { "@type": "BlogPosting", "headline": "Are Luigi Carts Worth It? Honest Review & Value Analysis (2026)", "url": "https://www.luigiofficialbrand.com/blog/are-luigi-carts-worth-it", "datePublished": "2026-03-05" },
        { "@type": "BlogPosting", "headline": "Buy Luigi Disposable Vape - Where to Find Premium THC Vapes", "url": "https://www.luigiofficialbrand.com/blog/buy-luigi-disposable-vape", "datePublished": "2026-03-03" }
      ]
    }
  ]
}
