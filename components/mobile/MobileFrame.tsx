import type { ReactNode } from 'react'
import { MobileHeader } from './MobileHeader'
import { CONTACT, ADDRESS, NAPLES_ADDRESS, SOCIAL, whatsappHref } from '@/lib/site'
import { EditorialArrow } from '@/components/icons/EditorialArrow'

/** Presentation boundary only: routes and their data remain shared. */
export function ResponsivePage({ children, mobile }: { children: ReactNode; mobile: ReactNode }) {
  return <><div className="lf-desktop">{children}</div><div className="lf-mobile"><MobileHeader /><main id="mobile-content">{mobile}</main><MobileFooter /></div></>
}

export function MobileSection({ children, dark = false, id }: { children: ReactNode; dark?: boolean; id?: string }) {
  return <section id={id} className={`m-section${dark ? ' m-dark' : ''}`}>{children}</section>
}

export function MobileCTA() {
  return <MobileSection dark><p className="m-label">Contatti</p><h2>Ogni soluzione<br />inizia<br /><em>dall’ascolto.</em></h2><p>Un confronto riservato per comprendere la tua esigenza e individuare il percorso più adatto.</p><div className="m-actions"><a className="m-button" href={whatsappHref}>Scrivi allo Studio <EditorialArrow /></a><a className="m-text-link" href={CONTACT.phoneHref}>Chiama Luigi <EditorialArrow /></a></div></MobileSection>
}

export function MobileFooter() {
  return <footer className="m-footer"><a href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="60" height="44" alt="LF Business" /></a><p className="m-label">Studio Legale · Business Advisory</p><address>{ADDRESS.street}<br />{ADDRESS.city}<br /><br />{NAPLES_ADDRESS.street} · {NAPLES_ADDRESS.city}</address><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phone}</a><div className="m-footer-social">{SOCIAL.map(s=><a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label} <EditorialArrow direction="external" /></a>)}</div><small>© LF Business · Studio Legale</small></footer>
}
