import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { BusinessArea } from '@/lib/business'

interface AreaCardProps {
  area: BusinessArea
  layout?: 'feature' | 'standard' | 'wide'
  sizes: string
}

export function AreaCard({ area, layout = 'standard', sizes }: AreaCardProps) {
  const isWide = layout === 'wide'
  const isFeature = layout === 'feature'

  return (
    <Link
      href={area.href}
      aria-label={`${area.title} — scopri di più`}
      className={cn(
        'group relative isolate flex overflow-hidden bg-ink text-ivory',
        'ring-1 ring-ivory/10 transition-all duration-500 hover:ring-gold/40',
        isWide ? 'flex-col sm:flex-row' : 'flex-col',
        isFeature ? 'min-h-[30rem] lg:min-h-[38rem]' : 'min-h-[24rem]',
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden',
          isWide ? 'aspect-[16/10] sm:aspect-auto sm:w-1/2' : 'flex-1',
        )}
      >
        <Image
          src={area.image || '/placeholder.svg'}
          alt={area.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:transition-none"
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isWide
              ? 'bg-gradient-to-t from-ink/70 to-ink/10'
              : 'bg-gradient-to-t from-ink via-ink/45 to-ink/5 group-hover:from-ink group-hover:via-ink/55',
          )}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          'relative flex flex-col justify-end gap-4 p-7 sm:p-9',
          isWide
            ? 'sm:w-1/2 sm:justify-center'
            : '-mt-24 sm:-mt-28',
          isFeature && 'lg:p-12',
        )}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-gold">{area.number}</span>
          <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-gold-soft">
            {area.category}
          </span>
        </div>

        <h3
          className={cn(
            'font-serif font-medium leading-[1.08] text-ivory text-balance transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none',
            isFeature ? 'text-3xl lg:text-5xl' : 'text-2xl lg:text-[1.9rem]',
          )}
        >
          {area.title}
        </h3>

        <p
          className={cn(
            'max-w-md text-sm leading-relaxed text-ivory/65',
            isFeature && 'lg:text-base',
          )}
        >
          {area.description}
        </p>

        <span className="mt-1 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-300 group-hover:text-gold">
          Scopri di più
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  )
}
