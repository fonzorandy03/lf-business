import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'
import { ADDRESS, CONTACT } from '@/lib/site'

const mapsQuery = encodeURIComponent(ADDRESS.mapsQuery)
const mapEmbed = `https://www.google.com/maps?q=${mapsQuery}&z=14&output=embed`
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export function ContactLocationSection() {
  return (
    <section id="dove-siamo" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Puoi trovarci qui" title="Vieni a trovarci" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Info column */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-10">
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Sede
                    </p>
                    <address className="mt-2 not-italic leading-relaxed text-foreground/85">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.city}
                      <br />
                      {ADDRESS.zip}
                      <br />
                      {ADDRESS.country}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-2 block text-foreground/85 transition-colors hover:text-gold"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Telefono
                    </p>
                    <a
                      href={CONTACT.phoneHref}
                      className="mt-2 block text-foreground/85 transition-colors hover:text-gold"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold"
              >
                Apri in Google Maps
                <ExternalLink
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          {/* Map column */}
          <Reveal delay={100} className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-sm border border-border shadow-sm">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 border border-gold/20"
              />
              <iframe
                title={`Mappa della sede dello Studio Legale LF Business: ${ADDRESS.street}, ${ADDRESS.city}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full grayscale-[0.25] lg:aspect-[16/10]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
