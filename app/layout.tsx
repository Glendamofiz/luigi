import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { CartProvider } from '@/contexts/cart-context'
import { CartSidebar } from '@/components/cart-sidebar'
import { LiveChatWidgets } from '@/components/live-chat-widgets'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Luigi Oil | Buy Luigi Carts & 2G Disposables Wholesale',
    template: '%s | Luigi Oil'
  },
  description: 'Shop authentic Luigi Oil — premium 2G disposables, Luigi carts, and live resin liquid diamonds. Wholesale pricing available. California's top THC vape brand. Order now.',
  keywords: ['Luigi Oil', 'Luigi Carts', 'Luigi 2G Disposable', 'THC disposable vape', 'cannabis rosin pen', 'premium pre roll', 'live resin disposable', 'Luigi Fattones', 'Luigi Series 6'],
  metadataBase: new URL('https://www.luigiofficialbrand.com'),
  verification: {
    google: 'i2XAPn15ELBl9z0Dtruyz5fEslU7vNAT61z4XbdLIws',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Luigi Oil | Premium Cannabis Disposables & Pre-Rolls',
    description: 'Luigi Oil produces premium THC disposable vapes, rosin pens, and pre-roll joints available at licensed dispensaries across California.',
    type: 'website',
    siteName: 'Luigi Oil',
    url: 'https://www.luigiofficialbrand.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luigi Oil - Premium Cannabis Disposables & Pre-Rolls',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luigi Oil | Premium Cannabis Disposables & Pre-Rolls',
    description: 'Premium THC disposable vapes, rosin pens, and pre-roll joints.',
    images: ['/og-image.png'],
    creator: '@luigioil',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <CartProvider>
          {children}
          <CartSidebar />
          <LiveChatWidgets />
        </CartProvider>
      </body>
    </html>
  )
}
