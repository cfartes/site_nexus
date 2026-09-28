import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, ScanEye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"
import { InspectionIllustration } from "@/components/industrial/inspection-illustration"
import { WikiIndustrialExample } from "@/components/industrial/wiki-industrial-example"
import { industrialPages } from "@/lib/industrial-pages"

export function IndustrialAiHighlight({
  id,
  eyebrow = "Tecnologia para a indústria",
  intro,
  showHubLink = false,
  footer,
}: {
  id?: string
  eyebrow?: string
  intro?: string
  showHubLink?: boolean
  footer?: ReactNode
}) {
  return (
    <section id={id} className="section-alt relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="product-dot-field pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-52 top-1/4 size-[34rem] rounded-full bg-primary/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-5xl">
            Inteligência artificial aplicada à operação industrial
          </h2>
          {intro && <p className="mt-6 text-lg leading-8 text-muted-foreground">{intro}</p>}
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <InteractiveSurface className="flex h-full flex-col rounded-[1.25rem] border border-primary/30 bg-card/75 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <ScanEye className="size-5" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Em destaque
                </span>
              </div>
              <h3 className="font-heading mt-6 text-3xl font-semibold tracking-[-0.03em]">Visão Computacional</h3>
              <p className="mt-3 max-w-xl text-lg leading-7 text-muted-foreground">
                Inspeção visual, conferência de montagem e rastreabilidade com apoio de IA.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <InspectionIllustration />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Ilustração. Não representa uma inspeção real.</p>
              <Button className="button-sheen group mt-6 w-full sm:w-auto sm:self-start" asChild>
                <Link href={industrialPages.vision.href}>
                  Conhecer Visão Computacional
                  <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </InteractiveSurface>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <InteractiveSurface accent="#55ddeb" className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-card/70 p-6 sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-xl border border-accent/25 bg-background/60 text-accent">
                <BookOpen className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading mt-6 text-2xl font-semibold tracking-[-0.03em]">AI Wiki Industrial</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Manuais, procedimentos e conhecimento técnico mais acessíveis às equipes.
              </p>
              <div className="mt-6 flex-1">
                <WikiIndustrialExample compact />
              </div>
              <Button variant="outline" className="button-sheen group mt-6 w-full sm:w-auto sm:self-start" asChild>
                <Link href={industrialPages.wiki.href}>
                  Conhecer AI Wiki Industrial
                  <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </InteractiveSurface>
          </Reveal>
        </div>

        {footer && <Reveal className="mt-5">{footer}</Reveal>}

        {showHubLink && (
          <Reveal className="mt-10">
            <Link
              href={industrialPages.hub.href}
              className="group inline-flex items-center gap-2 rounded-lg text-base font-medium text-primary outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Conhecer a frente de Automação Industrial & Indústria 4.0
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
