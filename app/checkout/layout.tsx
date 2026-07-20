import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | Luigi Oil Premium Cannabis',
  description: 'Secure checkout for Luigi Oil premium cannabis products. Fast, safe, and discreet delivery. Multiple payment options including crypto.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Checkout | Luigi Oil',
    description: 'Complete your Luigi Oil order securely. Fast shipping, multiple payment methods.',
    type: 'website',
    url: 'https://www.luigiofficialbrand.com/checkout',
    images: [
      {
        url: 'https://www.luigiofficialbrand.com/og-images/checkout.png',
        width: 1200,
        height: 630,
        alt: 'Luigi Oil Secure Checkout',
      },
    ],
  },
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
