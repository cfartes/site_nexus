import { Compass, Handshake, Workflow } from "lucide-react"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "15+", label: "anos de experiência da equipe" },
  { value: "100+", label: "projetos conduzidos" },
  { value: "2", label: "produtos próprios" },
]

const principles = [
  { icon: Compass, title: "Diagnóstico antes da tecnologia", text: "Entendemos a decisão, o processo e a restrição antes de escolher a solução." },
  { icon: Workflow, title: "Arquitetura que cabe na operação", text: "Desenhamos soluções que a equipe consegue sustentar e evoluir." },
  { icon: Handshake, title: "Conhecimento que permanece", text: "Documentação e transferência fazem parte da entrega, não do encerramento." },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-16 size-[30rem] rounded-full bg-primary/[0.06] blur-[100px]" />
      <span className="pointer-events-none absolute -right-10 top-8 font-heading text-[15rem] font-semibold leading-none text-primary/[0.025] md:text-[24rem]" aria-hidden="true">15+</span>
      <span className="pointer-events-none absolute -left-10 bottom-0 font-heading text-[12rem] font-semibold leading-none text-accent/[0.018] md:text-[20rem]" aria-hidden="true">100+</span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Sobre a Nexus</p>
            <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Experiência que aparece no método e permanece na operação.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Reunimos mais de 15 anos de experiência em projetos de dados e tecnologia.
              Atuamos da governança à inteligência artificial, conectando arquitetura,
              pessoas e decisões de negócio.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Nosso trabalho não termina em uma apresentação: entregamos soluções operáveis,
              documentação clara e capacidade para a equipe continuar evoluindo.
            </p>
          </Reveal>

          <Reveal delay={100} className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-card/65 p-5">
                <span className="font-heading min-w-24 text-4xl font-semibold text-primary">{stat.value}</span>
                <span className="text-sm leading-5 text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-primary" />
                <h3 className="font-heading mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </InteractiveSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
