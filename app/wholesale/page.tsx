"use client"

import { useState } from "react"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/age-verification"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Send, CheckCircle, Package, ShoppingCart, Check } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

const wholesaleProducts = [
  {
    id: "fattones",
    name: "Fattones",
    description: "4-in-1 premium packs with glass tip blunts, infused prerolls, minis, and hash gummies",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-OxiuQ3JOKiYpyMGJhNXNx7v0JwA2J3.jpg",
    retailPrice: "$35",
    href: "/products/fattones",
    pricing: [
      { units: 20, price: "$350", perUnit: "$17.50" },
      { units: 50, price: "$700", perUnit: "$14" },
      { units: 100, price: "$1,200", perUnit: "$12" },
      { units: 200, price: "$2,300", perUnit: "$11.50" },
      { units: 500, price: "$5,000", perUnit: "$10" },
      { units: "1,000", price: "$9,000", perUnit: "$9" },
      { units: "5,000", price: "$42,000", perUnit: "$8.40" },
      { units: "10,000", price: "$75,000", perUnit: "$7.50" },
    ]
  },
  {
    id: "series-6",
    name: "The Series 6 Collection",
    description: "Live resin liquid diamond vapes with matching infused prerolls",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-NbDI6bormy6FAVRMlAQlDO1Sgr2ax5.jpg",
    retailPrice: "$30",
    href: "/products/series-6",
    pricing: [
      { units: 20, price: "$300", perUnit: "$15" },
      { units: 50, price: "$600", perUnit: "$12" },
      { units: 100, price: "$1,100", perUnit: "$11" },
      { units: 200, price: "$2,000", perUnit: "$10" },
      { units: 500, price: "$4,500", perUnit: "$9" },
      { units: "1,000", price: "$8,500", perUnit: "$8.50" },
      { units: "5,000", price: "$40,000", perUnit: "$8" },
      { units: "10,000", price: "$70,000", perUnit: "$7" },
    ]
  },
  {
    id: "rosin-pens",
    name: "Rosin Pens",
    description: "Premium rosin vape devices paired with 1-gram infused blunts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OG-RESERVE--6045HM9VKkLCniR70yFVcnR864SqQQ.png",
    retailPrice: "$30",
    href: "/products/rosin-pens",
    pricing: [
      { units: 20, price: "$300", perUnit: "$15" },
      { units: 50, price: "$600", perUnit: "$12" },
      { units: 100, price: "$1,100", perUnit: "$11" },
      { units: 200, price: "$2,000", perUnit: "$10" },
      { units: 500, price: "$4,500", perUnit: "$9" },
      { units: "1,000", price: "$8,500", perUnit: "$8.50" },
      { units: "5,000", price: "$40,000", perUnit: "$8" },
      { units: "10,000", price: "$70,000", perUnit: "$7" },
    ]
  }
]

