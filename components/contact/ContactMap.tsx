import { MapPin } from 'lucide-react'
import { ADDRESS } from '@/lib/site'

const mapsQuery = encodeURIComponent(ADDRESS.mapsQuery)
const mapEmbed = `https://www.google.com/maps?q=${mapsQuery}&z=14&output=embed`

export function ContactMap() {
  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden rounded-sm border border-border shadow-sm">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 border border-gold/20"
      />

      {/* Fallback elegante sotto l'iframe: visibile se l'embed non carica */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 bg-secondary"
      >
        <MapPin className="h-7 w-7 text-gold" />
        <p className="px-6 text-center text-sm text-muted-foreground">
          {ADDRESS.street}, {ADDRESS.city}
        </p>
      </div>

      <iframe
        title={`Mappa della sede dello Studio Legale LF Business: ${ADDRESS.street}, ${ADDRESS.city}`}
        src={mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="relative z-10 h-full min-h-[22rem] w-full grayscale-[0.25]"
      />
    </div>
  )
}
