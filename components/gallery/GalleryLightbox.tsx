'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/lib/gallery'
import { cn } from '@/lib/utils'

interface GalleryLightboxProps {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const image = images[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  // Keyboard: ESC, arrows, and a lightweight focus trap.
  useEffect(() => {
    closeRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'Tab') {
        // Keep focus inside the dialog.
        e.preventDefault()
      }
    }

    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onClose, goPrev, goNext])

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Immagine ${index + 1} di ${images.length}: ${image.title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar: counter + close */}
      <div
        className="flex items-center justify-between px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-xs tracking-[0.2em] text-ivory/60">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Chiudi la galleria"
          className="flex size-10 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div
        className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Immagine precedente"
          className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-ivory/80 transition-all hover:bg-ivory/15 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:left-4"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>

        <figure className="relative flex max-h-full max-w-5xl flex-col items-center">
          <div className="relative">
            <Image
              key={image.src}
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              width={1600}
              height={1067}
              sizes="(max-width: 768px) 92vw, 80vw"
              className="max-h-[74vh] w-auto animate-[fadeIn_0.4s_ease] rounded-sm object-contain"
              priority
            />
          </div>
          {(image.caption || image.title) && (
            <figcaption className="mt-4 max-w-2xl text-center">
              <span className="font-serif text-lg text-ivory">{image.title}</span>
              {image.caption && (
                <span className="mt-1 block text-sm leading-relaxed text-ivory/60">
                  {image.caption}
                </span>
              )}
              {(image.location || image.date) && (
                <span className="mt-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold/80">
                  {[image.location, image.date].filter(Boolean).join(' · ')}
                </span>
              )}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          onClick={goNext}
          aria-label="Immagine successiva"
          className={cn(
            'absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-ivory/80 transition-all hover:bg-ivory/15 hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-4',
          )}
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
