import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IndustrialSection } from "@/components/industrial/section"
import { InteractiveSurface } from "@/components/interactive-surface"
import { type IndustrialPageKey, industrialPages } from "@/lib/industrial-pages"

const order: IndustrialPageKey[] = ["hub", "vision", "wiki", "data"]

export function RelatedIndustrialPages({ current }: { current: IndustrialPageKey }) {
  const pages = order.filter((key) => key !== current).map((key) => industrialPages[key])

  return (
    <IndustrialSection eyebrow="Continue explorando" title="Outras frentes para a operação industrial">
      <ul className="grid gap-4 md:grid-cols-3">
        {pages.map((page) => (
          <li key={page.href}>
            <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-card/60">
              <Link href={page.href} className="group flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                <span className="font-heading text-lg font-semibold">{page.name}</span>
                <span className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{page.description}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Conhecer
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </InteractiveSurface>
          </li>
        ))}
      </ul>
    </IndustrialSection>
  )
}
