import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Cog,
  Factory,
  History,
  LayoutDashboard,
  ListChecks,
  ShieldCheck,
  TrendingDown,
  Users,
  Wrench,
  Zap,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection, Note } from "@/components/industrial/section"
import { IndustrialFaq } from "@/components/industrial/faq"
import { RelatedIndustrialPages } from "@/components/industrial/related-pages"
import { ProductionDashboardDemo } from "@/components/industrial/production-dashboard-demo"
import { industrialPages } from "@/lib/industrial-pages"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: industrialPages.data.href,
  title: "Dados & Inteligência Industrial | Nexus Data Analytics",
  description:
    "Integre dados de produção, manutenção, qualidade e gestão em indicadores de produtividade, paradas, perdas, consumo energético e OEE, com rastreabilidade e governança.",
})

const areas = [
  { icon: Factory, title: "Produção", text: "Quantidades produzidas, ritmo, ordens de produção e apontamentos de turno." },
  { icon: Wrench, title: "Manutenção", text: "Paradas, ordens de serviço, intervenções e histórico por equipamento." },
  { icon: ClipboardCheck, title: "Qualidade", text: "Inspeções, refugo, retrabalho e não conformidades por produto e lote." },
  { icon: LayoutDashboard, title: "Gestão", text: "Metas, custos, planejamento e informações do ERP (sistema de gestão empresarial)." },
]

const indicators = [
  { icon: Activity, title: "Produtividade", text: "Produção por hora, por turno e por linha em relação à meta e à capacidade planejada." },
  { icon: CalendarClock, title: "Paradas", text: "Quantidade, duração e motivo de cada parada, separando o que é planejado do que não é." },
  { icon: TrendingDown, title: "Perdas", text: "Refugo, retrabalho, perdas de velocidade e tempo perdido por motivo, para priorizar ações." },
  { icon: Zap, title: "Consumo energético", text: "Energia por linha, equipamento ou unidade produzida, quando houver medição disponível." },
]

const oee = [
  {
    title: "Disponibilidade",
    question: "A máquina estava produzindo quando deveria?",
    text: "Compara o tempo em que o equipamento efetivamente produziu com o tempo planejado. Paradas por falha, setup ou falta de material reduzem esse fator.",
  },
  {
    title: "Desempenho",
    question: "Produziu no ritmo esperado?",
    text: "Compara a velocidade real com a velocidade padrão. Pequenas paradas e operação abaixo do ritmo aparecem aqui.",
  },
  {
    title: "Qualidade",
    question: "Quantas peças saíram boas?",
    text: "Considera a proporção de peças aprovadas de primeira, sem refugo ou retrabalho.",
  },
]

const context = [
  { icon: Cog, label: "Máquina" },
  { icon: Users, label: "Turno" },
  { icon: Boxes, label: "Produto" },
  { icon: ListChecks, label: "Lote ou ordem" },
]

const profiles = [
  { title: "Operação e supervisão", text: "Situação do turno, metas por hora e paradas em andamento, em linguagem direta." },
  { title: "Manutenção", text: "Paradas por equipamento, tempo de reparo e recorrência de falhas para priorizar intervenções." },
  { title: "Qualidade", text: "Refugo e não conformidades por produto, lote e turno, com acesso ao histórico." },
  { title: "Gestão e engenharia", text: "OEE, perdas por motivo e evolução dos indicadores para decisões de melhoria e investimento." },
]

const governance = [
  { icon: ShieldCheck, title: "Definições padronizadas", text: "Cada indicador tem fórmula, fonte e responsável documentados, para que todas as áreas falem do mesmo número." },
  { icon: ListChecks, title: "Qualidade dos dados", text: "Regras para identificar lacunas, valores fora do esperado e apontamentos incompletos antes que cheguem ao painel." },
  { icon: History, title: "Histórico preservado", text: "Os dados ficam armazenados com data, origem e contexto, permitindo comparar períodos e investigar ocorrências." },
  { icon: Users, title: "Acesso adequado", text: "Cada perfil acessa as informações de que precisa, conforme as políticas da empresa." },
]

const faq = [
  {
    question: "Preciso ter todos os dados organizados antes de começar?",
    answer:
      "Não. O diagnóstico identifica quais dados já existem, onde estão e qual é a qualidade deles. Muitas vezes o primeiro passo é organizar apontamentos e registros que já são feitos, antes de ampliar a coleta.",
  },
  {
    question: "Os indicadores serão atualizados em tempo real?",
    answer:
      "Depende das fontes e da infraestrutura. Alguns dados podem ser atualizados em poucos segundos; outros dependem de apontamentos ou de sistemas que atualizam por turno ou por dia. Definimos a frequência de acordo com a decisão que cada painel apoia.",
  },
  {
    question: "Podemos usar a ferramenta de BI que já temos?",
    answer:
      "Podemos avaliar a ferramenta de BI (Business Intelligence) que a empresa já utiliza e verificar se ela atende aos requisitos do projeto antes de propor qualquer mudança.",
  },
]

