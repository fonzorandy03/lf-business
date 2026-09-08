'use client'
import { useState } from 'react'
import type { ArticleMeta } from '@/lib/blog-types'
import { EditorialArrow } from '@/components/icons/EditorialArrow'

export function MobileInsights({articles, searchable=false}:{articles:ArticleMeta[];searchable?:boolean}) {
  const [query,setQuery]=useState('')
  const [category,setCategory]=useState('')
  const visible=articles.filter(a=>(!category||a.category===category)&&`${a.title} ${a.author} ${a.category}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  return <>{searchable&&<div className="m-search"><label htmlFor="mobile-article-query">Cerca nell’archivio</label><input id="mobile-article-query" type="search" placeholder="Titolo, autore o argomento" value={query} onChange={e=>setQuery(e.target.value)} /><label htmlFor="mobile-category">Argomento</label><select id="mobile-category" value={category} onChange={e=>setCategory(e.target.value)}><option value="">Tutti gli argomenti</option>{[...new Set(articles.map(a=>a.category))].map(c=><option key={c}>{c}</option>)}</select><p aria-live="polite">{visible.length} articoli</p></div>}<div className="m-insights">{visible.map(a=><article key={a.slug}><a href={`/blog/${a.slug}/`}><img loading="lazy" src={a.coverImage} alt="" /><p className="m-label">{a.category}</p><h3>{a.title}</h3><time dateTime={a.date}>{a.dateLabel}</time><span className="m-read-link">Leggi <EditorialArrow /></span></a></article>)}</div>{!visible.length&&<p>Nessun articolo trovato. Prova un altro argomento.</p>}</>
}
