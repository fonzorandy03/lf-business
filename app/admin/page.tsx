import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Gestione Blog | LF Business',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  redirect('https://app.pagescms.org')
}
