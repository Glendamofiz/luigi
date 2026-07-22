import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luigi Pre Rolls 2026 - Premium Infused Cannabis Pre-Rolls Guide',
  description: 'Discover Luigi pre rolls: premium hash rosin infused pre-rolls from Fattones to disposables. Complete flavor guide, effects, and where to buy authentic Luigi products.',
  keywords: 'luigi pre rolls, fattones pre rolls, infused pre rolls, premium cannabis joints',
  openGraph: {
    title: 'Luigi Pre Rolls 2026 - Premium Infused Cannabis Pre-Rolls Guide',
    description: 'Discover Luigi pre rolls: premium hash rosin infused pre-rolls from Fattones to disposables. Complete flavor guide, effects, and where to buy authentic Luigi products.',
    type: 'article',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_STRAWBERRY-OG-2400x2400-XnsFZ2tFQxAAOyVtJXFC0NOp73GG2k.jpg',
        width: 2400,
        height: 2400,
        alt: 'Luigi Fattones Strawberry OG premium infused pre-rolls',
      },
    ],
  },
  alternates: {
    canonical: '/blog/luigi-pre-rolls',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
