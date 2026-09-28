import {
  ArrowRight,
  Boxes,
  Brain,
  Building2,
  Check,
  Cloud,
  Coins,
  Compass,
  Database,
  Eye,
  FlaskConical,
  Gauge,
  Layers,
  ListOrdered,
  Network,
  RefreshCcw,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Unlock,
  Users,
  Zap,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection, Note } from "@/components/industrial/section"
import { IndustrialFaq } from "@/components/industrial/faq"
import { ServiceRelated } from "@/components/service-related"
import { servicePages } from "@/lib/navigation"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: servicePages.cto.href,
  title: "CTO as a Service | Nexus Data Analytics",
  description:
    "Nexus CTO as a Service: assessment executivo, estratégia de tecnologia, roadmap de transformação e liderança fracionada para transformar tecnologia em resultado de negócio.",
})

const signals = [
  { icon: Layers, text: "TI concentrada em sustentação e atendimento, com pouco espaço para estratégia e inovação." },
  { icon: Boxes, text: "Sistemas legados, integrações frágeis e decisões de arquitetura acumuladas ao longo dos anos." },
  { icon: Coins, text: "Custos de cloud, licenças, infraestrutura e fornecedores sem visão consolidada de retorno." },
  { icon: Database, text: "Dados fragmentados, indicadores inconsistentes e dificuldade para transformar informação em decisão." },
  { icon: Brain, text: "Pressão para adotar inteligência artificial sem clareza de onde existe valor real." },
  { icon: ShieldCheck, text: "Cibersegurança e continuidade tratadas como projetos isolados, e não como capacidade permanente." },
  { icon: ListOrdered, text: "Portfólio de iniciativas maior que a capacidade de execução, sem critérios claros de priorização." },
]

const stages = [
  {
    step: "01",
    title: "Tech Assessment",
    text: "Diagnóstico executivo da maturidade, dos riscos, custos, arquitetura, dados, segurança e capacidade de entrega.",
  },
  {
    step: "02",
    title: "Technology Strategy",
    text: "Visão alvo, prioridades, business cases e roadmap de transformação para os próximos anos.",
  },
  {
    step: "03",
    title: "CTO as a Service",
    text: "Governança executiva, decisões estratégicas, acompanhamento do portfólio e evolução contínua do roadmap.",
  },
]

const cycle = ["Assessment", "Estratégia", "Roadmap", "Execução", "Governança", "Evolução"]

const dimensions = [
  { icon: Target, title: "Estratégia & Negócio", text: "Alinhamento com objetivos empresariais, orçamento, governança, KPIs e priorização." },
  { icon: Network, title: "Aplicações & Arquitetura", text: "ERP, legados, integrações, APIs, redundâncias, dívida técnica e arquitetura alvo." },
  { icon: Cloud, title: "Infraestrutura & Cloud", text: "Disponibilidade, redes, cloud, datacenter, performance, continuidade e eficiência." },
  { icon: ShieldCheck, title: "Cibersegurança", text: "Identidade, acessos, proteção de dados, backup, recuperação de desastres, vulnerabilidades e LGPD." },
  { icon: Database, title: "Dados & Analytics", text: "Governança, qualidade, responsabilidade pelos dados, BI, plataforma de dados e capacidade analítica." },
  { icon: Brain, title: "IA & Automação", text: "Casos de uso, prontidão, agentes, IA generativa, automação e mecanismos de governança." },
  { icon: Users, title: "Organização & Delivery", text: "Estrutura, competências, fornecedores, DevOps, gestão de demanda e execução." },
  { icon: Coins, title: "FinOps & Custos", text: "Cloud, licenças, contratos, CAPEX/OPEX, fornecedores e oportunidades de otimização." },
]

