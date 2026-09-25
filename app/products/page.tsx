import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Luigi Oil Products | 2G Disposables, Fattones & Rosin Pens",
  description: "Shop Luigi Oil products - Series 6 live resin 2G disposables, Fattones infused pre-roll packs, and hash rosin pens. Premium cannabis products for connoisseurs.",
  keywords: ["Luigi Oil products", "Luigi 2G disposable", "Luigi Fattones", "Luigi Rosin Pens", "Luigi Series 6", "Luigi live resin", "premium cannabis products"],
  twitter: { card: "summary_large_image", images: ["https://www.luigiofficialbrand.com/og-images/products.jpg"] },
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Luigi Oil Products | Premium Cannabis Collection",
    description: "Browse our complete collection of premium cannabis products including live resin disposables, infused pre-rolls, and hash rosin.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/products",
    images: [
      {
        url: "https://www.luigiofficialbrand.com/og-images/products.jpg",
        width: 1200,
        height: 630,
        alt: "Luigi Oil Products - Premium Cannabis Collection",
      },
    ],
  },
}

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Luigi Oil Products",
  "description": "Premium cannabis products from Luigi Oil",
  "url": "https://www.luigiofficialbrand.com/products",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Luigi Fattones",
        "url": "https://www.luigiofficialbrand.com/products/fattones"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Luigi Series 6",
        "url": "https://www.luigiofficialbrand.com/products/series-6"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Luigi Rosin Pens",
        "url": "https://www.luigiofficialbrand.com/products/rosin-pens"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Luigi Gummies",
        "url": "https://www.luigiofficialbrand.com/products/gummies"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "LUIGI Blunt 2pk",
        "url": "https://www.luigiofficialbrand.com/products/blunt-2pk"
      }
    ]
  }
}

const productCategories = [
  {
    name: "Fattones",
    description: "Premium pre-rolls crafted for the perfect experience",
    href: "/products/fattones",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg",
  },
  {
    name: "The Series 6 Collections",
    description: "Our signature live resin liquid diamond disposables",
    href: "/products/series-6",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg",
  },
  {
    name: "Rosin Pens",
    description: "Pure solventless rosin in convenient pen form",
    href: "/products/rosin-pens",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
  },
  {
    name: "Gummies",
    description: "Watermelon rosin gummies paired with a live resin preroll",
    href: "/products/gummies",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watermelon_joint-dTVzypY8deiJIBYR1SQIe0AdRfi346.avif",
  },
  {
    name: "Blunt 2pk",
    description: "Premium rosin-infused blunts in a two-pack format",
    href: "/products/blunt-2pk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-07HnZb3mtwe2oND1JfLyJDsrSgZyrY.avif",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-oMZQVjyU03LLT14RdPobSe9IbgQBM8.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Our Products
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Discover Luigi Oil&apos;s premium cannabis collection. Each product is crafted with care, 
                delivering exceptional flavor, potency, and experience.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Product Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-square relative bg-gray-200">
                    <Image
                src={category.image}
                      alt={category.name}
                width={800}
                height={600}
                
                className="object-contain p-4"
              />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
