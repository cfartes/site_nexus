import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { industrialPages } from "@/lib/industrial-pages"

type Cta = { href: string; label: string }

export function IndustrialPageHero({
  eyebrow,
  title,
  lead,
  support,
  primaryCta,
  secondaryCta,
  breadcrumb,
  aside,
}: {
  eyebrow: string
  title: string
  lead: string
  support?: ReactNode
  primaryCta: Cta
  secondaryCta?: Cta
  breadcrumb?: string
  aside?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="site-grid pointer-events-none absolute inset-0" />
      <div className="ambient-orb pointer-events-none absolute left-[6%] top-24 size-[26rem] rounded-full bg-primary/10" />
      <div className="ambient-orb pointer-events-none absolute right-[6%] top-10 size-[28rem] rounded-full bg-accent/10 [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-14 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Trilha de navegação" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">Início</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li>
                <Link href={industrialPages.hub.href} className="transition-colors hover:text-primary">
                  {industrialPages.hub.shortName}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li aria-current="page" className="text-foreground">{breadcrumb}</li>
            </ol>
          </nav>
        )}

        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]" : undefined}>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 font-mono text-xs text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-foreground/90 md:text-2xl md:leading-9">{lead}</p>
            {support && <div className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{support}</div>}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="button-sheen group h-auto min-h-10 w-full whitespace-normal py-2.5 shadow-[0_0_36px_rgba(123,243,106,0.18)] sm:w-auto" asChild>
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {secondaryCta && (
                <Button size="lg" variant="outline" className="h-auto min-h-10 w-full whitespace-normal border-white/15 bg-white/[0.025] py-2.5 sm:w-auto" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
          {aside}
        </div>
      </div>
    </section>
  )
}
