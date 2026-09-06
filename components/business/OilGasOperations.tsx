import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const cifOptions = [
  {
    code: 'A1',
    title: 'Revolving Letter of Credit (LC)',
    text: 'Forniture programmate mediante Lettera di Credito revolving, normalmente riferita al valore di un cargo mensile e senza pagamento anticipato della merce.',
    detail:
      'Il pagamento avviene su base bank-to-bank, contro presentazione della documentazione conforme attestante la corretta esecuzione della consegna. Una volta effettuato il pagamento, la LC viene rinnovata e resa disponibile per le forniture successive previste dal contratto.',
  },
  {
    code: 'A2',
    title: 'IRDLC + pagamento MT103 a destinazione',
    text: 'Il Buyer può optare per una IRDLC a copertura indicativa di circa due mesi di fornitura.',
    detail:
      'La IRDLC viene mantenuta quale garanzia collaterale, mentre il pagamento della merce viene effettuato a destinazione, prima dello scarico, mediante MT103, secondo le condizioni stabilite contrattualmente.',
  },
  {
    code: 'B',
    title: 'Smaller-Sized Letters of Credit',
    text: 'Procedura alternativa basata sull’emissione di due Letters of Credit di importo ridotto, concepita per limitare l’impegno finanziario iniziale del Buyer.',
    detail:
      'La procedura prevede un primo importo pari al 5% contro PPOP (Partial Proof of Product) e un successivo 20% contro Full POP (Full Proof of Product). Le successive fasi di pagamento e fornitura vengono eseguite secondo la struttura revolving prevista dalla procedura e dal contratto.',
  },
] as const

const sequence = [
  'ICPO + Banking Reassurance',
  'Sottoscrizione del contratto e Proforma Invoice',
  'MT705',
  'Eventuale TTM a Dubai su richiesta del Buyer',
  'PPOP',
  'MT700',
  'POP / Full Cargo Data (CPA - Vessel Data)',
  'Consegna a destinazione',
  'Eventuale ispezione Q&Q su richiesta del Buyer',
  'Pagamento',
  'Successive forniture contrattuali',
] as const

const documents = [
  {
    label: 'Sample ICPO',
    title: 'Sample ICPO ULSD - Option B',
    description: 'Esempio di Irrevocable Corporate Purchase Order per una fornitura ULSD EN590.',
    meta: 'PDF · 4 pagine',
    href: '/documents/sample-icpo-ulsd-option-b.pdf',
    download: 'Sample-ICPO-ULSD-Option-B.pdf',
  },
  {
    label: 'CIF Procedures',
    title: 'SOP FIPA CIF',
    description: 'Procedure commerciali e bancarie, Sequence of Performance & Payment e riferimenti operativi FIPA.',
    meta: 'PDF · 7 pagine',
    href: '/documents/fipa-cif-procedures.pdf',
    download: 'FIPA-CIF-Procedures.pdf',
  },
  {
    label: 'Seller Mandate',
    title: 'MANDATO International LF Business Avv. Ferrara-signed',
    description:
      'Mandato internazionale firmato dell’Avv. Luigi Ferrara per le attività di Seller Mandate nel settore Oil & Gas.',
    meta: 'PDF · Documento firmato',
    href: '/documents/mandato-international-lf-business-avv-ferrara-signed.pdf',
    download: 'MANDATO-International-LF-Business-Avv-Ferrara-signed.pdf',
  },
] as const

