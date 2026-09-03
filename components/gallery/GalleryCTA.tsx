import { CTAButton } from '@/components/CTAButton'
import { Reveal } from '@/components/Reveal'

export function GalleryCTA() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
            Parliamo del tuo progetto
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-ivory sm:text-5xl">
            Ogni immagine racconta una relazione di fiducia
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ivory/65">
            Contatta lo Studio Legale LF Business per una consulenza dedicata in diritto
            amministrativo, societario e d&apos;impresa.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contattaci" variant="primary">
              Contattaci
            </CTAButton>
            <CTAButton href="/sezione-business" variant="outline-light">
              Scopri LF Business
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
