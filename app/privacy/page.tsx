import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Luigi Oil privacy policy. Learn how we collect, use, and protect your personal information when using our website and services.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Luigi Oil",
    description: "How Luigi Oil collects, uses, and protects your personal information.",
    type: "website",
    url: "https://www.luigiofficialbrand.com/privacy",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOME-PAGE-BANNER-DEVICES-for-mobile-XEoqV0endTG9hI2jLyeussqr64rj0r.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <AgeVerification />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-6O8v95MMvi4PdyNGiy5AYHnzaPoq3b.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Learn how we collect, use, and protect your personal information when using our website and services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Luigi Oil (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or make a purchase from us.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                  policy, please do not access the site.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Fill out a contact or wholesale inquiry form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us directly via email or phone</li>
                  <li>Interact with our website</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This information may include your name, email address, phone number, business name, 
                  license number, and any other information you choose to provide.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, 
                  including information about your web browser, IP address, time zone, and some of the cookies 
                  installed on your device.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Process wholesale orders and manage business relationships</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Service providers who assist us in operating our website and business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. Cookies are files with a small amount of data that are sent 
                  to your browser from a website and stored on your device.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
                  sent. However, if you do not accept cookies, you may not be able to use some portions of 
                  our website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, 
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to opt out of marketing communications</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Age Verification</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website is intended for users who are 21 years of age or older. We do not knowingly 
                  collect personal information from individuals under 21. If we learn that we have collected 
                  personal information from someone under 21, we will delete that information immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
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
