import Link from "next/link"
import {
  ArrowRight,
  Bot,
  BarChart3,
  BookOpen,
  Boxes,
  Building2,
  Cable,
  ClipboardList,
  Database,
  EyeOff,
  Factory,
  FileSpreadsheet,
  Gauge,
  GitMerge,
  KeyRound,
  LayoutTemplate,
  Network,
  Radio,
  Radar,
  ScanEye,
  ScrollText,
  SearchX,
  ShieldCheck,
  Target,
  TrendingUp,
  Unplug,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection, Note } from "@/components/industrial/section"
import { FlowDiagram, type FlowNode } from "@/components/industrial/flow-diagram"
import { Journey } from "@/components/industrial/journey"
import { IndustrialFaq } from "@/components/industrial/faq"
import { IndustrialAiHighlight } from "@/components/industrial/industrial-ai-highlight"
import { industrialPages } from "@/lib/industrial-pages"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: industrialPages.hub.href,
  title: "Automação Industrial & Indústria 4.0 | Nexus Data Analytics",
  description:
    "Projetos sob medida de arquitetura de automação, MES, Cyber OT, integração industrial, dados e IA para conectar máquinas, sistemas e pessoas e transformar dados da operação em decisões.",
})

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Apontamentos manuais",
    text: "Produção, paradas e refugo anotados em papel ou planilha chegam atrasados, incompletos e difíceis de consolidar no fim do turno.",
  },
  {
    icon: Unplug,
    title: "Sistemas isolados",
    text: "O supervisório, o ERP (sistema de gestão empresarial), o controle de manutenção e as planilhas de qualidade não conversam. Cada área trabalha com um número diferente.",
  },
  {
    icon: EyeOff,
    title: "Pouca visibilidade da produção",
    text: "A supervisão só descobre que a meta do turno ficou para trás quando o relatório chega no dia seguinte.",
  },
  {
    icon: SearchX,
    title: "Paradas difíceis de analisar",
    text: "Sem motivo, duração e contexto registrados de forma padronizada, fica difícil separar falha de equipamento, falta de material e setup.",
  },
  {
    icon: Boxes,
    title: "Informação difícil de rastrear",
    text: "Diante de uma reclamação, descobrir em qual máquina, turno e lote uma peça foi produzida exige horas de busca em registros diferentes.",
  },
]

const solutions = [
  {
    icon: Cable,
    title: "Conectividade industrial",
    text: "Levantamos como cada equipamento pode fornecer dados, seja por CLPs (Controladores Lógicos Programáveis), supervisórios, medidores ou sensores adicionais, e definimos a forma de coleta adequada à rede e às regras de segurança da planta.",
  },
  {
    icon: Radio,
    title: "Coleta de dados",
    text: "Estruturamos a captura de produção, estado de máquina e consumo com horário e origem registrados. Onde a coleta automática não for viável, combinamos com apontamentos digitais.",
  },
  {
    icon: ClipboardList,
    title: "Digitalização de processos",
    text: "Substituímos formulários em papel e planilhas por aplicações simples para apontamentos, checklists e registros de qualidade, pensadas para o uso no chão de fábrica.",
  },
  {
    icon: Gauge,
    title: "Monitoramento",
    text: "Painéis com produção, paradas e indicadores por linha e turno, com frequência de atualização compatível com as fontes disponíveis.",
  },
  {
    icon: Network,
    title: "Integração com sistemas de gestão",
    text: "Conectamos os dados da operação ao ERP, ao MES (sistema de execução da manufatura) e às ferramentas de manutenção, conforme as interfaces que esses sistemas oferecem.",
  },
]

const architecture: FlowNode[] = [
  {
    icon: Factory,
    title: "Equipamentos e sensores",
    description: "Máquinas, controladores, medidores e apontamentos da equipe.",
    examples: ["CLPs", "medidores", "sensores"],
  },
  {
    icon: Cable,
    title: "Conectividade",
    description: "Coleta e transporte dos dados com segurança, dentro das regras da rede industrial.",
    examples: ["gateways", "protocolos", "rede"],
  },
  {
    icon: Database,
    title: "Plataforma de dados",
    description: "Armazenamento, histórico, tratamento e contexto: máquina, turno, produto e lote.",
    examples: ["histórico", "qualidade", "contexto"],
  },
  {
    icon: BarChart3,
    title: "Indicadores, aplicações e IA",
    description: "MES, painéis, apontamentos digitais, visão computacional e consulta a documentos.",
    examples: ["MES", "OEE", "IA"],
  },
  {
    icon: Building2,
    title: "Gestão",
    description: "Decisões de produção, manutenção, qualidade e engenharia com a mesma base de informação.",
    examples: ["rotina", "prioridades", "planejamento"],
  },
]

