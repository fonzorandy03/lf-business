import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/blog-types'

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/blog/${article.slug}`}
        className="relative block overflow-hidden rounded-lg bg-secondary"
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
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="text-accent">{article.category}</span>
          {article.dateLabel ? (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
              <span className="normal-case tracking-normal">{article.dateLabel}</span>
            </>
          ) : null}
        </div>

        <h3 className="font-serif text-xl leading-snug tracking-tight text-foreground text-balance">
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
