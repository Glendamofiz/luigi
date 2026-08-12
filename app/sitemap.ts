import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.luigiofficialbrand.com'
  const lastModified = new Date()
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/series-6`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/fattones`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/rosin-pens`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wholesale`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/luigi-live-resin`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/delivery`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const blogPosts = [
    'luigi-carts-los-angeles',
    'buy-luigi-carts-wholesale',
    'luigi-rosin-pen-review',
    'best-dispensaries-los-angeles-luigi',
    'how-to-verify-authentic-luigi-carts',
    'live-rosin-vs-liquid-diamonds',
    'do-liquid-diamonds-get-you-high',
    'how-to-open-a-luigi-preroll',
    'official-luigi-brand-guide-2026',
    'luigi-series-6-flavors-guide-2026',
    'luigi-fattones-flavors-guide-2026',
    'luigi-rosin-pens-flavors-guide-2026',
    'buy-luigi-2g-disposable-online',
    'luigi-series-6-disposable-review',
    'luigi-disposable-vape-review',
    'are-luigi-carts-worth-it',
    'live-rosin-vape-vs-live-resin',
    'what-is-live-rosin-vape',
    'best-infused-pre-rolls',
    'infused-pre-rolls-vs-regular',
    'buy-luigi-disposable-vape',
    'luigi-series-6-vs-series-5',
    'luigi-vape-not-working-fix',
    'why-luigi-vapes-taste-better',
    'how-long-do-luigi-disposables-last',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts]
}
