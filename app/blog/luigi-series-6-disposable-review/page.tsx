import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedGuides } from "@/components/related-guides"
import { ProductCTA } from "@/components/product-cta"
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Series 6 Disposable Review | High Potency Vape 2026",
  description: "Honest Luigi Series 6 review 2026. Live resin liquid diamonds, potency, flavors, and battery life tested. Is Luigi Series 6 worth it? Full verdict inside.",
  keywords: "Luigi Series 6 disposable, Luigi vape Series 6 review, Luigi disposable vape strength, best THC disposable Luigi, Series 6 vs Series 5 Luigi",
  openGraph: {
    title: "Luigi Series 6 Disposable Review – Premium High Potency Vape (2026)",
    description: "Discover Luigi Series 6 disposable vapes with high potency, smooth hits, and premium flavor.",
    type: "article",
    publishedTime: "2026-03-20T00:00:00.000Z",
    url: "https://www.luigiofficialbrand.com/blog/luigi-series-6-disposable-review",
    images: [
      {
        url: "https://www.luigiofficialbrand.com/og-images/blog-series-6-disposables.png",
        width: 1200,
        height: 630,
        alt: "Luigi Oil - Premium Cannabis Products",
      },
    ],
  },
  alternates: {
    canonical: "/blog/luigi-series-6-disposable-review",
  },
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Luigi Series 6 Disposable",
    "brand": { "@type": "Brand", "name": "Luigi Oil" },
    "description": "Premium 2-gram disposable vape with live resin liquid diamond extract, advanced ceramic heating technology, and 12+ strain options including Orange Lava Kush, Black Diesel Milk, and Rage Berry Blitz.",
    "image": "https://www.luigiofficialbrand.com/og-image.jpg",
    "url": "https://www.luigiofficialbrand.com/products/series-6",
    "sku": "LUIGI-SERIES6-001",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "40",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Luigi Oil" },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": "0",
            "maxValue": "1",
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": "1",
            "maxValue": "3",
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": "14",
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": { "@type": "Organization", "name": "Luigi Oil" },
  "datePublished": "2026-03-20",
  "reviewBody": "The Luigi Series 6 disposable represents the ultimate evolution in premium THC vaping with live resin liquid diamond extract, advanced ceramic heating, and 12+ strain options."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Luigi Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 is a premium 2-gram disposable vape featuring live resin liquid diamond extract, advanced ceramic heating technology, and 12+ strain options. Each disposable delivers smooth, flavorful hits with potency up to 35%+ THC."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Luigi Series 6 special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 stands out with full-spectrum live resin liquid diamond extract, ceramic heating technology for smooth hits, and a carefully curated strain selection. Each batch is lab-tested for potency, purity, and safety."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a 2G Luigi disposable last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2G Luigi Series 6 disposable typically lasts 1-2 weeks with moderate daily use. Exact duration depends on individual consumption habits and draw intensity."
      }
    },
    {
      "@type": "Question",
      "name": "What strains are available in Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Series 6 offers premium strains including Orange Lava Kush, Black Diesel Milk, Rage Berry Blitz, Graveberry Kush, Candy Corn Chaos, and more. Each strain has unique terpene profiles and effects."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Luigi Series 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Purchase authentic Luigi Series 6 at licensed California dispensaries. Verify the retailer is an authorized Luigi Oil distributor to ensure you receive genuine, lab-tested products."
      }
    }
  ]
}

