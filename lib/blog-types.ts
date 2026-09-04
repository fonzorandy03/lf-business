/**
 * Client-safe blog types and constants.
 * This module contains NO server-only code so it can be imported by both
 * Server Components and Client Components.
 */

export const CATEGORIES = [
  'Diritto Amministrativo',
  'Appalti Pubblici',
  'TAR e Consiglio di Stato',
  "Diritto d'Impresa",
  'Internazionalizzazione',
  'LF Business',
  'Edilizia e Urbanistica',
  'Diritto Scolastico',
  'Bioetica',
  'Intelligenza Artificiale',
  'Antitrust',
  'News',
] as const

export type Category = (typeof CATEGORIES)[number]

/** Serializable article metadata passed to client components (no raw body). */
export interface ArticleMeta {
  slug: string
  title: string
  date: string
  dateLabel: string
  category: Category
  excerpt: string
  coverImage: string
  author: string
  featured: boolean
  readingTime: number
}
