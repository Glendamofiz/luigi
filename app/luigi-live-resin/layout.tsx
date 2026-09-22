import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luigi Live Resin & Liquid Diamonds | Official 2026 Guide",
  description: "Explore Luigi live resin and liquid diamond products, including Series 6 disposables, Fattones, and rosin prerolls from licensed California dispensaries.",
  alternates: { canonical: "https://www.luigiofficialbrand.com/luigi-live-resin" },
  openGraph: {
    title: "Luigi Live Resin & Liquid Diamonds | Official Guide",
    description: "Compare Luigi Series 6, Fattones, and rosin preroll products from the official Luigi brand.",
    url: "https://www.luigiofficialbrand.com/luigi-live-resin",
    siteName: "LUIGI",
    type: "website",
    images: [{ url: "https://www.luigiofficialbrand.com/og-image.jpg", width: 1200, height: 630, alt: "LUIGI live resin and rosin products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luigi Live Resin & Liquid Diamonds | Official Guide",
    description: "Compare Luigi live resin, liquid diamond, and rosin products.",
    images: ["https://www.luigiofficialbrand.com/og-image.jpg"],
  },
}

export default function LiveResinLayout({ children }: { children: React.ReactNode }) {
  return children
}
