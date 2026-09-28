import Image from "next/image"
import Link from "next/link"

const products = [
  ["peanut-butter-breath-blunt-2pk", "Peanut Butter Breath", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-C9f1QXq076kJTdiPfKBeQcdYgDQgP2.avif"],
  ["berry-amarillo-blunt-2pk", "Berry Amarillo", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790269924-berry_amarillo_family-XHqPtoIFbssAsb3BvPhh4Fqg7U71uz.avif"],
  ["casablanca-peach-blunt-2pk", "Casablanca Peach", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270278-casablanca_peach_family-GfW4hZCFY1G5SZb9CQjnzT5v8JPiAj.avif"],
  ["citrus-mimosa-blunt-2pk", "Citrus Mimosa", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270470-citrus_mimosa_family-algKiDA7gyKLwVm08CkT0xN28IC5uH.avif"],
  ["donny-burger-blunt-2pk", "Donny Burger", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790270690-donny_burger_family-UMW09pDhBUEVWgXjpAOpQXWdk4eC1F.avif"],
  ["garlic-glue-blunt-2pk", "Garlic Glue", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271010-garlic_glue_family-GxDwL54dLBLDzvYKi5SKnhvi4c2A7d.avif"],
  ["og-reserve-blunt-2pk", "OG Reserve", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271576-og_reserve_family-B8SVEKeMz6FnHkJbJVR11HOGD3TL9A.avif"],
  ["sour-ribbon-tarts-blunt-2pk", "Sour Ribbon Tarts", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271901-sour_tart_ribbons_family-i2AdrAYqbcHMZCUbUeCezpyZHUMohB.avif"],
  ["tangie-diesel-blunt-2pk", "Tangie Diesel", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790272714-tangie_diesel_family-HvETsC1udVjVTve1oV8AGT7iFRIq3o.avif"],
  ["tropicana-gold-blunt-2pk", "Tropicana Gold", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790272790-tropicana_gold_family-mMVq1NfDuyZ4CwqiZyTsQxvL0tSoal.avif"],
] as const
const articles = [
  ["/blog/best-infused-pre-rolls", "Best Infused Pre-Rolls", products[1][2]],
  ["/blog/infused-pre-rolls-vs-regular", "Infused Pre-Rolls vs. Regular", products[3][2]],
  ["/blog/how-to-open-a-luigi-preroll", "How to Open a LUIGI Preroll", products[7][2]],
] as const
function Card({ href, title, image, label }: { href: string; title: string; image: string; label: string }) { return <Link href={href} className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[4/3] bg-gray-100"><Image src={image} alt={`${title} LUIGI guide`} fill className="object-contain p-4 transition group-hover:scale-105" /></div><div className="p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7b16]">{label}</p><h3 className="mt-2 font-semibold text-gray-950 group-hover:underline">{title}</h3><span className="mt-2 inline-block text-sm text-gray-600">Explore more →</span></div></Link> }
export function BluntRelatedCards({ currentSlug }: { currentSlug: string }) { return <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8"><div className="mb-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a7b16]">LUIGI guides and products</p><h2 className="mt-2 text-3xl font-bold text-gray-950">Explore more rosin-infused blunts</h2><p className="mt-3 max-w-2xl leading-7 text-gray-600">Compare the rest of the LUIGI Blunt 2pk collection, then learn more about infused prerolls.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.filter(([slug]) => slug !== currentSlug).map(([slug, title, image]) => <Card key={slug} href={`/products/${slug}`} title={`${title} Blunt 2-Pack`} image={image} label="Product" />)}</div><h2 className="mt-14 text-3xl font-bold text-gray-950">Read the LUIGI preroll guides</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{articles.map(([href, title, image]) => <Card key={href} href={href} title={title} image={image} label="Article" />)}</div></section> }
