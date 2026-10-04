import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { buildLocalBusinessJsonLd } from '@/lib/seo'
import { CartProvider } from '@/components/cart/CartProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.seo.keywords,
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
