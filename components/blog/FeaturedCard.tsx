import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { ArticleMeta } from '@/lib/blog-types'

export function FeaturedCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group relative grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2">
      <Link
        href={`/blog/${article.slug}`}
        className="relative block overflow-hidden bg-secondary"
        aria-label={article.title}
      >
        <div className="relative aspect-[16/11] h-full w-full lg:aspect-auto lg:min-h-[26rem]">
          <Image
            src={article.coverImage || '/images/blog/placeholder.png'}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="rounded-full border border-accent/40 px-3 py-1 text-accent">
            In evidenza
          </span>
          <span className="text-accent">{article.category}</span>
        </div>

        <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground text-balance md:text-4xl">
          <Link href={`/blog/${article.slug}`} className="transition-colors hover:text-accent">
            {article.title}
          </Link>
        </h2>

        {article.excerpt ? (
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
            {article.excerpt}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{article.author}</span>
          {article.dateLabel ? (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
              <span>{article.dateLabel}</span>
            </>
          ) : null}
          <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
          <span>{article.readingTime} min di lettura</span>
        </div>

        <Link
          href={`/blog/${article.slug}`}
          className="group/link mt-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-foreground"
        >
          Leggi l&apos;articolo
          <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
