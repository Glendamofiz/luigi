"use client"

import { useState } from "react"
import { Check, Copy, ExternalLink } from "lucide-react"
import Image from "next/image"

// Crypto wallet configuration
const CRYPTO_WALLETS = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    address: "bc1qdzf289f3aje3wyy4wdwamgn7fjgmhzpkvq9g4e",
    network: "Bitcoin Network",
    icon: "/images/crypto/bitcoin.svg",
    color: "#F7931A",
    bgColor: "bg-orange-100",
    confirmations: "3 confirmations required",
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x324679f14e8C9c3541c70f0375661C1162798F7d",
    network: "Ethereum Network (ERC-20)",
    icon: "/images/crypto/ethereum.svg",
    color: "#627EEA",
    bgColor: "bg-blue-100",
    confirmations: "12 confirmations required",
  },
  usdt_trc20: {
    name: "USDT (TRC-20)",
    symbol: "USDT",
    address: "TMs8UYrrCPAVy91NaVvnBUq6yi9MrhZs9J",
    network: "Tron Network (TRC-20)",
    icon: "/images/crypto/usdt.svg",
    color: "#26A17B",
    bgColor: "bg-emerald-100",
    confirmations: "20 confirmations required",
    recommended: true,
  },
  usdt_erc20: {
    name: "USDT (ERC-20)",
    symbol: "USDT",
    address: "0x5388a676Bf130D1b6EE3EceC321c94aBf0d8b04f",
    network: "Ethereum Network (ERC-20)",
    icon: "/images/crypto/usdt.svg",
    color: "#26A17B",
    bgColor: "bg-emerald-100",
    confirmations: "12 confirmations required",
  },
  usdc: {
    name: "USDC (ERC-20)",
    symbol: "USDC",
    address: "0x5388a676Bf130D1b6EE3EceC321c94aBf0d8b04f",
    network: "Ethereum Network (ERC-20)",
    icon: "/images/crypto/usdc.svg",
    color: "#2775CA",
    bgColor: "bg-blue-100",
    confirmations: "12 confirmations required",
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    address: "8opnk9DQM6efokWBgRnTL4kwJSgg2hoXq7k8JaDDbDcX",
    network: "Solana Network",
    icon: "/images/crypto/solana.svg",
    color: "#9945FF",
    bgColor: "bg-purple-100",
    confirmations: "32 confirmations required",
  },
  tron: {
    name: "TRON",
    symbol: "TRX",
    address: "TMs8UYrrCPAVy91NaVvnBUq6yi9MrhZs9J",
    network: "Tron Network",
    icon: "/images/crypto/tron.svg",
    color: "#FF0013",
    bgColor: "bg-red-100",
    confirmations: "20 confirmations required",
  },
  litecoin: {
    name: "Litecoin",
    symbol: "LTC",
    address: "ltc1qqmhrwx3n0tcxqwzr68c9ng62s5zw8m3pg3s8kv",
    network: "Litecoin Network",
    icon: "/images/crypto/litecoin.svg",
    color: "#345D9D",
    bgColor: "bg-gray-100",
    confirmations: "6 confirmations required",
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "DOGE",
    address: "DKAJ77Txr1aLttrnBpYkeWZTdfnFw57Ru7",
    network: "Dogecoin Network",
    icon: "/images/crypto/dogecoin.svg",
    color: "#C2A633",
    bgColor: "bg-yellow-100",
    confirmations: "6 confirmations required",
  },
}

type CryptoKey = keyof typeof CRYPTO_WALLETS

interface CryptoCheckoutProps {
  totalAmount: number
  onCryptoSelect: (cryptoId: string) => void
  selectedCrypto: string
}

