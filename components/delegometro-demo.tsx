"use client"

import { useState } from "react"
import { Check, Gauge, Network, RotateCcw, Sparkles, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoNotice } from "@/components/demo-notice"
import { cn } from "@/lib/utils"

const accent = "#f47c6b"

type View = "coach" | "autonomia" | "painel"

const views: Array<{ id: View; label: string }> = [
  { id: "coach", label: "Coach de Delegação" },
  { id: "autonomia", label: "Escala de autonomia" },
  { id: "painel", label: "Meu Delegômetro" },
]

const conversation = [
  { from: "leader", text: "Quero que a Ana prepare a apresentação de resultados do mês." },
  { from: "coach", text: "Ótimo. O que exatamente a Ana precisa entregar, e até quando?" },
  { from: "leader", text: "Os slides com os números do mês, até sexta. Ela pode escolher o formato." },
  {
    from: "coach",
    text: "Pelo que você descreveu, eu sugeriria o nível 3 — Propor: ela monta e você aprova antes de sexta. Um checkpoint na quarta faz sentido?",
  },
] as const

const autonomyLevels = [
  { level: 1, name: "Executar", phrase: "Faça exatamente conforme orientado.", hint: "Ideal para atividades novas, críticas ou com alto risco de erro." },
  { level: 2, name: "Consultar", phrase: "Execute, mas consulte antes das principais decisões.", hint: "A pessoa conduz, você participa das decisões relevantes." },
  { level: 3, name: "Propor", phrase: "Analise e proponha uma solução para aprovação.", hint: "Desenvolve capacidade analítica e senso de dono." },
  { level: 4, name: "Decidir e informar", phrase: "Tome a decisão e depois me informe.", hint: "Ótimo passo para preparar sucessores." },
  { level: 5, name: "Autonomia total", phrase: "Decida e execute de forma autônoma.", hint: "A pessoa responde pelo resultado de ponta a ponta." },
]

const dimensions = [
  { label: "Delegação", value: 84 },
  { label: "Distribuição", value: 62 },
  { label: "Autonomia", value: 58 },
  { label: "Desenvolvimento", value: 75 },
  { label: "Acompanhamento", value: 81 },
]

const teamHighlights = [
  { icon: TrendingUp, title: "Ana Souza", text: "Autonomia média 2,1 → 3,4 em 3 meses" },
  { icon: Users, title: "Seu time", text: "5 pessoas com delegações de desenvolvimento no mês" },
  { icon: Network, title: "Sucessão", text: "2 pessoas prontas para assumir mais escopo" },
]

