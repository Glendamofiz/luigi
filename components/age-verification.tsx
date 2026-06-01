"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AgeVerification() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [isDeclined, setIsDeclined] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("luigi-age-verified")
    setIsVerified(verified === "true")
  }, [])

  const handleVerify = () => {
    localStorage.setItem("luigi-age-verified", "true")
    setIsVerified(true)
  }

  const handleDecline = () => {
    setIsDeclined(true)
  }

  // Don't render anything until we check localStorage
  if (isVerified === null) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (isVerified) {
    return null
  }

  if (isDeclined) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center max-w-md animate-fade-in shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-6">
            You must be 21 years or older to access this website.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsDeclined(false)}
            className="border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md w-full animate-scale-in shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Gold-Rich%20%281%29-DKHCgPgi3XATRZ1Bg2EhRpqBUTkDR7.png"
            alt="Luigi Oil Logo"
            width={200}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
          Are you over 21 years of age?
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={handleVerify}
            className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold py-6"
          >
            Yes
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1 border-gray-300 hover:border-gray-900 py-6"
          >
            No
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By entering this site you agree to the{" "}
          <Link href="/terms" className="underline hover:text-gray-900">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gray-900">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
