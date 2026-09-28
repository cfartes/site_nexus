import { BookOpen, FileText, Info, UserRound } from "lucide-react"
import { cn } from "@/lib/utils"

export const wikiExampleQuestion = "Onde encontro o procedimento de inspeção do equipamento X?"

/** Conversa ilustrativa e estática. Não contém instruções reais de operação ou manutenção. */
export function WikiIndustrialExample({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={cn("data-panel rounded-[1.25rem] border border-white/10", compact ? "p-4" : "p-4 sm:p-6")}>
      <figcaption className="flex items-start gap-2 border-b border-white/10 pb-3 text-sm font-medium text-[#f5b84b]">
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        Exemplo ilustrativo — pergunta, resposta e documento fictícios.
      </figcaption>

      <div className="mt-4 grid gap-4">
        <div className="flex items-start justify-end gap-3">
          <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-accent/[0.12] px-4 py-3 text-sm leading-6">
            <span className="sr-only">Pergunta: </span>
            {wikiExampleQuestion}
          </p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted-foreground" aria-hidden="true">
            <UserRound className="size-4" />
          </span>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent" aria-hidden="true">
            <BookOpen className="size-4" />
          </span>
          <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/10 bg-background/70 px-4 py-3 text-sm leading-6">
            <span className="sr-only">Resposta: </span>
            <p>
              O procedimento está no documento <strong className="font-semibold">“Procedimento de inspeção — Equipamento X”</strong>,
              na seção de inspeções periódicas.
            </p>
            {!compact && (
              <p className="mt-2 text-muted-foreground">
                Antes de executar a atividade, confirme se está usando a versão aprovada vigente e siga as orientações
                do responsável pela área.
              </p>
            )}
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/[0.06] px-2.5 py-1.5 text-xs text-accent">
              <FileText className="size-3.5" aria-hidden="true" />
              Fonte: Procedimento de inspeção — Equipamento X
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
