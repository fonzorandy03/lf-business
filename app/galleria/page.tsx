import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { GalleryHero } from '@/components/gallery/GalleryHero'
import { MasonryGallery } from '@/components/gallery/MasonryGallery'
import { GalleryTestimonials } from '@/components/gallery/GalleryTestimonials'
import { GalleryCTA } from '@/components/gallery/GalleryCTA'
import { allGalleryImages, galleryFilters } from '@/lib/gallery'

export const metadata: Metadata = {
  title: 'Galleria | LF Business – Studio Legale Luigi Ferrara',
  description:
    "Galleria fotografica dello Studio Legale LF Business: gli ambienti dello studio, l'attività professionale, gli incontri, i convegni e gli eventi istituzionali dell'Avv. Luigi Ferrara.",
  openGraph: {
    title: 'Galleria | LF Business',
    description:
      "Immagini dello Studio Legale LF Business: ambienti, attività professionale ed eventi istituzionali.",
    images: ['/images/non sfocata.png'],
    type: 'website',
  },
  alternates: { canonical: '/galleria' },
}

export default function GalleriaPage() {
  return (
    <>
      <Header />
      <main id="contenuto">
        <GalleryHero />

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                    La collezione
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-ink sm:text-5xl">
                    Uno sguardo sullo Studio
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-5 text-pretty leading-relaxed text-ink/60">
                    Seleziona una categoria per esplorare gli ambienti, l&apos;attività professionale
                    e gli eventi. Tocca un&apos;immagine per aprirla.
                  </p>
                </Reveal>
            </div>

            <MasonryGallery images={allGalleryImages} filters={galleryFilters} />
          </div>
        </section>

        {/* Rendered only when real, consented testimonials are provided */}
        <GalleryTestimonials />

        <GalleryCTA />
      </main>
      <Footer />
    </>
  )
}
