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
  title: "Luigi Series 6 | 2G Live Resin Liquid Diamond Vapes",
  description: "Shop Luigi Series 6 — premium 2G live resin liquid diamond disposables. Full-spectrum THC, bold flavors, no fillers. California's best THC disposable vape. Buy now.",
  keywords: ["Luigi Series 6", "Luigi 2G Disposable", "live resin liquid diamond", "Luigi disposable vape", "Luigi dual pack", "premium THC vape"],
  alternates: {
    canonical: "/products/series-6",
  },
  openGraph: {
    title: "Luigi Series 6 | 2G Live Resin Liquid Diamond Disposables",
    description: "Our signature live resin liquid diamond disposables paired with matching infused prerolls.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/products/series-6",
    images: [
      {
        url: "https://www.luigiofficialbrand.com/og-images/product-series-6.png",
        width: 1200,
        height: 630,
        alt: "Luigi Series 6 - 2G Live Resin Liquid Diamond Disposables",
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
    { "@type": "ListItem", "position": 3, "name": "Luigi Series 6", "item": "https://www.luigiofficialbrand.com/products/series-6" }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Luigi Series 6 2G Live Resin Liquid Diamond Disposables",
  "description": "Premium 2G live resin liquid diamond disposable vapes with matching half gram infused prerolls. Features advanced ceramic heating technology, 10+ strain options including Orange Lava Kush, Black Diesel Milk, and Rage Berry Blitz. Each dual pack includes 1x 1G live resin vape and 1x 0.5G infused preroll.",
  "brand": { "@type": "Brand", "name": "Luigi Oil" },
  "image": "https://www.luigiofficialbrand.com/images/products/series-6-hero.jpg",
  "url": "https://www.luigiofficialbrand.com/products/series-6",
  "sku": "LUIGI-SERIES6-001",
  "mpn": "SERIES6-2G-DUAL",
  "offers": {
    "@type": "Offer",
    "url": "https://www.luigiofficialbrand.com/products/series-6",
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
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const products = [
  {
    id: "orange-lava-kush-v6",
    name: "Orange Lava Kush V6",
    fullName: "Orange Lava Kush V6 Dual Pack",
    strain: "Hybrid",
    strainColor: "bg-teal-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Blood orange, low heat, and a slow melt. Calm that glows behind the eyes. Smooth, lasting, and quietly luxurious.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH_DEVICE--oZ0Z7sx0mNAW7toHPoGSnjDp2b5IBl.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH_CONE--fwnp4Y3jTszq0UcnPzaMfFM8xQ920C.jpg",
    effects: ["Relaxed", "Calm", "Happy"],
    flavors: ["Orange", "Citrus", "Earthy"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "green-gumbo-v6",
    name: "Green Gumbo V6",
    fullName: "Green Gumbo V6 Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Earthy, herbal, unhurried. Warmth without weight. The energy of a long evening with nowhere else to be.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO-FsO5mKMnUKggTXWXlxXCWGZJhcgsAe.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO_DEVICE--4PYlpyJZAhVdxtHgINSQMDKtPssQFN.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO_CONE--QIGNi5pVziPm6wuriXqHj8BSJ8nReL.jpg",
    effects: ["Relaxed", "Sleepy", "Calm"],
    flavors: ["Earthy", "Herbal", "Pine"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "rage-berry-blitz-v6",
    name: "Rage Berry Blitz V6",
    fullName: "Rage Berry Blitz V6 Dual Pack",
    strain: "Sativa",
    strainColor: "bg-red-500",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Dark berries with a lifted edge. Confident, steady, and a little electric. The kind of high that wakes up a room without saying much.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAGE%20BERRY%20BLITZ-GCT2ZrU29r093m0p4VxS1X2iiurhLs.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAGE-BERRY-BLITZ_DEVICE--z6rYcUBZEWG5pdztq9Aqor5z3XC8hx.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAGE-BERRY-BLITZ_CONE--c2zgyLIRbbAwwYyRNkRTJeVH3Ltmzb.jpg",
    effects: ["Energetic", "Uplifted", "Focused"],
    flavors: ["Berry", "Sweet", "Fruity"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "razor-thin-pine-v6",
    name: "Razor Thin Pine V6",
    fullName: "Razor Thin Pine V6 Dual Pack",
    strain: "Sativa-leaning Hybrid",
    strainColor: "bg-teal-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Cool pine and crisp air, sharp and refreshing from the first pull. Clear-minded, composed, and quietly energizing — like a deep breath in the mountains.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-34kB9GIvJRLjHMP1WeQONgybCUrzhy.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE_DEVICE--lOV4jnolQ3ZBlUvGCQnEbu9PbYeNLL.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE_CONE--9w13YB7OIPeDd44LPdff9qDNeEFrH1.jpg",
    effects: ["Clear-minded", "Energizing", "Focused"],
    flavors: ["Pine", "Crisp", "Fresh"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "black-diesel-milk-v6",
    name: "Black Diesel Milk V6",
    fullName: "Black Diesel Milk V6 Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Dark roast, diesel drip. Smooth like luxury, hits like rebellion. Perfect for late nights and louder thoughts.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK_DEVICE--MxrPv6enTVqlDXS9WlRJ9Xr9QqZmO0.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK_CONE--AfWG3NxRykiGAlNjn5wPNpVr5tdcDc.jpg",
    effects: ["Relaxed", "Sleepy", "Calm"],
    flavors: ["Diesel", "Coffee", "Earthy"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "sour-cran-smash-v6",
    name: "Sour Cran Smash V6",
    fullName: "Sour Cran Smash V6 Dual Pack",
    strain: "Sativa-leaning Hybrid",
    strainColor: "bg-teal-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sharp. Tart. Totally electric. Like a cranberry kiss with a spark behind it. Clears the fog and flips the switch to go-mode.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH-t66xVdGXwlSENfBW3BMO0oOAfGU81P.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH_DEVICE--KzMTfkaMeJUcqy4XCTG3OOxOHt2zCW.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOUR-CRAN-SMASH_CONE--Z7Kmk4mJgvEfclBAv0W3onYobZK9HS.jpg",
    effects: ["Energetic", "Uplifted", "Creative"],
    flavors: ["Cranberry", "Tart", "Sweet"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "plum-wreck-v6",
    name: "Plum Wreck V6",
    fullName: "Plum Wreck V6 Dual Pack",
    strain: "Sativa-dominant Hybrid",
    strainColor: "bg-red-500",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Lush stone-fruit meets turbo mode. Plum Wreck hits rich and regal, then flips the switch to creative chaos and snappy focus.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLUM-WRECK-tcbW8CFq5qrpcAWScaj3fMeCN9ceQD.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLUM-WRECK_DEVICE--9alC2JTgv4VSOrl4n2S3yge0bJt4zU.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLUM-WRECK_CONE--Gxh4Mxwm7ZI5so5dSmp9R9Bzcq8R4Y.jpg",
    effects: ["Creative", "Focused", "Uplifted"],
    flavors: ["Plum", "Stone Fruit", "Sweet"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "candy-corn-chaos-v6",
    name: "Candy Corn Chaos V6",
    fullName: "Candy Corn Chaos V6 Dual Pack",
    strain: "Sativa",
    strainColor: "bg-red-500",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sugar rush with a side of trouble. Creamy, candy-coated, and slightly unhinged—in the cutest possible way. Mood: Halloween forever.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS-kP3HV8etpcHRSci7NsF3tsDRvJgljE.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS_DEVICE--nXDOsyPaOzYhWBI5LjEtozCm5L3Ker.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS_CONE--wbqPIjmPp0yjIIKro21MmV2GVvYzko.jpg",
    effects: ["Energetic", "Happy", "Creative"],
    flavors: ["Candy", "Creamy", "Sweet"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "graveberry-kush-v6",
    name: "Graveberry Kush V6",
    fullName: "Graveberry Kush V6 Dual Pack",
    strain: "Indica",
    strainColor: "bg-purple-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A midnight berry dream with a velvet fade-out. Graveberry Kush wraps you in the taste of dark berry jam, fresh soil after rain, and a whisper of vanilla smoke. The kind of high that makes time slow, music feel deeper, and couches feel like clouds.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH-hKjxaitdO97OYTulXo3Qftf6pZ9EAW.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH_DEVICE--7LWrZxJJP3YZ8VU5Fe2ZeIr2wAXPd7.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH_CONE-qM34qWV2kDCutff3PoEZ1nn43RzL7b.jpg",
    effects: ["Relaxed", "Sleepy", "Calm"],
    flavors: ["Berry", "Earthy", "Vanilla"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  },
  {
    id: "hella-jam-v6",
    name: "Hella Jam V6",
    fullName: "Hella Jam V6 Dual Pack",
    strain: "Balanced Hybrid",
    strainColor: "bg-teal-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sun-warm jam on toast vibes—ripe fruit, soft sweetness, and a mellow groove that keeps the good times spreading. Perfect for golden-hour hangs.",
    description: "Each Luigi dual pack comes with a live resin, liquid diamond, and bubble hash infused 1 gram vape and matching half gram infused preroll.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM-6G53VNg20skDwZjj7jCXx1e2D2VbEC.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM_DEVICE--LORyRf8YB0bFGV5U1Sn6IDQcN1NOF5.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM_CONE--siXZz0hI6ysYY4LucBc7BC6ggWg65p.jpg",
    effects: ["Relaxed", "Happy", "Euphoric"],
    flavors: ["Fruit", "Sweet", "Jam"],
    contents: [
      "1x One Gram Live Resin Liquid Diamond Vape",
      "1x Half Gram Infused Preroll"
    ]
  }
]

export default function Series6Page() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg')" }}
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
                The Series 6 Collection
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our signature live resin liquid diamond disposables paired with matching infused prerolls. 
                Premium flavor, potency, and experience in every dual pack.
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
                        width={500}
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
                          V6 SERIES
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
                      
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

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

                  {/* Device & Cone Images */}
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                        <Image
                          src={product.deviceImage}
                          alt={`${product.name} Vape Device`}
                          width={300}
                          height={400}
                          className="object-contain max-h-[300px] w-auto mb-4"
                        />
                        <p className="text-sm font-semibold text-gray-900">1G Live Resin Liquid Diamond Vape</p>
                      </div>
                      <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                        <Image
                          src={product.coneImage}
                          alt={`${product.name} Infused Preroll`}
                          width={300}
                          height={400}
                          className="object-contain max-h-[300px] w-auto mb-4"
                        />
                        <p className="text-sm font-semibold text-gray-900">0.5G Infused Preroll</p>
                      </div>
                    </div>
                  </div>

                  {/* What's Inside */}
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="bg-black text-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3">Each V6 Dual Pack includes:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {product.contents.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[#D4AF37] mt-4 text-sm font-medium">
                        Live resin, liquid diamond, and bubble hash infused. Premium experience guaranteed.
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