type Offer = { icon: LucideIcon; title: string; text: string }

const mesOffers: Offer[] = [
  {
    icon: LayoutTemplate,
    title: "Arquitetura de automação e MES",
    text: "Desenhamos como máquinas, supervisórios, MES, ERP e plataforma de dados se conectam, levantamos requisitos e apoiamos a escolha da solução adequada ao porte e à maturidade da operação.",
  },
  {
    icon: ClipboardList,
    title: "MES sob medida",
    text: "Desenvolvemos os módulos de que a operação precisa, como ordens de produção, apontamentos, rastreabilidade de lotes e registros de qualidade.",
  },
  {
    icon: GitMerge,
    title: "Integração com chão de fábrica e ERP",
    text: "Conectamos o MES às máquinas, ao ERP e aos painéis de dados para que ordens, consumos e resultados circulem sem digitação duplicada.",
  },
  {
    icon: TrendingUp,
    title: "Otimização da produção",
    text: "Com os dados do MES organizados, acompanhamos OEE, paradas e perdas para priorizar melhorias com a equipe da operação.",
  },
]

const cyberOffers: Offer[] = [
  {
    icon: Target,
    title: "Diagnóstico de riscos",
    text: "Inventário de ativos, mapeamento da rede industrial e avaliação de vulnerabilidades e riscos, com um plano de ação priorizado.",
  },
  {
    icon: Network,
    title: "Arquitetura e segmentação",
    text: "Separação entre a rede corporativa (TI) e a rede industrial (OT), controle de acessos e acesso remoto seguro para equipes e fornecedores.",
  },
  {
    icon: Radar,
    title: "Monitoramento contínuo",
    text: "Acompanhamento do tráfego e de comportamentos suspeitos na rede OT, com alertas encaminhados à equipe responsável.",
  },
  {
    icon: ScrollText,
    title: "Normas e adequação",
    text: "Adequação a referências como a IEC 62443, série de normas internacionais de segurança para automação e controle industrial, além de políticas e treinamento.",
  },
]

