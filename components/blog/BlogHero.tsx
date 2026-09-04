import { Reveal } from '@/components/Reveal'

export function BlogHero({ count }: { count: number }) {
  return (
    <header className="blog-hero relative isolate overflow-hidden bg-ink pt-36 pb-20 text-ivory md:pt-44 md:pb-28">
      <div className="blog-hero-orbit blog-hero-orbit-one" aria-hidden="true" />
      <div className="blog-hero-orbit blog-hero-orbit-two" aria-hidden="true" />
      <div className="blog-hero-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.26em] text-gold-soft">
              <span className="h-px w-12 bg-gold" aria-hidden="true" />
              Osservatorio legale
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-8xl">
              Idee, diritto<br />
              <span className="italic text-gold-soft">e prospettive.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/65 md:text-lg">
              Analisi e riflessioni dello Studio sui temi che trasformano il diritto,
              l&apos;amministrazione e la società contemporanea.
            </p>
          </Reveal>
        </div>
        <Reveal delay={240} className="lg:pb-2">
          <div className="blog-issue-card flex min-w-48 items-center gap-5 border border-white/10 bg-white/[0.035] px-6 py-5 backdrop-blur-sm">
            <span className="font-serif text-5xl leading-none text-gold-soft">{count}</span>
            <span className="text-[0.65rem] uppercase leading-relaxed tracking-[0.22em] text-ivory/55">
              contributi<br />pubblicati
            </span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
