import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { AddToCartButton } from "@/components/add-to-cart-button"

const site = "https://www.luigiofficialbrand.com"
const url = `${site}/products/peanut-butter-breath-blunt-2pk`
const images = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790271722-peanut_butter_breath_family-C9f1QXq076kJTdiPfKBeQcdYgDQgP2.avif",
  pack: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peanut-butter-breath_tube-zpFkuvYcHGqtR5s5JH6DpWk9xFTbXT.avif",
  blunt: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peanut-butter-breath_blunt-qmQqayyCI2HA4bB4c6PWtOaLZXRrOA.avif",
}
const product = { id: "peanut-butter-breath-blunt-2pk", name: "Peanut Butter Breath Blunt 2-Pack", fullName: "Peanut Butter Breath Blunt 2-Pack", image: images.hero }

export const metadata: Metadata = {
  title: "Peanut Butter Breath Rosin Blunt 2-Pack | LUIGI — $30",
  description: "Two 1.25g rosin-infused Peanut Butter Breath hybrid blunts. 2.5g total. Nutty, gassy, smooth. Just $30.",
  alternates: { canonical: url },
  openGraph: { title: "Peanut Butter Breath Rosin Blunt 2-Pack | LUIGI", description: "Two 1.25g rosin-infused hybrid blunts. 2.5g total for $30.", url, siteName: "LUIGI", type: "website", images: [{ url: images.hero, alt: "LUIGI Peanut Butter Breath Blunt 2-Pack" }] },
}

const sections = [
  ["Two Blunts. One Iconic Strain. Double the Fun.", "The LUIGI Rosin Infused Double Blunt Pack comes loaded with two 1.25g blunts, packing a total of 2.5g of bold, flavorful goodness. Perfect for sharing — or keeping both for yourself. Game on.\n\nA savory standout from ThugPug Genetics, Peanut Butter Breath combines nutty flavor, striking frost, and a cheerful high with substantial physical weight. Its hybrid classification leaves plenty of room for a decidedly slow finish.\n\nAt $30.00, you are getting 2.5g of rosin-infused flower across two full blunts — premium inputs and in-house production, without the inflated markup most rosin blunt packs carry."],
  ["Peanut Butter Breath — A Savory Standout from ThugPug Genetics", "Peanut Butter Breath is a hybrid bred by ThugPug Genetics from a Do-Si-Dos and Mendo Breath cross. It is known for striking frost coverage, dense structure, and an unmistakable nutty, earthy aroma with a gas-forward finish. When you light up a Peanut Butter Breath blunt, you get the full expression of the strain — no shortcuts, no filler."],
  ["Peanut Butter Breath Effects: Relaxed, Happy, Giggly", "Consumers consistently report three signature effects: relaxed, happy, and giggly. The high starts with a cheerful, mood-lifting wave that is social and easygoing. As the experience settles in, its physical weight becomes more apparent — substantial body calm paired with a light, playful head high and a gentle, unwinding descent."],
  ["Nutty, Earthy, Woody — A Flavor Experience Worth Savoring", "The first notes are creamy, nutty, and smooth. Earthy and woody undertones add depth, while a punch of classic gas cuts through the sweetness and keeps things grounded. It is a flavor journey that rewards slow, intentional draws."],
  ["Why We Infuse with Premium Rosin", "Most infused blunts use distillate, a refined THC extract stripped of natural terpenes and minor cannabinoids. LUIGI blunts are infused with premium rosin instead. Rosin is solventless, full-spectrum, and retains natural terpenes, flavonoids, and minor cannabinoids for a smoother, richer, more layered smoke."],
  ["How to Enjoy the Peanut Butter Breath Blunt 2-Pack", "Sharing: two 1.25g blunts make this pack ideal for sharing. Solo Session: one blunt is plenty for a full session, so start slow and take your time. Storage: keep your blunts in a cool, dark, dry place, ideally airtight and away from heat and direct sunlight."],
  ["How the Peanut Butter Breath Blunt 2-Pack Compares to Distillate Blunts", "Distillate packs are potent but often stripped of plant terpenes and minor cannabinoids, with flavor added back artificially. The LUIGI pack uses solventless, full-spectrum rosin that retains terpenes, flavonoids, and minor cannabinoids. Two 1.25g blunts for $30.00 means 2.5g of rosin-infused flower at a price point distillate packs barely compete with."],
  ["Premium Rosin Blunts at a $30 Price Point", "Comparable rosin-infused blunt packs in California often retail for $40 to $60. LUIGI delivers solventless-infused quality and two full 1.25g blunts for $30.00 because formulation, production, packaging, and distribution happen in-house. No middlemen. No inflated wholesale markups."],
  ["Why LUIGI?", "Born in Los Angeles and built from the ground up, LUIGI is a cannabis brand for people who appreciate quality without pretense. We combine premium inputs, innovative hardware, and unique formats to deliver flavor, potency, consistency, and value. Inspired by art, culture, hospitality, and community, LUIGI is more than a cannabis brand — it is a movement built around making every session memorable."],
]
const faq = [
  ["What is included?", "Two 1.25g rosin-infused blunts — 2.5g total."],
  ["What strain is in the pack?", "Peanut Butter Breath, a ThugPug Genetics hybrid bred from Do-Si-Dos and Mendo Breath."],
  ["What does it taste like?", "Nutty, earthy, woody, creamy, smooth, and gassy."],
  ["How much does it cost?", "$30.00 for the 2-pack."],
  ["How should I store the blunts?", "Store them in a cool, dark, dry place, ideally airtight and away from heat and direct sunlight."],
]
const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, brand: { "@type": "Brand", name: "LUIGI" }, description: "Two 1.25g rosin-infused Peanut Butter Breath hybrid blunts — 2.5g total.", image: [images.hero, images.pack, images.blunt], offers: { "@type": "Offer", priceCurrency: "USD", price: "30.00", availability: "https://schema.org/InStock", url } }
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"><Image src={src} alt={alt} fill className="object-contain p-5" sizes="(max-width: 768px) 100vw, 50vw" /></div>
}
function CopySection({ title, text }: { title: string; text: string }) {
  return <section className="border-t border-gray-200 py-12"><h2 className="mb-5 text-3xl font-bold text-gray-950">{title}</h2><p className="max-w-4xl whitespace-pre-line leading-8 text-gray-600">{text}</p></section>
}

