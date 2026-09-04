import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { ArticleMeta } from '@/lib/blog-types'

export function FeaturedCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="blog-featured group relative grid overflow-hidden bg-ink shadow-[0_30px_80px_-45px_rgba(0,0,0,0.75)] lg:grid-cols-[1.08fr_0.92fr]">
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/35" />
          <div className="blog-image-shine absolute inset-0" aria-hidden="true" />
        </div>
      </Link>

      <div className="relative flex flex-col justify-center gap-6 p-8 text-ivory md:p-12 lg:p-14">
        <span className="absolute right-8 top-5 font-serif text-8xl text-white/[0.035]" aria-hidden="true">01</span>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-ivory/55">
          <span className="rounded-full border border-gold/45 px-3 py-1 text-gold-soft">
            In evidenza
          </span>
          <span>{article.category}</span>
        </div>

        <h2 className="font-serif text-3xl leading-tight tracking-tight text-ivory text-balance md:text-5xl">
          <Link href={`/blog/${article.slug}`} className="transition-colors duration-300 hover:text-gold-soft">
            {article.title}
          </Link>
        </h2>

        {article.excerpt ? (
          <p className="max-w-prose text-base leading-relaxed text-ivory/62 md:text-lg">
            {article.excerpt}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3 text-sm text-ivory/45">
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
          className="group/link mt-2 inline-flex w-fit items-center gap-3 border-b border-gold/40 pb-2 text-xs font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold"
        >
          Leggi l&apos;articolo
          <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
