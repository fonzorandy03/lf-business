'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100svh-1px)] items-center bg-ink px-6 py-32 text-ivory lg:px-10">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-soft">
            LF Business
          </p>
          <p className="mt-8 font-serif text-[clamp(7rem,22vw,13rem)] leading-[0.75] text-ivory/10">
            500
          </p>
          <h1 className="mt-10 font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Si e verificato un errore
          </h1>
          <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-ivory/65 sm:text-lg">
            Qualcosa non ha funzionato. Puoi riprovare oppure tornare alla pagina principale.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-luxury btn-luxury-primary group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Riprova
              <span aria-hidden="true" className="relative z-10 inline-block text-base leading-none transition-transform duration-500 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </button>
            <Link
              href="/"
              className="btn-luxury btn-luxury-outline-light group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-transparent"
            >
              Torna alla home
              <span aria-hidden="true" className="relative z-10 inline-block text-base leading-none transition-transform duration-500 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
