import type { Metadata } from "next"
import Script from "next/script"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Luigi Oil Wholesale | Buy Luigi Carts & 2G Disposables in Bulk",
  description: "Buy Luigi Oil wholesale - Luigi Carts, 2G Disposables, Fattones, and Rosin Pens. Competitive bulk pricing for dispensaries and retailers. Worldwide shipping available.",
  keywords: [
    "Luigi Oil wholesale",
    "wholesale Luigi disposable",
    "buy Luigi 2G disposable wholesale",
    "Luigi carts wholesale",
    "Luigi disposables wholesale",
    "Luigi Series 6 wholesale",
    "Luigi Fattones wholesale",
    "Luigi Rosin Pen wholesale",
    "Luigi bulk pricing",
    "Luigi masterbox wholesale",
    "Luigi distributor",
  ],
  alternates: {
    canonical: "/wholesale",
  },
  openGraph: {
    title: "Luigi Oil Wholesale | Bulk Pricing for Dispensaries",
    description: "Partner with Luigi Oil for wholesale pricing on premium live resin disposables, infused pre-rolls, and hash rosin products.",
    type: "website",
  },
}

const wholesaleSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Luigi Oil Wholesale",
  "description": "Wholesale pricing and bulk ordering for Luigi Oil premium cannabis products. Competitive pricing for licensed dispensaries and retailers in California.",
  "url": "https://www.luigiofficialbrand.com/wholesale",
  "mainEntity": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Luigi Oil Wholesale Products",
      "description": "Premium cannabis wholesale products including Fattones 4-in-1 packs, Series 6 live resin disposables, and Rosin Pens at competitive bulk pricing for licensed dispensaries.",
      "brand": { "@type": "Brand", "name": "Luigi Oil" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "9.50",
        "highPrice": "30",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "businessFunction": "http://purl.org/goodrelations/v1#Sell",
    "eligibleCustomerType": "http://purl.org/goodrelations/v1#Business"
  }
}

export default function WholesaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="wholesale-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wholesaleSchema) }}
      />
      {children}
    </>
  )
}
