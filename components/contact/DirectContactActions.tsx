import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { Reveal } from '@/components/Reveal'
import { CONTACT, whatsappHref } from '@/lib/site'

export function DirectContactActions() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-gold/[0.05] blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold-soft">
            Contatto diretto
          </span>
          <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ivory text-balance sm:text-4xl lg:text-5xl">
            Preferisci parlarne subito?
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-ivory/65">
            Scrivici su WhatsApp o chiama lo Studio: ti risponderemo per orientarti verso
            l&apos;ambito di assistenza più appropriato.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-11 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          {/* WhatsApp — champagne/gold */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scrivici su WhatsApp"
            className="btn-luxury btn-luxury-primary group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Scrivici su WhatsApp
          </a>

          {/* Telefono — outline ivory */}
          <a
            href={CONTACT.phoneHref}
            aria-label={`Chiama lo Studio al numero ${CONTACT.phone}`}
            className="btn-luxury btn-luxury-outline-light group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            Chiama lo Studio
          </a>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-[0.8rem] tracking-wide text-ivory/45">{CONTACT.phone}</p>
        </Reveal>
      </div>
    </section>
  )
}
