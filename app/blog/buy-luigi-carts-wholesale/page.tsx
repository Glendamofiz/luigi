import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { RelatedGuides } from "@/components/related-guides"
import { Footer } from "@/components/footer"
import { ProductCTA } from "@/components/product-cta"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Buy Luigi Carts Wholesale | Dispensary Owner's Guide",
  description: "Dispensary owners guide to buying Luigi carts wholesale — MOQs, pricing tiers, authentic sourcing, and how to become an authorised Luigi Oil retailer in 2026.",
  keywords: ["buy luigi carts wholesale", "Luigi Oil wholesale", "Luigi Carts distributor", "dispensary wholesale cannabis", "Luigi 2G Disposable wholesale"],
  openGraph: {
    title: "Buy Luigi Carts Wholesale: A Dispensary Owner's Guide",
    description: "Everything a dispensary owner needs to know before you buy Luigi carts wholesale — licensing requirements, order minimums, product lineup, pricing tiers, and how to order direct.",
    type: "article",
    publishedTime: "2026-07-24T00:00:00.000Z",
    url: "https://www.luigiofficialbrand.com/blog/buy-luigi-carts-wholesale",
    images: [
      {
    url: "https://www.luigiofficialbrand.com/og-images/blog-buy-luigi-carts-wholesale.jpg",
        width: 1200,
        height: 630,
        alt: "Buy Luigi Carts Wholesale - Dispensary Owner's Guide"
      }
    ]
  },
  twitter: { card: "summary_large_image", images: ["https://www.luigiofficialbrand.com/og-images/blog-buy-luigi-carts-wholesale.jpg"] },
  alternates: {
    canonical: "/blog/buy-luigi-carts-wholesale"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the minimum order for Luigi wholesale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wholesale MOQs vary by product category and partnership tier. Contact Luigi Oil wholesale at wholesale@luigioil.com for specific MOQ details and custom pricing based on your order volume."
      }
    },
    {
      "@type": "Question",
      "name": "How do I become an authorized Luigi distributor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apply through Luigi Oil's wholesale portal. You'll need active dispensary license, tax documentation, and resale permits. Luigi will review your application and contact you with partnership options."
      }
    },
    {
      "@type": "Question",
      "name": "What products are available for wholesale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Series 6 disposables, rosin pens, Fattones pre-rolls, Luigi carts, and liquid diamond products are available wholesale. Exact inventory and pricing depend on your tier and location."
      }
    },
    {
      "@type": "Question",
      "name": "What wholesale pricing tiers does Luigi offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi offers tiered wholesale pricing based on order volume. Higher volume orders receive better per-unit pricing. Contact wholesale team for exact pricing tiers and discounts."
      }
    },
    {
      "@type": "Question",
      "name": "How often can I reorder wholesale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reorder frequency and terms vary by partnership agreement. Most authorized retailers can reorder weekly or based on your inventory management needs. Confirm specifics with your Luigi wholesale account manager."
      }
    }
  ]
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Buy Luigi Carts Wholesale: A Dispensary Owner's Guide",
  "datePublished": "2026-07-24",
  "author": { "@type": "Organization", "name": "Luigi Oil Product Team" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://luigiofficialbrand.com/logo.png" }
  },
  "description": "Everything a dispensary owner needs to know before you buy Luigi carts wholesale — licensing, minimums, pricing tiers, and the full product lineup."
}

