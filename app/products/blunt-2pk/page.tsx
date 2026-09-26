import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

export const metadata: Metadata = {
  title: "Blunt 2pk | LUIGI Rosin-Infused Blunts",
  description: "Explore LUIGI's rosin-infused blunt 2-packs, crafted for bold flavor and easy sharing.",
  alternates: { canonical: "https://www.luigiofficialbrand.com/products/blunt-2pk" },
}

export default function Blunt2pkPage() {
  return <><AgeVerification /><Header /><main className="bg-white pt-16 lg:pt-20"><section className="bg-black px-6 py-20 text-center text-white"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">LUIGI Blunt 2pk</p><h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Two blunts. One iconic strain. Double the fun.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">Premium rosin-infused hybrid blunts made for sharing, saving, and savoring.</p></section><section className="mx-auto max-w-7xl px-6 py-14 lg:px-8"><div className="grid gap-6 md:grid-cols-2"><Link href="/products/peanut-butter-breath-blunt-2pk" className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50"><div className="relative aspect-square"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-C9f1QXq076kJTdiPfKBeQcdYgDQgP2.avif" alt="LUIGI Peanut Butter Breath Rosin Infused Hybrid Blunt 2-Pack" fill className="object-contain p-6 transition-transform group-hover:scale-105" /></div><div className="p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">Featured blunt 2pk</p><h2 className="mt-2 text-3xl font-bold text-gray-950">Peanut Butter Breath</h2><p className="mt-3 leading-7 text-gray-600">Two 1.25g rosin-infused Peanut Butter Breath hybrid blunts. 2.5g total. Nutty, gassy, smooth. Just $30.</p><span className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white">View product — $30</span></div></Link><Link href="/products/berry-amarillo-blunt-2pk" className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50"><div className="relative aspect-square"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790269924-berry_amarillo_family-XHqPtoIFbssAsb3BvPhh4Fqg7U71uz.avif" alt="LUIGI Berry Amarillo Rosin Infused Indica Blunt 2-Pack" fill className="object-contain p-6 transition-transform group-hover:scale-105" /></div><div className="p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">New blunt 2pk</p><h2 className="mt-2 text-3xl font-bold text-gray-950">Berry Amarillo</h2><p className="mt-3 leading-7 text-gray-600">Two 1.25g rosin-infused Berry Amarillo indica blunts. 2.5g total. Ripe berry, zesty citrus, and bright terps. Just $30.</p><span className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white">View product, $30</span></div></Link></div></section></main><Footer /></>
}
