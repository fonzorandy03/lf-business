import { ResponsivePage } from '@/components/mobile/MobileFrame'
import { MobileContact } from '@/components/mobile/MobilePages'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ProfessionalsContact } from '@/components/contact/ProfessionalsContact'
import { DirectContactActions } from '@/components/contact/DirectContactActions'
import { StudioMapSection } from '@/components/contact/StudioMapSection'
import { ContactCTA } from '@/components/contact/ContactCTA'
import { FloatingContact } from '@/components/contact/FloatingContact'

export const metadata: Metadata = {
  title: 'Contattaci | Studio Legale LF Business',
  description:
    'Contatta lo Studio Legale LF Business: scrivici su WhatsApp, chiamaci o invia una richiesta tramite il modulo. Sede a Sarno (SA). Assistenza in diritto amministrativo, societario e d\'impresa.',
  openGraph: {
    title: 'Contattaci | Studio Legale LF Business',
    description:
      'Contatta lo Studio Legale LF Business: WhatsApp, telefono o modulo di richiesta. Sede a Sarno (SA).',
    type: 'website',
  },
}

export default function ContattaciPage() {
  return (
    <ResponsivePage mobile={<MobileContact />}>
      <Header />
      <main id="contenuto">
        <ContactHero />
        <ProfessionalsContact />
        <DirectContactActions />
        <StudioMapSection />
        <ContactCTA />
        <FloatingContact />
      </main>
      <Footer />
    </ResponsivePage>
  )
}
