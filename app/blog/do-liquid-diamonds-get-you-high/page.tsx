import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Do Liquid Diamonds Get You High? Potency Explained | Luigi Oil",
  description: "Do liquid diamonds get you high? Here's what the lab data says about THCA crystallization, terpene content, and potency in Luigi's live resin products.",
  keywords: ["liquid diamonds potency", "THCA vs THC", "cannabis extract potency", "liquid diamonds effects", "lab tested THC", "Series 6 disposables", "live resin concentrates"],
  openGraph: {
    title: "Do Liquid Diamonds Get You High? Potency Explained",
    description: "Here's what the lab data says about THCA crystallization, terpene content, and potency in Luigi's live resin products.",
    type: "article",
    publishedTime: "2026-06-22T00:00:00.000Z",
  },
  alternates: {
    canonical: "/blog/do-liquid-diamonds-get-you-high",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Do Liquid Diamonds Get You High? Potency Explained",
  "datePublished": "2026-06-22",
  "author": { "@type": "Organization", "name": "Luigi Oil Product Team" },
  "publisher": {
    "@type": "Organization",
    "name": "Luigi Oil",
    "logo": { "@type": "ImageObject", "url": "https://luigiofficialbrand.com/logo.png" }
  },
  "description": "Do liquid diamonds get you high? Here's what the lab data says about THCA crystallization, terpene content, and potency in Luigi's live resin products."
}

