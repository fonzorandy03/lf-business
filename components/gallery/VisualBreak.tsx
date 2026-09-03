'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { breakImage } from '@/lib/gallery'

export function VisualBreak() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let frame = 0
    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
        // Very subtle: max ~16px of movement.
        setOffset(Math.max(-16, Math.min(16, progress * -16)))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Immagine istituzionale"
      className="relative h-[52vh] min-h-[360px] overflow-hidden bg-ink sm:h-[62vh]"
    >
      <div className="absolute inset-0 scale-[1.08]" style={{ transform: `translateY(${offset}px) scale(1.08)` }}>
        <Image
          src={breakImage.src || '/placeholder.svg'}
          alt={breakImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />
      <div className="relative flex h-full items-center justify-center px-6">
        <p className="max-w-2xl text-balance text-center font-serif text-3xl italic leading-tight text-ivory sm:text-5xl">
          Esperienza, presenza, relazioni.
        </p>
      </div>
    </section>
  )
}
