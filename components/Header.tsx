'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/site'

function Monogram({ light }: { light: boolean }) {
  return (
    <Link
      href="/"
      aria-label="LF Business – Home Page"
      className="group flex items-center gap-3"
    >
      <span className="relative flex h-12 w-14 items-center justify-center transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
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
    pathname === '/' ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/sezione-business') ||
    pathname === '/contattaci' ||
    pathname === '/galleria'
  const transparent = !scrolled && !open && opensOnDarkHero

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent py-5'
          : 'border-b border-border bg-background/90 py-3 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Monogram light={transparent} />

        {/* Desktop nav */}
        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300',
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

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          className={cn(
            'flex h-10 w-10 items-center justify-center transition-colors lg:hidden',
            transparent ? 'text-ivory' : 'text-ink',
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden bg-ink transition-[max-height,opacity] duration-500 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav aria-label="Navigazione mobile" className="px-6 py-6">
          <ul className="flex flex-col divide-y divide-ivory/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-serif text-2xl text-ivory transition-colors hover:text-gold"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-gold/60">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
