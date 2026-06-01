"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

// Fattone Cup Products
const fattoneProducts = [
  {
    name: "Blackberry Dream",
    strain: "INDICA",
    color: "purple",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM-2400x2400-pe085AZelET8AuGO0fti7o4giOhjqR.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM_FAMILY-2400x2400-ZVqdbOyZOBwU74nseO2HaPosQ0733D.jpg",
    slug: "blackberry-dream",
  },
  {
    name: "Blue Razz Lime",
    strain: "SATIVA",
    color: "blue",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-RAZZ-LIME-2400x2400-mHTd6AsUJBSJi5QvC4chUDdw1wdgTw.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-RAZZ-LIME_FAMILY-2400x2400-2STaP2ejCYNGhdOKni5tERog9Jhf2M.jpg",
    slug: "blue-razz-lime",
  },
  {
    name: "Banana Gelato",
    strain: "HYBRID",
    color: "yellow",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BANANA-GELATO-96QjZctz3PJvwgS0dHym2Ii9CWMh7B.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BANANA-GELATO_FAMILY-XrEwX4yogYztV1uWJAR8LtgDNKQ8yB.jpg",
    slug: "banana-gelato",
  },
  {
    name: "Blue Mist",
    strain: "HYBRID",
    color: "blue",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-2400x2400-HqzTJqYDxmItWpPSOctoUV0TIrGSoA.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST_FAMILY-2400x2400-ig3249XpKXz9iz6i6xAgIj0exqkGHF.jpg",
    slug: "blue-mist",
  },
  {
    name: "Blood Orange",
    strain: "INDICA",
    color: "red",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLOOD-ORANGE-2400x2400-Ge320FdF3tfMngmcRUoDznapHawPmy.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLOOD-ORANGE_FAMILY-2400x2400-6yBqBwARc1ecxkPo8Cw4smyhkHQPnF.jpg",
    slug: "blood-orange",
  },
  {
    name: "Strawberry OG",
    strain: "SATIVA",
    color: "red",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_STRAWBERRY-OG-2400x2400-f6qwDECQdaLlFJPtemDOkGOol5oppC.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_STRAWBERRY-OG_FAMILY-2400x2400-KL6KsBIZ6a6QZS0TKc1UrfXDJGaWl3.jpg",
    slug: "strawberry-og",
  },
  {
    name: "Watermelon",
    strain: "INDICA",
    color: "green",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_WATERMELON-2400x2400-YwD3UzumetnOcZXM4IpeTnQF3cVRZF.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_WATERMELON_FAMILY-2400x2400-v8pQZfypckn5kpiOebrOCh7spliZQp.jpg",
    slug: "watermelon",
  },
  {
    name: "Pineapple Diesel",
    strain: "HYBRID",
    color: "lime",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_PINEAPPLE-DIESEL-2400x2400-V93LYixkxVS2GEZn7nTtSEKhoVEkxD.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_PINEAPPLE-DIESEL_FAMILY-2400x2400-Hrrjv8ITlUQUcERpR61OgkyPt04zcl.jpg",
    slug: "pineapple-diesel",
  },
  {
    name: "Honeydew Melon",
    strain: "HYBRID",
    color: "orange",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_HONEYDEW-MELON-2400x2400-1dWnoszRkZeG4Lq6gzSRszHLS5oS4G.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_HONEYDEW-MELON_FAMILY-2400x2400-drYcVaSYzO4YwLNlPdZUPJJWYuPFtn.jpg",
    slug: "honeydew-melon",
  },
  {
    name: "Cherry Pie",
    strain: "HYBRID",
    color: "pink",
    cupImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_CHERRY-PIE-2400x2400-ZvPqetaSFwUGGKzjjbTTQbPzbdu4gs.jpg",
    familyImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_CHERRY-PIE_FAMILY-2400x2400-Pjd0mn1UqcNh9PFZXG8olXYKaw1eYn.jpg",
    slug: "cherry-pie",
  },
]

