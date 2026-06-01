import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { Truck, Globe, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Oil Shipping & Delivery | Worldwide Wholesale",
  description: "Luigi Oil shipping and delivery information. Fast worldwide wholesale shipping for Luigi Carts, 2G Disposables, and bulk orders to dispensaries and retailers.",
  keywords: ["Luigi Oil shipping", "Luigi delivery", "Luigi wholesale shipping", "Luigi worldwide delivery", "Luigi bulk shipping"],
  alternates: {
    canonical: "/delivery",
  },
  openGraph: {
    title: "Luigi Oil Shipping & Delivery",
    description: "Fast, reliable worldwide shipping for all Luigi Oil wholesale orders.",
    type: "website",
  },
}

const deliverySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Luigi Oil Delivery & Shipping",
  "description": "Shipping and delivery information for Luigi Oil wholesale orders",
  "url": "https://www.luigiofficialbrand.com/delivery"
}

export default function DeliveryPage() {
  return (
    <>
      <Script
        id="delivery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deliverySchema) }}
      />
      <AgeVerification />
      <Header />
      <main className="pt-20">
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
                Delivery & Shipping
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fast, reliable worldwide shipping for all wholesale orders. We ship Luigi Oil products 
                to licensed retailers and distributors globally.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Worldwide Shipping</h3>
                <p className="text-gray-600">
                  We ship wholesale orders to licensed retailers and distributors across the globe.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
                <p className="text-gray-600">
                  Orders are processed within 24-48 hours and shipped via premium carriers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">
                  Track your shipment in real-time from our facility to your door.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Insured Shipments</h3>
                <p className="text-gray-600">
                  All wholesale shipments are fully insured against loss or damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Details */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Shipping Information
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Domestic Shipping (USA)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Standard Shipping</p>
                    <p>3-5 business days</p>
                    <p className="text-sm text-gray-500 mt-1">Free on orders over $2,000</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Express Shipping</p>
                    <p>1-2 business days</p>
                    <p className="text-sm text-gray-500 mt-1">Available for urgent orders</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">International Shipping</h3>
                <p className="text-gray-600 mb-4">
                  We ship worldwide to licensed retailers and distributors. International shipping 
                  times vary by destination:
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Canada & Mexico</p>
                    <p>5-7 business days</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Europe</p>
                    <p>7-14 business days</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Asia Pacific</p>
                    <p>10-14 business days</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Other Regions</p>
                    <p>14-21 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Processing</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Orders placed before 2 PM PST are processed the same business day</li>
                  <li>Orders placed after 2 PM PST are processed the next business day</li>
                  <li>Large orders (500+ units) may require additional processing time</li>
                  <li>You will receive tracking information via email once your order ships</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Packaging</h3>
                <p className="text-gray-600 mb-4">
                  All Luigi Oil products are packaged with care to ensure they arrive in perfect condition:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Discreet, unmarked outer packaging</li>
                  <li>Temperature-controlled packaging for sensitive products</li>
                  <li>Protective inner packaging to prevent damage</li>
                  <li>Tamper-evident seals for security</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Requirements</h3>
                <p className="text-gray-600 mb-4">
                  All shipments comply with applicable regulations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Age verification required upon delivery (21+)</li>
                  <li>Valid cannabis retail license required for all wholesale orders</li>
                  <li>Proper documentation included with every shipment</li>
                  <li>Compliance with state and local cannabis regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Shipping?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to help with shipping inquiries, customs documentation, 
              and delivery scheduling.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
