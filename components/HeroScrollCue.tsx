'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function HeroScrollCue() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setHidden(window.scrollY > 24))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToContent = () => {
    document.querySelector('#chi-siamo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToContent}
      aria-label="Scorri alla sezione successiva"
      className={cn(
        'group absolute inset-x-0 bottom-0 z-10 mx-auto flex w-fit flex-col items-center pb-8',
        'text-[0.62rem] font-medium uppercase tracking-[0.34em] text-ivory/65',
        'transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
        hidden ? 'pointer-events-none translate-y-3 opacity-0' : 'translate-y-0',
      )}
    >
      <span className="transition-colors duration-300 group-hover:text-gold-soft">Scorri</span>
      <span
        aria-hidden="true"
        className="mt-3 h-12 w-px origin-top bg-gradient-to-b from-gold via-gold/55 to-transparent transition-transform duration-500 group-hover:scale-y-125"
      />
    </button>
  )
}
