import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { RelatedGuides } from "@/components/related-guides"
import { Footer } from "@/components/footer"
import { ProductCTA } from "@/components/product-cta"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Where to Buy in Los Angeles | Dispensary Guide",
  description: "Where to buy Luigi Oil in Los Angeles. Complete guide to verified LA dispensaries stocking authentic Luigi carts, 2G disposables, and Fattones pre-rolls near you.",
  keywords: ["luigi carts los angeles", "Luigi Oil Los Angeles", "buy Luigi carts LA", "Luigi dispensary near me", "Luigi Oil dispensary"],
  openGraph: {
    title: "Where to Buy Luigi Oil in Los Angeles (Dispensary Guide)",
    description: "Confirmed LA dispensaries carrying Luigi carts, plus how to check live stock near you and verify authenticity before you buy.",
    type: "article",
    publishedTime: "2026-07-24T00:00:00.000Z",
  
    url: "https://www.luigiofficialbrand.com/blog/luigi-carts-los-angeles",
    images: [
      {
    url: "https://www.luigiofficialbrand.com/og-images/blog-buy-luigi-carts-wholesale.png",
        width: 1200,
        height: 630,
        alt: "Luigi Oil - Premium Cannabis Products"
      }
    ]
  },
  alternates: {
    canonical: "/blog/luigi-carts-los-angeles"
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Buy Luigi Oil in Los Angeles (Dispensary Guide)",
  "datePublished": "2026-07-24",
  "author": { "@type": "Organization", "name": "Luigi Oil Product Team" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://luigiofficialbrand.com/logo.png" }
  },
  "description": "Find Luigi carts in Los Angeles with confirmed dispensaries, stock checking tips, and authenticity verification."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I buy Luigi carts in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi carts are available at authorized dispensaries throughout Los Angeles. Verified retailers stock Series 6 disposables, rosin pens, Fattones, and carts. Check the Luigi Oil website for an updated dispensary locator."
      }
    },
    {
      "@type": "Question",
      "name": "How do I verify an authentic Luigi dispensary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact Luigi Oil directly to confirm authorized dispensaries. Check for official Luigi signage and QR code authentication on packaging. Verify license status with California Department of Cannabis Control."
      }
    },
    {
      "@type": "Question",
      "name": "What Luigi products are available in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most LA dispensaries stock Luigi Series 6 disposables with 10+ strain options, rosin pens, Fattones pre-rolls, and Luigi carts. Availability varies by location—call ahead or check online menus."
      }
    },
    {
      "@type": "Question",
      "name": "What's the typical price for Luigi disposables in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2G Luigi Series 6 disposable typically costs $35-45 at LA dispensaries depending on retailer and location. Prices may vary slightly between different areas of Los Angeles."
      }
    },
    {
      "@type": "Question",
      "name": "Can Luigi products be delivered in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some licensed LA dispensaries offer delivery for Luigi products. Check dispensary websites or call to confirm delivery availability in your zip code."
      }
    }
  ]
}

