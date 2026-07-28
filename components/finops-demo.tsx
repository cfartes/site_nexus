"use client"

import { type CSSProperties, useEffect, useState } from "react"
import {
  Activity,
  ArrowDownRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  CloudCog,
  FileJson,
  FileText,
  FlaskConical,
  History,
  LoaderCircle,
  Play,
  RefreshCw,
  SearchCheck,
  Server,
  Sparkles,
  TrendingDown,
} from "lucide-react"
import { finopsRecommendations, finopsRuns } from "@/lib/demo-data"
import { Button } from "@/components/ui/button"

type View = "overview" | "audit" | "results"
type AuditState = "idle" | "running" | "complete"

const auditSteps = [
  { progress: 18, resource: "Validando exportação de custos…" },
  { progress: 42, resource: "Analisando VirtualMachines…" },
  { progress: 68, resource: "Analisando SQLDatabases…" },
  { progress: 86, resource: "Priorizando recomendações…" },
  { progress: 100, resource: "Auditoria demonstrativa concluída." },
]

const monthlyCosts = [71.4, 76.8, 74.2, 80.6, 79.3, 84.2]

export function FinOpsDemo() {
  const [view, setView] = useState<View>("overview")
  const [client, setClient] = useState("Nexus Retail")
  const [auditState, setAuditState] = useState<AuditState>("idle")
  const [progress, setProgress] = useState(0)
  const [currentResource, setCurrentResource] = useState("Pronto para processar o arquivo de exemplo.")
  const [reportReady, setReportReady] = useState(false)

  useEffect(() => {
    if (auditState !== "running") return

    let step = 0
    const timer = window.setInterval(() => {
      const next = auditSteps[step]
      setProgress(next.progress)
      setCurrentResource(next.resource)
      step += 1
      if (step === auditSteps.length) {
        window.clearInterval(timer)
        setAuditState("complete")
      }
    }, 480)

    return () => window.clearInterval(timer)
  }, [auditState])

  function startAudit() {
    setProgress(0)
    setReportReady(false)
    setCurrentResource("Preparando ambiente de análise…")
    setAuditState("running")
  }

  function resetDemo() {
    setView("overview")
    setClient("Nexus Retail")
    setAuditState("idle")
    setProgress(0)
    setCurrentResource("Pronto para processar o arquivo de exemplo.")
    setReportReady(false)
  }

  const productTheme = {
    "--background": "#e9eff2",
    "--foreground": "#1b2a38",
    "--card": "#f7fafc",
    "--card-foreground": "#1b2a38",
    "--primary": "#0f5f90",
    "--primary-foreground": "#ffffff",
    "--secondary": "#e2ebf2",
    "--secondary-foreground": "#17344d",
    "--muted": "#e8eef3",
    "--muted-foreground": "#5c7186",
    "--accent": "#1a74a8",
    "--accent-foreground": "#ffffff",
    "--border": "#cbd9e5",
    "--input": "#edf4fc",
    "--ring": "#0f5f90",
  } as CSSProperties

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-[#3c78a1]/45 bg-[#e9eff2] text-foreground shadow-[0_32px_100px_rgba(0,0,0,0.42)]"
      style={productTheme}
    >
      <header className="flex flex-col gap-4 bg-[linear-gradient(120deg,#0d3355,#164d75)] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#bfe2f7]">
            <CloudCog className="size-5" />
          </span>
          <div>
            <p className="font-heading font-semibold">FinOps Intelligence</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#b7cee3]">
              Ambiente de teste do produto
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#d9effc]">
            <span className="size-1.5 rounded-full bg-[#70dcaa]" />
            Sandbox ativo
          </span>
          <button
            type="button"
            onClick={resetDemo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-[#d9effc] transition-colors hover:bg-white/10"
          >
            <RefreshCw className="size-3.5" />
            Reiniciar demo
          </button>
        </div>
      </header>

      <div className="border-b border-[#cbd9e5] bg-[#f7fafc] px-4 py-3 sm:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <nav className="grid grid-cols-3 rounded-xl bg-[#e7eef4] p-1" aria-label="Áreas da demonstração">
            {([
              ["overview", "Visão geral", BarChart3],
              ["audit", "Executar auditoria", Play],
              ["results", "Resultados", SearchCheck],
            ] as const).map(([id, label, Icon]) => (
              <button
                key={id}
                onClick={() => setView(id)}
                aria-pressed={view === id}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                  view === id ? "bg-white text-[#0f5f90] shadow-sm" : "text-[#5c7186] hover:text-[#17344d]"
                }`}
              >
                <Icon className="size-4" />
                {label}
              </button>
            ))}
          </nav>

          <label className="flex items-center gap-2 text-xs text-[#425f77]">
            <Building2 className="size-4 text-[#0f5f90]" />
            Cliente demonstrativo
            <select
              value={client}
              onChange={(event) => setClient(event.target.value)}
              className="rounded-lg border border-[#bfd2e3] bg-[#edf4fc] px-3 py-2 font-medium text-[#17344d] outline-none focus:border-[#0f5f90]"
            >
              <option>Nexus Retail</option>
              <option>Atlas Health</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 bg-[radial-gradient(circle_at_12%_0%,#f8fbfd,#e9eff2_52%,#dde5e8)] p-3 sm:p-5">
        <div className="flex items-start gap-3 rounded-xl border border-[#d9b45e]/55 bg-[#fff8e6] px-4 py-3 text-sm text-[#765718]">
          <FlaskConical className="mt-0.5 size-4 shrink-0 text-[#a8740c]" />
          <span>
            <strong className="font-semibold">Demonstração com dados simulados.</strong> Custos, clientes, recursos e resultados são inteiramente fictícios.
          </span>
        </div>

        {view === "overview" && (
          <Overview
            client={client}
            onStart={() => setView("audit")}
            onResults={() => setView("results")}
          />
        )}
        {view === "audit" && (
          <Audit
            state={auditState}
            progress={progress}
            currentResource={currentResource}
            onStart={startAudit}
            onResults={() => setView("results")}
          />
        )}
        {view === "results" && (
          <Results
            reportReady={reportReady}
            onReport={() => setReportReady(true)}
            onAudit={() => setView("audit")}
          />
        )}
      </div>
    </div>
  )
}

function Overview({
  client,
  onStart,
  onResults,
}: {
  client: string
  onStart: () => void
  onResults: () => void
}) {
  const maxCost = Math.max(...monthlyCosts)
  const stats = [
    { label: "Custo analisado", value: "R$ 84,2 mil", detail: "última run simulada", icon: CircleDollarSign },
    { label: "Economia potencial", value: "R$ 12,8 mil", detail: "estimativa, não garantia", icon: TrendingDown },
    { label: "Recursos analisados", value: "148", detail: "Azure Cost Export", icon: Server },
    { label: "Recomendações", value: "17", detail: "priorizadas por impacto", icon: Sparkles },
  ]

  return (
    <div className="grid min-w-0 gap-4">
      <section className="min-w-0 rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0f5f90]">Dashboard executivo</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold text-[#17344d]">{client}</h2>
            <p className="mt-1 text-sm text-[#5c7186]">Resumo da última auditoria demonstrativa</p>
          </div>
          <Button onClick={onStart}>
            <Play className="size-4" />
            Executar auditoria de exemplo
          </Button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[#d6e0ea] bg-white p-4 shadow-[0_6px_18px_rgba(13,51,85,0.05)]">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#5c7186]">{stat.label}</p>
                <stat.icon className="size-4 text-[#1a74a8]" />
              </div>
              <p className="mt-3 font-mono text-2xl font-semibold text-[#17344d]">{stat.value}</p>
              <p className="mt-1 text-[11px] text-[#6b7a8a]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold text-[#17344d]">Custo analisado por período</h3>
              <p className="mt-1 text-xs text-[#5c7186]">Série fictícia dos últimos seis meses</p>
            </div>
            <span className="rounded-full bg-[#e3f1f8] px-3 py-1 font-mono text-[10px] text-[#0f5f90]">BRL</span>
          </div>
          <div className="mt-7 flex h-44 items-end gap-3">
            {monthlyCosts.map((value, index) => (
              <div key={value} className="flex h-full flex-1 flex-col items-center gap-2">
                <span className="font-mono text-[9px] text-[#5c7186]">{value.toFixed(1)}</span>
                <span className="flex min-h-0 w-full flex-1 items-end">
                  <span
                    className="w-full rounded-t-md bg-gradient-to-t from-[#0f5f90] to-[#38a6e0]"
                    style={{ height: `${Math.round((value / maxCost) * 100)}%` }}
                  />
                </span>
                <span className="font-mono text-[9px] text-[#6b7a8a]">M{index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-semibold text-[#17344d]">Última run</h3>
              <p className="mt-1 text-xs text-[#5c7186]">RUN-006 · concluída</p>
            </div>
            <Check className="size-5 text-[#16834c]" />
          </div>
          <div className="mt-5 grid gap-2">
            {[
              ["Arquivo", "azure-cost-junho.json"],
              ["Processados", "148 recursos"],
              ["Tempo simulado", "2m 18s"],
              ["Economia média", "15,2% estimados"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-[#e0e7ed] py-2.5 text-xs last:border-0">
                <span className="text-[#6b7a8a]">{label}</span>
                <span className="text-right font-medium text-[#29455e]">{value}</span>
              </div>
            ))}
          </div>
          <button onClick={onResults} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f5f90] hover:text-[#0c4b72]">
            Abrir resultados
            <ChevronRight className="size-4" />
          </button>
        </section>
      </div>
    </div>
  )
}

function Audit({
  state,
  progress,
  currentResource,
  onStart,
  onResults,
}: {
  state: AuditState
  progress: number
  currentResource: string
  onStart: () => void
  onResults: () => void
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#0f5f90]">Nova auditoria</p>
        <h2 className="font-heading mt-2 text-2xl font-semibold text-[#17344d]">Analisar exportação Azure</h2>
        <p className="mt-2 text-sm leading-6 text-[#5c7186]">
          A versão real aceita arquivos JSON, CSV e TXT. Nesta demonstração usamos um arquivo fictício já preparado.
        </p>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-[#9db9cf] bg-[#edf4fc] p-5 text-center">
          <FileJson className="mx-auto size-8 text-[#1a74a8]" />
          <p className="mt-3 text-sm font-semibold text-[#17344d]">azure-cost-junho.json</p>
          <p className="mt-1 text-xs text-[#5c7186]">148 recursos · arquivo demonstrativo</p>
          <span className="mt-3 inline-flex rounded-full bg-[#dcecf6] px-3 py-1 font-mono text-[10px] text-[#0f5f90]">
            Pré-carregado
          </span>
        </div>

        <label className="mt-5 grid gap-2 text-xs font-medium text-[#425f77]">
          Limite de recursos
          <select className="rounded-xl border border-[#bfd2e3] bg-[#edf4fc] px-3 py-3 text-sm outline-none focus:border-[#0f5f90]">
            <option>Todos os 148 recursos</option>
            <option>Primeiros 50 recursos</option>
            <option>Primeiros 100 recursos</option>
          </select>
        </label>

        <Button
          className="mt-5 w-full"
          onClick={onStart}
          disabled={state === "running"}
          aria-label={state === "complete" ? "Executar auditoria demonstrativa novamente" : "Iniciar auditoria demonstrativa"}
        >
          {state === "running" ? <LoaderCircle className="animate-spin" /> : <Play />}
          {state === "running" ? "Executando auditoria…" : state === "complete" ? "Executar novamente" : "Executar auditoria"}
        </Button>
      </section>

      <section className="rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0f5f90]">Processamento</p>
            <h2 className="font-heading mt-2 text-xl font-semibold text-[#17344d]">Status da auditoria</h2>
          </div>
          <span className={`rounded-full px-3 py-1 font-mono text-[10px] ${
            state === "complete"
              ? "bg-[#e2f5e9] text-[#116936]"
              : state === "running"
                ? "bg-[#e3f1f8] text-[#0f5f90]"
                : "bg-[#e8edf2] text-[#5c7186]"
          }`}>
            {state === "complete" ? "CONCLUÍDA" : state === "running" ? "EM EXECUÇÃO" : "AGUARDANDO"}
          </span>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-xs text-[#425f77]">
            <span>Progresso simulado</span>
            <span className="font-mono font-semibold">{progress}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#dbe8f5]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1a74a8] to-[#38a6e0] transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#d6e0ea] bg-white p-4 text-sm text-[#29455e]" role="status">
            {state === "running" ? (
              <LoaderCircle className="size-4 shrink-0 animate-spin text-[#1a74a8]" />
            ) : state === "complete" ? (
              <Check className="size-4 shrink-0 text-[#16834c]" />
            ) : (
              <Activity className="size-4 shrink-0 text-[#6b7a8a]" />
            )}
            {currentResource}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {[
            ["Processados", state === "complete" ? "148" : Math.round(progress * 1.48).toString()],
            ["Alertas", state === "complete" ? "17" : "—"],
            ["Tempo", state === "complete" ? "2m 18s" : state === "running" ? "simulando" : "—"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#d6e0ea] bg-white p-3">
              <p className="text-[10px] text-[#6b7a8a]">{label}</p>
              <p className="mt-1 font-mono text-lg font-semibold text-[#17344d]">{value}</p>
            </div>
          ))}
        </div>

        {state === "complete" && (
          <Button className="mt-6 w-full" variant="outline" onClick={onResults}>
            Ver recomendações priorizadas
            <ChevronRight />
          </Button>
        )}
      </section>
    </div>
  )
}

function Results({
  reportReady,
  onReport,
  onAudit,
}: {
  reportReady: boolean
  onReport: () => void
  onAudit: () => void
}) {
  return (
    <div className="grid min-w-0 gap-4">
      <section className="min-w-0 rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0f5f90]">RUN-006 · dados simulados</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold text-[#17344d]">Recomendações priorizadas</h2>
            <p className="mt-1 text-sm text-[#5c7186]">Oportunidades para avaliação humana, não economias garantidas.</p>
          </div>
          <Button className="h-auto w-full whitespace-normal py-2.5 sm:w-auto" variant="outline" onClick={onReport}>
            <FileText />
            {reportReady ? "Relatório demonstrativo pronto" : "Gerar relatório demonstrativo"}
          </Button>
        </div>

        {reportReady && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#a7d8b9] bg-[#ecf8f0] px-4 py-3 text-sm text-[#116936]" role="status">
            <Check className="size-4" />
            Relatório executivo simulado gerado para esta run.
          </div>
        )}

        <div className="mt-6 grid gap-3">
          {finopsRecommendations.map((item) => (
            <article key={item.resource} className="min-w-0 rounded-xl border border-[#d6e0ea] bg-white p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e3f1f8] text-[#0f5f90]">
                    <Server className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-[#5c7186]">{item.service}</p>
                    <h3 className="mt-1 font-mono text-sm font-semibold text-[#17344d]">{item.resource}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#fff1d6] px-2.5 py-1 font-mono text-[10px] text-[#8a5b00]">{item.impact}</span>
                  <span className="rounded-full bg-[#e3f1f8] px-2.5 py-1 font-mono text-[10px] text-[#0f5f90]">{item.savings}</span>
                </div>
              </div>
              <div className="mt-4 grid gap-3 border-t border-[#e0e7ed] pt-4 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7a8a]">Diagnóstico</p>
                  <p className="mt-1 text-sm leading-6 text-[#425f77]">{item.diagnosis}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7a8a]">Recomendação</p>
                  <p className="mt-1 text-sm leading-6 text-[#425f77]">{item.recommendation}</p>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#0f5f90]">
                <ArrowDownRight className="size-3.5" />
                {item.estimatedValue} de oportunidade estimada
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="min-w-0 rounded-2xl border border-[#cbd9e5] bg-[#f7fafc] p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <History className="size-5 text-[#0f5f90]" />
          <div>
            <h2 className="font-heading font-semibold text-[#17344d]">Histórico de runs</h2>
            <p className="mt-1 text-xs text-[#5c7186]">Comparativo fictício das últimas execuções</p>
          </div>
        </div>
        <div className="mt-5 grid gap-2 sm:hidden">
          {finopsRuns.map((run) => (
            <div key={run.id} className="rounded-xl border border-[#d6e0ea] bg-white p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-semibold text-[#17344d]">{run.id}</span>
                <span className="rounded-full bg-[#e2f5e9] px-2 py-1 text-[9px] font-semibold text-[#116936]">Concluída</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div><p className="text-[#6b7a8a]">Período</p><p className="mt-1 text-[#29455e]">{run.period}</p></div>
                <div><p className="text-[#6b7a8a]">Recursos</p><p className="mt-1 text-[#29455e]">{run.resources}</p></div>
                <div><p className="text-[#6b7a8a]">Custo analisado</p><p className="mt-1 text-[#29455e]">{run.cost}</p></div>
                <div><p className="text-[#6b7a8a]">Potencial estimado</p><p className="mt-1 font-medium text-[#0f5f90]">{run.potential}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 hidden min-w-0 max-w-full overflow-x-auto sm:block">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-[#cbd9e5] text-xs text-[#5c7186]">
                <th className="px-3 py-3 font-medium">Run</th>
                <th className="px-3 py-3 font-medium">Período</th>
                <th className="px-3 py-3 font-medium">Recursos</th>
                <th className="px-3 py-3 font-medium">Custo analisado</th>
                <th className="px-3 py-3 font-medium">Potencial estimado</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {finopsRuns.map((run) => (
                <tr key={run.id} className="border-b border-[#e0e7ed] last:border-0">
                  <td className="px-3 py-3 font-mono font-semibold text-[#17344d]">{run.id}</td>
                  <td className="px-3 py-3 text-[#425f77]">{run.period}</td>
                  <td className="px-3 py-3 text-[#425f77]">{run.resources}</td>
                  <td className="px-3 py-3 text-[#425f77]">{run.cost}</td>
                  <td className="px-3 py-3 font-medium text-[#0f5f90]">{run.potential}</td>
                  <td className="px-3 py-3"><span className="rounded-full bg-[#e2f5e9] px-2 py-1 text-[10px] font-semibold text-[#116936]">Concluída</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={onAudit} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f5f90] hover:text-[#0c4b72]">
          Executar outra auditoria
          <ChevronRight className="size-4" />
        </button>
      </section>
    </div>
  )
}
