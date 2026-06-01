"use client"

import Image from "next/image"

// Mobile/Tablet Hero Background
const mobileHeroBg = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-IC4RwxPLiT04iSvB8gPln5ULVtui3Q.jpg"

// Desktop Hero Background
const desktopHeroBg = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-for%20pc-3HrsunX2f9rHTkvfOFkCEInZD6NCI5.jpg"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden mt-16 lg:mt-20">
      {/* SEO H1 - Visually hidden but accessible to screen readers and search engines */}
      <h1 className="sr-only">
        Luigi Oil - Premium Live Resin Liquid Diamond Disposables, Fattones Pre-Rolls & Rosin Pens
      </h1>
      
      {/* Mobile/Tablet Background (up to lg breakpoint) - full width and height */}
      <div className="relative lg:hidden w-full aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/3]">
        <Image
          src={mobileHeroBg}
          alt="Luigi Oil Premium Cannabis Products - Live Resin Liquid Diamond Disposables and Infused Pre-Rolls"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Desktop Background (lg and above) - shows all 5 flavors with contain to prevent cropping */}
      <div className="relative hidden lg:block w-full h-[80vh] bg-black">
        <Image
          src={desktopHeroBg}
          alt="Luigi Oil Series 6 Live Resin Liquid Diamond 2G Disposables Collection"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  )
}
