import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Luigi Oil | Wholesale Inquiries & Customer Support",
  description: "Contact Luigi Oil for wholesale orders, partnership opportunities, or customer support. Get in touch with our team for Luigi Carts, 2G Disposables, and bulk orders.",
  keywords: ["contact Luigi Oil", "Luigi wholesale contact", "Luigi Oil support", "Luigi partnership", "Luigi bulk orders"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Luigi Oil | Wholesale & Support",
    description: "Reach out to Luigi Oil for wholesale pricing, partnership opportunities, or product inquiries.",
    type: "website",
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Luigi Oil",
  "description": "Contact page for Luigi Oil wholesale and customer inquiries",
  "url": "https://www.luigiofficialbrand.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "email": "support@luigiofficialbrand.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "California",
      "addressCountry": "US"
    }
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  )
}
