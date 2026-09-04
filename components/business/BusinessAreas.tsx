import { Reveal } from '@/components/Reveal'
import { AreaCard } from '@/components/business/AreaCard'
import { BUSINESS_AREAS } from '@/lib/business'

export function BusinessAreas() {
  return (
    <section id="aree" className="business-areas relative scroll-mt-24 overflow-hidden bg-ink text-ivory">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <Reveal className="grid gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl lg:col-span-8">
            <span className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Expertise
            </span>
            <h2 className="font-serif text-4xl font-medium leading-[1.02] text-ivory text-balance sm:text-5xl lg:text-7xl">
              Tre aree. Una visione integrata.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ivory/55 lg:col-span-4 lg:pb-2">
            Competenze legali e strategiche coordinate per tutelare le operazioni, aprire nuovi
            mercati e sostenere decisioni imprenditoriali consapevoli.
          </p>
        </Reveal>

        <div className="relative -mt-px grid grid-cols-1 gap-px overflow-hidden border-x border-b border-ivory/15 bg-ivory/15 lg:grid-cols-3">
          {BUSINESS_AREAS.map((area, index) => (
            <Reveal key={area.number} delay={index * 100}>
              <AreaCard area={area} sizes="(max-width: 1024px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
