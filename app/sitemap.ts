import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { absoluteUrl } from '@/lib/site'
import { LEGAL_AREAS } from '@/lib/legal'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/sezione-business', '/specializzazioni-legali', '/galleria', '/blog', '/contattaci', '/curriculum'].map(
    (path) => ({
      url: absoluteUrl(path || '/'),
      lastModified: new Date(),
      changeFrequency: path === '/blog' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path === '/blog' ? 0.8 : 0.7,
    }),
  )

  const articles = getAllArticles().map((article) => ({
    url: absoluteUrl(`/blog/${article.slug}`),
    lastModified: article.date ? new Date(article.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const legalAreas = LEGAL_AREAS.map((area) => ({
    url: absoluteUrl(area.href),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...legalAreas, ...articles]
}
