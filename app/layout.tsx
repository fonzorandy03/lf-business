import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Avv. Luigi Ferrara | LF Business – Diritto Amministrativo e Consulenza alle Imprese',
  description: `${SITE_DESCRIPTION} Diritto amministrativo, ricorsi al TAR e Consiglio di Stato, appalti pubblici, diritto societario e d'impresa, internazionalizzazione e consulenza strategica alle imprese.`,
  keywords: [
    'Avvocato Luigi Ferrara',
    'LF Business',
    'diritto amministrativo',
    'ricorsi TAR',
    'Consiglio di Stato',
    'appalti pubblici',
    'diritto societario',
    "diritto d'impresa",
    'internazionalizzazione',
    'consulenza alle imprese',
    'Sarno',
  ],
  authors: [{ name: 'Studio Legale LF Business' }],
  openGraph: {
    title: 'Avv. Luigi Ferrara | LF Business',
    description:
      "Diritto amministrativo, consulenza strategica alle imprese e internazionalizzazione. Studio Legale LF Business – Guiding Your Business Worldwide.",
    locale: 'it_IT',
    type: 'website',
    url: SITE_URL,
    siteName: 'LF Business',
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c1c1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
