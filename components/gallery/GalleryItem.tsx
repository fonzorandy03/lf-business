'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'
import type { GalleryImage, MasonrySpan } from '@/lib/gallery'
import { cn } from '@/lib/utils'

interface GalleryItemProps {
  image: GalleryImage
  onOpen: () => void
  /** Stagger index for the entrance animation */
  order?: number
  priority?: boolean
}

const spanClasses: Record<MasonrySpan, string> = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2 row-span-1',
  tall: 'row-span-2',
  regular: '',
}

export function GalleryItem({ image, onOpen, order = 0, priority = false }: GalleryItemProps) {
  const span = image.span ?? 'regular'

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Apri: ${image.title}`}
      style={{ animationDelay: `${Math.min(order, 8) * 70}ms` }}
      className={cn(
        'gallery-item gallery-editorial-card group relative overflow-hidden bg-ink/5',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        spanClasses[span],
      )}
    >
      <Image
        src={image.src || '/placeholder.svg'}
        alt={image.alt}
        fill
        sizes={
          span === 'large' || span === 'wide'
            ? '(max-width: 768px) 100vw, 50vw'
            : '(max-width: 768px) 50vw, 25vw'
        }
        className="object-cover transition-transform duration-[600ms] ease-out will-change-transform group-hover:scale-[1.03]"
        priority={priority}
      />

      <span className="gallery-card-shine pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      {/* Hover scrim */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* View affordance */}
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 flex size-9 translate-y-1 items-center justify-center rounded-full border border-ivory/40 bg-ink/30 text-ivory opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Plus className="size-4" />
      </span>

      {/* Caption on hover */}
      <span className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-0.5 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gold">
          {image.location ?? image.title}
        </span>
        <span className="font-serif text-base leading-tight text-ivory">{image.title}</span>
      </span>
    </button>
  )
}
