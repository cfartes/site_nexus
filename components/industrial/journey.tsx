import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export type JourneyStep = { title: string; description: string }

export function Journey({ steps }: { steps: JourneyStep[] }) {
  return (
    <ol
      className={cn(
        "grid gap-4 md:grid-cols-2",
        steps.length === 4 && "xl:grid-cols-4",
        steps.length === 5 && "lg:grid-cols-3 xl:grid-cols-5",
      )}
    >
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal delay={index * 60} className="h-full">
            <div className="relative h-full rounded-2xl border border-white/10 bg-card/60 p-6">
              <span className="font-mono text-xs text-primary">Etapa {String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-heading mt-4 text-lg font-semibold leading-snug">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
