'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { EditorialArrow } from '@/components/icons/EditorialArrow'
import { CONTACT } from '@/lib/site'
import styles from './HomeExperience.module.css'

type Localized = { it: string; en: string }
type HomeArticle = { slug: string; title: Localized; category: Localized; date: string; coverImage: string }

const copy = {
  it: {
    label: 'Studio legale · Business advisory',
    promise: 'Competenza legale.', promiseAccent: 'Visione internazionale.',
    intro: 'Diritto amministrativo, societario e d’impresa. Al fianco di persone e imprese, in Italia e nel mondo.',
    discover: 'Scopri lo Studio', contact: 'Contattaci', locations: 'Sarno · Napoli', scroll: 'Lo Studio',
    studio: 'Un unico Studio.', studioAccent: 'Più prospettive.',
    studioBody: 'L’Avv. Luigi Ferrara e l’Avv. Nunzia Robustelli uniscono competenze complementari nel diritto amministrativo, societario e d’impresa, con una visione aperta ai mercati internazionali.',
    studioImage: 'La sala riunioni dello Studio LF Business', office: 'Uno spazio per il confronto', gallery: 'Dentro lo Studio',
    people: 'I professionisti', peopleTitle: 'La competenza,', peopleAccent: 'prima di tutto umana.',
    lawyer: 'Avvocato', luigi: 'Diritto amministrativo e consulenza strategica internazionale.', nunzia: 'Diritto societario, governance e tutela dell’impresa.',
    profile: 'Curriculum', practice: 'Attività professionale',
    expertise: 'Specializzazioni legali', expertiseTitle: 'Il diritto,', expertiseAccent: 'dalla tua parte.',
    expertiseIntro: 'Seleziona l’area di tuo interesse e scopri come possiamo assisterti.', more: 'Esplora l’area',
    businessLabel: 'Business & International', businessTitle: 'Le imprese crescono.', businessAccent: 'La visione va oltre.',
    businessBody: 'Contratti, relazioni istituzionali e assistenza legale per accompagnare le operazioni internazionali.',
    network: 'Network professionale', partner: 'LF Business nel network Partner 24 ORE.',
    insights: 'Dal nostro blog', insightsTitle: 'Conoscere oggi.', insightsAccent: 'Decidere meglio.', allArticles: 'Tutti gli articoli',
    contactLabel: 'Iniziamo da un confronto', contactTitle: 'La tua esigenza.', contactAccent: 'Il primo passo, insieme.',
    contactBody: 'Parla direttamente con l’Avv. Luigi Ferrara o scopri tutti i recapiti dello Studio.', whatsapp: 'Scrivi su WhatsApp', call: 'Chiama Avv. Luigi Ferrara', addresses: 'Sedi e contatti',
    whatsappMessage: 'Buongiorno Avv. Ferrara, vorrei richiedere informazioni.',
  },
  en: {
    label: 'Law firm · Business advisory',
    promise: 'Legal expertise.', promiseAccent: 'International vision.',
    intro: 'Administrative, corporate and business law. Supporting people and businesses, in Italy and worldwide.',
    discover: 'Explore the firm', contact: 'Contact us', locations: 'Sarno · Naples', scroll: 'The firm',
    studio: 'One firm.', studioAccent: 'More perspectives.',
    studioBody: 'Lawyers Luigi Ferrara and Nunzia Robustelli bring together complementary expertise in administrative, corporate and business law, with an international outlook.',
    studioImage: 'The LF Business meeting room', office: 'A space for dialogue', gallery: 'Inside the firm',
    people: 'Our professionals', peopleTitle: 'Expertise with', peopleAccent: 'a human perspective.',
    lawyer: 'Lawyer', luigi: 'Administrative law and international strategic advisory.', nunzia: 'Corporate law, governance and business protection.',
    profile: 'Curriculum', practice: 'Professional practice',
    expertise: 'Legal specializations', expertiseTitle: 'Legal expertise,', expertiseAccent: 'on your side.',
    expertiseIntro: 'Choose your area of interest to discover how we can assist you.', more: 'Explore this area',
    businessLabel: 'Business & International', businessTitle: 'Businesses grow.', businessAccent: 'Vision goes further.',
    businessBody: 'Contracts, institutional relations and legal assistance to support international business operations.',
    network: 'Professional network', partner: 'LF Business in the Partner 24 ORE network.',
    insights: 'From our blog', insightsTitle: 'Understand today.', insightsAccent: 'Decide better.', allArticles: 'All articles',
    contactLabel: 'Start a conversation', contactTitle: 'Your next step.', contactAccent: 'Let’s take it together.',
    contactBody: 'Contact lawyer Luigi Ferrara directly or find all the firm’s contact details.', whatsapp: 'Message on WhatsApp', call: 'Call lawyer Luigi Ferrara', addresses: 'Offices and contacts',
    whatsappMessage: 'Hello Mr Ferrara, I would like to request some information.',
  },
}

