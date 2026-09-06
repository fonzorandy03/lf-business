export type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactResult = { ok: true } | { ok: false; error: string }

export async function sendContactRequest(payload: ContactPayload): Promise<ContactResult> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 15000)

  try {
    const response = await fetch('https://formsubmit.co/ajax/luigiferraraavv@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Nome: payload.name,
        Email: payload.email,
        Telefono: payload.phone || 'Non indicato',
        Oggetto: payload.subject || 'Richiesta dal sito LF Business',
        Messaggio: payload.message,
        _subject: `Nuova richiesta dal sito — ${payload.subject || payload.name}`,
        _template: 'table',
        _replyto: payload.email,
        _url: typeof window !== 'undefined' ? window.location.href : 'https://avvocatibf.eu/contattaci',
        _honey: '',
      }),
      signal: controller.signal,
    })

    const result = (await response.json().catch(() => null)) as { success?: string | boolean } | null
    const accepted = result?.success === true || result?.success === 'true'

    if (!response.ok || !accepted) {
      return { ok: false, error: 'Il servizio email non ha accettato la richiesta.' }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: 'Impossibile contattare il servizio email.' }
  } finally {
    window.clearTimeout(timeout)
  }
}
