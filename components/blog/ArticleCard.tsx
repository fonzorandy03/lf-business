import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/blog-types'

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="blog-card group flex h-full flex-col border border-border/80 bg-card p-3 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.55)]">
      <Link
        href={`/blog/${article.slug}`}
        className="relative block overflow-hidden bg-secondary"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={article.coverImage || '/images/blog/placeholder.png'}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="blog-card-corner absolute bottom-0 right-0 h-10 w-10 border-b border-r border-gold/0 transition-all duration-500 group-hover:bottom-3 group-hover:right-3 group-hover:border-gold/70" aria-hidden="true" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-6">
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="text-accent">{article.category}</span>
          {article.dateLabel ? (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
              <span className="normal-case tracking-normal">{article.dateLabel}</span>
            </>
          ) : null}
        </div>

        <h3 className="font-serif text-2xl leading-[1.18] tracking-tight text-foreground text-balance">
          <Link
            href={`/blog/${article.slug}`}
            className="transition-colors hover:text-accent focus-visible:text-accent"
          >
            {article.title}
          </Link>
        </h3>

        {article.excerpt ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        ) : null}

        <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted-foreground">
          <span>{article.author}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
          <span>{article.readingTime} min di lettura</span>
        </div>
      </div>
    </article>
  )
}
