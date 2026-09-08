import type { ReactNode } from 'react'

export function MobileDisclosure({enabled,title,children}:{enabled:boolean;title:string;children:ReactNode}) {
  return enabled ? <details className="m-project-details"><summary>{title}</summary><div>{children}</div></details> : <>{children}</>
}
