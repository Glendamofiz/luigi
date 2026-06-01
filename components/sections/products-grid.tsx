import Link from "next/link"
import Image from "next/image"

const productCategories = [
  { 
    id: 1, 
    name: "Fattones", 
    href: "/products/fattones",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg"
  },
  { 
    id: 2, 
    name: "The Series 6 Collection", 
    href: "/products/series-6",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-NbDI6bormy6FAVRMlAQlDO1Sgr2ax5.jpg"
  },
  { 
    id: 3, 
    name: "Rosin Pens", 
    href: "/products/rosin-pens",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE--6045HM9VKkLCniR70yFVcnR864SqQQ.png"
  },
]

export function ProductsGridSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
            OUR PRODUCTS
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Premium Live Resin Liquid Diamond products crafted for the perfect experience
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <span className="inline-flex items-center text-[#D4AF37] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  )
}
