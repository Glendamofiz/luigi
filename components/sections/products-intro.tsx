import Image from "next/image"
import Link from "next/link"

const productImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LUIGI_gummy.830-copy-1%20%281%29-ke6veLTvrpN2usmL3BS4pR3Wv8Paka.png"

export function ProductsIntroSection() {
  return (
    <section 
      className="w-full bg-white relative"
      style={{
        backgroundImage: 'url(/images/luigi-l-background.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Column - Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 py-8 lg:items-start lg:px-16 lg:py-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Our Products
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#D4AF37] text-black font-semibold text-sm md:text-lg rounded-none hover:bg-[#C5A028] transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <Image
            src={productImage}
            alt="Luigi Products - Live Resin Liquid Diamond, Fattone Pre-Rolls, and Gummies"
            width={720}
            height={540}
            className="w-[90%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
