import { Reveal } from '@/components/Reveal'

// Placeholder for future client testimonials.
// This section is intentionally OFF by default: it renders nothing until real,
// authorized testimonials are provided. No fabricated reviews are shown.
//
// To enable it, set `enabled` to true and populate `testimonials` in lib
// (or pass real, consented quotes here).
const enabled = false

interface Testimonial {
  quote: string
  author: string
  role?: string
}

const testimonials: Testimonial[] = []

export function GalleryTestimonials() {
  if (!enabled || testimonials.length === 0) return null

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.28em] text-gold">
            Dicono di noi
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.author}>
              <figure className="flex h-full flex-col justify-between rounded-sm border border-ivory/10 bg-ivory/[0.03] p-8">
                <blockquote className="font-serif text-xl leading-relaxed text-ivory/90">
                  {`\u201C${t.quote}\u201D`}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-serif text-lg text-ivory">{t.author}</span>
                  {t.role && (
                    <span className="mt-0.5 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ivory/50">
                      {t.role}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
