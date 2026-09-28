import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IndustrialSection } from "@/components/industrial/section"
import { InteractiveSurface } from "@/components/interactive-surface"

export type RelatedLink = { href: string; title: string; text: string }

export function ServiceRelated({ links }: { links: RelatedLink[] }) {
  return (
    <IndustrialSection eyebrow="Continue explorando" title="Outras formas de trabalhar com a Nexus">
      <ul className="grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-card/60">
              <Link href={link.href} className="group flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                <span className="font-heading text-lg font-semibold">{link.title}</span>
                <span className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{link.text}</span>
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
