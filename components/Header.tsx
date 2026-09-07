'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/site'
import { LanguageSwitcher } from './LanguageSwitcher'

function Monogram({ light }: { light: boolean }) {
  return (
    <Link
      href="/"
      aria-label="LF Business – Home Page"
      className="group flex items-center gap-3"
    >
      <span className="relative flex h-10 w-12 items-center justify-center transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105 sm:h-12 sm:w-14">
        <Image
          src="/images/logo-lf-clean.png"
          alt="Logo LF Luigi Ferrara"
          width={112}
          height={80}
          priority
          className={cn(
            'h-auto w-full object-contain transition-[filter] duration-500',
            light ? 'invert' : '',
          )}
        />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span
          className={cn(
            'font-serif text-lg font-medium transition-colors duration-300',
            light ? 'text-ivory' : 'text-ink',
          )}
        >
          Luigi Ferrara
        </span>
        <span
          className={cn(
            'text-[0.6rem] font-medium uppercase tracking-[0.3em] transition-colors duration-300',
            light ? 'text-gold-soft' : 'text-gold',
          )}
        >
          LF Business
        </span>
      </span>
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const currentPath = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Transparent (light text) at the very top of pages that open on a dark hero.
  const opensOnDarkHero =
    currentPath === '/' ||
    currentPath.startsWith('/blog') ||
    currentPath.startsWith('/sezione-business') ||
    currentPath.startsWith('/specializzazioni-legali') ||
    currentPath === '/contattaci' ||
    currentPath === '/galleria' ||
    currentPath === '/curriculum'
  const transparent = !scrolled && !open && opensOnDarkHero
  const lightHeader = transparent || open

  return (
    <header
      className={cn(
        'site-header fixed inset-x-0 top-0 z-50 transition-all duration-500',
        open
          ? 'border-b border-ivory/10 bg-ink py-3'
          : transparent
          ? 'bg-transparent py-5'
          : 'border-b border-border bg-background/90 py-3 backdrop-blur-md',
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Monogram light={lightHeader} />

        {/* Desktop nav */}
        <nav aria-label="Navigazione principale" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => {
              const active = currentPath === link.href.replace(/\/+$/, '')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative whitespace-nowrap text-[0.67rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300 xl:text-[0.7rem] xl:tracking-[0.15em]',
                      transparent
                        ? 'text-ivory/80 hover:text-ivory'
                        : 'text-ink/70 hover:text-ink',
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300',
                        active ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden justify-self-end lg:block">
          <LanguageSwitcher light={transparent} />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          className={cn(
            'flex h-10 w-10 items-center justify-center transition-colors lg:hidden',
            lightHeader ? 'text-ivory' : 'text-ink',
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto overscroll-contain bg-ink transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden',
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-3 opacity-0',
        )}
      >
        <nav aria-label="Navigazione mobile" className="mx-auto flex min-h-full max-w-lg flex-col px-6 pb-8 pt-7 sm:px-10">
          <div className="mb-4 flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.32em] text-gold-soft/80">
            <span className="h-px w-8 bg-gold/70" />
            Navigazione
          </div>
          <ul className="flex flex-col border-t border-ivory/10">
            {NAV_LINKS.map((link, index) => {
              const active = currentPath === link.href.replace(/\/+$/, '')
              return (
              <li
                key={link.href}
                className={cn(
                  'transition-[opacity,transform] duration-500 ease-out',
                  open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0',
                )}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group flex min-h-14 items-center gap-4 border-b border-ivory/10 py-3.5 text-ivory transition-colors hover:text-gold',
                    active && 'text-gold-soft',
                  )}
                >
                  <span className="w-5 text-[0.55rem] font-medium tracking-[0.16em] text-gold/65">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-serif text-[clamp(1.35rem,6vw,1.7rem)] leading-none">
                    {link.label}
                  </span>
                  <span aria-hidden="true" className="translate-x-0 text-lg text-gold/65 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </li>
            )})}
          </ul>
          <div className="mt-auto flex items-end justify-between gap-6 pt-7">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.28em] text-ivory/35">Studio legale</p>
              <p className="mt-1 font-serif text-sm text-ivory/65">Sarno · Napoli</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[0.5rem] uppercase tracking-[0.25em] text-ivory/35">Lingua</span>
              <LanguageSwitcher light />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}


