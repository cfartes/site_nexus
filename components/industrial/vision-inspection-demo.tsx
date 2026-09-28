"use client"

import { useState } from "react"
import { Eye, EyeOff, Info } from "lucide-react"
import { InspectionIllustration, inspectionMarkers } from "@/components/industrial/inspection-illustration"

export function VisionInspectionDemo() {
  const [showMarkers, setShowMarkers] = useState(true)

  return (
    <div className="data-panel rounded-[1.25rem] border border-white/10 p-3 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-start gap-2 text-sm font-medium text-[#f5b84b]">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Demonstração ilustrativa — não representa uma inspeção real.
        </p>
        <button
          type="button"
          onClick={() => setShowMarkers((value) => !value)}
          aria-pressed={showMarkers}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {showMarkers ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
          {showMarkers ? "Ocultar marcações" : "Mostrar marcações"}
        </button>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <InspectionIllustration showMarkers={showMarkers} className="rounded-xl" />

        <div>
          <h3 className="font-heading text-lg font-semibold">O que a verificação registra</h3>
          <p className="mt-1 text-sm text-muted-foreground">Cada marcação corresponde a um critério definido para o processo.</p>
          <ol className="mt-4 grid gap-3">
            {inspectionMarkers.map((marker) => (
              <li key={marker.id} className="flex gap-3 rounded-xl border border-white/10 bg-background/60 p-3.5">
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#07130f]"
                  style={{ background: marker.color }}
                  aria-hidden="true"
                >
                  {marker.id}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{marker.title}</p>
                    <span
                      className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                      style={{ borderColor: `${marker.color}55`, color: marker.color }}
                    >
                      {marker.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{marker.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Em um projeto, imagem, horário, critério e resultado podem ser registrados e associados ao produto,
            lote ou ordem de produção.
          </p>
        </div>
      </div>
    </div>
  )
}
