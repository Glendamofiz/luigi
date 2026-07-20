import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedGuides } from "@/components/related-guides"
import { Calendar, Clock, ArrowLeft, CheckCircle, Leaf, Sparkles, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "What Is Live Rosin Vape? Beginner's Solventless Guide",
  description: "What is live rosin vape? Beginner's guide to solventless cannabis — how it's made, purity vs live resin, and why Luigi rosin pens lead the market in 2026.",
  keywords: "what is live rosin vape, Luigi rosin pens guide, solventless cannabis vape, clean THC vape, rosin benefits",
  openGraph: {
    title: "What is Live Rosin Vape? Beginner's Guide",
    description: "Beginner-friendly guide to solventless cannabis vapes and rosin benefits.",
    type: "article",
    publishedTime: "2026-03-12T00:00:00.000Z",
  },
  alternates: {
    canonical: "/blog/what-is-live-rosin-vape",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Live Rosin Vape? A Beginner's Guide to Solventless Cannabis",
  "datePublished": "2026-03-12",
  "author": { "@type": "Organization", "name": "Luigi Oil" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://luigioil.com/logo.png" }
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is live rosin vape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Live rosin vape is a solventless cannabis extract made purely with heat and pressure from fresh frozen flower. It's the cleanest vape option available—no solvents, no chemicals, just pure cannabinoids and terpenes."
      }
    },
    {
      "@type": "Question",
      "name": "Is live rosin vape safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, live rosin vape is the safest cannabis vape option. Because it's solventless, there's no risk of solvent residue. Luigi rosin pens are lab-tested for purity and potency, ensuring clean, safe cannabis."
      }
    },
    {
      "@type": "Question",
      "name": "How is live rosin vape made?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Live rosin is extracted using only heat and pressure applied to fresh frozen cannabis flower. No solvents like propane, butane, or ethanol are used. The result is a pure, full-spectrum cannabis concentrate with rich terpenes."
      }
    },
    {
      "@type": "Question",
      "name": "What's the potency of Luigi rosin pens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi rosin pens deliver 35%+ THC potency. Each pen is lab-tested to verify exact THC content, terpene profile, and safety. The solventless extraction preserves all cannabinoids and terpenes for powerful, flavorful effects."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy live rosin vape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buy Luigi rosin pens at licensed California dispensaries. Verify the dispensary is an authorized Luigi Oil retailer to ensure genuine, lab-tested solventless rosin products."
      }
    }
  ]
}

