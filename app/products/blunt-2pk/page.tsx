import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.luigiofficialbrand.com"
const familyImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-07HnZb3mtwe2oND1JfLyJDsrSgZyrY.avif"

export const metadata: Metadata = {
  title: "LUIGI Blunt 2pk | Premium Rosin-Infused Blunts",
  description: "Shop LUIGI premium rosin-infused blunt 2-packs. Two full-size blunts, bold strain flavor, and smooth California sessions.",
  keywords: ["LUIGI blunt 2pk", "rosin infused blunts", "premium blunt pack", "California infused blunts"],
  alternates: { canonical: `${siteUrl}/products/blunt-2pk` },
  openGraph: { title: "LUIGI Blunt 2pk | Premium Rosin-Infused Blunts", description: "Two premium rosin-infused blunts in every LUIGI 2-pack.", url: `${siteUrl}/products/blunt-2pk`, siteName: "LUIGI", type: "website", images: [{ url: familyImage, alt: "LUIGI Peanut Butter Breath Blunt 2-Pack" }] },
}

export default function Blunt2pkPage() {
  return <><AgeVerification /><Header /><main className="pt-16 lg:pt-20">
    <section className="bg-black py-16 text-white md:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">LUIGI Blunt 2pk</p><h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">Premium Rosin-Infused Blunts, Two in Every Pack</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">Big flavor, smooth sessions, and two full-size infused blunts made for sharing or keeping close.</p></div></section>
    <section className="py-16 md:py-24"><div className="mx-auto max-w-5xl px-6 lg:px-8"><h2 className="text-3xl font-bold md:text-4xl">Choose Your LUIGI Blunt 2pk</h2><div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"><div className="grid gap-8 p-6 md:grid-cols-2 md:p-8"><div className="relative aspect-square rounded-xl bg-gray-50"><Image src={familyImage} alt="LUIGI Peanut Butter Breath Rosin Infused Hybrid Blunt 2-Pack" fill className="object-contain p-5" /></div><div className="flex flex-col justify-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D24]">Hybrid · Rosin Infused</p><h3 className="mt-3 text-3xl font-bold">Peanut Butter Breath Blunt 2-Pack</h3><p className="mt-4 text-lg leading-8 text-gray-600">Two 1.25g Peanut Butter Breath hybrid blunts. 2.5g total. Nutty, gassy, smooth, and ready for a premium California session.</p><div className="mt-6 flex items-center gap-4"><span className="text-3xl font-bold">$30.00</span><span className="rounded-full bg-[#f7f1dc] px-3 py-1 text-sm font-semibold text-[#8a6815]">2 × 1.25g</span></div><Link href="/products/peanut-butter-breath-blunt-2pk" className="mt-7 inline-flex w-fit rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#D4AF37] hover:text-black">View product</Link></div></div></div></div></section>
  </main><Footer /></>
}

