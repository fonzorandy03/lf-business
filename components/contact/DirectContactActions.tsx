import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { Reveal } from '@/components/Reveal'
import { CONTACT, NUNZIA_CONTACT, STUDIO_CONTACT, nunziaWhatsappHref, whatsappHref } from '@/lib/site'

export function DirectContactActions() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-gold/[0.05] blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold-soft">
            Contatto diretto
          </span>
          <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ivory text-balance sm:text-4xl lg:text-5xl">
            Preferisci parlarne subito?
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-ivory/65">
            Contatta direttamente il professionista oppure chiama la sede dello Studio di Sarno.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Scrivi su WhatsApp all'Avv. Luigi Ferrara, ${CONTACT.phone}`}
            className="contact-direct-card group flex min-h-44 flex-col items-center justify-center border border-gold/45 bg-gold px-7 py-7 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
          >
            <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">WhatsApp</span>
            <span className="mt-2 font-serif text-xl">Avv. Luigi Ferrara</span>
            <span className="mt-2 text-sm opacity-70">{CONTACT.phone}</span>
          </a>

          <a
            href={CONTACT.phoneHref}
            aria-label={`Chiama l'Avv. Luigi Ferrara al numero ${CONTACT.phone}`}
            className="contact-direct-card group flex min-h-44 flex-col items-center justify-center border border-ivory/20 bg-ivory/[0.04] px-7 py-7 text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Phone className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">Avv. Luigi Ferrara</span>
            <span className="mt-2 font-serif text-xl">Chiama Luigi</span>
            <span className="mt-2 text-sm text-ivory/55">{CONTACT.phone}</span>
          </a>

          <a
            href={nunziaWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Scrivi su WhatsApp all'Avv. Nunzia Robustelli, ${NUNZIA_CONTACT.phone}`}
            className="contact-direct-card group flex min-h-44 flex-col items-center justify-center border border-ivory/20 bg-ivory/[0.04] px-7 py-7 text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <WhatsAppIcon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
            <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">WhatsApp</span>
            <span className="mt-2 font-serif text-xl">Avv. Nunzia Robustelli</span>
            <span className="mt-2 text-sm text-ivory/55">{NUNZIA_CONTACT.phone}</span>
          </a>

          <a
            href={STUDIO_CONTACT.phoneHref}
            aria-label={`Chiama lo Studio di Sarno al numero ${STUDIO_CONTACT.phone}`}
            className="contact-direct-card group flex min-h-44 flex-col items-center justify-center border border-ivory/20 bg-ivory/[0.04] px-7 py-7 text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Phone className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">Telefono</span>
            <span className="mt-2 font-serif text-xl">Studio di Sarno</span>
            <span className="mt-2 text-sm text-ivory/55">{STUDIO_CONTACT.phone}</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
