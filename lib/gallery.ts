import galleryContent from '@/content/gallery.json'

// Elenco gestito tramite Pages CMS, condiviso dalla galleria desktop e mobile.

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

// Normalizza gli input del pannello e ignora bozze o schede incomplete.
export function getPublishedGalleryImages(entries: unknown): GalleryImage[] {
  if (!Array.isArray(entries)) return []
  const categories: GalleryCategory[] = ['studio', 'esterni', 'eventi', 'territorio']
  const spans: MasonrySpan[] = ['tall', 'wide', 'large', 'regular']
  const seen = new Set<string>()
  const text = (value: unknown) => typeof value === 'string' ? value.trim() : ''

  return entries.flatMap((entry): GalleryImage[] => {
    if (!entry || typeof entry !== 'object' || entry.draft === true) return []
    const src = text(entry.src)
    const title = text(entry.title)
    if (!src.startsWith('/images/gallery/') || !title || seen.has(src)) return []
    if (!/\.(jpe?g|png|webp|avif)$/i.test(src) || src.split('/').some(part => part === '..')) return []
    const category = categories.includes(entry.category) ? entry.category : 'studio'
    const orientation = entry.orientation === 'portrait' ? 'portrait' : 'landscape'
    seen.add(src)
    return [{
      src,
      title,
      alt: text(entry.alt) || title,
      category,
      location: text(entry.location) || undefined,
      date: text(entry.date) || undefined,
      caption: text(entry.caption) || undefined,
      span: spans.includes(entry.span) ? entry.span : orientation === 'portrait' ? 'tall' : 'regular',
      orientation,
    }]
  })
}

export const allGalleryImages = getPublishedGalleryImages(galleryContent.images)

export const heroImage: GalleryImage = {
  alt: "Scrivania principale dello Studio Legale Luigi Ferrara",
  title: "Lo Studio",
  category: 'studio',
  src: '/images/non sfocata.png',
}
export const breakImage: GalleryImage = {
  "src": "/images/gallery/foto-07.webp",
  "alt": "Vista panoramica degli ambienti interni dello Studio Legale",
  "category": "studio",
  "title": "Gli ambienti",
  "location": "Sarno",
  "caption": "Una veduta complessiva degli spazi professionali.",
  "span": "wide",
  "orientation": "landscape"
}

export const featuredEvent = {
  image: {"src":"/images/gallery/foto-06.webp","alt":"Tavolo in vetro e biblioteca nello Studio Legale","category":"studio","title":"Spazi di consulenza","location":"Sarno","caption":"Un ambiente riservato al confronto con clienti e professionisti.","span":"wide","orientation":"landscape"} as GalleryImage,
  eyebrow: 'Lo Studio',
  title: 'Ambienti pensati per l’ascolto e la consulenza',
  location: 'Sarno (SA)',
  date: 'Attività professionale',
  description: 'Lo Studio Legale Luigi Ferrara accoglie clienti, imprese e professionisti in ambienti riservati, curati e dedicati al confronto.',
}
