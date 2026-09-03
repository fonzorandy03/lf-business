import { Reveal } from '@/components/Reveal'

const pillars = [
  {
    n: '01',
    t: 'Visione internazionale',
    d: 'Una rete consolidata di relazioni istituzionali, consolari e operative a supporto dell’espansione sui mercati esteri.',
  },
  {
    n: '02',
    t: 'Approccio sartoriale',
    d: 'Ogni operazione è costruita sulle esigenze specifiche dell’impresa, tra diritto, strategia e negoziazione.',
  },
  {
    n: '03',
    t: 'Rigore e trasparenza',
    d: 'Sicurezza giuridica in ogni fase, dalla due diligence alla definizione delle garanzie contrattuali.',
  },
]

export function BusinessIntro() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Chi guida i vostri progetti
            </span>
            <p className="font-serif text-3xl font-medium leading-[1.15] text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
              Integriamo competenze legali e strategiche per accompagnare le imprese nello
              sviluppo delle attività economiche, in Italia e nel mondo.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="flex flex-col divide-y divide-border">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.n} delay={i * 90} className="flex gap-6 py-7 first:pt-0">
                  <span className="font-serif text-xl text-gold" aria-hidden="true">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{p.t}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
