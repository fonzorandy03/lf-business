import { Reveal } from '@/components/Reveal'
import { AreaCard } from '@/components/business/AreaCard'
import { BUSINESS_AREAS } from '@/lib/business'

export function BusinessAreas() {
  const [feature, second, third, fourth] = BUSINESS_AREAS

  return (
    <section id="aree" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-40">
        {/* Section header */}
        <Reveal className="flex flex-col gap-6 border-b border-border pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Aree di attività
            </span>
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-ink text-balance sm:text-5xl lg:text-6xl">
              Esplora le aree di attività
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-stone lg:pb-2">
            Competenze legali e strategiche per imprese, commercio e mercati internazionali.
          </p>
        </Reveal>

        {/* Editorial grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Feature card — large, left */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <AreaCard
              area={feature}
              layout="feature"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          {/* Two medium cards, right column */}
          <Reveal className="lg:col-span-5" delay={80}>
            <AreaCard area={second} sizes="(max-width: 1024px) 100vw, 42vw" />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={160}>
            <AreaCard area={third} sizes="(max-width: 1024px) 100vw, 42vw" />
          </Reveal>

          {/* Wide card, full width */}
          <Reveal className="lg:col-span-12" delay={120}>
            <AreaCard
              area={fourth}
              layout="wide"
              sizes="(max-width: 1024px) 100vw, 100vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
