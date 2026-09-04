'use client'

import type { CategoryFilter, GalleryCategory } from '@/lib/gallery'
import { cn } from '@/lib/utils'

interface GalleryFiltersProps {
  filters: CategoryFilter[]
  active: GalleryCategory | 'all'
  onChange: (id: GalleryCategory | 'all') => void
}

export function GalleryFilters({ filters, active, onChange }: GalleryFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filtra la galleria per categoria"
      className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {filters.map((filter) => {
        const isActive = active === filter.id
        return (
          <button
            key={filter.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              'filter-pill relative shrink-0 rounded-full border border-ink/10 px-5 py-3 text-[0.68rem] uppercase tracking-[0.16em] transition-all duration-300',
              'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
              isActive ? 'border-gold text-ink' : 'text-ink/45 hover:border-gold/50 hover:text-ink/80',
            )}
          >
            {filter.label}
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-x-4 bottom-1.5 h-px origin-left bg-gold transition-transform duration-500',
                isActive ? 'scale-x-100' : 'scale-x-0',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