function OfferGrid({ offers }: { offers: Offer[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {offers.map((item, index) => (
        <Reveal key={item.title} delay={index * 50}>
          <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
            <div className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
              <item.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </InteractiveSurface>
        </Reveal>
      ))}
    </div>
  )
}

const narrative = [
  {
    icon: Workflow,
    title: "Conectar equipamentos e sistemas",
    text: "Levar os dados de máquinas, supervisórios e sistemas de gestão para um mesmo lugar, respeitando o que já existe na planta.",
    href: "#solucoes",
    linkLabel: "Ver frentes de solução",
  },
  {
    icon: BarChart3,
    title: "Organizar os dados da operação",
    text: "Transformar registros dispersos em indicadores confiáveis de produção, paradas, perdas e OEE, com histórico e rastreabilidade.",
    href: industrialPages.data.href,
    linkLabel: "Dados & Inteligência Industrial",
  },
  {
    icon: ScanEye,
    title: "Aplicar visão computacional às verificações visuais",
    text: "Usar câmeras e IA para apoiar inspeções de qualidade, conferência de montagem e leitura de rótulos e códigos.",
    href: industrialPages.vision.href,
    linkLabel: "Visão Computacional",
  },
  {
    icon: BookOpen,
    title: "Facilitar a consulta ao conhecimento técnico",
    text: "Aplicar o AI Wiki a manuais, procedimentos e instruções para que as equipes encontrem a informação certa com mais rapidez.",
    href: industrialPages.wiki.href,
    linkLabel: "AI Wiki Industrial",
  },
]

const journey = [
  {
    title: "Diagnóstico",
    description: "Entendemos o processo, as decisões que precisam de dados, os equipamentos, os sistemas e a infraestrutura disponíveis.",
  },
  {
    title: "Piloto delimitado",
    description: "Escolhemos uma linha, célula ou processo com objetivo claro e implantamos uma primeira versão em escala controlada.",
  },
  {
    title: "Validação com indicadores",
    description: "Comparamos o antes e o depois com indicadores combinados no início e ajustamos o que for necessário com a equipe da operação.",
  },
  {
    title: "Expansão",
    description: "Com o piloto validado, planejamos a ampliação para outras linhas, áreas ou unidades, em etapas.",
  },
]

const faq = [
  {
    question: "Preciso trocar meus equipamentos para começar?",
    answer:
      "Não necessariamente. O projeto parte dos equipamentos e sistemas que a operação já possui. No diagnóstico avaliamos quais dados cada máquina consegue fornecer e onde podem ser necessários sensores adicionais, adaptações ou apontamentos digitais.",
  },
  {
    question: "É possível integrar qualquer máquina ou sistema?",
    answer:
      "Não existe compatibilidade universal. A integração depende de como cada equipamento e sistema disponibiliza informações, da rede e das regras de segurança da planta. Essas condições são levantadas antes de definir o escopo.",
  },
  {
    question: "Por onde começa um projeto?",
    answer:
      "Por uma conversa sobre o problema e as decisões que precisam de dados. Em seguida, fazemos um diagnóstico técnico e propomos um piloto delimitado, com indicadores definidos para avaliar o resultado.",
  },
  {
    question: "Os dados ficam na nuvem ou na planta?",
    answer:
      "Depende dos requisitos da operação, da infraestrutura disponível e das políticas de TI e segurança da empresa. A arquitetura é definida em conjunto durante o projeto.",
  },
  {
    question: "É melhor desenvolver um MES sob medida ou adotar uma solução de mercado?",
    answer:
      "Depende do processo, do porte da operação, dos sistemas existentes e da capacidade da equipe de sustentar a solução. No diagnóstico comparamos os caminhos, inclusive a evolução do que a empresa já utiliza, antes de recomendar um deles.",
  },
  {
    question: "Projetos de Cyber OT podem interromper a produção?",
    answer:
      "Em ambientes industriais, a disponibilidade da operação vem primeiro. As ações são planejadas com as equipes de produção, manutenção e TI, começando por levantamentos que não interferem nos equipamentos, e as mudanças na rede são programadas e testadas antes de entrar em uso.",
  },
  {
    question: "A Nexus executa projetos elétricos, painéis ou programação de CLPs?",
    answer:
      "Nosso foco é integração, software, dados e inteligência artificial. Quando o projeto exigir intervenções elétricas, em painéis ou na lógica dos controladores, essa etapa é planejada em conjunto com a equipe técnica da empresa ou com fornecedores especializados indicados por ela.",
  },
]

export default function AutomacaoIndustrialPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        eyebrow="Tecnologia para a indústria"
        title="Automação Industrial & Indústria 4.0"
        lead="Conecte máquinas, sistemas e pessoas para transformar dados da operação em decisões."
        support={
          <p>
            Conectamos o chão de fábrica aos dados, à inteligência artificial e à gestão. Desenvolvemos projetos
            sob medida de arquitetura de automação, MES, segurança OT, integração industrial, software, dados e IA
            para gestores de produção, manutenção, qualidade, engenharia e TI.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Conversar sobre minha operação" }}
        secondaryCta={{ href: "#arquitetura", label: "Ver como funciona" }}
      />

      <IndustrialSection
        id="desafios"
        eyebrow="Problemas que atendemos"
        title="Quando a operação cresce mais rápido do que a informação"
        description="Situações comuns em fábricas de diferentes portes, que dificultam a rotina de quem precisa decidir rápido."
        alt
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
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

      <IndustrialSection
        id="solucoes"
        eyebrow="Frentes de solução"
        title="Projetos sob medida de integração, software, dados e IA"
        description="Cada frente pode ser contratada de forma isolada ou combinada, conforme a prioridade da operação."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <InteractiveSurface className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </InteractiveSurface>
            </Reveal>
          ))}
          <Reveal delay={260}>
            <Note className="h-full">
              <p className="font-heading text-base font-semibold text-foreground">Partimos do que já existe</p>
              <p className="mt-3">
                Cada projeto considera os equipamentos e sistemas instalados, a conectividade, a infraestrutura de rede
                e de TI e os requisitos da operação. Nem todo equipamento fornece dados da mesma forma, e isso é
                avaliado no diagnóstico, sem promessa de substituir ou integrar automaticamente todo o parque instalado.
              </p>
            </Note>
          </Reveal>
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="mes"
        eyebrow="Arquitetura e MES"
        title="Tecnologia e arquitetura de automação e otimização da produção com MES"
        description={
          <p>
            O MES organiza o que acontece entre o planejamento feito no ERP e o chão de fábrica: ordens de produção,
            apontamentos, rastreabilidade e qualidade. Atuamos da arquitetura à implantação, com módulos sob medida ou
            integrando sistemas que a empresa já possui.
          </p>
        }
        alt
      >
        <OfferGrid offers={mesOffers} />
        <Note className="mt-6">
          A escolha entre desenvolver módulos sob medida, adotar uma solução de mercado ou evoluir o que já existe é
          feita no diagnóstico, considerando processo, prazo, custo e capacidade da equipe de sustentar a solução. Os
          indicadores gerados alimentam os{" "}
          <Link href={industrialPages.data.href} className="text-primary underline-offset-4 hover:underline">painéis de dados industriais</Link>.
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="arquitetura"
        eyebrow="Como funciona"
        title="Da máquina à decisão"
        description="Uma visão simplificada das camadas de um projeto. Os componentes de cada camada são definidos conforme a realidade da planta."
        alt
      >
        <FlowDiagram label="Fluxo da informação, dos equipamentos à gestão" nodes={architecture} />
        <Link
          href="#cyber-ot"
          className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-primary/35 bg-primary/[0.04] px-5 py-4 text-sm outline-none transition-colors hover:border-primary/60 focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <span className="flex items-center gap-3">
            <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="font-semibold text-foreground">Cyber OT</span>
              <span className="text-muted-foreground"> · segurança aplicada a todas as camadas, da rede industrial à gestão</span>
            </span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </IndustrialSection>

      <IndustrialSection
        id="cyber-ot"
        eyebrow="Cyber OT"
        title="Proteção de sistemas industriais contra ameaças cibernéticas"
        description={
          <p>
            OT (tecnologia operacional) é o conjunto de equipamentos e sistemas que controlam a produção, como CLPs,
            supervisórios e redes industriais. Quanto mais a fábrica se conecta a sistemas corporativos e à internet,
            mais esses ativos precisam de proteção, sem comprometer a disponibilidade da operação.
          </p>
        }
      >
        <OfferGrid offers={cyberOffers} />
        <Note className="mt-6">
          <span className="inline-flex items-start gap-2">
            <KeyRound className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              As ações são planejadas com as equipes de produção, manutenção e TI para evitar interrupções. Nenhuma
              medida elimina totalmente o risco: o objetivo é reduzir a exposição e aumentar a capacidade de detectar
              ameaças a tempo.
            </span>
          </span>
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="caminho"
        eyebrow="Uma frente, quatro camadas"
        title="Do chão de fábrica à inteligência artificial"
        description="As ofertas se complementam: cada etapa aproveita a base construída na anterior."
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {narrative.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card/60 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  <Link href={item.href} className="group mt-5 inline-flex items-center gap-2 self-start rounded text-sm font-medium text-primary outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                    {item.linkLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </IndustrialSection>

      <IndustrialAiHighlight
        id="ia-aplicada"
        eyebrow="IA na operação"
        intro="Duas aplicações em destaque para a indústria: a visão computacional apoia as verificações visuais da produção e o AI Wiki facilita o acesso à documentação técnica."
        footer={
          <div id="agentes-ia" className="flex scroll-mt-24 flex-col gap-4 rounded-[1.25rem] border border-white/10 bg-card/60 p-6 sm:flex-row sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] text-primary">
              <Bot className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Agentes de IA</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Inteligência artificial aplicada para apoiar processos e decisões da operação, com escopo e limites
                definidos em cada projeto.
              </p>
            </div>
          </div>
        }
      />

      <IndustrialSection
        id="jornada"
        eyebrow="Jornada de implantação"
        title="Começar pequeno, medir e então expandir"
        description="Um caminho em etapas reduz o risco e permite que a equipe da operação participe das decisões."
      >
        <Journey steps={journey} />
      </IndustrialSection>

      <IndustrialFaq items={faq} />

      <ContactSection
        eyebrow="Próximo passo"
        title="Conte como sua operação funciona hoje."
        description="Descreva o processo, os sistemas envolvidos e onde a informação se perde. A primeira conversa serve para entender o contexto e definir se um diagnóstico faz sentido."
        defaultInterest="automacao-industrial"
        messageLabel="Qual é o seu desafio?"
        messagePlaceholder="Ex.: as paradas são anotadas em papel e só conseguimos analisar no fim do mês."
      />
      <Footer />
    </main>
  )
}