export default function LuigiCartsLA() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C5A028] mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Where to Buy Luigi Oil in Los Angeles
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Find confirmed LA dispensaries carrying Luigi Oil, check live stock, and verify authenticity before you buy.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg font-semibold text-gray-800">
              If you&apos;re looking for Luigi carts in Los Angeles, the fastest path is a licensed dispensary that currently stocks the brand — and a handful of LA shops have consistently carried it. Because dispensary inventory shifts week to week, this guide covers the LA retailers known to carry Luigi Oil, how to check live stock before you make the trip, and how to confirm what&apos;s on the shelf is genuine.
            </p>

            <h2>Confirmed Los Angeles Dispensaries Carrying Luigi Oil</h2>
            <p>These LA-area retailers have carried Luigi Oil products, based on current retailer listings:</p>
            <ul>
              <li><strong>Roots LA Dispensary</strong> — Los Angeles, CA</li>
              <li><strong>Level28</strong> — Los Angeles, CA</li>
              <li><strong>Green Label Rx Echo Park</strong> — Los Angeles, CA</li>
            </ul>
            <p>Dispensary shelves rotate frequently, so treat this as a starting point rather than a guarantee of same-day stock. Calling ahead or checking a live locator before you go is the most reliable way to confirm a specific product is available right now.</p>

            <h2>How to Find Live Luigi Carts Stock Near You in LA</h2>
            <p>Because a static list can go out of date fast in a market this active, the most accurate way to find Luigi carts in Los Angeles today is to check a live retailer locator rather than relying on any fixed list — including this one. Search &quot;Luigi&quot; on a licensed cannabis marketplace locator to pull current in-stock listings, pricing, and pickup or delivery options for dispensaries near your ZIP code.</p>
            <p>For dispensaries looking to add Luigi Oil to their own shelves, ordering happens through the official <Link href="/wholesale">Luigi Oil Wholesale</Link> channel — which is also how new LA-area retailers get added to the map over time.</p>

            <h2>What to Expect When You Buy Luigi Oil in LA</h2>
            <p>Los Angeles dispensaries carrying Luigi Oil typically stock a rotating selection from the current lineup rather than the full catalog at once. Here&apos;s what that generally looks like shelf to shelf.</p>

            <h3>Product Availability by Type</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Product Line</th>
                  <th className="border border-gray-300 p-3 text-left">Typical LA Shelf Presence</th>
                  <th className="border border-gray-300 p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">2G Disposables</td>
                  <td className="border border-gray-300 p-3">Common, fast turnover</td>
                  <td className="border border-gray-300 p-3">Everyday convenience</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Fattones (Pre-Rolls)</td>
                  <td className="border border-gray-300 p-3">Common in flower-forward shops</td>
                  <td className="border border-gray-300 p-3">Traditional smoking preference</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Series 6 Collection</td>
                  <td className="border border-gray-300 p-3">Found at select premium retailers</td>
                  <td className="border border-gray-300 p-3">Higher-potency, top-shelf experience</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Rosin Pens</td>
                  <td className="border border-gray-300 p-3">Occasional, niche stock</td>
                  <td className="border border-gray-300 p-3">Concentrate enthusiasts</td>
                </tr>
              </tbody>
            </table>

            <p>To see the complete current catalog before you head out, browse the full <Link href="/products">Products page</Link> — that way you know exactly what to ask for if a specific item isn&apos;t visible on the shelf.</p>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg"
              alt="Luigi Oil Los Angeles dispensary buy local cannabis carts"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg my-8"
            />

            <h2>In-Store Pickup vs. Delivery: Which Fits Your LA Search?</h2>

            <h3>In-Store Pickup</h3>
            <ul>
              <li><strong>Pros:</strong> You can see the packaging and verify authenticity in person before purchase; same-day availability is easier to confirm on the spot.</li>
              <li><strong>Cons:</strong> Requires travel time, and specific flavors or product lines may be out of stock when you arrive.</li>
            </ul>

            <h3>Delivery</h3>
            <ul>
              <li><strong>Pros:</strong> Convenient if the dispensary is farther from you; many LA retailers carrying Luigi Oil also offer delivery.</li>
              <li><strong>Cons:</strong> Verification happens after the product arrives rather than before purchase, so checking the QR code immediately on delivery matters more.</li>
            </ul>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM-2400x2400-pe085AZelET8AuGO0fti7o4giOhjqR.jpg"
              alt="Verify authentic Luigi carts Los Angeles QR code batch number"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg my-8"
            />

            <h2>How to Verify Your Luigi Cart Is Authentic</h2>
            <p>Buying from a licensed LA dispensary is the first safeguard against counterfeit product, but it&apos;s worth confirming authenticity on your end too. Scan the QR code or scratch-off verification tag on the packaging — it should resolve to Luigi Oil&apos;s official verification result with a matching batch number. For the full breakdown of what to check, see the complete <Link href="/blog/how-to-verify-authentic-luigi-carts">Luigi Authenticity Guide</Link>.</p>

            <h2>Pros and Cons of Buying Luigi Oil Locally in LA</h2>

            <h3>Pros</h3>
            <ul>
              <li><strong>Multiple confirmed local retailers:</strong> LA has more Luigi-carrying dispensaries than most markets, thanks to the brand&apos;s LA roots.</li>
              <li><strong>Easy authenticity checks:</strong> Buying in person lets you inspect packaging and scan verification codes before you pay.</li>
              <li><strong>Same-day access:</strong> Pickup and local delivery mean you&apos;re not waiting on shipping.</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li><strong>Inventory isn&apos;t guaranteed:</strong> Specific flavors or product lines can sell out between visits.</li>
              <li><strong>Requires checking ahead:</strong> Skipping the live-stock check can mean a wasted trip.</li>
              <li><strong>No single definitive list:</strong> Retailer rosters shift as new dispensaries pick up the brand and others rotate it out.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <h3>Where can I buy Luigi carts in Los Angeles?</h3>
            <p>Luigi carts are available at licensed LA dispensaries including Roots LA Dispensary, Level28, and Green Label Rx Echo Park, along with other licensed retailers listed on Luigi Oil&apos;s official retailer locator. Because dispensary inventory changes frequently, checking a live locator before visiting is the most reliable way to confirm current stock.</p>

            <h3>Is there a full list of every LA dispensary carrying Luigi Oil?</h3>
            <p>Because dispensary inventory changes week to week, there isn&apos;t a single static list that stays accurate over time. The most reliable source is a live retailer locator, which reflects current stock across licensed California dispensaries.</p>

            <h3>Can I order Luigi Oil for delivery in Los Angeles?</h3>
            <p>Many licensed LA dispensaries carrying Luigi Oil also offer delivery. Availability depends on the individual dispensary, so checking their current delivery options directly or through a live locator is recommended.</p>

            <h3>How do I know a Luigi cart from an LA dispensary is authentic?</h3>
            <p>Purchasing from a licensed California dispensary is the first safeguard. From there, scan the QR code or scratch-off verification tag on the packaging to confirm it links to Luigi Oil&apos;s official verification result.</p>
            </div>
          </div>
      </article>

      {/* CTA - Shop Now */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Can't find Luigi locally?</h3>
          <p className="text-gray-600 mb-6">Browse Luigi's complete product lineup including Series 6 disposables, rosin pens, and Fattones directly.</p>
          <Link href="/products" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
            Shop All Products
          </Link>
        </div>
      </section>

            <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="Luigi Carts"
          productLink="/products"
          description="Find premium Luigi carts at the best dispensaries in Los Angeles."
        />
      </section>

      <RelatedGuides />
    </main>

    <Footer />
    </>
  )
}
