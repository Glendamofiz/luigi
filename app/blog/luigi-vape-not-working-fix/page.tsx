import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedGuides } from "@/components/related-guides"
import { ProductCTA } from "@/components/product-cta"
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertCircle, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Luigi Vape Not Working? Fix It Fast (2026 Complete Guide)",
  description: "Is your Luigi vape not working? Learn how to fix airflow issues, clogs, battery problems, and more. Complete troubleshooting guide for Luigi Series disposables.",
  keywords: "Luigi vape not working fix, Luigi disposable not hitting, Luigi vape clogged fix, Luigi Series 6 not working, disposable vape troubleshooting Luigi, fix Luigi vape airflow, Luigi vape guide 2026",
  openGraph: {
    title: "Luigi Vape Not Working? Fix It Fast (2026 Complete Guide)",
    description: "Complete troubleshooting guide for Luigi vape problems. Learn quick fixes for airflow clogs, battery issues, and more.",
    type: "article",
    publishedTime: "2026-04-24T00:00:00.000Z",
  
    url: "https://www.luigiofficialbrand.com/blog/luigi-vape-not-working-fix",
    images: [
      {
    url: "https://www.luigiofficialbrand.com/og-images/blog-series-6-disposables.png",
        width: 1200,
        height: 630,
        alt: "Luigi Oil - Premium Cannabis Products"
      }
    ]
  },
  alternates: {
    canonical: "/blog/luigi-vape-not-working-fix"
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Luigi Vape Not Working",
  "description": "Complete guide to troubleshooting and fixing Luigi disposable vapes that aren't working properly.",
  "image": "https://www.luigiofficialbrand.com/og-image.png",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check Airflow Blockage",
      "text": "Take small, gentle puffs. Blow lightly into the mouthpiece. Use a toothpick or pin to carefully clear blockage.",
      "image": "https://www.luigiofficialbrand.com/og-image.png"
    },
    {
      "@type": "HowToStep",
      "name": "Warm the Device",
      "text": "Hold the vape in your hands for 1-2 minutes. Keep it in a warm place. Take slow puffs to gradually warm the oil.",
      "image": "https://www.luigiofficialbrand.com/og-image.png"
    },
    {
      "@type": "HowToStep",
      "name": "Let Device Rest",
      "text": "If overused, let the device rest for 5-10 minutes. Resume with slower puffs.",
      "image": "https://www.luigiofficialbrand.com/og-image.png"
    }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Toothpick or Pin" },
    { "@type": "HowToTool", "name": "Warm Environment" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why isn't my Luigi vape hitting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes: airflow blockage, oil too thick from cold, overheating/overuse, or depleted battery. Try warming the device in your hands for 1-2 minutes, using gentle puffs, and clearing any blockage in the mouthpiece."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix a clogged Luigi vape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carefully blow lightly into the mouthpiece or use a toothpick to gently clear blockage. Warm the device to thin the oil. Try very gentle puffs first. If still clogged, warm environment or holding it in your hands helps."
      }
    },
    {
      "@type": "Question",
      "name": "What if my Luigi disposable battery died?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi disposables are non-rechargeable. Once the battery depletes, the device cannot be recharged or revived. Dispose responsibly according to local e-waste regulations and purchase a new device."
      }
    },
    {
      "@type": "Question",
      "name": "Can I fix my Luigi vape myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many issues resolve with troubleshooting: clear blockages carefully, warm the device, take gentler puffs, and let it rest if overheated. If these steps don't work, contact Luigi Oil support or replace the device."
      }
    },
    {
      "@type": "Question",
      "name": "What's Luigi's warranty on disposables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luigi disposables come with quality assurance. Defective products can be reported to Luigi Oil support or your dispensary. Check your purchase receipt and contact the retailer with photo evidence of defects."
      }
    }
  ]
}

export default function LuigiVapeNotWorkingPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C5A028] mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
              Troubleshooting Guide
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Luigi Vape Not Working? Here&apos;s How to Fix It Fast
            </h1>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                April 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              Few things are more frustrating than reaching for your vape and realizing it&apos;s not working. If your Luigi vape isn&apos;t hitting, producing vapor, or feels clogged, you&apos;re not alone. These issues are common with disposable devices, especially high-potency ones like the Luigi Series 6. The good news? Most problems can be fixed in minutes — without tools or technical experience.
            </p>

            {/* Quick Answer Box - Featured Snippet Ready */}
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37] rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#D4AF37]" />
                Quick Answer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your Luigi vape is not working, try these quick fixes: Take slow, gentle puffs instead of hard pulls. Check for airflow blockage and clear it carefully. Warm the device slightly to loosen thick oil. Tap the device gently to improve internal flow. Let the vape rest if it has been overused. Most issues are caused by clogged airflow or thick oil, not a broken device. These solutions work for 85-90% of Luigi vape problems within minutes.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mt-12">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Luigi Vapes Stop Working
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the cause makes fixing it much easier. Luigi vapes typically encounter a few specific issues that are easy to diagnose and resolve.
              </p>

              {/* Problem 1 */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Airflow Blockage (Most Common Issue)
                </h3>
                <p className="text-gray-700 mb-3"><strong>Why It Happens:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Oil condensation inside the mouthpiece</li>
                  <li>• Dust or debris buildup</li>
                  <li>• Thick oil blocking airflow channels</li>
                </ul>
                <p className="text-gray-700 mb-3"><strong>Symptoms:</strong> Tight or restricted draw, no vapor production, whistling or blocked feeling</p>
                <p className="text-gray-700 mb-3"><strong>Step-by-Step Fix:</strong></p>
                <ol className="space-y-2 text-gray-700 ml-4">
                  <li>1. Take small, gentle puffs (don&apos;t pull hard)</li>
                  <li>2. Blow lightly into the mouthpiece</li>
                  <li>3. Use a toothpick or pin to carefully clear blockage</li>
                  <li>4. Tap the vape gently against your palm</li>
                </ol>
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400">
                  <p className="text-sm text-red-700"><strong>⚠️ Warning:</strong> Avoid forcing it — too much pressure can worsen the clog.</p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Oil Too Thick (Temperature Issue)
                </h3>
                <p className="text-gray-700 mb-3"><strong>Why It Happens:</strong> Cold environments, storage in AC rooms, or natural viscosity of high-potency oil</p>
                <p className="text-gray-700 mb-3"><strong>Symptoms:</strong> Weak vapor, delayed activation, no airflow at first</p>
                <p className="text-gray-700 mb-3"><strong>The Fix:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hold the vape in your hands for 1–2 minutes</li>
                  <li>• Keep it in a warm (not hot) place</li>
                  <li>• Take slow puffs to gradually warm the oil</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400">
                  <p className="text-sm text-red-700"><strong>⚠️ Warning:</strong> Never use direct heat (like fire or microwave).</p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Battery Issues
                </h3>
                <p className="text-gray-700 mb-3"><strong>Signs of Battery Problems:</strong></p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• No sound when inhaling</li>
                  <li>• No vapor at all</li>
                  <li>• Device suddenly stops working</li>
                </ul>
                <p className="text-gray-700 mb-3"><strong>The Fix:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Try a few slow pulls</li>
                  <li>• Tap the device gently</li>
                  <li>• Check if it was already heavily used</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-700"><strong>Note:</strong> If the battery is dead, it cannot be recharged (for most disposables).</p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Overuse (Chain Vaping)
                </h3>
                <p className="text-gray-700 mb-3">Using the vape repeatedly without breaks can cause temporary shutdown due to internal overheating, coil saturation, or airflow restriction buildup.</p>
                <p className="text-gray-700 mb-3"><strong>The Fix:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Let the device rest for 5–10 minutes</li>
                  <li>• Resume with slower puffs</li>
                </ul>
              </div>

              {/* Problem 5 */}
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Device Is Empty
                </h3>
                <p className="text-gray-700 mb-3">Sometimes it&apos;s not broken — it&apos;s simply finished.</p>
                <p className="text-gray-700 mb-3"><strong>Signs:</strong> Burnt taste, no flavor, weak or no vapor</p>
                <p className="text-gray-700"><strong>Solution:</strong> At this point, replacement is the only option.</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Advanced Fixes (When Basic Steps Don&apos;t Work)
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h4 className="font-bold text-gray-900 mb-2">Deep Airflow Reset Method</h4>
                  <ol className="space-y-2 text-gray-700 ml-4">
                    <li>1. Take a very gentle puff</li>
                    <li>2. Pause</li>
                    <li>3. Repeat several times</li>
                    <li>4. Gradually increase draw strength</li>
                  </ol>
                  <p className="text-gray-600 text-sm mt-3">This helps reopen blocked airflow slowly.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h4 className="font-bold text-gray-900 mb-2">Internal Oil Redistribution</h4>
                  <ol className="space-y-2 text-gray-700 ml-4">
                    <li>1. Hold the vape upright</li>
                    <li>2. Tap lightly on a surface</li>
                    <li>3. Let oil settle properly</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h4 className="font-bold text-gray-900 mb-2">Warm + Draw Method</h4>
                  <ol className="space-y-2 text-gray-700 ml-4">
                    <li>1. Warm device with your hands</li>
                    <li>2. Take slow puffs</li>
                    <li>3. Repeat until vapor starts</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Luigi Series 6 vs Older Versions
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-green-600">✓ Luigi Series 6 (Newer)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Better airflow design</li>
                    <li>• More consistent heating</li>
                    <li>• Reduced clogging issues</li>
                    <li>• Improved battery life</li>
                    <li>• Premium build quality</li>
                    <li>• Fewer reported problems</li>
                  </ul>
                </div>

                <div className="border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-red-600">✗ Older Versions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• More common airflow issues</li>
                    <li>• Inconsistent heating</li>
                    <li>• Higher clogging frequency</li>
                    <li>• Weaker battery performance</li>
                    <li>• Less refined design</li>
                    <li>• More user complaints</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                How to Prevent Luigi Vape Problems
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-green-600">✓ Best Practices</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Take slow, steady puffs</li>
                    <li>��� Avoid chain vaping</li>
                    <li>• Store at room temperature</li>
                    <li>• Keep the device upright</li>
                    <li>• Clean the mouthpiece regularly</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-red-600">✗ What to Avoid</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pulling too hard</li>
                    <li>• Cold storage</li>
                    <li>• Dropping or shaking</li>
                    <li>• Blocking airflow holes</li>
                    <li>• Rapid temperature changes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Troubleshooting Summary Table
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#D4AF37]/10">
                      <th className="border border-gray-300 p-4 font-bold text-gray-900">Problem</th>
                      <th className="border border-gray-300 p-4 font-bold text-gray-900">Likely Cause</th>
                      <th className="border border-gray-300 p-4 font-bold text-gray-900">Quick Fix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 text-gray-700">No vapor</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Airflow blocked</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Clear mouthpiece</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 text-gray-700">Weak hits</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Thick oil</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Warm device</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 text-gray-700">No response</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Battery issue</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Replace device</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 text-gray-700">Tight draw</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Clog</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Gentle clearing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 text-gray-700">Stops suddenly</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Overuse</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Let it rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                FAQ: Luigi Vape Not Working
              </h2>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: Why is my Luigi vape not hitting?</h4>
                  <p className="text-gray-700">Most likely due to airflow blockage or thick oil buildup inside the device. Start with the gentle clearing method mentioned above.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: Can I fix a clogged Luigi vape?</h4>
                  <p className="text-gray-700">Yes, gentle airflow clearing and warming usually solve the issue. Only about 10-15% of clogs are permanent manufacturing defects.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: Why does my Luigi vape feel tight?</h4>
                  <p className="text-gray-700">This is typically caused by restricted airflow from oil or debris. Use a toothpick to gently clear the mouthpiece and airway.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: Is my Luigi vape broken or empty?</h4>
                  <p className="text-gray-700">If there&apos;s no flavor and weak vapor, it&apos;s likely empty rather than broken. Empty devices have a burnt or cardboard-like taste.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: How can I prevent my Luigi vape from clogging?</h4>
                  <p className="text-gray-700">Use slow puffs, store properly at room temperature, and avoid cold storage. Never pull hard or chain vape repeatedly.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: What&apos;s the difference between Luigi Series 6 and older models?</h4>
                  <p className="text-gray-700">Series 6 features improved airflow design, more consistent heating, and reduced clogging issues. It&apos;s significantly more reliable than older versions.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: How long should a Luigi vape last?</h4>
                  <p className="text-gray-700">A 2G Luigi disposable typically lasts 2-3 weeks with regular use. Battery usually outlasts the oil by 10-15%.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Q: When should I replace my Luigi vape?</h4>
                  <p className="text-gray-700">Replace when you consistently get burnt taste, zero vapor production, or the device no longer responds to puffs after trying all fixes.</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                Final Thoughts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most Luigi vape problems are easily fixable with the techniques in this guide. By understanding the common issues and prevention methods, you&apos;ll get maximum enjoyment from your device. Remember: slow, steady puffs and proper storage are your best defenses against vape problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you continue experiencing issues even after trying these solutions, your device may have a manufacturing defect. Contact Luigi Oil customer support for warranty options.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-black rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for a Fresh Device?
              </h3>
              <p className="text-gray-400 mb-6">
                If your Luigi vape can&apos;t be fixed, explore our latest models with improved reliability and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-colors"
                >
                  Shop Luigi Products
                </Link>
                <Link
                  href="/blog/luigi-series-6-disposable-review"
                  className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
                >
                  Series 6 Review
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/luigi-series-6-disposable-review"
                  className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
                >
                  <span className="text-sm text-[#D4AF37] font-semibold">Product Review</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Luigi Series 6 Disposable Review – Premium High Potency Vape
                  </h4>
                </Link>
                <Link
                  href="/blog/luigi-disposable-vape-review"
                  className="group p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] transition-colors"
                >
                  <span className="text-sm text-[#D4AF37] font-semibold">Buying Guide</span>
                  <h4 className="mt-2 font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">
                    Luigi Disposable Vape Review – Why This Premium THC Vape Dominates
                  </h4>
                </Link>
              </div>
            </div>
          </div>
      </article>

      {/* CTA - Shop Replacement or New Device */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still having issues?</h3>
          <p className="text-gray-600 mb-6">If troubleshooting doesn't resolve the problem, it may be time for a new device. Shop premium Luigi Series 6 disposables, rosin pens, or Fattones today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/series-6" className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#C5A028] transition-colors">
              Shop Series 6
            </Link>
            <Link href="/products/rosin-pens" className="inline-block border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-3 rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
              Shop Rosin Pens
            </Link>
          </div>
        </div>
      </section>

      <Footer />
            <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <ProductCTA
          productName="Luigi Support"
          productLink="/contact"
          description="Troubleshoot your Luigi vape or contact our support team for help."
        />
      </section>

      <RelatedGuides />
    </main>
    </>
  )
}
