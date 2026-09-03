import { Portrait } from './Portrait'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'

export function ProfessionalsSection() {
  return (
    <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* Avv. Luigi Ferrara */}
          <Reveal className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Portrait
                name="Avv. Luigi Ferrara"
                initials="LF"
                src="/images/luigi-ferrara-ritratto.png"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
                Fondatore · LF Business
              </p>
              <h3 className="font-serif text-3xl font-medium text-ink sm:text-4xl">
                Avv. Luigi Ferrara
              </h3>
              <span className="mt-5 mb-7 block h-px w-16 bg-gold" aria-hidden="true" />
              <div className="max-w-2xl space-y-5 text-[0.98rem] leading-relaxed text-foreground/80">
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
                  <a
                    href="https://www.fipainternational.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gold underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    www.fipainternational.com
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Avv. Nunzia Robustelli — layout speculare */}
          <Reveal className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:order-2">
              <Portrait
                name="Avv. Nunzia Robustelli"
                initials="NR"
                src="/images/nunzia-robustelli-enhanced.webp"
              />
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
                Diritto Societario e d&apos;Impresa
              </p>
              <h3 className="font-serif text-3xl font-medium text-ink sm:text-4xl">
                Avv. Nunzia Robustelli
              </h3>
              <span className="mt-5 mb-7 block h-px w-16 bg-gold" aria-hidden="true" />
              <div className="max-w-2xl space-y-5 text-[0.98rem] leading-relaxed text-foreground/80">
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
            </div>
          </Reveal>

          <Reveal className="flex justify-center">
            <CTAButton href="/contattaci" variant="primary">
              Contattaci
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
