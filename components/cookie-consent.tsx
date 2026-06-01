"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("luigi-cookie-consent")
    if (!consent) {
      // Delay showing to not conflict with age verification
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("luigi-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("luigi-cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="mx-auto max-w-4xl bg-card border border-border rounded-lg p-4 md:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Cookie Notice
            </h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-gold text-background hover:bg-gold-light font-medium"
            >
              Accept
            </Button>
            <button
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
