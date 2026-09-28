import Link from "next/link"
import Script from "next/script"

const bluntProducts = [
  ["Peanut Butter Breath", "Hybrid", "peanut-butter-breath-blunt-2pk"],
  ["Berry Amarillo", "Indica", "berry-amarillo-blunt-2pk"],
  ["Casablanca Peach", "Indica", "casablanca-peach-blunt-2pk"],
  ["Citrus Mimosa", "Hybrid", "citrus-mimosa-blunt-2pk"],
  ["Donny Burger", "Hybrid", "donny-burger-blunt-2pk"],
  ["Garlic Glue", "Hybrid", "garlic-glue-blunt-2pk"],
  ["OG Reserve", "Indica", "og-reserve-blunt-2pk"],
  ["Sour Ribbon Tarts", "Sativa", "sour-ribbon-tarts-blunt-2pk"],
  ["Tangie Diesel", "Hybrid", "tangie-diesel-blunt-2pk"],
  ["Tropicana Gold", "Hybrid", "tropicana-gold-blunt-2pk"],
] as const

export function BluntProductLinks({ currentSlug, productName }: { currentSlug: string; productName: string }) {
  const currentUrl = `https://www.luigiofficialbrand.com/products/${currentSlug}`
  const related = bluntProducts.filter(([, , slug]) => slug !== currentSlug)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.luigiofficialbrand.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.luigiofficialbrand.com/products" },
      { "@type": "ListItem", position: 3, name: "Blunts", item: "https://www.luigiofficialbrand.com/products" },
      { "@type": "ListItem", position: 4, name: `${productName} Blunt 2-Pack`, item: currentUrl },
    ],
  }

  return <>
    <Script id={`breadcrumbs-${currentSlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6 text-sm text-gray-500 lg:px-8">
      <Link href="/" className="hover:text-black">Home</Link><span className="px-2">&gt;</span>
      <Link href="/products" className="hover:text-black">Products</Link><span className="px-2">&gt;</span>
      <Link href="/products" className="hover:text-black">Blunts</Link><span className="px-2">&gt;</span>
      <span aria-current="page" className="text-black">{productName}</span>
    </nav>
    <div className="mx-auto flex max-w-7xl px-6 pt-4 lg:px-8"><Link href="/products" className="font-semibold text-gray-700 underline underline-offset-4">Back to All Blunts</Link></div>
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-950">Shop Other Blunts</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map(([name, type, slug]) => <Link key={slug} href={`/products/${slug}`} className="rounded-xl border border-gray-200 p-5 transition-colors hover:border-gray-950"><span className="text-sm font-semibold uppercase tracking-wide text-gray-500">{type} blunt 2pk</span><span className="mt-2 block font-bold text-gray-950">{name}</span><span className="mt-1 block text-gray-600">$30.00</span></Link>)}
      </div>
    </section>
    <p className="mx-auto max-w-7xl px-6 pb-12 text-sm text-gray-600 lg:px-8">Looking for edibles instead? <Link href="/products/gummies" className="font-semibold underline underline-offset-4">Shop All LUIGI Gummy Packs →</Link></p>
  </>
}

export { bluntProducts }

// Internal category fallback: /products/blunts is not currently a route, so links intentionally use /products.
