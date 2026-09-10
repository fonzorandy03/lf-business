import { getAllArticles, toMeta } from '@/lib/blog'
import { HomeExperience } from './HomeExperience'

const articleTranslations: Record<string, string> = {
  'La convenzione urbanistica, contratto ad oggetto pubblico': 'The urban planning agreement, contract for a public purpose',
  'Parere. Riduzione della fascia di rispetto cimiteriale e rideterminazione del vincolo ex art. 338 R.D. 1265/1934': 'Opinion. Reduction of the cemetery buffer zone and redetermination of the restriction pursuant to art. 338 R.D. 1265/1934',
  'Sentenza del 13.11.24. Depennamento graduatoria GPS per titolo invalido o falso': 'Sentence of 11.13.24. Removal from GPS ranking due to invalid or false qualification',
  'Edilizia e Urbanistica': 'Building and Urban Planning',
  'Diritto Scolastico': 'School Law',
}

export function MobileHome() {
  const articles = getAllArticles().slice(0, 3).map(toMeta).map(article => ({
    slug: article.slug,
    title: { it: article.title, en: articleTranslations[article.title] || article.title },
    category: { it: article.category, en: articleTranslations[article.category] || article.category },
    date: article.date,
    coverImage: article.coverImage,
  }))
  return <HomeExperience articles={articles} />
}

