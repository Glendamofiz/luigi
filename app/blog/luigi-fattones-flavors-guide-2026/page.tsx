import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Fattones Flavors 2026: Complete Guide to 4-in-1 Infused Packs",
  description: "Complete guide to Luigi Fattones flavors in 2026. Explore all 10 flavors, 4-in-1 pack contents, effects, and where to buy these premium hash rosin infused packs.",
  keywords: ["Luigi Fattones flavors", "Luigi Fattones 2026", "Luigi infused pre-rolls", "hash rosin infused", "Luigi 4-in-1 packs", "Banana Gelato Fattone", "Blue Mist Fattone"],
  openGraph: {
    title: "Luigi Fattones Flavors 2026: Complete Guide",
    description: "Explore all 10 Luigi Fattones flavors with effects, pack contents, and where to buy.",
    type: "article",
    publishedTime: "2026-03-26T00:00:00.000Z",
  },
  alternates: {
    canonical: "/blog/luigi-fattones-flavors-guide-2026",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.luigiofficialbrand.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.luigiofficialbrand.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Luigi Fattones Flavors Guide 2026", "item": "https://www.luigiofficialbrand.com/blog/luigi-fattones-flavors-guide-2026" }
  ]
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Luigi Fattones Flavors 2026: Complete Guide to the Best 4-in-1 Infused Packs",
  "datePublished": "2026-03-26",
  "dateModified": "2026-03-26",
  "author": { "@type": "Organization", "name": "Luigi Oil", "url": "https://www.luigiofficialbrand.com" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://www.luigiofficialbrand.com/favicon.png" }
  },
  "description": "Complete guide to Luigi Fattones flavors including all 10 flavors, pack contents, and buying guide.",
  "mainEntityOfPage": "https://www.luigiofficialbrand.com/blog/luigi-fattones-flavors-guide-2026",
  "image": "https://www.luigiofficialbrand.com/og-image.jpg"
}

const fattonesFlavors = [
  { name: "Banana Gelato", type: "Hybrid", description: "Creamy banana sweetness blended with rich gelato and subtle vanilla notes. Balanced high combining mental euphoria with gentle body relaxation." },
  { name: "Blackberry Dream", type: "Indica", description: "Ripe blackberry with a creamy, dreamy kush finish. Deep relaxation and soothing body effects, ideal for evening wind-down." },
  { name: "Blue Mist", type: "Hybrid", description: "Creamy blueberry-vanilla sweetness with subtle floral undertones. Mellow uplift paired with light body calm." },
  { name: "Blue Razz Lime", type: "Sativa-leaning", description: "Tangy blue raspberry meets zesty lime for a bright, refreshing burst. Energetic, creative effects with tart finish." },
  { name: "Cherry Pie", type: "Hybrid", description: "Classic sweet cherry pie flavor with warm, comforting notes. Nice balance between relaxation and gentle euphoria." },
  { name: "Honeydew Melon", type: "Hybrid", description: "Fresh, juicy honeydew melon with mild creamy sweetness. Light yet satisfying balanced effects." },
  { name: "Pineapple Diesel", type: "Hybrid", description: "Tropical pineapple fused with gassy diesel undertones. Uplifting creativity with subtle body buzz." },
  { name: "Strawberry OG", type: "Sativa-leaning", description: "Sweet strawberry combined with classic OG earthiness. Uplifting, focused effects with familiar cannabis backbone." },
  { name: "Watermelon", type: "Indica", description: "Crisp, juicy watermelon sweetness paired with deep indica relaxation. Perfect for unwinding after a long day." },
  { name: "Blood Orange", type: "Indica", description: "Vibrant citrus with tangy, slightly bitter edge. Strong body relaxation with refreshing citrus twist." },
]

