import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PortraitProps {
  /**
   * Percorso della fotografia reale (es. "/images/luigi-ferrara.jpg").
   * Lasciare vuoto per mostrare un placeholder elegante e sostituibile.
   */
  src?: string
  name: string
  initials: string
  className?: string
}

export function Portrait({ src, name, initials, className }: PortraitProps) {
  return (
    <div
      className={cn(
        'relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink',
        className,
      )}
    >
      {/* Cornice oro discreta */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 z-10 border border-gold/25"
      />
      {src ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={`Ritratto di ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      ) : (
        // Placeholder chiaramente sostituibile: inserire la foto reale in <Portrait src="..." />
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[oklch(0.24_0.006_265)]">
          <span className="font-serif text-6xl font-medium text-gold/70">{initials}</span>
          <span className="px-6 text-center text-[0.65rem] uppercase tracking-[0.22em] text-ivory/40">
            {name}
          </span>
        </div>
      )}
    </div>
  )
}