export default function LuigiSeries6ReviewPage() {
  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg')" }}
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
              Product Review
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Luigi Series 6 Disposable Review – Premium High Potency Vape (2026 Guide)
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 20, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
          </div>
        </section>

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <p className="text-xl text-gray-600 leading-relaxed">
            The <strong>Luigi Series 6 disposable</strong> represents the ultimate evolution in premium THC vaping. 
            In this comprehensive review, we break down everything you need to know about why this luxury vape 
            has become the gold standard for discerning cannabis enthusiasts.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Makes Luigi Series 6 the Best THC Disposable?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When it comes to premium cannabis vapes, the Luigi Series 6 disposable stands in a league of its own. 
              This isn&apos;t just another disposable vape – it&apos;s a carefully engineered masterpiece designed for those 
              who demand the absolute best. The high potency formula delivers consistent, powerful effects while 
              maintaining the smooth, flavorful experience Luigi is known for.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Series 6 Key Features:</h3>
              <ul className="space-y-3">
                {[
                  "Live resin liquid diamond extract for maximum potency",
                  "Advanced ceramic heating technology",
                  "Premium glass tank construction",
                  "Industry-leading battery life",
                  "12+ strain options for every preference",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Luigi Series 6 vs Series 5: What Changed?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The evolution from Series 5 to Series 6 represents Luigi&apos;s commitment to continuous improvement. 
              While the Series 5 was already a premium product, the Series 6 takes everything to the next level 
              with significant upgrades across the board.
            </p>

            {/* Comparison Image */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-frY5YnUfQtnLwd3DwfnyurI1uGVuTa.jpg"
                  alt="premium THC vape Luigi Series 6"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH-fPHrHqXuykGra6fRPkZmAHbEV7O8mm.jpg"
                  alt="Luigi disposable vape strength comparison"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Comparison Table - Mobile Responsive */}
            <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
              <div className="inline-block min-w-[500px] w-full px-4 md:px-0">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-2 md:p-4 text-left font-semibold whitespace-nowrap">Feature</th>
                    <th className="p-2 md:p-4 text-left font-semibold whitespace-nowrap">Series 5</th>
                    <th className="p-2 md:p-4 text-left font-semibold whitespace-nowrap">Series 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm whitespace-nowrap">Extract Type</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm whitespace-nowrap">Live Resin</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm whitespace-nowrap">Live Resin Liquid Diamond</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm whitespace-nowrap">Potency</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm whitespace-nowrap">High</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm whitespace-nowrap">Ultra High</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm whitespace-nowrap">Heating</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm whitespace-nowrap">Standard Ceramic</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm whitespace-nowrap">Advanced Ceramic Pro</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm whitespace-nowrap">Battery</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm whitespace-nowrap">280mAh</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm whitespace-nowrap">350mAh</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm whitespace-nowrap">Strains</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm whitespace-nowrap">8</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm whitespace-nowrap">12+</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Performance & User Experience
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Luigi Series 6 disposable delivers a premium experience from the first draw to the last. 
              The advanced ceramic heating technology ensures even vaporization of the live resin liquid diamond 
              extract, producing thick, flavorful clouds without any harshness. Users consistently report smooth, 
              satisfying hits that showcase the full terpene profile of each strain.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              What sets the Luigi vape Series 6 apart is its consistency. Unlike cheaper alternatives that 
              degrade in performance as the battery drains, the Series 6 maintains its premium quality throughout 
              its entire lifespan. This is the mark of true luxury cannabis engineering.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Choose Luigi for Your Premium Vape Needs?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you&apos;re looking for the best THC disposable, Luigi Series 6 is the clear choice. The combination 
              of high potency, premium ingredients, and superior hardware makes it the ultimate option for 
              discerning cannabis consumers. Whether you&apos;re a seasoned enthusiast or new to premium vapes, 
              the Series 6 delivers an unmatched experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Explore the complete range of{" "}
              <Link href="/luigi-live-resin" className="text-[#D4AF37] hover:underline font-semibold">
                premium Luigi cannabis products
              </Link>{" "}
              to discover why Luigi has become the gold standard in luxury cannabis. From our signature 
              Series 6 disposables to our{" "}
              <Link href="/products/rosin-pens" className="text-[#D4AF37] hover:underline font-semibold">
                solventless Rosin Pens
              </Link>, every product reflects our commitment to excellence.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Final Verdict: Is Luigi Series 6 Worth It?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Absolutely. The Luigi Series 6 disposable isn&apos;t just worth it – it&apos;s the benchmark against which 
              all other premium disposables should be measured. The combination of live resin liquid diamond 
              extract, advanced hardware, and meticulous attention to detail creates a vaping experience that 
              justifies every penny.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For those wondering{" "}
              <Link href="/blog/are-luigi-carts-worth-it" className="text-[#D4AF37] hover:underline font-semibold">
                if Luigi carts are worth the investment
              </Link>, the answer is a resounding yes. Premium quality demands a premium price, and Luigi delivers 
              on that promise every time.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Luigi Series 6?
            </h3>
            <p className="text-gray-400 mb-6">
              Discover the ultimate in premium THC vaping with Luigi Series 6 disposables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/series-6"
                className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
              >
                Shop Series 6
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
                href="/blog/buy-luigi-2g-disposable-online"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Buying Guide</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Buy Luigi 2G Disposable Online – Where to Order Authentic Luigi Oil
                </h4>
              </Link>
              <Link
                href="/blog/are-luigi-carts-worth-it"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Product Review</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Are Luigi Carts Worth It? Honest Review & Value Analysis
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Try Luigi Series 6?</h3>
            <p className="text-gray-600 mb-6">Explore our full collection of live resin liquid diamond disposables with 10+ premium strains.</p>
            <Link href="/products/series-6" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
              Shop Series 6 Disposables
            </Link>
          </div>
        </div>
      </section>

      <Footer />
                  <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="Luigi Series 6"
          productLink="/products/series-6"
          description="Discover why Series 6 represents the latest evolution in Luigi disposables."
        />
      </section>

      <RelatedGuides />
    </main>
    </>
  )
}
