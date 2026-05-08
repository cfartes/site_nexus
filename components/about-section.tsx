"use client"

import { Target, Users, Award, Rocket } from "lucide-react"

const stats = [
  { value: "100+", label: "Projetos Entregues" },
  { value: "50+", label: "Clientes Satisfeitos" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "99%", label: "Taxa de Satisfação" },
]

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é orientado para entregar valor mensurável e impacto real no negócio do cliente.",
  },
  {
    icon: Users,
    title: "Parceria Estratégica",
    description: "Trabalhamos lado a lado com nossos clientes, entendendo profundamente seus desafios e objetivos.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Nossa equipe é formada por especialistas certificados nas principais tecnologias do mercado.",
  },
  {
    icon: Rocket,
    title: "Inovação Contínua",
    description: "Estamos sempre atualizados com as últimas tendências e melhores práticas em data analytics e IA.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-medium text-primary">Sobre Nós</p>
            <h2 className="mt-4 mb-6 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
              Especialistas em transformação digital orientada a dados
            </h2>
            <p className="mb-8 text-lg leading-8 text-muted-foreground">
              A Nexus Data Analytics nasceu da paixão por transformar dados em decisões inteligentes. 
              Nossa equipe multidisciplinar combina profundo conhecimento técnico com visão de negócios 
              para entregar soluções que realmente fazem a diferença.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              Desde governança até inteligência artificial, oferecemos uma abordagem completa 
              que cobre toda a jornada de dados da sua organização, sempre com foco em resultados 
              tangíveis e retorno sobre investimento.
            </p>
          </div>

          <div className="data-panel grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-px">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="bg-card/95 p-6 text-center transition-colors hover:bg-secondary/70 md:p-8"
              >
                <div className="mb-2 text-4xl font-semibold text-primary md:text-5xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="group rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <value.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
