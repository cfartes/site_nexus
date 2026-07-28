"use client"

import { useEffect, useState } from "react"
import {
  ArrowLeft,
  BarChart3,
  Database,
  EyeOff,
  PackageCheck,
  Radio,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react"

type VisualProps = {
  onComplete?: () => void
}

function useSequence(durations: number[], onComplete?: () => void) {
  const [phase, setPhase] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => {
        setPhase(durations.length)
        onComplete?.()
      }, 0)
      return () => window.clearTimeout(timer)
    }

    let elapsed = 0
    const timers = durations.map((duration, index) => {
      elapsed += duration
      return window.setTimeout(() => setPhase(index + 1), elapsed)
    })
    const completeTimer = window.setTimeout(() => onComplete?.(), elapsed + 250)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.clearTimeout(completeTimer)
    }
  }, [durations, onComplete, run])

  function replay() {
    setPhase(0)
    setRun((current) => current + 1)
  }

  return { phase, replay }
}

const survivalDurations = [3200, 2400, 2400, 2600, 3200]
const sourceDots = [
  { left: 13, top: 25, survives: true },
  { left: 25, top: 17, survives: false },
  { left: 34, top: 31, survives: true },
  { left: 18, top: 48, survives: false },
  { left: 31, top: 55, survives: true },
  { left: 12, top: 69, survives: false },
  { left: 25, top: 78, survives: true },
  { left: 38, top: 72, survives: false },
]

