import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Leaf, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { AddToCartButton } from "@/components/add-to-cart-button"

const product = {
  id: "peanut-butter-breath-blunt-2pk",
  name: "Peanut Butter Breath",
  fullName: "Peanut Butter Breath Blunt 2pk",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peanut-butter-breath_blunt-qmQqayyCI2HA4bB4c6PWtOaLZXRrOA.avif",
  familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-C9f1QXq076kJTdiPfKBeQcdYgDQgP2.avif",
  tubeImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peanut-butter-breath_tube-zpFkuvYcHGqtR5s5JH6DpWk9xFTbXT.avif",
}

export const metadata: Metadata = {
  title: "Peanut Butter Breath Blunt 2pk | Luigi Oil",
  description: "Shop the Luigi Oil Peanut Butter Breath Blunt 2pk: two 1.25g rosin-infused hybrid blunts crafted for a rich, smooth session.",
  keywords: ["Peanut Butter Breath blunt", "Luigi Blunt 2pk", "rosin infused blunts", "Luigi Oil"],
  alternates: { canonical: "/products/peanut-butter-breath-blunt-2pk" },
  openGraph: {
    title: "Peanut Butter Breath Blunt 2pk | Luigi Oil",
    description: "Two 1.25g rosin-infused hybrid blunts in every pack.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/products/peanut-butter-breath-blunt-2pk",
    images: [{ url: product.familyImage, width: 1200, height: 1200, alt: "Peanut Butter Breath Blunt 2pk" }],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.fullName,
  description: "Two 1.25g rosin-infused Peanut Butter Breath hybrid blunts.",
  brand: { "@type": "Brand", name: "Luigi Oil" },
  image: [product.tubeImage, product.image, product.familyImage],
  url: "https://www.luigiofficialbrand.com/products/peanut-butter-breath-blunt-2pk",
  sku: "LUIGI-PBB-BLUNT-2PK",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "25",
    availability: "https://schema.org/InStock",
    url: "https://www.luigiofficialbrand.com/products/peanut-butter-breath-blunt-2pk",
  },
}

export default function PeanutButterBreathBluntPage() {
  return (
    <>
      <Script id="peanut-butter-breath-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <AgeVerification />
      <Header />
      <main className="bg-white pt-16 lg:pt-20">
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <Link href="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black">
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Image src={product.familyImage} alt="Peanut Butter Breath Blunt 2pk full product pack" fill priority className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image src={product.image} alt="Peanut Butter Breath infused blunt" fill className="object-contain p-6" sizes="25vw" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image src={product.tubeImage} alt="Peanut Butter Breath blunt tube packaging" fill className="object-contain p-6" sizes="25vw" />
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">Blunt 2pk</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Peanut Butter Breath</h1>
              <p className="mt-3 text-xl text-gray-600">Two premium rosin-infused hybrid blunts</p>
              <div className="my-8 flex items-center gap-4 border-y border-gray-200 py-5">
                <span className="text-3xl font-bold text-gray-950">$25</span>
                <span className="text-sm text-gray-500">2 x 1.25g blunts</span>
              </div>
              <p className="text-base leading-7 text-gray-600">Rich, nutty Peanut Butter Breath flavor meets Luigi&apos;s signature rosin infusion. Each pack includes two slow-burning hybrid blunts made for sharing or stretching out your session.</p>

              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <AddToCartButton product={product} price="$25" priceNumber={25} units="2 x 1.25g" perUnit="per 2-pack" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3"><Leaf className="mt-1 h-5 w-5 shrink-0 text-[#9a7b16]" /><div><h2 className="font-semibold text-gray-950">Hybrid profile</h2><p className="mt-1 text-sm leading-6 text-gray-600">Balanced, flavorful effects with a smooth finish.</p></div></div>
                <div className="flex gap-3"><Sparkles className="mt-1 h-5 w-5 shrink-0 text-[#9a7b16]" /><div><h2 className="font-semibold text-gray-950">Rosin infused</h2><p className="mt-1 text-sm leading-6 text-gray-600">Crafted with premium solventless rosin.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">Inside the pack</p>
              <h2 className="text-3xl font-bold text-gray-950">A two-blunt session, dialed in.</h2>
              <ul className="mt-6 space-y-4 text-gray-600">
                {["2 x 1.25g Peanut Butter Breath blunts", "Premium hybrid flower", "Rosin infusion for a richer experience", "Ready-to-share tube packaging"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><Check className="h-5 w-5 text-[#9a7b16]" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-black p-8 text-white"><p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Luigi Oil</p><p className="mt-4 text-2xl font-semibold leading-tight">Premium flavor. Thoughtful craft. No shortcuts.</p><p className="mt-4 leading-7 text-gray-300">Please enjoy responsibly and only where permitted by local law. For adults of legal age only.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
