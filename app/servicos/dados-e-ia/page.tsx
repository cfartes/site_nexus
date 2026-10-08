import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Check, Database, Shield, type LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection } from "@/components/industrial/section"
import { Journey } from "@/components/industrial/journey"
import { IndustrialFaq } from "@/components/industrial/faq"
import { ServiceRelated } from "@/components/service-related"
import { dataServices, servicePages } from "@/lib/navigation"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: servicePages.dataAi.href,
  title: "Dados e IA: Governança, Engenharia, Analytics e Ciência de Dados | Nexus Data Analytics",
  description:
    "Consultoria em Governança de Dados, Engenharia de Dados, Analytics & DataViz e Ciência de Dados e IA para transformar dados em decisões confiáveis.",
})

type Service = {
  id: string
  icon: LucideIcon
  title: string
  problem: string
  intro: string
  scope: string[]
  deliverables: string[]
}

const services: Service[] = [
  {
    id: "governanca",
    icon: Shield,
    title: "Governança de Dados",
    problem: "Cada área tem o seu número, e ninguém sabe qual fonte é a correta.",
    intro:
      "Definimos quem é responsável por cada dado, quais regras garantem a sua qualidade e como ele pode ser usado, para que as decisões partam de uma base confiável.",
    scope: [
      "Diagnóstico de maturidade e mapeamento das fontes críticas",
      "Papéis e responsabilidades: donos e curadores dos dados",
      "Glossário de negócio e definições padronizadas de indicadores",
      "Regras de qualidade, acesso e adequação à LGPD",
    ],
    deliverables: ["Modelo de governança", "Catálogo e glossário", "Plano de qualidade de dados"],
  },
  {
    id: "engenharia",
    icon: Database,
    title: "Engenharia de Dados",
    problem: "Os dados existem, mas estão presos em sistemas, planilhas e extrações manuais.",
    intro:
      "Construímos a arquitetura e os pipelines que levam os dados das fontes até quem precisa deles, com atualização automática, histórico e monitoramento.",
    scope: [
      "Arquitetura de plataforma de dados em nuvem ou no ambiente da empresa",
      "Pipelines de ingestão, transformação e integração entre sistemas",
      "Modelagem de dados para análise e consumo por outras aplicações",
      "Monitoramento, custos e sustentação da plataforma",
    ],
    deliverables: ["Arquitetura de dados", "Pipelines automatizados", "Documentação técnica"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & DataViz",
    problem: "Os relatórios chegam tarde, são difíceis de ler e não respondem às perguntas certas.",
    intro:
      "Desenhamos indicadores e painéis a partir das decisões que precisam ser tomadas, com visualizações claras para cada público, da operação à diretoria.",
    scope: [
      "Definição de indicadores a partir dos objetivos do negócio",
      "Painéis e relatórios para diferentes perfis de usuário",
      "Modelos semânticos reutilizáveis e regras de cálculo documentadas",
      "Capacitação das equipes para uso e evolução dos painéis",
    ],
    deliverables: ["Árvore de indicadores", "Painéis publicados", "Modelo semântico documentado"],
  },
  {
    id: "ciencia-de-dados",
    icon: Brain,
    title: "Ciência de Dados e IA",
    problem: "Existe pressão para usar IA, mas não está claro onde ela gera valor.",
    intro:
      "Identificamos os casos de uso com maior potencial, desenvolvemos modelos e aplicações de IA e os colocamos em operação com critérios de validação e acompanhamento.",
    scope: [
      "Priorização de casos de uso por valor, viabilidade e dados disponíveis",
      "Modelos preditivos, de classificação e de otimização",
      "Aplicações com IA generativa e agentes, com supervisão humana",
      "Monitoramento do desempenho dos modelos em produção",
    ],
    deliverables: ["Mapa de casos de uso", "Modelos em operação", "Critérios de validação e monitoramento"],
  },
]

const journey = [
  { title: "Diagnóstico", description: "Entendemos as decisões que dependem de dados, as fontes disponíveis e o nível de maturidade atual." },
  { title: "Arquitetura e prioridades", description: "Desenhamos a solução e definimos um primeiro escopo com valor visível para o negócio." },
  { title: "Implementação", description: "Construímos em etapas curtas, validando com as áreas usuárias ao longo do caminho." },
  { title: "Operação e transferência", description: "Colocamos em uso, documentamos e preparamos a equipe para sustentar e evoluir." },
]

const faq = [
  {
    question: "Preciso contratar os quatro serviços juntos?",
    answer:
      "Não. Cada serviço pode ser contratado separadamente. Na prática, eles se complementam: governança e engenharia criam a base que torna os painéis e os modelos de IA confiáveis.",
  },
  {
    question: "Vocês trabalham com as ferramentas que a empresa já usa?",
    answer:
      "Sim, sempre que elas atendem aos requisitos. Avaliamos as plataformas de dados, nuvem e BI existentes antes de propor qualquer mudança.",
  },
  {
    question: "Por onde começar quando a maturidade em dados é baixa?",
    answer:
      "Normalmente por um diagnóstico e por um primeiro caso de uso bem delimitado, que organiza as fontes necessárias e entrega um resultado visível em pouco tempo.",
  },
]

export default function DadosEIaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb="Dados e IA"
        breadcrumbParent={{ href: "/#servicos", label: "Serviços" }}
        eyebrow="Serviços"
        title="Dados e Inteligência Artificial"
        lead="Da governança à inteligência artificial: dados confiáveis, acessíveis e usados nas decisões."
        support={
          <p>
            Quatro frentes que se complementam. Cada uma pode ser contratada separadamente, conforme o ponto em que a
            sua empresa está.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Conversar sobre meus dados" }}
        secondaryCta={{ href: "#frentes", label: "Conhecer as frentes" }}
      />

      <IndustrialSection id="frentes" eyebrow="Frentes de atuação" title="Escolha por onde começar" alt>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataServices.map((service, index) => {
            const Icon = services.find((item) => item.id === service.id)!.icon
            return (
              <li key={service.id}>
                <Reveal delay={index * 50} className="h-full">
                  <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-card/60">
                    <Link href={`#${service.id}`} className="group flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-heading mt-5 text-lg font-semibold">{service.label}</span>
                      <span className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Ver detalhes
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </InteractiveSurface>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </IndustrialSection>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`relative scroll-mt-24 py-16 md:py-24 ${index % 2 === 1 ? "section-alt" : ""}`}>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <Reveal>
              <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] text-primary">
                <service.icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="font-heading mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{service.title}</h2>
              <p className="mt-5 rounded-xl border-l-2 border-primary/50 bg-white/[0.03] px-4 py-3 text-base italic text-foreground/85">
                “{service.problem}”
              </p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{service.intro}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="data-panel rounded-2xl border border-white/10 p-6">
                <h3 className="font-heading font-semibold">O que fazemos</h3>
                <ul className="mt-4 grid gap-3">
                  {service.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="font-heading mt-6 font-semibold">Entregas típicas</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <IndustrialSection id="como-trabalhamos" eyebrow="Como trabalhamos" title="Do diagnóstico à operação">
        <Journey steps={journey} />
      </IndustrialSection>

      <IndustrialFaq items={faq} />

      <ServiceRelated
        links={[
          { href: servicePages.cto.href, title: "CTO as a Service", text: "Estratégia, roadmap e liderança de tecnologia conectados ao negócio." },
          { href: "/#produtos", title: "Produtos próprios", text: "AI Wiki, FinOps Intelligence, Argus Sentinel e Nexus Amplify." },
          { href: "/dados-industriais", title: "Dados Industriais", text: "Indicadores de produção, OEE e rastreabilidade para a indústria." },
        ]}
      />

      <ContactSection
        eyebrow="Próximo passo"
        title="Conte onde os dados estão travando o trabalho."
        description="Pode ser uma planilha que virou processo, um indicador em que ninguém confia ou uma ideia de IA que não saiu do papel. A primeira conversa ajuda a definir por onde começar."
        defaultInterest="consultoria"
      />
      <Footer />
    </main>
  )
}
