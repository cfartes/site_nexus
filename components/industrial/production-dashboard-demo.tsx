"use client"

import { useState } from "react"
import { FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"

type Kpi = { label: string; value: string; hint: string }
type Bar = { label: string; value: number; display: string }

type View = {
  id: string
  tab: string
  title: string
  kpis: Kpi[]
  chartTitle: string
  chartKind: "columns" | "rows"
  bars: Bar[]
  target?: number
  footer: string
}

// Valores inteiramente fictícios, apenas para ilustrar o formato dos painéis.
const views: View[] = [
  {
    id: "supervisao",
    tab: "Supervisão do turno",
    title: "Linha 2 · Turno A",
    kpis: [
      { label: "Produção do turno", value: "1.840", hint: "meta de 2.100 peças" },
      { label: "Máquinas operando", value: "5 de 6", hint: "1 em setup" },
      { label: "Paradas no turno", value: "4", hint: "52 min no total" },
      { label: "Refugo", value: "1,6%", hint: "29 peças" },
    ],
    chartTitle: "Produção por hora (peças) — linha tracejada indica a meta",
    chartKind: "columns",
    target: 262,
    bars: [
      { label: "06h", value: 248, display: "248" },
      { label: "07h", value: 266, display: "266" },
      { label: "08h", value: 259, display: "259" },
      { label: "09h", value: 181, display: "181" },
      { label: "10h", value: 240, display: "240" },
      { label: "11h", value: 270, display: "270" },
      { label: "12h", value: 204, display: "204" },
    ],
    footer: "Queda às 09h associada a uma parada registrada como setup.",
  },
  {
    id: "manutencao",
    tab: "Manutenção",
    title: "Paradas não planejadas · semana",
    kpis: [
      { label: "Ocorrências", value: "11", hint: "semana atual" },
      { label: "Tempo parado", value: "6,4 h", hint: "não planejado" },
      { label: "Tempo médio de reparo", value: "35 min", hint: "MTTR" },
      { label: "Ordens abertas", value: "7", hint: "2 aguardando peça" },
    ],
    chartTitle: "Tempo parado por equipamento (minutos)",
    chartKind: "rows",
    bars: [
      { label: "Máquina 04", value: 132, display: "132 min" },
      { label: "Máquina 01", value: 96, display: "96 min" },
      { label: "Máquina 06", value: 71, display: "71 min" },
      { label: "Máquina 03", value: 58, display: "58 min" },
      { label: "Máquina 02", value: 27, display: "27 min" },
    ],
    footer: "Cada ocorrência mantém motivo, duração, turno e equipamento para análise posterior.",
  },
  {
    id: "gestao",
    tab: "Gestão",
    title: "Visão consolidada · planta",
    kpis: [
      { label: "OEE", value: "72%", hint: "semana" },
      { label: "Disponibilidade", value: "86%", hint: "tempo produzindo" },
      { label: "Desempenho", value: "89%", hint: "ritmo x padrão" },
      { label: "Qualidade", value: "94%", hint: "peças boas" },
    ],
    chartTitle: "Tempo perdido por motivo (% do total)",
    chartKind: "rows",
    bars: [
      { label: "Setup", value: 38, display: "38%" },
      { label: "Falta de material", value: 24, display: "24%" },
      { label: "Falha mecânica", value: 18, display: "18%" },
      { label: "Ajuste de processo", value: 12, display: "12%" },
      { label: "Outros", value: 8, display: "8%" },
    ],
    footer: "Consumo energético por peça: 0,42 kWh nesta semana, contra 0,45 kWh na anterior.",
  },
]

export function ProductionDashboardDemo() {
  const [activeId, setActiveId] = useState(views[0].id)
  const view = views.find((item) => item.id === activeId) ?? views[0]
  const max = Math.max(...view.bars.map((bar) => bar.value), view.target ?? 0)

  return (
    <div className="data-panel rounded-[1.25rem] border border-white/10 p-3 sm:p-5">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5b84b]/35 bg-[#f5b84b]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#f5b84b]">
            <FlaskConical className="size-3.5" aria-hidden="true" />
            Dados demonstrativos
          </span>
          <p className="text-sm text-muted-foreground">Valores fictícios. Não representam resultados de clientes.</p>
        </div>
        <div className="grid grid-cols-3 rounded-xl bg-background/70 p-1" role="group" aria-label="Perfil do painel">
          {views.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={item.id === activeId}
              className={cn(
                "rounded-lg px-2 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:px-3",
                item.id === activeId ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5" aria-live="polite">
        <p className="font-heading text-lg font-semibold">{view.title}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {view.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/10 bg-background/60 p-4">
              <dt className="text-xs text-muted-foreground">{kpi.label}</dt>
              <dd className="font-heading mt-2 text-2xl font-semibold text-foreground">{kpi.value}</dd>
              <dd className="mt-1 text-xs text-muted-foreground">{kpi.hint}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 rounded-xl border border-white/10 bg-background/60 p-4">
          <p className="text-sm font-medium">{view.chartTitle}</p>

          {view.chartKind === "columns" ? (
            <ul className="mt-5 flex items-end gap-2 sm:gap-3">
              {view.bars.map((bar) => {
                const belowTarget = view.target !== undefined && bar.value < view.target
                return (
                  <li key={bar.label} className="flex flex-1 flex-col items-center gap-1.5">
                    <span className="sr-only">
                      {bar.label}: {bar.display} peças{view.target ? `, meta de ${view.target}` : ""}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground" aria-hidden="true">{bar.display}</span>
                    <span className="relative flex h-32 w-full items-end justify-center" aria-hidden="true">
                      {view.target && (
                        <span
                          className="absolute inset-x-0 border-t border-dashed border-[#f5b84b]/80"
                          style={{ bottom: `${(view.target / max) * 100}%` }}
                        />
                      )}
                      <span
                        className={cn("w-full max-w-10 rounded-t-md", belowTarget ? "bg-accent/55" : "bg-primary/80")}
                        style={{ height: `${(bar.value / max) * 100}%` }}
                      />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground" aria-hidden="true">{bar.label}</span>
                  </li>
                )
              })}
            </ul>
          ) : (
            <ul className="mt-4 grid gap-3">
              {view.bars.map((bar) => (
                <li key={bar.label} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3 text-sm sm:grid-cols-[9rem_1fr_auto]">
                  <span className="truncate text-muted-foreground">{bar.label}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                    <span className="block h-full rounded-full bg-gradient-to-r from-primary/85 to-accent/75" style={{ width: `${(bar.value / max) * 100}%` }} />
                  </span>
                  <span className="font-mono text-xs">{bar.display}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-4 text-xs leading-5 text-muted-foreground">{view.footer}</p>
      </div>
    </div>
  )
}
