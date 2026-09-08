import type { ReactNode } from 'react'

export function MobileHero({ title, label, image, position='50% 40%', children, home=false }: {title:ReactNode;label:string;image:string;position?:string;children?:ReactNode;home?:boolean}) {
  return <section className={`m-hero${home?' m-hero-home':''}`}><img className="m-hero-image" src={image} alt="" style={{objectPosition:position}} /><div className="m-hero-shade" /><div className="m-hero-copy"><p className="m-label">{label}</p><h1>{title}</h1>{children}</div></section>
}
