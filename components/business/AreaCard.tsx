import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { BusinessArea } from '@/lib/business'

interface AreaCardProps {
  area: BusinessArea
  sizes: string
}

export function AreaCard({ area, sizes }: AreaCardProps) {
  return (
    <Link
      href={area.href}
      aria-label={`${area.title} — scopri di più`}
      className={cn(
        'business-area-card group relative isolate flex min-h-[34rem] overflow-hidden bg-ink text-ivory lg:min-h-[40rem]',
      )}
    >
      <span className="business-area-shine pointer-events-none absolute inset-0 z-20" aria-hidden="true" />
      <span className="absolute right-5 top-5 z-20 h-8 w-8 border-r border-t border-gold/50 transition-all duration-500 group-hover:h-12 group-hover:w-12" aria-hidden="true" />
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={area.image || '/placeholder.svg'}
          alt={area.imageAlt}
          fill
          sizes={sizes}
          className={cn(
            'object-cover grayscale-[18%] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 motion-reduce:transition-none',
            area.slug === 'mercati-live'
              ? 'scale-[1.1] object-[center_68%] group-hover:scale-[1.16]'
              : 'group-hover:scale-[1.07]',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5 transition-colors duration-700 group-hover:via-ink/42" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-7 sm:p-9 lg:p-10">
        <div className="flex items-start justify-between">
          <span className="font-serif text-5xl text-ivory/25 transition-colors duration-500 group-hover:text-gold/80">{area.number}</span>
          <span className="mt-2 h-10 w-10 border-r border-t border-ivory/35 transition-all duration-500 group-hover:h-14 group-hover:w-14 group-hover:border-gold" aria-hidden="true" />
        </div>

        <div className="translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-gold" aria-hidden="true" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-gold-soft">
            {area.category}
          </span>
          </div>

        <h3
          className="font-serif text-3xl font-medium leading-[1.05] text-ivory text-balance lg:text-[2.35rem]"
        >
          {area.title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/65">
          {area.description}
        </p>

        <span className="mt-7 inline-flex w-fit items-center gap-3 border-b border-ivory/25 pb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/80 transition-all duration-300 group-hover:border-gold group-hover:text-gold">
          Esplora l’area
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
        </div>
      </div>
    </Link>
  )
}
