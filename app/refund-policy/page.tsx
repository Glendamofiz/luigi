import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Luigi Oil refund and return policy. Learn about our policies for wholesale orders, damaged products, and quality guarantees.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Luigi Oil",
    description: "Our policies for wholesale orders, returns, and product quality guarantees.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/refund-policy",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-XEoqV0endTG9hI2jLyeussqr64rj0r.jpg",
        width: 1200,
        height: 630,
        alt: "Refund Policy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RefundPolicyPage() {
  return (
    <>
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE-IDqQOWuyALZ6h7xUUNjKgk32NqZFvM.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Refund Policy
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Learn about our policies for wholesale orders, damaged products, and quality guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-gray-500 mb-12">Last updated: March 2026</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Luigi Oil, we stand behind the quality of our products. Every Luigi Oil product 
                  undergoes rigorous testing and quality control to ensure it meets our premium standards 
                  before reaching your hands.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We understand that issues can occasionally arise, and we are committed to resolving 
                  them quickly and fairly.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Orders</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Defective Products</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you receive products that are defective, damaged, or do not meet our quality 
                  standards, please contact us within 7 days of receiving your order. We will:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Replace defective units at no additional cost</li>
                  <li>Provide credit toward future orders</li>
                  <li>Process refunds in exceptional circumstances</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Discrepancies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If your order is missing items or contains incorrect products, notify us within 
                  48 hours of delivery. We will rectify the issue by sending the correct products 
                  or providing appropriate credit.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Cancellations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wholesale orders may be cancelled within 24 hours of placement, provided the order 
                  has not yet been processed for shipment. Once an order has been shipped, it cannot 
                  be cancelled.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Due to the nature of cannabis products and regulatory requirements, the following 
                  are generally not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Products that have been opened or used</li>
                  <li>Products damaged due to improper storage or handling after delivery</li>
                  <li>Orders cancelled after shipment has begun</li>
                  <li>Products returned without prior authorization</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Process</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To initiate a return or report an issue with your order:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Contact our wholesale support team at support@luigiofficialbrand.com</li>
                  <li>Provide your order number and detailed description of the issue</li>
                  <li>Include photos of any defective or damaged products</li>
                  <li>Wait for a Return Authorization (RA) number before shipping any products back</li>
                  <li>Ship authorized returns to the address provided by our team</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Timeline</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once we receive and inspect returned products, we will process your refund or 
                  credit within 5-7 business days. Refunds will be issued to the original payment 
                  method used for the order.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please allow additional time for your bank or payment provider to process the 
                  refund to your account.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every Luigi Oil product is backed by our quality guarantee:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Lab-tested for purity and potency</li>
                  <li>Consistent quality across all batches</li>
                  <li>Proper packaging to ensure freshness</li>
                  <li>Authentic products directly from our facility</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Insurance</h2>
                <p className="text-gray-600 leading-relaxed">
                  All wholesale shipments include shipping insurance to protect against loss or 
                  damage during transit. If your shipment is lost or arrives damaged due to 
                  carrier mishandling, we will file a claim and either reship your order or 
                  provide a full refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about our refund policy or to report an issue with your order, 
                  please contact us:
                </p>
                <p className="text-gray-600 mt-4">
                  <strong>Email:</strong> support@luigiofficialbrand.com<br />
                  <strong>Response Time:</strong> Within 24 hours on business days
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
