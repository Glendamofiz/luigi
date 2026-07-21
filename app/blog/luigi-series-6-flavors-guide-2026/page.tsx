import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { RelatedGuides } from "@/components/related-guides"
import { Footer } from "@/components/footer"
import { ProductCTA } from "@/components/product-cta"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Series 6 Flavors Guide 2026 | Complete Breakdown",
  description: "All Luigi Series 6 disposable flavors ranked and reviewed. Complete 2026 breakdown of live resin liquid diamond strains, effects, and terpene profiles. Find your flavor.",
  keywords: ["Luigi Series 6 flavors", "Luigi 2G disposable", "Luigi live resin flavors", "Black Diesel Milk", "Candy Corn Chaos", "Luigi disposable flavors 2026"],
  openGraph: {
    title: "Luigi Series 6 Disposables Flavors Guide 2026",
    description: "Complete breakdown of all Luigi Series 6 flavors with effects, tasting notes, and buying guide.",
    type: "article",
    publishedTime: "2026-03-26T00:00:00.000Z",
    url: "https://www.luigiofficialbrand.com/blog/luigi-series-6-flavors-guide-2026",
    images: [
      {
    url: "https://www.luigiofficialbrand.com/og-images/blog-series-6-disposables.png",
        width: 1200,
        height: 630,
        alt: "Luigi Oil - Premium Cannabis Products"
      }
    ]
  },
  alternates: {
    canonical: "/blog/luigi-series-6-flavors-guide-2026"
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Luigi Series 6 Disposables Flavors Guide 2026: Complete Breakdown of All Flavors",
  "datePublished": "2026-03-26",
  "author": { "@type": "Organization", "name": "Luigi Oil" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://luigioil.com/logo.png" }
  },
  "description": "Complete guide to Luigi Series 6 disposable flavors including effects, tasting notes, and where to buy."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many Series 6 flavors does Luigi offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 offers 10+ distinct flavors including Black Diesel Milk, Candy Corn Chaos, Graveberry Kush, Green Gumbo, Hella Hallow Jam, Orange Lava Kush, Plum Wreck, Rageberry Blitz, Razor Thin Pine, and Sour Cran Smash. Each delivers unique terpene profiles and effects."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best Luigi Series 6 flavor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best flavor depends on your preferences. For uplifting effects, try Orange Lava Kush or Rageberry Blitz. For relaxation, choose Graveberry Kush or Plum Wreck. For balanced hybrid effects, try Black Diesel Milk or Candy Corn Chaos. All are premium live resin liquid diamonds."
      }
    },
    {
      "@type": "Question",
      "name": "What type of extract is Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 features live resin liquid diamond extract. This combines full-spectrum terpenes with crystallized THCA, delivering premium potency (up to 35%+ THC) and rich flavor profiles."
      }
    },
    {
      "@type": "Question",
      "name": "How much THC is in Luigi Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 disposables contain 35%+ THC potency. The exact percentage varies by strain and batch. Each disposable is lab-tested to verify THC content and ensure safety and quality."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Luigi Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Purchase authentic Luigi Series 6 at licensed California dispensaries. Verify the dispensary is an authorized Luigi Oil retailer to ensure you get genuine, lab-tested live resin liquid diamond disposables."
      }
    }
  ]
}

const series6Flavors = [
  { name: "Black Diesel Milk", type: "Hybrid", description: "Bold fusion of gassy diesel fuel with creamy milk chocolate sweetness. Energizing cerebral effects paired with relaxing body buzz." },
  { name: "Candy Corn Chaos", type: "Hybrid", description: "Nostalgic candy corn sweetness with vanilla and caramel notes. Balanced hybrid effects - uplifting mood with gentle physical relaxation." },
  { name: "Graveberry Kush", type: "Indica-leaning", description: "Deep, juicy berry notes meet earthy kush undertones. Strong body calm and stress relief while maintaining mental clarity." },
  { name: "Green Gumbo", type: "Hybrid", description: "Unique savory-herbal blend with subtle sweetness. Balanced and functional effects suitable for all-day use." },
  { name: "Hella Hallow Jam", type: "Sativa-leaning", description: "Fruity jam-like sweetness with subtle spicy undertones. Uplifting, creative effects with playful taste." },
  { name: "Orange Lava Kush", type: "Hybrid", description: "Bright citrus explosion fused with warm kush earthiness. Refreshing with grounding body effects." },
  { name: "Plum Wreck", type: "Indica", description: "Juicy plum sweetness with heavy indica relaxation. Deep body sedation and calming effects." },
  { name: "Rageberry Blitz", type: "Sativa-leaning", description: "Intense mixed-berry blast with energetic, fast-acting effects. Boosts mood and creativity." },
  { name: "Razor Thin Pine", type: "Hybrid", description: "Crisp pine and citrus gas with clean, sharp finish. Focused mental clarity with light body relaxation." },
  { name: "Sour Cran Smash", type: "Sativa-leaning", description: "Tart cranberry with sour punch and refreshing finish. Energizing effects with bold, tangy flavor." }
]

