import { Reveal } from '@/components/Reveal'
import { ContactForm } from './ContactForm'

export function FormSection() {
  return (
    <section id="scrivimi" className="border-y border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="mb-12 text-center">
          <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
            Richiedi informazioni
          </span>
          <h2 className="font-serif text-4xl font-medium leading-[1.05] text-ink text-balance sm:text-5xl">
            Invia una richiesta
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-foreground/70">
            Compila il modulo con i dettagli della tua esigenza: lo Studio ti risponderà nel più
            breve tempo possibile.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
