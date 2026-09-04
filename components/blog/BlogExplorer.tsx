'use client'

import { useMemo, useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ArticleMeta, Category } from '@/lib/blog-types'
import { ArticleCard } from './ArticleCard'
import { Reveal } from '@/components/Reveal'

const PAGE_SIZE = 6

interface BlogExplorerProps {
  articles: ArticleMeta[]
  categories: Category[]
  totalCount?: number
}

export function BlogExplorer({ articles, categories, totalCount }: BlogExplorerProps) {
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
      <div className="blog-archive-panel relative overflow-hidden border border-ink/10 bg-ink px-6 py-10 text-ivory sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <span className="blog-archive-mark" aria-hidden="true">LF</span>
        <span className="blog-archive-orbit pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full border border-gold/15" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-gold" aria-hidden="true" />
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-soft">Archivio legale</p>
            </div>
            <h2 className="max-w-2xl font-serif text-4xl leading-[0.98] md:text-5xl lg:text-6xl">Conoscere oggi.<br /><span className="italic text-gold-soft">Decidere meglio.</span></h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/50">Analisi, orientamenti e aggiornamenti per interpretare il diritto e le sue conseguenze concrete.</p>
          </div>
          <div className="blog-search-shell relative border border-ivory/15 bg-ivory/[0.045] p-5 backdrop-blur-sm lg:col-span-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold-soft">Ricerca nell’archivio</span>
              <span className="font-serif text-3xl text-ivory/25">{String(totalCount ?? filtered.length).padStart(2, '0')}</span>
            </div>
            <div className="relative">
            <Search aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
            <input
              type="text"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Cerca titolo, autore o tema"
              aria-label="Cerca tra gli articoli"
              className="blog-search-dark w-full border-0 border-b border-white/20 bg-transparent py-3 pl-7 pr-9 text-sm text-ivory outline-none placeholder:text-ivory/35 focus:border-gold"
            />
            </div>
          </div>
        </div>

        <div className="relative mt-12 border-t border-white/10 pt-7">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ivory/35">Filtra per argomento</span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-ivory/10 to-transparent sm:ml-6 sm:block" aria-hidden="true" />
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
                  'blog-filter relative overflow-hidden rounded-full border px-4 py-2.5 text-[0.64rem] uppercase tracking-[0.13em] transition-all duration-300',
                  isActive
                    ? 'is-active border-gold text-ink'
                    : 'border-ivory/15 text-ivory/55 hover:border-gold/50 hover:text-ivory',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
          </div>
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
