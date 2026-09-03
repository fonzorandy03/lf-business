import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'

export function BusinessCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-32 lg:py-44">
        <Reveal className="max-w-4xl">
          <span className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-soft">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            LF Business
          </span>
          <h2 className="mt-7 font-serif font-medium leading-[1.02] text-ivory text-balance text-4xl sm:text-6xl lg:text-7xl">
            Costruiamo insieme il prossimo progetto.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            Contatta LF Business per approfondire l’area di interesse e valutare le esigenze
            dell’impresa.
          </p>
          <div className="mt-11">
            <CTAButton href="/contattaci" variant="primary">
              Contattaci
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
