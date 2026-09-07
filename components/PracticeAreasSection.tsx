import Image from 'next/image'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'

const AREAS = [
  {
    number: '01',
    title: 'Internazionalizzazione',
    image: '/images/area-internazionalizzazione.png',
    imageAlt: 'Relazioni e progetti internazionali per le imprese',
    body: [
      "LF Business assiste le imprese nei processi di internazionalizzazione, con particolare riferimento ai mercati dell'Africa Centrale e della Regione dei Grandi Laghi, operando in Paesi quali Gabon e Guinea Conakry.",
      "L'attivitÃ  si fonda su una consolidata rete di relazioni istituzionali e imprenditoriali locali, nonchÃ© sulla collaborazione con rappresentanze consolari e qualificati partner operativi, al fine di favorire l'accesso ai mercati esteri, lo sviluppo di investimenti, la realizzazione di partnership strategiche e l'assistenza legale e commerciale nelle operazioni internazionali.",
    ],
  },
  {
    number: '02',
    title: 'Appalti pubblici',
    image: '/images/legal-appalti-tar-lazio.jpeg',
    imageAlt: 'Tribunale Amministrativo Regionale del Lazio',
    body: [
      'Il ricorso al TAR Ã¨ un passaggio delicato, utilizzato per contestare esclusioni da gare, irregolaritÃ  procedurali, o assegnazioni illegittime. Diverse le strategie legali efficaci poste a base di numerose impugnative organizzate sulla base di argomentazioni solide in tempi stretti, poichÃ© i termini per proporre ricorso sono rigorosamente limitati.',
      "In questo contesto, l'Avv. Luigi Ferrara ed il suo staff, Ã¨ in grado di offrire un'assistenza tempestiva e mirata, aiutando i clienti a proteggere i loro interessi, a ottenere sospensive urgenti, e, in caso di successo, il reintegro o il risarcimento danni. Il nostro intervento puÃ² fare la differenza nel garantire la trasparenza e la legalitÃ  delle procedure di appalto pubblico.",
    ],
  },
  {
    number: '03',
    title: 'Ricorsi al TAR e Consiglio di Stato',
    image: '/images/legal-tar-consiglio-stato.jpeg',
    imageAlt: 'Incontro istituzionale per la tutela davanti alla giustizia amministrativa',
    body: [
      "I ricorsi al TAR rappresentano il primo livello di giurisdizione, utilizzato per contestare atti amministrativi lesivi di diritti o interessi legittimi. In caso di esito sfavorevole, l'avvocato Luigi Ferrara ha la competenza necessaria per presentare appelli al Consiglio di Stato, il piÃ¹ alto organo della giustizia amministrativa in Italia, ottenendo revisioni o annullamenti delle sentenze.",
      "La sua capacitÃ  di redigere ricorsi dettagliati e argomentati, unita a una conoscenza approfondita della normativa vigente, permette di ottenere risultati favorevoli per i clienti, che possono riguardare l'annullamento di atti illegittimi o il riconoscimento di risarcimenti.",
    ],
  },
] as const

export function PracticeAreasSection() {
  return (
    <section className="home-practice-areas relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(191,151,84,0.12),transparent_30%),radial-gradient(circle_at_88%_85%,rgba(191,151,84,0.07),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-gold-soft">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Aree di attivitÃ 
            </p>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-ivory text-balance sm:text-5xl lg:text-6xl">
              Competenze che trasformano
              <span className="italic text-gold-soft"> complessitÃ  in direzione.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ivory/55 lg:col-span-4 lg:col-start-9">
            Tutela legale, strategia e visione internazionale coordinate in un unico percorso.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 110}
            >
              <article className="practice-area-card group relative flex min-h-[34rem] flex-col overflow-hidden border border-white/12 bg-white/[0.035] p-7 transition-[background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold/45 hover:bg-white/[0.055] hover:shadow-[inset_0_0_70px_rgba(191,151,84,0.075),0_25px_65px_-48px_rgba(191,151,84,0.5)] sm:p-9">
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover opacity-[0.16] saturate-[0.75] transition-[transform,opacity,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:opacity-[0.24] group-hover:saturate-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/80 to-ink" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold/0 blur-3xl transition-all duration-1000 group-hover:bg-gold/12" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-1000 group-hover:scale-x-100" />
                <div className="relative flex items-start justify-between">
                  <span className="font-serif text-5xl text-white/12 transition-colors duration-700 group-hover:text-gold/50">{area.number}</span>
                  <span className="mt-3 h-2 w-2 rotate-45 border border-gold/60 transition-[transform,background-color] duration-700 group-hover:rotate-[135deg] group-hover:bg-gold" aria-hidden="true" />
                </div>
                <span className="relative mb-7 mt-10 h-px w-10 bg-gold transition-all duration-700 group-hover:w-20" />
                <h3 className="relative font-serif text-3xl font-medium leading-tight text-ivory text-balance">{area.title}</h3>
                <div className="practice-area-body relative mt-6 flex-1 space-y-4 text-[0.9rem] leading-[1.72] text-ivory/58 transition-colors duration-700 group-hover:text-ivory/76">
                  {area.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="relative mt-8">
                  <CTAButton href="/contattaci" variant="outline-light">Parliamone</CTAButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

