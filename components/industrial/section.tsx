import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function IndustrialSection({
  id,
  eyebrow,
  title,
  description,
  alt = false,
  centered = false,
  children,
}: {
  id?: string
  eyebrow: string
  title: string
  description?: ReactNode
  alt?: boolean
  centered?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 overflow-hidden py-20 md:py-28", alt && "section-alt")}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center")}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            {title}
          </h2>
          {description && <div className="mt-6 text-lg leading-8 text-muted-foreground">{description}</div>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-muted-foreground md:p-6", className)}>
      {children}
    </div>
  )
}
