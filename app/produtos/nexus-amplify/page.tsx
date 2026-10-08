import type { ReactNode } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Database,
  FileDown,
  FileText,
  Grid3x3,
  History,
  KeyRound,
  Layers,
  LineChart,
  MailCheck,
  Network,
  ShieldCheck,
  Target,
  UserCog,
  Users,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { NexusAmplifyDemo } from "@/components/nexus-amplify-demo"
import { Reveal } from "@/components/reveal"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: "/produtos/nexus-amplify",
  title: "Nexus Amplify | Nexus Data Analytics",
  description:
    "Nexus Amplify: delegação que desenvolve líderes, com a metodologia CASAR, Coach de Delegação com IA, relatórios para o RH e controles de LGPD. Explore a demonstração com dados simulados.",
})

const accent = "#f47c6b"

const problems = [
  { icon: Layers, title: "Centralização", text: "Tudo continua dependendo do líder." },
  { icon: Target, title: "Baixa autonomia", text: "O time executa, mas não decide." },
  { icon: Users, title: "Poucos sucessores", text: "O conhecimento permanece concentrado." },
]

const casar = [
  { letter: "C", title: "Conectar", text: "Entenda para quem você vai delegar e o momento dessa pessoa." },
  { letter: "A", title: "Alinhar", text: "Atividade, resultado esperado, prazo e critérios claros." },
  { letter: "S", title: "Superar", text: "Escolha a competência que essa delegação vai desenvolver." },
  { letter: "A", title: "Acompanhar", text: "Checkpoints suficientes para apoiar sem microgerenciar." },
  { letter: "R", title: "Redirecionar", text: "Feedback ao final e decisão sobre evoluir a autonomia." },
]

const hrReports = [
  { icon: UserCog, title: "Comparativo de líderes", text: "Índice de Delegação de cada líder, com alertas de delegações atrasadas e checkpoints vencidos." },
  { icon: Network, title: "Mapa de sucessão", text: "Prontidão e autonomia de cada pessoa, por área e por líder." },
  { icon: Grid3x3, title: "Matriz de competências", text: "O que está sendo desenvolvido em cada área e o que ninguém está trabalhando." },
  { icon: LineChart, title: "Evolução mês a mês", text: "Índice de Delegação médio, autonomia e foco em desenvolvimento da empresa ou de cada área." },
  { icon: FileText, title: "Relatório mensal", text: "Documento consolidado para a diretoria, pronto para imprimir ou salvar em PDF." },
]

const privacy = [
  { icon: Database, title: "Dados isolados por empresa", text: "Cada empresa só acessa os próprios dados, e cada líder só vê a própria hierarquia. A regra vale no banco de dados, não só na tela." },
  { icon: History, title: "Trilha de auditoria", text: "Registro de quem criou, alterou, excluiu ou consultou dados de cada pessoa, guardado por 2 anos." },
  { icon: FileDown, title: "Direitos do titular", text: "O RH exporta tudo o que o sistema guarda sobre uma pessoa, para atender pedidos de acesso e portabilidade." },
  { icon: KeyRound, title: "Verificação em duas etapas", text: "Login com app autenticador, que pode ser exigido por perfil, por exemplo para todo o RH." },
  { icon: MailCheck, title: "Acesso só por convite", text: "Ninguém cria conta sozinho: o acesso é liberado pela empresa, para um e-mail confirmado." },
  { icon: ShieldCheck, title: "Uso responsável", text: "Indicadores de desenvolvimento, não de avaliação formal. O Coach com IA só é ligado para empresas que optarem por ele." },
]

const steps = [
  { title: "Implantação com a Nexus", text: "A Nexus configura o ambiente da sua empresa e o RH monta a hierarquia de líderes e times." },
  { title: "Líderes delegam com método", text: "Cada delegação é registrada pelo modo guiado ou conversando com o Coach." },
  { title: "Autonomia vira indicador", text: "Checkpoints, feedback e relatórios mostram quem está crescendo e quem está pronto para assumir mais." },
]

function Section({ id, eyebrow, title, description, alt, children }: { id: string; eyebrow: string; title: string; description?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 md:py-28 ${alt ? "section-alt" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>{eyebrow}</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl">{title}</h2>
          {description && <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function CardGrid({ items, columns = "lg:grid-cols-3" }: { items: Array<{ icon: typeof Layers; title: string; text: string }>; columns?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${columns}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 50}>
          <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
            <item.icon className="size-5" style={{ color: accent }} aria-hidden="true" />
            <h3 className="font-heading mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function NexusAmplifyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-20 size-[28rem] rounded-full bg-[#f47c6b]/[0.08] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/#produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#f47c6b]">
            <ArrowLeft className="size-4" /> Voltar aos produtos
          </Link>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>Demonstração interativa</p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Nexus Amplify</h1>
          <p className="mb-10 mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Delegue tarefas e desenvolva pessoas. Cada delegação vira uma oportunidade de ampliar a autonomia do time e
            preparar novos líderes, com um Coach de IA e dados que mostram a evolução.
          </p>
          <NexusAmplifyDemo />
        </div>
      </section>

      <Section id="desafios" eyebrow="O problema" title="Você está delegando ou apenas distribuindo tarefas?" alt>
        <CardGrid items={problems} />
      </Section>

      <Section
        id="casar"
        eyebrow="Metodologia CASAR"
        title="Uma metodologia simples para multiplicar liderança"
        description="Conectar → Alinhar → Superar → Acompanhar → Redirecionar. O Coach conduz o líder por essas etapas a cada nova delegação."
      >
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {casar.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 50} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg font-heading text-sm font-bold text-[#1a0b08]" style={{ background: accent }} aria-hidden="true">
                    {step.letter}
                  </span>
                  <h3 className="font-heading mt-4 font-semibold">{index + 1}. {step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="rh"
        eyebrow="Para o RH"
        title="A cultura de delegação da empresa, em números"
        description="Tudo calculado a partir do dia a dia dos líderes, sem formulários extras nem planilhas."
        alt
      >
        <CardGrid items={hrReports} />
      </Section>

      <Section
        id="lgpd"
        eyebrow="Segurança e LGPD"
        title="Dados de pessoas pedem cuidado"
        description="Feedbacks e dados de desenvolvimento são informações sensíveis. Por isso, os controles de privacidade fazem parte do produto."
      >
        <CardGrid items={privacy} />
      </Section>

      <Section id="como-funciona" eyebrow="Como funciona" title="Da implantação aos indicadores" alt>
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-card/60 p-6">
              <span className="font-heading text-3xl font-semibold" style={{ color: accent }}>{index + 1}</span>
              <h3 className="font-heading mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <ContactSection
        eyebrow="Próximo passo"
        title="Leve o Nexus Amplify para a sua empresa."
        description="A contratação é feita sob medida para o tamanho dos seus times, com implantação e acompanhamento da Nexus. Conte um pouco sobre a sua liderança e agende uma demonstração."
        defaultInterest="nexus-amplify"
        messagePlaceholder="Ex.: temos 40 líderes e queremos acompanhar a autonomia dos times e preparar sucessores."
      />
      <Footer />
    </main>
  )
}
