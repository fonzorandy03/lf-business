import Image from 'next/image'
import { SectionHeading } from './SectionHeading'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'

const AREAS = [
  {
    title: 'Internazionalizzazione',
    body: [
      "LF Business assiste le imprese nei processi di internazionalizzazione, con particolare riferimento ai mercati dell'Africa Centrale e della Regione dei Grandi Laghi, operando in Paesi quali Gabon e Guinea Conakry.",
      "L'attività si fonda su una consolidata rete di relazioni istituzionali e imprenditoriali locali, nonché sulla collaborazione con rappresentanze consolari e qualificati partner operativi, al fine di favorire l'accesso ai mercati esteri, lo sviluppo di investimenti, la realizzazione di partnership strategiche e l'assistenza legale e commerciale nelle operazioni internazionali.",
    ],
  },
  {
    title: 'Appalti pubblici',
    body: [
      'Il ricorso al TAR è un passaggio delicato, utilizzato per contestare esclusioni da gare, irregolarità procedurali, o assegnazioni illegittime. Diverse le strategie legali efficaci poste a base di numerose impugnative organizzate sulla base di argomentazioni solide in tempi stretti, poiché i termini per proporre ricorso sono rigorosamente limitati.',
      "In questo contesto, l'Avv. Luigi Ferrara ed il suo staff, è in grado di offrire un'assistenza tempestiva e mirata, aiutando i clienti a proteggere i loro interessi, a ottenere sospensive urgenti, e, in caso di successo, il reintegro o il risarcimento danni. Il nostro intervento può fare la differenza nel garantire la trasparenza e la legalità delle procedure di appalto pubblico.",
    ],
  },
  {
    title: 'Ricorsi al TAR e Consiglio di Stato',
    body: [
      "I ricorsi al TAR rappresentano il primo livello di giurisdizione, utilizzato per contestare atti amministrativi lesivi di diritti o interessi legittimi. In caso di esito sfavorevole, l'avvocato Luigi Ferrara ha la competenza necessaria per presentare appelli al Consiglio di Stato, il più alto organo della giustizia amministrativa in Italia, ottenendo revisioni o annullamenti delle sentenze.",
      "La sua capacità di redigere ricorsi dettagliati e argomentati, unita a una conoscenza approfondita della normativa vigente, permette di ottenere risultati favorevoli per i clienti, che possono riguardare l'annullamento di atti illegittimi o il riconoscimento di risarcimenti.",
    ],
  },
] as const

export function PracticeAreasSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/dark-texture.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Aree di attività"
            title="Competenze giuridiche al servizio delle imprese"
            tone="light"
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-ivory/10 bg-ivory/10 lg:mt-20 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 120}
              className="group flex flex-col bg-ink p-8 transition-colors duration-500 hover:bg-[oklch(0.22_0.006_265)] lg:p-10"
            >
              <span className="mb-6 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
              <h3 className="font-serif text-2xl font-medium leading-tight text-ivory text-balance lg:text-[1.7rem]">
                {area.title}
              </h3>
              <div className="mt-6 flex-1 space-y-4 text-[0.92rem] leading-relaxed text-ivory/65">
                {area.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="/contattaci" variant="outline-light">
                  Contattaci
                </CTAButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
