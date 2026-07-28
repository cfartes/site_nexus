import { FlaskConical } from "lucide-react"

export function DemoNotice() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-muted-foreground">
      <FlaskConical className="mt-0.5 size-4 shrink-0 text-primary" />
      Ambiente demonstrativo. Documentos, valores e resultados apresentados são inteiramente fictícios.
    </div>
  )
}
