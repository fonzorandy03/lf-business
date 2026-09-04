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

        <section id="gallery-collection" className="gallery-collection relative scroll-mt-20 overflow-hidden bg-background py-24 sm:py-32">
          <span className="pointer-events-none absolute right-[4%] top-10 font-serif text-[12rem] leading-none text-ink/[0.025] sm:text-[18rem]" aria-hidden="true">21</span>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="relative mb-14 grid gap-8 border-b border-ink/10 pb-10 lg:grid-cols-12 lg:items-end md:mb-16">
              <div className="lg:col-span-8">
                <Reveal>
                  <p className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-gold">
                    <span className="h-px w-8 bg-gold" aria-hidden="true" /> La collezione
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
                    Storie professionali,<br /><span className="italic text-gold">in immagini.</span>
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-4">
                <Reveal delay={200}>
                  <p className="max-w-md text-pretty leading-relaxed text-ink/55">
                    Esplora gli ambienti, l&apos;attività professionale e gli eventi. Seleziona una categoria o apri un&apos;immagine per osservarla da vicino.
                  </p>
                </Reveal>
              </div>
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
