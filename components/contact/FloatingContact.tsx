'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { cn } from '@/lib/utils'
import { CONTACT, whatsappHref } from '@/lib/site'

export function FloatingContact() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      className="fixed right-4 z-50 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Opzioni */}
      <div
        className={cn(
          'flex flex-col items-end gap-3 transition-all duration-300 ease-out',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2.5 pl-4 pr-3 text-xs font-medium uppercase tracking-[0.14em] text-ink shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          WhatsApp
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10">
            <WhatsAppIcon className="h-4.5 w-4.5" />
          </span>
        </a>
        <a
          href={CONTACT.phoneHref}
          aria-label={`Chiama lo Studio al numero ${CONTACT.phone}`}
          className="group inline-flex items-center gap-2.5 rounded-full bg-ivory py-2.5 pl-4 pr-3 text-xs font-medium uppercase tracking-[0.14em] text-ink shadow-lg ring-1 ring-border transition-transform duration-200 hover:-translate-y-0.5"
        >
          Chiama
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.06]">
            <Phone className="h-4 w-4 text-ink" aria-hidden="true" />
          </span>
        </a>
      </div>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Chiudi opzioni di contatto' : 'Apri opzioni di contatto rapido'}
        className="floating-contact-button flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory shadow-xl ring-1 ring-gold/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <MessageCircle
          className={cn('h-6 w-6 transition-all duration-300', open ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}
          aria-hidden="true"
        />
        <X
          className={cn('absolute h-6 w-6 transition-all duration-300', open ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
