import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { CookieConsent } from "@/components/cookie-consent"
import { HeroSection } from "@/components/sections/hero"
import { ProductsIntroSection } from "@/components/sections/products-intro"
import { WholesaleSection } from "@/components/sections/wholesale"
import { ProductsGridSection } from "@/components/sections/products-grid"
import { ContactSection } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Luigi Oil | Buy Luigi Carts & 2G Disposables Wholesale",
  description: "Shop authentic Luigi Oil — premium 2G disposables, Luigi carts, and live resin liquid diamonds. Wholesale pricing available. California's top THC vape brand. Order now.",
  keywords: ["Luigi Oil", "Luigi Carts", "Luigi 2G Disposable", "buy Luigi wholesale", "live resin disposable", "Luigi Prerolls", "Luigi Fattones", "Luigi Rosin Pen", "Series 6", "hash rosin vape"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luigi Oil | Premium Live Resin Cannabis Products",
    description: "Shop authentic Luigi Oil products - 2G Disposables, Fattones, and Rosin Pens. Premium live resin liquid diamond experience.",
    type: "website",
    url: "https://www.luigiofficialbrand.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-XEoqV0endTG9hI2jLyeussqr64rj0r.jpg",
        width: 1200,
        height: 630,
        alt: "Luigi Oil - Premium Live Resin Cannabis Products",
      },
    ],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Luigi Oil",
  "url": "https://www.luigiofficialbrand.com",
  "logo": "https://www.luigiofficialbrand.com/logo.png",
  "description": "Premium cannabis brand specializing in live resin liquid diamond vapes, hash rosin products, and infused pre-rolls.",
  "sameAs": [
    "https://instagram.com/luigioil"
  ]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Luigi Oil",
  "url": "https://www.luigiofficialbrand.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.luigiofficialbrand.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Luigi Oil",
  "description": "Premium cannabis brand specializing in live resin liquid diamond vapes, hash rosin products, and infused pre-rolls available at licensed California dispensaries.",
  "url": "https://www.luigiofficialbrand.com",
  "logo": "https://www.luigiofficialbrand.com/favicon.png",
  "image": "https://www.luigiofficialbrand.com/og-image.jpg",
  "telephone": "+1-833-LUIGI-OIL",
  "email": "support@luigiofficialbrand.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0522",
    "longitude": "-118.2437"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://instagram.com/luigioil",
    "https://t.me/luigiofficial"
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Luigi Oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Oil is a premium cannabis brand known for producing high-quality live resin liquid diamond vapes, hash rosin products, and infused pre-rolls. Our products are available at licensed dispensaries across California."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Luigi Oil products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Oil products are available at licensed dispensaries throughout California. You can also browse our wholesale options for bulk purchases or contact us directly through our website."
      }
    },
    {
      "@type": "Question",
      "name": "What products does Luigi Oil offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi Oil offers three main product lines: Series 6 (2G Live Resin Liquid Diamond Disposables with matching prerolls), Rosin Pens (1G solventless rosin disposables with infused blunts), and Fattones (4-in-1 packs with glass-tip blunts, hash rosin joints, and gummies)."
      }
    },
    {
      "@type": "Question",
      "name": "Are Luigi Oil products lab-tested?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Luigi Oil products undergo rigorous third-party lab testing to ensure purity, potency, and safety. We maintain the highest quality standards in the industry."
      }
    },
    {
      "@type": "Question",
      "name": "How can I verify authentic Luigi Oil products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Authentic Luigi Oil products feature holographic packaging elements and QR verification codes. Always purchase from licensed dispensaries or verified retailers to ensure you're getting genuine products."
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgeVerification />
      <Header />
      <main>
        <HeroSection />
        <ProductsIntroSection />
        <WholesaleSection />
        <ProductsGridSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
