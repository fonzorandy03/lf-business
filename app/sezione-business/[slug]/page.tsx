import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import { BUSINESS_AREAS, getBusinessArea } from '@/lib/business'

export function generateStaticParams() {
  return BUSINESS_AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getBusinessArea(slug)
  if (!area) return { title: 'Sezione Business — LF Business' }
  return {
    title: `${area.title} — LF Business`,
    description: area.description,
    openGraph: {
      title: `${area.title} — LF Business`,
      description: area.description,
      images: [area.image],
    },
  }
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getBusinessArea(slug)
  if (!area) notFound()

  const index = BUSINESS_AREAS.findIndex((a) => a.slug === area.slug)
  const next = BUSINESS_AREAS[(index + 1) % BUSINESS_AREAS.length]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink">
          <div className="absolute inset-0 -z-10">
            <Image
              src={area.image || '/placeholder.svg'}
              alt={area.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
          </div>

          <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40 sm:px-10 sm:pb-24 lg:pb-28">
            <Link
              href="/sezione-business"
              className="group inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-gold"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
              >
                &larr;
              </span>
              Sezione Business
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-serif text-lg text-gold">{area.number}</span>
              <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-gold-soft">
                {area.category}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl font-serif font-medium leading-[1.02] text-ivory text-balance text-4xl sm:text-5xl lg:text-6xl">
              {area.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <span className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  Panoramica
                </span>
                <p className="mt-6 font-serif text-2xl leading-[1.2] text-ink text-balance lg:text-3xl">
                  {area.description}
                </p>
              </Reveal>

              <div className="lg:col-span-7 lg:col-start-6">
                {area.longDescription.map((para, i) => (
                  <Reveal
                    as="p"
                    key={i}
                    delay={i * 90}
                    className="mb-6 text-base leading-relaxed text-stone last:mb-0 lg:text-lg"
                  >
                    {para}
                  </Reveal>
                ))}

                <Reveal className="mt-10" delay={180}>
                  <CTAButton href="/contattaci" variant="primary">
                    Richiedi una consulenza
                  </CTAButton>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next area */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:py-20">
            <Link href={next.href} className="group flex flex-col gap-2">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-stone">
                Area successiva
              </span>
              <span className="flex items-center justify-between gap-6">
                <span className="font-serif text-2xl font-medium text-ink text-balance transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                  {next.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl text-gold transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