export default function DadosIndustriaisPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={industrialPages.data.shortName}
        eyebrow="Dados industriais"
        title="Dados & Inteligência Industrial"
        lead="Reúna informações de produção, manutenção, qualidade e gestão em indicadores que a equipe entende e em que confia."
        support={
          <p>
            Organizamos os dados da operação para mostrar onde o tempo e o material estão sendo perdidos, com
            contexto suficiente para agir: máquina, turno, produto e lote.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Avaliar os dados da minha operação" }}
        secondaryCta={{ href: "#painel", label: "Ver painel demonstrativo" }}
      />

      <IndustrialSection
        id="integracao"
        eyebrow="Integração"
        title="Uma base única para áreas que hoje trabalham separadas"
        description="Quando produção, manutenção e qualidade usam fontes diferentes, as reuniões viram discussões sobre qual número está certo."
        alt
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </IndustrialSection>

      <IndustrialSection id="indicadores" eyebrow="Indicadores" title="O que acompanhar na operação">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="oee"
        eyebrow="OEE"
        title="OEE: um indicador, três perguntas"
        description={
          <p>
            O OEE (Overall Equipment Effectiveness, ou Eficiência Global do Equipamento) combina três fatores em um
            único número e ajuda a mostrar onde está a maior perda.
          </p>
        }
        alt
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {oee.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
                <h3 className="font-heading text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 font-medium">{item.question}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="data-panel rounded-2xl border border-white/10 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Exemplo de cálculo</p>
            <p className="font-heading mt-3 text-lg font-semibold sm:text-xl">
              OEE = Disponibilidade × Desempenho × Qualidade
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Se uma máquina produziu durante 90% do tempo planejado, a 95% da velocidade padrão, e 98% das peças
              saíram boas, o OEE é 0,90 × 0,95 × 0,98 ≈ 84%. O resultado só é comparável quando tempo planejado,
              velocidade padrão e critérios de qualidade estão bem definidos.
            </p>
          </div>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="painel"
        eyebrow="Painéis por perfil"
        title="Cada perfil vê o que precisa para decidir"
        description="Explore três visões de um painel de exemplo. A estrutura, os indicadores e a frequência de atualização são definidos com cada operação."
      >
        <Reveal>
          <ProductionDashboardDemo />
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card/60 p-5">
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <Note className="mt-6">
          A atualização em tempo real e o cálculo dos indicadores dependem das fontes de dados e da infraestrutura
          disponíveis. Em alguns casos, a informação chega em segundos; em outros, por turno. A frequência é definida
          conforme a decisão que cada painel precisa apoiar.
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="rastreabilidade"
        eyebrow="Rastreabilidade"
        title="Dados com contexto para responder o que aconteceu"
        description="Um registro isolado diz pouco. Associado à máquina, ao turno, ao produto e ao lote, ele permite investigar a causa de um problema e reconstruir o histórico de produção."
        alt
      >
        <Reveal>
          <div className="data-panel grid gap-6 rounded-2xl border border-white/10 p-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-xl border border-primary/25 bg-background/60 p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Evento de exemplo</p>
              <p className="font-heading mt-2 text-xl font-semibold">Parada · 14 min</p>
              <p className="mt-1 text-sm text-muted-foreground">Motivo informado: ajuste de processo</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Contexto associado ao evento">
              {context.map((item) => (
                <li key={item.label} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-background/60 p-4 text-center">
                  <item.icon className="size-5 text-primary" aria-hidden="true" />
                  <span className="text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="governanca"
        eyebrow="Governança"
        title="Indicadores confiáveis começam em dados bem cuidados"
        description={
          <p>
            Aplicamos à indústria a mesma experiência em{" "}
            <Link href="/#servico-governanca" className="text-primary underline-offset-4 hover:underline">governança de dados</Link>{" "}
            que usamos em outros setores.
          </p>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {governance.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link href={industrialPages.vision.href} className="group inline-flex items-center gap-2 rounded text-sm font-medium text-primary outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            Os resultados de inspeções visuais também podem alimentar esses painéis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </IndustrialSection>

      <IndustrialFaq items={faq} />
      <RelatedIndustrialPages current="data" />

      <ContactSection
        eyebrow="Próximo passo"
        title="Vamos olhar os dados da sua operação?"
        description="Conte quais indicadores você acompanha hoje, de onde vêm os dados e o que ainda fica sem resposta. Com isso, avaliamos o melhor ponto de partida."
        defaultInterest="dados-industriais"
        messageLabel="Qual é o seu desafio?"
        messagePlaceholder="Ex.: calculamos o OEE em planilha e cada área chega a um número diferente."
      />
      <Footer />
    </main>
  )
}
