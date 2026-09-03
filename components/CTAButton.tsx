import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type Variant = 'primary' | 'ghost' | 'outline-light'

interface CTAButtonProps extends ComponentProps<typeof Link> {
  variant?: Variant
}

const base =
  'btn-luxury group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'btn-luxury-primary focus-visible:ring-offset-background',
  ghost:
    'btn-luxury-ghost focus-visible:ring-offset-background',
  'outline-light':
    'btn-luxury-outline-light focus-visible:ring-offset-transparent',
}

export function CTAButton({ variant = 'primary', className, children, ...props }: CTAButtonProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
      <span
        aria-hidden="true"
        className="relative z-10 inline-block text-base leading-none transition-transform duration-500 group-hover:translate-x-1.5"
      >
        &rarr;
      </span>
    </Link>
  )
}
