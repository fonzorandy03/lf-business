import { ResponsivePage } from '@/components/mobile/MobileFrame'
import { MobileDirectory } from '@/components/mobile/MobilePages'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroScrollCue } from '@/components/HeroScrollCue'
import { Reveal } from '@/components/Reveal'
import { LEGAL_AREAS } from '@/lib/legal'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Specializzazioni legali | LF Business',
  description: 'Diritto societario, edilizia e urbanistica, appalti pubblici e tutela dei docenti.',
  alternates: { canonical: absoluteUrl('/specializzazioni-legali') },
}

const pillars = [
  ['01', 'Analisi', 'Inquadriamo fatti, documenti, interessi e rischi prima di definire la strategia.'],
  ['02', 'Strategia', 'Costruiamo un percorso chiaro, proporzionato e aderente agli obiettivi del cliente.'],
  ['03', 'Tutela', 'Presidiamo la fase amministrativa, negoziale e giudiziale con continuità.'],
] as const

export default function SpecializzazioniLegaliPage() {
  return <ResponsivePage mobile={<MobileDirectory />}><Header /><main>
    <section className="site-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><Image src="/images/blog/diritto-amministrativo.png" alt="Palazzo istituzionale, simbolo delle specializzazioni legali" fill priority sizes="100vw" className="hero-cinematic-image object-cover" /><div className="hero-cinematic-overlay absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" /><div className="hero-light-sweep absolute inset-0" /></div>
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-[1fr_22rem] lg:items-end lg:pb-28"><div className="max-w-4xl"><div className="hero-reveal hero-delay-1 flex items-center gap-3"><span className="h-px w-10 bg-gold" /><span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold-soft">Legal expertise</span></div><h1 className="hero-reveal hero-delay-2 mt-6 font-serif text-5xl leading-[.95] text-ivory sm:text-7xl lg:text-8xl">Conoscere il diritto.<br /><em className="font-normal text-gold-soft">Proteggere ciò che conta.</em></h1><p className="hero-reveal hero-delay-4 mt-8 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">Competenze specialistiche per imprese, professionisti, cittadini e Pubbliche Amministrazioni, dalla consulenza preventiva alla difesa in giudizio.</p></div>
      <div className="hero-reveal hero-delay-5"><div className="business-capabilities border border-white/15 bg-ink/45 p-6 backdrop-blur-md"><p className="mb-6 text-[0.62rem] uppercase tracking-[0.25em] text-gold-soft">Un metodo coordinato</p><ul className="divide-y divide-white/10">{pillars.map(([n,t]) => <li key={n} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0"><span className="font-serif text-xl text-gold">{n}</span><span className="text-sm tracking-wide text-ivory/75">{t}</span><span className="ml-auto text-gold/50">→</span></li>)}</ul></div></div></div><HeroScrollCue targetId="legal-intro" />
    </section>

    <section id="legal-intro" className="business-intro relative overflow-hidden bg-secondary"><div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-36"><div className="grid gap-12 lg:grid-cols-12 lg:gap-16"><Reveal className="lg:col-span-5"><span className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold"><span className="h-px w-8 bg-gold" />Il nostro approccio</span><p className="font-serif text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">Ogni questione viene letta nella sua interezza, senza risposte standard.</p></Reveal><div className="lg:col-span-6 lg:col-start-7"><ul className="grid gap-4">{pillars.map(([n,t,d],i) => <Reveal as="li" key={n} delay={i*90} className="business-pillar group relative flex gap-6 overflow-hidden border border-ink/10 bg-background/60 p-6 sm:p-7"><span className="font-serif text-xl text-gold">{n}</span><div><h2 className="font-serif text-xl text-ink">{t}</h2><p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{d}</p></div></Reveal>)}</ul></div></div></div></section>

    <section id="aree-legali" className="legal-showcase relative scroll-mt-24 overflow-hidden bg-ink text-ivory">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="legal-showcase-glow pointer-events-none absolute -right-48 top-28 h-[34rem] w-[34rem] rounded-full" />
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:py-36">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="max-w-4xl lg:col-span-8">
            <span className="mb-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-gold"><span className="h-px w-8 bg-gold" />Aree di attività</span>
            <h2 className="font-serif text-4xl leading-[1.02] text-ivory sm:text-5xl lg:text-7xl">Quattro competenze.<br /><em className="font-normal text-gold-soft">Un’unica visione.</em></h2>
          </div>
          <div className="border-l border-gold/45 pl-6 lg:col-span-4 lg:mb-2">
            <p className="max-w-md text-base leading-relaxed text-ivory/60">Ogni area unisce consulenza preventiva e tutela giudiziale. Scegli la specializzazione per conoscere nel dettaglio attività ed esperienza dello Studio.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12 lg:gap-7">
          {LEGAL_AREAS.map((area, index) => (
            <Reveal key={area.slug} delay={index * 100} className={index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'}>
              <Link href={area.href} className={`legal-showcase-card group relative isolate flex overflow-hidden border border-ivory/15 bg-ink ${index === 0 || index === 3 ? 'min-h-[35rem] lg:min-h-[41rem]' : 'min-h-[30rem] lg:min-h-[35rem]'}`}>
                <Image src={area.image} alt={area.imageAlt} fill sizes="(max-width: 768px) 100vw, 58vw" className="legal-showcase-image object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5 transition-colors duration-700 group-hover:via-ink/25" />
                <div className="legal-showcase-shine pointer-events-none absolute inset-0" />
                <span className="absolute right-6 top-6 h-12 w-12 border-r border-t border-gold/55 transition-all duration-500 group-hover:h-16 group-hover:w-16" />
                <span className="absolute left-7 top-7 font-serif text-6xl text-ivory/25 transition-colors duration-500 group-hover:text-gold/70 sm:left-9 sm:top-9">{area.number}</span>
                <div className="relative z-10 mt-auto w-full p-7 sm:p-9 lg:p-11">
                  <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="text-[0.64rem] font-medium uppercase tracking-[0.27em] text-gold-soft">{area.category}</span></div>
                  <div className="flex items-end justify-between gap-6">
                    <div><h3 className="max-w-2xl font-serif text-3xl leading-[1.05] text-ivory sm:text-4xl">{area.title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-ivory/65">{area.description}</p></div>
                    <span className="legal-showcase-arrow hidden h-14 w-14 shrink-0 items-center justify-center border border-ivory/25 text-gold sm:flex"><ArrowUpRight className="h-5 w-5" /></span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-3 border-b border-ivory/25 pb-2 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-ivory/80 transition-colors group-hover:border-gold group-hover:text-gold">Entra nell’area <ArrowUpRight className="h-3.5 w-3.5 sm:hidden" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </main><Footer /></ResponsivePage>
}
