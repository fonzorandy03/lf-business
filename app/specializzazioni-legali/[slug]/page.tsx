import { ResponsivePage } from '@/components/mobile/MobileFrame'
import { MobileLegalDetail } from '@/components/mobile/MobilePages'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroScrollCue } from '@/components/HeroScrollCue'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import { LEGAL_AREAS, getLegalArea } from '@/lib/legal'

export function generateStaticParams() { return LEGAL_AREAS.map((area) => ({ slug: area.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const area = getLegalArea((await params).slug)
  if (!area) return { title: 'Specializzazioni legali | LF Business' }
  return { title: `${area.title} | LF Business`, description: area.description, openGraph: { title: area.title, description: area.description, images: [area.image] } }
}

export default async function LegalAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const area = getLegalArea((await params).slug)
  if (!area) notFound()
  const index = LEGAL_AREAS.findIndex((item) => item.slug === area.slug)
  const next = LEGAL_AREAS[(index + 1) % LEGAL_AREAS.length]

  return <ResponsivePage mobile={<MobileLegalDetail area={area} />}><Header /><main>
    <section className="site-hero area-detail-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><Image src={area.image} alt={area.imageAlt} fill priority sizes="100vw" className="area-detail-image object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" /><div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" /><div className="area-detail-sweep absolute inset-0" /></div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-6 pb-24 pt-32 sm:px-10 lg:-translate-y-6 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><Link href="/specializzazioni-legali" className="hero-reveal hero-delay-1 group inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-gold"><span className="transition-transform group-hover:-translate-x-1">←</span> Specializzazioni legali</Link><div className="hero-reveal hero-delay-2 mt-6 flex items-center gap-3"><span className="font-serif text-lg text-gold">{area.number}</span><span className="h-px w-6 bg-gold/50" /><span className="text-[0.65rem] uppercase tracking-[0.26em] text-gold-soft">{area.category}</span></div><h1 className="hero-reveal hero-delay-3 mt-5 max-w-5xl font-serif text-[2.7rem] leading-[.98] text-ivory sm:text-6xl lg:text-7xl">{area.title}</h1><p className="hero-reveal hero-delay-4 mt-7 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">{area.description}</p></div><div className="hero-reveal hero-delay-5 hidden border-l border-gold/45 pl-7 lg:col-span-4 lg:block"><p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold-soft">Professionista di riferimento</p><p className="mt-4 font-serif text-2xl text-ivory">{area.professional}</p><p className="mt-3 text-sm leading-6 text-ivory/55">Analisi preventiva, assistenza procedimentale e tutela giudiziale.</p></div></div><HeroScrollCue targetId="contenuti-area" />
    </section>

    <section id="contenuti-area" className="legal-detail-body relative scroll-mt-20 overflow-hidden bg-[#f2eee7]">
      <div className="pointer-events-none absolute -right-44 top-24 font-serif text-[28rem] leading-none text-ink/[.025]">{area.number}</div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-36">
        <Reveal className="grid gap-10 border-b border-ink/15 pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><span className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.3em] text-gold"><span className="h-px w-9 bg-gold" />La specializzazione</span><h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.06] text-ink sm:text-5xl lg:text-6xl">Esperienza specialistica.<br /><em className="font-normal text-gold">Tutela costruita sul caso concreto.</em></h2></div>
          <div className="lg:col-span-4"><span className="font-serif text-6xl text-gold">{String(area.sections.length).padStart(2,'0')}</span><p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-stone">Ambiti di assistenza</p></div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <Reveal className="legal-detail-index bg-ink p-7 text-ivory sm:p-9 lg:sticky lg:top-28">
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold-soft">Indice dell’area</span>
              <nav className="mt-7"><ol className="divide-y divide-ivory/10">{area.sections.map((section,i) => <li key={section.title}><a href={`#capitolo-${i+1}`} className="group flex items-start gap-4 py-4 text-sm leading-5 text-ivory/58 transition-colors hover:text-ivory"><span className="font-serif text-gold/65 transition-colors group-hover:text-gold">{String(i+1).padStart(2,'0')}</span><span>{section.title}</span></a></li>)}</ol></nav>
              <div className="mt-9 border-t border-gold/30 pt-7"><p className="text-[0.6rem] uppercase tracking-[0.24em] text-gold-soft">Professionista di riferimento</p><p className="mt-3 font-serif text-xl text-ivory">{area.professional}</p></div>
            </Reveal>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            {area.sections.map((section,i) => <Reveal key={section.title} delay={Math.min(i,3)*70}>
              <article id={`capitolo-${i+1}`} className="legal-detail-card group relative scroll-mt-32 overflow-hidden border border-ink/10 bg-[#fbf9f5] p-7 sm:p-10 lg:p-12">
                <span className="absolute right-6 top-2 font-serif text-[6rem] leading-none text-ink/[.035] transition-colors duration-500 group-hover:text-gold/[.08] sm:text-[8rem]">{String(i+1).padStart(2,'0')}</span>
                <div className="relative"><div className="flex items-center gap-4"><span className="font-serif text-xl text-gold">{String(i+1).padStart(2,'0')}</span><span className="h-px w-10 bg-gold/55 transition-all duration-500 group-hover:w-16" /></div><h3 className="mt-6 max-w-2xl font-serif text-2xl leading-tight text-ink sm:text-3xl lg:text-[2.15rem]">{section.title}</h3><div className="mt-7 max-w-3xl">{section.paragraphs.map((paragraph,j) => <p key={j} className="mt-5 text-base leading-[1.9] text-stone first:mt-0 lg:text-[1.04rem]">{paragraph}</p>)}</div></div>
              </article>
            </Reveal>)}
          </div>
        </div>
      </div>
    </section>

    <section className="legal-detail-cta relative overflow-hidden bg-ink px-6 py-24 text-ivory sm:px-10 lg:py-32"><div className="legal-detail-cta-glow pointer-events-none absolute -right-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full" /><div className="absolute right-12 top-5 font-serif text-[14rem] leading-none text-ivory/[.025]">LF</div><Reveal className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><span className="text-[0.66rem] uppercase tracking-[0.28em] text-gold-soft">Valutazione preliminare</span><h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Una strategia chiara comincia da un confronto approfondito.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-ivory/60">Esaminiamo la documentazione, individuiamo le priorità e valutiamo il percorso più appropriato rispetto al caso concreto.</p></div><div className="lg:col-span-4 lg:flex lg:justify-end"><CTAButton href="/contattaci" variant="outline-light">Richiedi un confronto</CTAButton></div></Reveal></section>

    <section className="bg-[#f2eee7]"><div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-20"><Link href={next.href} className="legal-next-area group flex items-end justify-between gap-8 border-b border-ink/20 pb-7"><div><span className="text-[0.65rem] uppercase tracking-[0.25em] text-stone">Specializzazione successiva · {next.number}</span><h2 className="mt-4 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-gold sm:text-4xl">{next.title}</h2></div><span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold text-xl text-gold transition-all duration-500 group-hover:translate-x-2 group-hover:bg-gold group-hover:text-ink">→</span></Link></div></section>
  </main><Footer /></ResponsivePage>
}
