'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from './LanguageProvider'

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      data-no-translate
      aria-label="Seleziona lingua"
      className={cn(
        'group/language relative flex items-center gap-3 pl-5 text-[0.61rem] font-medium tracking-[0.2em] transition-colors duration-500',
        'before:absolute before:inset-y-1 before:left-0 before:w-px before:transition-colors before:duration-500',
        light
          ? 'text-ivory before:bg-ivory/25'
          : 'text-ink before:bg-ink/15',
      )}
    >
      {(['it', 'en'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
          className={cn(
            'relative py-2 uppercase transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-center after:bg-gold after:transition-transform after:duration-500',
            language === item
              ? light
                ? 'text-gold-soft after:scale-x-100'
                : 'text-gold after:scale-x-100'
              : light
                ? 'text-ivory/45 after:scale-x-0 hover:text-ivory'
                : 'text-ink/40 after:scale-x-0 hover:text-ink',
          )}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
