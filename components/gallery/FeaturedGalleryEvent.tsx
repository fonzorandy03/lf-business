import Image from 'next/image'
import { featuredEvent } from '@/lib/gallery'
import { Reveal } from '@/components/Reveal'

export function FeaturedGalleryEvent() {
  const { image, eyebrow, title, location, date, description } = featuredEvent

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm sm:aspect-[16/7]">
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-gold">
                {eyebrow}
              </span>
              <h3 className="mt-3 max-w-2xl text-balance font-serif text-3xl leading-tight text-ivory sm:text-4xl">
                {title}
              </h3>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-6 border-t border-ink/10 pt-8 md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink/45">
                Luogo
              </span>
              <span className="font-serif text-lg text-ink">{location}</span>
              <span className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink/45">
                Ambito
              </span>
              <span className="font-serif text-lg text-ink">{date}</span>
            </div>
            <p className="text-pretty text-[1.02rem] leading-relaxed text-ink/70">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
