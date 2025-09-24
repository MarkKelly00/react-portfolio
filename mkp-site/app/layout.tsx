import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Analytics from '@/components/Analytics';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mark Kelly Productions LLC – Web Design & Development',
  description: 'Custom web design, Shopify/Hydrogen storefronts, performance and e‑commerce by Mark Kelly Productions LLC.',
  metadataBase: new URL('https://markkelly.dev'),
  icons: {
    icon: [
      { url: '/assets/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon.ico' }
    ],
    apple: [
      { url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/assets/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/assets/favicon/site.webmanifest',
  openGraph: {
    title: 'Mark Kelly Productions LLC',
    description: 'Web design & development studio building high-performance experiences.',
    url: 'https://markkelly.dev',
    siteName: 'Mark Kelly Productions',
    images: ['/og.svg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Kelly Productions LLC',
    description: 'Web design & development studio building high-performance experiences.',
    images: ['/og.svg']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vbd3cub.css" />
      </head>
      <body className="min-h-screen antialiased gradient-accent">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mark Kelly Productions LLC',
          url: 'https://markkelly.dev',
          logo: '/og.svg'
        }} />
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Mark Kelly Productions',
          url: 'https://markkelly.dev',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://markkelly.dev/?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}