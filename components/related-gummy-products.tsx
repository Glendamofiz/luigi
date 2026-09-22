import Image from "next/image"
import Link from "next/link"

const products = [
  { slug: "gummies/watermelon", name: "Watermelon Gummy Pack", type: "Indica gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789512159-watermelon_1_-IRbHAsWWr6YGRAsvzyI4NLUveXChLq.avif", alt: "LUIGI Watermelon Gummy Pack", description: "Sweet watermelon rosin gummies paired with a live resin preroll." },
  { slug: "strawberry-gummy-pack", name: "Strawberry Gummy Pack", type: "Sativa gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789514946-strawberry_1_-AjfecdHSswU06kEcllrUKiJDuqLCYH.avif", alt: "LUIGI Strawberry Gummy Pack", description: "Berry-forward rosin gummies paired with a Strawberry OG preroll." },
  { slug: "blue-berries-gummy-pack", name: "Blue Berries Gummy Pack", type: "Sativa gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789583518-blue_beries-01J7OcwNphj1liB08a5GKnv9G8hoW0.avif", alt: "LUIGI Blue Berries Gummy Pack", description: "Blueberry rosin gummies paired with a Blue Razz Lime preroll." },
  { slug: "caribbean-fruit-gummy-pack", name: "Caribbean Fruit Gummy Pack", type: "Indica gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789583174-caribbean_fruits_1___1_-0el80i5SNlRA91IuKKzd5DwyMY7Q8m.avif", alt: "LUIGI Caribbean Fruit Gummy Pack", description: "Tropical rosin gummies paired with a Blood Orange preroll." },
  { slug: "cherry-gummy-pack", name: "Cherry Gummy Pack", type: "Hybrid gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789582694-cherry_1_-ylzVNBAEyzA3Uf36Qv2WxBHzjK76zK.avif", alt: "LUIGI Cherry Gummy Pack", description: "Cherry rosin gummies paired with a Cherry Pie preroll." },
  { slug: "pineapple-gummy-pack", name: "Pineapple Gummy Pack", type: "Hybrid gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789582347-pineapple_1_-ag8lkqGYo8qPNWTM3xz3Rb3gfm3ko6.avif", alt: "LUIGI Pineapple Gummy Pack", description: "Pineapple rosin gummies paired with a Pineapple Diesel preroll." },
  { slug: "pink-lemonade-gummy-pack", name: "Pink Lemonade Gummy Pack", type: "Hybrid gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789582169-pink_lemonade_1_%20%281%29-5hMmyBdZXfQaXX7VK8GIZFXVH4WNk5.avif", alt: "LUIGI Pink Lemonade Gummy Pack", description: "Pink lemonade rosin gummies paired with a Blue Mist preroll." },
  { slug: "pomegranate-gummy-pack", name: "Pomegranate Gummy Pack", type: "Hybrid gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789581928-pomegranate-nrn3GwqzzJDaJ6YTPwiCO18sXAcX7n.avif", alt: "LUIGI Pomegranate Gummy Pack", description: "Pomegranate rosin gummies paired with a Honey Dew Melon preroll." },
  { slug: "raspberry-gummy-pack", name: "Raspberry Gummy Pack", type: "Indica gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789515190-raspberry_1_-y1tBshduwZe7fprbwksBatYOnPW84B.avif", alt: "LUIGI Raspberry Gummy Pack", description: "Raspberry rosin gummies paired with a BlackBerry Dream preroll." },
  { slug: "gummies/var-banana", name: "Var Banana Gummy Pack", type: "Banana gummy pack", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1789514648-variety_mix_1_-dskftRuIFx7LCb29jFn7LA6vblq6dj.avif", alt: "LUIGI Var Banana Gummy Pack", description: "Banana-forward rosin gummies paired with a live resin preroll." },
] as const

export function RelatedGummyProducts({ currentSlug }: { currentSlug: string }) {
  const related = products.filter((product) => product.slug !== currentSlug).slice(0, 4)

  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16 md:py-20" aria-labelledby="related-gummies-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D24]">Explore more</p>
        <h2 id="related-gummies-heading" className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">More LUIGI Gummies</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50"><Image src={product.image} alt={product.alt} fill className="object-contain p-4 transition duration-300 group-hover:scale-105" /></div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#B08D24]">{product.type}</p>
              <h3 className="mt-2 font-bold text-black">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between"><span className="font-bold text-black">$15.00</span><span className="text-sm font-semibold text-[#9A7818]">View product →</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
