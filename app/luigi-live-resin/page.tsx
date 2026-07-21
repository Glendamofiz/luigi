import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Zap, Leaf, Award, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luigi Oil 2026 Guide | 2G Disposable, Fattones & Rosin",
  description: "Buy Luigi 2G disposable online — complete 2026 guide to Luigi Oil Fattones, Series 6 live resin liquid diamonds, and hash rosin pre-rolls at CA dispensaries.",
  keywords: [
    "buy Luigi 2G disposable online",
    "Luigi disposable near me",
    "Luigi Oil",
    "Luigi Fattones",
    "Luigi Series 6",
    "Luigi live resin",
    "Luigi rosin pre rolls",
    "Luigi hash rosin",
    "order Luigi disposable",
    "Luigi 2G disposable near me",
    "authentic Luigi Oil",
    "Luigi pre roll combo",
    "Luigi live resin liquid diamond",
    "Luigi California dispensary",
    "premium cannabis Luigi",
  ],
  openGraph: {
    title: "Luigi Oil 2026 Guide | Buy Authentic Fattones, Series 6 & Rosin Pre-Rolls Online",
    description: "Complete guide to buying authentic Luigi Oil products. Shop Series 6 2G disposables, Fattones pre-roll packs, and hash rosin products at licensed California dispensaries.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/luigi-live-resin",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-XEoqV0endTG9hI2jLyeussqr64rj0r.jpg",
        width: 1200,
        height: 630,
        alt: "Luigi Oil 2026 Guide - Fattones, Series 6 & Rosin Pre-Rolls",
      },
    ],
  },
  alternates: {
    canonical: "/luigi-live-resin",
  },
}

const faqData = [
  {
    question: "Can I buy Luigi 2G disposable online safely?",
    answer: "Yes — through licensed dispensaries offering delivery in legal states. Always verify authenticity by scanning the QR code and checking batch COAs. Use Weedmaps to find 100+ licensed California dispensaries with Luigi products."
  },
  {
    question: "What is the difference between Series 6 and Fattones?",
    answer: "Series 6 are 2g live resin + liquid diamond disposable vapes with 85-95%+ THC. Fattones are multi-item infused pre-roll + gummy packs with hash rosin, including a 1g glass-tip blunt, 2x 1g joints, 4x 0.5g mini joints, and 6 gummies."
  },
  {
    question: "Are Luigi Fattones infused with real hash rosin?",
    answer: "Yes — solventless hash rosin for clean, potent flavor. No chemicals or solvents are used in the infusion process, preserving the strain's natural terpenes for a premium experience."
  },
  {
    question: "How do I spot real Luigi Oil vs fake?",
    answer: "Check packaging quality for holographic elements, scan the QR verification code, verify via the official www.luigiofficialbrand.com site, and buy only from licensed sellers. Red flags include prices under $20-25, blurry packaging, spelling errors, or unverified social media sellers."
  },
  {
    question: "What are the most popular Series 6 flavors?",
    answer: "Candy Corn Chaos, Graveberry Kush, Hella Hallow Jam, and Black Diesel Milk lead reviews. The full lineup includes 10+ flavors across indica, sativa, and hybrid options."
  },
  {
    question: "Do Fattones include edibles?",
    answer: "Yes — 6 flavor-matched hash-infused gummies in every pack, providing extended effects alongside the pre-rolls for a complete smoking kit experience."
  },
  {
    question: "Are Rosin Pre-Rolls available separately?",
    answer: "Yes, and they're also the highlight inside every Fattones pack. Luigi Rosin Pre-Rolls use solventless hash rosin infusion with premium flower base and glass tips on blunts."
  },
  {
    question: "Is Luigi Oil lab tested?",
    answer: "All products are fully tested in licensed CA labs for potency, terpenes, and contaminants. Batch-specific COAs are available for verification."
  },
  {
    question: "How long do 2g Luigi disposables last?",
    answer: "Hundreds of puffs — often days or weeks depending on usage. The rechargeable USB-C battery ensures you never waste oil, and the 2g capacity means fewer recharges than standard 1g vapes."
  },
  {
    question: "Where can I find Luigi disposable near me?",
    answer: "Use Weedmaps and search 'Luigi' for the closest licensed retailer. Over 100 licensed California dispensaries carry Luigi products with in-store, delivery, and pickup options."
  },
  {
    question: "What's the THC level in Luigi products?",
    answer: "Typically 35-40%+ in pre-rolls (Fattones) and 85-95%+ in disposable oil (Series 6). All products are tested for accurate potency labeling."
  },
  {
    question: "Do Luigi products ship interstate?",
    answer: "Follow your local laws. Licensed CA delivery is the most reliable legal option. We recommend using Weedmaps to find authorized retailers in your legal state."
  }
]

