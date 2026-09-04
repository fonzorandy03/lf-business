import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { FeaturedCard } from '@/components/blog/FeaturedCard'
import { BlogExplorer } from '@/components/blog/BlogExplorer'
import { Reveal } from '@/components/Reveal'
import { getAllArticles, getFeaturedArticle, getUsedCategories, toMeta } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | LF Business — Studio Legale Ferrara',
  description:
    'Approfondimenti su diritto amministrativo, appalti pubblici, ricorsi al TAR e al Consiglio di Stato, diritto d\u2019impresa e internazionalizzazione a cura dello Studio Legale LF Business.',
  openGraph: {
    title: 'Blog | LF Business',
    description:
      'Analisi e aggiornamenti su diritto amministrativo, appalti pubblici e internazionalizzazione d\u2019impresa.',
    type: 'website',
    url: '/blog',
  },
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const all = getAllArticles()
  const featured = getFeaturedArticle()
  const categories = getUsedCategories()

  const listArticles = all.filter((a) => a.slug !== featured?.slug).map(toMeta)

  return (
    <>
      <Header />
      <main>
        <BlogHero count={all.length} />

        <div className="blog-canvas mx-auto max-w-6xl px-6 py-16 md:py-24">
          {featured ? (
            <Reveal className="mb-20">
              <FeaturedCard article={toMeta(featured)} />
            </Reveal>
          ) : null}

          {all.length > 0 ? (
            <Reveal>
              <BlogExplorer articles={listArticles} categories={categories} totalCount={all.length} />
            </Reveal>
          ) : (
            <p className="py-24 text-center text-muted-foreground">
              Non ci sono ancora articoli pubblicati. Torna presto a trovarci.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
