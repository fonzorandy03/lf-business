import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ProfessionalsSection } from '@/components/ProfessionalsSection'
import { PracticeAreasSection } from '@/components/PracticeAreasSection'
import { ContactLocationSection } from '@/components/ContactLocationSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProfessionalsSection />
        <PracticeAreasSection />
        <ContactLocationSection />
      </main>
      <Footer />
    </>
  )
}