export default function Series6FlavorsGuidePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C5A028] mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
              Flavor Guide
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Luigi Series 6 Disposables Flavors Guide 2026: Complete Breakdown of All Flavors, Effects & Where to Buy
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 26, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 -mt-4">
          <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg"
              alt="Luigi Series 6 Disposable - Live Resin Liquid Diamond Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The <strong>Luigi Series 6 Disposables</strong> represent the flagship collection from the official Luigi brand in 2026. Packed with 2 grams of premium live resin + liquid diamond oil, these all-in-one vapes deliver bold flavors, smooth hits, and potent effects in a convenient, rechargeable format.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-4">Each Luigi Series 6 Device Features:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>2g capacity (approximately 2000mg of extract)</li>
                  <li>Live resin blended with THCa liquid diamonds (85-95%+ THC)</li>
                  <li>Draw-activated, USB-C rechargeable hardware</li>
                  <li>Sleek, discreet design perfect for on-the-go use</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Luigi Series 6 Disposables Stand Out in 2026
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike basic distillate vapes, Series 6 uses a sophisticated live resin + liquid diamond blend that preserves natural terpenes while boosting potency and smoothness. Key advantages include longer sessions thanks to the 2g size, rich true-to-strain flavor, and consistent performance from first puff to last.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Luigi Series 6 Flavors List 2026
              </h2>

              <div className="space-y-6 my-8">
                {series6Flavors.map((flavor, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-[#D4AF37] transition-colors">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{flavor.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        flavor.type.includes('Indica') ? 'bg-purple-100 text-purple-800' :
                        flavor.type.includes('Sativa') ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {flavor.type}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600">{flavor.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Flavor Breakdown by Effect Type
              </h2>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3">Indica / Relaxation</h4>
                  <ul className="text-purple-800 space-y-1 text-sm">
                    <li>Graveberry Kush</li>
                    <li>Plum Wreck</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Hybrid / Balanced</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>Black Diesel Milk</li>
                    <li>Candy Corn Chaos</li>
                    <li>Green Gumbo</li>
                    <li>Orange Lava Kush</li>
                    <li>Razor Thin Pine</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3">Sativa / Uplifting</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>Hella Hallow Jam</li>
                    <li>Rageberry Blitz</li>
                    <li>Sour Cran Smash</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                How the Live Resin + Liquid Diamond Formula Enhances Flavors
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Luigi 2G Series 6 disposables shine because of their extraction method. Live resin captures the fresh plant&apos;s terpenes, while liquid diamonds boost potency and smoothness. This combination results in more authentic strain-true taste, smoother vapor with less throat hit, and stronger, longer-lasting effects.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                How to Buy Authentic Luigi Series 6 Disposables
              </h2>

              <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-xl p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-4">Safe Buying Tips:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Visit the official Luigi website (luigioil.com) and use the store locator</li>
                  <li>Search &quot;Luigi&quot; on Weedmaps to find 100+ licensed California dispensaries</li>
                  <li>Always scan the QR code on packaging for verification</li>
                  <li>Check batch-specific COAs for potency and purity</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pricing typically ranges from $30-$50 per 2g disposable depending on location and promotions. Masterboxes (variety packs) offer better value for trying multiple flavors.
              </p>

              <div className="bg-black text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4">Shop Luigi Series 6 Collection</h3>
                <p className="text-gray-300 mb-6">Experience the full range of premium live resin flavors.</p>
                <Link href="/products/series-6" className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors">
                  View Series 6 Products
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/official-luigi-brand-guide-2026" className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors">
                  <span className="text-sm text-[#D4AF37] font-semibold">Brand Guide</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Official Luigi Brand 2026 Guide
                  </h4>
                </Link>
                <Link href="/blog/luigi-fattones-flavors-guide-2026" className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors">
                  <span className="text-sm text-[#D4AF37] font-semibold">Flavor Guide</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Luigi Fattones Flavors Guide 2026
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </article>

      {/* CTA - Related Product */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Shop All Series 6 Flavors</h3>
            <p className="text-gray-600 mb-6">Browse all 10+ live resin liquid diamond strains and find your favorite flavor profile.</p>
            <Link href="/products/series-6" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
              Explore Series 6
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}
