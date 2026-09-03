export interface BusinessArea {
  number: string
  category: string
  title: string
  description: string
  longDescription: string[]
  slug: string
  href: string
  image: string
  imageAlt: string
}

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    number: '01',
    category: 'International Business',
    title: 'Contratti e internazionalizzazione delle imprese',
    description:
      'Assistenza legale e strategica nei processi di espansione internazionale, nei contratti commerciali e nei rapporti con Paesi terzi.',
    longDescription: [
      'LF Business affianca imprese e imprenditori nei processi di espansione verso i mercati esteri, offrendo consulenza legale e strategica lungo tutte le fasi dell’internazionalizzazione: dall’analisi di fattibilità alla strutturazione degli accordi, fino alla gestione dei rapporti con partner e istituzioni straniere.',
      'Lo Studio redige e negozia contratti commerciali internazionali, accordi di distribuzione, joint venture e partnership strategiche, con particolare attenzione ai mercati dell’Africa Centrale e della Regione dei Grandi Laghi, avvalendosi di una consolidata rete di relazioni istituzionali, consolari e operative.',
    ],
    slug: 'internazionalizzazione',
    href: '/sezione-business/internazionalizzazione',
    image: '/images/area-internazionalizzazione.png',
    imageAlt:
      'Container per il commercio internazionale in un terminal logistico al tramonto',
  },
  {
    number: '02',
    category: 'Energy & Commodities',
    title: 'Commercio prodotti petroliferi',
    description:
      'Oil, Jet A1, B7 e altri prodotti energetici nell’ambito delle operazioni commerciali internazionali.',
    longDescription: [
      'LF Business opera nel settore del commercio internazionale di prodotti petroliferi ed energetici — tra cui Oil, Jet A1 e B7 — assistendo le parti nelle negoziazioni, nella strutturazione delle operazioni e nella redazione dei contratti di fornitura.',
      'Lo Studio, in qualità di seller mandate della FIPA LLC International S.A., accompagna i clienti nelle trattative con controparti internazionali, garantendo il rispetto delle procedure e degli standard richiesti dalle transazioni sui mercati energetici globali.',
    ],
    slug: 'prodotti-petroliferi',
    href: '/sezione-business/prodotti-petroliferi',
    image: '/images/area-petroliferi.png',
    imageAlt: 'Nave cisterna per il trasporto di prodotti petroliferi in mare al tramonto',
  },
  {
    number: '03',
    category: 'Markets',
    title: 'Materie Prime & Mercati Live',
    description:
      'Strumenti e risorse per consultare le principali commodities e l’andamento dei mercati.',
    longDescription: [
      'LF Business mette a disposizione strumenti e risorse per monitorare l’andamento delle principali materie prime e dei mercati internazionali, offrendo una lettura aggiornata dei trend rilevanti per le operazioni commerciali e di investimento.',
      'Un osservatorio pensato per accompagnare imprese e investitori nelle scelte strategiche, integrando dati di mercato e competenze legali per valutare rischi e opportunità nei diversi settori delle commodities.',
    ],
    slug: 'mercati-live',
    href: '/sezione-business/mercati-live',
    image: '/images/area-mercati.png',
    imageAlt: 'Grafici finanziari luminosi che rappresentano i mercati live',
  },
]

export function getBusinessArea(slug: string) {
  return BUSINESS_AREAS.find((a) => a.slug === slug)
}
