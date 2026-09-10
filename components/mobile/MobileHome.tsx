import { getAllArticles, toMeta } from '@/lib/blog'
import translations from '@/public/translations/en.json'
import { HomeExperience } from './HomeExperience'

export function MobileHome() {
  const dictionary = translations as Record<string, string>
  const articles = getAllArticles().slice(0, 3).map(toMeta).map(article => ({
    slug: article.slug,
    title: { it: article.title, en: dictionary[article.title] || article.title },
    category: { it: article.category, en: dictionary[article.category] || article.category },
    date: article.date,
    coverImage: article.coverImage,
  }))
  return <HomeExperience articles={articles} />
}