export default function LiquidDiamondsPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg')" }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Do Liquid Diamonds Get You High? Potency Explained
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Here's what the lab data says about THCA crystallization, terpene content, and potency in Luigi's live resin products.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                June 22, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min read
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 -mt-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg"
              alt="Liquid diamonds potency - high THC cannabis concentrates"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              
              <div className="bg-blue-50 border-l-4 border-[#D4AF37] p-4 mb-8">
                <p className="text-sm font-semibold text-gray-800">Age Verification</p>
                <p className="text-sm text-gray-600 mt-1">Must be 21+. For use where cannabis is legal. Please consume responsibly.</p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you've spent any time browsing dispensary menus, you've probably noticed "liquid diamonds" listed at the top of the potency charts, often alongside THC percentages that look dramatically higher than standard vape cartridges or flower. So <strong>do liquid diamonds get you high?</strong> The short answer is yes — they're one of the most concentrated cannabis extracts available, and the lab numbers back that up.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  But "how high" isn't really the right question to start with. What actually drives potency in a liquid diamond product comes down to two measurable things: THCA concentration and terpene content. In this guide, we'll break down what liquid diamonds actually are, how THCA crystallization pushes potency higher than other extract types, what the lab-tested numbers on Luigi's own products show, and how to read a Certificate of Analysis (COA) so you're working from real data instead of guesswork.
                </p>
              </div>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">What Are Liquid Diamonds?</h2>
                <p className="text-gray-700 leading-relaxed">
                  "Liquid diamonds" is the industry term for a cannabis concentrate made of crystallized THCA (tetrahydrocannabinolic acid) suspended in a terpene-rich liquid, often called "terp sauce." The crystals form through a slow purification process, while the surrounding liquid retains the live, full-spectrum terpene profile from the original plant.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This combination is why liquid diamond products are typically labeled with two numbers: a high THCA percentage from the crystals, and a separate terpene percentage from the surrounding sauce. Together, they're considered one of the most potent and flavorful extract categories on the legal market today.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Do Liquid Diamonds Get You High? The Short Answer</h2>
                <p className="text-gray-700 leading-relaxed">
                  Yes. Liquid diamond products are formulated specifically for high potency, and that's reflected directly in their lab-tested THC numbers rather than in marketing language. Products in this category routinely test well above standard vape cartridges or flower, which typically range from 15-25% THC.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  What matters for understanding "how much" is the <strong>lab-reported THC percentage on the product's COA</strong> — not the category name. Two products both labeled "liquid diamonds" can still test at different potencies depending on the batch, the cultivar, and the extraction run. That's why checking the actual lab data matters more than relying on the category label alone.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Why Liquid Diamonds Test Higher Than Other Extracts</h2>
                <p className="text-gray-700 leading-relaxed">
                  Standard cannabis extraction methods pull a broad mix of cannabinoids, plant lipids, and waxes along with the THC. Liquid diamond processing is different because it isolates and crystallizes THCA specifically, removing most of the surrounding plant material in the process.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">Here's what drives the higher lab numbers:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li><strong>Selective crystallization.</strong> THCA molecules are encouraged to form crystals under controlled temperature and pressure, similar to how sugar crystallizes out of a saturated solution.</li>
                  <li><strong>Minimal plant material.</strong> Because the crystals are purified, there's very little non-cannabinoid material left to dilute the percentage on a lab test.</li>
                  <li><strong>Live terpene sauce base.</strong> The liquid surrounding the crystals is typically fresh-frozen live resin, preserving terpenes that would otherwise degrade with heat-based extraction methods.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">THCA vs. Delta-9 THC: What Actually Shows Up on a Lab Test</h2>
                <p className="text-gray-700 leading-relaxed">
                  This is the part most people skip, and it's actually the most important detail for understanding potency labels accurately.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Raw cannabis plants primarily produce <strong>THCA</strong>, not THC. THCA does not need heat to register on a lab test, but it converts to <strong>Delta-9 THC</strong> (the active form) through a heat-driven process called decarboxylation — which happens when a product is vaporized, smoked, or otherwise heated for use.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">That means:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>A liquid diamond product's label often shows a high <strong>THCA</strong> number alongside a smaller <strong>Delta-9 THC</strong> number.</li>
                  <li>Total potential THC is typically calculated using a standard formula: (THCA × 0.877) + Delta-9 THC.</li>
                  <li>Licensed labs are required to report both figures separately on the COA in most regulated markets, including California.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">How Terpenes Affect the Overall Experience</h2>
                <p className="text-gray-700 leading-relaxed">
                  THC percentage isn't the only number that matters. The terpene profile in a liquid diamond product — the same compounds responsible for aroma and flavor — also plays a documented role in how cannabinoids are processed by the body, a concept researchers commonly refer to as the <strong>entourage effect</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  According to research in the British Journal of Pharmacology, terpenoids found in cannabis may enhance or modify the effects of THC and other cannabinoids when consumed together rather than in isolation. This is part of why two products with similar THC percentages can still feel different from each other — the surrounding terpene profile is a variable that lab percentage alone doesn't capture.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Liquid Diamond Potency in Luigi Products: The Lab Numbers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Luigi's Series 6 disposables are formulated as live resin + liquid diamond products, and they're lab-tested accordingly. Based on current batch testing, Series 6 disposables run in the <strong>85-95%+ THC</strong> range, which is consistent with the liquid diamond category broadly.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For comparison, Luigi's Fattones — which use solventless hash rosin rather than liquid diamond extract — test in the <strong>35-40%+ THC</strong> range, which is still considered high-potency but reflects a different extraction method.
                </p>
              </section>

              <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg my-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM-2400x2400-pe085AZelET8AuGO0fti7o4giOhjqR.jpg"
                  alt="Luigi Fattones hash rosin potency - solventless cannabis extraction"
                  className="w-full h-auto object-cover"
                />
              </div>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">How to Read a COA Before You Buy</h2>
                <p className="text-gray-700 leading-relaxed">
                  A Certificate of Analysis is the actual lab report behind any potency claim, and every legally sold cannabis product should have one available, often via a QR code on the packaging. Here's what to look for:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 mt-4">
                  <li><strong>Total THC and THCA percentages.</strong> This is the core potency figure — look for both numbers, not just one.</li>
                  <li><strong>Testing lab name and license number.</strong> Confirms the test was run by an independent, licensed lab rather than self-reported.</li>
                  <li><strong>Batch number matching your package.</strong> Potency varies batch to batch, so make sure the COA matches the specific batch you purchased.</li>
                  <li><strong>Terpene panel (if included).</strong> Not all COAs break out terpenes individually, but when available, this shows the actual terpene percentage and profile.</li>
                  <li><strong>Contaminant screening results.</strong> Pesticides, heavy metals, and residual solvents should all show "pass" or "not detected."</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mt-4">
                  If a product doesn't have an accessible COA, that's a red flag regardless of what the label claims.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Liquid Diamonds vs. Distillate vs. Live Resin</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  It helps to see how liquid diamonds stack up against other common extract categories:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-700 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Extract Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Starting Material</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Terpene Content</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Typical THC Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2"><strong>Distillate</strong></td>
                        <td className="border border-gray-300 px-4 py-2">Dried, cured flower</td>
                        <td className="border border-gray-300 px-4 py-2">Stripped out, often re-added synthetically</td>
                        <td className="border border-gray-300 px-4 py-2">80-90%+</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2"><strong>Live Resin</strong></td>
                        <td className="border border-gray-300 px-4 py-2">Fresh-frozen flower</td>
                        <td className="border border-gray-300 px-4 py-2">High, naturally preserved</td>
                        <td className="border border-gray-300 px-4 py-2">60-80%+</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2"><strong>Liquid Diamonds</strong></td>
                        <td className="border border-gray-300 px-4 py-2">Fresh-frozen flower, THCA-isolated</td>
                        <td className="border border-gray-300 px-4 py-2">High, naturally preserved in sauce</td>
                        <td className="border border-gray-300 px-4 py-2">85-95%+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Factors That Affect Potency Beyond the Label</h2>
                <p className="text-gray-700 leading-relaxed">
                  A handful of variables affect how potency numbers translate into the actual product you're holding, independent of personal physiology:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li><strong>Hardware quality (for vapes).</strong> Coil temperature and airflow affect how much THCA converts to active THC per draw, which is why device quality matters as much as oil potency.</li>
                  <li><strong>Storage conditions.</strong> UV light and heat degrade both THC and terpenes over time, which is why proper storage affects potency even after lab testing is complete.</li>
                  <li><strong>Batch variation.</strong> Even within the same product line, batch-to-batch THC percentages can shift by several points depending on the input flower.</li>
                  <li><strong>Decarboxylation completeness.</strong> How thoroughly THCA converts to Delta-9 THC during use depends on temperature and exposure time, which varies between consumption methods.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">FAQ: Liquid Diamond Potency</h2>
                
                <div className="space-y-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Do liquid diamonds get you high?</h3>
                    <p className="text-gray-700">
                      Yes. Liquid diamond products are formulated for high potency and consistently lab-test above standard vape and flower products, typically in the 85-95%+ THC range for products like Luigi's Series 6 line.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">What's the difference between THCA and THC on a lab label?</h3>
                    <p className="text-gray-700">
                      THCA is the raw, non-active form of THC found in unheated cannabis. It converts to active Delta-9 THC through heat exposure (decarboxylation) during vaporizing or smoking. Lab labels often list both numbers separately.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Are liquid diamonds stronger than distillate?</h3>
                    <p className="text-gray-700">
                      They can be, though both categories test in similarly high ranges. The key difference is terpene content — distillate is typically stripped of terpenes during processing, while liquid diamonds retain a live, naturally-derived terpene profile.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">How do I verify the potency of a liquid diamond product?</h3>
                    <p className="text-gray-700">
                      Check the product's Certificate of Analysis (COA), usually accessible via a QR code on the packaging. The COA should list a batch-specific THC/THCA percentage from an independent, licensed testing lab.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Why do liquid diamond products taste different from distillate vapes?</h3>
                    <p className="text-gray-700">
                      Because the terpene sauce surrounding the THCA crystals is preserved from fresh-frozen plant material rather than added back synthetically after extraction, which is also why flavor varies more by cultivar in liquid diamond products.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Is a higher THC percentage always better?</h3>
                    <p className="text-gray-700">
                      Not necessarily for everyone — terpene profile, extraction method, and product quality all factor into the overall experience, not just the raw percentage. Checking the full COA rather than the percentage alone gives a more complete picture.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More from Luigi Oil</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• Shop <Link href="/products/series-6" className="text-[#D4AF37] hover:text-[#C5A028]">Series 6 Live Resin + Liquid Diamond Disposables</Link></li>
                  <li>• See the full <Link href="/products/fattones" className="text-[#D4AF37] hover:text-[#C5A028]">Fattones lineup</Link> and hash rosin infusion details</li>
                  <li>• Browse <Link href="/products/rosin-pens" className="text-[#D4AF37] hover:text-[#C5A028]">Rosin Pens</Link> for solventless live rosin</li>
                  <li>• Learn more in our guide: <Link href="/blog/how-to-open-a-luigi-preroll" className="text-[#D4AF37] hover:text-[#C5A028]">How to Open a Luigi Preroll</Link></li>
                </ul>
              </section>

            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  )
}
