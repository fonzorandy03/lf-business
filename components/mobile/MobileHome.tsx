import { MobileSection, MobileCTA } from './MobileFrame'
import { MobileInsights } from './MobileInsights'
import { getAllArticles, toMeta } from '@/lib/blog'
import { Reveal } from '@/components/Reveal'
import { EditorialArrow } from '@/components/icons/EditorialArrow'

const expertise = [
  ['Diritto amministrativo', 'Tutela nei rapporti con la Pubblica Amministrazione e nel contenzioso dinanzi al TAR e al Consiglio di Stato.', '/specializzazioni-legali/edilizia-urbanistica/'],
  ['Appalti pubblici', 'Assistenza alle imprese nelle procedure di gara e nel relativo contenzioso amministrativo.', '/specializzazioni-legali/appalti-pubblici/'],
  ['Diritto societario', 'Consulenza continuativa, governance, rapporti tra soci e tutela dell’impresa.', '/specializzazioni-legali/diritto-societario/'],
  ['Diritto scolastico', 'Reclutamento, graduatorie, riconoscimento dei titoli e tutela dei docenti.', '/specializzazioni-legali/diritto-scolastico/'],
  ['Internazionalizzazione', 'Contratti, partnership e sviluppo di progetti tra Italia e mercati internazionali.', '/sezione-business/internazionalizzazione/'],
  ['Business Advisory', 'Visione legale e strategica per operazioni commerciali e progetti complessi.', '/sezione-business/'],
] as const

export function MobileHome() {
  return <>
    <section className="mh-cover" aria-labelledby="mh-title">
      <img className="mh-cover-image" src="/images/sfodo sito.png" alt="Veduta serale di Sarno e del Vesuvio" />
      <div className="mh-cover-overlay" /><div className="mh-cover-grid" aria-hidden="true" />
      <div className="mh-cover-copy">
        <p className="m-label mh-intro-label">Legal Counsel / Business Advisory</p>
        <h1 id="mh-title" className="mh-wordmark"><span>LF</span><span>Business</span></h1>
        <p className="mh-positioning">Competenza legale.<br />Visione strategica.<br />Prospettiva internazionale.</p>
        <p className="mh-signature">Guiding Your Business Worldwide</p>
        <nav className="mh-cover-actions" aria-label="Azioni principali"><a href="#mobile-studio"><span>Scopri lo Studio</span><small>01</small><EditorialArrow /></a><a href="/contattaci/"><span>Contattaci</span><small>02</small><EditorialArrow /></a></nav>
      </div>
    </section>
    <MobileSection id="mobile-studio" className="mh-studio">
      <Reveal><p className="m-kicker"><span>01</span> Studio</p><h2>Esperienza giuridica.<br /><em>Visione strategica.</em></h2><p className="m-lead">Due competenze complementari, un unico metodo: comprendere il contesto, costruire la strategia, tutelare il risultato.</p></Reveal>
      <Reveal className="mh-studio-visual"><img src="/images/gallery/foto-17-sala-riunioni.jpeg" loading="lazy" alt="Sala riunioni dello Studio LF Business" /><span aria-hidden="true">LF / 01</span></Reveal>
      <a className="m-editorial-link" href="#professionisti">Conosci i professionisti <EditorialArrow /></a>
    </MobileSection>
    <section id="professionisti" className="mh-people m-dark"><header><p className="m-kicker"><span>02</span> Professionisti</p><h2>Le persone.<br /><em>La competenza.</em></h2></header><Professional name="Luigi Ferrara" role="Avvocato" detail="Patrocinante presso le Magistrature Superiori" image="/images/luigi-ferrara-ritratto.png" href="/curriculum/" /><Professional name="Nunzia Robustelli" role="Avvocato" detail="Diritto societario e d’impresa" image="/images/nunzia-robustelli-enhanced.webp" href="/specializzazioni-legali/diritto-societario/" /></section>
    <MobileSection dark id="expertise" className="mh-expertise"><p className="m-kicker"><span>03</span> Expertise</p><h2>Aree di attività</h2><div className="mh-expertise-list">{expertise.map(([title, description, href], i) => <Reveal key={title} delay={i * 35}><details><summary><span>{String(i + 1).padStart(2, '0')}</span><strong>{title}</strong><b aria-hidden="true">+</b></summary><div><p>{description}</p><a href={href}>Approfondisci <EditorialArrow /></a></div></details></Reveal>)}</div></MobileSection>
    <section id="business" className="mh-business"><img src="/images/business-hero.png" loading="lazy" alt="Porto commerciale internazionale" /><div className="mh-business-overlay" /><Reveal className="mh-business-copy"><p className="m-kicker"><span>04</span> Business / International</p><h2>Legal thinking.<br /><em>Business perspective.</em></h2><p>Assistenza giuridica e visione strategica per operazioni internazionali, accesso ai mercati e progetti nel settore energetico.</p><ul><li>International Contracts</li><li>Market Entry</li><li>Strategic Relations</li><li>Energy</li><li>International Projects</li></ul><a className="m-editorial-link" href="/sezione-business/">Esplora l’area Business <EditorialArrow /></a></Reveal></section>
    <MobileSection className="mh-authority"><p className="m-kicker"><span>05</span> Credibilità</p><h2>Autorevolezza,<br /><em>senza sovrastrutture.</em></h2><div className="mh-authority-list"><p>Magistrature Superiori</p><p>Partner 24 ORE</p><p>Italia / Mercati internazionali</p><p>Diritto / Business</p></div></MobileSection>
    <MobileSection id="insights" className="mh-insights"><p className="m-kicker"><span>06</span> Insights</p><h2>Ultimi<br /><em>approfondimenti.</em></h2><MobileInsights articles={getAllArticles().slice(0, 3).map(toMeta)} /><a className="m-editorial-link" href="/blog/">Tutti gli articoli <EditorialArrow /></a></MobileSection>
    <MobileCTA />
  </>
}

function Professional({ name, role, detail, image, href }: { name: string; role: string; detail: string; image: string; href: string }) {
  return <Reveal as="article" className="mh-person"><a href={href}><figure><img src={image} loading="lazy" alt={`Avv. ${name}`} /></figure><div><p className="m-label">{role}</p><h3>{name}</h3><p>{detail}</p><span className="m-editorial-link">Profilo <EditorialArrow /></span></div></a></Reveal>
}
