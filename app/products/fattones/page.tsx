import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"

export const metadata: Metadata = {
  title: "Luigi Fattones | Infused Pre-Rolls & Hash Rosin Packs",
  description: "Shop Luigi Fattones — premium infused pre-rolls and 4-in-1 hash rosin packs. Live resin liquid diamonds in every pull. California's best infused pre-roll brand.",
  keywords: ["Luigi Fattones", "Luigi prerolls", "infused pre-rolls", "hash rosin joints", "Luigi gummies", "premium cannabis packs", "glass tip blunt"],
  twitter: { card: "summary_large_image", images: ["https://www.luigiofficialbrand.com/og-images/products-fattones.jpg"] },
  alternates: {
    canonical: "/products/fattones",
  },
  openGraph: {
    title: "Luigi Fattones | Premium Infused Pre-Roll Packs",
    description: "4-in-1 packs with glass-tip blunts, hash rosin infused prerolls, and gummies.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/products/fattones",
    images: [
      {
        url: "https://www.luigiofficialbrand.com/og-images/products-fattones.jpg",
        width: 1200,
        height: 630,
        alt: "Luigi Fattones - Premium Infused Pre-Roll Packs",
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
    { "@type": "ListItem", "position": 3, "name": "Luigi Fattones", "item": "https://www.luigiofficialbrand.com/products/fattones" }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Luigi Fattones 4-in-1 Collection",
  "description": "Premium 4-in-1 cannabis packs featuring glass-tip blunts, hash rosin infused prerolls, mini joints, and THC-infused gummies. Available in 10 flavors including Cherry Pie, Watermelon, and Blue Razz Lime. Each pack contains 1g glass tip blunt, 2x 1g hash rosin joints, 4x 0.5g mini joints, and 6x 10mg infused gummies.",
  "brand": { "@type": "Brand", "name": "Luigi Oil" },
  "image": "https://www.luigiofficialbrand.com/images/products/fattone-cherry-pie.jpg",
  "url": "https://www.luigiofficialbrand.com/products/fattones",
  "sku": "LUIGI-FATTONES-001",
  "mpn": "FATTONES-4IN1",
  "offers": {
    "@type": "Offer",
    "url": "https://www.luigiofficialbrand.com/products/fattones",
    "priceCurrency": "USD",
    "price": "35",
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
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const products = [
  {
    id: "cherry-pie",
    name: "Cherry Pie",
    fullName: "Cherry Pie 4-in-1 Fattone",
    thc: "35.33%",
    potency: "High Potency",
    strain: "Hybrid",
    strainColor: "bg-pink-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sweet meets tart in this hybrid. Cherry and pastry notes give way to subtle spicy herbal undertones, pairing well with balanced effects that elevate mood and ease tension.",
    description: "Satisfy your cravings with the Luigi Fattones Pack – Cherry Pie, a deliciously balanced hybrid experience that blends rich flavor with potent effects. Whether you're lighting up or snacking down, this pack delivers everything you need for a smooth, flavorful session.",
    image: "/images/products/fattone-cherry-pie.jpg",
    familyImage: "/images/products/fattone-cherry-pie-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium hybrid flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a touch of luxury." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Infused with solventless hash rosin, these full-size joints offer a powerful, clean burn with enhanced effects and the sweet, tart taste of Cherry Pie." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Small but mighty, these minis are perfect for quick hits or sharing. Each one is infused with hash rosin for a potent punch in a compact form." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and bursting with cherry pie flavor, these gummies are infused with premium hash for a consistent, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "blackberry-dream",
    name: "Blackberry Dream",
    fullName: "Blackberry Dream 4-in-1 Fattone",
    thc: "38.71%",
    potency: "High Potency",
    strain: "Indica",
    strainColor: "bg-purple-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Deep berry aroma with juicy blackberry and earthy cream. This indica-lean profile offers rich flavor and gentle, dreamy relaxation without heavy sedation.",
    description: "Indulge in the dreamiest blend of flavor and firepower with the Luigi Fattones Pack – Blackberry Dream Edition. This hybrid strain delivers a balanced high that's perfect for any time of day, wrapped in the luscious taste of ripe blackberries with a creamy, dreamy finish.",
    image: "/images/products/fattone-blackberry-dream.jpg",
    familyImage: "/images/products/fattone-blackberry-dream-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium flower rolled to perfection and finished with a glass tip for ultra-smooth hits and elevated style." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Each joint is infused with potent, solventless hash rosin, amplifying the effects and flavor of the Blackberry Dream." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Compact, convenient, and powerful—these minis are perfect for solo sessions or sharing the dream." },
      { item: "6 x Hash Infused Gummies", description: "Bursting with juicy blackberry flavor and infused with high-quality hash, these gummies offer a deliciously mellow edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "banana-gelato",
    name: "Banana Gelato",
    fullName: "Banana Gelato 4-in-1 Fattone",
    thc: "37%",
    potency: "High Potency",
    strain: "Hybrid",
    strainColor: "bg-yellow-500",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Creamy dessert vibes of banana and gelato sweetness with subtle vanilla and tropical overtones. This hybrid flavor is smooth and layered, with a balanced, calming uplift.",
    description: "Step into the world of bold flavor and premium potency with the Luigi Fattones Pack, a curated collection of infused delights designed for the true connoisseur. This Banana Gelato edition blends creamy banana sweetness with icy gelato vibes, delivering a smooth, tropical experience in every hit and bite.",
    image: "/images/products/fattone-banana-gelato.jpg",
    familyImage: "/images/products/fattone-banana-gelato-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A handcrafted, slow-burning blunt packed with 1 gram of top-shelf flower, finished with a reusable glass tip for a smooth, flavorful draw every time." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Each joint is infused with premium solventless hash rosin, enhancing the potency and flavor profile of the Banana Gelato. Expect a powerful, euphoric high with a creamy banana finish." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Perfect for quick sessions or sharing, these minis pack a punch with hash rosin infusion and rich Banana Gelato flavor." },
      { item: "5 x Hash Infused Gummies", description: "Deliciously chewy and bursting with Banana Gelato flavor, each gummy is infused with high-quality hash for a consistent, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "watermelon",
    name: "Watermelon",
    fullName: "Watermelon 4-in-1 Fattone",
    thc: "40.34%",
    potency: "High Potency",
    strain: "Indica",
    strainColor: "bg-green-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Indica-lean and luscious, Watermelon delivers ripe watermelon sweetness and cooling, fruity freshness. Its rich fruit character pairs with relaxing effects ideal for winding down.",
    description: "Kick back and chill with the Luigi Fattones Pack – Watermelon, a juicy indica collection crafted for deep relaxation and bold flavor. Infused with premium hash rosin and bursting with refreshing watermelon goodness, this pack is your go-to for unwinding in style.",
    image: "/images/products/fattone-watermelon.jpg",
    familyImage: "/images/products/fattone-watermelon-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of top-shelf indica flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a luxurious smoking experience." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "These full-size joints are infused with solventless hash rosin, delivering a heavy-hitting high and the crisp, fruity taste of watermelon." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Perfect for solo sessions or sharing, these minis offer a potent punch in a compact form, with rich flavor and relaxing effects." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and packed with watermelon flavor, these gummies are infused with premium hash for a smooth, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "honeydew-melon",
    name: "Honeydew Melon",
    fullName: "Honeydew Melon 4-in-1 Fattone",
    thc: "37.73%",
    potency: "High Potency",
    strain: "Hybrid",
    strainColor: "bg-orange-500",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Refreshing and juicy, this hybrid leans on honeydew and melon sweetness with soft herbal accents. It's a smooth, mellow smoke that conjures easygoing vibes and soft, full-body warmth.",
    description: "Drift into mellow vibes and juicy flavor with the Luigi Fattones Pack – Honeydew Melon. This hybrid collection blends smooth potency with the refreshing sweetness of ripe honeydew, delivering a balanced high across smokeable and edible formats.",
    image: "/images/products/fattone-honeydew-melon.jpg",
    familyImage: "/images/products/fattone-honeydew-melon-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium hybrid flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a clean, elevated experience." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Infused with solventless hash rosin, these full-size joints offer a rich, flavorful burn and a powerful hybrid high with a honeydew twist." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Compact and convenient, these minis are perfect for quick sessions or sharing. Each one is infused with hash rosin for a potent, flavorful punch." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and bursting with juicy honeydew melon flavor, these gummies are infused with premium hash for a smooth, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "blood-orange",
    name: "Blood Orange",
    fullName: "Blood Orange 4-in-1 Fattone",
    thc: "39.52%",
    potency: "High Potency",
    strain: "Indica",
    strainColor: "bg-red-600",
    tagline: "Indica Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Citrus-forward and tangy, Blood Orange offers a zesty orange peel aroma with subtle earth and spice. This indica-lean profile brings soothing relaxation balanced with bright sweet notes.",
    description: "Unwind with bold citrus vibes—introducing the Luigi Fattones Pack – Blood Orange, a zesty indica collection crafted for deep relaxation and vibrant flavor. Infused with premium hash rosin and bursting with tangy-sweet blood orange goodness, this pack is your ticket to chilling in style.",
    image: "/images/products/fattone-blood-orange.jpg",
    familyImage: "/images/products/fattone-blood-orange-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of top-shelf indica flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a luxe smoking experience." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "These full-size joints are infused with solventless hash rosin, delivering a heavy-hitting high and the bright, citrusy taste of blood orange." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Perfect for solo sessions or sharing, these minis pack a potent punch in a compact form, with rich flavor and deeply relaxing effects." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and bursting with blood orange flavor, these gummies are infused with premium hash for a smooth, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "strawberry-og",
    name: "Strawberry OG",
    fullName: "Strawberry OG 4-in-1 Fattone",
    thc: "40.77%",
    potency: "High Potency",
    strain: "Sativa",
    strainColor: "bg-red-500",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Sweet berry and creamy funk define this sativa-lean classic. Juicy strawberry and herbal undertones make it approachable with an energetic, mood-elevating cerebral lift.",
    description: "Classic meets juicy in the Luigi Fattones Pack – Strawberry OG, a bold sativa blend that delivers earthy OG power with a burst of ripe strawberry sweetness. Whether you're lighting up or snacking down, this pack is built for flavor, potency, and versatility.",
    image: "/images/products/fattone-strawberry-og.jpg",
    familyImage: "/images/products/fattone-strawberry-og-family.jpg",
    effects: ["Relaxed", "Energetic", "Happy"],
    flavors: ["Strawberry", "Berry", "Earthy"],
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium hybrid flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a refined smoking experience." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Infused with solventless hash rosin, these full-size joints offer a powerful, clean burn with the sweet and skunky punch of Strawberry OG." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Compact and convenient, these minis are perfect for solo sessions or sharing. Each one is infused with hash rosin for a potent, flavorful hit." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and bursting with strawberry OG flavor, these gummies are infused with premium hash for a consistent, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "pineapple-diesel",
    name: "Pineapple Diesel",
    fullName: "Pineapple Diesel 4-in-1 Fattone",
    thc: "39.32%",
    potency: "High Potency",
    strain: "Hybrid",
    strainColor: "bg-yellow-600",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Tropical pineapple meets sharp diesel spice in this hybrid. Expect sweet fruit balanced with fuel-forward notes, delivering a bold aroma and a dynamic, balanced high.",
    description: "Fuel your vibe with the tropical tang and gassy punch of the Luigi Fattones Pack – Pineapple Diesel. This hybrid collection is crafted for those who crave flavor-forward intensity and versatile formats—all infused with premium hash rosin and bursting with Pineapple Diesel goodness.",
    image: "/images/products/fattone-pineapple-diesel.jpg",
    familyImage: "/images/products/fattone-pineapple-diesel-family.jpg",
    effects: ["Euphoric", "Happy"],
    flavors: ["Diesel", "Pineapple", "Citrus"],
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of top-shelf hybrid flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a premium feel." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "These full-size joints are infused with solventless hash rosin, delivering a powerful high and the bold, tropical-fuel flavor of Pineapple Diesel." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Perfect for quick sessions or sharing, these minis pack a punch with hash rosin infusion and a sharp, fruity aroma." },
      { item: "6 x Hash Infused Gummies", description: "Juicy, tangy, and gassy—these Pineapple Diesel gummies are infused with high-quality hash for a consistent, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "blue-razz-lime",
    name: "Blue Razz Lime",
    fullName: "Blue Razz Lime 4-in-1 Fattone",
    thc: "42.25%",
    potency: "High Potency",
    strain: "Sativa",
    strainColor: "bg-blue-500",
    tagline: "Sativa Strain | Flavor-Infused | Premium Experience",
    shortDescription: "Bright and tart, this sativa-lean flavor bursts with blue raspberry and lime zest. Its lively profile drives an uplifting, energetic head high with citrusy sweetness and a clean finish.",
    description: "Get ready to elevate your sessions with the Luigi Fattones Pack – Blue Razz Lime, a bold fusion of tangy citrus and sweet berry wrapped around a perfectly sativa high. Whether you're lighting up or snacking down, this pack delivers flavor, potency, and versatility in one unforgettable experience.",
    image: "/images/products/fattone-blue-razz-lime.jpg",
    familyImage: "/images/products/fattone-blue-razz-lime-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium hybrid flower, hand-rolled and finished with a sleek glass tip for smooth, flavorful hits and a touch of luxury." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Crafted with top-tier flower and infused with solventless hash rosin, these full-size joints offer a powerful, clean burn with enhanced effects and rich Blue Raspberry Lime flavor." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Small but mighty, these minis are perfect for quick hits or sharing. Each one is infused with hash rosin for a potent punch in a compact form." },
      { item: "6 x Hash Infused Gummies", description: "Sweet, tart, and irresistibly juicy—these Blue Raspberry Lime gummies are infused with premium hash for a consistent, long-lasting edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  },
  {
    id: "blue-mist",
    name: "Blue Mist",
    fullName: "Blue Mist 4-in-1 Fattone",
    thc: "39.86%",
    potency: "High Potency",
    strain: "Hybrid",
    strainColor: "bg-sky-500",
    tagline: "Hybrid Strain | Flavor-Infused | Premium Experience",
    shortDescription: "A balanced hybrid with blueberry and vanilla sweetness, grounded by subtle earthy undertones. Expect a smooth, mellow draw with floral fruitiness and gentle uplift — perfect for relaxed afternoons or creative hangs.",
    description: "Treat yourself to a smooth, flavorful ride with the Luigi Fattones Pack – Blue Mist. This hybrid strain blend is crafted for balance, offering a mellow yet uplifting experience wrapped in the rich, creamy sweetness of blueberry and vanilla.",
    image: "/images/products/fattone-blue-mist.jpg",
    familyImage: "/images/products/fattone-blue-mist-family.jpg",
    contents: [
      { item: "1g Glass Tip Blunt", description: "A full gram of premium flower, hand-rolled and finished with a sleek glass tip for a clean, cool draw and elevated smoking experience." },
      { item: "2 x 1g Hash Rosin Infused Preroll Joints", description: "Infused with potent, solventless hash rosin, these full-size prerolls deliver a smooth, flavorful burn with a powerful hybrid high." },
      { item: "4 x 0.5g Hash Rosin Infused Mini Joints", description: "Perfect for quick sessions or sharing, these minis are small but mighty—packed with flavor and potency." },
      { item: "6 x Hash Infused Gummies", description: "Soft, chewy, and bursting with blueberry vanilla flavor, each gummy is infused with premium hash for a consistent and delicious edible experience." },
    ],
    packSummary: [
      "1x 1G infused, glass-tip blunt",
      "2x 1G infused live resin pre-rolls",
      "4x 0.5G infused live resin pre-rolls",
      "6x 10mg full-melt infused gummies"
    ]
  }
]

export default function FattonesPage() {
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
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-D0zU0mYkYhWZHV4cugCw8cLtXfVhf2.png')" }}
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
                Fattones
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Premium 4-in-1 packs with glass-tip blunts, hash rosin infused prerolls, mini joints, 
                and infused gummies. 10 delicious flavors available.
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
                        <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {product.potency}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {product.fullName}
                      </h2>
                      
                      <p className="text-[#D4AF37] font-medium mb-4">
                        {product.tagline}
                      </p>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-black text-white px-4 py-2 rounded-lg">
                          <span className="text-2xl font-bold">{product.thc}</span>
                          <span className="text-sm ml-1">THC</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {product.shortDescription}
                      </p>

                      <p className="text-gray-700 mb-6">
                        {product.description}
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
                          price="$35"
                          priceNumber={35}
                          perUnit="per unit"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Family Image */}
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="bg-white rounded-xl p-6">
                      <Image
                        src={product.familyImage}
                        alt={`${product.name} Contents`}
                        width={1200}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* What's Inside */}
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Inside:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.contents.map((content, index) => (
                        <div key={index} className="bg-white rounded-xl p-5">
                          <h4 className="font-bold text-gray-900 mb-2">{content.item}</h4>
                          <p className="text-gray-600 text-sm">{content.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pack Summary */}
                    <div className="mt-6 bg-black text-white rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3">Each Fattone includes:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {product.packSummary.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
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