export default function WhatIsLiveRosinVapePage() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD.png-dhBq1NLArSubAaVls0j2TDDALt9Scp.jpeg')" }}
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
            <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
              Education
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What is Live Rosin Vape? A Beginner&apos;s Guide to Solventless Cannabis
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 12, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>
          </div>
        </section>

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <p className="text-xl text-gray-600 leading-relaxed">
            If you&apos;re new to premium cannabis products, you might be wondering <strong>what is live rosin vape</strong> 
            and why everyone&apos;s talking about it. This beginner-friendly guide explains everything you need to know 
            about solventless cannabis vapes and the incredible rosin benefits that make them worth the investment.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              What is Live Rosin Vape? The Simple Explanation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>live rosin vape</strong> is a cannabis vaporizer filled with live rosin – a premium concentrate 
              made using only heat and pressure. Unlike most cannabis extracts that use chemical solvents, live rosin 
              is 100% solventless, making it the cleanest THC vape option available.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The &quot;live&quot; part means the cannabis was flash-frozen immediately after harvest, preserving all the 
              natural terpenes and cannabinoids. This results in a more flavorful, aromatic, and effective product 
              compared to extracts made from dried flower.
            </p>

            {/* Visual Explanation */}
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Fresh Frozen</h3>
                <p className="text-sm text-gray-600">
                  Cannabis is frozen immediately after harvest to lock in terpenes
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Heat & Pressure</h3>
                <p className="text-sm text-gray-600">
                  Only heat and pressure are used – no solvents ever
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Pure Result</h3>
                <p className="text-sm text-gray-600">
                  Clean, potent concentrate with natural flavor
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why is Solventless Cannabis Vape Better?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The benefits of a solventless cannabis vape extend beyond just being &quot;chemical-free.&quot; When you 
              choose a clean THC vape like Luigi Rosin Pens, you&apos;re getting:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "No Residual Chemicals",
                  desc: "Traditional extracts may contain trace amounts of solvents. Live rosin has zero because none are ever used.",
                },
                {
                  title: "True Plant Flavor",
                  desc: "The gentle extraction process preserves the natural taste of the cannabis strain.",
                },
                {
                  title: "Full Entourage Effect",
                  desc: "All cannabinoids, terpenes, and flavonoids remain intact for the complete cannabis experience.",
                },
                {
                  title: "Smoother Experience",
                  desc: "Many users find solventless vapes easier on the throat and lungs.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-[#D4AF37]/5 p-5 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Luigi Rosin Pens Guide: Premium Solventless Vaping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For those ready to experience the best in solventless vaping, Luigi Rosin Pens offer the ultimate 
              introduction. Each pen is filled with 100% pure live rosin extracted from premium, single-source 
              flower – no additives, no cutting agents, just pure cannabis goodness.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-IDqQOWuyALZ6h7xUUNjKgk32NqZFvM.png"
                  alt="clean THC vape - Luigi OG Reserve"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-3">OG Reserve - Rosin Pen</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GARLIC-GLUE-k4jcVnv6nkPnp6gpHBFHxoqE9wb9SZ.png"
                  alt="solventless cannabis vape - Garlic Glue"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-3">Garlic Glue - Rosin Pen</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Rosin Benefits: Why Connoisseurs Choose Solventless
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The rosin benefits have made this extraction method the gold standard among cannabis enthusiasts. 
              When you understand what goes into making live rosin – the careful cultivation, precise timing of 
              harvest, immediate freezing, and gentle extraction – you appreciate why it commands a premium price.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Think of it like the difference between fast food and a chef&apos;s tasting menu. Both will satisfy 
              hunger, but one offers an experience that engages all your senses. That&apos;s what a premium live 
              rosin vape delivers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Use a Live Rosin Vape
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Using a live rosin vape is incredibly simple, making it perfect for beginners:
            </p>
            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <li className="text-gray-700 pl-2">Remove the device from packaging</li>
              <li className="text-gray-700 pl-2">Most devices are draw-activated – simply inhale gently</li>
              <li className="text-gray-700 pl-2">Start with small puffs to gauge potency</li>
              <li className="text-gray-700 pl-2">Wait 5-10 minutes between sessions to feel the full effects</li>
              <li className="text-gray-700 pl-2">Store in a cool, dark place to preserve quality</li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Ready to Try Live Rosin?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Now that you understand what live rosin vape is and the benefits it offers, you&apos;re ready to 
              experience it for yourself. Explore the complete range of{" "}
              <Link href="/luigi-live-resin" className="text-[#D4AF37] hover:underline font-semibold">
                Luigi Series 6 and Rosin Pens
              </Link>{" "}to find your perfect introduction to premium cannabis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For a deeper comparison between extraction methods, check out our guide on{" "}
              <Link href="/blog/live-rosin-vape-vs-live-resin" className="text-[#D4AF37] hover:underline font-semibold">
                live rosin vape vs live resin
              </Link>.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Solventless Journey
            </h3>
            <p className="text-gray-400 mb-6">
              Experience the cleanest, purest cannabis vape with Luigi Rosin Pens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/rosin-pens"
                className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
              >
                Shop Rosin Pens
              </Link>
              <Link
                href="/luigi-live-resin"
                className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
              >
                Explore All Products
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/live-rosin-vape-vs-live-resin"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Education</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Live Rosin Vape vs Live Resin – The Ultimate Comparison Guide
                </h4>
              </Link>
              <Link
                href="/blog/luigi-disposable-vape-review"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Product Review</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Luigi Disposable Vape Review – Premium THC Vape Dominates
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
            <RelatedGuides />
    </main>
    </>
  )
}
