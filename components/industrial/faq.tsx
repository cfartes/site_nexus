import { ChevronDown } from "lucide-react"
import { IndustrialSection } from "@/components/industrial/section"

export type FaqItem = { question: string; answer: string }

export function IndustrialFaq({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  return (
    <IndustrialSection id="perguntas" eyebrow="Dúvidas comuns" title={title}>
      <div className="grid gap-3 lg:max-w-4xl">
        {items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-white/10 bg-card/60 open:border-primary/25">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-heading text-base font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
              <h3>{item.question}</h3>
              <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-5 pb-6 leading-7 text-muted-foreground md:px-6">{item.answer}</p>
          </details>
        ))}
      </div>
    </IndustrialSection>
  )
}
