"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Truck, CheckCircle, ArrowLeft, Trash2, Plus, Minus, MessageCircle, Wallet, Coins, AlertCircle, Upload } from "lucide-react"
import { CryptoCheckout } from "@/components/crypto-checkout"
import { getTotalQuantity, meetsMinimumQuantity, getCryptoDiscount, CRYPTO_DISCOUNT_RATE, getProductPageQuantity, getQuantityShortfall } from "@/lib/order-utils"
import Image from "next/image"
import Link from "next/link"

const COUNTRIES = [
  "United States",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
]

const USA_PAYMENT_METHODS = [
  { id: "chime", name: "Chime", icon: "/images/payments/chime.png" },
  { id: "zelle", name: "Zelle", icon: "/images/payments/zelle.png" },
  { id: "cashapp", name: "Cash App", icon: "/images/payments/cashapp.png" },
  { id: "applepay", name: "Apple Pay", icon: "/images/payments/applepay.png" },
  { id: "venmo", name: "Venmo", icon: "/images/payments/venmo.png" },
  { id: "paypal", name: "PayPal", icon: "/images/payments/paypal.png" },
  { id: "crypto", name: "Crypto", icon: "/images/payments/crypto.png" },
]

const INTERNATIONAL_PAYMENT_METHODS = [
  { id: "paypal", name: "PayPal", icon: "/images/payments/paypal.png" },
  { id: "crypto", name: "Crypto", icon: "/images/payments/crypto.png" },
]

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState<"cart" | "shipping" | "payment" | "confirmation">("cart")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  })

  const [selectedPayment, setSelectedPayment] = useState("")
  const [selectedCrypto, setSelectedCrypto] = useState("")

  const isUSA = shippingInfo.country === "United States"
  const paymentMethods = isUSA ? USA_PAYMENT_METHODS : INTERNATIONAL_PAYMENT_METHODS

  // Quantity validation (minimum 5 units for product-page items only)
  const totalQuantity = getTotalQuantity(items)
  const productPageQty = getProductPageQuantity(items)
  const quantityShortfall = getQuantityShortfall(items)
  const hasWholesaleOnly = items.every(item => item.source === "wholesale")
  const canCheckout = meetsMinimumQuantity(items)

  // Crypto 5% discount
  const isCrypto = selectedPayment === "crypto"
  const cryptoDiscount = isCrypto ? getCryptoDiscount(totalPrice) : 0
  const finalTotal = totalPrice - cryptoDiscount

  // Reset payment method when country changes and selected method is not available
  useEffect(() => {
    if (!isUSA && !["paypal", "crypto"].includes(selectedPayment)) {
      setSelectedPayment("")
      setSelectedCrypto("")
    }
  }, [shippingInfo.country, isUSA, selectedPayment])

  // Reset crypto selection when payment method changes
  useEffect(() => {
    if (selectedPayment !== "crypto") {
      setSelectedCrypto("")
    }
  }, [selectedPayment])

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPayment) return
    
    setIsProcessing(true)
    
    // Generate order number
    const newOrderNumber = `LV-${Date.now().toString(36).toUpperCase()}`
    setOrderNumber(newOrderNumber)
    
    // Prepare order data for email notification
    const orderData = {
      orderId: newOrderNumber,
      customerEmail: shippingInfo.email,
      customerName: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
      customerPhone: shippingInfo.phone,
      shippingAddress: {
        street: shippingInfo.address,
        city: shippingInfo.city,
        state: shippingInfo.state,
        zip: shippingInfo.zip,
        country: shippingInfo.country,
      },
      items: items.map(item => ({
        name: item.productName,
        quantity: item.quantity,
        price: parseFloat(item.price.replace('$', '').replace(',', '')),
        flavor: item.productName,
        image: item.productImage,
      })),
      subtotal: totalPrice,
      shipping: 0,
      cryptoDiscount: cryptoDiscount,
      total: finalTotal,
      paymentMethod: selectedPayment === "crypto" ? `crypto_${selectedCrypto}` : selectedPayment,
    }
    
    // Send order notification emails
    try {
      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Email API error:', response.status, errorData)
      } else {
        const result = await response.json()
        console.log('Order emails sent successfully:', result)
      }
    } catch (error) {
      console.error('Failed to send order email:', error)
    }
    
    setIsProcessing(false)
    setStep("confirmation")
    clearCart()
  }

  if (items.length === 0 && step !== "confirmation") {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center">
            <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-500 mb-8">Add some products to your cart to continue checkout.</p>
            <Link href="/products/series-6">
              <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Progress Steps */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              {[
                { key: "cart", label: "Cart", icon: ShoppingCart },
                { key: "shipping", label: "Shipping", icon: Truck },
                { key: "payment", label: "Payment", icon: Wallet },
                { key: "confirmation", label: "Complete", icon: CheckCircle },
              ].map((s, index) => {
                const Icon = s.icon
                const isActive = step === s.key
                const isPast = ["cart", "shipping", "payment", "confirmation"].indexOf(step) > index
                
                return (
                  <div key={s.key} className="flex items-center">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
                      isActive ? "bg-[#D4AF37] text-black" : isPast ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
                    </div>
                    {index < 3 && (
                      <div className={`w-8 md:w-16 h-0.5 mx-1 ${isPast ? "bg-green-600" : "bg-gray-200"}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Confirmation Step */}
          {step === "confirmation" && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                  Thank you for your order. We&apos;ve sent a confirmation email with your order details.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-500 mb-2">Order Number</p>
                  <p className="text-2xl font-bold text-gray-900">{orderNumber}</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-left">
                  <h3 className="font-semibold text-amber-800 mb-2">What happens next?</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>1. You&apos;ll receive a confirmation email at {shippingInfo.email}</li>
                    <li>2. Our team will verify your payment</li>
                    <li>3. Your order will be shipped within 1-2 business days</li>
                    <li>4. You&apos;ll receive tracking information via email</li>
                  </ul>
                </div>
                <Link href="/">
                  <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Cart & Checkout Steps */}
          {step !== "confirmation" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Summary - Now First on Mobile */}
              <div className="lg:col-span-1 lg:order-2">
                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg overflow-hidden">
                          <Image
                            src={item.productImage}
                            alt={item.productName}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.productName}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm font-bold text-[#D4AF37]">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Minimum order warnings */}
                  {!canCheckout && !hasWholesaleOnly && (
                    <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <p className="text-sm text-amber-800">
                          <span className="font-semibold">Product items minimum:</span> You have {productPageQty} units. Add{" "}
                          <span className="font-semibold">{quantityShortfall} more</span> to reach 5 unit minimum.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 lg:order-1">
                {/* Cart Review */}
                {step === "cart" && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Cart</h2>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden">
                            <Image
                              src={item.productImage}
                              alt={item.productName}
                              width={80}
                              height={80}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate">{item.productName}</h3>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {item.units} @ {item.perUnit}
                            </p>
                            <p className="text-[#D4AF37] font-bold mt-1">{item.price}</p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button 
                        onClick={() => setStep("shipping")}
                        disabled={!canCheckout}
                        className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6 font-semibold disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                      >
                        {canCheckout ? "Continue to Shipping" : `Need 5 Units (Have ${totalQuantity})`}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Shipping Form */}
                {step === "shipping" && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <button onClick={() => setStep("cart")} className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <h2 className="text-xl font-bold text-gray-900">Shipping Information</h2>
                    </div>
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                          <Input
                            required
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                            className="bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                          <Input
                            required
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <Input
                            type="email"
                            required
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                            className="bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <Input
                            type="tel"
                            required
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>
                      
                      {/* Country Dropdown */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                        <select
                          required
                          value={shippingInfo.country}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value, state: "" })}
                          className="w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {COUNTRIES.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                        <Input
                          required
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                          <Input
                            required
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                            className="bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {isUSA ? "State *" : "State/Province/Region *"}
                          </label>
                          {isUSA ? (
                            <select
                              required
                              value={shippingInfo.state}
                              onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                              className="w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select State</option>
                              {US_STATES.map((state) => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                          ) : (
                            <Input
                              required
                              value={shippingInfo.state}
                              onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                              placeholder="Province/Region"
                              className="bg-gray-50"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {isUSA ? "ZIP Code *" : "Postal Code *"}
                        </label>
                        <Input
                          required
                          value={shippingInfo.zip}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                          placeholder={isUSA ? "10001" : "Postal Code"}
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="pt-4">
                        <Button 
                          type="submit"
                          className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6 font-semibold"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Payment Form */}
                {step === "payment" && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <button onClick={() => setStep("shipping")} className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <h2 className="text-xl font-bold text-gray-900">Select Payment Method</h2>
                    </div>

                    {!isUSA && (
                      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                          International orders can be paid via PayPal or Bitcoin only.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      {/* Payment Methods Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setSelectedPayment(method.id)}
                            className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${
                              selectedPayment === method.id
                                ? "border-[#D4AF37] bg-[#D4AF37]/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="w-12 h-12 flex items-center justify-center">
                              {method.id === "chime" && <span className="text-3xl font-bold text-green-600">C</span>}
                              {method.id === "zelle" && <span className="text-3xl font-bold text-purple-600">Z</span>}
                              {method.id === "cashapp" && <span className="text-3xl font-bold text-green-500">$</span>}
                              {method.id === "applepay" && <span className="text-3xl"></span>}
                              {method.id === "venmo" && <span className="text-3xl font-bold text-blue-500">V</span>}
                              {method.id === "paypal" && <span className="text-3xl font-bold text-blue-600">P</span>}
                              {method.id === "crypto" && <Coins className="w-8 h-8 text-orange-500" />}
                            </div>
                            <span className="font-medium text-gray-900 text-sm">{method.name}</span>
                            {selectedPayment === method.id && (
                              <CheckCircle className="w-5 h-5 text-[#D4AF37] absolute top-2 right-2" />
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Payment Instructions */}
                      {selectedPayment && selectedPayment !== "crypto" && (
                        <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-6">
                          {/* Chime-specific display */}
                          {selectedPayment === "chime" && (
                            <div className="text-center space-y-4">
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Chime Payment</h3>
                                <p className="text-gray-600 mb-4">
                                  Send <span className="font-bold text-[#D4AF37]">${totalPrice.toLocaleString()}</span> to:
                                </p>
                                <div className="bg-white p-4 rounded-lg border border-green-300 inline-block">
                                  <p className="text-2xl font-bold text-green-700">$Albert-Ham-1</p>
                                </div>
                              </div>
                              
                              <div className="flex justify-center">
                                <img 
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chime-sSeIbtAyWzo8qmYZ8Xctw4mRZnUrDu.jpg"
                                  alt="Chime Payment QR Code"
                                  className="w-64 h-64 rounded-lg border-2 border-gray-300"
                                />
                              </div>

                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                                <h4 className="font-semibold text-blue-900 mb-2">How to pay:</h4>
                                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                                  <li>Open your Chime app</li>
                                  <li>Tap "Send Money" or scan the QR code above</li>
                                  <li>Enter username: <span className="font-bold">$Albert-Ham-1</span></li>
                                  <li>Enter amount: <span className="font-bold">${totalPrice.toLocaleString()}</span></li>
                                  <li>Complete the payment</li>
                                </ol>
                              </div>

                              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                                <h4 className="font-semibold text-amber-900 flex items-center gap-2">
                                  <Upload className="w-5 h-5" />
                                  Upload Payment Proof
                                </h4>
                                <p className="text-sm text-amber-800">
                                  After sending payment, please upload a screenshot confirming the transaction:
                                </p>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      console.log('Payment proof uploaded:', file.name)
                                    }
                                  }}
                                  className="w-full px-4 py-2 border border-amber-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-amber-100 file:text-amber-900 file:font-semibold hover:file:bg-amber-200"
                                />
                              </div>
                            </div>
                          )}

                          {/* Other payment methods */}
                          {selectedPayment !== "chime" && (
                            <div className="text-center">
                              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-[#D4AF37]" />
                              </div>
                              <h3 className="font-semibold text-gray-900 mb-2">
                                {paymentMethods.find(m => m.id === selectedPayment)?.name} Payment
                              </h3>
                              <p className="text-gray-600 mb-4">
                                To complete your payment of <span className="font-bold text-[#D4AF37]">${totalPrice.toLocaleString()}</span>, 
                                please contact our live chat agent for payment details.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  // Open live chat - can be connected to Tawk.to or other chat widget
                                  if (typeof window !== 'undefined') {
                                    const tawkAPI = (window as Window & { Tawk_API?: { toggle?: () => void } }).Tawk_API
                                    if (tawkAPI?.toggle) {
                                      tawkAPI.toggle()
                                    } else {
                                      // Fallback - scroll to bottom where chat widget usually is or show alert
                                      alert("Live chat is loading. Please click the chat icon in the bottom right corner, or try again in a moment.")
                                    }
                                  }
                                }}
                                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#C5A028] transition-colors"
                              >
                                <MessageCircle className="w-5 h-5" />
                                Contact Live Chat Agent
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Crypto Checkout */}
                      {selectedPayment === "crypto" && (
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                            <Coins className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <div className="text-sm text-green-800">
                              <p className="font-semibold">5% Crypto Discount Applied!</p>
                              <p>
                                You save ${cryptoDiscount.toLocaleString(undefined, { maximumFractionDigits: 2 })} —
                                {" "}pay only ${finalTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                {" "}<span className="line-through text-green-600/70">${totalPrice.toLocaleString()}</span>
                              </p>
                            </div>
                          </div>
                          <CryptoCheckout 
                            totalAmount={finalTotal}
                            onCryptoSelect={setSelectedCrypto}
                            selectedCrypto={selectedCrypto}
                          />
                        </div>
                      )}

                      <div className="pt-4">
                        <Button 
                          type="submit"
                          disabled={!selectedPayment || (selectedPayment === "crypto" && !selectedCrypto) || isProcessing}
                          className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6 font-semibold disabled:opacity-50"
                        >
                          {isProcessing ? "Processing..." : selectedPayment === "crypto" ? "Complete Crypto Order" : "Complete Order"}
                        </Button>
                        {selectedPayment === "crypto" && !selectedCrypto && (
                          <p className="text-sm text-amber-600 text-center mt-2">Please select a cryptocurrency to continue</p>
                        )}
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
