"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  Database,
  FileJson,
  FileText,
  LoaderCircle,
  Play,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveSurface } from "@/components/interactive-surface"

const capabilities = [
  { title: "Governança", description: "Confiança e controle", href: "#servico-governanca", icon: ShieldCheck },
  { title: "Engenharia", description: "Pipelines e arquitetura", href: "#servico-engenharia", icon: Database },
  { title: "Analytics", description: "Indicadores que orientam", href: "#servico-analytics", icon: BarChart3 },
  { title: "IA aplicada", description: "Modelos em operação", href: "#servico-ia", icon: Brain },
]

export function HeroSection() {
  const [product, setProduct] = useState<"wiki" | "finops">("wiki")

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
      <div className="site-grid pointer-events-none absolute inset-0" />
      <div className="ambient-orb pointer-events-none absolute left-[10%] top-28 size-[28rem] rounded-full bg-primary/10" />
      <div className="ambient-orb pointer-events-none absolute right-[8%] top-16 size-[32rem] rounded-full bg-accent/10 [animation-delay:-6s]" />

      <div className="relative mx-auto min-h-[calc(100vh-7rem)] max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
          <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 font-mono text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Estratégia, dados e IA aplicada
          </div>
          <h1 className="font-heading max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Transforme dados em </span>
            <span className="gradient-text block">vantagem competitiva</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Estruturamos dados, conectamos conhecimento e revelamos oportunidades de economia
            para que decisões importantes deixem de depender de planilhas dispersas e suposições.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="button-sheen group w-full shadow-[0_0_36px_rgba(123,243,106,0.18)] sm:w-auto" asChild>
              <Link href="#contato">
                Fale com um especialista
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full border-white/15 bg-white/[0.025] sm:w-auto" asChild>
              <Link href="#produtos">Explorar produtos</Link>
            </Button>
          </div>

          </div>

          <div>
            <InteractiveSurface className="data-panel rounded-[1.25rem] border border-white/10 p-3 sm:p-5">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-heading text-sm font-semibold">Veja os produtos em ação</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">Demonstração com dados simulados</p>
                </div>
                <div className="grid grid-cols-2 rounded-xl bg-background/70 p-1">
                  <button
                    onClick={() => setProduct("wiki")}
                    aria-pressed={product === "wiki"}
                    className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${product === "wiki" ? "bg-accent/15 text-accent" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    AI Wiki
                  </button>
                  <button
                    onClick={() => setProduct("finops")}
                    aria-pressed={product === "finops"}
                    className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${product === "finops" ? "bg-[#f5b84b]/15 text-[#f5b84b]" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    FinOps
                  </button>
                </div>
              </div>

              <div className="mt-4 min-h-[28rem]">
                <div className={product === "wiki" ? "block" : "hidden"} aria-hidden={product !== "wiki"}>
                  <WikiPreview />
                </div>
                <div className={product === "finops" ? "block" : "hidden"} aria-hidden={product !== "finops"}>
                  <FinOpsPreview />
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <Link
                  href={product === "wiki" ? "/produtos/ai-wiki" : "/produtos/finops"}
                  className={`group flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    product === "wiki"
                      ? "border-accent/20 bg-accent/[0.055] text-accent hover:border-accent/45"
                      : "border-[#f5b84b]/20 bg-[#f5b84b]/[0.055] text-[#f5b84b] hover:border-[#f5b84b]/45"
                  }`}
                >
                  {product === "wiki" ? "Testar demonstração do AI Wiki" : "Testar demonstração do FinOps"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </InteractiveSurface>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Como podemos ajudar</p>
          <nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Áreas de atuação">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.045] focus-visible:border-primary/50"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary transition-shadow group-hover:shadow-[0_0_24px_rgba(123,243,106,0.18)]">
                  <item.icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                </span>
                <ArrowRight className="size-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

function WikiPreview() {
  const [state, setState] = useState<"idle" | "querying" | "done">("idle")

  useEffect(() => {
    if (state !== "querying") return
    const timer = window.setTimeout(() => setState("done"), 850)
    return () => window.clearTimeout(timer)
  }, [state])

  function runQuery() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("done")
      return
    }
    setState("querying")
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/[0.055] p-4">
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <BookOpen className="size-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Pergunta de exemplo</p>
          <p className="mt-1 text-sm font-medium">Como funciona o processo de onboarding?</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-background/55 p-5" aria-live="polite">
        {state === "idle" && (
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <BookOpen className="size-7 text-accent" />
            <p className="mt-4 text-sm font-medium">Consulte a base demonstrativa</p>
            <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
              Veja o AI Wiki localizar informações e indicar os documentos utilizados.
            </p>
            <Button className="mt-5 w-full" variant="outline" onClick={runQuery}>
              <SearchCheck />
              Consultar base de exemplo
            </Button>
          </div>
        )}

        {state === "querying" && (
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <LoaderCircle className="size-7 animate-spin text-accent" />
            <p className="mt-4 text-sm font-medium">Consultando 2 fontes simuladas…</p>
            <p className="mt-2 font-mono text-[10px] text-muted-foreground">Buscando trechos relevantes</p>
          </div>
        )}

        {state === "done" && (
          <>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-accent">
              <Check className="size-3.5" />
              Resposta encontrada com fontes
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              O onboarding começa com a preparação dos acessos, segue pela integração com a equipe
              e termina com um acompanhamento após 30 dias.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {["Manual de onboarding", "Política de acessos"].map((source) => (
                <div key={source} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <FileText className="mb-2 size-3.5 text-accent" />
                  <p className="text-[10px] text-muted-foreground">Fonte consultada</p>
                  <p className="mt-1 text-[11px] font-medium">{source}</p>
                </div>
              ))}
            </div>
            <button onClick={runQuery} className="mt-4 text-xs text-accent transition-colors hover:text-foreground">
              Consultar novamente
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function FinOpsPreview() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle")
  const [processed, setProcessed] = useState(0)

  useEffect(() => {
    if (state !== "running") return

    const timers = [
      window.setTimeout(() => setProcessed(47), 220),
      window.setTimeout(() => setProcessed(103), 520),
      window.setTimeout(() => {
        setProcessed(148)
        setState("done")
      }, 900),
    ]

    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [state])

  function runAudit() {
    setProcessed(0)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProcessed(148)
      setState("done")
      return
    }
    setState("running")
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3 rounded-xl border border-[#f5b84b]/20 bg-[#f5b84b]/[0.055] p-4">
        <FileJson className="size-5 shrink-0 text-[#f5b84b]" />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground">Exportação Azure demonstrativa</p>
          <p className="mt-1 truncate font-mono text-xs font-medium">azure-cost-junho.json</p>
        </div>
        <span className="rounded-full bg-[#f5b84b]/10 px-2.5 py-1 font-mono text-[9px] text-[#f5b84b]">148 recursos</span>
      </div>

      <div className="rounded-xl border border-white/10 bg-background/55 p-5" aria-live="polite">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {state === "running" ? (
              <LoaderCircle className="size-5 animate-spin text-[#f5b84b]" />
            ) : (
              <Play className="size-5 text-[#f5b84b]" />
            )}
            <div>
              <p className="text-sm font-medium">{state === "done" ? "Auditoria concluída" : state === "running" ? "Analisando recursos…" : "Arquivo pronto para análise"}</p>
              <p className="mt-1 font-mono text-[10px] text-muted-foreground">{processed} de 148 recursos processados</p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#f5b84b]">{Math.round((processed / 148) * 100)}%</span>
        </div>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#b87814] to-[#f5b84b] transition-[width] duration-300"
            style={{ width: `${(processed / 148) * 100}%` }}
          />
        </div>
        <Button className="mt-5 w-full border-[#f5b84b]/25 text-[#f5b84b] hover:bg-[#f5b84b]/10 hover:text-[#ffd889]" variant="outline" onClick={runAudit} disabled={state === "running"}>
          <Play />
          {state === "done" ? "Analisar novamente" : state === "running" ? "Auditoria em andamento…" : "Analisar arquivo de exemplo"}
        </Button>
      </div>

      <div className={`rounded-xl border p-4 transition-colors ${
        state === "done"
          ? "border-[#f5b84b]/30 bg-[#f5b84b]/[0.07]"
          : "border-white/10 bg-white/[0.025]"
      }`}>
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#f5b84b]" />
          <div className="min-w-0 flex-1">
            {state === "done" ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#f5b84b]">3 oportunidades priorizadas</p>
                    <p className="mt-1 font-mono text-xs font-semibold">vm-app-prod-03</p>
                  </div>
                  <span className="rounded-full bg-[#f5b84b]/10 px-2.5 py-1 font-mono text-[9px] text-[#f5b84b]">Impacto alto</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Utilização abaixo do perfil esperado. Avaliar rightsizing após revisar picos e dependências.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-lg border border-[#f5b84b]/15 bg-background/30 px-2.5 py-2 font-mono text-[10px] text-[#ffd889]">28% estimados</span>
                  <span className="rounded-lg border border-[#f5b84b]/15 bg-background/30 px-2.5 py-2 font-mono text-[10px] text-[#ffd889]">R$ 5,4 mil/mês</span>
                </div>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3 rounded-lg border border-accent/10 bg-background/25 px-3 py-2.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(85,221,235,0.45)]" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-mono text-[10px] font-semibold">db-reporting-dev</p>
                      <p className="mt-0.5 truncate text-[10px] text-muted-foreground">Agendamento fora do horário de uso</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/[0.07] px-2 py-1 font-mono text-[8px] text-accent">
                      Impacto médio
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-background/25 px-3 py-2.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(123,243,106,0.4)]" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-mono text-[10px] font-semibold">storage-logs-archive</p>
                      <p className="mt-0.5 truncate text-[10px] text-muted-foreground">Revisar camada de armazenamento</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-primary/[0.07] px-2 py-1 font-mono text-[8px] text-primary">
                      Impacto baixo
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-medium">Recomendação priorizada</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Execute a auditoria para revelar uma oportunidade simulada.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