export function DelegometroDemo() {
  const [view, setView] = useState<View>("coach")
  const [visibleMessages, setVisibleMessages] = useState(1)
  const [level, setLevel] = useState(3)

  const agreementReady = visibleMessages === conversation.length
  const currentLevel = autonomyLevels.find((item) => item.level === level)!

  return (
    <div className="grid gap-4">
      <DemoNotice />
      <div className="data-panel rounded-[1.25rem] border border-white/10 p-3 sm:p-5">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
          <p className="inline-flex items-center gap-2 font-heading font-semibold">
            <Gauge className="size-5" style={{ color: accent }} aria-hidden="true" />
            Delegômetro
          </p>
          <div className="grid grid-cols-3 rounded-xl bg-background/70 p-1" role="group" aria-label="Área da demonstração">
            {views.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                aria-pressed={view === item.id}
                className={cn(
                  "rounded-lg px-2 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:px-3",
                  view === item.id ? "bg-[#f47c6b]/15 text-[#f47c6b]" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 min-h-[26rem]" aria-live="polite">
          {view === "coach" && (
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid content-start gap-3 text-sm">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="size-3.5" style={{ color: accent }} aria-hidden="true" /> Conversa com o Coach
                </p>
                {conversation.slice(0, visibleMessages).map((message) =>
                  message.from === "leader" ? (
                    <p key={message.text} className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#f47c6b]/15 px-4 py-2.5">
                      <span className="sr-only">Líder: </span>
                      {message.text}
                    </p>
                  ) : (
                    <p key={message.text} className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/10 bg-background/70 px-4 py-2.5">
                      <span className="sr-only">Coach: </span>
                      {message.text}
                    </p>
                  ),
                )}
                {agreementReady && (
                  <div className="flex flex-wrap items-center gap-2 rounded-xl border px-4 py-3" style={{ borderColor: `${accent}66`, background: `${accent}14` }}>
                    <Check className="size-4" style={{ color: accent }} aria-hidden="true" />
                    <span className="font-medium">Acordo montado</span>
                    <span className="rounded-full border border-white/15 px-2 py-0.5 font-mono text-xs">N3 · Propor</span>
                    <span className="text-muted-foreground">· Checkpoint na quarta</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  {!agreementReady ? (
                    <Button size="sm" className="bg-[#f47c6b] text-[#1a0b08] hover:bg-[#f47c6b]/90" onClick={() => setVisibleMessages((count) => count + 1)}>
                      Continuar conversa
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => setVisibleMessages(1)}>
                      <RotateCcw aria-hidden="true" /> Recomeçar
                    </Button>
                  )}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/60 p-5 text-sm leading-6 text-muted-foreground">
                <p className="font-heading text-base font-semibold text-foreground">O que o Coach faz</p>
                <ul className="mt-3 grid gap-2.5">
                  {[
                    "Conduz o acordo pelas etapas da metodologia CASAR.",
                    "Pergunta o que falta: resultado esperado, prazo e decisões que a pessoa pode tomar.",
                    "Sugere o nível de autonomia e os checkpoints.",
                    "A IA sugere e pede confirmação; a decisão é sempre do líder.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-1 size-3.5 shrink-0" style={{ color: accent }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {view === "autonomia" && (
            <div>
              <p className="text-sm text-muted-foreground">Cada delegação registra um nível de autonomia de 1 a 5. Selecione um nível:</p>
              <div className="mt-4 grid grid-cols-5 gap-2" role="group" aria-label="Nível de autonomia">
                {autonomyLevels.map((item) => (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setLevel(item.level)}
                    aria-pressed={level === item.level}
                    aria-label={`Nível ${item.level}: ${item.name}`}
                    className={cn(
                      "rounded-xl border px-2 py-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                      level >= item.level ? "border-[#f47c6b]/50 bg-[#f47c6b]/12 text-foreground" : "border-white/10 text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="block font-heading text-xl font-semibold">{item.level}</span>
                    <span className="mt-1 hidden text-[11px] sm:block">{item.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-background/60 p-5">
                <p className="font-mono text-xs" style={{ color: accent }}>Nível {currentLevel.level}</p>
                <p className="font-heading mt-1 text-2xl font-semibold">{currentLevel.name}</p>
                <p className="mt-3 text-lg">“{currentLevel.phrase}”</p>
                <p className="mt-2 text-sm text-muted-foreground">{currentLevel.hint}</p>
              </div>
            </div>
          )}

          {view === "painel" && (
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Meu Delegômetro</p>
                <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                  <ScoreGauge score={72} label="Líder Multiplicador" />
                  <dl className="grid w-full flex-1 gap-2.5">
                    {dimensions.map((dimension) => (
                      <div key={dimension.label}>
                        <div className="flex justify-between text-sm">
                          <dt className="text-muted-foreground">{dimension.label}</dt>
                          <dd className="font-semibold tabular-nums">{dimension.value}</dd>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.07]" aria-hidden="true">
                          <div className="h-full rounded-full" style={{ width: `${dimension.value}%`, background: accent }} />
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="grid content-start gap-3">
                {teamHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-background/60 p-4">
                    <item.icon className="mt-0.5 size-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs leading-5 text-muted-foreground">
                  Os scores são indicadores orientativos de desenvolvimento e não devem ser usados isoladamente para
                  decisões de promoção, demissão ou remuneração.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ScoreGauge({ score, label }: { score: number; label: string }) {
  const size = 168
  const radius = size / 2 - 12
  const circumference = Math.PI * radius
  const arc = `M 12 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 12} ${size / 2}`

  return (
    <div className="flex shrink-0 flex-col items-center">
      <svg width={size} height={size / 2 + 16} viewBox={`0 0 ${size} ${size / 2 + 16}`} role="img" aria-label={`Delegômetro ${score} de 100, ${label}`}>
        <path d={arc} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={14} strokeLinecap="round" />
        <path d={arc} fill="none" stroke={accent} strokeWidth={14} strokeLinecap="round" strokeDasharray={`${(circumference * score) / 100} ${circumference}`} />
        <text x={size / 2} y={size / 2 - 12} textAnchor="middle" fill="currentColor" fontSize={size / 4.5} fontWeight={700}>{score}</text>
        <text x={size / 2} y={size / 2 + 8} textAnchor="middle" fill="#9baea6" fontSize={11}>de 100</text>
      </svg>
      <span className="mt-1 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold">{label}</span>
    </div>
  )
}
