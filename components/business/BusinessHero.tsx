'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import { CTAButton } from '@/components/CTAButton'

const facets = [
  ['01', 'Strategia legale'],
  ['02', 'Accesso ai mercati'],
  ['03', 'Operazioni internazionali'],
] as const

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

  const scrollToAreas = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const target = document.getElementById('aree')
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const headerOffset = 72
    const start = window.scrollY
    const destination = target.getBoundingClientRect().top + start - headerOffset

    if (reduceMotion) {
      window.scrollTo({ top: destination })
      window.history.replaceState(null, '', '#aree')
      return
    }

    const distance = destination - start
    const duration = 1250
    const startedAt = performance.now()
    const easeInOutQuint = (progress: number) =>
      progress < 0.5
        ? 16 * progress ** 5
        : 1 - (-2 * progress + 2) ** 5 / 2

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      window.scrollTo({ top: start + distance * easeInOutQuint(progress) })

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        window.history.replaceState(null, '', '#aree')
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section className="business-hero relative isolate flex min-h-[100svh] items-start overflow-hidden bg-ink lg:items-center">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/15" />
        <div className="business-hero-sweep absolute inset-0" aria-hidden="true" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 pb-20 pt-32 sm:px-10 sm:pt-40 lg:grid-cols-[1fr_22rem] lg:items-end lg:pb-28">
        <div className="max-w-4xl">
          <div className={cn('flex items-center gap-3', step(0))}>
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-soft">
              Legal &amp; Business Advisory
            </span>
          </div>

          <h1
            className={cn(
              'mt-6 font-serif font-medium leading-[0.95] text-ivory text-balance',
              'text-5xl sm:text-7xl lg:text-8xl',
              step(1),
            )}
            style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
          >
            Oltre i confini.<br />
            <span className="italic text-gold-soft">Dentro ogni opportunità.</span>
          </h1>

          <p
            className={cn(
              'mt-4 font-serif text-2xl italic text-gold-soft sm:text-3xl',
              step(2),
            )}
            style={{ transitionDelay: mounted ? '220ms' : '0ms' }}
          >
            LF Business — Guiding Your Business Worldwide
          </p>

          <p
            className={cn(
              'mt-8 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg',
              step(3),
            )}
            style={{ transitionDelay: mounted ? '320ms' : '0ms' }}
          >
            Trasformiamo progetti complessi in percorsi chiari e tutelati. Affianchiamo imprese
            e investitori nelle decisioni strategiche, nelle negoziazioni e nello sviluppo sui
            mercati internazionali.
          </p>

          <div
            className={cn('mt-10 flex flex-wrap items-center gap-4', step(4))}
            style={{ transitionDelay: mounted ? '440ms' : '0ms' }}
          >
            <CTAButton href="#aree" variant="primary" onClick={scrollToAreas}>
              Scopri come possiamo aiutarti
            </CTAButton>
            <CTAButton href="/contattaci" variant="outline-light">
              Parliamo del tuo progetto
            </CTAButton>
          </div>

        </div>

        <div className={cn('business-capabilities border border-white/15 bg-ink/45 p-6 backdrop-blur-md', step(5))} style={{ transitionDelay: mounted ? '560ms' : '0ms' }}>
          <p className="mb-6 text-[0.62rem] uppercase tracking-[0.25em] text-gold-soft">Un unico interlocutore</p>
          <ul className="divide-y divide-white/10">
            {facets.map(([n, label]) => (
              <li key={n} className="group flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                <span className="font-serif text-xl text-gold">{n}</span>
                <span className="text-sm tracking-wide text-ivory/75 transition-colors group-hover:text-ivory">{label}</span>
                <span className="ml-auto text-gold/50 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
