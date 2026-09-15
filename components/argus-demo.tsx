"use client"

import { type CSSProperties, useEffect, useState } from "react"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  FlaskConical,
  GitPullRequest,
  Gauge,
  LoaderCircle,
  Radar,
  RefreshCw,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import { argusAutoFix, argusCapacities, argusConsumption, argusExecutions, argusWorkspaces } from "@/lib/demo-data"
import { Button } from "@/components/ui/button"

type View = "overview" | "monitor" | "autofix"
type AutoFixState = "idle" | "detecting" | "analyzing" | "ready" | "submitted"

const autoFixSteps = [
  { id: "detect", label: "Detecta", state: "detecting" as AutoFixState },
  { id: "analyze", label: "Analisa", state: "analyzing" as AutoFixState },
  { id: "recommend", label: "Recomenda", state: "ready" as AutoFixState },
  { id: "propose", label: "Propõe correção", state: "ready" as AutoFixState },
  { id: "submit", label: "Submete à aprovação", state: "submitted" as AutoFixState },
]

export function ArgusDemo() {
  const [view, setView] = useState<View>("overview")
  const [autoFixState, setAutoFixState] = useState<AutoFixState>("idle")

  useEffect(() => {
    if (autoFixState !== "detecting" && autoFixState !== "analyzing") return
    const timer = window.setTimeout(() => {
      setAutoFixState((current) => (current === "detecting" ? "analyzing" : "ready"))
    }, 750)
    return () => window.clearTimeout(timer)
  }, [autoFixState])

  function runAutoFix() {
    setAutoFixState("detecting")
  }

  function submitForApproval() {
    setAutoFixState("submitted")
  }

  function resetDemo() {
    setView("overview")
    setAutoFixState("idle")
  }

  const productTheme = {
    "--background": "#0b0f1a",
    "--foreground": "#e7eaf7",
    "--card": "#121729",
    "--card-foreground": "#e7eaf7",
    "--primary": "#8b7cf6",
    "--primary-foreground": "#0b0f1a",
    "--secondary": "#1b2138",
    "--secondary-foreground": "#e7eaf7",
    "--muted": "#181e33",
    "--muted-foreground": "#9aa3c2",
    "--accent": "#38bdf8",
    "--accent-foreground": "#0b0f1a",
    "--border": "rgba(139, 124, 246, 0.28)",
    "--input": "#121729",
    "--ring": "#8b7cf6",
  } as CSSProperties

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-[#8b7cf6]/30 bg-[#0b0f1a] text-foreground shadow-[0_32px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(139,124,246,0.06)]"
      style={productTheme}
    >
      <header className="flex flex-col gap-4 border-b border-[#8b7cf6]/20 bg-[linear-gradient(120deg,#12162a,#181d3a)] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-[#8b7cf6]/30 bg-[#8b7cf6]/12 text-[#c3b8ff] shadow-[0_0_18px_rgba(139,124,246,0.15)]">
            <Radar className="size-5" />
          </span>
          <div>
            <p className="font-heading font-semibold">Argus Sentinel</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#a9b0d6]">
              Ambiente de teste do produto
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#d8dcf5]">
            <span className="size-1.5 rounded-full bg-[#70dcaa]" />
            Sandbox ativo
          </span>
          <button
            type="button"
            onClick={resetDemo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-[#d8dcf5] transition-colors hover:bg-white/10"
          >
            <RefreshCw className="size-3.5" />
            Reiniciar demo
          </button>
        </div>
      </header>

      <div className="border-b border-white/10 bg-[#121729] px-4 py-3 sm:px-5">
        <nav className="grid grid-cols-3 rounded-xl bg-[#181e33] p-1" aria-label="Áreas da demonstração">
          {(
            [
              ["overview", "Dashboard", Gauge],
              ["monitor", "Monitoramento", Activity],
              ["autofix", "Auto-Fix", Wrench],
            ] as const
          ).map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => setView(id)}
              aria-pressed={view === id}
              className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                view === id ? "bg-[#8b7cf6]/18 text-[#c3b8ff]" : "text-[#9aa3c2] hover:text-[#e7eaf7]"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid min-w-0 gap-4 bg-[radial-gradient(circle_at_12%_0%,#161c33,#0f1425_55%,#0b0f1a)] p-3 sm:p-5">
        <div className="flex items-start gap-3 rounded-xl border border-[#f0c668]/25 bg-[#f0c668]/[0.06] px-4 py-3 text-sm text-[#e5d9ac]">
          <FlaskConical className="mt-0.5 size-4 shrink-0 text-[#f0c668]" />
          <span>
            <strong className="font-medium text-[#f6dda1]">Demonstração com dados simulados.</strong> Capacidades,
            workspaces, falhas e correções apresentadas são inteiramente fictícias.
          </span>
        </div>

        {view === "overview" && <Overview onMonitor={() => setView("monitor")} onAutoFix={() => setView("autofix")} />}
        {view === "monitor" && <Monitor onAutoFix={() => setView("autofix")} />}
        {view === "autofix" && (
          <AutoFix state={autoFixState} onRun={runAutoFix} onSubmit={submitForApproval} />
        )}
      </div>
    </div>
  )
}

function Overview({ onMonitor, onAutoFix }: { onMonitor: () => void; onAutoFix: () => void }) {
  const attention = argusCapacities.filter((capacity) => capacity.status === "Atenção").length
  const failures = argusExecutions.filter((execution) => execution.status === "Falha").length
  const maxConsumption = Math.max(...argusConsumption)

  const stats = [
    { label: "Workspaces monitorados", value: "52", detail: "ambiente demonstrativo", icon: ServerCog },
    { label: "Ativos sob gestão", value: "874", detail: "relatórios, pipelines e notebooks", icon: ShieldCheck },
    { label: "Eventos analisados (7d)", value: "1,4 mi", detail: "acessos e execuções", icon: BarChart3 },
    { label: "Falhas em aberto", value: String(failures), detail: "aguardando Auto-Fix", icon: AlertTriangle },
  ]

  return (
    <div className="grid min-w-0 gap-4">
      <section
        className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm ${
          attention > 0
            ? "border-[#f0c668]/30 bg-[#f0c668]/[0.07] text-[#f6dda1]"
            : "border-[#70dcaa]/25 bg-[#70dcaa]/[0.06] text-[#bdf3da]"
        }`}
        role="status"
      >
        <AlertTriangle className="mt-0.5 size-4 shrink-0" />
        <span>
          <strong className="font-semibold">{attention > 0 ? "Ambiente com atenção." : "Ambiente saudável."}</strong>{" "}
          {attention} capacidade(s) com consumo ou delay elevado · {failures} falha(s) de execução recente.
        </span>
      </section>

      <section className="min-w-0 rounded-2xl border border-white/10 bg-card/70 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c3b8ff]">Dashboard executivo</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold">Power Monitor · ambiente demo</h2>
            <p className="mt-1 text-sm text-muted-foreground">Saúde, capacidade e consumo em uma única visão</p>
          </div>
          <Button onClick={onAutoFix} variant="outline">
            <Wrench className="size-4" />
            Ver falhas e correções
          </Button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-background/45 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <stat.icon className="size-4 text-[#8b7cf6]" />
              </div>
              <p className="mt-3 font-mono text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold">Consumo da capacidade</h3>
              <p className="mt-1 text-xs text-muted-foreground">CU% acumulado · série fictícia das últimas 12 janelas</p>
            </div>
            <span className="rounded-full bg-[#8b7cf6]/10 px-3 py-1 font-mono text-[10px] text-[#c3b8ff]">CU %</span>
          </div>
          <div className="mt-7 flex h-40 items-end gap-2">
            {argusConsumption.map((value, index) => (
              <div key={`${value}-${index}`} className="flex h-full flex-1 flex-col items-center gap-2">
                <span className="flex min-h-0 w-full flex-1 items-end">
                  <span
                    className="w-full rounded-t-md bg-gradient-to-t from-[#5a4fd6] to-[#8b7cf6]"
                    style={{ height: `${Math.round((value / maxConsumption) * 100)}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold">Capacidades</h3>
              <p className="mt-1 text-xs text-muted-foreground">SKU, saúde e utilização</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {argusCapacities.map((capacity) => (
              <div key={capacity.name} className="rounded-xl border border-white/10 bg-background/45 p-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-sm font-semibold">{capacity.name}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      SKU {capacity.sku} · {capacity.workspaces} workspaces · {capacity.items} itens
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[9px] ${
                      capacity.status === "Saudável"
                        ? "bg-[#70dcaa]/12 text-[#8fe8bd]"
                        : "bg-[#f0c668]/15 text-[#f0c668]"
                    }`}
                  >
                    {capacity.status}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-muted-foreground sm:grid-cols-4">
                  {(
                    [
                      ["Background", capacity.background],
                      ["Interativo", capacity.interactive],
                      ["Delay >20s", capacity.delay],
                      ["Rejeição", capacity.rejection],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label}>
                      <p>{label}</p>
                      <p className="mt-1 font-mono text-xs font-medium text-foreground">{value}%</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={onMonitor} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c3b8ff] hover:text-[#e7eaf7]">
            Ver monitoramento detalhado
            <ChevronRight className="size-4" />
          </button>
        </section>
      </div>

      <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
        <h3 className="font-heading font-semibold">Workspaces monitorados</h3>
        <p className="mt-1 text-xs text-muted-foreground">Inventário fictício com uso recente</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {argusWorkspaces.map((workspace) => (
            <div key={workspace.name} className="rounded-xl border border-white/10 bg-background/45 p-3.5">
              <p className="truncate text-sm font-medium">{workspace.name}</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{workspace.items} itens</span>
                <span>{workspace.events.toLocaleString("pt-BR")} eventos</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Monitor({ onAutoFix }: { onAutoFix: () => void }) {
  return (
    <div className="grid min-w-0 gap-4">
      <section className="min-w-0 rounded-2xl border border-white/10 bg-card/70 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c3b8ff]">Atualizações e execuções</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold">Execuções recentes</h2>
            <p className="mt-1 text-sm text-muted-foreground">Pipelines, notebooks e datasets · ambiente demonstrativo</p>
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {argusExecutions.map((execution) => (
            <div
              key={`${execution.workspace}-${execution.item}`}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-background/45 p-3.5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg ${
                    execution.status === "OK"
                      ? "bg-[#70dcaa]/12 text-[#8fe8bd]"
                      : execution.status === "Falha"
                        ? "bg-[#f87171]/12 text-[#f87171]"
                        : "bg-[#38bdf8]/12 text-[#7fd4f7]"
                  }`}
                >
                  {execution.status === "OK" ? (
                    <CheckCircle2 className="size-4" />
                  ) : execution.status === "Falha" ? (
                    <AlertTriangle className="size-4" />
                  ) : (
                    <LoaderCircle className="size-4 animate-spin" />
                  )}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{execution.item}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {execution.workspace} · {execution.type} · {execution.when}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-11 sm:pl-0">
                <span className="font-mono text-[10px] text-muted-foreground">{execution.duration}</span>
                {execution.status === "Falha" ? (
                  <Button size="sm" variant="outline" onClick={onAutoFix}>
                    <Wrench className="size-3.5" />
                    Investigar
                  </Button>
                ) : (
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[9px] ${
                      execution.status === "OK" ? "bg-[#70dcaa]/12 text-[#8fe8bd]" : "bg-[#38bdf8]/12 text-[#7fd4f7]"
                    }`}
                  >
                    {execution.status === "OK" ? "OK" : "EM EXECUÇÃO"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function AutoFix({
  state,
  onRun,
  onSubmit,
}: {
  state: AutoFixState
  onRun: () => void
  onSubmit: () => void
}) {
  const stepOrder: AutoFixState[] = ["detecting", "analyzing", "ready", "ready", "submitted"]
  const currentIndex = state === "idle" ? -1 : stepOrder.lastIndexOf(state)

  return (
    <div className="grid min-w-0 gap-4">
      <section className="min-w-0 rounded-2xl border border-white/10 bg-card/70 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#c3b8ff]">Auto-Fix PRs</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold">Correção assistida por IA</h2>
            <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
              Quando um notebook falha, o Argus investiga a causa e prepara uma proposta de correção para revisão
              humana antes de qualquer alteração.
            </p>
          </div>
          <Button
            onClick={onRun}
            disabled={state !== "idle" && state !== "submitted"}
            aria-label={state === "submitted" ? "Executar Auto-Fix novamente" : "Executar Auto-Fix"}
          >
            {state === "detecting" || state === "analyzing" ? <LoaderCircle className="animate-spin" /> : <Search />}
            {state === "idle"
              ? "Executar Auto-Fix"
              : state === "submitted"
                ? "Executar novamente"
                : "Investigando…"}
          </Button>
        </div>

        <div className="mt-7 grid grid-cols-5 gap-2">
          {autoFixSteps.map((step, index) => {
            const done = currentIndex > index || (currentIndex === index && step.id === "submit")
            const active =
              (state === "detecting" && step.id === "detect") ||
              (state === "analyzing" && step.id === "analyze") ||
              (state === "ready" && (step.id === "recommend" || step.id === "propose")) ||
              (state === "submitted" && step.id === "submit")
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 text-center">
                <span
                  className={`flex size-8 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors ${
                    done || active
                      ? step.id === "submit" && done
                        ? "border-[#70dcaa]/60 bg-[#70dcaa]/15 text-[#8fe8bd]"
                        : "border-[#8b7cf6]/60 bg-[#8b7cf6]/15 text-[#c3b8ff]"
                      : "border-white/10 bg-background/45 text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="size-4" /> : active ? <LoaderCircle className="size-4 animate-spin" /> : <CircleDashed className="size-4" />}
                </span>
                <span className={`text-[10px] leading-4 ${done || active ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {state === "idle" && (
        <section className="rounded-2xl border border-dashed border-white/15 bg-card/40 p-8 text-center">
          <Wrench className="mx-auto size-7 text-[#8b7cf6]" />
          <p className="mt-4 text-sm font-medium">Nenhuma investigação em andamento</p>
          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
            Execute o Auto-Fix para ver o Argus diagnosticar a falha de <strong>{argusAutoFix.notebook}</strong> e
            propor uma correção.
          </p>
        </section>
      )}

      {(state === "detecting" || state === "analyzing") && (
        <section className="rounded-2xl border border-white/10 bg-card/70 p-6 text-center">
          <LoaderCircle className="mx-auto size-7 animate-spin text-[#8b7cf6]" />
          <p className="mt-4 text-sm font-medium">
            {state === "detecting" ? "Coletando contexto da falha…" : "Analisando causa raiz…"}
          </p>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">{argusAutoFix.notebook}</p>
        </section>
      )}

      {(state === "ready" || state === "submitted") && (
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="min-w-0 rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#f87171]/12 text-[#f87171]">
                <AlertTriangle className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{argusAutoFix.workspace}</p>
                <h3 className="mt-1 font-mono text-sm font-semibold">{argusAutoFix.notebook}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{argusAutoFix.error}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f87171]/12 px-2.5 py-1 font-mono text-[10px] text-[#f87171]">
                {argusAutoFix.failures14d} falhas em 14d
              </span>
              <span className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                regra: {argusAutoFix.rule}
              </span>
            </div>
            <div className="mt-5 grid gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Diagnóstico</p>
                <p className="mt-1 text-sm leading-6 text-foreground/85">{argusAutoFix.diagnosis}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Recomendação</p>
                <p className="mt-1 text-sm leading-6 text-foreground/85">{argusAutoFix.recommendation}</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#8b7cf6]/12 text-[#c3b8ff]">
                <GitPullRequest className="size-4" />
              </span>
              <div>
                <h3 className="font-heading font-semibold">Correção proposta</h3>
                <p className="mt-1 text-xs text-muted-foreground">Pull request preparado para revisão</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-background/45 p-3.5">
              <p className="font-mono text-xs text-muted-foreground">branch</p>
              <p className="mt-1 truncate font-mono text-xs font-medium">{argusAutoFix.prBranch}</p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-background/45 p-3.5 text-xs text-muted-foreground">
              <Sparkles className="size-4 shrink-0 text-[#8b7cf6]" />
              A decisão continua com o time: a correção só é aplicada após aprovação humana no fluxo de revisão.
            </div>
            {state === "submitted" ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#70dcaa]/30 bg-[#70dcaa]/[0.08] px-4 py-3 text-sm text-[#8fe8bd]" role="status">
                <Check className="size-4" />
                PR aberto e aguardando aprovação do time.
              </div>
            ) : (
              <Button className="mt-4 w-full" onClick={onSubmit}>
                <GitPullRequest className="size-4" />
                Submeter à aprovação
              </Button>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
