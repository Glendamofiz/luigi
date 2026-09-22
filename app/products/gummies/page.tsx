import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

const productImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789512159-watermelon_1_-IRbHAsWWr6YGRAsvzyI4NLUveXChLq.avif"

export const metadata: Metadata = {
  title: "LUIGI Gummies | Watermelon Rosin Gummy Pack",
  description: "Explore LUIGI watermelon rosin gummies paired with a live resin preroll.",
  alternates: { canonical: "/products/gummies" },
  openGraph: {
    title: "LUIGI Gummies | Watermelon Rosin Gummy Pack",
    description: "Watermelon rosin gummies paired with a live resin preroll.",
    url: "https://www.luigiofficialbrand.com/products/gummies",
    type: "website",
    images: [{ url: productImage, alt: "LUIGI Watermelon Gummy Pack" }],
  },
}

export default function GummiesCategoryPage() {
  return (
    <>
      <AgeVerification />
      <Header />
      <main className="bg-white pt-16 text-black lg:pt-20">
        <section className="bg-black px-6 py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Gummies</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">LUIGI Gummies</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">Rosin-infused edibles made for bright flavor, balanced effects, and easy pairing.</p>
          </div>
        </section>
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Link href="/products/gummies/watermelon" className="group block max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                <Image src={productImage} alt="LUIGI Watermelon Gummy Pack" fill className="object-contain p-6 transition duration-300 group-hover:scale-105" priority />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Indica gummy pack</p>
                <h2 className="mt-2 text-2xl font-bold">Watermelon Gummy Pack</h2>
                <p className="mt-3 leading-7 text-gray-600">Ten 10mg bubble hash rosin gummies paired with a .5g live resin preroll. Sweet, balanced, and seriously good.</p>
                <div className="mt-5 flex items-center justify-between"><span className="text-xl font-bold">$15.00</span><span className="font-semibold text-[#9A7818]">View product →</span></div>
              </div>
            </Link>
            <Link href="/products/strawberry-gummy-pack" className="group block max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789514946-strawberry_1_-AjfecdHSswU06kEcllrUKiJDuqLCYH.avif" alt="LUIGI Strawberry Sativa THC Gummies 10-pack" fill className="object-contain p-6 transition duration-300 group-hover:scale-105" />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Sativa gummy pack</p>
                <h2 className="mt-2 text-2xl font-bold">Strawberry Gummy Pack</h2>
                <p className="mt-3 leading-7 text-gray-600">Ten rosin-infused strawberry sativa gummies paired with a Strawberry OG live resin preroll.</p>
                <div className="mt-5 flex items-center justify-between"><span className="text-xl font-bold">$15.00</span><span className="font-semibold text-[#9A7818]">View product →</span></div>
              </div>
            </Link>
            <Link href="/products/pomegranate-gummy-pack" className="group block max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789581928-pomegranate-nrn3GwqzzJDaJ6YTPwiCO18sXAcX7n.avif" alt="LUIGI Pomegranate Hybrid THC Gummies 10-pack" fill className="object-contain p-6 transition duration-300 group-hover:scale-105" /></div>
              <div className="px-2 pb-2 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Pomegranate hybrid gummy pack</p><h2 className="mt-2 text-2xl font-bold">Pomegranate Gummy Pack</h2><p className="mt-3 leading-7 text-gray-600">Ten rosin-infused pomegranate hybrid gummies paired with a Honey Dew Melon live resin preroll.</p><div className="mt-5 flex items-center justify-between"><span className="text-xl font-bold">$15.00</span><span className="font-semibold text-[#9A7818]">View product →</span></div></div>
            </Link>
            <Link href="/products/raspberry-gummy-pack" className="group block max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789515190-raspberry_1_-y1tBshduwZe7fprbwksBatYOnPW84B.avif" alt="LUIGI Raspberry Indica THC Gummies 10-pack" fill className="object-contain p-6 transition duration-300 group-hover:scale-105" />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Raspberry indica gummy pack</p>
                <h2 className="mt-2 text-2xl font-bold">Raspberry Gummy Pack</h2>
                <p className="mt-3 leading-7 text-gray-600">Ten bubble hash rosin raspberry indica gummies paired with a BlackBerry Dream live resin preroll.</p>
                <div className="mt-5 flex items-center justify-between"><span className="text-xl font-bold">$15.00</span><span className="font-semibold text-[#9A7818]">View product →</span></div>
              </div>
            </Link>
            <Link href="/products/gummies/var-banana" className="group block max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789514648-variety_mix_1_-dskftRuIFx7LCb29jFn7LA6vblq6dj.avif" alt="LUIGI Var Banana Gummy Pack" fill className="object-contain p-6 transition duration-300 group-hover:scale-105" />
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Var Banana gummy pack</p>
                <h2 className="mt-2 text-2xl font-bold">Var Banana Gummy Pack</h2>
                <p className="mt-3 leading-7 text-gray-600">A bright banana-forward rosin gummy pack paired with a live resin preroll.</p>
                <div className="mt-5 flex items-center justify-between"><span className="text-xl font-bold">$15.00</span><span className="font-semibold text-[#9A7818]">View product →</span></div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
