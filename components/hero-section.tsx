"use client"

import { ArrowRight, BarChart3, Brain, Database, LineChart, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const capabilities = [
  { icon: Shield, label: "Governança" },
  { icon: Database, label: "Engenharia" },
  { icon: BarChart3, label: "DataViz" },
  { icon: Brain, label: "IA aplicada" },
]

const signals = [
  { label: "Qualidade", value: "98.7%", width: "w-[88%]" },
  { label: "Adoção", value: "+42%", width: "w-[68%]" },
  { label: "Economia Cloud", value: "31%", width: "w-[76%]" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute left-1/2 top-24 h-[34rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(118,236,255,0.16),transparent_58%)]" />
      <div className="relative max-w-7xl mx-auto grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Transforme dados em </span>
            <span className="gradient-text block">vantagem competitiva</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Desenvolvemos soluções personalizadas em Governança de Dados, Engenharia, 
            DataViz, Ciência de Dados e Inteligência Artificial para impulsionar seu negócio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="group w-full shadow-[0_0_34px_rgba(149,255,128,0.2)] sm:w-auto" asChild>
              <Link href="#contato">
                Fale com um Especialista
                <ArrowRight data-icon="inline-end" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full border-white/15 bg-white/5 sm:w-auto" asChild>
              <Link href="#produtos">
                Conheça Nossos Produtos
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {capabilities.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <feature.icon className="size-4 text-primary" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="data-panel relative overflow-hidden rounded-2xl border border-white/10 p-4 md:p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-medium text-foreground">Nexus Control Room</p>
                <p className="text-xs text-muted-foreground">Data, AI & FinOps intelligence</p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                Live insights
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.75fr]">
              <div className="rounded-xl border border-white/10 bg-background/50 p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Pipeline health</p>
                    <p className="mt-1 text-3xl font-semibold">4.8M</p>
                  </div>
                  <LineChart className="size-5 text-accent" />
                </div>
                <div className="flex h-36 items-end gap-2">
                  {[46, 70, 55, 86, 62, 94, 76, 88, 68, 98, 84, 92].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/35 to-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-white/10 bg-background/50 p-4">
                  <p className="text-xs text-muted-foreground">AI Wiki</p>
                  <p className="mt-2 text-lg font-semibold">Respostas internas em segundos</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="h-2 rounded-full bg-primary/80" />
                    <span className="h-2 w-4/5 rounded-full bg-accent/55" />
                    <span className="h-2 w-2/3 rounded-full bg-white/15" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-background/50 p-4">
                  <p className="text-xs text-muted-foreground">FinOps Intelligence</p>
                  <p className="mt-2 text-lg font-semibold">Custos cloud sob controle</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    <span className="size-2 rounded-full bg-primary" />
                    Multi-cloud otimizado
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-background/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium">Indicadores de decisão</p>
                <p className="text-xs text-muted-foreground">Atualizado agora</p>
              </div>
              <div className="flex flex-col gap-3">
                {signals.map((signal) => (
                  <div key={signal.label} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-3 text-sm">
                    <span className="text-muted-foreground">{signal.label}</span>
                    <span className="h-2 rounded-full bg-white/10">
                      <span className={`block h-full rounded-full bg-gradient-to-r from-primary to-accent ${signal.width}`} />
                    </span>
                    <span className="text-right font-medium">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scanline pointer-events-none absolute left-0 top-1/3 h-px w-full opacity-70" />
          </div>
        </div>
      </div>
    </section>
  )
}