export function SurvivalVisual({ onComplete }: VisualProps) {
  const { phase, replay } = useSequence(survivalDurations, onComplete)
  const statuses = [
    "Observando o relatório",
    "Quatro sinais chegaram à análise",
    "Verificando a origem dos dados…",
    "Quatro sinais ficaram pelo caminho",
    "Visão incompleta identificada",
  ]
  const revealed = phase >= 3
  const resolved = phase >= survivalDurations.length

  return (
    <VisualFrame
      eyebrow="Viés de sobrevivência"
      status={statuses[Math.min(phase, statuses.length - 1)]}
      tone={resolved ? "primary" : revealed ? "warning" : "accent"}
      onReplay={replay}
    >
      <div className="zeno-diagram-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="absolute left-[7%] top-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        <Database className="size-3.5 text-accent" />
        eventos reais
      </div>
      <div className="absolute right-[7%] top-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        relatório
        <BarChart3 className="size-3.5 text-primary" />
      </div>

      <div className="absolute bottom-[18%] left-[7%] top-[18%] w-[36%] rounded-xl border border-white/10 bg-white/[0.025]">
        {sourceDots.map((dot, index) => (
          <span
            key={`${dot.left}-${dot.top}`}
            className={`absolute size-2.5 rounded-full border transition-all duration-700 ${
              dot.survives
                ? "border-accent/60 bg-accent/35 shadow-[0_0_14px_rgba(85,221,235,0.25)]"
                : revealed
                  ? "border-[#ff846f]/80 bg-[#ff6b5f]/20 shadow-[0_0_14px_rgba(255,107,95,0.2)]"
                  : "border-white/5 bg-white/[0.025] opacity-10"
            }`}
            style={{
              left: `${dot.left + 32}%`,
              top: `${dot.top}%`,
              transitionDelay: `${index * 55}ms`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-[18%] left-1/2 top-[18%] w-px -translate-x-1/2 border-l border-dashed border-white/15">
        <span
          className={`absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-colors duration-500 ${
            revealed
              ? "border-[#ff6b5f]/30 bg-[#ff6b5f]/10 text-[#ff846f]"
              : "border-accent/20 bg-accent/[0.07] text-accent"
          }`}
        >
          {revealed ? <EyeOff className="size-4" /> : <Search className="size-4" />}
        </span>
      </div>

      <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 600 336" preserveAspectRatio="none" aria-hidden="true">
        {[102, 139, 186, 229].map((y, index) => (
          <path
            key={y}
            d={`M 255 ${y} C 310 ${y}, 330 ${88 + index * 49}, 388 ${88 + index * 49}`}
            fill="none"
            stroke="rgba(85,221,235,0.35)"
            strokeWidth="1"
            strokeDasharray="4 5"
            className={`transition-opacity duration-700 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {[79, 165, 246, 272].map((y) => (
          <path
            key={y}
            d={`M 255 ${y} C 286 ${y}, 293 168, 303 168`}
            fill="none"
            stroke="rgba(255,107,95,0.38)"
            strokeWidth="1"
            strokeDasharray="3 5"
            className={`transition-opacity duration-700 ${revealed ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </svg>

      <div className="absolute bottom-[18%] right-[7%] top-[18%] w-[29%] rounded-xl border border-white/10 bg-white/[0.025] p-4">
        <div className="flex h-full items-end justify-center gap-2">
          {[42, 68, 51, 79].map((height, index) => (
            <span
              key={height}
              className="w-5 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary transition-[height,opacity] duration-700"
              style={{
                height: phase >= 1 ? `${height}%` : "4%",
                opacity: phase >= 1 ? 1 : 0.2,
                transitionDelay: `${index * 90}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-x-[8%] bottom-4 flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-center text-xs transition-all duration-500 ${
          resolved
            ? "border-primary/20 bg-primary/[0.07] text-primary opacity-100"
            : revealed
              ? "border-[#ff6b5f]/20 bg-[#ff6b5f]/[0.06] text-[#ff9b8d] opacity-100"
              : "translate-y-2 opacity-0"
        }`}
      >
        {resolved ? <Search className="size-3.5 shrink-0" /> : <EyeOff className="size-3.5 shrink-0" />}
        {resolved ? "O que não aparece também precisa entrar na decisão." : "Nem todo problema deixa rastros visíveis."}
      </div>
    </VisualFrame>
  )
}

const fermiDurations = [3200, 2400, 2400, 2600, 3200]
const signalNodes = [
  { left: 15, top: 27 },
  { left: 29, top: 19 },
  { left: 45, top: 31 },
  { left: 67, top: 19 },
  { left: 82, top: 35 },
  { left: 22, top: 59 },
  { left: 41, top: 71 },
  { left: 61, top: 58 },
  { left: 78, top: 72 },
]

export function FermiVisual({ onComplete }: VisualProps) {
  const { phase, replay } = useSequence(fermiDurations, onComplete)
  const statuses = [
    "Possibilidades por toda parte",
    "Nenhum resultado visível",
    "Procurando conexões…",
    "Um sinal acionável encontrado",
    "Potencial convertido em próxima ação",
  ]
  const scanning = phase >= 2
  const found = phase >= 3
  const resolved = phase >= fermiDurations.length

  return (
    <VisualFrame
      eyebrow="Paradoxo de Fermi"
      status={statuses[Math.min(phase, statuses.length - 1)]}
      tone={resolved ? "primary" : found ? "amber" : "accent"}
      onReplay={replay}
    >
      <div className="zeno-diagram-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        <Radio className={`size-3.5 ${scanning ? "animate-pulse text-accent motion-reduce:animate-none" : "text-muted-foreground"}`} />
        mapa de oportunidades
      </div>

      <div
        className={`absolute left-[61%] top-[58%] size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 transition-all duration-[1800ms] ${
          scanning ? "scale-[2.6] opacity-0" : "scale-0 opacity-70"
        }`}
      />

      <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 600 336" preserveAspectRatio="none" aria-hidden="true">
        {[
          "M 90 91 L 174 64 L 270 104",
          "M 270 104 L 402 64 L 492 118",
          "M 132 198 L 246 238 L 366 195 L 468 242",
          "M 270 104 L 366 195",
        ].map((path) => (
          <path
            key={path}
            d={path}
            fill="none"
            stroke={found ? "rgba(245,184,75,0.32)" : "rgba(85,221,235,0.22)"}
            strokeWidth="1"
            strokeDasharray="4 7"
            className={`transition-opacity duration-1000 ${scanning ? "opacity-100" : "opacity-15"}`}
          />
        ))}
      </svg>

      {signalNodes.map((node, index) => {
        const target = index === 7
        return (
          <span
            key={`${node.left}-${node.top}`}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-700 ${
              target && found
                ? "size-4 border-[#f5b84b] bg-[#f5b84b] shadow-[0_0_34px_rgba(245,184,75,0.75)]"
                : "size-2.5 border-accent/45 bg-accent/20 shadow-[0_0_15px_rgba(85,221,235,0.2)]"
            }`}
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              transitionDelay: `${index * 45}ms`,
            }}
          />
        )
      })}

      <div
        className={`absolute left-[61%] top-[58%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-[#f5b84b]/25 bg-[#1b160b]/90 px-3 py-2 text-[10px] text-[#f5b84b] shadow-[0_0_30px_rgba(245,184,75,0.16)] transition-all duration-500 ${
          found ? "translate-y-5 opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Sparkles className="size-3.5" />
        sinal conectado
      </div>

      <div
        className={`absolute inset-x-[8%] bottom-4 flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-center text-xs transition-all duration-500 ${
          resolved
            ? "border-primary/20 bg-primary/[0.07] text-primary opacity-100"
            : "translate-y-2 border-white/10 opacity-0"
        }`}
      >
        <Sparkles className="size-3.5 shrink-0" />
        Possibilidade encontrada. Próxima ação definida.
      </div>
    </VisualFrame>
  )
}

type ZenoPhase = {
  label: string
  runner: number
  stage: "approach" | "final-approach" | "pause" | "nexus" | "delivered"
}

const zenoPhases: ZenoPhase[] = [
  { runner: 8, label: "Distância inteira", stage: "approach" },
  { runner: 50, label: "1/2 restante", stage: "approach" },
  { runner: 71, label: "1/4 restante", stage: "approach" },
  { runner: 81.5, label: "1/8 restante", stage: "approach" },
  { runner: 86.75, label: "1/16 restante", stage: "approach" },
  { runner: 89.375, label: "1/32 restante", stage: "final-approach" },
  { runner: 90.6875, label: "1/64 restante", stage: "final-approach" },
  { runner: 91.34375, label: "1/128 restante", stage: "final-approach" },
  { runner: 91.671875, label: "1/256 restante", stage: "final-approach" },
  { runner: 91.671875, label: "Sempre existe mais uma etapa.", stage: "pause" },
  { runner: 91.671875, label: "Então mudamos a direção.", stage: "nexus" },
  { runner: 91.671875, label: "Entrega alcançada", stage: "delivered" },
]
const zenoDurations = [900, 780, 780, 900, 1150, 760, 760, 760, 1250, 1150, 1050]
const runnerGhosts = [8, 50, 71, 81.5, 86.75, 89.375, 90.6875, 91.34375]

export function ZenoVisual({ onComplete }: VisualProps) {
  const { phase, replay } = useSequence(zenoDurations, onComplete)
  const current = zenoPhases[Math.min(phase, zenoPhases.length - 1)]
  const resolved = current.stage === "delivered"
  const nearLimit = current.stage === "final-approach" || current.stage === "pause"
  const nexusArrived = current.stage === "nexus" || resolved
  const targetPosition = resolved ? current.runner : 92

  return (
    <VisualFrame
      eyebrow="Paradoxo de Zenão"
      status={current.label}
      tone={resolved ? "primary" : nearLimit ? "warning" : "accent"}
      onReplay={replay}
    >
      <div className="zeno-diagram-grid pointer-events-none absolute inset-0" />
      <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-white/15" />
      <div
        className={`absolute left-[8%] top-1/2 h-px transition-[width,background-color] duration-700 ease-out motion-reduce:transition-none ${
          nearLimit
            ? "bg-gradient-to-r from-accent/35 via-accent/70 to-[#ff6b5f]"
            : "bg-gradient-to-r from-primary/50 to-accent"
        }`}
        style={{ width: `calc(${current.runner}% - 8%)` }}
      />

      {runnerGhosts.map((position, index) => (
        <span
          key={position}
          className={`absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-background transition-opacity duration-500 ${
            index >= 4 ? "border-[#ff6b5f]/45" : "border-accent/35"
          } ${phase > index ? "opacity-55" : "opacity-0"}`}
          style={{ left: `${position}%` }}
        />
      ))}

      {[
        { left: "45%", top: "25%", label: "integração" },
        { left: "65%", top: "67%", label: "dependência" },
        { left: "78%", top: "25%", label: "decisão" },
      ].map((obstacle) => (
        <span
          key={obstacle.label}
          className={`absolute -translate-x-1/2 rounded-full border px-2.5 py-1 font-mono text-[9px] transition-opacity duration-500 ${
            nexusArrived
              ? "border-primary/15 text-primary/35 opacity-35"
              : "border-white/10 bg-white/[0.035] text-muted-foreground"
          }`}
          style={{ left: obstacle.left, top: obstacle.top }}
        >
          {obstacle.label}
        </span>
      ))}

      <div
        className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-[left] duration-700 ease-out motion-reduce:transition-none"
        style={{ left: `${current.runner}%` }}
      >
        <span
          className={`block size-5 rounded-full border-4 border-[#07100f] transition-all duration-500 ${
            resolved
              ? "bg-primary shadow-[0_0_34px_rgba(123,243,106,0.75)]"
              : nearLimit
                ? "bg-[#ff6b5f] shadow-[0_0_30px_rgba(255,107,95,0.65)]"
                : "bg-accent shadow-[0_0_28px_rgba(85,221,235,0.55)]"
          }`}
        />
        <span className="absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
          projeto
        </span>
      </div>

      <div
        className="absolute top-[16%] h-[68%] w-px transition-[left] duration-1000 ease-in-out motion-reduce:transition-none"
        style={{ left: `${targetPosition}%` }}
      >
        <span className={`absolute inset-0 block ${resolved ? "bg-primary shadow-[0_0_28px_rgba(123,243,106,0.45)]" : "bg-accent/70"}`} />
        <span className={`absolute -left-8 -top-7 font-mono text-[9px] uppercase tracking-[0.16em] ${resolved ? "text-primary" : "text-accent"}`}>
          entrega
        </span>
      </div>

      <div
        className={`absolute bottom-5 z-30 -translate-x-1/2 transition-all duration-1000 ease-in-out motion-reduce:transition-none ${
          nexusArrived ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ left: resolved ? `${current.runner}%` : "92%" }}
      >
        <div className="flex flex-col items-center">
          {!resolved && <ArrowLeft className="mb-1 size-4 animate-pulse text-primary motion-reduce:animate-none" />}
          <span className="rounded-full border border-primary/30 bg-[#0b1c16] px-3 py-1 font-heading text-xs font-bold tracking-tight text-primary shadow-[0_0_28px_rgba(123,243,106,0.18)]">
            nexus
          </span>
        </div>
      </div>

      {resolved && (
        <div className="absolute inset-x-3 bottom-16 z-40 flex justify-center sm:inset-x-0 sm:bottom-4">
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-[#0b1c16]/95 px-3 py-2 text-xs text-primary shadow-[0_12px_34px_rgba(0,0,0,0.35)] sm:px-4">
            <PackageCheck className="size-3.5" />
            A entrega chegou à operação
          </div>
        </div>
      )}
    </VisualFrame>
  )
}

type VisualFrameProps = {
  eyebrow: string
  status: string
  tone: "primary" | "accent" | "warning" | "amber"
  onReplay: () => void
  children: React.ReactNode
}

function VisualFrame({ eyebrow, status, tone, onReplay, children }: VisualFrameProps) {
  const toneClass = {
    primary: "text-primary",
    accent: "text-accent",
    warning: "text-[#ff6b5f]",
    amber: "text-[#f5b84b]",
  }[tone]

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#07100f]/90 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-6">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">{eyebrow}</p>
          <p className={`mt-1 font-mono text-[11px] transition-colors ${toneClass}`} role="status" aria-live="polite">
            {status}
          </p>
        </div>
        <button
          type="button"
          onClick={onReplay}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:border-primary/40 focus-visible:text-primary"
        >
          <RotateCcw className="size-3.5" />
          Rever
        </button>
      </div>
      <div className="relative mt-5 h-[21rem] overflow-hidden rounded-2xl border border-white/10 bg-background/65">
        {children}
      </div>
    </div>
  )
}
