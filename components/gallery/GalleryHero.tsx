'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { heroImage } from '@/lib/gallery'
import { cn } from '@/lib/utils'

export function GalleryHero() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink pb-14 pt-32 sm:min-h-[76vh] sm:pb-20">
      {/* Background photograph with very slow scale-in */}
      <div className="absolute inset-0">
        <Image
          src={heroImage.src || '/placeholder.svg'}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className={cn(
            'object-cover transition-transform duration-[1400ms] ease-out',
            entered ? 'scale-100' : 'scale-[1.08]',
          )}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p
            className={cn(
              'font-mono text-xs uppercase tracking-[0.32em] text-gold transition-all duration-700',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
            )}
          >
            LF Business
          </p>

          <h1
            className={cn(
              'mt-5 font-serif text-5xl leading-[0.95] text-ivory transition-all duration-[900ms] ease-out sm:text-7xl',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            )}
            style={{ transitionDelay: '120ms' }}
          >
            Galleria
          </h1>

          <p
            className={cn(
              'mt-6 max-w-xl font-serif text-xl italic text-ivory/85 transition-all duration-[900ms] ease-out sm:text-2xl',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            )}
            style={{ transitionDelay: '260ms' }}
          >
            Studio, attività e momenti professionali.
          </p>

          <p
            className={cn(
              'mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ivory/60 transition-all duration-[900ms] ease-out',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            )}
            style={{ transitionDelay: '400ms' }}
          >
            Una selezione di immagini dello Studio Legale, delle attività professionali, degli
            incontri e degli eventi istituzionali.
          </p>
        </div>
      </div>
    </section>
  )
}