export function CryptoCheckout({ totalAmount, onCryptoSelect, selectedCrypto }: CryptoCheckoutProps) {
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [activeTab, setActiveTab] = useState<"popular" | "stablecoins" | "other">("popular")

  const cryptoCategories = {
    popular: ["bitcoin", "ethereum", "solana", "tron"] as CryptoKey[],
    stablecoins: ["usdt_trc20", "usdt_erc20", "usdc"] as CryptoKey[],
    other: ["litecoin", "dogecoin"] as CryptoKey[],
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }

  const selectedWallet = selectedCrypto ? CRYPTO_WALLETS[selectedCrypto as CryptoKey] : null

  // Generate QR code URL using a free QR code API
  const getQRCodeUrl = (address: string, crypto: string) => {
    // Using QR Server API for generating QR codes
    const qrData = encodeURIComponent(address)
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&bgcolor=ffffff&color=000000`
  }

  return (
    <div className="space-y-6">
      {/* 10% Discount Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-4 text-center">
        <p className="font-semibold text-lg">Pay with Crypto &amp; Save 10%</p>
        <p className="text-sm opacity-90">Your discounted total: <span className="font-bold">${(totalAmount * 0.9).toFixed(2)}</span></p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        {[
          { id: "popular", label: "Popular" },
          { id: "stablecoins", label: "Stablecoins" },
          { id: "other", label: "Other" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === tab.id
                ? "bg-[#D4AF37] text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Crypto Selection Grid */}
      <div className="grid grid-cols-3 gap-3">
        {cryptoCategories[activeTab].map((cryptoId) => {
          const crypto = CRYPTO_WALLETS[cryptoId]
          const isSelected = selectedCrypto === cryptoId
          
          return (
            <button
              key={cryptoId}
              type="button"
              onClick={() => onCryptoSelect(cryptoId)}
              className={`relative p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${
                isSelected
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {crypto.recommended && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                  Recommended
                </span>
              )}
              <div className={`w-12 h-12 ${crypto.bgColor} rounded-full flex items-center justify-center`}>
                <span className="text-2xl font-bold" style={{ color: crypto.color }}>
                  {crypto.symbol === "BTC" && "₿"}
                  {crypto.symbol === "ETH" && "Ξ"}
                  {crypto.symbol === "USDT" && "₮"}
                  {crypto.symbol === "USDC" && "$"}
                  {crypto.symbol === "SOL" && "◎"}
                  {crypto.symbol === "TRX" && "◆"}
                  {crypto.symbol === "LTC" && "Ł"}
                  {crypto.symbol === "DOGE" && "Ð"}
                </span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">{crypto.name}</p>
                <p className="text-xs text-gray-500">{crypto.network.split(" ")[0]}</p>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Payment Details */}
      {selectedWallet && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className={`w-16 h-16 ${selectedWallet.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <span className="text-3xl font-bold" style={{ color: selectedWallet.color }}>
                {selectedWallet.symbol === "BTC" && "₿"}
                {selectedWallet.symbol === "ETH" && "Ξ"}
                {selectedWallet.symbol === "USDT" && "₮"}
                {selectedWallet.symbol === "USDC" && "$"}
                {selectedWallet.symbol === "SOL" && "◎"}
                {selectedWallet.symbol === "TRX" && "◆"}
                {selectedWallet.symbol === "LTC" && "Ł"}
                {selectedWallet.symbol === "DOGE" && "Ð"}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Pay with {selectedWallet.name}</h3>
            <p className="text-sm text-gray-500">{selectedWallet.network}</p>
          </div>

          {/* Amount */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-1">Amount to Send</p>
            <p className="text-2xl font-bold text-gray-900">
              ${(totalAmount * 0.9).toFixed(2)} <span className="text-base font-normal text-gray-500">USD</span>
            </p>
            <p className="text-xs text-green-600 mt-1">10% crypto discount applied</p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <Image
                src={getQRCodeUrl(selectedWallet.address, selectedWallet.symbol)}
                alt={`${selectedWallet.name} QR Code`}
                width={180}
                height={180}
                className="rounded-lg"
                unoptimized
              />
            </div>
          </div>

          {/* Wallet Address */}
          <div>
            <p className="text-sm text-gray-500 mb-2 text-center">Wallet Address</p>
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-3">
              <code className="flex-1 text-sm font-mono break-all text-gray-800">
                {selectedWallet.address}
              </code>
              <button
                type="button"
                onClick={() => copyToClipboard(selectedWallet.address)}
                className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                  copiedAddress ? "bg-green-100 text-green-600" : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {copiedAddress ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            {copiedAddress && (
              <p className="text-sm text-green-600 text-center mt-2">Address copied to clipboard!</p>
            )}
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Important</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Send only <strong>{selectedWallet.symbol}</strong> to this address</li>
              <li>• {selectedWallet.confirmations}</li>
              <li>• Sending other coins may result in permanent loss</li>
              <li>• Payment will be verified within 30 minutes</li>
            </ul>
          </div>

          {/* Help Link */}
          <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-[#D4AF37] hover:underline"
            >
              Need help with crypto payment?
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {!selectedCrypto && (
        <div className="text-center py-8 text-gray-500">
          <p>Select a cryptocurrency above to see payment details</p>
        </div>
      )}
    </div>
  )
}
