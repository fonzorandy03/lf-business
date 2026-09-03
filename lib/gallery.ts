// Contenuti della Galleria. Le immagini provengono dalla galleria originale
// pubblicata su avvocatibf.eu.

export type GalleryCategory = 'studio' | 'esterni' | 'eventi' | 'territorio'
export type MasonrySpan = 'tall' | 'wide' | 'large' | 'regular'

export interface GalleryImage {
  src: string
  alt: string
  category: GalleryCategory
  title: string
  location?: string
  date?: string
  caption?: string
  span?: MasonrySpan
  orientation?: 'landscape' | 'portrait'
}

export interface CategoryFilter {
  id: GalleryCategory | 'all'
  label: string
}

export const galleryFilters: CategoryFilter[] = [
  { id: 'all', label: 'Tutte' },
  { id: 'studio', label: 'Interni dello Studio' },
  { id: 'esterni', label: 'Ingresso' },
  { id: 'eventi', label: 'Eventi e convegni' },
  { id: 'territorio', label: 'Luoghi' },
]

const B = '/images/gallery'

export const allGalleryImages: GalleryImage[] = [
  { src: `${B}/foto-08.webp`, alt: 'Scrivania principale dello Studio Legale Luigi Ferrara', category: 'studio', title: 'Lo Studio', location: 'Sarno', caption: 'La scrivania principale e gli ambienti di lavoro dello Studio.', span: 'large', orientation: 'landscape' },
  { src: `${B}/foto-01.webp`, alt: 'Ufficio dello Studio Legale con scrivania, libreria e opere alle pareti', category: 'studio', title: 'Ambiente professionale', location: 'Sarno', caption: 'Uno degli ambienti dedicati alla consulenza e al lavoro professionale.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-03.webp`, alt: 'Biblioteca giuridica con codici e attestati professionali', category: 'studio', title: 'Biblioteca giuridica', location: 'Sarno', caption: 'Codici, volumi e riconoscimenti professionali.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-05.webp`, alt: 'Sala riunioni dello Studio Legale Luigi Ferrara', category: 'studio', title: 'Sala riunioni', location: 'Sarno', caption: 'Lo spazio dedicato agli incontri e alla consulenza.', span: 'regular', orientation: 'landscape' },
  { src: `${B}/foto-04.webp`, alt: 'Ingresso della Camera Amministrativa Nocera Inferiore', category: 'esterni', title: 'Camera Amministrativa', location: 'Sarno', caption: 'L’ingresso della Camera Amministrativa Nocera Inferiore.', span: 'regular', orientation: 'landscape' },
  { src: `${B}/foto-06.webp`, alt: 'Tavolo in vetro e biblioteca nello Studio Legale', category: 'studio', title: 'Spazi di consulenza', location: 'Sarno', caption: 'Un ambiente riservato al confronto con clienti e professionisti.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-07.webp`, alt: 'Vista panoramica degli ambienti interni dello Studio Legale', category: 'studio', title: 'Gli ambienti', location: 'Sarno', caption: 'Una veduta complessiva degli spazi professionali.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-02.webp`, alt: 'Ufficio con raccolte giuridiche e area riunioni', category: 'studio', title: 'Studio e documentazione', location: 'Sarno', caption: 'Gli spazi di lavoro e la documentazione giuridica.', span: 'regular', orientation: 'landscape' },
  { src: `${B}/foto-09.webp`, alt: 'Ingresso esterno dello Studio Legale Luigi Ferrara', category: 'esterni', title: 'Ingresso dello Studio', location: 'Sarno', caption: 'L’accesso allo Studio Legale Luigi Ferrara.', span: 'regular', orientation: 'landscape' },
  { src: `${B}/foto-10.webp`, alt: 'Porta d’ingresso dello Studio Legale Luigi Ferrara con targa', category: 'esterni', title: 'Studio Legale Luigi Ferrara', location: 'Sarno', caption: 'L’ingresso principale dello Studio.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-11-palazzo-calabritto.jpeg`, alt: 'Piazza dei Martiri osservata dall’arco di Palazzo Calabritto a Napoli', category: 'territorio', title: 'Piazza dei Martiri', location: 'Napoli', caption: 'Una prospettiva su Piazza dei Martiri dall’ingresso di Palazzo Calabritto.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-12-sala-refettorio.jpeg`, alt: 'Foto di gruppo nella Sala del Refettorio della Camera dei deputati', category: 'eventi', title: 'Incontro istituzionale', location: 'Roma', caption: 'Un momento dell’incontro istituzionale nella Sala del Refettorio.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-13-convegno.jpeg`, alt: 'Luigi Ferrara al tavolo dei relatori durante un convegno', category: 'eventi', title: 'Tavolo dei relatori', location: 'Roma', caption: 'Partecipazione ai lavori e al confronto sui temi di attualità.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-14-economia-circolare.jpeg`, alt: 'Luigi Ferrara durante il convegno su ambiente, energia ed economia circolare', category: 'eventi', title: 'Ambiente ed economia circolare', location: 'Roma', caption: 'Il convegno dedicato ad ambiente, energia ed economia circolare.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-15-palazzo-calabritto.jpeg`, alt: 'Facciata e ingresso monumentale di Palazzo Calabritto a Napoli', category: 'territorio', title: 'Palazzo Calabritto', location: 'Napoli', caption: 'L’ingresso monumentale dello storico Palazzo Calabritto.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-16-sala-business.jpeg`, alt: 'Sala professionale moderna con schermo per videoconferenze', category: 'studio', title: 'Area business', location: 'Napoli', caption: 'Uno spazio contemporaneo dedicato agli incontri professionali.', span: 'wide', orientation: 'landscape' },
  { src: `${B}/foto-17-sala-riunioni.jpeg`, alt: 'Tavolo riunioni in un ambiente professionale moderno', category: 'studio', title: 'Sala riunioni', location: 'Napoli', caption: 'La sala riservata a riunioni, consulenze e incontri operativi.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-18-sala-riunioni.jpeg`, alt: 'Vista completa della sala riunioni moderna', category: 'studio', title: 'Spazi di confronto', location: 'Napoli', caption: 'Un ambiente luminoso progettato per il dialogo e la collaborazione.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-19-sala-riunioni.jpeg`, alt: 'Sala riunioni moderna vista lateralmente', category: 'studio', title: 'Ambiente professionale', location: 'Napoli', caption: 'Design essenziale e riservatezza per gli incontri professionali.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-20-palazzo-calabritto.jpeg`, alt: 'Ingresso di Palazzo Calabritto visto dalla strada', category: 'territorio', title: 'Ingresso di Palazzo Calabritto', location: 'Napoli', caption: 'Il portale storico di Palazzo Calabritto.', span: 'tall', orientation: 'portrait' },
  { src: `${B}/foto-21-piazza-dei-martiri.jpeg`, alt: 'Monumento ai Martiri Napoletani in Piazza dei Martiri', category: 'territorio', title: 'Monumento ai Martiri', location: 'Napoli', caption: 'Il monumento simbolo di Piazza dei Martiri.', span: 'tall', orientation: 'portrait' },
]

export const heroImage = allGalleryImages[0]
export const breakImage = allGalleryImages[6]

export const featuredEvent = {
  image: allGalleryImages[5],
  eyebrow: 'Lo Studio',
  title: 'Ambienti pensati per l’ascolto e la consulenza',
  location: 'Sarno (SA)',
  date: 'Attività professionale',
  description: 'Lo Studio Legale Luigi Ferrara accoglie clienti, imprese e professionisti in ambienti riservati, curati e dedicati al confronto.',
}