export default function LuigiLiveResinPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero / Introduction */}
        <section className="bg-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <Image
            src="https://www.luigiofficialbrand.com/wp-content/uploads/2025/11/Luigi-BG_Pattern-Home-Banner.jpg"
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-[#D4AF37] text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
                2026 Ultimate Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
                Buy Luigi 2G Disposable Online: Fattones, Series 6 & Rosin Pre-Rolls
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                In 2026, Luigi Oil continues to dominate the California cannabis scene. Whether you&apos;re searching to <strong>buy Luigi 2G disposable online</strong>, looking for <strong>Luigi disposable near me</strong>, or hunting for authentic <strong>Luigi Oil pre-rolls</strong> and vapes, this comprehensive guide covers everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold px-8">
                  <Link href="/products">
                    Explore Products
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                  <Link href="/wholesale">
                    Wholesale Inquiries
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Gallery */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Luigi Oil Product Lineup</h2>
              <p className="text-gray-400">Available at 100+ licensed California dispensaries</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg"
                  alt="Luigi Series 6 - Orange Lava Kush"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Series 6</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASABLANCA-PEACH-2400x2400-PUZfpFgzkhH327g6CU6so3dRABrdPl.png"
                  alt="Luigi Rosin Pen - Casablanca Peach"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Rosin Pen</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH-hKjxaitdO97OYTulXo3Qftf6pZ9EAW.jpg"
                  alt="Luigi Series 6 - Graveberry Kush"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Series 6</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GARLIC-GLUE-2400x2400-xKXyqIm8nQMrx1JULcPLke7bxNpWKc.png"
                  alt="Luigi Rosin Pen - Garlic Glue"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Rosin Pen</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg"
                  alt="Luigi FatTones - Blue Mist"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Fattones</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png"
                  alt="Luigi Rosin Pen - Tropicana Gold"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Rosin Pen</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png"
                  alt="Luigi Rosin Pen - OG Reserve"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Rosin Pen</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg"
                  alt="Luigi Series 6 - Black Diesel Milk"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-sm text-gray-400 mt-2">Series 6</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Luigi Oil Dominates in 2026 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Why Luigi Oil Dominates in 2026
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Luigi Oil has earned its reputation by focusing on what matters most: <strong>live resin + liquid diamond disposables</strong>, <strong>solventless hash rosin infusions</strong>, and convenient formats that fit real lifestyles. All products are sourced from California&apos;s licensed cultivators, lab-tested for potency and purity, and designed for consistent, flavorful experiences.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Key reasons users <strong>buy Luigi disposable online</strong> and in-store: 2G capacity for longer-lasting sessions, hash rosin infusion for clean terpene-rich effects, flavor innovation that actually tastes like the named strain, and versatility from discreet vapes to shareable pre-roll packs.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Award, text: "Premium Quality" },
                    { icon: Zap, text: "High Potency" },
                    { icon: Leaf, text: "Terpene Rich" },
                    { icon: CheckCircle, text: "Lab Tested" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                      <item.icon className="h-6 w-6 text-[#D4AF37]" />
                      <span className="font-semibold text-gray-900">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png"
                    alt="Luigi Premium Cannabis Products - OG Reserve Rosin Pen"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Series 6 Collection - Premium 2G Live Resin + Liquid Diamond Disposables */}
        <section id="series" className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-wider uppercase mb-3">
                Buy Luigi 2G Disposable Online
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Series 6 Collection
              </h2>
              <p className="text-lg text-gray-600">
                Premium 2G Live Resin + Liquid Diamond Disposables. The #1 searched Luigi product.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Key Features of Series 6 Disposables
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  These are Luigi&apos;s flagship all-in-one disposables — compact, rechargeable, draw-activated, and loaded with <strong>2 grams of premium live resin + liquid diamond oil</strong> at <strong>85-95%+ THC potency</strong>.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-[#D4AF37] pl-4">
                    <h4 className="font-semibold text-gray-900">2G Capacity</h4>
                    <p className="text-gray-600 text-sm">Roughly double standard 1g vapes — fewer recharges and better value.</p>
                  </div>
                  <div className="border-l-4 border-[#D4AF37] pl-4">
                    <h4 className="font-semibold text-gray-900">Live Resin + THCa Liquid Diamonds</h4>
                    <p className="text-gray-600 text-sm">Fresh-frozen, full-spectrum terpenes for 85-95%+ THC potency.</p>
                  </div>
                  <div className="border-l-4 border-[#D4AF37] pl-4">
                    <h4 className="font-semibold text-gray-900">Rechargeable USB-C Battery</h4>
                    <p className="text-gray-600 text-sm">Never waste oil again with reliable, rechargeable power.</p>
                  </div>
                  <div className="border-l-4 border-[#D4AF37] pl-4">
                    <h4 className="font-semibold text-gray-900">Indica, Sativa & Hybrid Options</h4>
                    <p className="text-gray-600 text-sm">Full spectrum of effects to match your mood and needs.</p>
                  </div>
                </div>

                <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                  <Link href="/products/series-6">
                    Explore Series 6
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg"
                    alt="Luigi Series 6 Disposable Vape - Black Diesel Milk"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Full Series 6 Flavor Lineup */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Full Series 6 Flavor Lineup (2026)</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { name: "Black Diesel Milk", type: "Hybrid", desc: "Gassy diesel meets creamy sweetness" },
                  { name: "Candy Corn Chaos", type: "Hybrid", desc: "Nostalgic candy-corn vanilla-caramel" },
                  { name: "Graveberry Kush", type: "Indica", desc: "Deep berry + earthy kush" },
                  { name: "Green Gumbo", type: "Hybrid", desc: "Unique savory-herbal sweetness" },
                  { name: "Hella Hallow Jam", type: "Sativa", desc: "Fruity jam with subtle spice" },
                  { name: "Orange Lava Kush", type: "Hybrid", desc: "Citrus explosion + warm kush" },
                  { name: "Plum Wreck", type: "Indica", desc: "Juicy plum with heavy relaxation" },
                  { name: "Rageberry Blitz", type: "Sativa", desc: "Intense mixed-berry energy" },
                  { name: "Razor Thin Pine", type: "Hybrid", desc: "Crisp pine and citrus gas" },
                  { name: "Sour Cran Smash", type: "Sativa", desc: "Tart cranberry with sour punch" },
                ].map((flavor, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      flavor.type === 'Indica' ? 'bg-purple-100 text-purple-700' :
                      flavor.type === 'Sativa' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{flavor.type}</span>
                    <h4 className="font-semibold text-gray-900 mt-2 text-sm">{flavor.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{flavor.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-6 text-sm">
                Users consistently rate Series 6 for smooth hits, true-to-strain flavor, and long-lasting effects. Expect $25-$60 pricing for authentic 2G disposables.
              </p>
            </div>
          </div>
        </section>

        {/* Luigi Rosin Pens */}
        <section id="rosin" className="py-16 md:py-24 bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-wider uppercase mb-3">
                Solventless Excellence
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Luigi Rosin Pens
              </h2>
              <p className="text-lg text-gray-400">
                Pure, solventless extraction for the discerning connoisseur.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-900 rounded-2xl p-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png"
                    alt="Luigi Rosin Pen - Tropicana Gold"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Art of Solventless Extraction
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Luigi Rosin Pens represent cannabis in its purest form. Unlike traditional extracts, live rosin 
                  is created using only heat and pressure - no solvents, no chemicals. This meticulous process 
                  preserves the complete terpene and cannabinoid profile, resulting in an experience that&apos;s 
                  cleaner, smoother, and more flavorful.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "100% Solventless",
                    "Full Terpene Profile",
                    "Cleaner Experience",
                    "Premium Flavor",
                    "Smoother Hits",
                    "Connoisseur Grade"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                  <Link href="/products/rosin-pens">
                    Discover Rosin Pens
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Luigi FatTones Collection */}
        <section id="fattones" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-wider uppercase mb-3">
                The Ultimate Infused Pre-Roll Experience
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Fattones Collection
              </h2>
              <p className="text-lg text-gray-600">
                Premium all-in-one smoking kits with pre-rolls + edibles. The #1 reason people search for Luigi pre-roll combo.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  What&apos;s Inside Every Fattones Pack?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Each item is infused with <strong>solventless hash rosin</strong> for clean, potent hits that preserve the strain&apos;s natural terpenes. THC levels typically range <strong>35-40%+</strong>, delivering strong yet balanced effects.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">1g</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Glass-Tip Blunt</h4>
                      <p className="text-gray-600 text-sm">Premium flower, slow-burning, ultra-smooth draw</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">2x</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">1g Hash Rosin Infused Preroll Joints</h4>
                      <p className="text-gray-600 text-sm">Full-size, solventless hash rosin infusion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">4x</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">0.5g Hash Rosin Infused Mini Joints</h4>
                      <p className="text-gray-600 text-sm">Perfect for quick sessions or sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">6x</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hash Infused Gummies</h4>
                      <p className="text-gray-600 text-sm">Flavor-matched edibles for extended effects</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                  <Link href="/products/fattones">
                    Shop FatTones
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gray-100 rounded-2xl p-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg"
                    alt="Luigi FatTones Infused Pre-Rolls - Blue Mist"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Popular Fattones Flavors */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Fattones Flavors in 2026</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Watermelon Fattone", type: "Indica", desc: "Juicy watermelon sweetness meets deep body relaxation" },
                  { name: "Blackberry Dream", type: "Indica", desc: "Rich berry kush notes with dreamy, sedative effects" },
                  { name: "Blue Mist", type: "Hybrid", desc: "Creamy blueberry-vanilla for balanced uplift and calm" },
                  { name: "Banana Gelato", type: "Hybrid", desc: "Sweet banana-cream gelato with smooth euphoric vibes" },
                  { name: "Cherry Pie", type: "Indica", desc: "Classic cherry-pie sweetness and relaxing power" },
                  { name: "Honeydew Melon", type: "Hybrid", desc: "Fresh melon with creamy vanilla undertones" },
                  { name: "Blue Razz Lime", type: "Sativa", desc: "Tart blue raspberry and lime zing for energetic days" },
                  { name: "Pineapple Diesel", type: "Hybrid", desc: "Tropical pineapple with gassy diesel notes" },
                ].map((flavor, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      flavor.type === 'Indica' ? 'bg-purple-100 text-purple-700' :
                      flavor.type === 'Sativa' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{flavor.type}</span>
                    <h4 className="font-semibold text-gray-900 mt-2">{flavor.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{flavor.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-6 text-sm">
                Fattones retail around $35-$50 depending on location — excellent value compared to buying items individually.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rosin Pens vs Series Disposables
              </h2>
              <p className="text-lg text-gray-600">
                Both deliver premium experiences, but which is right for you?
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg min-w-[400px]">
                <div className="grid grid-cols-3 bg-black text-white">
                  <div className="p-3 md:p-6 text-center border-r border-gray-800">
                    <span className="text-xs md:text-base font-semibold">Feature</span>
                  </div>
                  <div className="p-3 md:p-6 text-center border-r border-gray-800">
                    <span className="text-xs md:text-base font-semibold text-[#D4AF37]">Rosin Pens</span>
                  </div>
                  <div className="p-3 md:p-6 text-center">
                    <span className="text-xs md:text-base font-semibold text-[#D4AF37]">Series 6</span>
                  </div>
                </div>
                {[
                  { feature: "Extraction", rosin: "Solventless", series: "Live Resin" },
                  { feature: "Potency", rosin: "Very High", series: "High" },
                  { feature: "Flavor", rosin: "Pure & Clean", series: "Rich & Bold" },
                  { feature: "Smoothness", rosin: "Ultra Smooth", series: "Smooth" },
                  { feature: "Best For", rosin: "Connoisseurs", series: "Daily Use" },
                  { feature: "Price Point", rosin: "Premium", series: "Value" },
                ].map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="p-3 md:p-6 text-center border-r border-gray-200 font-medium text-gray-900 text-xs md:text-base whitespace-nowrap">
                      {row.feature}
                    </div>
                    <div className="p-3 md:p-6 text-center border-r border-gray-200 text-gray-600 text-xs md:text-base whitespace-nowrap">
                      {row.rosin}
                    </div>
                    <div className="p-3 md:p-6 text-center text-gray-600 text-xs md:text-base whitespace-nowrap">
                      {row.series}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Luigi */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Luigi?
              </h2>
              <p className="text-lg text-gray-400">
                When you choose Luigi, you choose uncompromising quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Premium Quality", desc: "Every product starts with top-shelf cannabis and undergoes rigorous quality control." },
                { title: "High Potency", desc: "Our formulations deliver powerful, consistent effects you can rely on." },
                { title: "Smooth Experience", desc: "Advanced hardware and extraction methods ensure every hit is smooth." },
                { title: "Luxury Branding", desc: "Luigi represents sophistication in every aspect, from product to packaging." },
                { title: "Consistency", desc: "Same exceptional quality in every product, every time." },
                { title: "Lab Tested", desc: "Third-party testing ensures purity, potency, and safety in every batch." },
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Use Luigi Products
              </h2>
              <p className="text-lg text-gray-600">
                Get the most from your Luigi experience with these tips.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Series Disposables</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span>Remove from packaging and inspect the device</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span>Draw-activated: simply inhale from the mouthpiece</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span>Start with small puffs to gauge potency</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <span>Store upright in a cool, dry place</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rosin Pens</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span>Let the pen reach room temperature before use</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span>Use lower heat settings for best terpene expression</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span>Take slow, steady draws for smoothest hits</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <span>Store upright to prevent leakage</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">FatTones</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <span>Remove from tube and inspect the roll</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <span>Light evenly while rotating for best burn</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <span>Puff slowly - FatTones are more potent than standard pre-rolls</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <span>Extinguish and store in tube for later use</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Who Luigi is For */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who is Luigi For?
              </h2>
              <p className="text-lg text-gray-600">
                Whether you&apos;re new to cannabis or a seasoned connoisseur, Luigi has something for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#D4AF37]">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Beginners</h3>
                <p className="text-gray-600">
                  Our Series disposables offer an accessible entry point with consistent dosing 
                  and easy-to-use design. Start low and go slow with Luigi&apos;s approachable products.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#D4AF37]">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Users</h3>
                <p className="text-gray-600">
                  FatTones and high-potency disposables deliver the strength you&apos;re looking for. 
                  Experience powerful effects that satisfy even seasoned cannabis enthusiasts.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#D4AF37]">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Seekers</h3>
                <p className="text-gray-600">
                  Rosin Pens represent the pinnacle of cannabis refinement. For those who appreciate 
                  the finer things, Luigi delivers an unmatched premium experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy Authentic Luigi Oil */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-wider uppercase mb-3">
                Safe Purchasing Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Buy Authentic Luigi Oil Online or Near Me
              </h2>
              <p className="text-lg text-gray-600">
                When you search &quot;buy Luigi 2G disposable online&quot; or &quot;Luigi disposable near me&quot;, authenticity matters.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Ways to Buy Authentic Luigi Oil</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Weedmaps (Official Recommendation)
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">Search &quot;Luigi&quot; to find 100+ licensed CA dispensaries with in-store, delivery, or pickup options.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Licensed Dispensary Websites
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">Same-day or next-day delivery often available in mature markets.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Official Brand Site (luigioil.com)
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">Directs you to authorized retailers and Weedmaps locator.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Red Flags for Fake Luigi Products</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">X</span>
                        Prices under $20-25 for 2g disposables or Fattones packs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">X</span>
                        Blurry packaging, spelling errors, or missing holographic elements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">X</span>
                        No QR/scratch-off verification code linking to luigioil.com
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">X</span>
                        Sellers on unverified social media or random websites
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">X</span>
                        Promises of &quot;worldwide shipping&quot; — licensed CA delivery is the safest option
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Pro Tips for Safe Ordering</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Always scan the verification code upon arrival</li>
                      <li>Check batch-specific COAs for potency and contaminants</li>
                      <li>Expect $25-$60 for authentic 2G disposables</li>
                      <li>Expect $35-$50 for authentic Fattones packs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about Luigi Oil in 2026.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides & Reviews - Blog Links */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Guides, Reviews & Education
              </h2>
              <p className="text-lg text-gray-600">
                Deep-dive into our products with expert guides and honest reviews.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/luigi-carts-los-angeles" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Retail Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Where to Buy Luigi Oil in Los Angeles</h3>
                <p className="mt-2 text-sm text-gray-600">Find confirmed LA dispensaries carrying Luigi Oil.</p>
              </Link>

              <Link href="/blog/best-dispensaries-los-angeles-luigi" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Retail Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Best Dispensaries in Los Angeles for Luigi Oil</h3>
                <p className="mt-2 text-sm text-gray-600">Verified retailers with evaluation checklist.</p>
              </Link>

              <Link href="/blog/buy-luigi-carts-wholesale" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Wholesale</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Buy Luigi Carts Wholesale Guide</h3>
                <p className="mt-2 text-sm text-gray-600">Dispensary owner's complete ordering guide.</p>
              </Link>

              <Link href="/blog/luigi-rosin-pen-review" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Product Review</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Rosin Pen Review</h3>
                <p className="mt-2 text-sm text-gray-600">Is solventless rosin worth the premium?</p>
              </Link>

              <Link href="/blog/luigi-series-6-disposable-review" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Product Review</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Series 6 Disposable Review</h3>
                <p className="mt-2 text-sm text-gray-600">Premium 2G live resin + liquid diamond guide.</p>
              </Link>

              <Link href="/blog/live-rosin-vape-vs-live-resin" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Education</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Live Rosin vs Live Resin</h3>
                <p className="mt-2 text-sm text-gray-600">Understand the difference and why Luigi stands out.</p>
              </Link>

              <Link href="/blog/best-infused-pre-rolls" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Best Infused Pre-Rolls 2026</h3>
                <p className="mt-2 text-sm text-gray-600">Why Luigi FatTones rank #1 premium.</p>
              </Link>

              <Link href="/blog/luigi-series-6-flavors-guide-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Flavor Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Series 6 Flavors Guide (2026)</h3>
                <p className="mt-2 text-sm text-gray-600">All 10+ strains and flavor profiles.</p>
              </Link>

              <Link href="/blog/luigi-fattones-flavors-guide-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Pre-Roll Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Fattones Flavors Guide (2026)</h3>
                <p className="mt-2 text-sm text-gray-600">Complete combo pack breakdown.</p>
              </Link>

              <Link href="/blog/how-to-verify-authentic-luigi-carts" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Safety Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">How to Verify Authentic Luigi Carts</h3>
                <p className="mt-2 text-sm text-gray-600">5-step authentication guide.</p>
              </Link>

              <Link href="/blog/how-to-open-a-luigi-preroll" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">How-To</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">How to Open a Luigi Preroll</h3>
                <p className="mt-2 text-sm text-gray-600">Step-by-step for all formats.</p>
              </Link>

              <Link href="/blog/do-liquid-diamonds-get-you-high" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Education</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Do Liquid Diamonds Get You High?</h3>
                <p className="mt-2 text-sm text-gray-600">Potency explained with lab data.</p>
              </Link>

              <Link href="/blog/live-rosin-vs-liquid-diamonds" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Comparison</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Live Rosin vs Liquid Diamonds</h3>
                <p className="mt-2 text-sm text-gray-600">Extract methods and potency compared.</p>
              </Link>

              <Link href="/blog/are-luigi-carts-worth-it" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Product Review</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Are Luigi Carts Worth It?</h3>
                <p className="mt-2 text-sm text-gray-600">Honest value analysis.</p>
              </Link>

              <Link href="/blog/buy-luigi-2g-disposable-online" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Shopping Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Buy Luigi 2G Disposable Online</h3>
                <p className="mt-2 text-sm text-gray-600">Complete guide to ordering Luigi online safely.</p>
              </Link>

              <Link href="/blog/buy-luigi-disposable-vape" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Buying Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Buy Luigi Disposable Vape</h3>
                <p className="mt-2 text-sm text-gray-600">Where and how to purchase Luigi disposables.</p>
              </Link>

              <Link href="/blog/how-long-do-luigi-disposables-last" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Product Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">How Long Do Luigi Disposables Last?</h3>
                <p className="mt-2 text-sm text-gray-600">Lifespan, puff count, and battery guide.</p>
              </Link>

              <Link href="/blog/infused-pre-rolls-vs-regular" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Comparison</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Infused Pre-Rolls vs Regular</h3>
                <p className="mt-2 text-sm text-gray-600">What makes infused pre-rolls different.</p>
              </Link>

              <Link href="/blog/luigi-disposable-vape-review" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Product Review</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Disposable Vape Review</h3>
                <p className="mt-2 text-sm text-gray-600">Complete review of Luigi disposable vapes.</p>
              </Link>

              <Link href="/blog/luigi-rosin-pens-flavors-guide-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Flavor Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Rosin Pens Flavors Guide 2026</h3>
                <p className="mt-2 text-sm text-gray-600">Complete rosin pen strain breakdown.</p>
              </Link>

              <Link href="/blog/luigi-series-6-vs-series-5" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Comparison</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Series 6 vs Series 5</h3>
                <p className="mt-2 text-sm text-gray-600">Which generation is right for you?</p>
              </Link>

              <Link href="/blog/luigi-vape-not-working-fix" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Troubleshooting</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Luigi Vape Not Working - Fix Guide</h3>
                <p className="mt-2 text-sm text-gray-600">Solutions for common Luigi vape issues.</p>
              </Link>

              <Link href="/blog/official-luigi-brand-guide-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Brand Guide</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Official Luigi Brand Guide 2026</h3>
                <p className="mt-2 text-sm text-gray-600">Comprehensive Luigi brand overview.</p>
              </Link>

              <Link href="/blog/what-is-live-rosin-vape" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Education</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">What is Live Rosin Vape?</h3>
                <p className="mt-2 text-sm text-gray-600">Understanding live rosin extraction.</p>
              </Link>

              <Link href="/blog/why-luigi-vapes-taste-better" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#D4AF37] text-sm font-semibold">Education</span>
                <h3 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">Why Luigi Vapes Taste Better</h3>
                <p className="mt-2 text-sm text-gray-600">The science behind Luigi flavor profiles.</p>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#C5A028] transition-colors"
              >
                View All Articles (25+ More)
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Experience the Luigi Difference
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have elevated their cannabis experience with Luigi. 
                Premium quality, exceptional flavor, unmatched potency.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold">
                  <Link href="/products">
                    Shop All Products
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                  <Link href="/products/series-6">
                    Explore Series 6
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                  <Link href="/products/rosin-pens">
                    Try Rosin Pens
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                  <Link href="/products/fattones">
                    Buy FatTones
                  </Link>
                </Button>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-800">
                <p className="text-gray-400 mb-4">Interested in wholesale?</p>
                <Button asChild variant="link" className="text-[#D4AF37] hover:text-[#C5A028] text-lg">
                  <Link href="/wholesale">
                    Contact Us for Wholesale Pricing
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section (Hidden) */}
        <section className="sr-only" aria-hidden="true">
          <p>
            buy Luigi 2G disposable online, Luigi disposable near me, Luigi Oil, order Luigi disposable,
            Luigi 2G disposable near me, authentic Luigi Oil, Luigi Fattones, Luigi Series 6,
            Luigi live resin, Luigi rosin pre rolls, Luigi hash rosin, Luigi pre roll combo,
            Luigi live resin liquid diamond, Luigi California dispensary, Luigi real or fake,
            Luigi vape online, best THC disposable brand, Luigi Series 6 for sale,
            Luigi Oil 2026 guide, where to buy Luigi, Luigi dispensary, Luigi delivery,
            solventless hash rosin, premium cannabis Luigi, high potency THC vape,
            Luigi FatTones pre rolls, infused pre rolls Luigi, Luigi vape review,
            best cannabis brand Luigi, luxury cannabis vape, live resin disposable,
            solventless rosin pen, Luigi cannabis California, premium THC disposable,
            best live resin vape, Luigi premium pre rolls, high quality cannabis vape,
            Luigi dispensary California, top shelf cannabis brand, hash rosin infused prerolls,
            Luigi rosin cartridge, luxury THC products, Luigi wholesale cannabis,
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
