import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { AddToCartButton } from "@/components/add-to-cart-button"

export const metadata: Metadata = {
  title: "Luigi Rosin Pens | Solventless Hash Rosin Dual Packs",
  description: "Shop Luigi rosin pens — premium solventless hash rosin dual packs with no solvents, no fillers. Pure, potent, and strain-specific. California's top rosin pen brand.",
  keywords: ["Luigi Rosin Pen", "hash rosin vape", "solventless rosin", "Luigi rosin dual pack", "premium rosin disposable", "live rosin vape"],
  alternates: {
    canonical: "/products/rosin-pens",
  },
  openGraph: {
    title: "Luigi Rosin Pens | Premium Solventless Hash Rosin",
    description: "Pure solventless rosin in dual packs - vape device + infused blunt.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/products/rosin-pens",
    images: [
      {
        url: "https://www.luigiofficialbrand.com/og-images/product-rosin-pens.png",
        width: 1200,
        height: 630,
        alt: "Luigi Rosin Pens - Premium Solventless Hash Rosin",
      },
    ],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.luigiofficialbrand.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.luigiofficialbrand.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Luigi Rosin Pens", "item": "https://www.luigiofficialbrand.com/products/rosin-pens" }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Luigi Rosin Dual Packs - Premium Solventless Hash Rosin",
  "description": "Premium solventless hash rosin dual packs featuring 1G rosin disposable vape and 1G rosin infused blunt. Available in 10 strains including OG Reserve, Garlic Glue, and Peanut Butter Breath. Pure solventless extraction for the cleanest, most flavorful experience.",
  "brand": { "@type": "Brand", "name": "Luigi Oil" },
  "image": "https://www.luigiofficialbrand.com/images/products/rosin-pens-hero.jpg",
  "url": "https://www.luigiofficialbrand.com/products/rosin-pens",
  "sku": "LUIGI-ROSIN-001",
  "mpn": "ROSIN-DUAL-1G",
  "offers": {
    "@type": "Offer",
    "url": "https://www.luigiofficialbrand.com/products/rosin-pens",
    "priceCurrency": "USD",
    "price": "30",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Luigi Oil" },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": "0",
          "maxValue": "1",
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": "1",
          "maxValue": "3",
          "unitCode": "DAY"
        }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "US",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": "14",
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "itemCondition": "https://schema.org/NewCondition"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "125",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const products = [
  {
    id: "og-reserve-v1",
    name: "OG Reserve V1",
    fullName: "OG Reserve V1 Rosin Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    strainProfile: "OG Kush",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Pure, timeless OG character. Earthy pine and lemon peel ride alongside that unmistakable gassy finish. Balanced, powerful, and forever iconic—this is OG the way it's meant to be.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Earthy pine, lemon rind, classic gas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png",
    effects: ["Relaxed", "Happy", "Giggly"],
    flavors: ["Earthy", "Strawberry", "Lemon"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "casablanca-peach-v1",
    name: "Casablanca Peach V1",
    fullName: "Casablanca Peach V1 Rosin Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    strainProfile: "Peach Ringz × Gelato",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Lush, smooth, and refined. Ripe peach sweetness melts into creamy undertones with a gentle floral lift. Elegant and flavorful, this one feels sun-drenched and indulgent.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Juicy peach, soft cream, light floral sweetness",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASABLANCA-PEACH-2400x2400-PUZfpFgzkhH327g6CU6so3dRABrdPl.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASABLANCA-PEACH-2400x2400-PUZfpFgzkhH327g6CU6so3dRABrdPl.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASABLANCA-PEACH-2400x2400-PUZfpFgzkhH327g6CU6so3dRABrdPl.png",
    effects: ["Relaxed", "Happy", "Calm"],
    flavors: ["Peach", "Cream", "Floral"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "tangie-diesel-v1",
    name: "Tangie Diesel V1",
    fullName: "Tangie Diesel V1 Rosin Dual Pack",
    strain: "Hybrid",
    strainColor: "bg-teal-600",
    strainProfile: "Sour Diesel",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A timeless classic in rosin form. Piercing diesel notes are balanced with fresh lemon zest and a crisp herbal finish. Clean, energizing, and instantly recognizable.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Sharp diesel, lemon zest, clean herbal edge",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-ZIQ3smR1vonMKGzZn3eWy0OlHxF9YE.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-ZIQ3smR1vonMKGzZn3eWy0OlHxF9YE.jpg",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-ZIQ3smR1vonMKGzZn3eWy0OlHxF9YE.jpg",
    effects: ["Happy", "Uplifted", "Relaxed"],
    flavors: ["Diesel", "Lemon", "Citrus"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "garlic-glue-v1",
    name: "Garlic Glue V1",
    fullName: "Garlic Glue V1 Rosin Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    strainProfile: "GMO × Gorilla Glue",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Bold and deeply aromatic. Garlic-forward funk collides with earthy pine and classic Glue gas, creating a powerful and unmistakable profile. Sticky, savory, and unapologetically loud.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Pungent garlic, earthy pine, heavy fuel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GARLIC-GLUE-2400x2400-xKXyqIm8nQMrx1JULcPLke7bxNpWKc.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GARLIC-GLUE-2400x2400-xKXyqIm8nQMrx1JULcPLke7bxNpWKc.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GARLIC-GLUE-2400x2400-xKXyqIm8nQMrx1JULcPLke7bxNpWKc.png",
    effects: ["Relaxed", "Sleepy", "Calm"],
    flavors: ["Garlic", "Pine", "Fuel"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "berry-amarillo-v1",
    name: "Berry Amarillo V1",
    fullName: "Berry Amarillo V1 Rosin Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    strainProfile: "Berry × Amarillo",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sweet and tropical with a berry twist. Ripe berries blend with bright mango notes for a fruity, relaxing experience that's as flavorful as it is soothing.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Mixed berries, tropical mango, sweet finish",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BERRY-AMARILLO-2400x2400-BxsAeWKNTMWRweUjdKqbuHdptlnho7.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BERRY-AMARILLO-2400x2400-BxsAeWKNTMWRweUjdKqbuHdptlnho7.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BERRY-AMARILLO-2400x2400-BxsAeWKNTMWRweUjdKqbuHdptlnho7.png",
    effects: ["Relaxed", "Uplifted", "Happy"],
    flavors: ["Berry", "Mango", "Tropical"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "sour-tart-ribbons-v1",
    name: "Sour Tart Ribbons V1",
    fullName: "Sour Tart Ribbons V1 Rosin Dual Pack",
    strain: "Sativa",
    strainColor: "bg-red-500",
    strainProfile: "Sour Diesel × Zkittlez",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A playful clash of sour and sweet. Tangy citrus and tart candy notes lead the charge, balanced by a subtle gassy backbone. Bright, layered, and surprisingly smooth with a clean rosin finish.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Sharp citrus sour, candy sweetness, light gas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH-2400x2400-1CO56NsICn0LVZyioVpOMyqkXZ30s2.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH-2400x2400-1CO56NsICn0LVZyioVpOMyqkXZ30s2.jpg",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH-2400x2400-1CO56NsICn0LVZyioVpOMyqkXZ30s2.jpg",
    effects: ["Happy", "Uplifted", "Relaxed"],
    flavors: ["Diesel", "Lemon", "Citrus"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "donny-burger-v1",
    name: "Donny Burger V1",
    fullName: "Donny Burger V1 Rosin Dual Pack",
    strain: "Hybrid",
    strainColor: "bg-teal-600",
    strainProfile: "GMO × Han Solo Burger",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Not for the faint of heart. Donny Burger brings bold garlic, savory funk, and classic GMO gas wrapped in a smooth rosin profile. Loud, unapologetic, and deeply satisfying for true connoisseurs.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Garlic funk, umami earth, fuel-forward finish",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DONNY-BURGER-2400x2400-jXvOMNUqHw9WKe1yfU1yo9POscgDRd.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DONNY-BURGER-2400x2400-jXvOMNUqHw9WKe1yfU1yo9POscgDRd.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DONNY-BURGER-2400x2400-jXvOMNUqHw9WKe1yfU1yo9POscgDRd.png",
    effects: ["Relaxed", "Happy", "Tingly"],
    flavors: ["Cheese", "Earthy", "Pungent"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "peanut-butter-breath-v1",
    name: "Peanut Butter Breath V1",
    fullName: "Peanut Butter Breath V1 Rosin Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    strainProfile: "Peanut Butter Breath",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Deep, rich, and indulgent. This rosin expression delivers nutty roasted peanut flavors layered with creamy earth and a quiet diesel finish. Smooth and savory with a heavy-hitting, slow-burn character.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Roasted peanut, earthy cream, subtle diesel funk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PEANUT-BUTTER-BREATH-2400x2400-iPktMdVwCpQdAn8qPNR6p3M7FJkMSa.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PEANUT-BUTTER-BREATH-2400x2400-iPktMdVwCpQdAn8qPNR6p3M7FJkMSa.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PEANUT-BUTTER-BREATH-2400x2400-iPktMdVwCpQdAn8qPNR6p3M7FJkMSa.png",
    effects: ["Relaxed", "Happy", "Giggly"],
    flavors: ["Nutty", "Earthy", "Woody"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "citrus-mimosa-v1",
    name: "Citrus Mimosa V1",
    fullName: "Citrus Mimosa V1 Rosin Dual Pack",
    strain: "Hybrid",
    strainColor: "bg-teal-600",
    strainProfile: "Mimosa",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A celebratory citrus strain that hits clean and uplifting. Juicy tangerine and lemon zest shine up front, finished with a crisp, effervescent edge reminiscent of a morning mimosa. Bright, refreshing, and effortlessly smooth.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Sparkling tangerine, lemon zest, crisp champagne notes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-luG6baGQNLuVJsAQYF4iTwIGkq3ZeI.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-luG6baGQNLuVJsAQYF4iTwIGkq3ZeI.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-luG6baGQNLuVJsAQYF4iTwIGkq3ZeI.png",
    effects: ["Happy", "Relaxed"],
    flavors: ["Citrus", "Orange", "Tropical"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  },
  {
    id: "tropicana-gold-v1",
    name: "Tropicana Gold V1",
    fullName: "Tropicana Gold V1 Rosin Dual Pack",
    strain: "Hybrid",
    strainColor: "bg-teal-600",
    strainProfile: "Tropicana Cookies",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A radiant citrus-forward rosin with unmistakable Tropicana Cookies DNA. Bursting with fresh-squeezed orange, subtle sweetness, and a light floral funk that lingers on the exhale. Vibrant, smooth, and unapologetically golden.",
    description: "NEW from Luigi! Our Rosin Dual Pack delivers the best of both worlds - a premium rosin vape device paired with an additional 1-gram infused blunt. Two ways to enjoy the same high-quality experience, all in one pack. No compromises.",
    flavorProfile: "Bright blood orange, candied citrus peel, soft floral funk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png",
    cigarImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TROPICANA-GOLD-2400x2400-TAYe3vXWG9Af3nTW9SFzeScdo4Ctel.png",
    effects: ["Uplifted", "Happy", "Energetic"],
    flavors: ["Citrus", "Tropical", "Orange"],
    contents: [
      "1x One Gram Rosin Disposable",
      "1x One Gram Rosin Infused Blunt"
    ]
  }
]

export default function RosinPensPage() {
  return (
<>
  <Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
  />
  <Script
  id="product-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
<section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-2400x2400-OA10oIBvKBToWVDytXhwa5JPGI0xCU.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Rosin Pens
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Premium solventless hash rosin dual packs. Each pack includes a 1G rosin disposable 
                and 1G rosin infused blunt for the cleanest vape experience.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {products.map((product) => (
              <div key={product.id} className="mb-12 last:mb-0">
                {/* Product Card */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  {/* Product Header */}
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
                    {/* Product Image */}
                    <div className="flex items-center justify-center bg-white rounded-xl p-6">
                      <Image
                        src={product.image}
                        alt={product.fullName}
                        width={400}
                        height={500}
                        className="object-contain max-h-[400px] w-auto"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`${product.strainColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                          {product.strain}
                        </span>
                        <span className="bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {product.fullName}
                      </h2>
                      
                      <p className="text-[#D4AF37] font-medium mb-4">
                        {product.tagline}
                      </p>

                      {/* Effects */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.effects.map((effect, index) => (
                          <span key={index} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                            {effect}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>

                      {/* Strain & Flavor Profile */}
                      <div className="bg-white rounded-xl p-4 mb-4">
                        <div className="mb-3">
                          <span className="text-sm font-semibold text-gray-900">Strain Profile:</span>
                          <span className="text-sm text-gray-600 ml-2">{product.strainProfile}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">Flavor Profile:</span>
                          <span className="text-sm text-gray-600 ml-2">{product.flavorProfile}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 italic mb-6">
                        {product.shortDescription}
                      </p>

                      {/* Price and Add to Cart */}
                      <div className="mt-4">
                        <AddToCartButton 
                          product={{
                            id: product.id,
                            name: product.name,
                            fullName: product.fullName,
                            image: product.image,
                          }}
                          price="$30"
                          priceNumber={30}
                          perUnit="per unit"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Device & Cigar Images */}
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                        <Image
                          src={product.deviceImage}
                          alt={`${product.name} Rosin Device`}
                          width={300}
                          height={400}
                          className="object-contain max-h-[300px] w-auto mb-4"
                        />
                        <p className="text-sm font-semibold text-gray-900">1G Rosin Disposable</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                        <Image
                          src={product.cigarImage}
                          alt={`${product.name} Infused Blunt`}
                          width={300}
                          height={400}
                          className="object-contain max-h-[300px] w-auto mb-4"
                        />
                        <p className="text-sm font-semibold text-gray-900">1G Rosin Infused Blunt</p>
                      </div>
                    </div>
                  </div>

                  {/* What's Inside */}
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="bg-black text-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3">Each Dual Pack includes:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {product.contents.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[#D4AF37] mt-4 text-sm font-medium">
                        Twice the fun. Enjoy frequently and responsibly.
                      </p>
                    </div>
                  </div>

                  {/* Flavors */}
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Flavors</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor, index) => (
                        <span key={index} className="bg-[#D4AF37]/10 text-[#B8960C] text-sm font-medium px-4 py-2 rounded-full">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
