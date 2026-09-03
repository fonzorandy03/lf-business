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
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p
            className={cn(
              'mb-6 flex items-center gap-4 font-sans text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft transition-all duration-700',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
            )}
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            LF Business
          </p>

          <h1
            className={cn(
              'font-serif text-5xl font-medium leading-[1.02] text-ivory transition-all duration-[900ms] ease-out sm:text-6xl lg:text-7xl',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            )}
            style={{ transitionDelay: '120ms' }}
          >
            Galleria
          </h1>

          <p
            className={cn(
              'mt-4 max-w-xl font-serif text-2xl italic text-gold-soft transition-all duration-[900ms] ease-out sm:text-3xl lg:text-4xl',
              entered ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            )}
            style={{ transitionDelay: '260ms' }}
          >
            Studio, attività e momenti professionali.
          </p>

          <p
            className={cn(
              'mt-8 max-w-xl font-sans text-base leading-relaxed text-ivory/75 transition-all duration-[900ms] ease-out sm:text-lg',
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