export default function PeanutButterBreathBluntPage() {
  return <>
    <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <AgeVerification /><Header />
    <main className="bg-white pt-16 lg:pt-20">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20"><Link href="/products/blunt-2pk" className="text-sm font-semibold text-gray-600">← Back to Blunt 2pk</Link><div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center"><ProductImage src={images.hero} alt="LUIGI Peanut Butter Breath Rosin Infused Hybrid Blunt 2-Pack" /><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a7b16]">LUIGI Blunt 2pk</p><h1 className="mt-4 text-4xl font-bold text-gray-950 md:text-6xl">Peanut Butter Breath Blunt 2-Pack — Rosin-Infused Hybrid Blunts</h1><p className="mt-5 text-xl font-semibold text-gray-700">Nutty, gassy, and oh-so-smooth.</p><p className="mt-5 leading-8 text-gray-600">Two 1.25g blunts loaded with premium rosin — 2.5g total. Creamy peanut butter vibes, earthy terps, and a punch of classic gas.</p><p className="mt-6 font-semibold text-gray-700">Hybrid · 2 × 1.25g Blunts · 2.5g Total · Rosin Infused</p><p className="mt-6 text-3xl font-bold text-gray-950">$30.00</p><div className="mt-6"><AddToCartButton product={product} price="$30.00" priceNumber={30} units="2 × 1.25g" perUnit="per 2-pack" /></div></div></div></section>
      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-4 md:grid-cols-2 lg:px-8"><ProductImage src={images.pack} alt="Two 1.25g Peanut Butter Breath rosin blunts — 2.5g total" /><ProductImage src={images.blunt} alt="Close-up of Peanut Butter Breath rosin-infused blunt" /></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{sections.map(([title, text]) => <CopySection key={title} title={title} text={text} />)}<section className="border-t border-gray-200 py-12"><h2 className="mb-8 text-3xl font-bold text-gray-950">Frequently Asked Questions</h2><div className="space-y-7">{faq.map(([question, answer]) => <div key={question}><h3 className="text-lg font-semibold text-gray-950">{question}</h3><p className="mt-2 leading-7 text-gray-600">{answer}</p></div>)}</div></section><section className="mb-16 rounded-xl bg-black px-6 py-14 text-center text-white"><h2 className="text-3xl font-bold md:text-4xl">Ready to Experience the Peanut Butter Breath Blunt 2-Pack?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">Two 1.25g rosin-infused blunts. 2.5g total. Nutty, gassy, and oh-so-smooth. Just $30.00.</p><Link href="/products/peanut-butter-breath-blunt-2pk" className="mt-7 inline-flex rounded-full bg-[#D4AF37] px-7 py-3 font-bold text-black">Find a Dispensary — $30</Link></section></div>
    </main><Footer />
  </>
}
