import type { ReactNode } from 'react'
import { MobileHeader } from './MobileHeader'
import { CONTACT, ADDRESS, NAPLES_ADDRESS, SOCIAL, whatsappHref } from '@/lib/site'

/** Presentation boundary only: routes and their data remain shared. */
export function ResponsivePage({ children, mobile }: { children: ReactNode; mobile: ReactNode }) {
  return <><div className="lf-desktop">{children}</div><div className="lf-mobile"><MobileHeader /><main id="mobile-content">{mobile}</main><MobileFooter /></div></>
}

export function MobileSection({ children, dark = false, id }: { children: ReactNode; dark?: boolean; id?: string }) {
  return <section id={id} className={`m-section${dark ? ' m-dark' : ''}`}>{children}</section>
}

export function MobileCTA() {
  return <MobileSection dark><p className="m-label">Parliamone</p><h2>Ogni progetto<br />inizia da una<br /><em>conversazione.</em></h2><div className="m-actions"><a className="m-button" href={whatsappHref}>Scrivi allo Studio <span aria-hidden>→</span></a><a className="m-text-link" href={CONTACT.phoneHref}>Chiama Luigi <span aria-hidden>↗</span></a></div></MobileSection>
}

export function MobileFooter() {
  return <footer className="m-footer"><a href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="60" height="44" alt="LF Business" /></a><p className="m-label">Sarno / Italia</p><address>{ADDRESS.street}<br />{ADDRESS.city}<br /><br />{NAPLES_ADDRESS.street} · {NAPLES_ADDRESS.city}</address><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phone}</a><div className="m-footer-social">{SOCIAL.map(s=><a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>)}</div><small>© LF Business · Studio Legale</small></footer>
}
