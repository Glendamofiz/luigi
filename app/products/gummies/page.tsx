import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

const watermelonImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watermelon_joint-dTVzypY8deiJIBYR1SQIe0AdRfi346.avif",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789512159-watermelon_1_-IRbHAsWWr6YGRAsvzyI4NLUveXChLq.avif",
]

export const metadata: Metadata = {
  title: "Luigi Gummies | Watermelon Rosin Gummies + Preroll",
  description: "Shop Luigi Watermelon Gummy Pack: ten 10mg bubble hash rosin-infused indica gummies paired with a 0.5g live resin preroll for $15.",
  keywords: ["Luigi gummies", "watermelon THC gummies", "rosin gummies", "gummy and preroll pack"],
  alternates: { canonical: "/products/gummies" },
  openGraph: {
    title: "Luigi Watermelon Gummy Pack | Rosin Gummies + Preroll",
    description: "Ten 10mg watermelon rosin gummies paired with a 0.5g live resin preroll. Shop the $15 Luigi Gummy Pack.",
    url: "https://www.luigiofficialbrand.com/products/gummies",
    type: "website",
    images: [{ url: watermelonImages[0], width: 1200, height: 1200, alt: "Luigi Watermelon Gummy Pack" }],
  },
  twitter: { card: "summary_large_image", images: [watermelonImages[0]] },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Luigi Watermelon Gummy Pack",
  description: "Ten 10mg bubble hash rosin-infused watermelon indica gummies paired with a 0.5g live resin preroll.",
  image: watermelonImages,
  brand: { "@type": "Brand", name: "Luigi Oil" },
  url: "https://www.luigiofficialbrand.com/products/gummies",
  sku: "LUIGI-WATERMELON-GUMMY-PACK",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "15.00",
    availability: "https://schema.org/InStock",
    url: "https://www.luigiofficialbrand.com/products/gummies",
  },
}

export default function GummiesPage() {
  return (
    <>
      <Script id="gummies-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="bg-black py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Gummies</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Watermelon Gummy Pack</h1>
              <p className="mt-5 text-xl text-gray-300">Indica rosin gummies paired with a live resin preroll.</p>
              <p className="mt-6 max-w-xl text-gray-400">Ten 10mg bubble hash rosin-infused watermelon gummies and one matching 0.5g preroll. Two ways to experience the same juicy flavor for $15.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-3xl font-bold">$15.00</span>
                <span className="rounded-full border border-[#D4AF37]/50 px-4 py-2 text-sm text-[#D4AF37]">10 Gummies + 1 Preroll</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {watermelonImages.map((src, index) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-white/10">
                  <Image src={src} alt={index === 0 ? "Luigi Watermelon Gummy Pack" : "Luigi Watermelon Preroll"} fill className="object-contain p-4" priority={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-black">Two ways to experience watermelon</h2>
                <p className="mt-5 leading-7 text-gray-600">Bubble hash rosin-infused gummies bring a sweet, juicy flavor and simple dosing. The live resin and liquid diamonds preroll adds bright citrus, sour pungency, and a deep earthy finish.</p>
                <p className="mt-4 leading-7 text-gray-600">Start with one gummy and give edible effects 30–90 minutes before taking more. Enjoy the preroll separately or pair it with the gummy for a layered session.</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-black">What&apos;s inside</h2>
                <dl className="mt-5 divide-y divide-gray-200 text-sm">
                  <div className="flex justify-between gap-4 py-3"><dt className="font-semibold text-gray-700">Gummies</dt><dd className="text-right text-gray-600">10 × 10mg rosin gummies</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="font-semibold text-gray-700">Preroll</dt><dd className="text-right text-gray-600">1 × 0.5g live resin preroll</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="font-semibold text-gray-700">Type</dt><dd className="text-right text-gray-600">Indica</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="font-semibold text-gray-700">Price</dt><dd className="text-right font-bold text-black">$15.00</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black py-14 text-center text-white">
          <h2 className="text-3xl font-bold">Find Luigi Gummies near you</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">Available through licensed California dispensaries and delivery services. Check your local retailer for availability.</p>
          <a href="/find-luigi" className="mt-7 inline-flex rounded-md bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#E3C45B]">Find a Dispensary</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
