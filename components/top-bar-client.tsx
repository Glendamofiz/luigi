"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function TopBarClient() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white py-3 px-4 flex items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="font-semibold">Get 10% discount when you pay with Crypto (BTC, ETH, USDT, SOL &amp; more)</span>
        <span className="text-xs md:text-sm opacity-90">| Minimum order: $150</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 hover:bg-black/20 rounded-full p-1 transition-colors"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
