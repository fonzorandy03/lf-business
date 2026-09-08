'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT } from '@/lib/site'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { EditorialArrow } from '@/components/icons/EditorialArrow'

const links = [['Studio','/#mobile-studio'],['Professionisti','/#professionisti'],['Expertise','/#expertise'],['Business','/#business'],['Insights','/#insights'],['Galleria','/galleria/'],['Curriculum','/curriculum/'],['Contatti','/contattaci/']] as const

export function MobileHeader() {
  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>40);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[])
  useEffect(()=>{if(!open)return;const y=window.scrollY;const previous=document.body.style.cssText;document.body.style.position='fixed';document.body.style.top=`-${y}px`;document.body.style.width='100%';dialog.current?.showModal();const resize=()=>{if(window.innerWidth>=768)setOpen(false)};window.addEventListener('resize',resize);return()=>{dialog.current?.close();document.body.style.cssText=previous;window.scrollTo(0,y);toggle.current?.focus();window.removeEventListener('resize',resize)}},[open])
  return <><header className={`m-header${scrolled?' m-header-scrolled':''}`}><a className="m-brand" href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="58" height="42" alt="LF" /></a><button className="m-menu-toggle" ref={toggle} onClick={()=>setOpen(true)} aria-label="Apri menu" aria-expanded={open} aria-controls="lf-mobile-navigation"><span /><span /><span /></button></header><dialog ref={dialog} id="lf-mobile-navigation" className="m-menu" onCancel={()=>setOpen(false)}><div className="m-menu-top"><a href="/" aria-label="LF Business, home"><img src="/images/logo-lf-clean.png" width="58" height="42" alt="LF Business" /></a><button className="m-menu-close" onClick={()=>setOpen(false)} aria-label="Chiudi menu"><span /><span /></button></div><p className="m-menu-label">Index / Navigation</p><nav aria-label="Navigazione smartphone"><ol>{links.map(([label,href],i)=><li key={href} style={{animationDelay:`${90+i*45}ms`}}><a href={href} onClick={()=>setOpen(false)} aria-current={pathname.replace(/\/$/,'')===href.replace(/\/$/,'')?'page':undefined}><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong><EditorialArrow direction="external" /></a></li>)}</ol></nav><div className="m-menu-bottom"><LanguageSwitcher light /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></div></dialog></>
}
