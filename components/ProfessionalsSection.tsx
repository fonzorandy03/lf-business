import Image from 'next/image'
import { Reveal } from './Reveal'

export function ProfessionalsSection() {
  return (
    <section className="home-professionals relative overflow-hidden border-t border-border bg-secondary/35 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-gold/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-36 h-64 w-64 rounded-full border border-gold/15" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 grid gap-8 border-b border-ink/10 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              I professionisti
            </p>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-ink text-balance sm:text-5xl lg:text-6xl">
              Esperienza legale,
              <span className="italic text-gold"> visione d’impresa.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-stone lg:col-span-4 lg:col-start-9">
            Competenze complementari e un metodo condiviso per accompagnare persone e imprese
            nelle decisioni che contano.
          </p>
        </Reveal>

        <div className="space-y-10 lg:space-y-14">
          <Reveal>
            <article className="group grid overflow-hidden border border-ink/10 bg-background shadow-[0_30px_80px_-58px_rgba(15,18,21,0.65)] lg:grid-cols-12">
              <div className="relative min-h-[28rem] overflow-hidden lg:col-span-5 lg:min-h-[43rem]">
                <Image
                  src="/images/luigi-ferrara-ritratto.png"
                  alt="Ritratto dell’Avv. Luigi Ferrara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <span className="absolute left-7 top-7 font-serif text-5xl text-ivory/55">01</span>
                <span className="absolute inset-x-7 bottom-7 h-px origin-left scale-x-30 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>

              <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 lg:col-span-7 lg:px-16 lg:py-16">
                <span className="pointer-events-none absolute right-8 top-4 font-serif text-[9rem] leading-none text-ink/[0.035]" aria-hidden="true">LF</span>
                <div className="relative">
                  <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
                    Fondatore · LF Business
                  </p>
                  <h3 className="font-serif text-4xl font-medium text-ink sm:text-5xl">Avv. Luigi Ferrara</h3>
                  <span className="mb-8 mt-6 block h-px w-16 bg-gold transition-all duration-700 group-hover:w-28" aria-hidden="true" />
                  <div className="professional-bio max-w-2xl space-y-5 text-[0.96rem] leading-[1.78] text-foreground/75">
                    <p>
                      Avv. Luigi Ferrara, fondatore dello Studio Legale LF Business svolge da oltre
                      vent&apos;anni la propria attività professionale nei settori del diritto
                      amministrativo, con particolare specializzazione nel contenzioso dinanzi ai
                      Tribunali Amministrativi Regionali (TAR) e al Consiglio di Stato, nonché nella
                      consulenza legale e strategica alle imprese.
                    </p>
                    <p>
                      Iscritto all&apos;Ordine degli Avvocati di Nocera Inferiore dal 2003 (dopo aver
                      svolto la pratica forense dal 1999), è Avvocato patrocinante innanzi alla Corte di
                      Cassazione e alle Magistrature Superiori dal 2015.
                    </p>
                    <p>
                      Già componente del Gruppo Affari Amministrativi presso il Consiglio dell&apos;Ordine
                      degli Avvocati di Nocera Inferiore, è Partner 24 ORE, Presidente della Camera
                      Amministrativa di Nocera Inferiore e fondatore della divisione LF Business –
                      &ldquo;Guiding Your Business Worldwide&rdquo;, dedicata alla consulenza strategica,
                      all&apos;internazionalizzazione delle imprese e allo sviluppo di progetti di
                      investimento in ambito nazionale e internazionale e delle negoziazioni in campo dei
                      prodotti petroliferi essendo seller mandate della FIPA LLC International S.A.
                    </p>
                    <p>
                      <a href="https://www.fipainternational.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-medium text-gold transition-colors hover:text-ink">
                        www.fipainternational.com <span aria-hidden="true">↗</span>
                      </a>
                    </p>
                  </div>
                  <a href="/curriculum" className="mobile-profile-link mt-7 hidden min-h-12 items-center gap-3 border-t border-gold/30 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">Profilo e curriculum <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="group grid overflow-hidden border border-ink/10 bg-ink text-ivory shadow-[0_30px_80px_-52px_rgba(15,18,21,0.9)] lg:grid-cols-12">
              <div className="relative min-h-[28rem] overflow-hidden lg:order-2 lg:col-span-5 lg:min-h-[37rem]">
                <Image
                  src="/images/nunzia-robustelli-enhanced.webp"
                  alt="Ritratto dell’Avv. Nunzia Robustelli"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute right-7 top-7 font-serif text-5xl text-ivory/55">02</span>
                <span className="absolute inset-x-7 bottom-7 h-px origin-right scale-x-30 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>

              <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 lg:col-span-7 lg:px-16 lg:py-16">
                <span className="pointer-events-none absolute right-8 top-4 font-serif text-[9rem] leading-none text-white/[0.025]" aria-hidden="true">NR</span>
                <div className="relative">
                  <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold-soft">
                    Diritto Societario e d&apos;Impresa
                  </p>
                  <h3 className="font-serif text-4xl font-medium text-ivory sm:text-5xl">Avv. Nunzia Robustelli</h3>
                  <span className="mb-8 mt-6 block h-px w-16 bg-gold transition-all duration-700 group-hover:w-28" aria-hidden="true" />
                  <div className="professional-bio max-w-2xl space-y-5 text-[0.96rem] leading-[1.8] text-ivory/68">
                    <p>
                      L&apos;Avv. Nunzia Robustelli, iscritta al Foro di Nola, esercita la professione
                      forense con particolare specializzazione nel diritto societario e nel diritto
                      d&apos;impresa, settori nei quali assiste da anni società, imprenditori e
                      professionisti nella gestione delle principali problematiche giuridiche e
                      strategiche connesse all&apos;attività aziendale.
                    </p>
                    <p>
                      Nel corso della propria esperienza professionale ha maturato consolidate competenze
                      nella consulenza continuativa alle imprese, occupandosi della costituzione e
                      riorganizzazione societaria, della redazione e negoziazione di contratti
                      commerciali, della governance aziendale, delle operazioni straordinarie, della
                      gestione dei rapporti tra soci e della tutela degli interessi dell&apos;impresa,
                      prestando assistenza sia nella fase stragiudiziale sia in quella contenziosa.
                    </p>
                  </div>
                  <a href="/contattaci" className="mobile-profile-link mt-7 hidden min-h-12 items-center gap-3 border-t border-gold/30 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">Contatta la professionista <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