// Live Resin Liquid Diamond Products
const liveResinProducts = [
  {
    name: "Black Diesel Milk",
    strain: "INDICA",
    color: "white",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK_DEVICE-HUfcaNqe6JsyxUPlqVuBFeaxwWk007.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK_CONE-ylEQHe4zfSdhx1SWkN3BSpVOONcvMJ.jpg",
    slug: "black-diesel-milk",
  },
  {
    name: "Candy Corn Chaos",
    strain: "SATIVA",
    color: "orange",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS-2400x2400-7tUL3R44MqJibQwLdB3WKgjp7hEC2C.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS_DEVICE-2400x2400-IBhpi7R3WZSgettRePCts9QczxUXsL.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS_CONE-2400x2400-Iov90ntG0LI59ivox8zkTpMs7M57Mb.jpg",
    slug: "candy-corn-chaos",
  },
  {
    name: "Graveberry Kush",
    strain: "INDICA",
    color: "red",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH-2400x2400-ho7sSJ4mblPqioNebILJJHwHtXqFuz.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH_DEVICE-2400x2400-9theGpBVvhKv9vymA6oKOfL7tUs6HQ.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAVEBERRY-KUSH_CONE-2400x2400-hcdxOiqth7fXpRpTZUNDnYQUiezWkJ.jpg",
    slug: "graveberry-kush",
  },
  {
    name: "Hella Hallow Jam",
    strain: "HYBRID",
    color: "orange",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM-2400x2400-3vr9DJCEYcdFMD0cyk5kTanTrWab78.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM_DEVICE-2400x2400-6I3x4EFYdeUjPi2lZPscZWTSgLoBNQ.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HELLA-HALLOW-JAM_CONE-2400x2400-Ukb4hYFjXhyv7Aq2urkWT7PJVSyr7J.jpg",
    slug: "hella-hallow-jam",
  },
  {
    name: "Green Gumbo",
    strain: "INDICA",
    color: "green",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO-2400x2400-x26mmlzka3oZiLpb6jJkVHlaru0nLr.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO_DEVICE-2400x2400-N5tlHG10g5YaX4rR8pv6I6jvOTnNbT.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GREEN-GUMBO_CONE-2400x2400-0hTIDhS3t9JGXCTu2TFzdXiXsAglZJ.jpg",
    slug: "green-gumbo",
  },
  {
    name: "Razor Thin Pine",
    strain: "HYBRID",
    color: "yellow",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE-2400x2400-oLz1wZjJI8wcOsOm9wHahs8Ei9FCGY.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAZOR-THN-PINE_DEVICE-2400x2400-fhKIiNSFClnlwqOHY8aHDDw028R26B.jpg",
    coneImage: "",
    slug: "razor-thin-pine",
  },
  {
    name: "Rageberry Blitz",
    strain: "SATIVA",
    color: "red",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAGEBERRY-BLITZ-2400x2400-U0gKW6ZwAP12maZvhgQaZaqft3CUb8.jpg",
    deviceImage: "",
    coneImage: "",
    slug: "rageberry-blitz",
  },
  {
    name: "Orange Lava Kush",
    strain: "HYBRID",
    color: "orange",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-2400x2400-qVpC8m6A0gGIxa3KvaTWWhinNonEm9.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH_DEVICE-2400x2400-4bUNgBRQOZbO3RNqMri55wLoV8qDoz.jpg",
    coneImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH_CONE-2400x2400-bTdP55frA6sr6wrujaWLZHhZZsdQrU.jpg",
    slug: "orange-lava-kush",
  },
  {
    name: "Plum Wreck",
    strain: "SATIVA",
    color: "purple",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLUM-WRECK-2400x2400-dozjpfr9G9iXXuDpBBR0kXOAop2q69.jpg",
    deviceImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLUM-WRECK_DEVICE-2400x2400-wx83MuRLadA7oQHSW81MMlq53T8g7Q.jpg",
    coneImage: "",
    slug: "plum-wreck",
  },
]

// Rosin Products
const rosinProducts = [
  {
    name: "Citrus Mimosa",
    strain: "HYBRID",
    color: "yellow",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CITRUS-MIMOSA-2400x2400-xsbwfCR4erOUUr0aofdCseRZ25ge17.png",
    slug: "citrus-mimosa",
  },
  {
    name: "Casablanca Peach",
    strain: "INDICA",
    color: "peach",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASABLANCA-PEACH-2400x2400-i3GvPizS1otvOjSKt8ttgjgzOOZv9S.png",
    slug: "casablanca-peach",
  },
  {
    name: "Berry Amarillo",
    strain: "INDICA",
    color: "pink",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BERRY-AMARILLO_CIGAR-2400x2400-V9vJtyj28MuEWO5rH4zPIay87oFsHD.png",
    slug: "berry-amarillo",
  },
]

const strainColors: Record<string, string> = {
  INDICA: "bg-purple-600",
  SATIVA: "bg-orange-500",
  HYBRID: "bg-green-500",
}

function ProductCard({ 
  product, 
  showFamily = false 
}: { 
  product: typeof fattoneProducts[0]
  showFamily?: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Strain Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`${strainColors[product.strain]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {product.strain}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={isHovered && showFamily ? product.familyImage : product.cupImage}
          alt={product.name}
          fill
          className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 bg-card">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Infused Fattone Pre-Roll Pack</p>
        <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all duration-300">
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function LiveResinProductCard({ product }: { product: typeof liveResinProducts[0] }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
    >
      {/* Strain Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`${strainColors[product.strain]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {product.strain}
        </span>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 bg-card">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Live Resin Liquid Diamond</p>
        <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all duration-300">
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Live Resin Liquid Diamond Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              Premium Vapes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Live Resin Liquid Diamond
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Nothing But Pressure. Experience our premium live resin vapes with infused pre-rolls.
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>

          {/* Live Resin Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveResinProducts.map((product) => (
              <LiveResinProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {/* Rosin Products Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              Solventless Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Rosin Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No Pressure, No Diamonds. Pure solventless rosin for the true connoisseur.
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>

          {/* Rosin Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rosinProducts.map((product) => (
              <Link
                key={product.name}
                href={`/products/${product.slug}`}
                className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Strain Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${strainColors[product.strain]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.strain}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Rosin Infused Cannabis</p>
                  <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Fattone Pre-Rolls Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              Premium Pre-Rolls
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Infused Fattones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Premium flower cultivated in California. Gummy edibles included with every pack.
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>

          {/* Strain Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-gold text-background font-medium text-sm transition-all">
              All Strains
            </button>
            <button className="px-6 py-2 rounded-full border border-border text-foreground font-medium text-sm hover:border-gold hover:text-gold transition-all">
              Indica
            </button>
            <button className="px-6 py-2 rounded-full border border-border text-foreground font-medium text-sm hover:border-gold hover:text-gold transition-all">
              Sativa
            </button>
            <button className="px-6 py-2 rounded-full border border-border text-foreground font-medium text-sm hover:border-gold hover:text-gold transition-all">
              Hybrid
            </button>
          </div>

          {/* Fattone Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fattoneProducts.map((product, index) => (
              <ProductCard 
                key={product.name} 
                product={product} 
                showFamily={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