export function OilGasOperations() {
  return (
    <section id="oil-gas-operations" className="relative scroll-mt-20 overflow-hidden bg-secondary/45">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full border border-gold/10 translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
        <Reveal className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-9 shrink-0 bg-gold" aria-hidden="true" />
              Oil &amp; Gas · International Trade
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-ink text-balance sm:text-5xl lg:text-6xl">
              Assistenza legale e commerciale
              <span className="italic text-gold"> nelle operazioni internazionali.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-stone lg:col-span-4">
            Tutela giuridica, trasparenza documentale e coordinamento commerciale tra Seller,
            Buyer e rispettivi istituti bancari.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-[1.85] text-stone">
              Lo Studio opera nel settore internazionale <strong className="font-semibold text-ink">Oil &amp; Gas</strong>,
              fornendo assistenza giuridica e commerciale nelle operazioni di compravendita e
              fornitura di <strong className="font-semibold text-ink">petrolio greggio, prodotti petroliferi raffinati,
              ULSD/EN590, Gasoline, LNG, GPL e altri prodotti petrolchimici</strong>.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="relative overflow-hidden border border-ink/10 bg-ink p-7 text-ivory shadow-[0_28px_65px_-45px_rgba(15,18,21,0.8)] sm:p-9">
              <span className="absolute right-5 top-0 font-serif text-8xl text-white/[0.035]" aria-hidden="true">FIPA</span>
              <p className="relative text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft">Seller Mandate</p>
              <h3 className="relative mt-4 font-serif text-3xl leading-tight">FIPA Petrochemicals Trading LLC</h3>
              <p className="relative mt-6 text-sm leading-[1.8] text-ivory/65">
                L’<strong className="font-medium text-ivory">Avv. Luigi Ferrara</strong>, attraverso
                lo Studio Legale Internazionale LF Business, opera in forza di mandato internazionale
                quale <strong className="font-medium text-ivory">Official Seller Mandate di FIPA
                Petrochemicals Trading LLC</strong>, società registrata a Dubai (UAE) e autorizzata
                ad operare nel settore Oil &amp; Gas.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold">Il mandato</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">Coordinamento della trattativa</h3>
          </Reveal>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <Reveal as="p" className="text-base leading-[1.85] text-stone">
              Nell’ambito del mandato, lo Studio assiste FIPA nello <strong className="font-semibold text-ink">sviluppo,
              coordinamento e gestione delle trattative commerciali internazionali</strong>,
              nell’individuazione e presentazione di potenziali Buyers qualificati, nella verifica
              della documentazione commerciale e bancaria e nel coordinamento degli aspetti
              giuridici delle operazioni.
            </Reveal>
            <Reveal as="p" delay={80} className="text-base leading-[1.85] text-stone">
              L’attività comprende altresì il coordinamento delle comunicazioni tra <strong className="font-semibold text-ink">
              Buyer, istituti bancari, Seller, società di ispezione, operatori logistici e
              consulenti</strong>, nonché l’assistenza sulle procedure di Trade Finance connesse
              alle transazioni internazionali.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-ink text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-32">
          <Reveal className="grid gap-8 border-b border-white/12 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft">Operazioni CIF</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl">Procedure finanziarie FIPA</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ivory/55 lg:col-span-4">
              Per le operazioni CIF - Cost, Insurance and Freight, le procedure sono strutturate in
              funzione delle caratteristiche dell’operazione e della capacità finanziaria del Buyer.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cifOptions.map((option, index) => (
              <Reveal key={option.code} delay={index * 100}>
                <article className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-white/[0.035] p-7 transition-[border-color,background-color,box-shadow] duration-700 hover:border-gold/45 hover:bg-white/[0.06] hover:shadow-[inset_0_0_65px_rgba(191,151,84,0.06)] sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                  <span className="font-serif text-5xl text-gold/40">{option.code}</span>
                  <h3 className="mt-8 font-serif text-2xl leading-tight text-ivory">{option.title}</h3>
                  <p className="mt-6 text-sm leading-[1.75] text-ivory/68">{option.text}</p>
                  <p className="mt-4 text-sm leading-[1.75] text-ivory/52">{option.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold">Procedura operativa</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">Dall’ICPO alle forniture contrattuali.</h2>
              <p className="mt-6 text-sm leading-[1.8] text-stone">
                Ogni fase è accompagnata dalla relativa documentazione commerciale, bancaria e di
                Proof of Product, secondo le condizioni previste dal Seller.
              </p>
            </Reveal>

            <ol className="lg:col-span-7 lg:col-start-6">
              {sequence.map((step, index) => (
                <Reveal
                  as="li"
                  key={step}
                  delay={(index % 5) * 55}
                  className="group grid grid-cols-[3rem_1fr] gap-5 border-b border-ink/10 py-5 first:pt-0"
                >
                  <span className="font-serif text-xl text-gold/70 transition-colors group-hover:text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-ink/75 transition-transform duration-500 group-hover:translate-x-1">
                    {step}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="mt-24">
            <div className="border-b border-ink/10 pb-10">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold">Documentazione disponibile</p>
              <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">Draft e modelli di riferimento</h2>
              <p className="mt-5 max-w-3xl leading-[1.8] text-stone">
                Sample ICPO, CIF Procedures, Sequence of Performance &amp; Payment, draft bancari e
                documentazione operativa FIPA utili all’avvio della trattativa.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((document, index) => (
              <Reveal key={document.href} delay={index * 100}>
                <article className="group flex h-full flex-col border border-ink/12 bg-secondary/55 p-7 transition-[border-color,box-shadow,transform] duration-700 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_25px_60px_-45px_rgba(15,18,21,0.75)] sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex h-12 w-12 items-center justify-center border border-gold/35 text-gold">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="text-[0.62rem] uppercase tracking-[0.2em] text-stone">{document.meta}</span>
                  </div>
                  <p className="mt-8 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold">{document.label}</p>
                  <h3 className="mt-3 font-serif text-3xl text-ink">{document.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.75] text-stone">{document.description}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={document.href}
                      download={document.download}
                      className="group/button inline-flex min-h-11 items-center gap-3 bg-gold px-5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-soft"
                    >
                      <Download className="h-4 w-4 transition-transform group-hover/button:translate-y-0.5" />
                      Scarica il PDF
                    </a>
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center border border-ink/20 px-5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-gold hover:text-gold"
                    >
                      Consulta
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold">Il ruolo dello Studio</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">Presidio legale e commerciale.</h2>
            </Reveal>
            <div className="space-y-6 lg:col-span-7 lg:col-start-6">
              <Reveal as="p" className="text-base leading-[1.85] text-stone">
                Lo Studio Legale Internazionale LF Business, attraverso l’<strong className="font-semibold text-ink">
                Avv. Luigi Ferrara nella qualità di Seller Mandate</strong>, accompagna le operazioni
                dalla fase preliminare di interlocuzione con il Buyer sino alla strutturazione della
                trattativa, curando gli aspetti <strong className="font-semibold text-ink">giuridici,
                documentali e di coordinamento commerciale internazionale</strong>.
              </Reveal>
              <Reveal as="p" delay={80} className="text-base leading-[1.85] text-stone">
                L’attività è svolta nel rispetto delle procedure stabilite da FIPA e comprende
                l’assistenza nella gestione di <strong className="font-semibold text-ink">ICPO, LOI,
                BCL, NCNDA, IMFPA, SCO, FCO e draft SPA</strong>, nonché il coordinamento delle
                procedure bancarie relative a <strong className="font-semibold text-ink">LC, DLC,
                IRDLC, MT705, MT700 e MT103</strong>.
              </Reveal>
              <Reveal as="p" delay={160} className="border-l-2 border-gold pl-6 font-serif text-2xl leading-[1.45] text-ink">
                L’obiettivo è assicurare tutela giuridica, trasparenza documentale e corretta
                interlocuzione tra Seller, Buyer e rispettivi istituti bancari.
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
