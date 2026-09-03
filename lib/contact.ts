export type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactResult = { ok: true } | { ok: false; error: string }

/**
 * Invio della richiesta di contatto.
 *
 * ⚠️ PLACEHOLDER: al momento non è configurato alcun servizio di invio email/backend.
 * Questa funzione NON mostra falsi successi di invio verso un server reale:
 * si limita a registrare la richiesta lato client e a restituire un esito.
 *
 * Per abilitare l'invio reale, sostituire il corpo con una chiamata a una
 * Route Handler / Server Action (es. `await fetch('/api/contact', { ... })`)
 * collegata a un provider email (Resend, ecc.). L'interfaccia resta invariata.
 */
export async function sendContactRequest(payload: ContactPayload): Promise<ContactResult> {
  // Simula la latenza di rete per uno stato di caricamento realistico.
  await new Promise((resolve) => setTimeout(resolve, 900))

  if (typeof window !== 'undefined') {
    // Traccia locale finché il backend non è configurato.
    console.log('[v0] Richiesta di contatto ricevuta (placeholder, nessun invio reale):', payload)
  }

  return { ok: true }
}
