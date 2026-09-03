'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const step = () =>
    cn(
      'transition-all duration-700',
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
    )

  const contentStep = () =>
    cn(
      'transition-all duration-[900ms] ease-out',
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
    )

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/non sfocata.png"
          alt="Ambiente interno dello Studio Legale LF Business"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/30" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p
            className={cn(
              'mb-6 flex items-center gap-4 font-sans text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft',
              step(),
            )}
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            LF Business
          </p>

          <h1
            className={cn(
              'font-serif text-5xl font-medium leading-[1.02] text-ivory text-balance sm:text-6xl lg:text-7xl',
              contentStep(),
            )}
            style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
          >
            Contattaci
          </h1>

          <p
            className={cn(
              'mt-4 max-w-xl font-serif text-2xl italic text-gold-soft sm:text-3xl lg:text-4xl',
              contentStep(),
            )}
            style={{ transitionDelay: mounted ? '260ms' : '0ms' }}
          >
            Parliamo della tua esigenza.
          </p>

          <p
            className={cn(
              'mt-8 max-w-xl font-sans text-base leading-relaxed text-ivory/75 sm:text-lg',
              contentStep(),
            )}
            style={{ transitionDelay: mounted ? '400ms' : '0ms' }}
          >
            Per informazioni, assistenza professionale o per approfondire una questione specifica,
            puoi contattare direttamente lo Studio.
          </p>
        </div>
      </div>
    </section>
  )
}
