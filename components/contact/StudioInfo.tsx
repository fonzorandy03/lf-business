import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { ADDRESS, CONTACT } from '@/lib/site'

const mapsQuery = encodeURIComponent(ADDRESS.mapsQuery)
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export function StudioInfo() {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
          Lo Studio
        </span>
        <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ink text-balance sm:text-4xl">
          Dove trovarci
        </h2>
        <span className="mt-6 block h-px w-16 bg-gold" aria-hidden="true" />

        <ul className="mt-10 space-y-8">
          <li className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Sede
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-block"
              >
                <address className="not-italic leading-relaxed text-foreground/85 transition-colors group-hover:text-gold">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.city} — {ADDRESS.zip}
                  <br />
                  {ADDRESS.country}
                </address>
              </a>
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
                className="mt-2 block break-all text-foreground/85 transition-colors hover:text-gold"
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
      </div>

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
  )
}