// Valores de exemplo para ilustrar o formato do diagnóstico (escala de 0 a 5).
const maturityExample = [
  { dimension: "Dados & Analytics", current: 2.1, target: 4.0 },
  { dimension: "Cibersegurança", current: 2.8, target: 4.2 },
  { dimension: "Arquitetura", current: 1.9, target: 3.8 },
  { dimension: "IA & Automação", current: 1.3, target: 3.5 },
]

const deliverables = [
  "Executive Technology Assessment com visão consolidada de maturidade, riscos e oportunidades.",
  "Mapa de riscos e pontos críticos que podem comprometer operação, crescimento ou compliance.",
  "Mapa de oportunidades de eficiência, redução de custos, dados, automação e IA.",
  "Arquitetura e capacidades alvo para suportar a estratégia futura.",
  "Roadmap priorizado de transformação, com horizonte recomendado de 3 a 5 anos ou mais.",
  "Portfólio de iniciativas com impacto, esforço, dependências, investimento e indicadores de sucesso.",
  "Apresentação executiva para CEO, CFO, conselho e demais lideranças.",
]

const years = [
  { year: "Ano 1", title: "Organizar e reduzir risco", text: "Governança, segurança, custos, contratos, arquitetura, dados mestres, integrações críticas e ganhos rápidos." },
  { year: "Ano 2", title: "Modernizar e integrar", text: "Modernização de aplicações, APIs, cloud, plataforma de dados, automação e evolução dos processos digitais." },
  { year: "Ano 3", title: "Transformar e escalar", text: "IA, agentes, analytics avançado, produtos digitais, inovação e otimização contínua." },
]

const initiativeChain = ["Problema", "Iniciativa", "Investimento", "Benefício", "Prioridade", "Dependências", "Prazo", "KPI"]

const cadence = [
  { when: "Semanal", what: "Acompanhamento das iniciativas críticas, impedimentos e decisões." },
  { when: "Mensal", what: "Technology Steering Committee com indicadores, riscos, orçamento e portfólio." },
  { when: "Trimestral", what: "Revisão de prioridades, benefícios, capacidade, fornecedores e roadmap." },
  { when: "Anual", what: "Atualização da estratégia tecnológica e planejamento do próximo ciclo." },
]

const decisions = [
  "Onde investir e onde reduzir custos de tecnologia.",
  "Build, buy ou partner: desenvolver, comprar ou contratar.",
  "Modernização de ERP, aplicações, integrações e arquitetura.",
  "Estratégia de cloud, dados, analytics, cibersegurança e IA.",
  "Estrutura organizacional, competências e modelo de fornecedores.",
  "Priorização do portfólio e alocação de orçamento.",
]

const values = [
  { icon: Eye, title: "Clareza", text: "Visão executiva da situação atual e do que realmente precisa mudar." },
  { icon: SlidersHorizontal, title: "Prioridade", text: "Investimentos organizados por impacto, risco, esforço e dependências." },
  { icon: Gauge, title: "Controle", text: "Governança sobre custos, fornecedores, portfólio, arquitetura e riscos." },
  { icon: Zap, title: "Velocidade", text: "Decisões mais rápidas e execução coordenada entre negócio, TI e parceiros." },
  { icon: RefreshCcw, title: "Evolução", text: "Roadmap vivo, revisado conforme estratégia, mercado e maturidade da organização." },
  { icon: Unlock, title: "Independência", text: "Liderança tecnológica experiente sem exigir, de imediato, uma estrutura executiva completa." },
]

const offers = [
  { name: "Nexus Tech Assessment", scope: "Diagnóstico, maturidade, riscos e oportunidades", model: "Projeto de entrada" },
  { name: "Technology Strategy", scope: "Visão alvo, business cases e roadmap", model: "Projeto estratégico" },
  { name: "CTO Advisory", scope: "Aconselhamento executivo e decisões-chave", model: "Recorrente" },
  { name: "Fractional CTO", scope: "Atuação executiva parcial e governança", model: "Recorrente" },
  { name: "CTO as a Service", scope: "Liderança contínua, governança e transformação", model: "Recorrente" },
]