export default function BuyLuigiWholesale() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO-2400x2400-v8uG2p3VRqDNQ6fCpa2Qa8ZhhcpqVE.jpg')" }}
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
              Buy Luigi Carts Wholesale: A Dispensary Owner's Guide
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Everything you need to know before buying Luigi carts wholesale — licensing requirements, order minimums, product lineup, and pricing tiers.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg font-semibold text-gray-800">
              If you&apos;re trying to buy Luigi carts wholesale for your dispensary, the process comes down to three things: a valid license, the right order channel, and knowing which products in the lineup move fastest. Luigi Oil has become one of the most requested live resin liquid diamond brands on dispensary shelves, and retailers who stock it early tend to build repeat customers around it. This guide breaks down exactly how to get set up as an authorized buyer, what to expect from the ordering process, and how to choose the right mix of products for your shelf.
            </p>

            <h2>Why Dispensaries Are Adding Luigi Oil to Their Shelves</h2>
            <p>Luigi Oil&apos;s entire lineup is built around <Link href="/blog/live-rosin-vs-liquid-diamonds">live resin liquid diamond extraction</Link>, a process that preserves terpene profile and flavor better than many standard distillate products. For dispensary buyers, that translates into a product line with strong repeat-purchase behavior — customers who try a Luigi Fattone or 2G Disposable tend to come back looking for it by name, which makes it easier to plan reorders and shelf space around the brand.</p>

            <h2>How to Buy Luigi Carts Wholesale: Step-by-Step</h2>

            <h3>1. Confirm Your License</h3>
            <p>Wholesale cannabis orders require a valid state retail or distribution license in a jurisdiction where Luigi Oil operates. Have your license number and business documentation ready before reaching out — this is the first thing any legitimate wholesale channel will ask for.</p>

            <h3>2. Submit a Wholesale Inquiry</h3>
            <p>Orders go through the official <Link href="/wholesale">Luigi Oil Wholesale</Link> page. Submitting your business details there connects you with a licensed distributor rather than a third-party reseller, which matters both for pricing and for making sure what lands on your shelf is genuine.</p>

            <h3>3. Review the Product Lineup</h3>
            <p>Before placing an order, walk through the full <Link href="/products">Products page</Link> to see the current catalog: 2G Disposables, Fattones pre-rolls, the Series 6 collection, and Rosin Pens. Many dispensaries start with a mixed first order across two or three product lines to see what resonates with their customer base before scaling up.</p>

            <h3>4. Confirm Order Minimums and Pricing Tiers</h3>
            <p>Minimum order quantities and pricing scale with volume, and both are confirmed directly with your wholesale representative once your account is verified. Larger, recurring orders typically unlock better per-unit pricing, so it&apos;s worth discussing your projected monthly volume upfront rather than ordering small and renegotiating later.</p>

            <h3>5. Place Your First Order and Set a Reorder Cadence</h3>
            <p>Once your first order ships, the easiest way to avoid stockouts is to set a reorder cadence based on how quickly each product line sells. High-turnover items like 2G Disposables often need more frequent restocking than slower-moving specialty items.</p>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg"
              alt="Luigi 2G Disposable wholesale cannabis products for dispensary buyers"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg my-8"
            />

            <h2>Comparing Luigi Oil's Wholesale Product Lines</h2>
            <p>Not every product line fits every dispensary the same way. Here&apos;s how the current lineup compares for wholesale buyers.</p>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Product Line</th>
                  <th className="border border-gray-300 p-3 text-left">Best For</th>
                  <th className="border border-gray-300 p-3 text-left">Typical Shelf Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3"><Link href="/products/series-6">2G Disposables</Link></td>
                  <td className="border border-gray-300 p-3">High-volume movers for price-sensitive customers</td>
                  <td className="border border-gray-300 p-3">Consistent demand, strong margins</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><Link href="/products/fattones">Fattones (Pre-Rolls)</Link></td>
                  <td className="border border-gray-300 p-3">Shops with strong flower/pre-roll customer base</td>
                  <td className="border border-gray-300 p-3">High repeat-purchase rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><Link href="/products/series-6">Series 6 Collection</Link></td>
                  <td className="border border-gray-300 p-3">Retailers positioning a premium tier</td>
                  <td className="border border-gray-300 p-3">Slower turnover, higher margin</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><Link href="/products/rosin-pens">Rosin Pens</Link></td>
                  <td className="border border-gray-300 p-3">Shops serving concentrate-focused customers</td>
                  <td className="border border-gray-300 p-3">Steady niche demand</td>
                </tr>
              </tbody>
            </table>

            <h2>Pros and Cons of Buying Luigi Carts Wholesale</h2>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM-2400x2400-pe085AZelET8AuGO0fti7o4giOhjqR.jpg"
              alt="Luigi Fattones pre-rolls wholesale distributor authorized product"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg my-8"
            />

            <h3>Pros</h3>
            <ul>
              <li><strong>Brand recognition:</strong> Customers actively search for Luigi Oil by name, reducing the marketing lift needed to move product.</li>
              <li><strong>Multiple product lines:</strong> Disposables, pre-rolls, and rosin pens let you diversify shelf offerings under one authorized brand.</li>
              <li><strong>Direct distributor relationship:</strong> Ordering through the official channel means consistent supply and authentic product, every time.</li>
              <li><strong>Scalable pricing:</strong> Volume-based tiers reward dispensaries that grow their order size over time.</li>
            </ul>

            <h3>Cons</h3>
            <ul>
              <li><strong>Licensing requirements:</strong> Only licensed retailers and distributors can order wholesale, which rules out smaller or unlicensed operations.</li>
              <li><strong>Order minimums:</strong> Smaller shops may need to plan budget carefully around minimum order quantities.</li>
              <li><strong>Demand fluctuation:</strong> Premium lines like Series 6 can move slower in price-sensitive markets, requiring careful inventory planning.</li>
            </ul>

            <h2>Buy Luigi Carts Wholesale vs. Ordering From a Secondary Distributor</h2>
            <p>Some dispensaries are tempted to source Luigi Oil products through secondary distributors or unfamiliar resellers, usually chasing a lower upfront price. This carries real risk: secondary sourcing bypasses the batch verification and quality control built into the official wholesale channel, and it puts your dispensary&apos;s reputation on the line if a customer ends up with a product that isn&apos;t genuine. Ordering direct through <Link href="/wholesale">Luigi Oil Wholesale</Link> keeps your supply chain verifiable and your shelf stocked with authentic product every time.</p>

            <h2>Frequently Asked Questions</h2>

            <h3>How do I buy Luigi carts wholesale?</h3>
            <p>Licensed dispensaries and retailers can order Luigi carts wholesale directly through the official Luigi Oil Wholesale page by submitting a license, business details, and desired order quantities to be paired with an authorized distributor.</p>

            <h3>What license do I need to buy Luigi Oil wholesale?</h3>
            <p>You need a valid state cannabis retail or distribution license in a jurisdiction where Luigi Oil is authorized to operate. Documentation is verified before any wholesale order is confirmed.</p>

            <h3>Is there a minimum order quantity for Luigi Oil wholesale?</h3>
            <p>Minimum order quantities vary by product line and are confirmed directly with a Luigi Oil wholesale representative once your license and account are verified.</p>

            <h3>What Luigi products are available for wholesale?</h3>
            <p>The current wholesale lineup includes 2G Disposables, Fattones pre-rolls, the Series 6 collection, and Rosin Pens, all built on Luigi Oil&apos;s live resin liquid diamond process.</p>

            <h3>How long does a Luigi Oil wholesale order take to arrive?</h3>
            <p>Timelines depend on order size, destination, and current inventory. Exact shipping windows are confirmed with your dedicated wholesale contact after the order is placed.</p>

            <h2>Final Thoughts</h2>
            <p>For dispensary owners ready to buy Luigi carts wholesale, the path is straightforward: confirm your license, order through the official channel, and start with a product mix that fits your customer base. Browse the full <Link href="/products">Products page</Link> to plan your first order, or head straight to <Link href="/wholesale">Luigi Oil Wholesale</Link> to get your account set up. Questions before you order? Reach the team directly via the <Link href="/contact">Contact page</Link>.</p>
            </div>
          </div>
      </article>

      {/* CTA - Wholesale Contact */}
      <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="Luigi Carts"
          productLink="/products"
          description="Ready to experience our premium Luigi carts? Browse our complete collection of wholesale-quality products available for authorized retailers."
        />
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to become an authorized retailer?</h3>
          <p className="text-gray-600 mb-6">Apply for Luigi wholesale partnership to stock our premium products and build your cannabis business.</p>
          <Link href="/wholesale" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
            Apply for Wholesale
          </Link>
        </div>
      </section>

      <RelatedGuides />
    </main>

    </>
  )
}
