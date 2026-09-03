'use client'

import { useMemo, useState } from 'react'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ArticleMeta, Category } from '@/lib/blog-types'
import { ArticleCard } from './ArticleCard'
import { Reveal } from '@/components/Reveal'

const PAGE_SIZE = 6

interface BlogExplorerProps {
  articles: ArticleMeta[]
  categories: Category[]
}

export function BlogExplorer({ articles, categories }: BlogExplorerProps) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<Category | 'Tutti'>('Tutti')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchesCategory = active === 'Tutti' || a.category === active
      if (!matchesCategory) return false
      if (!q) return true
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
      )
    })
  }, [articles, query, active])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function selectCategory(cat: Category | 'Tutti') {
    setActive(cat)
    setPage(1)
  }

  function onSearch(value: string) {
    setQuery(value)
    setPage(1)
  }

  const filters: (Category | 'Tutti')[] = ['Tutti', ...categories]

  return (
    <section aria-label="Elenco articoli">
      {/* Controls */}
      <div className="flex flex-col gap-6 border-b border-border pb-8">
        <div className="relative max-w-md">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cerca tra gli articoli..."
            aria-label="Cerca tra gli articoli"
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          />
          {query ? (
            <button
              type="button"
              onClick={() => onSearch('')}
              aria-label="Cancella ricerca"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtra per categoria">
          {filters.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-pressed={isActive}
                className={[
                  'filter-pill border px-4 py-2 text-xs uppercase tracking-[0.1em]',
                  isActive
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border bg-transparent text-muted-foreground hover:border-accent/50 hover:text-foreground',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results */}
      {visible.length > 0 ? (
        <div className="grid gap-x-8 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((article, i) => (
            <Reveal key={article.slug} delay={i * 60}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-24 text-center">
          <p className="font-serif text-2xl text-foreground">Nessun articolo trovato</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Prova a modificare la ricerca o a selezionare un&apos;altra categoria.
          </p>
          <button
            type="button"
            onClick={() => {
              onSearch('')
              selectCategory('Tutti')
            }}
            className="btn-luxury btn-luxury-ghost mt-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Azzera i filtri
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 ? (
        <nav
          className="mt-16 flex items-center justify-center gap-2"
          aria-label="Paginazione articoli"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Pagina precedente"
            className="page-button inline-flex h-10 w-10 items-center justify-center border border-border text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-current={p === currentPage ? 'page' : undefined}
              className={[
                'page-button inline-flex h-10 w-10 items-center justify-center border text-sm',
                p === currentPage
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground',
              ].join(' ')}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Pagina successiva"
            className="page-button inline-flex h-10 w-10 items-center justify-center border border-border text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      ) : null}
    </section>
  )
}
