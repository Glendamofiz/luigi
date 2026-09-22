import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale Inquiry | LUIGI Cannabis Products",
  description: "Submit a wholesale inquiry for LUIGI cannabis products, including live resin disposables, infused prerolls, rosin pens, and gummy packs.",
  alternates: { canonical: "https://www.luigiofficialbrand.com/wholesale-inquiry" },
  openGraph: {
    title: "Wholesale Inquiry | LUIGI Cannabis Products",
    description: "Connect with LUIGI for wholesale cannabis product pricing and licensed retail partnerships.",
    url: "https://www.luigiofficialbrand.com/wholesale-inquiry",
    siteName: "LUIGI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wholesale Inquiry | LUIGI Cannabis Products",
    description: "Connect with LUIGI for wholesale cannabis product pricing.",
  },
}

export default function WholesaleInquiryLayout({ children }: { children: React.ReactNode }) {
  return children
}
