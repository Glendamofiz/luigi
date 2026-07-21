import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { RelatedGuides } from "@/components/related-guides"
import { ProductCTA } from "@/components/product-cta"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, CheckCircle, X, DollarSign, Sparkles, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Are Luigi Carts Worth It? Honest 2026 Review & Value",
  description: "Are Luigi carts worth it? Honest 2026 review — potency, flavor, quality vs cost, and how Luigi compares to other premium THC cart brands. Read before you buy.",
  keywords: "are Luigi carts worth it, Luigi vape review, Luigi disposable quality, premium cannabis brand Luigi",
  openGraph: {
    title: "Are Luigi Carts Worth It? Honest Review (2026)",
    description: "Honest review breaking down quality, value, and why discerning users choose Luigi.",
    type: "article",
    publishedTime: "2026-03-05T00:00:00.000Z",
    url: "https://www.luigiofficialbrand.com/blog/are-luigi-carts-worth-it",
    images: [
      {
    url: "https://www.luigiofficialbrand.com/og-images/blog-buy-luigi-carts-wholesale.png",
        width: 1200,
        height: 630,
        alt: "Are Luigi Carts Worth It"
      }
    ]
  },
  alternates: {
    canonical: "/blog/are-luigi-carts-worth-it"
  }
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Luigi Carts",
    "description": "Premium 2G live resin liquid diamond disposable vape carts featuring advanced ceramic heating, 10+ strain options, and lab-tested THC oil. Each cart delivers smooth, flavorful hits with up to 35% THC potency.",
    "brand": { "@type": "Brand", "name": "Luigi Oil" },
    "image": "https://www.luigiofficialbrand.com/og-image.jpg",
    "url": "https://www.luigiofficialbrand.com/products/series-6",
    "sku": "LUIGI-CARTS-001",
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
  "datePublished": "2026-03-05",
  "reviewBody": "Luigi carts deliver premium quality that justifies the price with live resin liquid diamond extract and superior hardware."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Luigi carts worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Luigi carts are worth it for premium cannabis consumers. They deliver live resin liquid diamond extract with 35%+ THC potency, superior hardware, and consistent quality across all strains. The price reflects premium extraction methods and rigorous lab testing."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Luigi carts better than other brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi carts stand out with full-spectrum terpene profiles, advanced ceramic heating, live resin liquid diamond extract, and meticulous quality control. Each batch is lab-tested for potency and purity, ensuring consistent effects and flavor."
      }
    },
    {
      "@type": "Question",
      "name": "How long do Luigi carts last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2G Luigi cart typically lasts 1-2 weeks with moderate daily use. This depends on individual consumption habits and draw intensity. Many users appreciate the long-lasting value relative to the premium quality."
      }
    },
    {
      "@type": "Question",
      "name": "What strains does Luigi offer in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi offers 10+ premium strains including Graveberry Kush, Orange Lava Kush, Black Diesel Milk, Rage Berry Blitz, and more. Each strain is available in their Series 6 live resin liquid diamond collection with distinct terpene profiles."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy authentic Luigi carts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buy authentic Luigi carts only at licensed California dispensaries. Visit LuigiOfficialBrand.com to verify authorized retailers near you and avoid counterfeit products."
      }
    }
  ]
}

