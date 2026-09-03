import { Reveal } from '@/components/Reveal'
import { StudioInfo } from './StudioInfo'
import { ContactMap } from './ContactMap'

export function StudioMapSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <StudioInfo />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <ContactMap />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
