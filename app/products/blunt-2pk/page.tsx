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

const products = [
  { href: "/products/peanut-butter-breath-blunt-2pk", name: "Peanut Butter Breath", type: "Hybrid", description: "Nutty, gassy, smooth. Two 1.25g rosin-infused blunts.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-C9f1QXq076kJTdiPfKBeQcdYgDQgP2.avif" },
  { href: "/products/berry-amarillo-blunt-2pk", name: "Berry Amarillo", type: "Indica", description: "Ripe berry, zesty citrus, and bright terps in every pack.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790269924-berry_amarillo_family-XHqPtoIFbssAsb3BvPhh4Fqg7U71uz.avif" },
  { href: "/products/casablanca-peach-blunt-2pk", name: "Casablanca Peach", type: "Indica", description: "Lush peach, tropical sweetness, and premium rosin.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270278-casablanca_peach_family-GfW4hZCFY1G5SZb9CQjnzT5v8JPiAj.avif" },
  { href: "/products/citrus-mimosa-blunt-2pk", name: "Citrus Mimosa", type: "Hybrid", description: "Bright orange, zesty citrus, and bubbly mimosa vibes.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270470-citrus_mimosa_family-algKiDA7gyKLwVm08CkT0xN28IC5uH.avif" },
  { href: "/products/donny-burger-blunt-2pk", name: "Donny Burger", type: "Hybrid", description: "Cheesy, gassy, funky terps with a full-bodied finish.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270690-donny_burger_family-UMW09pDhBUEVWgXjpAOpQXWdk4eC1F.avif" },
  { href: "/products/garlic-glue-blunt-2pk", name: "Garlic Glue", type: "Hybrid", description: "Savory garlic, earthy gas, and pungent terps.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271010-garlic_glue_family-GxDwL54dLBLDzvYKi5SKnhvi4c2A7d.avif" },
  { href: "/products/og-reserve-blunt-2pk", name: "OG Reserve", type: "Indica", description: "Earthy, piney, classic OG flavor with smooth calm.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271576-og_reserve_family-B8SVEKeMz6FnHkJbJVR11HOGD3TL9A.avif" },
  { href: "/products/sour-ribbon-tarts-blunt-2pk", name: "Sour Ribbon Tarts", type: "Sativa", description: "Zingy citrus, tangy candy, and a sugary fruity finish.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271901-sour_tart_ribbons_family-i2AdrAYqbcHMZCUbUeCezpyZHUMohB.avif" },
]

export default function Blunt2pkPage() {
  return <><AgeVerification /><Header /><main className="bg-white pt-16 lg:pt-20"><section className="bg-black px-6 py-20 text-center text-white"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">LUIGI Blunt 2pk</p><h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Two blunts. One iconic strain. Double the fun.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">Premium rosin-infused blunts made for sharing, saving, and savoring.</p></section><section className="mx-auto max-w-7xl px-6 py-14 lg:px-8"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <Link key={product.href} href={product.href} className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50"><div className="relative aspect-square"><Image src={product.image} alt={`LUIGI ${product.name} Rosin Infused ${product.type} Blunt 2-Pack`} fill className="object-contain p-6 transition-transform group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className="p-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">{product.type} blunt 2pk</p><h2 className="mt-2 text-2xl font-bold text-gray-950">{product.name}</h2><p className="mt-3 leading-7 text-gray-600">{product.description} 2.5g total. Just $30.</p><span className="mt-5 inline-flex rounded-full bg-black px-5 py-3 font-semibold text-white">View product, $30</span></div></Link>)}</div></section></main><Footer /></>
}
