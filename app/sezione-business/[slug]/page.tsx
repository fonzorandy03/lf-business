import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import { HeroScrollCue } from '@/components/HeroScrollCue'
import { MarketWidgets } from '@/components/business/MarketWidgets'
import { BUSINESS_AREAS, getBusinessArea } from '@/lib/business'

export function generateStaticParams() {
  return BUSINESS_AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getBusinessArea(slug)
  if (!area) return { title: 'Sezione Business — LF Business' }
  return {
    title: `${area.title} — LF Business`,
    description: area.description,
    openGraph: {
      title: `${area.title} — LF Business`,
      description: area.description,
      images: [area.image],
    },
  }
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getBusinessArea(slug)
  if (!area) notFound()

  const index = BUSINESS_AREAS.findIndex((a) => a.slug === area.slug)
  const next = BUSINESS_AREAS[(index + 1) % BUSINESS_AREAS.length]
  const isMarkets = area.slug === 'mercati-live'
  const isOil = area.slug === 'prodotti-petroliferi'
  const journey = isMarkets ? [
    { number: '01', title: 'Osservare', text: 'Segui Brent e WTI attraverso quotazioni, variazioni e andamento nei diversi intervalli temporali.' },
    { number: '02', title: 'Interpretare', text: 'Leggi i movimenti del petrolio nel contesto delle dinamiche commerciali e degli obiettivi dell’impresa.' },
    { number: '03', title: 'Decidere', text: 'Integra i dati di mercato con una valutazione strategica e legale consapevole delle opportunità e dei rischi.' },
  ] : isOil ? [
    { number: '01', title: 'Qualificare', text: 'Verifichiamo controparti, requisiti, documentazione e condizioni essenziali dell’operazione.' },
    { number: '02', title: 'Strutturare', text: 'Definiamo procedure, accordi e garanzie coerenti con gli standard del commercio energetico internazionale.' },
    { number: '03', title: 'Negoziare', text: 'Presidiamo il confronto tra le parti fino alla definizione di un assetto contrattuale chiaro e tutelato.' },
  ] : [
    { number: '01', title: 'Analisi del progetto', text: 'Obiettivi, mercato di destinazione, interlocutori e criticità vengono esaminati per definire priorità concrete.' },
    { number: '02', title: 'Architettura dell’operazione', text: 'Costruiamo accordi, garanzie e relazioni operative su misura, coordinando la dimensione legale e strategica.' },
    { number: '03', title: 'Sviluppo e presidio', text: 'Accompagniamo l’impresa nella negoziazione e nei rapporti con partner e istituzioni durante ogni fase del progetto.' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="area-detail-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
          <div className="absolute inset-0 -z-10">
            <Image
              src={area.image || '/placeholder.svg'}
              alt={area.imageAlt}
              fill
              priority
              sizes="100vw"
              className="area-detail-image object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
            <div className="area-detail-sweep absolute inset-0" aria-hidden="true" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:-translate-y-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
            <Link
              href="/sezione-business"
              className="hero-reveal hero-delay-1 group inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-gold"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
              >
                &larr;
              </span>
              Sezione Business
            </Link>

            <div className="hero-reveal hero-delay-2 mt-6 flex items-center gap-3">
              <span className="font-serif text-lg text-gold">{area.number}</span>
              <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-gold-soft">
                {area.category}
              </span>
            </div>

            <h1 lang="it" className="hero-reveal hero-delay-3 mt-5 max-w-4xl font-serif text-[2.65rem] font-medium leading-[0.98] text-ivory text-balance [hyphens:auto] [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
              {area.title}
            </h1>
            <p className="hero-reveal hero-delay-4 mt-7 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg">{area.description}</p>
            </div>

            <div className="hero-reveal hero-delay-5 hidden border-l border-gold/45 pl-7 lg:col-span-4 lg:block">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft">LF Business</p>
              <p className="mt-4 font-serif text-2xl leading-tight text-ivory">{isMarkets ? 'Dati e competenze per leggere mercati in continuo movimento.' : isOil ? 'Rigore contrattuale per operazioni energetiche internazionali.' : 'Diritto, strategia e relazioni per operare oltre i confini.'}</p>
            </div>
          </div>
          <HeroScrollCue targetId="area-overview" />
        </section>

        {/* Content */}
        <section id="area-overview" className="relative scroll-mt-20 overflow-hidden bg-background">
          <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full border border-gold/10" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <span className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  La nostra assistenza
                </span>
                <p className="mt-6 font-serif text-2xl leading-[1.2] text-ink text-balance lg:text-3xl">
                  {isMarkets ? 'Dati di mercato e competenze professionali in una visione coordinata.' : isOil ? 'Assistenza rigorosa per operazioni energetiche complesse e internazionali.' : 'Un presidio legale e strategico costruito intorno agli obiettivi dell’impresa.'}
                </p>
                <div className="mt-9 hidden h-px w-full bg-gradient-to-r from-gold/60 to-transparent lg:block" />
              </Reveal>

              <div className="lg:col-span-7 lg:col-start-6">
                {area.longDescription.map((para, i) => (
                  <Reveal
                    as="p"
                    key={i}
                    delay={i * 90}
                    className="mb-7 text-base leading-[1.9] text-stone last:mb-0 lg:text-lg"
                  >
                    {para}
                  </Reveal>
                ))}

                <Reveal className="mt-12 border-l-2 border-gold bg-secondary p-7 sm:p-9" delay={180}>
                  <p className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{isMarkets ? 'Le oscillazioni del petrolio incidono sulle vostre decisioni?' : isOil ? 'State strutturando un’operazione nel settore energetico?' : 'State valutando un nuovo mercato o un accordo internazionale?'}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">{isMarkets ? 'Affianchiamo alla lettura dei dati una valutazione legale e strategica calibrata sugli obiettivi dell’impresa.' : isOil ? 'Un confronto preliminare consente di verificare procedure, controparti e garanzie prima di avviare la negoziazione.' : 'Un confronto iniziale permette di individuare opportunità, rischi e priorità prima di assumere decisioni operative.'}</p>
                  <div className="mt-7">
                    <CTAButton href="/contattaci" variant="primary">Parliamo del vostro progetto</CTAButton>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {isMarkets && <MarketWidgets />}

        <section className="bg-ink text-ivory">
          <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
            <Reveal className="grid gap-7 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">Il percorso</span>
                <h2 className="mt-5 font-serif text-4xl leading-none text-ivory sm:text-5xl">{isMarkets ? 'Dal dato alla decisione.' : isOil ? 'Dalla verifica all’accordo.' : 'Dalla visione all’operazione.'}</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ivory/55 lg:col-span-4">{isMarkets ? 'Un percorso che collega osservazione del mercato, interpretazione e scelta strategica.' : isOil ? 'Un metodo trasparente per presidiare ogni fase delle operazioni nel commercio energetico.' : 'Un metodo rigoroso, leggibile e calibrato sulle esigenze specifiche di ogni iniziativa.'}</p>
            </Reveal>
            <div className="grid border-x border-b border-ivory/15 md:grid-cols-3">
              {journey.map((step, i) => (
                <Reveal key={step.number} delay={i * 100} className="area-journey-card group border-b border-ivory/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-9">
                  <span className="font-serif text-4xl text-gold/55 transition-colors duration-500 group-hover:text-gold">{step.number}</span>
                  <h3 className="mt-12 font-serif text-2xl text-ivory">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/55">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Next area */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-20">
            <Link href={next.href} className="group flex flex-col gap-2">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-stone">
                Area successiva
              </span>
              <span className="flex items-center justify-between gap-6">
                <span className="font-serif text-2xl font-medium text-ink text-balance transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                  {next.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl text-gold transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
