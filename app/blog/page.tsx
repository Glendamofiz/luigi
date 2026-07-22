import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Blog | Cannabis Guides, Reviews & Education",
  description: "Explore Luigi Oil's premium cannabis blog — in-depth guides on live resin, liquid diamonds, rosin pens, Fattones pre-rolls, and how to spot authentic Luigi carts.",
  keywords: "Luigi blog, cannabis guides, live resin education, THC vape reviews, premium cannabis content, buy Luigi disposable, Luigi Oil guide",
  openGraph: {
    title: "Luigi Blog | Cannabis Guides, Reviews & Education",
    description: "Explore Luigi Oil's premium cannabis blog — in-depth guides on live resin, liquid diamonds, rosin pens, Fattones pre-rolls, and how to spot authentic Luigi carts.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Luigi Oil Blog",
  "description": "Expert cannabis guides, product reviews, and educational content about live resin, rosin pens, and premium THC vapes.",
  "url": "https://luigioil.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": {
      "@type": "ImageObject",
      "url": "https://luigioil.com/logo.png"
    }
  }
}

const blogPosts = [
  {
    slug: "luigi-pre-rolls",
    title: "Luigi Pre Rolls 2026 - Premium Infused Cannabis Pre-Rolls Guide",
    excerpt: "Discover Luigi pre rolls: premium hash rosin infused pre-rolls from Fattones to disposables. Complete flavor guide, effects, and where to buy authentic Luigi products.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_STRAWBERRY-OG-2400x2400-XnsFZ2tFQxAAOyVtJXFC0NOp73GG2k.jpg",
    category: "Product Guide",
    readTime: "15 min read",
    date: "July 22, 2026",
    featured: true,
  },
  {
    slug: "luigi-carts-los-angeles",
    title: "Where to Buy Luigi Oil in Los Angeles (Dispensary Guide)",
    excerpt: "Find Luigi carts in Los Angeles. See confirmed LA dispensaries carrying Luigi Oil, how to check live stock near you, and verify authenticity.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Retail Guide",
    readTime: "10 min read",
    date: "July 24, 2026",
    featured: true,
  },
  {
    slug: "buy-luigi-carts-wholesale",
    title: "Buy Luigi Carts Wholesale: A Dispensary Owner's Guide",
    excerpt: "Everything a dispensary owner needs to know before you buy Luigi carts wholesale — licensing, order minimums, product lineup, and pricing tiers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Wholesale",
    readTime: "12 min read",
    date: "July 24, 2026",
    featured: true,
  },
  {
    slug: "luigi-rosin-pen-review",
    title: "Luigi Rosin Pen Review: Is Solventless Worth It?",
    excerpt: "An honest Luigi Rosin Pen review — how the solventless hash rosin dual pack compares to live resin, what it costs, and whether it's worth the switch.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
    category: "Product Review",
    readTime: "11 min read",
    date: "July 24, 2026",
    featured: true,
  },
  {
    slug: "best-dispensaries-los-angeles-luigi",
    title: "Best Dispensaries in Los Angeles for Luigi Oil (Verified Guide)",
    excerpt: "Find the best dispensaries in Los Angeles carrying Luigi Oil. See confirmed LA retailers plus a practical checklist for evaluating any dispensary.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Retail Guide",
    readTime: "10 min read",
    date: "July 24, 2026",
    featured: true,
  },
  {
    slug: "how-to-verify-authentic-luigi-carts",
    title: "How to Verify Authentic Luigi Carts (Step-by-Step Guide)",
    excerpt: "Learn how to verify authentic Luigi carts with our 5-step guide. Discover the pros & cons of authentication methods, plus safety tips for spotting counterfeits.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Safety Guide",
    readTime: "12 min read",
    date: "June 24, 2026",
    featured: true,
  },
  {
    slug: "live-rosin-vs-liquid-diamonds",
    title: "What's the Difference Between Live Rosin and Liquid Diamonds?",
    excerpt: "Compare extraction methods, terpene content, and potency in this Luigi Oil product guide.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Education",
    readTime: "9 min read",
    date: "June 22, 2026",
    featured: true,
  },
  {
    slug: "do-liquid-diamonds-get-you-high",
    title: "Do Liquid Diamonds Get You High? Potency Explained",
    excerpt: "Here's what the lab data says about THCA crystallization, terpene content, and potency in Luigi's live resin products.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Education",
    readTime: "9 min read",
    date: "June 22, 2026",
    featured: true,
  },
  {
    slug: "how-to-open-a-luigi-preroll",
    title: "How to Open a Luigi Preroll: Step-by-Step Guide for All Formats",
    excerpt: "Master the art of opening Luigi prerolls with our comprehensive step-by-step guide. Learn proper techniques for different formats and storage tips.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAGEBERRY-BLITZ-2400x2400-utns2NTRMInZtHI0QSMzpumRexCLYL.jpg",
    category: "How-To Guide",
    readTime: "5 min read",
    date: "June 1, 2026",
    featured: true,
  },
  {
    slug: "how-long-do-luigi-disposables-last",
    title: "How Long Do Luigi Disposables Last? (2026 Complete Guide)",
    excerpt: "Learn how long Luigi disposables last, what affects vape lifespan, puff duration, battery performance, and tips to make your Luigi Series 6 last longer.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Lifespan Guide",
    readTime: "12 min read",
    date: "April 25, 2026",
    featured: true,
  },
  {
    slug: "luigi-series-6-vs-series-5",
    title: "Luigi Series 6 vs Series 5 – What Changed? (2026 Comparison Guide)",
    excerpt: "Compare Luigi Series 6 vs Series 5 disposables. Discover differences in flavor, airflow, smoothness, potency, and overall vape performance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Product Comparison",
    readTime: "14 min read",
    date: "April 25, 2026",
    featured: true,
  },
  {
    slug: "why-luigi-vapes-taste-better",
    title: "Why Luigi Vapes Taste Better (2026 Flavor Breakdown)",
    excerpt: "Discover why Luigi vapes taste better than many disposables. Learn about terpene quality, airflow, rosin extraction, and flavor consistency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Flavor Science",
    readTime: "14 min read",
    date: "April 23, 2026",
    featured: true,
  },
  {
    slug: "luigi-vape-not-working-fix",
    title: "Luigi Vape Not Working? Fix It Fast (2026 Complete Guide)",
    excerpt: "Your Luigi disposable isn't working? This comprehensive guide covers the 5 most common issues and proven fixes. Learn how to get your vape working again in minutes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Troubleshooting",
    readTime: "11 min read",
    date: "April 23, 2026",
    featured: true,
  },
  {
    slug: "official-luigi-brand-guide-2026",
    title: "Official Luigi Brand 2026 Guide: Buy Luigi Disposables & Rosin Pens Online Safely",
    excerpt: "Complete guide to the official Luigi brand in 2026. Learn how to buy Luigi disposables, Luigi 2G live resin, and Luigi Rosin Pens online safely from licensed dispensaries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Brand Guide",
    readTime: "15 min read",
    date: "March 27, 2026",
    featured: true,
  },
  {
    slug: "luigi-series-6-flavors-guide-2026",
    title: "Luigi Series 6 Disposables Flavors Guide 2026: Complete Breakdown",
    excerpt: "Complete breakdown of all Luigi Series 6 disposable flavors for 2026. Discover effects, tasting notes, and where to buy authentic Luigi 2G live resin vapes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-O1n2onJWb8ClZP5IQ3EfBiKzAz9jZM.png",
    category: "Flavor Guide",
    readTime: "12 min read",
    date: "March 26, 2026",
    featured: true,
  },
  {
    slug: "luigi-fattones-flavors-guide-2026",
    title: "Luigi Fattones Flavors 2026: Complete Guide to 4-in-1 Infused Packs",
    excerpt: "Complete guide to Luigi Fattones flavors in 2026. Explore all 10 flavors, 4-in-1 pack contents, effects, and where to buy these premium hash rosin infused packs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BERRY-AMARILLO-2400x2400-5YBNL82Gwc1LxajUHCQIZkv5AZpGiJ.png",
    category: "Flavor Guide",
    readTime: "14 min read",
    date: "March 26, 2026",
    featured: true,
  },
  {
    slug: "luigi-rosin-pens-flavors-guide-2026",
    title: "Luigi Rosin Pens Flavors Guide 2026: Complete Solventless Hash Rosin Guide",
    excerpt: "Complete guide to Luigi Rosin Pens flavors in 2026. Discover all solventless hash rosin strains, effects, and why these are the cleanest vape option from Luigi Oil.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PEANUT-BUTTER-BREATH-2400x2400-8sZ0KtLYivKkFdFFbCsRt0WM4TB74b.png",
    category: "Flavor Guide",
    readTime: "13 min read",
    date: "March 26, 2026",
    featured: true,
  },
  {
    slug: "buy-luigi-2g-disposable-online",
    title: "Buy Luigi 2G Disposable Online: Where to Order Authentic Luigi Oil (2026)",
    excerpt: "Learn how to safely buy Luigi 2G disposable online in 2026. Find authentic Luigi Oil Series 6 flavors, verify real vs fake products, and discover trusted dispensaries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Buying Guide",
    readTime: "12 min read",
    date: "March 25, 2026",
    featured: true,
  },
  {
    slug: "luigi-series-6-disposable-review",
    title: "Luigi Series 6 Disposable Review – Premium High Potency Vape (2026 Guide)",
    excerpt: "Discover the ultimate Luigi Series 6 disposable vape with high potency, smooth hits, and premium flavor. See why this luxury vape stands out from the competition.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DONNY-BURGER-2400x2400-L6fvkhNf5OPLZeIih9R3rrvd9VAQd3.png",
    category: "Product Review",
    readTime: "8 min read",
    date: "March 20, 2026",
    featured: true,
  },
  {
    slug: "luigi-disposable-vape-review",
    title: "Luigi Disposable Vape Review – Why This Premium THC Vape Dominates",
    excerpt: "An honest, trust-building review of Luigi disposable vapes covering quality, performance, and user experience. Find out if Luigi lives up to the hype.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TANGIE-DIESEL-2400x2400-7LiS54zqUARYxEqL7eMzcIdtuq4zph.png",
    category: "Product Review",
    readTime: "7 min read",
    date: "March 18, 2026",
    featured: true,
  },
  {
    slug: "live-rosin-vape-vs-live-resin",
    title: "Live Rosin Vape vs Live Resin – The Ultimate Comparison Guide (2026)",
    excerpt: "Understand the key differences between live rosin and live resin vapes. Learn why Luigi Rosin Pens are the premium choice for discerning cannabis users.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
    category: "Education",
    readTime: "10 min read",
    date: "March 15, 2026",
    featured: true,
  },
  {
    slug: "what-is-live-rosin-vape",
    title: "What is Live Rosin Vape? A Beginner's Guide to Solventless Cannabis",
    excerpt: "New to live rosin? This beginner-friendly guide explains everything about solventless cannabis vapes and why they're considered the cleanest option.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png",
    category: "Education",
    readTime: "6 min read",
    date: "March 12, 2026",
    featured: true,
  },
  {
    slug: "infused-pre-rolls-vs-regular",
    title: "Infused Pre Rolls vs Regular – Why Potency Matters (FatTones Guide)",
    excerpt: "Discover the potency difference between infused and regular pre-rolls. Learn why Luigi FatTones deliver an unmatched premium experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-2400x2400-CYlk42Z0MvDyt3fs4jA1PyifYZBrap.jpg",
    category: "Education",
    readTime: "7 min read",
    date: "March 10, 2026",
    featured: true,
  },
  {
    slug: "best-infused-pre-rolls",
    title: "Best Infused Pre Rolls 2026 – Top Premium Picks (Luigi FatTones #1)",
    excerpt: "Looking for the best infused pre-rolls? Our expert guide ranks the top options with Luigi FatTones taking the crown for premium quality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH-2400x2400-k7noPbm2aeeWLJ4bToWvPP10TcIIFl.jpg",
    category: "Guides",
    readTime: "9 min read",
    date: "March 8, 2026",
    featured: true,
  },
  {
    slug: "are-luigi-carts-worth-it",
    title: "Are Luigi Carts Worth It? Honest Review & Value Analysis (2026)",
    excerpt: "Wondering if Luigi carts are worth the premium price? This honest review breaks down quality, value, and why discerning users choose Luigi.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Product Review",
    readTime: "8 min read",
    date: "March 5, 2026",
    featured: true,
  },
  {
    slug: "buy-luigi-disposable-vape",
    title: "Buy Luigi Disposable Vape – Where to Find Premium THC Vapes",
    excerpt: "Ready to buy Luigi disposable vapes? This guide shows you where to find authentic Luigi products and what to look for when purchasing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "March 3, 2026",
    featured: true,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#D4AF37] text-sm font-semibold tracking-wider uppercase">
              Luigi Blog
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Premium Cannabis Guides & Reviews
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Expert insights on live resin, rosin pens, and the best THC vapes. 
              Elevate your cannabis knowledge with Luigi.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                src={post.image}
                    alt={post.title}
                width={800}
                height={600}
                
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            All Articles
          </h2>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#D4AF37]/30 transition-colors p-4 md:p-6"
              >
                <div className="md:w-48 lg:w-64 flex-shrink-0">
                  <div className="aspect-[16/10] md:aspect-square relative rounded-lg overflow-hidden">
                    <Image
                src={post.image}
                      alt={post.title}
                width={800}
                height={600}
                
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-[#D4AF37] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-black">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience Luigi?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Explore our complete range of premium cannabis products including Series 6 disposables, 
            Rosin Pens, and FatTones infused pre-rolls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/luigi-live-resin"
              className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
            >
              Explore Luigi Products
            </Link>
            <Link
              href="/wholesale"
              className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
            >
              Wholesale Inquiries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}
