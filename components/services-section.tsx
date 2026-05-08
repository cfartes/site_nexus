"use client"

import { Shield, Database, BarChart3, Brain, Code, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Governança de Dados",
    description: "Implementamos frameworks robustos para garantir qualidade, segurança e conformidade dos seus dados, estabelecendo políticas e padrões para toda a organização.",
  },
  {
    icon: Database,
    title: "Engenharia de Dados",
    description: "Construímos pipelines de dados escaláveis e confiáveis, desde a ingestão até o armazenamento, utilizando as melhores práticas de ETL/ELT e arquiteturas modernas.",
  },
  {
    icon: BarChart3,
    title: "DataViz",
    description: "Criamos dashboards e visualizações interativas que transformam dados complexos em insights acionáveis, facilitando a tomada de decisão em todos os níveis.",
  },
  {
    icon: Brain,
    title: "Ciência de Dados",
    description: "Aplicamos técnicas avançadas de análise estatística e machine learning para descobrir padrões ocultos e gerar previsões precisas para seu negócio.",
  },
  {
    icon: Layers,
    title: "Inteligência Artificial",
    description: "Desenvolvemos soluções de IA sob medida, incluindo processamento de linguagem natural, visão computacional e modelos generativos para automatizar e otimizar processos.",
  },
  {
    icon: Code,
    title: "Apps Personalizados",
    description: "Criamos aplicações customizadas que integram todos os elementos de data analytics, entregando soluções completas e alinhadas às necessidades específicas do seu negócio.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-20 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-primary">Nossos Serviços</p>
            <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
              Soluções completas em Data & Analytics
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Oferecemos um portfólio abrangente para transformar sua jornada de dados, desde
            a estratégia e governança até produtos com IA prontos para operar no negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border-white/10 bg-card/55 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-7 text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:grid-cols-3">
          {[
            "Arquiteturas escaláveis para dados críticos",
            "Modelos de IA conectados ao fluxo real da empresa",
            "Dashboards executivos com decisões acionáveis",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md bg-background/45 p-4 text-sm text-muted-foreground">
              <span className="size-2 shrink-0 rounded-full bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
