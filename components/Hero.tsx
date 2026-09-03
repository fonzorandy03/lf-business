import Image from 'next/image'
import { CTAButton } from './CTAButton'
import { HeroScrollCue } from './HeroScrollCue'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sfodo sito.png"
          alt="Veduta notturna di Sarno con il Vesuvio sullo sfondo"
          fill
          priority
          sizes="100vw"
          className="hero-cinematic-image object-cover object-center"
        />
        {/* Cinematic overlays for legibility */}
        <div className="hero-cinematic-overlay absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
        <div className="hero-light-sweep absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="hero-reveal hero-delay-1 mb-6 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Studio Legale · Business Advisory
          </p>

          <h1 className="hero-reveal hero-delay-2 font-serif text-5xl font-medium leading-[1.02] text-ivory text-balance sm:text-6xl lg:text-7xl">
            LF Business
          </h1>
          <p className="hero-reveal hero-delay-3 mt-4 font-serif text-2xl italic text-gold-soft sm:text-3xl lg:text-4xl text-pretty">
            &ldquo;Guiding Your Business Worldwide&rdquo;
          </p>

          <p className="hero-reveal hero-delay-4 mt-8 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Diritto amministrativo, societario e d&apos;impresa. Assistenza legale e consulenza
            strategica alle imprese, tra Italia e mercati internazionali.
          </p>

          <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href="#chi-siamo" variant="primary">
              Scopri lo Studio
            </CTAButton>
            <CTAButton href="/contattaci" variant="outline-light">
              Contattaci
            </CTAButton>
          </div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  )
}