const faq = [
  {
    question: "Preciso contratar a jornada completa?",
    answer:
      "Não. O Tech Assessment pode ser contratado de forma independente ou ser a porta de entrada para uma jornada contínua de transformação.",
  },
  {
    question: "Qual a diferença entre CTO Advisory, Fractional CTO e CTO as a Service?",
    answer:
      "No CTO Advisory, a Nexus aconselha a liderança em decisões-chave. No Fractional CTO, assume uma atuação executiva parcial, com governança. No CTO as a Service, exerce liderança contínua de tecnologia, conduzindo governança e transformação.",
  },
  {
    question: "A Nexus substitui a equipe de TI da empresa?",
    answer:
      "Não. A atuação complementa a liderança interna, para que as decisões de tecnologia permaneçam conectadas ao negócio e o plano se transforme em execução.",
  },
  {
    question: "Como o escopo e o investimento são definidos?",
    answer:
      "O desenho considera o porte, a complexidade, o número de unidades, a abrangência do ambiente e o nível de atuação executiva necessário.",
  },
]

function Card({ icon: Icon, title, text }: { icon: typeof Target; title: string; text: string }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <h3 className="font-heading mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  )
}

export default function CtoAsAServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={servicePages.cto.label}
        breadcrumbParent={{ href: "/#servicos", label: "Serviços" }}
        eyebrow="Nexus CTO as a Service"
        title="CTO as a Service"
        lead="Da TI operacional à tecnologia como alavanca de negócio."
        support={
          <>
            <p>
              Uma abordagem estruturada para empresas que precisam transformar tecnologia em resultado, sem
              necessariamente construir uma diretoria completa de TI.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm">
              {["Assessment executivo", "Estratégia de tecnologia", "Roadmap de transformação", "Liderança fracionada"].map((item) => (
                <li key={item} className="rounded-full border border-primary/20 bg-primary/[0.05] px-3 py-1 text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </>
        }
        primaryCta={{ href: "#contato", label: "Agendar uma conversa executiva" }}
        secondaryCta={{ href: "#jornada", label: "Conhecer a jornada" }}
      />

      <IndustrialSection
        id="desafio"
        eyebrow="O desafio"
        title="Quando a TI cresce de forma reativa"
        description="Muitas empresas cresceram apoiadas por tecnologia, mas a TI evoluiu conforme a necessidade: sistemas foram adicionados, fornecedores se multiplicaram, custos aumentaram e decisões estratégicas passaram a depender de uma estrutura que nem sempre foi desenhada para o futuro."
        alt
      >
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {signals.map((item, index) => (
            <li key={item.text}>
              <Reveal delay={index * 40} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-card/60 p-5">
                  <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-8">
          <blockquote className="data-panel rounded-2xl border border-primary/25 p-6 md:p-8">
            <p className="font-heading text-xl font-semibold leading-snug text-balance md:text-2xl">
              A pergunta central não é “qual tecnologia comprar?”, mas “qual tecnologia a empresa precisa para
              sustentar a sua estratégia nos próximos anos?”
            </p>
          </blockquote>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="jornada"
        eyebrow="A solução"
        title="Uma jornada em três etapas"
        description="O Nexus CTO as a Service combina diagnóstico, estratégia e liderança executiva de tecnologia em um modelo contínuo. Começamos entendendo o negócio e a realidade atual da TI, desenhamos a visão de futuro e construímos um roadmap priorizado. Depois, quando necessário, atuamos ao lado da liderança para transformar o plano em execução."
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <Reveal delay={index * 60} className="h-full">
                <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
                  <span className="font-mono text-xs text-primary">Etapa {stage.step}</span>
                  <h3 className="font-heading mt-4 text-xl font-semibold">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.text}</p>
                </InteractiveSurface>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-8">
          <ol className="flex flex-wrap items-center gap-2" aria-label="Ciclo contínuo">
            {cycle.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1.5 text-sm font-medium">{item}</span>
                {index < cycle.length - 1 && <ArrowRight className="size-4 text-primary/70" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="assessment"
        eyebrow="Nexus Tech Assessment"
        title="Oito dimensões, uma visão do negócio"
        description="O assessment avalia a capacidade da tecnologia de sustentar a estratégia da empresa. Não é uma auditoria técnica isolada: conecta riscos, investimentos, capacidades e oportunidades ao contexto do negócio."
        alt
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <Card {...item} />
            </Reveal>
          ))}
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="diagnostico"
        eyebrow="Da fotografia atual ao plano"
        title="Onde a empresa está e onde precisa chegar"
        description="Cada dimensão é analisada considerando a maturidade atual, a maturidade necessária para o contexto da empresa e o gap que precisa ser tratado."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <figure className="data-panel h-full rounded-2xl border border-white/10 p-5 sm:p-6">
              <figcaption className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-heading font-semibold">Maturidade por dimensão</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5b84b]/35 bg-[#f5b84b]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#f5b84b]">
                  <FlaskConical className="size-3.5" aria-hidden="true" />
                  Exemplo ilustrativo
                </span>
              </figcaption>
              <table className="mt-5 w-full text-left text-sm">
                <thead>
                  <tr className="text-xs text-muted-foreground">
                    <th scope="col" className="pb-3 font-medium">Dimensão</th>
                    <th scope="col" className="pb-3 text-right font-medium">Atual</th>
                    <th scope="col" className="pb-3 text-right font-medium">Objetivo</th>
                    <th scope="col" className="pb-3 text-right font-medium">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {maturityExample.map((row) => (
                    <tr key={row.dimension} className="border-t border-white/10">
                      <th scope="row" className="py-3 pr-3 font-medium">
                        {row.dimension}
                        <span className="relative mt-2 block h-1.5 rounded-full bg-white/[0.07]" aria-hidden="true">
                          <span className="absolute inset-y-0 left-0 rounded-full bg-primary/25" style={{ width: `${(row.target / 5) * 100}%` }} />
                          <span className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: `${(row.current / 5) * 100}%` }} />
                        </span>
                      </th>
                      <td className="py-3 text-right tabular-nums">{row.current.toFixed(1).replace(".", ",")}</td>
                      <td className="py-3 text-right tabular-nums">{row.target.toFixed(1).replace(".", ",")}</td>
                      <td className="py-3 text-right font-semibold tabular-nums text-primary">{(row.target - row.current).toFixed(1).replace(".", ",")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">Escala de 0 a 5. Valores fictícios, apenas para mostrar o formato do diagnóstico.</p>
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
              <h3 className="font-heading text-lg font-semibold">Principais entregáveis</h3>
              <ul className="mt-4 grid gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="plano"
        eyebrow="Technology Transformation Plan"
        title="Do diagnóstico a um plano executivo"
        description="O resultado do assessment vira um plano em que cada iniciativa está relacionada a um problema de negócio, resultado esperado, investimento, dependências, prazo e KPI."
        alt
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {years.map((item, index) => (
            <li key={item.year}>
              <Reveal delay={index * 60} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{item.year}</span>
                  <h3 className="font-heading mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-8">
          <ol className="flex flex-wrap items-center gap-2" aria-label="Estrutura de cada iniciativa">
            {initiativeChain.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-background/60 px-3 py-1.5 font-mono text-xs">{item}</span>
                {index < initiativeChain.length - 1 && <ArrowRight className="size-3.5 text-primary/70" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>
        <Note className="mt-6">
          <span className="flex gap-3">
            <Building2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="text-foreground">Visão para o board:</strong> a tecnologia passa a ser apresentada como
              uma carteira de investimentos: o que protege a operação, o que reduz custo, o que aumenta produtividade, o
              que habilita crescimento e o que prepara a empresa para o futuro.
            </span>
          </span>
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="governanca"
        eyebrow="Estratégia que continua na execução"
        title="Liderança de tecnologia conectada ao negócio"
        description="Depois do roadmap, a Nexus pode assumir uma atuação executiva recorrente, complementando a liderança interna e garantindo que as decisões de tecnologia permaneçam conectadas ao negócio."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="data-panel h-full rounded-2xl border border-white/10 p-6">
              <h3 className="font-heading text-lg font-semibold">Ritual de governança</h3>
              <dl className="mt-4 grid gap-3">
                {cadence.map((item) => (
                  <div key={item.when} className="grid gap-1 rounded-xl border border-white/10 bg-background/60 p-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt className="font-mono text-sm text-primary">{item.when}</dt>
                    <dd className="text-sm leading-6 text-muted-foreground">{item.what}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
              <h3 className="font-heading text-lg font-semibold">Decisões que ajudamos a estruturar</h3>
              <ul className="mt-4 grid gap-3">
                {decisions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <Compass className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="valor"
        eyebrow="O valor para a empresa"
        title="Mais qualidade nas decisões, não mais tecnologia"
        description="O objetivo não é aumentar a quantidade de tecnologia. É aumentar a qualidade das decisões e a capacidade de transformar investimento em resultado."
        alt
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 40}>
              <Card {...item} />
            </Reveal>
          ))}
        </div>
        <Note className="mt-6">
          <span className="flex gap-3">
            <TrendingUp className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="text-foreground">Perfil de empresa com maior aderência:</strong> empresas em
              crescimento, transformação, profissionalização ou sucessão; organizações com TI predominantemente
              operacional; negócios com ERP e legado relevantes; ambientes com múltiplos fornecedores e custos
              crescentes; e empresas que querem avançar em dados e IA sem perder governança e foco em resultado.
            </span>
          </span>
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="modelos"
        eyebrow="Modelo de contratação"
        title="Comece pelo assessment e evolua conforme a necessidade"
        description="O desenho final considera porte, complexidade, número de unidades, abrangência do ambiente e nível de atuação executiva requerido."
      >
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs text-muted-foreground">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">Oferta</th>
                  <th scope="col" className="px-5 py-3 font-medium">Escopo</th>
                  <th scope="col" className="px-5 py-3 font-medium">Modelo</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.name} className="border-t border-white/10">
                    <th scope="row" className="px-5 py-4 font-heading font-semibold">{offer.name}</th>
                    <td className="px-5 py-4 text-muted-foreground">{offer.scope}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-primary/25 bg-primary/[0.06] px-2.5 py-1 text-xs text-primary">{offer.model}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Note className="mt-6">
          O assessment pode ser contratado de forma independente ou utilizado como porta de entrada para uma jornada
          contínua de transformação.
        </Note>
      </IndustrialSection>

      <IndustrialFaq items={faq} />

      <ServiceRelated
        links={[
          { href: servicePages.dataAi.href, title: "Dados e IA", text: "Governança, engenharia, analytics e ciência de dados aplicados ao negócio." },
          { href: servicePages.softwareFactory.href, title: "Fábrica de Software", text: "Sistemas web, aplicativos mobile e integrações desenvolvidos sob medida." },
          { href: servicePages.outsourcing.href, title: "Outsourcing de TI", text: "Profissionais, squads dedicados, sustentação de sistemas e suporte." },
        ]}
      />

      <ContactSection
        eyebrow="Tecnologia com direção"
        title="Não começamos pela ferramenta. Começamos pela estratégia."
        description="A Nexus ajuda a liderança a entender onde está, definir onde precisa chegar e transformar esse caminho em um plano executável. Conte o momento da sua empresa para começarmos a conversa."
        defaultInterest="cto-as-a-service"
        messageLabel="Qual é o momento da sua empresa?"
        messagePlaceholder="Ex.: crescemos rápido, temos vários fornecedores e sistemas legados e precisamos de um plano de tecnologia para os próximos anos."
      />
      <Footer />
    </main>
  )
}
