import Link from "next/link"
import Image from "next/image"

export function WholesaleSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Dark background with texture pattern */}
      <div className="relative w-full py-12 md:py-16 lg:py-20">
        {/* Background Image */}
        <Image
          src="/images/wholesale-bg.jpg"
          alt="Luigi Oil Wholesale - Premium Cannabis Distribution Background"
          fill
          className="object-cover object-center"
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            WHOLESALE
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            WORLDWIDE
          </h3>
          
          <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mb-8 leading-relaxed">
            Buy Luigi Carts and Disposables wholesale for premium live resin + liquid diamond experience. Stock Luigi 2G Disposables, Prerolls, and Rosin Pens with high-demand Fattones, Series 6, and hash rosin options. Order authentic Luigi Oil in bulk via licensed distributors.
          </p>
          
          <Link
            href="/wholesale"
            className="inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-5 bg-[#D4AF37] text-black font-semibold text-base md:text-lg rounded-none hover:bg-[#C5A028] transition-colors duration-300"
          >
            Wholesale
          </Link>
        </div>
      </div>
      
      {/* Curved white bottom */}
      <div className="relative w-full h-12 md:h-16 lg:h-20 bg-white">
        <svg 
          className="absolute bottom-full left-0 w-full h-12 md:h-16 lg:h-20"
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