const areas = [
  { slug: 'diritto-societario', title: { it: 'Diritto societario e d’impresa', en: 'Corporate and business law' }, description: { it: 'Consulenza continuativa alle aziende, governance, rapporti tra soci e contenzioso societario.', en: 'Ongoing business advice, governance, shareholder relations and corporate litigation.' } },
  { slug: 'edilizia-urbanistica', title: { it: 'Edilizia e urbanistica', en: 'Construction and urban planning' }, description: { it: 'Assistenza e difesa di privati, imprese, Comuni ed Enti pubblici.', en: 'Advice and representation for individuals, businesses, municipalities and public bodies.' } },
  { slug: 'appalti-pubblici', title: { it: 'Appalti pubblici', en: 'Public procurement' }, description: { it: 'Assistenza alle imprese e contenzioso nelle procedure di gara.', en: 'Business assistance and litigation in public tender procedures.' } },
  { slug: 'diritto-scolastico', title: { it: 'Diritto scolastico e tutela dei docenti', en: 'Education law and teachers’ rights' }, description: { it: 'Reclutamento, graduatorie, riconoscimento dei titoli e tutela cautelare.', en: 'Recruitment, rankings, recognition of qualifications and interim relief.' } },
]
const business = [
  { slug: 'internazionalizzazione', title: { it: 'Internazionalizzazione', en: 'International expansion' }, sub: { it: 'Imprese, progetti e partnership', en: 'Businesses, projects and partnerships' } },
  { slug: 'prodotti-petroliferi', title: { it: 'Oil & Gas', en: 'Oil & Gas' }, sub: { it: 'Operazioni e contratti internazionali', en: 'International operations and contracts' } },
  { slug: 'mercati-live', title: { it: 'Mercati petroliferi', en: 'Oil markets' }, sub: { it: 'Quotazioni e strumenti di consultazione', en: 'Market prices and reference tools' } },
]

