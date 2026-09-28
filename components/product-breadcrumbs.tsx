import Link from "next/link"
import Script from "next/script"

export function ProductBreadcrumbs({ productName, category = "blunt-2pk", categoryLabel = "Blunt 2pk" }: { productName: string; category?: string; categoryLabel?: string }) {
  return (
    <>
      <Script id={`breadcrumb-${productName.toLowerCase().replaceAll(" ", "-")}`} type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.luigiofficialbrand.com"},{"@type":"ListItem",position:2,name:"Products",item:"https://www.luigiofficialbrand.com/products"},{"@type":"ListItem",position:3,name:categoryLabel,item:`https://www.luigiofficialbrand.com/products/${category}`},{"@type":"ListItem",position:4,name:productName,item:`https://www.luigiofficialbrand.com/products/${productName.toLowerCase().replaceAll(" ", "-")}`}]})}</Script>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 pt-6 text-sm text-gray-500 lg:px-8">
      <Link href="https://www.luigiofficialbrand.com" className="hover:text-black">Home</Link>
      <span className="px-2">&gt;</span>
      <Link href="https://www.luigiofficialbrand.com/products" className="hover:text-black">Products</Link>
      <span className="px-2">&gt;</span>
      <Link href={`/products/${category}`} className="hover:text-black">{categoryLabel}</Link>
      <span className="px-2">&gt;</span>
      <span className="text-black">{productName}</span>
      </nav>
    </>
  )
}