const benefits = [
  "Premium quality products with consistent potency",
  "Strong brand recognition in California market",
  "Competitive wholesale pricing and terms",
  "Dedicated account management and support",
  "Marketing materials and point-of-sale displays",
  "Fast and reliable distribution network",
]

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Luigi Oil Wholesale Products",
  "description": "Premium cannabis wholesale products for licensed dispensaries and retailers. Includes Fattones 4-in-1 packs starting at $22.50/unit, Series 6 live resin disposables from $7.125/unit, and Rosin Pens from $8.25/unit. Competitive bulk pricing with dedicated account management and fast California distribution.",
  "brand": { "@type": "Brand", "name": "Luigi Oil" },
  "image": "https://www.luigiofficialbrand.com/og-image.jpg",
  "url": "https://www.luigiofficialbrand.com/wholesale",
  "sku": "LUIGI-WHOLESALE-001",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "7.125",
    "highPrice": "22.50",
    "offerCount": "24",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Luigi Oil" },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US",
        "addressRegion": "CA"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": "0",
          "maxValue": "1",
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": "1",
          "maxValue": "3",
          "unitCode": "DAY"
        }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "US",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": "14",
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "itemCondition": "https://schema.org/NewCondition"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "300",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function WholesalePage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [selectedPricing, setSelectedPricing] = useState<Record<string, number | null>>({
    "fattones": null,
    "series-6": null,
    "rosin-pens": null,
  })
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    license: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addItem } = useCart()

  const handleSelectPricing = (productId: string, index: number) => {
    setSelectedPricing(prev => ({
      ...prev,
      [productId]: index
    }))
  }

  const handleAddToCart = (productId: string) => {
    const product = wholesaleProducts.find(p => p.id === productId)
    const selectedIndex = selectedPricing[productId]
    if (!product || selectedIndex === null || selectedIndex === undefined) return

    const tier = product.pricing[selectedIndex]
    addItem({
      id: `${productId}-${selectedIndex}`,
      name: `${product.name} - ${tier.units} units`,
      price: tier.price.replace(/[$,]/g, ''),
      image: product.image,
      quantity: 1,
      productName: product.name,
      productImage: product.image,
      units: typeof tier.units === 'number' ? tier.units : parseInt(tier.units.replace(/,/g, '')),
      perUnit: tier.perUnit,
      source: "wholesale",
    })

    setAddedToCart(prev => ({
      ...prev,
      [productId]: true
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        license: "",
        message: "",
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <AgeVerification />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ORANGE-LAVA-KUSH-U6vHeCWeI0G9nUmBdicCOGrpL8kVYs.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D4AF37]/10 mb-4 md:mb-8">
                <Building2 className="h-6 w-6 md:h-8 md:w-8 text-[#D4AF37]" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 md:mb-6">
                Wholesale Partnership
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We ship wholesale worldwide! No application or form required - just reach out and start ordering today.
              </p>
            </div>
          </div>
        </section>

        {/* Products with Pricing */}
        <section className="py-10 md:py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Wholesale Pricing
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Volume-based pricing for all our product lines.
              </p>
            </div>

            <div className="space-y-4 md:space-y-8">
              {wholesaleProducts.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden">
                  {/* Product Header */}
                  <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 lg:p-8">
                    {/* Product Image */}
                    <div className="flex items-center justify-center bg-white rounded-lg md:rounded-xl p-4 md:p-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain max-h-[150px] md:max-h-[250px] w-auto"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="md:col-span-2 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        <Package className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                        <span className="text-xs md:text-sm text-gray-500">Wholesale Available</span>
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <span className="text-xs md:text-sm text-gray-500">Retail:</span>
                        <span className="text-base md:text-lg font-bold text-gray-900">{product.retailPrice}</span>
                      </div>
                      
                      <button
                        onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                        className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-[#D4AF37] text-black text-sm md:text-base font-semibold rounded-lg hover:bg-[#C5A028] transition-colors w-full md:w-fit"
                      >
                        {expandedProduct === product.id ? "Hide Pricing" : "View Pricing"}
                      </button>
                    </div>
                  </div>

                  {/* Pricing Table */}
                  {expandedProduct === product.id && (
                    <div className="px-0 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 animate-fade-in">
                      <div className="bg-black md:rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-gray-800">
                          <h4 className="text-base md:text-lg font-bold text-white">
                            add to your cart
                          </h4>
                        </div>
                        <div>
                          <table className="w-full text-sm md:text-base table-fixed">
                            <thead>
                              <tr className="border-b border-gray-800">
                                <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#D4AF37] w-10 md:w-12"></th>
                                <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#D4AF37]">Units</th>
                                <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#D4AF37]">Total Price</th>
                                <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#D4AF37] hidden sm:table-cell">Each</th>
                              </tr>
                            </thead>
                            <tbody>
                              {product.pricing.map((tier, index) => {
                                const isSelected = selectedPricing[product.id] === index
                                
                                return (
                                  <tr 
                                    key={index} 
                                    onClick={() => handleSelectPricing(product.id, index)}
                                    className={`border-b border-gray-800 last:border-b-0 cursor-pointer transition-colors ${
                                      isSelected 
                                        ? 'bg-[#D4AF37]/20 hover:bg-[#D4AF37]/25' 
                                        : 'hover:bg-gray-900/50 active:bg-gray-900/70'
                                    }`}
                                  >
                                    <td className="py-4 px-3 md:px-4">
                                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        isSelected 
                                          ? 'border-[#D4AF37] bg-[#D4AF37]' 
                                          : 'border-gray-600'
                                      }`}>
                                        {isSelected && <Check className="w-3 h-3 md:w-4 md:h-4 text-black" />}
                                      </div>
                                    </td>
                                    <td className="py-4 px-3 md:px-4 text-white font-bold text-sm md:text-base">{tier.units} units</td>
                                    <td className="py-4 px-3 md:px-4 text-white font-bold text-sm md:text-base">{tier.price}</td>
                                    <td className="py-4 px-3 md:px-4 text-gray-400 text-sm md:text-base hidden sm:table-cell">{tier.perUnit}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                        
                        {/* Add to Cart Button */}
                        <div className="p-3 md:p-4 border-t border-gray-800">
                          <div className="flex flex-col gap-3 md:gap-4">
                            {selectedPricing[product.id] !== null && selectedPricing[product.id] !== undefined ? (
                              <div className="text-white text-sm md:text-base flex items-center justify-between md:justify-start">
                                <span className="text-gray-400">Selected: </span>
                                <span className="ml-1 md:ml-2">
                                  <span className="font-bold">
                                    {product.pricing[selectedPricing[product.id]!].units} units
                                  </span>
                                  <span className="mx-1 md:mx-2 text-gray-600">-</span>
                                  <span className="text-[#D4AF37] font-bold">
                                    {product.pricing[selectedPricing[product.id]!].price}
                                  </span>
                                </span>
                              </div>
                            ) : (
                              <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                                Select a quantity above
                              </div>
                            )}
                            <Button
                              onClick={() => handleAddToCart(product.id)}
                              disabled={selectedPricing[product.id] === null || selectedPricing[product.id] === undefined}
                              className={`w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold transition-all ${
                                addedToCart[product.id]
                                  ? 'bg-green-600 hover:bg-green-600 text-white'
                                  : 'bg-[#D4AF37] hover:bg-[#C5A028] text-black'
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                              {addedToCart[product.id] ? (
                                <>
                                  <Check className="w-4 h-4 mr-2" />
                                  Added
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  Add to Cart
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Form */}
        <section className="py-10 md:py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Benefits */}
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
                  Why Partner With Luigi Oil?
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 md:gap-4">
                      <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#D4AF37]" />
                      </span>
                      <span className="text-sm md:text-base text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 md:mt-12 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Worldwide Shipping</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    We ship wholesale worldwide! No application required - just reach out today.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 md:p-8 text-center animate-fade-in">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Send className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Thank you! Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
                      Contact Us for Wholesale
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <label htmlFor="businessName" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                            Business Name *
                          </label>
                          <Input
                            id="businessName"
                            required
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            placeholder="Your business name"
                            className="bg-gray-50 border-gray-200 text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                        <div>
                          <label htmlFor="contactName" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                            Contact Name *
                          </label>
                          <Input
                            id="contactName"
                            required
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            placeholder="Your name"
                            className="bg-gray-50 border-gray-200 text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="bg-gray-50 border-gray-200 text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 555-5555"
                            className="bg-gray-50 border-gray-200 text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="license" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                          License Number (optional)
                        </label>
                        <Input
                          id="license"
                          value={formData.license}
                          onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                          placeholder="Cannabis retail license #"
                          className="bg-gray-50 border-gray-200 text-sm md:text-base h-10 md:h-11"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-900 mb-1 md:mb-2">
                          Order Details
                        </label>
                        <Textarea
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your order needs..."
                          className="bg-gray-50 border-gray-200 resize-none text-sm md:text-base"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold py-5 md:py-6 text-sm md:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Wholesale Article */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <article className="prose prose-gray max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Luigi Oil Wholesale: Your Complete Guide to Buying Luigi Carts and Disposables in Bulk
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Looking for <strong>Luigi Oil wholesale</strong> opportunities? You&apos;ve come to the right place. As one of the most sought-after premium cannabis brands in the market, Luigi Oil has established itself as the gold standard for live resin liquid diamond products. Whether you&apos;re a licensed dispensary, retail store, or authorized distributor, our <strong>wholesale Luigi disposable</strong> program offers unmatched quality and competitive pricing that can transform your cannabis inventory.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Why Choose Luigi Oil Wholesale for Your Business?
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                When you <strong>buy Luigi 2G disposable wholesale</strong>, you&apos;re investing in products that practically sell themselves. Luigi Oil has built an incredible reputation among cannabis consumers who recognize quality when they see it. Our live resin liquid diamond extraction process delivers an experience that keeps customers coming back, which means faster inventory turnover and higher profit margins for your business.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                The <strong>Luigi carts wholesale</strong> program is designed with retailers in mind. We understand that you need reliable supply, consistent quality, and products that meet the highest standards. That&apos;s exactly what we deliver with every order. Our <strong>Luigi disposables wholesale</strong> packages come with full compliance documentation, lab testing results, and marketing support to help you succeed.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Our Premium Product Lines Available for Wholesale
              </h3>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Luigi Series 6 Wholesale</h4>

              <p className="text-gray-600 leading-relaxed mb-6">
                The <strong>Luigi Series 6 wholesale</strong> collection represents our flagship line of live resin liquid diamond disposables. Each Series 6 unit features a 2-gram capacity paired with a matching infused preroll, creating an unbeatable value proposition for your customers. With over 10 strain options including fan favorites like Orange Lava Kush, Black Diesel Milk, and Rage Berry Blitz, you&apos;ll have plenty of variety to satisfy diverse customer preferences.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>Luigi Series 6 master box wholesale</strong> options make it easy to stock up with variety packs or focus on your best-selling strains. The Series 6 line consistently ranks among our <strong>Luigi wholesale SKUs</strong> with the highest turnover rates, making them a smart choice for any retailer looking to maximize shelf efficiency.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Luigi Fattones Wholesale</h4>

              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Luigi Fattones wholesale</strong> has become one of our most requested product lines. These premium 4-in-1 packs include a glass-tip blunt, hash rosin infused preroll, mini joints, and infused gummies—all in one convenient package. The <strong>Luigi Fattones bulk buy</strong> option is perfect for retailers who want to offer their customers an exceptional value with multiple consumption methods in a single purchase.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                With 10 unique flavors including Cherry Pie, Watermelon Zkittlez, and Blue Razz Lime, the Fattones line offers something for everyone. These packs have become gift favorites and special occasion purchases, driving higher average transaction values for retailers who stock them.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Luigi Rosin Pen Wholesale</h4>

              <p className="text-gray-600 leading-relaxed mb-6">
                For the connoisseur market, our <strong>Luigi Rosin Pen wholesale</strong> program delivers pure, solventless hash rosin in convenient dual packs. Each pack includes a 1-gram rosin disposable device and a 1-gram rosin-infused blunt, offering customers the cleanest possible cannabis experience. The <strong>Luigi rosin pre rolls wholesale</strong> component has been particularly popular among customers who prioritize purity and premium extracts.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Luigi Wholesale Pricing and Bulk Options
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>Luigi wholesale pricing</strong> is structured to reward volume purchasing while maintaining the premium positioning that makes our products so valuable. <strong>Luigi bulk pricing</strong> tiers start at 20 units and scale up to 10,000+ units for major distributors. The more you order, the better your per-unit cost, allowing you to maintain healthy margins while offering competitive retail prices.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                The <strong>Luigi masterbox wholesale</strong> format is our most popular option for retailers. These carefully curated boxes contain either a single strain focus or a variety mix, depending on your preference. Our <strong>wholesale Luigi carts and disposables</strong> program offers flexible ordering to match your specific inventory needs and customer demographics.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Authenticity and Quality Assurance
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                In a market where counterfeits are a real concern, <strong>authentic Luigi Oil wholesale</strong> products come with full verification and tracking. Every <strong>Luigi 2G disposable wholesale pack</strong> includes batch-specific QR codes, lab testing certificates, and tamper-evident packaging. When you partner with us as a <strong>Luigi distributor</strong> or <strong>Luigi wholesale distributor</strong>, you&apos;re guaranteeing your customers the real product.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>Luigi live resin wholesale</strong> products undergo rigorous third-party testing for potency, purity, and safety. We test for pesticides, heavy metals, residual solvents, and microbial contaminants to ensure every product meets California&apos;s strict standards and exceeds customer expectations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Fast-Moving SKUs and Market Demand
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>Luigi wholesale SKUs</strong> are carefully selected based on market demand and sales velocity. The <strong>fast moving SKUs</strong> in our catalog consistently outperform competitors, with some retailers reporting 3-4x faster turnover compared to other premium brands. The <strong>wholesale Luigi 2 gram vape</strong> format particularly resonates with customers seeking value without compromising quality.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We also offer <strong>Luigi co-marketing wholesale</strong> opportunities for qualified partners. This includes promotional materials, display fixtures, and social media support to help drive awareness and sales in your market.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                The Luigi Oil Wholesale Program
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our <strong>Luigi Oil wholesale program</strong> is designed to be straightforward and accessible. Unlike some brands that require extensive applications and approval processes, we believe in making it easy for legitimate retailers to access our products. No complicated forms, no waiting periods—just reach out and start ordering.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                For those searching for <strong>Luigi disposable wholesale near me</strong>, we&apos;ve established a network of regional distributors who can provide quick delivery and local support. Whether you&apos;re in California, operating in another legal state, or looking for international distribution, we have solutions to meet your needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Getting Started with Luigi Wholesale
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Ready to <strong>buy Luigi prerolls wholesale</strong> or stock up on our entire product line? The process is simple. Contact our wholesale team through the form above, share your business details and volume requirements, and we&apos;ll provide a customized quote within 24 hours. Our account managers are here to help you build a successful partnership with Luigi Oil.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Remember, when you choose Luigi Oil as your premium cannabis supplier, you&apos;re not just buying products—you&apos;re partnering with a brand that your customers already know and trust. Our commitment to quality, consistency, and customer satisfaction has made us a leader in the premium cannabis market, and we&apos;re ready to help your business succeed.
              </p>

              <div className="bg-gray-100 p-6 rounded-xl mt-10">
                <p className="text-gray-700 font-semibold mb-2">Ready to Partner with Luigi Oil?</p>
                <p className="text-gray-600">
                  Contact us today to learn more about our wholesale pricing, product availability, and partnership opportunities. We ship worldwide and offer competitive terms for new accounts.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
