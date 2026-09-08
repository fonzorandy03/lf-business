type Direction = 'forward' | 'back' | 'down' | 'external'

export function EditorialArrow({ direction = 'forward', className = '' }: { direction?: Direction; className?: string }) {
  const rotation = direction === 'back' ? 180 : direction === 'down' ? 90 : direction === 'external' ? -45 : 0
  return <svg className={className} width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true" focusable="false" style={{ transform: `rotate(${rotation}deg)` }}>
    <path d="M1 6h24M20.5 1.5 25 6l-4.5 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
}
