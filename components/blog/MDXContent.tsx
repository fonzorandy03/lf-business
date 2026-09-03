import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { ComponentPropsWithoutRef } from 'react'

const components = {
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="font-serif text-2xl md:text-3xl text-foreground mt-14 mb-5 tracking-tight text-balance"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4 tracking-tight" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-foreground underline decoration-accent/60 decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="my-6 space-y-3 pl-1" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="my-6 space-y-3 list-decimal pl-5 marker:text-accent marker:font-medium" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li
      className="relative pl-6 text-base md:text-lg leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent [ol_&]:pl-1 [ol_&]:before:hidden"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="my-8 border-l-2 border-accent pl-6 font-serif text-xl md:text-2xl italic leading-snug text-foreground text-pretty"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  hr: () => <hr className="my-12 border-border" />,
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm md:text-base" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-secondary/60" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="border-b border-border px-4 py-3 font-serif text-base font-normal text-foreground" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border-b border-border px-4 py-3 align-top text-muted-foreground" {...props} />
  ),
}

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  )
}
