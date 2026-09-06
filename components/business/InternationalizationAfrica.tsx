import { Reveal } from '@/components/Reveal'

const projects = [
  {
    number: '01',
    place: 'Guinea Conakry',
    title: 'Cocoa Bridge',
    category: 'Agroindustria · Formazione · Cooperazione',
    content: (
      <>
        Sviluppo del progetto <strong>Cocoa Bridge (cioccolato di Modica) - Africa Mediterranean
        Cocoa Development Program</strong>, finalizzato alla creazione di una filiera integrata per
        la <strong>produzione e trasformazione locale del cacao</strong>, con collegamento ai mercati
        europei, formazione professionale attraverso la <em>Cocoa School</em> e individuazione di
        strumenti di finanziamento e cooperazione internazionale.
      </>
    ),
  },
  {
    number: '02',
    place: 'Burundi · Ruanda · Uganda',
    title: 'Regione dei Grandi Laghi',
    category: 'Made in Italy · Moda · Agroalimentare',
    content: (
      <>
        Sviluppo di iniziative finalizzate alla <strong>promozione delle eccellenze italiane nei
        settori agroalimentare, moda e artigianato</strong>, favorendo nuovi canali commerciali e
        partnership con operatori locali. Il comparto moda è coordinato dallo <strong>stilista
        Antonio Sasso e dai suoi brand</strong>, nell’ambito di una strategia integrata di
        valorizzazione del <strong>Made in Italy nei mercati dell’Africa orientale</strong>.
      </>
    ),
  },
  {
    number: '03',
    place: 'Guinea Conakry',
    title: 'Sviluppo industriale e territoriale',
    category: 'Infrastrutture · Economia circolare · Filiere',
    content: (
      <>
        Sono in fase di sviluppo e valutazione progettualità nei settori <strong>infrastrutture ed
        edilizia, piscicoltura, trattamento e valorizzazione dei rifiuti, caffè e karité</strong>,
        attraverso il coinvolgimento di imprese e partner tecnici e finanziari.
      </>
    ),
  },
  {
    number: '04',
    place: 'Gabon',
    title: 'Polo avicolo integrato',
    category: 'Produzione · Formazione · Sostenibilità',
    content: (
      <>
        Progetto di internazionalizzazione di un’impresa italiana specializzata nella filiera
        avicola, finalizzato alla realizzazione di un <strong>polo produttivo integrato</strong>
        comprendente allevamento, incubatoio, mangimificio, macellazione, trasformazione e
        distribuzione. L’iniziativa contempla inoltre <strong>formazione professionale del personale
        locale, valorizzazione delle filiere agricole gabonesi e soluzioni energetiche
        sostenibili</strong>, nell’ambito delle interlocuzioni istituzionali con le competenti
        Autorità del Gabon.
      </>
    ),
  },
] as const

export function InternationalizationAfrica() {
  return (
    <section id="africa-projects" className="relative scroll-mt-20 overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-36 top-16 h-[30rem] w-[30rem] rounded-full border border-gold/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-gold/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <Reveal className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-9 bg-gold" aria-hidden="true" />
              Internazionalizzazione delle imprese
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-ink text-balance sm:text-5xl lg:text-6xl">
              Africa<span className="italic text-gold"> · Progetti e partnership internazionali.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-stone lg:col-span-4">
            Un ponte tra imprese italiane e mercati africani, costruito attraverso diritto,
            relazioni istituzionali e partnership qualificate.
          </p>
        </Reveal>

        <Reveal className="mt-14 max-w-5xl">
          <p className="font-serif text-2xl leading-[1.55] text-ink sm:text-3xl">
            Lo Studio assiste <strong className="font-medium">imprese e investitori italiani nei
            percorsi di internazionalizzazione verso i mercati africani</strong>, curando gli aspetti
            giuridici, contrattuali e istituzionali delle operazioni, dalla strutturazione delle
            partnership alla definizione di accordi commerciali, Memorandum of Understanding e
            joint venture.
          </p>
          <p className="mt-7 text-sm uppercase tracking-[0.18em] text-gold">Iniziative attualmente in corso</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 90}>
              <article className="group relative flex h-full min-h-[28rem] flex-col overflow-hidden border border-ink/12 bg-secondary/55 p-7 transition-[background-color,border-color,box-shadow] duration-700 hover:border-gold/45 hover:bg-secondary sm:p-9 lg:p-10">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                <span className="absolute right-7 top-3 font-serif text-8xl text-ink/[0.035]" aria-hidden="true">{project.number}</span>
                <div className="relative flex items-center gap-4">
                  <span className="font-serif text-2xl text-gold">{project.number}</span>
                  <span className="h-px w-8 bg-gold/55" aria-hidden="true" />
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-stone">{project.place}</span>
                </div>
                <h3 className="relative mt-9 max-w-xl font-serif text-3xl leading-tight text-ink sm:text-4xl">{project.title}</h3>
                <p className="relative mt-4 text-[0.62rem] font-medium uppercase tracking-[0.19em] text-gold">{project.category}</p>
                <p className="relative mt-7 flex-1 text-[0.95rem] leading-[1.82] text-stone [&_strong]:font-semibold [&_strong]:text-ink">{project.content}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(191,151,84,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft">Il ruolo dello Studio</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl">
              Coordinamento giuridico<span className="italic text-gold-soft"> e istituzionale.</span>
            </h2>
          </Reveal>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <Reveal as="p" className="text-base leading-[1.85] text-ivory/68">
              Lo Studio cura il <strong className="font-medium text-ivory">coordinamento giuridico e
              istituzionale delle operazioni internazionali</strong>, la predisposizione e
              negoziazione degli accordi, la tutela delle imprese nei rapporti con partner esteri e
              l’assistenza nelle diverse fasi di sviluppo e strutturazione degli investimenti.
            </Reveal>
            <Reveal as="p" delay={100} className="border-l border-gold pl-6 font-serif text-2xl leading-[1.5] text-ivory">
              L’obiettivo è creare un <span className="text-gold-soft">ponte tra le imprese italiane
              e i mercati africani</span>, integrando competenze giuridiche, relazioni istituzionali
              e sviluppo di partnership internazionali.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