export default function FattonesFlavorGuidePage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg')" }}
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
              Luigi Fattones Flavors 2026: Complete Guide to the Best 4-in-1 Infused Packs
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 26, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 -mt-4">
          <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg"
              alt="Luigi Fattones - Premium 4-in-1 Hash Rosin Infused Packs"
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
                The <strong>Luigi Fattones</strong> collection remains one of the most popular and innovative product lines from the official Luigi brand in 2026. These premium 4-in-1 infused packs combine convenience, potency, and bold flavor in a single purchase.
              </p>

              {/* Pack Contents */}
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-xl p-6 my-8">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-[#D4AF37]" />
                  <h4 className="font-bold text-gray-900 m-0">Each Luigi Fattones Pack Includes:</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 m-0">
                  <li><strong>1 × 1g glass-tip blunt</strong> - slow-burning and ultra-smooth</li>
                  <li><strong>2 × 1g full-size hash rosin infused preroll joints</strong></li>
                  <li><strong>4 × 0.5g hash rosin infused mini joints</strong></li>
                  <li><strong>6 × hash-infused gummies</strong> - perfectly flavor-matched</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                All items are infused with <strong>solventless hash rosin</strong> for clean, terpene-rich effects without chemical solvents. THC levels typically range from 35% to 42%+, delivering strong yet balanced experiences depending on the strain.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Core Luigi Fattones Flavors 2026
              </h2>

              <div className="space-y-6 my-8">
                {fattonesFlavors.map((flavor, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-[#D4AF37] transition-colors">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{flavor.name} Fattone</h3>
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
                  <h4 className="font-bold text-purple-900 mb-3">Indica / Deep Relaxation</h4>
                  <ul className="text-purple-800 space-y-1 text-sm">
                    <li>Blackberry Dream</li>
                    <li>Watermelon</li>
                    <li>Blood Orange</li>
                  </ul>
                  <p className="text-xs text-purple-700 mt-3">Best for nighttime, stress relief, and sleep support.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Hybrid / Balanced</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>Banana Gelato</li>
                    <li>Blue Mist</li>
                    <li>Cherry Pie</li>
                    <li>Honeydew Melon</li>
                    <li>Pineapple Diesel</li>
                  </ul>
                  <p className="text-xs text-blue-700 mt-3">Versatile options for any time of day.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3">Sativa / Uplifting</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>Blue Razz Lime</li>
                    <li>Strawberry OG</li>
                  </ul>
                  <p className="text-xs text-green-700 mt-3">Great for daytime creativity and focus.</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Luigi Fattones Stand Out in 2026
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                The official Luigi brand designed Fattones to solve a common problem: users often buy separate prerolls, blunts, and edibles. With one pack, you get variety, matching flavors, and excellent value.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-4">Key Advantages:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Solventless hash rosin infusion</strong> - Cleaner taste and fuller entourage effect</li>
                  <li><strong>Consistent flavor</strong> across all items - No mismatched experiences</li>
                  <li><strong>Convenience</strong> for sharing or personal use</li>
                  <li><strong>Strong value</strong> compared to buying items separately</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                How to Buy Authentic Luigi Fattones in 2026
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                To ensure you get genuine Luigi Fattones flavors:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use the official <strong>Weedmaps brand page</strong> (search &quot;Luigi&quot;) to find 100+ licensed California dispensaries</li>
                <li>Check <strong>luigioil.com</strong> for authorized retailers</li>
                <li>Always <strong>scan the QR code</strong> on packaging for verification</li>
                <li>Look for proper child-resistant packaging and batch COAs</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pricing usually ranges from <strong>$35-$50 per pack</strong> depending on location. Many shops carry Fattones Masterboxes (10, 25, 50, or 100 packs) for wholesale buyers.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Pairing Luigi Fattones with Other Luigi Products
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Luigi Fattones pair excellently with the brand&apos;s other lines. Use a <Link href="/products/series-6" className="text-[#D4AF37] hover:underline">Luigi 2G disposable</Link> (live resin + liquid diamond) during the day and switch to Fattones for evening sessions. Combine with <Link href="/products/rosin-pens" className="text-[#D4AF37] hover:underline">Luigi Rosin Pens</Link> for a solventless-focused routine.
              </p>

              <div className="bg-black text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4">Shop Luigi Fattones Collection</h3>
                <p className="text-gray-300 mb-6">Experience the complete 4-in-1 infused pack experience.</p>
                <Link href="/products/fattones" className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors">
                  View Fattones Products
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/luigi-series-6-flavors-guide-2026" className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors">
                  <span className="text-sm text-[#D4AF37] font-semibold">Flavor Guide</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Luigi Series 6 Disposables Flavors Guide 2026
                  </h4>
                </Link>
                <Link href="/blog/luigi-rosin-pens-flavors-guide-2026" className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors">
                  <span className="text-sm text-[#D4AF37] font-semibold">Flavor Guide</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Luigi Rosin Pens Flavors Guide 2026
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  )
}
