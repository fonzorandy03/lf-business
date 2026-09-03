import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { CATEGORIES, type Category, type ArticleMeta } from './blog-types'

export { CATEGORIES }
export type { Category, ArticleMeta }

export const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export const DEFAULT_COVER = '/images/blog/placeholder.png'
export const DEFAULT_AUTHOR = 'LF Business'

const FALLBACK_CATEGORY: Category = 'News'

export interface Article extends ArticleMeta {
  timestamp: number // for sorting; 0 when date invalid
  content: string // raw MDX body
  draft: boolean
}

/** Strip the heavy/non-serializable fields for passing to client components. */
export function toMeta(a: Article): ArticleMeta {
  const { timestamp, content, draft, ...meta } = a
  return meta
}

function isCategory(value: unknown): value is Category {
  return typeof value === 'string' && (CATEGORIES as readonly string[]).includes(value)
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Parse a single raw file into a validated Article, or null if unusable. */
function parseArticle(fileName: string, raw: string): Article | null {
  let parsed: matter.GrayMatterFile<string>
  try {
    parsed = matter(raw)
  } catch {
    return null
  }

  const data = (parsed.data ?? {}) as Record<string, unknown>
  const body = parsed.content ?? ''

  const title = typeof data.title === 'string' ? data.title.trim() : ''
  if (!title) return null // title is mandatory

  const fileBase = fileName.replace(/\.mdx?$/i, '')
  const rawSlug = typeof data.slug === 'string' && data.slug.trim() ? data.slug.trim() : fileBase
  const slug = toSlug(rawSlug) || toSlug(fileBase)
  if (!slug) return null // slug is mandatory

  const rawDate = typeof data.date === 'string' || typeof data.date === 'number' ? String(data.date) : ''
  const dateObj = rawDate ? new Date(rawDate) : null
  const validDate = dateObj && !Number.isNaN(dateObj.getTime()) ? dateObj : null
  const isoDate = validDate ? validDate.toISOString() : ''

  const category: Category = isCategory(data.category) ? data.category : FALLBACK_CATEGORY

  const excerpt = typeof data.excerpt === 'string' ? data.excerpt.trim() : ''

  const coverImage =
    typeof data.coverImage === 'string' && data.coverImage.trim() ? data.coverImage.trim() : DEFAULT_COVER

  const author =
    typeof data.author === 'string' && data.author.trim() ? data.author.trim() : DEFAULT_AUTHOR

  const featured = data.featured === true
  const draft = data.draft === true

  return {
    slug,
    title,
    date: isoDate,
    dateLabel: isoDate ? formatDate(isoDate) : '',
    timestamp: validDate ? validDate.getTime() : 0,
    category,
    excerpt,
    coverImage,
    author,
    featured,
    draft,
    readingTime: computeReadingTime(body),
    content: body,
  }
}

let cache: Article[] | null = null

/** Read, validate and sort (newest first) every article. Never throws. */
export function getAllArticles(): Article[] {
  if (cache && process.env.NODE_ENV === 'production') return cache

  let files: string[] = []
  try {
    files = fs.readdirSync(BLOG_DIR)
  } catch {
    cache = []
    return cache
  }

  const articles: Article[] = []
  const seen = new Set<string>()

  for (const file of files) {
    if (!/\.mdx?$/i.test(file)) continue
    if (file.startsWith('_')) continue // templates & partials

    let raw = ''
    try {
      raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    } catch {
      continue
    }

    const article = parseArticle(file, raw)
    if (!article) continue
    if (seen.has(article.slug)) continue // dedupe by slug
    seen.add(article.slug)
    if (!article.draft) articles.push(article)
  }

  articles.sort((a, b) => b.timestamp - a.timestamp)
  cache = articles
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug)
}

/** The explicitly featured article, or the most recent one as a fallback. */
export function getFeaturedArticle(): Article | undefined {
  const all = getAllArticles()
  return all.find((a) => a.featured) ?? all[0]
}

/** Categories that actually have at least one article, in canonical order. */
export function getUsedCategories(): Category[] {
  const used = new Set(getAllArticles().map((a) => a.category))
  return CATEGORIES.filter((c) => used.has(c))
}

/** Related: same category first, then most recent, excluding the current slug. */
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug)
  if (!current) return []
  const others = getAllArticles().filter((a) => a.slug !== slug)
  const sameCategory = others.filter((a) => a.category === current.category)
  const rest = others.filter((a) => a.category !== current.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
