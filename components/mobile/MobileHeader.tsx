'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/site'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const links = [['Home','/'],['Lo Studio','/#mobile-studio'],['Specializzazioni','/specializzazioni-legali/'],['Business','/sezione-business/'],['Blog','/blog/'],['Galleria','/galleria/'],['Curriculum','/curriculum/'],['Contatti','/contattaci/']] as const

export function MobileHeader() {
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>32);scroll();window.addEventListener('scroll',scroll,{passive:true});return ()=>window.removeEventListener('scroll',scroll)},[])
  useEffect(()=>{if(!open)return;const y=window.scrollY;const previous=document.body.style.cssText;document.body.style.position='fixed';document.body.style.top=`-${y}px`;document.body.style.width='100%';dialog.current?.showModal();const resize=()=>{if(window.innerWidth>=768)setOpen(false)};window.addEventListener('resize',resize);return ()=>{dialog.current?.close();document.body.style.cssText=previous;window.scrollTo(0,y);toggle.current?.focus();window.removeEventListener('resize',resize)}},[open])
  return <><header className={`m-header${scrolled?' m-header-scrolled':''}`}><a href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="56" height="40" alt="LF" /></a><button ref={toggle} onClick={()=>setOpen(true)} aria-label="Apri menu" aria-expanded={open} aria-controls="lf-mobile-navigation"><span /><span /></button></header><dialog ref={dialog} id="lf-mobile-navigation" className="m-menu" onCancel={()=>setOpen(false)}><div className="m-menu-top"><img src="/images/logo-lf-clean.png" width="56" height="40" alt="LF Business" /><button onClick={()=>setOpen(false)} aria-label="Chiudi menu">×</button></div><nav aria-label="Navigazione smartphone"><ol>{links.map(([label,href],i)=><li key={href} style={{animationDelay:`${i*35}ms`}}><a href={href} onClick={()=>setOpen(false)} aria-current={pathname.replace(/\/$/,'')===href.replace(/\/$/,'')?'page':undefined}><span>{String(i+1).padStart(2,'0')}</span>{label}<b aria-hidden>↗</b></a></li>)}</ol></nav><div className="m-menu-bottom"><LanguageSwitcher light /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></div></dialog></>
}
