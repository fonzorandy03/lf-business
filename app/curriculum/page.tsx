import { ResponsivePage } from '@/components/mobile/MobileFrame'
import { MobileCurriculum } from '@/components/mobile/MobilePages'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, ExternalLink } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { HeroScrollCue } from '@/components/HeroScrollCue'

const CV_PATH = '/documents/curriculum-luigi-ferrara.pdf'

export const metadata: Metadata = {
  title: 'Curriculum Avv. Luigi Ferrara | LF Business',
  description:
    'Consulta e scarica il curriculum professionale dell’Avv. Luigi Ferrara, fondatore dello Studio Legale LF Business.',
  alternates: { canonical: '/curriculum' },
}

const highlights = [
  ['2003', 'Iscrizione all’Ordine degli Avvocati'],
  ['2015', 'Patrocinante presso le Magistrature Superiori'],
  ['24 ORE', 'Partner del network professionale'],
] as const

export default function CurriculumPage() {
  return (
    <ResponsivePage mobile={<MobileCurriculum />}>
      <Header />
      <main id="contenuto">
        <section className="site-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-y-[-10%] left-0 right-[-25%]">
              <Image
                src="/images/luigi-ferrara-ritratto.png"
                alt=""
                fill
                priority
                sizes="125vw"
                className="hero-cinematic-image object-cover object-[center_38%]"
              />
            </div>
            <div className="hero-cinematic-overlay absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/72 to-ink/28" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
            <div className="hero-light-sweep absolute inset-0" aria-hidden="true" />
          </div>

          <div className="site-hero-content relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10">
            <p className="hero-reveal hero-delay-1 flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-gold-soft">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Profilo professionale
            </p>
            <h1 className="hero-reveal hero-delay-2 mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.02] text-ivory text-balance sm:text-6xl lg:text-7xl">
              Curriculum
            </h1>
            <p className="hero-reveal hero-delay-3 mt-4 font-serif text-3xl italic text-gold-soft sm:text-4xl">
              Avv. Luigi Ferrara
            </p>
            <p className="hero-reveal hero-delay-4 mt-8 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              Esperienza nel diritto amministrativo, patrocinio presso le Magistrature Superiori
              e consulenza strategica alle imprese in Italia e nei mercati internazionali.
            </p>
            <div className="hero-reveal hero-delay-5 mt-10 flex flex-wrap gap-4">
              <a
                href={CV_PATH}
                download="Curriculum-Avv-Luigi-Ferrara.pdf"
                className="group inline-flex min-h-12 items-center gap-3 bg-gold px-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-500 hover:bg-gold-soft hover:shadow-[0_14px_35px_-16px_rgba(191,151,84,0.8)]"
              >
                <Download className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
                Scarica il curriculum
              </a>
              <a
                href={`${CV_PATH}#view=FitH`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 border border-ivory/35 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-500 hover:border-gold hover:text-gold-soft"
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Apri a schermo intero
              </a>
            </div>
          </div>
          <HeroScrollCue targetId="curriculum-content" />
        </section>

        <section id="curriculum-content" className="relative scroll-mt-20 overflow-hidden bg-background py-20 lg:py-28">
          <div className="pointer-events-none absolute right-0 top-0 font-serif text-[15rem] leading-none text-ink/[0.025]" aria-hidden="true">CV</div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
              {highlights.map(([value, label]) => (
                <div key={value} className="group bg-background px-7 py-8 transition-colors duration-500 hover:bg-secondary/70 lg:px-9">
                  <p className="font-serif text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-1">{value}</p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">{label}</p>
                </div>
              ))}
            </Reveal>

            <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
                <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  Documento completo
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-ink text-balance sm:text-5xl">
                  Percorso, competenze e
                  <span className="italic text-gold"> incarichi.</span>
                </h2>
                <p className="mt-6 max-w-sm leading-relaxed text-stone">
                  Il documento è consultabile direttamente nella pagina oppure può essere
                  scaricato e conservato in formato PDF.
                </p>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-8">
                <div className="overflow-hidden border border-ink/15 bg-ink p-2 shadow-[0_35px_90px_-55px_rgba(15,18,21,0.8)] sm:p-3">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-ivory/55">
                      Curriculum vitae · PDF
                    </span>
                    <a href={CV_PATH} download className="text-[0.62rem] uppercase tracking-[0.18em] text-gold-soft transition-colors hover:text-ivory">
                      Scarica
                    </a>
                  </div>
                  <iframe
                    src={`${CV_PATH}#view=FitH&toolbar=1&navpanes=0`}
                    title="Curriculum vitae dell’Avv. Luigi Ferrara"
                    className="h-[72vh] min-h-[620px] w-full bg-white"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ResponsivePage>
  )
}
