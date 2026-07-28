import Link from "next/link"
import { ArrowRight, BookOpen, Cloud, Lock, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"

const products = [
  {
    name: "AI Wiki",
    eyebrow: "Conhecimento empresarial",
    description: "Transforme políticas, manuais e processos internos em respostas rastreáveis, com acesso às fontes utilizadas.",
    href: "/produtos/ai-wiki",
    accent: "#55ddeb",
    icon: BookOpen,
    features: [
      { icon: Lock, text: "Opção de execução on-premise" },
      { icon: ShieldCheck, text: "Respostas vinculadas às fontes" },
    ],
    previewTitle: "O que você pode testar",
    preview: [
      { label: "Wikis e PDFs simulados", meta: "3 fontes" },
      { label: "Experiências de usuário e admin", meta: "2 modos" },
      { label: "Perguntas e respostas preparadas", meta: "3 cenários" },
    ],
  },
  {
    name: "FinOps Intelligence",
    eyebrow: "Visibilidade de custos cloud",
    description: "Reúna custos de nuvem, investigue variações e priorize oportunidades de otimização em uma visão operacional.",
    href: "/produtos/finops",
    accent: "#f5b84b",
    icon: Cloud,
    features: [
      { icon: Cloud, text: "Auditoria de exportações de custos Azure" },
      { icon: Sparkles, text: "Recomendações para análise da equipe" },
    ],
    previewTitle: "O que você pode testar",
    preview: [
      { label: "Arquivo de custos pré-carregado", meta: "JSON" },
      { label: "Auditoria com progresso", meta: "1 fluxo" },
      { label: "Resultados e histórico", meta: "3 runs" },
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="section-alt relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="product-dot-field pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-52 top-1/3 size-[34rem] rounded-full bg-accent/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute -right-52 top-1/4 size-[34rem] rounded-full bg-[#f5b84b]/[0.085] blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Produtos próprios</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-5xl">
            Você não precisa imaginar como funciona.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Abra as demonstrações, percorra os fluxos e veja onde cada produto entra no trabalho
            da equipe. Todos os documentos e valores apresentados são fictícios.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 80}>
              <InteractiveSurface accent={product.accent} className="h-full rounded-[1.25rem] border border-white/10 bg-card/70 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-12 items-center justify-center rounded-xl border bg-background/60" style={{ borderColor: `${product.accent}33`, color: product.accent }}>
                    <product.icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Dados simulados
                  </span>
                </div>
                <p className="mt-8 text-sm font-medium" style={{ color: product.accent }}>{product.eyebrow}</p>
                <h3 className="font-heading mt-2 text-3xl font-semibold tracking-[-0.03em]">{product.name}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{product.description}</p>

                <div className="mt-6 grid gap-2">
                  {product.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3 text-sm">
                      <feature.icon className="size-4" style={{ color: product.accent }} />
                      {feature.text}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-background/60 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted-foreground">{product.previewTitle}</span>
                    <span className="size-2 rounded-full" style={{ background: product.accent }} />
                  </div>
                  <div className="grid gap-2">
                    {product.preview.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.035] px-3 py-2.5 text-sm">
                        <span className="min-w-0 truncate text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-xs" style={{ color: product.accent }}>
                          {item.meta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="button-sheen group mt-7 w-full" variant={product.name === "AI Wiki" ? "outline" : "default"} asChild>
                  <Link href={product.href}>
                    Testar demonstração
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </InteractiveSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
