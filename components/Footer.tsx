import Link from 'next/link'
import Image from 'next/image'
import type { SVGProps } from 'react'
import { NAV_LINKS, CONTACT, ADDRESS, SOCIAL } from '@/lib/site'

type IconProps = SVGProps<SVGSVGElement>

const brandIcon = (path: React.ReactNode) =>
  function BrandIcon(props: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        {path}
      </svg>
    )
  }

const SOCIAL_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  Facebook: brandIcon(
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  ),
  Instagram: brandIcon(
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  ),
}

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="LF Business – Home Page" className="group flex items-center gap-4">
              <span className="flex h-16 w-20 items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                <Image
                  src="/images/logo-lf-clean.png"
                  alt="Logo LF Luigi Ferrara"
                  width={128}
                  height={96}
                  className="h-auto w-full object-contain invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </span>
              <span className="font-serif text-xl text-ivory transition-colors duration-300 group-hover:text-gold-soft">
                Luigi Ferrara Avv.
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              LF Business — &ldquo;Guiding Your Business Worldwide&rdquo;. Diritto amministrativo,
              societario e d&apos;impresa.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ivory/40">
              ©LuigiFerrara2024
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h2 className="font-serif text-lg text-gold-soft">Contattaci</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Indirizzo */}
          <div>
            <h2 className="font-serif text-lg text-gold-soft">Indirizzo</h2>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ivory/70">
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.city}</p>
              <p>{ADDRESS.zip}</p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-serif text-lg text-gold-soft">Social</h2>
            <ul className="mt-5 flex gap-3">
              {SOCIAL.map((s) => {
                const Icon = SOCIAL_ICONS[s.label]
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
          <nav aria-label="Navigazione footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ivory/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-ivory/40">
            Studio Legale LF Business · Sarno (SA)
          </p>
        </div>
      </div>
    </footer>
  )
}
