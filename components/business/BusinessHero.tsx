'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CTAButton } from '@/components/CTAButton'

const facets = ['International Business', 'Legal Advisory', 'Global Trade', 'Energy & Commodities']

export function BusinessHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const step = (i: number) =>
    cn(
      'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
    )

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* Background image with slow scale-in */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/business-hero.png"
          alt="Porto commerciale internazionale al crepuscolo con navi cargo e gru"
          fill
          priority
          sizes="100vw"
          className={cn(
            'object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
            mounted ? 'scale-100' : 'scale-110',
          )}
        />
        {/* Refined overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 sm:px-10 sm:pb-28 lg:pb-36">
        <div className="max-w-3xl">
          <div className={cn('flex items-center gap-3', step(0))}>
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-soft">
              Sezione Business
            </span>
          </div>

          <h1
            className={cn(
              'mt-6 font-serif font-medium leading-[0.95] text-ivory text-balance',
              'text-6xl sm:text-7xl lg:text-8xl',
              step(1),
            )}
            style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
          >
            LF Business
          </h1>

          <p
            className={cn(
              'mt-4 font-serif text-2xl italic text-gold-soft sm:text-3xl',
              step(2),
            )}
            style={{ transitionDelay: mounted ? '220ms' : '0ms' }}
          >
            &ldquo;Guiding Your Business Worldwide&rdquo;
          </p>

          <p
            className={cn(
              'mt-8 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg',
              step(3),
            )}
            style={{ transitionDelay: mounted ? '320ms' : '0ms' }}
          >
            Competenze legali e strategiche al servizio delle imprese: contrattualistica
            internazionale, commercio globale, energia e materie prime, con un approccio
            sartoriale e una visione realmente internazionale.
          </p>

          <div
            className={cn('mt-10 flex flex-wrap items-center gap-4', step(4))}
            style={{ transitionDelay: mounted ? '440ms' : '0ms' }}
          >
            <CTAButton href="#aree" variant="primary">
              Esplora le aree
            </CTAButton>
            <CTAButton href="/contattaci" variant="outline-light">
              Contattaci
            </CTAButton>
          </div>

          {/* Facet row */}
          <ul
            className={cn(
              'mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-ivory/15 pt-6',
              step(5),
            )}
            style={{ transitionDelay: mounted ? '560ms' : '0ms' }}
          >
            {facets.map((f) => (
              <li
                key={f}
                className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/55"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
