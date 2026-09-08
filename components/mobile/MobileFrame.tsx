import type { ReactNode } from 'react'
import { MobileHeader } from './MobileHeader'
import { CONTACT, ADDRESS, NAPLES_ADDRESS, SOCIAL, whatsappHref } from '@/lib/site'
import { EditorialArrow } from '@/components/icons/EditorialArrow'

export function ResponsivePage({ children, mobile }: { children: ReactNode; mobile: ReactNode }) {
  return <><div className="lf-desktop">{children}</div><div className="lf-mobile"><MobileHeader /><main id="mobile-content">{mobile}</main><MobileFooter /></div></>
}

export function MobileSection({ children, dark = false, id, className = '' }: { children: ReactNode; dark?: boolean; id?: string; className?: string }) {
  return <section id={id} className={`m-section${dark ? ' m-dark' : ''}${className ? ` ${className}` : ''}`}>{children}</section>
}

export function MobileCTA() {
  return <MobileSection dark id="contact" className="m-contact-final"><p className="m-kicker"><span>07</span> Contact</p><h2>Parliamo<br /><em>del prossimo passo.</em></h2><p>Un confronto riservato per comprendere la tua esigenza e individuare il percorso più adatto.</p><div className="m-actions"><a className="m-editorial-link" href={whatsappHref}>Scrivi allo Studio <EditorialArrow /></a><a className="m-editorial-link" href={CONTACT.phoneHref}>Chiama l’Avv. Luigi Ferrara <EditorialArrow /></a></div></MobileSection>
}

export function MobileFooter() {
  return <footer className="m-footer"><a href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="60" height="44" alt="LF Business" /></a><p className="m-label">Studio Legale / Business Advisory</p><address>{ADDRESS.street}<br />{ADDRESS.city}<br /><br />{NAPLES_ADDRESS.street} / {NAPLES_ADDRESS.city}</address><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phone}</a><div className="m-footer-social">{SOCIAL.map(s=><a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label} <EditorialArrow direction="external" /></a>)}</div><small>© LF Business / Studio Legale</small></footer>
}
