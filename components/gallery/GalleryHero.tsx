import Image from 'next/image'
import { heroImage } from '@/lib/gallery'
import { HeroScrollCue } from '@/components/HeroScrollCue'

export function GalleryHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="hero-cinematic-image object-cover object-center" />
        <div aria-hidden="true" className="hero-cinematic-overlay absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/68 to-ink/25" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/35" />
        <div className="hero-light-sweep absolute inset-0" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <div className="max-w-3xl">
          <p className="hero-reveal hero-delay-1 mb-6 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft"><span className="h-px w-10 bg-gold" aria-hidden="true" />Dentro LF Business</p>
          <h1 className="hero-reveal hero-delay-2 font-serif text-5xl font-medium leading-[0.98] text-ivory text-balance sm:text-6xl lg:text-7xl">Luoghi, incontri,<br /><span className="italic text-gold-soft">relazioni.</span></h1>
          <p className="hero-reveal hero-delay-3 mt-7 max-w-xl font-serif text-2xl italic text-gold-soft sm:text-3xl">Il lato visibile della nostra esperienza.</p>
          <p className="hero-reveal hero-delay-4 mt-8 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">Gli ambienti dello Studio, gli eventi e i momenti professionali che raccontano il nostro modo di lavorare.</p>
        </div>
      </div>
      <HeroScrollCue targetId="gallery-collection" />
    </section>
  )
}
