import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { MDXContent } from '@/components/blog/MDXContent'
import { ArticleCard } from '@/components/blog/ArticleCard'
import {
  getAllSlugs,
  getArticleBySlug,
  getRelatedArticles,
  toMeta,
} from '@/lib/blog'
import { absoluteUrl, SITE_NAME } from '@/lib/site'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Articolo non trovato | LF Business' }

  return {
    title: `${article.title} | Blog LF Business`,
    description: article.excerpt || undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      type: 'article',
      publishedTime: article.date || undefined,
      authors: [article.author],
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
    alternates: { canonical: `/blog/${article.slug}` },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug).map(toMeta)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.coverImage),
    datePublished: article.date || undefined,
    dateModified: article.date || undefined,
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: absoluteUrl('/') },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
  }

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {/* Hero */}
        <header className="article-hero relative isolate flex min-h-[68vh] items-end overflow-hidden bg-ink pt-32">
          <div className="absolute inset-0 -z-10">
            <Image
              src={article.coverImage || '/images/blog/placeholder.png'}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-cinematic-image object-cover object-center"
            />
            <div className="hero-cinematic-overlay absolute inset-0 bg-ink/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-ink/20" />
            <div className="hero-light-sweep absolute inset-0 opacity-40" aria-hidden="true" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 md:pb-20">
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-ivory/75">
                <span className="rounded-full border border-gold/50 bg-ink/35 px-3 py-1 text-gold-soft backdrop-blur-sm">
                  {article.category}
                </span>
                {article.dateLabel ? <span>{article.dateLabel}</span> : null}
                <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
                <span>{article.readingTime} min di lettura</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-5xl font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[1.04] tracking-[-0.025em] text-ivory text-balance [text-shadow:0_3px_28px_rgba(0,0,0,0.65)]">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-sm tracking-wide text-gold-soft">di {article.author}</p>
            </Reveal>
          </div>
        </header>

        {/* Body */}
        <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          {article.excerpt ? (
            <p className="mb-12 border-l-2 border-accent pl-6 font-serif text-xl leading-snug text-foreground text-pretty md:text-2xl">
              {article.excerpt}
            </p>
          ) : null}

          <MDXContent source={article.content} />

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-x-1" />
              Torna al blog
            </Link>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 ? (
          <section className="border-t border-border bg-secondary/40 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-12 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                Articoli correlati
              </h2>
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 60}>
                    <ArticleCard article={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  )
}

