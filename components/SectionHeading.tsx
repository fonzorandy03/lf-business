import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  as?: 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  as: Tag = 'h2',
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const isLight = tone === 'light'
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em]',
            isLight ? 'text-gold-soft' : 'text-gold',
          )}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          'font-serif font-medium leading-[1.05] text-balance',
          'text-3xl sm:text-4xl lg:text-5xl',
          isLight ? 'text-ivory' : 'text-ink',
        )}
      >
        {title}
      </Tag>
      <span
        className={cn(
          'mt-6 h-px w-16 bg-gold',
          align === 'center' && 'mx-auto',
        )}
        aria-hidden="true"
      />
    </div>
  )
}
