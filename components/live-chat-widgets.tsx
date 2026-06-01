"use client"

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import Script from 'next/script'

// Telegram Icon SVG
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

export function LiveChatWidgets() {
  const [telegramOpen, setTelegramOpen] = useState(false)

  // Send visitor notification to live chat admin
  useEffect(() => {
    const hasNotified = sessionStorage.getItem('visitor_notified')
    
    if (!hasNotified) {
      // Get visitor info
      const getVisitorInfo = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/')
          const data = await response.json()
          
          // Send notification to Chatway
          if (window.Chatway) {
            window.Chatway.triggerCustomEvent('visitor_entered', {
              location: `${data.city}, ${data.country_name}`,
              country_code: data.country_code,
              ip: data.ip,
              timestamp: new Date().toLocaleTimeString(),
              page: window.location.pathname,
            })
          }
          
          sessionStorage.setItem('visitor_notified', 'true')
        } catch (error) {
          console.log('Error sending visitor notification:', error)
        }
      }
      
      // Delay to ensure Chatway is loaded
      setTimeout(getVisitorInfo, 2000)
    }
  }, [])

  return (
    <>
      {/* Chatway Live Chat Script - Right Side */}
      <Script
        id="chatway"
        strategy="lazyOnload"
        src="https://cdn.chatway.app/widget.js?id=E6I4Y5DUxnGq"
      />

      {/* Telegram Chat Widget - Left Side */}
      <div className="fixed left-4 bottom-4 z-50">
        {telegramOpen && (
          <div className="mb-3 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden w-80 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-[#0088cc] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TelegramIcon className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold">Luigi Support</h3>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setTelegramOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close Telegram chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-muted/30">
              <p className="text-sm text-muted-foreground mb-4">
                Chat with us on Telegram for instant support, order inquiries, and wholesale questions.
              </p>
              <a
                href="https://t.me/luigiofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <TelegramIcon className="w-5 h-5" />
                Open Telegram Chat
              </a>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setTelegramOpen(!telegramOpen)}
          className="w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Open Telegram chat"
        >
          {telegramOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <TelegramIcon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Custom styles to position Chatway on right */}
      <style jsx global>{`
        #chatway-widget-container {
          right: 16px !important;
          left: auto !important;
          bottom: 16px !important;
        }
      `}</style>
    </>
  )
}