export function HomeExperience({ articles }: { articles: HomeArticle[] }) {
  const { language } = useLanguage()
  const t = copy[language]
  const root = useRef<HTMLDivElement>(null)
  const localHref = (href: string) => language === 'en' ? `${href}?lang=en` : href
  const whatsapp = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`

  useEffect(() => {
    // Progressive enhancement: visible without JavaScript or with reduced motion.
    if (!root.current || !window.matchMedia('(max-width: 767px) and (prefers-reduced-motion: no-preference)').matches || !('IntersectionObserver' in window)) return
    const elements = Array.from(root.current.querySelectorAll<HTMLElement>('[data-home-reveal]'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.setAttribute('data-visible', 'true')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' })
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.setAttribute('data-pending', 'true')
      observer.observe(element)
    })
    return () => { observer.disconnect(); elements.forEach(element => element.removeAttribute('data-pending')) }
  }, [])

  return <div ref={root} className={styles.root} data-no-translate data-mobile-home="editorial-2026">
    <section className={styles.hero} aria-labelledby="mobile-home-title">
      <img className={styles.heroImage} src="/images/sfodo sito.png" alt="" fetchPriority="high" />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{t.label}</p>
        <h1 id="mobile-home-title" className={styles.wordmark}>LF Business<span className={styles.brandRule} aria-hidden="true" /></h1>
        <h2 className={styles.promise}>{t.promise}<br /><em>{t.promiseAccent}</em></h2>
        <p className={styles.heroIntro}>{t.intro}</p>
        <nav className={styles.heroActions} aria-label={t.label}>
          <a className={styles.primaryAction} href="#mobile-studio">{t.discover}<EditorialArrow /></a>
          <a className={styles.secondaryAction} href={localHref('/contattaci/')}>{t.contact}<EditorialArrow /></a>
        </nav>
      </div>
      <div className={styles.heroFoot}><p>{t.locations}<span>Guiding Your Business Worldwide</span></p><a href="#mobile-studio" aria-label={t.scroll}><EditorialArrow direction="down" /></a></div>
    </section>

    <section id="mobile-studio" className={styles.section} aria-labelledby="home-studio-title">
      <div data-home-reveal><p className={styles.kicker}>01 / {t.scroll}</p><h2 id="home-studio-title" className={styles.heading}>{t.studio}<br /><em>{t.studioAccent}</em></h2><p className={styles.body}>{t.studioBody}</p></div>
      <figure className={styles.office} data-home-reveal><img src="/images/gallery/foto-17-sala-riunioni.jpeg" alt={t.studioImage} loading="lazy" width="1200" height="1600" /><figcaption><span>{t.office}</span><a href={localHref('/galleria/')}>{t.gallery}<EditorialArrow /></a></figcaption></figure>
      <div className={styles.partner} data-home-reveal><img src="/images/partner-24-ore.png" alt="Partner 24 ORE" loading="lazy" /><div><p className={styles.eyebrow}>{t.network}</p><p>{t.partner}</p></div></div>
    </section>

    <section id="professionisti" className={`${styles.section} ${styles.people}`} aria-labelledby="home-people-title">
      <header data-home-reveal><p className={styles.kicker}>02 / {t.people}</p><h2 id="home-people-title" className={styles.heading}>{t.peopleTitle}<br /><em>{t.peopleAccent}</em></h2></header>
      <article className={styles.person} data-home-reveal><img src="/images/luigi-ferrara-ritratto.png" loading="lazy" alt="Avv. Luigi Ferrara" width="480" height="600" /><div><p className={styles.eyebrow}>{t.lawyer}</p><h3>Luigi<br />Ferrara</h3><p className={styles.personDetail}>{t.luigi}</p><a className={styles.textLink} href={localHref('/curriculum/')}>{t.profile}<EditorialArrow /></a></div></article>
      <article className={styles.person} data-home-reveal><img src="/images/nunzia-robustelli-enhanced.webp" loading="lazy" alt="Avv. Nunzia Robustelli" width="480" height="600" /><div><p className={styles.eyebrow}>{t.lawyer}</p><h3>Nunzia<br />Robustelli</h3><p className={styles.personDetail}>{t.nunzia}</p><a className={styles.textLink} href={localHref('/specializzazioni-legali/diritto-societario/')}>{t.practice}<EditorialArrow /></a></div></article>
    </section>

    <section id="expertise" className={`${styles.section} ${styles.expertise}`} aria-labelledby="home-expertise-title">
      <header data-home-reveal><p className={styles.kicker}>03 / {t.expertise}</p><h2 id="home-expertise-title" className={styles.heading}>{t.expertiseTitle}<br /><em>{t.expertiseAccent}</em></h2><p className={styles.body}>{t.expertiseIntro}</p></header>
      <div className={styles.accordion}>{areas.map((area, index) => <details key={area.slug} name="home-legal-areas" data-home-reveal><summary><span className={styles.index}>0{index + 1}</span><h3>{area.title[language]}</h3><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 9h14M9 2v14" fill="none" stroke="currentColor" /></svg></summary><div className={styles.answer}><p>{area.description[language]}</p><a className={styles.textLink} href={localHref(`/specializzazioni-legali/${area.slug}/`)}>{t.more}<EditorialArrow /></a></div></details>)}</div>
    </section>

    <section id="business" className={styles.business} aria-labelledby="home-business-title">
      <div className={styles.businessCover}><img src="/images/business-hero.png" alt="" loading="lazy" /><header data-home-reveal><p className={styles.kicker}>04 / {t.businessLabel}</p><h2 id="home-business-title" className={styles.heading}>{t.businessTitle}<br /><em>{t.businessAccent}</em></h2></header></div>
      <div className={styles.businessBody}><p className={styles.body}>{t.businessBody}</p><nav aria-label={t.businessLabel}>{business.map(area => <a key={area.slug} href={localHref(`/sezione-business/${area.slug}/`)} data-home-reveal><span><strong>{area.title[language]}</strong><small>{area.sub[language]}</small></span><EditorialArrow direction="external" /></a>)}</nav></div>
    </section>

    <section id="insights" className={`${styles.section} ${styles.insights}`} aria-labelledby="home-insights-title">
      <header data-home-reveal><p className={styles.kicker}>05 / {t.insights}</p><h2 id="home-insights-title" className={styles.heading}>{t.insightsTitle}<br /><em>{t.insightsAccent}</em></h2></header>
      <div className={styles.articles}>{articles.map(article => <article key={article.slug} data-home-reveal><a href={localHref(`/blog/${article.slug}/`)}><div><p className={styles.articleCategory}>{article.category[language]}</p><h3>{article.title[language]}</h3><time dateTime={article.date}>{new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.date))}</time></div><img src={article.coverImage} loading="lazy" alt="" width="180" height="220" /></a></article>)}</div>
      <a className={styles.wideLink} href={localHref('/blog/')}>{t.allArticles}<EditorialArrow /></a>
    </section>

    <section className={`${styles.section} ${styles.contact}`} aria-labelledby="home-contact-title"><div data-home-reveal><p className={styles.kicker}>{t.contactLabel}</p><h2 id="home-contact-title" className={styles.heading}>{t.contactTitle}<br /><em>{t.contactAccent}</em></h2><p className={styles.body}>{t.contactBody}</p><a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsapp}<EditorialArrow direction="external" /></a><a className={styles.wideLink} href={CONTACT.phoneHref}>{t.call}<EditorialArrow /></a><a className={styles.contactLink} href={localHref('/contattaci/')}>{t.addresses}</a></div></section>
  </div>
}

