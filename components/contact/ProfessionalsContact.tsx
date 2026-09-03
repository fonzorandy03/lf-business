'use client'

import { useEffect, useRef, useState } from 'react'
import { Portrait } from '@/components/Portrait'
import { cn } from '@/lib/utils'

const people = [
  {
    name: 'Avv. Luigi Ferrara',
    initials: 'LF',
    role: 'Fondatore · Diritto Amministrativo',
    src: '/images/luigi-ferrara-ritratto.png',
  },
  {
    name: 'Avv. Nunzia Robustelli',
    initials: 'NR',
    role: "Diritto Societario e d'Impresa",
    src: '/images/nunzia-robustelli-enhanced.webp',
  },
]

export function ProfessionalsContact() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
            Studio Legale LF Business
          </span>
          <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ink text-balance sm:text-4xl">
            I professionisti a tua disposizione
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold" aria-hidden="true" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:gap-16"
        >
          {people.map((person, i) => (
            <figure
              key={person.name}
              className={cn(
                'group flex flex-col items-center text-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.97] opacity-0',
              )}
              style={{ transitionDelay: visible ? `${i * 130}ms` : '0ms' }}
            >
              <div className="w-full max-w-[22rem] overflow-hidden rounded-sm transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                <Portrait name={person.name} initials={person.initials} src={person.src} />
              </div>
              <figcaption className="mt-7">
                <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold">
                  {person.role}
                </span>
                <span className="block font-serif text-3xl font-medium text-ink sm:text-[2.1rem]">
                  {person.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
