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