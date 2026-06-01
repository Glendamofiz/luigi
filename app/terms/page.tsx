import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

export const metadata: Metadata = {
  title: "Terms of Service | Luigi Oil",
  description: "Luigi Oil terms of service. Read our terms and conditions for using our website and purchasing our premium cannabis products.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Luigi Oil",
    description: "Terms and conditions for using Luigi Oil website and purchasing products.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <>
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Read our terms and conditions for using our website and purchasing our premium cannabis products.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing or using the Luigi Oil website, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you 
                  are prohibited from using or accessing this site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service apply to all visitors, users, and others who access or use the website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Age Requirement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You must be at least 21 years of age to access this website and purchase our products. 
                  By using this website, you represent and warrant that you are at least 21 years old 
                  and have the legal capacity to enter into these Terms of Service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to request proof of age at any time and to refuse service to anyone 
                  who cannot verify they are 21 years of age or older.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Products and Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Luigi Oil products are cannabis products intended for use only where legal. It is your 
                  responsibility to ensure that the purchase and use of our products complies with all 
                  applicable local, state, and federal laws in your jurisdiction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We make every effort to display our products accurately, but we cannot guarantee that 
                  your device&apos;s display accurately reflects the actual colors and details of the products.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Wholesale Orders</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wholesale accounts are available to licensed retailers and distributors. By submitting 
                  a wholesale inquiry, you confirm that you hold all necessary licenses and permits to 
                  purchase and sell cannabis products in your jurisdiction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Wholesale pricing, minimum order quantities, and payment terms are subject to change 
                  and will be communicated directly to approved wholesale partners.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Luigi Oil name, logo, and all related names, logos, product and service names, 
                  designs, and slogans are trademarks of Luigi Oil or its affiliates. You may not use 
                  these marks without our prior written permission.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Luigi Oil and is protected by copyright and other intellectual 
                  property laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree not to use this website:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any local, state, national, or international regulations</li>
                  <li>To infringe upon or violate our intellectual property rights</li>
                  <li>To harass, abuse, insult, harm, defame, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other malicious code</li>
                  <li>To interfere with the security features of the website</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This website and all products are provided on an &quot;as is&quot; and &quot;as available&quot; basis. 
                  Luigi Oil makes no representations or warranties of any kind, express or implied, 
                  regarding the operation of this website or the information, content, or products 
                  included on this website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by applicable law, Luigi Oil disclaims all warranties, 
                  express or implied, including but not limited to implied warranties of merchantability 
                  and fitness for a particular purpose.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Luigi Oil, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from your access to or use of or inability to 
                  access or use the website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Luigi Oil and its licensors and 
                  licensees, and their employees, contractors, agents, officers, and directors, from 
                  and against any and all claims, damages, obligations, losses, liabilities, costs, 
                  or debt arising from your use of this website or violation of these Terms of Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the 
                  laws of the State of California, without regard to its conflict of law provisions. 
                  Any legal action or proceeding relating to your access to or use of the website 
                  shall be instituted in a court located in Los Angeles County, California.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify or replace these Terms of Service at any time. 
                  If a revision is material, we will provide at least 30 days&apos; notice prior to 
                  any new terms taking effect. Your continued use of the website after any changes 
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-600 mt-4">
                  <strong>Email:</strong> support@luigiofficialbrand.com<br />
                  <strong>Location:</strong> Los Angeles, CA
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