export default function AreLuigiCartsWorthItPage() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH-hKjxaitdO97OYTulXo3Qftf6pZ9EAW.jpg')" }}
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
              Are Luigi Carts Worth It? Honest Review & Value Analysis (2026)
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 5, 2026
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
            <strong>Are Luigi carts worth it?</strong> It&apos;s a fair question when premium products command premium 
            prices. This honest Luigi vape review breaks down the quality, value proposition, and real-world 
            performance to help you decide if this premium cannabis brand Luigi is right for you.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* TL;DR Box */}
            <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-6 my-8">
              <h3 className="font-bold text-gray-900 text-lg mb-2">TL;DR – Are Luigi Carts Worth It?</h3>
              <p className="text-gray-700 mb-0">
                <strong>Yes.</strong> Luigi carts deliver premium quality that justifies the price. The live resin 
                liquid diamond extract, superior hardware, and consistent performance make them worth every penny 
                for users who prioritize quality over quantity.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Honest Truth About Luigi Disposable Quality
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let&apos;s address the elephant in the room: Luigi products cost more than budget options. But the Luigi 
              disposable quality difference is immediately apparent. From the premium materials to the exceptional 
              oil quality, every aspect reflects the higher price point.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In our extensive Luigi vape review process, we compared Luigi to dozens of competitors across various 
              price ranges. The verdict? You truly get what you pay for. Budget vapes often fail before the oil 
              runs out, produce harsh hits, or contain questionable ingredients. Luigi eliminates all these concerns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-8">
              <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg"
                  alt="premium cannabis brand Luigi"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-xs md:text-sm text-gray-500 mt-3">Series 6 - Premium Build Quality</p>
              </div>
              <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg"
                  alt="premium cannabis brand Luigi"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-center text-xs md:text-sm text-gray-500 mt-3">Series 6 - Live Resin Liquid Diamond</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Value Analysis: What You Get With Luigi
            </h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Premium Extract</h3>
                <p className="text-sm text-gray-600">
                  Live resin liquid diamond – the highest quality concentrate available
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Superior Hardware</h3>
                <p className="text-sm text-gray-600">
                  Advanced ceramic coils and reliable battery that lasts
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">True Value</h3>
                <p className="text-sm text-gray-600">
                  Higher potency means fewer hits needed for desired effects
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Luigi vs Budget Vapes: Real Comparison
            </h2>
            
            <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
              <div className="inline-block min-w-full px-4 md:px-0">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-2 md:p-4 text-left font-semibold text-xs md:text-sm">Factor</th>
                    <th className="p-2 md:p-4 text-left font-semibold text-xs md:text-sm">Budget</th>
                    <th className="p-2 md:p-4 text-left font-semibold text-xs md:text-sm">Luigi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Extract</td>
                    <td className="p-2 md:p-4 text-gray-600 text-xs md:text-sm">Distillate</td>
                    <td className="p-2 md:p-4 text-[#D4AF37] font-semibold text-xs md:text-sm">Live Resin Diamond</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Hardware</td>
                    <td className="p-2 md:p-4"><X className="w-4 h-4 md:w-5 md:h-5 text-red-500" /></td>
                    <td className="p-2 md:p-4"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Consistency</td>
                    <td className="p-2 md:p-4"><X className="w-4 h-4 md:w-5 md:h-5 text-red-500" /></td>
                    <td className="p-2 md:p-4"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" /></td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Battery Life</td>
                    <td className="p-2 md:p-4"><X className="w-4 h-4 md:w-5 md:h-5 text-red-500" /></td>
                    <td className="p-2 md:p-4"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 md:p-4 font-medium text-xs md:text-sm">Flavor</td>
                    <td className="p-2 md:p-4"><X className="w-4 h-4 md:w-5 md:h-5 text-red-500" /></td>
                    <td className="p-2 md:p-4"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" /></td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Who Should Buy Luigi?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The premium cannabis brand Luigi isn&apos;t for everyone – and that&apos;s okay. Luigi is perfect for:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Users who prioritize quality over quantity",
                "Those frustrated with inconsistent budget products",
                "Flavor enthusiasts seeking true terpene expression",
                "Anyone looking for a reliable, premium experience",
                "Experienced users with refined preferences"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              The Bottom Line: Are Luigi Carts Worth the Investment?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              After thorough testing and analysis, the answer is clear: <strong>yes, Luigi carts are worth it</strong>. 
              The premium price reflects genuine premium quality – better extract, better hardware, better experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you&apos;ve been disappointed by budget vapes that die mid-use, taste harsh, or deliver inconsistent 
              effects, Luigi solves all those problems. The investment in quality pays dividends in satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ready to experience the difference? Explore the complete range of{" "}
              <Link href="/luigi-live-resin" className="text-[#D4AF37] hover:underline font-semibold">
                premium Luigi cannabis products
              </Link>{" "}or check out our{" "}
              <Link href="/blog/luigi-series-6-disposable-review" className="text-[#D4AF37] hover:underline font-semibold">
                Luigi Series 6 disposable review
              </Link>{" "}for a deep dive into our flagship product.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-black rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-gray-400 mb-6">
              See for yourself why Luigi is worth every penny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
              >
                Shop Luigi Products
              </Link>
              <Link
                href="/blog/buy-luigi-2g-disposable-online"
                className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
              >
                Where to Buy
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/luigi-series-6-disposable-review"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Product Review</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Luigi Series 6 Disposable Review – Premium High Potency Vape
                </h4>
              </Link>
              <Link
                href="/blog/buy-luigi-2g-disposable-online"
                className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-sm text-[#D4AF37] font-semibold">Buying Guide</span>
                <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                  Buy Luigi 2G Disposable Online – Where to Order Authentic Luigi Oil
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* CTA - Shop Now */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Experience Luigi Series 6 Today</h3>
            <p className="text-gray-600 mb-6">Discover why Luigi Series 6 delivers premium quality that justifies its value. Shop live resin liquid diamonds at licensed dispensaries.</p>
            <Link href="/products/series-6" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
              Shop Series 6 Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}
