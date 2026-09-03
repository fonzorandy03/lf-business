import Image from 'next/image'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow="Chi siamo" title="Un team, due discipline, una visione internazionale." />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 max-w-md">
                <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Network professionale
                </p>
                <div className="sole-card group relative overflow-hidden border border-ink/10 bg-ink px-7 py-7 text-ivory shadow-[0_18px_45px_-28px_rgba(0,0,0,0.8)]">
                  <div className="sole-card-glow absolute inset-0" aria-hidden="true" />
                  <div className="relative flex items-center justify-between gap-7">
                    <div className="flex min-h-16 min-w-36 items-center justify-center bg-white px-5 py-4 transition-transform duration-500 group-hover:-translate-y-1">
                      <Image
                        src="/images/logo-il-sole-24-ore.svg"
                        alt="Il Sole 24 ORE"
                        width={195}
                        height={72}
                        className="h-auto w-36"
                      />
                    </div>
                    <div className="min-w-0 border-l border-gold/45 pl-6">
                      <p className="font-serif text-xl leading-tight text-ivory">Partner del network</p>
                      <p className="mt-2 text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-gold-soft">
                        Competenze e relazioni professionali
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-6 h-px overflow-hidden bg-white/10">
                    <span className="sole-card-line block h-full w-1/3 bg-gold" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="relative max-w-3xl lg:pt-2">
                <div className="relative overflow-hidden bg-secondary/65 px-7 py-8 sm:px-9 sm:py-10">
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gold" />
                  <span aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-gold/15" />
                  <span aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-gold/20" />
                  <p className="relative font-serif text-xl leading-[1.55] text-ink sm:text-[1.38rem]">
                    L&apos;Avv. Luigi Ferrara e l&apos;Avv. Nunzia Robustelli costituiscono il team
                    professionale di{' '}
                    <span className="font-medium text-ink">LF Business</span>, realtà che integra
                    competenze altamente specialistiche nel diritto amministrativo, societario e
                    d&apos;impresa, offrendo altresì assistenza legale e consulenza strategica alle
                    imprese, con particolare attenzione ai processi di internazionalizzazione e allo
                    sviluppo delle attività economiche sia in ambito nazionale sia internazionale.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
