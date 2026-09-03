import { Reveal } from '@/components/Reveal'

export function BlogHero({ count }: { count: number }) {
  return (
    <header className="border-b border-border bg-background pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-accent">
            Approfondimenti &amp; Aggiornamenti
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl">
            Il Blog dello Studio
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Analisi, note e riflessioni su diritto amministrativo, appalti pubblici,
            contenzioso davanti al TAR e al Consiglio di Stato, diritto d&apos;impresa e
            internazionalizzazione. {count} articoli disponibili.
          </p>
        </Reveal>
      </div>
    </header>
  )
}
