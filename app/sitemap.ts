import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'
import { absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/sezione-business', '/galleria', '/blog', '/contattaci'].map(
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

  return [...staticPages, ...articles]
}
