import Image from 'next/image'
import { CTAButton } from '@/components/CTAButton'
import { HeroScrollCue } from '@/components/HeroScrollCue'

export function ContactHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-hero-cinematic.png"
          alt="Studio professionale contemporaneo al tramonto"
          fill
          priority
          sizes="100vw"
          className="hero-cinematic-image object-cover object-center"
        />
        <div aria-hidden="true" className="hero-cinematic-overlay absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/42 to-ink/15" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/35" />
        <div className="hero-light-sweep absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <div className="max-w-3xl">
          <p className="hero-reveal hero-delay-1 mb-6 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Un confronto riservato
          </p>

          <h1 className="hero-reveal hero-delay-2 font-serif text-5xl font-medium leading-[1.02] text-ivory text-balance sm:text-6xl lg:text-7xl">
            Ogni soluzione inizia dall’ascolto.
          </h1>

          <p className="hero-reveal hero-delay-3 mt-5 font-serif text-2xl italic text-gold-soft sm:text-3xl lg:text-4xl">
            Parliamo della tua esigenza.
          </p>

          <p className="hero-reveal hero-delay-4 mt-8 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Raccontaci la questione che vuoi affrontare. Lo Studio valuterà con attenzione il contesto e il percorso più adatto.
          </p>

          <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href="#scrivimi" variant="primary">Scrivi allo Studio</CTAButton>
            <CTAButton href="tel:+393281344812" variant="outline-light">Chiama ora</CTAButton>
          </div>
        </div>
      </div>

      <HeroScrollCue targetId="professionisti-contatto" />
    </section>
  )
}
