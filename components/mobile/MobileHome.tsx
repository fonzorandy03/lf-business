import { MobileHero } from './MobileHero'
import { MobileSection, MobileCTA } from './MobileFrame'
import { MobileInsights } from './MobileInsights'
import { LEGAL_AREAS } from '@/lib/legal'
import { BUSINESS_AREAS } from '@/lib/business'
import { getAllArticles, toMeta } from '@/lib/blog'
import { Reveal } from '@/components/Reveal'

export function MobileHome() {
  return <><MobileHero home image="/images/sfodo sito.png" position="67% 50%" label="Studio Legale · Business Advisory" title="LF Business"><p className="m-motto">“Guiding Your Business Worldwide”</p><p>Diritto amministrativo, societario e d’impresa. Consulenza strategica tra Italia e mercati internazionali.</p><a className="m-button" href="#mobile-studio">Scopri lo Studio <span aria-hidden>→</span></a><a className="m-text-link" href="/contattaci/">Contattaci <span aria-hidden>↗</span></a></MobileHero>
  <MobileSection id="mobile-studio"><Reveal><p className="m-label">01 — Lo Studio</p><h2>Competenza legale.<br /><em>Visione internazionale.</em></h2><p>Luigi Ferrara e Nunzia Robustelli: competenze complementari per tutelare persone, imprese e progetti internazionali.</p><details className="m-disclosure"><summary>Scopri di più <span aria-hidden>+</span></summary><p>LF Business integra competenze altamente specialistiche nel diritto amministrativo, societario e d’impresa, offrendo assistenza legale e consulenza strategica alle imprese, con particolare attenzione ai processi di internazionalizzazione e allo sviluppo delle attività economiche sia in ambito nazionale sia internazionale.</p></details></Reveal></MobileSection>
  <MobileSection dark><p className="m-label">I professionisti</p><h2>Le persone<br /><em>dietro lo Studio.</em></h2><MobileProfessionalCard name="Avv. Luigi Ferrara" role="Fondatore · Diritto amministrativo" image="/images/luigi-ferrara-ritratto.png" position="50% 30%" href="/curriculum/" description="Patrocinio presso le Magistrature Superiori e consulenza strategica alle imprese." /><MobileProfessionalCard name="Avv. Nunzia Robustelli" role="Diritto societario e d’impresa" image="/images/nunzia-robustelli-enhanced.webp" position="50% 30%" href="/specializzazioni-legali/diritto-societario/" description="Consulenza alle aziende, governance e tutela degli interessi dell’impresa." /></MobileSection>
  <MobileSection><p className="m-label">02 — Expertise</p><h2>Dove esperienza<br />e strategia<br /><em>si incontrano.</em></h2><div className="m-area-list">{[...LEGAL_AREAS,...BUSINESS_AREAS.slice(0,1)].map((area,i)=><Reveal key={area.href} delay={i*35}><a href={area.href}><span>{String(i+1).padStart(2,'0')}</span><h3>{area.title}</h3><b aria-hidden>↗</b></a></Reveal>)}</div></MobileSection>
  <section className="m-business-feature"><img src="/images/business-hero.png" loading="lazy" alt="Porto commerciale internazionale" /><div><p className="m-label">Business without borders</p><h2>Oltre il diritto.<br /><em>Dentro il business.</em></h2><p>Strategia legale, accesso ai mercati e operazioni internazionali.</p><a className="m-text-link" href="/sezione-business/">Scopri Business <span aria-hidden>→</span></a></div></section>
  <MobileSection dark><p className="m-label">Il metodo</p><div className="m-area-list">{['Analisi','Strategia','Tutela'].map((t,i)=><div className="m-method" key={t}><span>0{i+1}</span><h3>{t}</h3></div>)}</div></MobileSection>
  <MobileSection><p className="m-label">Insights</p><h2>Conoscere oggi.<br /><em>Decidere meglio.</em></h2><MobileInsights articles={getAllArticles().slice(0,3).map(toMeta)} /><a className="m-text-link" href="/blog/">Tutti gli articoli <span aria-hidden>→</span></a></MobileSection><MobileCTA /></>
}

export function MobileProfessionalCard({name,role,image,position,href,description}:{name:string;role:string;image:string;position:string;href:string;description:string}) {
  return <Reveal><article className="m-professional"><a href={href}><img src={image} loading="lazy" alt={name} style={{objectPosition:position}} /><p className="m-label">{role}</p><h3>{name} <span aria-hidden>↗</span></h3><p>{description}</p></a></article></Reveal>
}
