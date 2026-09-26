import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  ["acapulco-gold-aio-dual-pack", "Acapulco Gold AIO Dual Pack", "Sativa", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790013755-mexico_city_family-YROupYzATIAGnoHEHdzEkN11s8U5tB.avif"],
  ["bubblegum-kush-aio-dual-pack", "Bubblegum Kush AIO Dual Pack", "Hybrid", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790013959-hollywood_family-lvflB1XEERxiqSzFHOlWKfWqmMU63x.avif"],
  ["bullet-trainwreck-aio-dual-pack", "Bullet Trainwreck AIO Dual Pack", "Sativa", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790014410-tokyo_family-echqNcZhLenruPxCk3vPoCRQYx3GXt.avif"],
  ["eiffel-lights-aio-dual-pack", "Eiffel Lights AIO Dual Pack", "Hybrid", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790015070-paris_family-38y4dcaon4oUuTYvnfIp9FWpRo24Xz.avif"],
  ["green-crack-aio-dual-pack", "Green Crack AIO Dual Pack", "Sativa", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790014557-singapore_family-BpZS90ksyS4kyyqGqEnZOh7E2vkyhq.avif"],
  ["manhattan-midnight-aio-dual-pack", "Manhattan Midnight AIO Dual Pack", "Hybrid", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790013592-new_york_family-xQxSK50iaUFDFMh4z6z4VIECReNuBD.avif"],
  ["private-reserve-aio-dual-pack", "Private Reserve AIO Dual Pack", "Hybrid", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790014743-dubai_family-K8QzPho5h62yKJ2WyjX7PgDo7F4gAN.avif"],
  ["thai-blaze-aio-dual-pack", "Thai Blaze AIO Dual Pack", "Sativa", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790013166-bangkok_family-d9nkzceWmOdUd52nc23FXNKGtqMa6M.avif"],
] as const

export const metadata = { title: "LRLD AIO | LUIGI Live Resin Liquid Diamond AIO Packs", description: "Shop LUIGI live resin liquid diamond AIO dual packs with infused prerolls." }
export default function LrldAioPage() { return <><Header /><main className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">LUIGI products</p><h1 className="mt-3 text-5xl font-bold text-gray-950">LRLD AIO</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">Live Resin Liquid Diamond AIO packs made for bright flavor and easy sessions. Each dual pack pairs a 1G disposable with a 0.5G infused preroll.</p><div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{products.map(([slug, name, type, image]) => <Link key={slug} href={`/products/${slug}`} className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50"><div className="relative aspect-square"><Image src={image} alt={`LUIGI ${name}`} fill className="object-contain p-6 transition-transform group-hover:scale-105" /></div><div className="p-7"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">{type} · $30</p><h2 className="mt-2 text-3xl font-bold text-gray-950">{name}</h2><p className="mt-3 leading-7 text-gray-600">1G live resin liquid diamond disposable plus a 0.5G infused preroll. Just $30.</p><span className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white">View product</span></div></Link>)}</div></main><Footer /></> }
