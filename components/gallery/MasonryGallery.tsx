'use client'

import { useMemo, useState } from 'react'
import type { GalleryImage, GalleryCategory, CategoryFilter } from '@/lib/gallery'
import { GalleryFilters } from './GalleryFilters'
import { GalleryItem } from './GalleryItem'
import { GalleryLightbox } from './GalleryLightbox'

interface MasonryGalleryProps {
  images: GalleryImage[]
  filters: CategoryFilter[]
}

export function MasonryGallery({ images, filters }: MasonryGalleryProps) {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (active === 'all' ? images : images.filter((img) => img.category === active)),
    [images, active],
  )

  return (
    <div>
      <div className="mb-10 md:mb-14">
        <GalleryFilters
          filters={filters}
          active={active}
          onChange={(id) => {
            setActive(id)
            setLightboxIndex(null)
          }}
        />
      </div>

      <div
        key={active}
        className="grid auto-rows-[136px] grid-cols-2 gap-3 sm:auto-rows-[168px] sm:gap-4 md:grid-cols-3 md:auto-rows-[196px] lg:grid-cols-4 lg:auto-rows-[214px] [grid-auto-flow:dense]"
      >
        {visible.map((image, i) => (
          <GalleryItem
            key={image.src}
            image={image}
            order={i}
            priority={i < 4}
            onOpen={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={visible}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
