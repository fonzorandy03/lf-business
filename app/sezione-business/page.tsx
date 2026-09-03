import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessHero } from '@/components/business/BusinessHero'
import { BusinessIntro } from '@/components/business/BusinessIntro'
import { BusinessAreas } from '@/components/business/BusinessAreas'
import { BusinessCTA } from '@/components/business/BusinessCTA'

export const metadata: Metadata = {
  title: 'Sezione Business — LF Business | Guiding Your Business Worldwide',
  description:
    'Consulenza legale e strategica per l’internazionalizzazione delle imprese, la compravendita di crediti fiscali, il commercio di prodotti petroliferi e i mercati delle materie prime.',
  openGraph: {
    title: 'Sezione Business — LF Business',
    description:
      'Competenze legali e strategiche per imprese, commercio e mercati internazionali.',
    images: ['/images/business-hero.png'],
  },
}

export default function SezioneBusinessPage() {
  return (
    <>
      <Header />
      <main>
        <BusinessHero />
        <BusinessIntro />
        <BusinessAreas />
        <BusinessCTA />
      </main>
      <Footer />
    </>
  )
}
