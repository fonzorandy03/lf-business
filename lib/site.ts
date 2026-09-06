export const NAV_LINKS = [
  { label: 'Home Page', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sezione Business', href: '/sezione-business' },
  { label: 'Specializzazioni legali', href: '/specializzazioni-legali' },
  { label: 'Contattaci', href: '/contattaci' },
  { label: 'Galleria', href: '/galleria' },
  { label: 'Curriculum', href: '/curriculum' },
] as const

export const CONTACT = {
  email: 'luigiferraraavv@gmail.com',
  phone: '+39 328 134 4812',
  phoneHref: 'tel:+393281344812',
  whatsappNumber: '393281344812',
  whatsappMessage: 'Buongiorno Avv. Ferrara, vorrei richiedere informazioni.',
} as const

export const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`

export const NUNZIA_CONTACT = {
  name: 'Avv. Nunzia Robustelli',
  phone: '+39 328 245 8479',
  phoneHref: 'tel:+393282458479',
  whatsappNumber: '393282458479',
  whatsappMessage: 'Buongiorno Avv. Robustelli, vorrei richiedere informazioni.',
} as const

export const nunziaWhatsappHref = `https://wa.me/${NUNZIA_CONTACT.whatsappNumber}?text=${encodeURIComponent(
  NUNZIA_CONTACT.whatsappMessage,
)}`

export const STUDIO_CONTACT = {
  name: 'Studio di Sarno',
  phone: '081 1910 6560',
  phoneHref: 'tel:+3908119106560',
} as const

export const ADDRESS = {
  street: 'Via Onofrio Tortora 17/19',
  city: 'Sarno (Sa)',
  zip: '84087',
  country: 'Italia',
  mapsQuery: 'Via Onofrio Tortora 15, 84087 Sarno SA, Italia',
} as const

export const NAPLES_ADDRESS = {
  street: 'Piazza dei Martiri 30',
  city: 'Napoli (Na)',
  zip: '80132',
  country: 'Italia',
  mapsQuery: 'Piazza dei Martiri 30, 80132 Napoli NA, Italia',
} as const

export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/www.avvocatibf.facebok.eu/' },
  { label: 'Instagram', href: 'https://www.instagram.com/avvferrara/' },
] as const

export const SITE_NAME = 'LF Business'
export const SITE_URL = 'https://avvocatibf.eu'
export const SITE_DESCRIPTION =
  "Studio Legale LF Business dell'Avv. Luigi Ferrara e dell'Avv. Nunzia Robustelli a Sarno (SA)."

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}
