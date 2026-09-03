'use client'

import { useId, useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { sendContactRequest, type ContactPayload } from '@/lib/contact'

type Status = 'idle' | 'loading' | 'success' | 'error'

type Fields = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  privacy: boolean
}

type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+()\d\s.-]{6,}$/

const initial: Fields = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
}

export function ContactForm() {
  const uid = useId()
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(values: Fields): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Inserisci il tuo nome e cognome.'
    if (!values.email.trim()) next.email = "Inserisci un'email."
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Inserisci un'email valida."
    if (values.phone.trim() && !PHONE_RE.test(values.phone.trim()))
      next.phone = 'Inserisci un numero di telefono valido.'
    if (!values.message.trim()) next.message = 'Scrivi un messaggio.'
    if (!values.privacy) next.privacy = "Devi accettare l'informativa privacy."
    return next
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    if (status === 'error' || status === 'success') setStatus('idle')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0]
      document.getElementById(`${uid}-${firstKey}`)?.focus()
      return
    }

    setStatus('loading')
    try {
      const payload: ContactPayload = {
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        subject: fields.subject.trim(),
        message: fields.message.trim(),
      }
      const result = await sendContactRequest(payload)
      if (result.ok) {
        setStatus('success')
        setFields(initial)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldBase =
    'w-full rounded-sm border bg-card px-4 py-3 text-[0.95rem] text-foreground transition-colors duration-200 placeholder:text-muted-foreground/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40'

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${uid}-name`}
          label="Nome e Cognome"
          required
          error={errors.name}
        >
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={cn(fieldBase, errors.name ? 'border-destructive' : 'border-input focus:border-gold')}
          />
        </Field>

        <Field id={`${uid}-email`} label="Email" required error={errors.email}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={cn(fieldBase, errors.email ? 'border-destructive' : 'border-input focus:border-gold')}
          />
        </Field>

        <Field id={`${uid}-phone`} label="Telefono" hint="facoltativo" error={errors.phone}>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
            className={cn(fieldBase, errors.phone ? 'border-destructive' : 'border-input focus:border-gold')}
          />
        </Field>

        <Field id={`${uid}-subject`} label="Oggetto" hint="facoltativo">
          <input
            id={`${uid}-subject`}
            name="subject"
            type="text"
            value={fields.subject}
            onChange={(e) => update('subject', e.target.value)}
            className={cn(fieldBase, 'border-input focus:border-gold')}
          />
        </Field>
      </div>

      <Field id={`${uid}-message`} label="Messaggio" required error={errors.message}>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={6}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
          className={cn(fieldBase, 'resize-y', errors.message ? 'border-destructive' : 'border-input focus:border-gold')}
        />
      </Field>

      <div>
        <label htmlFor={`${uid}-privacy`} className="flex cursor-pointer items-start gap-3">
          <input
            id={`${uid}-privacy`}
            name="privacy"
            type="checkbox"
            checked={fields.privacy}
            onChange={(e) => update('privacy', e.target.checked)}
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? `${uid}-privacy-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border-input accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          />
          <span className="text-sm leading-relaxed text-foreground/75">
            Dichiaro di aver preso visione dell&apos;informativa privacy.
          </span>
        </label>
        {errors.privacy && (
          <p id={`${uid}-privacy-error`} className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {errors.privacy}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-luxury btn-luxury-dark group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Invio in corso
            </>
          ) : (
            <>
              Invia richiesta
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </>
          )}
        </button>

        <div aria-live="polite" className="min-h-[1.5rem] text-sm">
          {status === 'success' && (
            <p className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              Grazie: la tua richiesta è stata registrata. Ti ricontatteremo al più presto.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Invio non riuscito. Riprova o contattaci via WhatsApp o telefono.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
        {required && <span className="text-gold" aria-hidden="true">*</span>}
        {hint && <span className="normal-case tracking-normal text-muted-foreground/60">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
