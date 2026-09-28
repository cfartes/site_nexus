import type { LucideIcon } from "lucide-react"
import { ArrowDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type FlowNode = {
  title: string
  description: string
  examples?: string[]
  icon: LucideIcon
}

/**
 * Fluxo em etapas: vertical no celular e horizontal a partir de telas grandes.
 * Renderizado como lista ordenada para que leitores de tela anunciem a sequência.
 */
export function FlowDiagram({ nodes, label }: { nodes: FlowNode[]; label: string }) {
  return (
    <ol aria-label={label} className="flex flex-col items-stretch gap-2 lg:flex-row lg:gap-0">
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1
        return (
          <li key={node.title} className="flex flex-col items-stretch lg:flex-1 lg:flex-row">
            <div
              className={cn(
                "data-panel flex h-full flex-1 flex-col rounded-2xl border p-5",
                isLast ? "border-primary/35" : "border-white/10",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] text-primary">
                  <node.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading mt-4 text-base font-semibold leading-snug">{node.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{node.description}</p>
              {node.examples && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {node.examples.map((example) => (
                    <li key={example} className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {example}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!isLast && (
              <div className="flex items-center justify-center py-1 text-primary/70 lg:px-1.5 lg:py-0" aria-hidden="true">
                <ArrowDown className="size-5 lg:hidden" />
                <ArrowRight className="hidden size-5 lg:block" />
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
