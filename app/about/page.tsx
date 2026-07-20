import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Premium Cannabis Brand Story",
  description: "Learn about Luigi Oil, California's premium cannabis brand. Discover our commitment to quality live resin liquid diamond vapes, hash rosin, and infused pre-rolls.",
  keywords: ["about Luigi Oil", "Luigi Oil brand", "Luigi Oil story", "premium cannabis California", "Luigi Oil quality"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Luigi Oil | Our Story",
    description: "Discover the Luigi Oil story - crafting premium cannabis experiences through innovation and quality.",
    type: "website",
  },
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Luigi Oil",
  "description": "The story and values behind Luigi Oil premium cannabis brand",
  "url": "https://www.luigiofficialbrand.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "description": "Premium cannabis brand specializing in live resin liquid diamond vapes, hash rosin products, and infused pre-rolls",
    "foundingLocation": {
      "@type": "Place",
      "name": "California, USA"
    },
    "knowsAbout": ["Cannabis", "Live Resin", "Hash Rosin", "THC Vapes", "Pre-rolls"]
  }
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AgeVerification />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                About Luigi Oil
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Crafting premium cannabis experiences through innovation, quality, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Luigi Oil was founded with a singular vision: to create the finest cannabis products available. 
                    What started as a passion project among cannabis enthusiasts has grown into one of California&apos;s 
                    most respected premium brands.
                  </p>
                  <p>
                    Our journey began in the heart of California&apos;s cannabis culture, where we spent years perfecting 
                    our extraction techniques and developing proprietary processes that set our products apart. Every 
                    Luigi Oil product represents countless hours of research, testing, and refinement.
                  </p>
                  <p>
                    Today, Luigi Oil is synonymous with premium quality. Our live resin liquid diamond disposables, 
                    hash rosin pens, and infused pre-rolls are trusted by discerning consumers and stocked by the 
                    finest dispensaries across the nation.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Gold-Rich%20%281%29-DKHCgPgi3XATRZ1Bg2EhRpqBUTkDR7.png"
                  alt="Luigi Oil Logo"
                  width={400}
                  height={160}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#D4AF37]">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
                <p className="text-gray-600">
                  Every product undergoes rigorous testing to ensure purity, potency, and consistency. 
                  We never cut corners on quality.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#D4AF37]">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  From our live resin liquid diamond extraction to our advanced ceramic heating technology, 
                  we&apos;re always pushing boundaries.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#D4AF37]">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers deserve the best experience possible. That&apos;s why we obsess over every 
                  detail, from product design to packaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Product Lines</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Each Luigi Oil product line represents the pinnacle of cannabis craftsmanship.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-6 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg"
                    alt="Series 6 Collection"
                    width={300}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Series 6 Collection</h3>
                <p className="text-gray-600 text-sm">
                  Our flagship 2G live resin liquid diamond disposables paired with matching infused prerolls.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-6 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg"
                    alt="Fattones"
                    width={300}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fattones</h3>
                <p className="text-gray-600 text-sm">
                  Premium 4-in-1 packs featuring glass-tip blunts, infused prerolls, minis, and hash gummies.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-6 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-IDqQOWuyALZ6h7xUUNjKgk32NqZFvM.png"
                    alt="Rosin Pens"
                    width={300}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rosin Pens</h3>
                <p className="text-gray-600 text-sm">
                  Pure solventless hash rosin dual packs with a 1G rosin disposable and 1G infused blunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Luigi Oil?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Find Luigi Oil products at licensed dispensaries or contact us for wholesale inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
              >
                View Products
              </a>
              <a
                href="/wholesale"
                className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
              >
                Wholesale Inquiries
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
