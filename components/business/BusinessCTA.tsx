import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'

export function BusinessCTA() {
  return (
    <section className="business-cta relative overflow-hidden bg-ink">
      <div className="business-cta-glow pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
      <div className="business-cta-orbit pointer-events-none absolute right-[8%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-gold/20 lg:block" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 py-28 sm:px-10 sm:py-32 lg:grid-cols-12 lg:items-center lg:py-44">
        <Reveal className="max-w-4xl lg:col-span-8">
          <span className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-soft">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Un primo confronto
          </span>
          <h2 className="mt-7 font-serif font-medium leading-[1.02] text-ivory text-balance text-4xl sm:text-6xl lg:text-7xl">
            Il prossimo passo può iniziare da una conversazione.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
            Raccontaci obiettivi, mercato e criticità. Metteremo a fuoco le priorità e il
            percorso più adatto per tutelare e sviluppare il vostro progetto.
          </p>
          <div className="mt-11">
            <CTAButton href="/contattaci" variant="primary">
              Richiedi un confronto riservato
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={160} className="relative lg:col-span-4">
          <div className="business-cta-note border border-ivory/15 bg-ivory/[0.035] p-7 backdrop-blur-sm sm:p-9">
            <p className="font-serif text-2xl leading-tight text-ivory">Un interlocutore diretto, dall’idea all’operazione.</p>
            <ul className="mt-8 space-y-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ivory/60">
              {['Ascolto diretto', 'Analisi preliminare', 'Approccio riservato'].map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-ivory/10 pt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
