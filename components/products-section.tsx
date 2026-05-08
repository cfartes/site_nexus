"use client"

import { BookOpen, DollarSign, Shield, Cloud, FileText, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const products = [
  {
    id: "ai-wiki",
    name: "AI Wiki",
    tagline: "Conhecimento Empresarial Inteligente",
    description: "Carregue todo o conhecimento da sua wiki empresarial e disponibilize através de uma interface inteligente com IA. Seus colaboradores encontram respostas instantâneas para qualquer dúvida sobre processos, políticas e documentação interna.",
    icon: BookOpen,
    features: [
      { icon: Lock, text: "Execução on-premise disponível" },
      { icon: Shield, text: "Dados seguros dentro da empresa" },
      { icon: BookOpen, text: "Integração com wikis existentes" },
    ],
    highlight: "On-Premise",
    color: "primary",
  },
  {
    id: "finops-intelligence",
    name: "FinOps Intelligence",
    tagline: "Otimização Inteligente de Custos Cloud",
    description: "Analise suas subscrições de Azure, AWS e GCP de forma unificada. Nossa solução identifica oportunidades de otimização de custos e recursos, gerando relatórios gerenciais completos com recomendações acionáveis.",
    icon: DollarSign,
    features: [
      { icon: Cloud, text: "Multi-cloud: Azure, AWS, GCP" },
      { icon: FileText, text: "Relatórios gerenciais detalhados" },
      { icon: DollarSign, text: "Economia garantida" },
    ],
    highlight: "Multi-Cloud",
    color: "accent",
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Produtos SaaS</p>
          <h2 className="mt-4 mb-6 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Soluções prontas para acelerar sua transformação
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Além da consultoria, oferecemos produtos SaaS desenvolvidos com nossa expertise 
            para resolver desafios comuns de forma rápida e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-white/10 bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <CardHeader className="pb-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <product.icon className="size-7 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    {product.highlight}
                  </Badge>
                </div>
                <CardTitle className="mb-2 text-2xl">{product.name}</CardTitle>
                <p className="text-sm font-medium text-primary">{product.tagline}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <CardDescription className="text-base leading-7 text-muted-foreground">
                  {product.description}
                </CardDescription>
                
                <div className="flex flex-col gap-3">
                  {product.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-md bg-secondary">
                        <feature.icon className="size-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <ProductPreview variant={index} />

                <Button className="w-full group/btn" asChild>
                  <Link href="#demo">
                    Solicitar Demonstração
                    <ArrowRight data-icon="inline-end" className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductPreview({ variant }: { variant: number }) {
  const rows = variant === 0
    ? ["Política de acesso", "Manual financeiro", "Processo de onboarding"]
    : ["Azure compute", "AWS storage", "GCP analytics"]

  return (
    <div className="rounded-xl border border-white/10 bg-background/55 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" />
          <span className="text-sm font-medium">{variant === 0 ? "Knowledge index" : "Cloud spend map"}</span>
        </div>
        <span className="text-xs text-muted-foreground">{variant === 0 ? "RAG seguro" : "Multi-cloud"}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_7rem]">
        <div className="flex flex-col gap-2">
          {rows.map((row, rowIndex) => (
            <div key={row} className="flex items-center justify-between rounded-md bg-white/[0.035] px-3 py-2 text-sm">
              <span className="text-muted-foreground">{row}</span>
              <span className="text-primary">{variant === 0 ? `${96 - rowIndex * 7}%` : `-${18 + rowIndex * 6}%`}</span>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 rounded-md bg-white/[0.035] p-3">
          {[42, 72, 54, 88, 62, 96].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-primary"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
