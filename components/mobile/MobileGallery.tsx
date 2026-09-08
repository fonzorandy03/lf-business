'use client'
import { useState } from 'react'
import { allGalleryImages, galleryFilters } from '@/lib/gallery'
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox'

export function MobileGallery(){
  const [filter,setFilter]=useState('all')
  const [index,setIndex]=useState<number|null>(null)
  const images=allGalleryImages.filter(i=>filter==='all'||i.category===filter)
  return <><label className="m-label" htmlFor="mobile-gallery-category">La collezione</label><select id="mobile-gallery-category" className="m-select" value={filter} onChange={e=>{setFilter(e.target.value);setIndex(null)}}>{galleryFilters.map(f=><option key={f.id} value={f.id}>{f.label}</option>)}</select><div className="m-gallery">{images.map((i,n)=><figure key={i.src}><button onClick={()=>setIndex(n)} aria-label={`Apri: ${i.title}`}><img src={i.src} loading="lazy" alt={i.alt} style={{aspectRatio:i.orientation==='portrait'?'3 / 4':'4 / 3',objectPosition:'50% 40%'}} /></button><figcaption>{i.title}<span>{i.location}</span></figcaption></figure>)}</div>{index!==null&&<GalleryLightbox images={images} index={index} onClose={()=>setIndex(null)} onNavigate={setIndex}/>}</>
}
