import Link from "next/link"
import {
  Barcode,
  BrainCircuit,
  Camera,
  ClipboardList,
  Database,
  Gauge,
  Layers,
  Lightbulb,
  Package,
  Puzzle,
  Ruler,
  ScanSearch,
  Shapes,
  Tags,
  ListChecks,
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
import { RelatedIndustrialPages } from "@/components/industrial/related-pages"
import { VisionInspectionDemo } from "@/components/industrial/vision-inspection-demo"
import { industrialPages } from "@/lib/industrial-pages"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: industrialPages.vision.href,
  title: "Visão Computacional para a Indústria | Nexus Data Analytics",
  description:
    "Projetos de visão computacional com câmeras e inteligência artificial para apoiar inspeção de qualidade, conferência de montagem, rotulagem e rastreabilidade na produção.",
})

const featured = [
  {
    icon: ScanSearch,
    title: "Inspeção de qualidade",
    text: "Identificação de defeitos visíveis, como alterações de superfície, deformações e falhas de acabamento, para apoiar a equipe de qualidade com verificações consistentes e registradas.",
    examples: ["riscos e manchas", "deformações", "falhas de acabamento"],
  },
  {
    icon: Puzzle,
    title: "Conferência de montagem",
    text: "Verificação da presença, da posição e da orientação de componentes em montagens e kits, antes que o item avance para a próxima etapa.",
    examples: ["presença", "posição", "orientação"],
  },
]

const applications = [
  {
    icon: Package,
    title: "Contagem e fluxo",
    text: "Contagem de peças ou embalagens em pontos definidos da operação.",
  },
  {
    icon: Tags,
    title: "Embalagem e rotulagem",
    text: "Conferência da presença e do posicionamento de rótulos e leitura de informações impressas por OCR (reconhecimento óptico de caracteres), quando tecnicamente viável.",
  },
  {
    icon: Barcode,
    title: "Leitura e rastreabilidade",
    text: "Leitura de códigos e associação de cada inspeção ao produto, lote ou ordem de produção.",
  },
  {
    icon: ClipboardList,
    title: "Padronização das inspeções",
    text: "Registro de imagens, resultados e critérios para apoiar a análise de qualidade e a investigação de ocorrências.",
  },
]

const flow: FlowNode[] = [
  {
    icon: Camera,
    title: "Captura de imagens",
    description: "Câmeras e iluminação posicionadas para registrar o que precisa ser verificado.",
  },
  {
    icon: BrainCircuit,
    title: "Análise",
    description: "Modelos de IA e regras de visão avaliam cada imagem conforme os critérios definidos.",
  },
  {
    icon: ListChecks,
    title: "Resultado da inspeção",
    description: "Conforme, não conforme ou encaminhado para revisão de uma pessoa da equipe.",
  },
  {
    icon: Database,
    title: "Registro e integração",
    description: "Imagens e resultados armazenados e disponíveis para painéis e sistemas da operação.",
  },
]

const factors = [
  { icon: Ruler, title: "Tamanho do defeito", text: "Quanto menor o detalhe, maior a exigência de resolução e de enquadramento." },
  { icon: Camera, title: "Posição da câmera", text: "O ângulo e a distância precisam mostrar a região inspecionada sem obstruções." },
  { icon: Lightbulb, title: "Iluminação", text: "Reflexos, sombras e variação de luz ambiente influenciam diretamente o resultado." },
  { icon: Gauge, title: "Velocidade da linha", text: "Define o tempo disponível para capturar e analisar cada item." },
  { icon: Shapes, title: "Variação dos produtos", text: "Cores, formatos e acabamentos diferentes exigem amostras de cada variação." },
]

const journey = [
  {
    title: "Problema e critérios de aceitação",
    description: "Definimos o que precisa ser verificado, o que é considerado defeito e como o resultado será usado.",
  },
  {
    title: "Avaliação das condições da linha",
    description: "Analisamos imagens, câmeras, iluminação, posicionamento e ritmo da linha.",
  },
  {
    title: "Piloto com amostras representativas",
    description: "Testamos com amostras de situações normais e com desvios reais do processo.",
  },
  {
    title: "Validação com métricas acordadas",
    description: "Avaliamos defeitos não detectados, rejeições indevidas e tempo de processamento com a equipe de qualidade.",
  },
  {
    title: "Implantação, integração e acompanhamento",
    description: "Colocamos a solução em uso, integramos aos sistemas definidos no escopo e acompanhamos o desempenho.",
  },
]

const faq = [
  {
    question: "Posso utilizar as câmeras que já tenho?",
    answer:
      "Em alguns casos, sim. No diagnóstico avaliamos se a resolução, o posicionamento, a iluminação e a forma de acesso às imagens das câmeras existentes atendem ao que precisa ser inspecionado. Quando não atendem, indicamos o que precisaria mudar.",
  },
  {
    question: "Preciso ter imagens dos defeitos?",
    answer:
      "Imagens de exemplos reais ajudam muito, tanto de peças boas quanto de desvios. Se ainda não houver um acervo, a coleta de amostras pode fazer parte das primeiras etapas do projeto.",
  },
  {
    question: "A solução funciona com a linha em movimento?",
    answer:
      "Depende da velocidade da linha, do tamanho do que precisa ser verificado e das condições de captura. Esses fatores são avaliados antes do piloto para definir se a inspeção em movimento é viável e com qual configuração.",
  },
  {
    question: "É possível integrar com os sistemas existentes?",
    answer:
      "Os resultados podem ser enviados a painéis e sistemas da operação conforme as interfaces disponíveis e o escopo acordado. A integração com cada sistema é avaliada no diagnóstico.",
  },
  {
    question: "Como avaliamos se o projeto é viável?",
    answer:
      "Com critérios de aceitação definidos no início e um piloto com amostras representativas. Medimos defeitos não detectados, rejeições indevidas e tempo de processamento, e decidimos juntos se a solução está pronta para avançar.",
  },
]

export default function VisaoComputacionalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={industrialPages.vision.shortName}
        eyebrow="Visão computacional industrial"
        title="Visão Computacional para a Indústria"
        lead="Transforme imagens da sua operação em informações para inspecionar, conferir e rastrear a produção."
        support={
          <p>
            Desenvolvemos projetos de visão computacional que utilizam câmeras e inteligência artificial para apoiar
            o controle de qualidade e automatizar verificações visuais, conforme as necessidades de cada processo.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Avaliar uma aplicação de visão computacional" }}
        secondaryCta={{ href: "#aplicacoes", label: "Conhecer aplicações" }}
      />

      <IndustrialSection
        id="demonstracao"
        eyebrow="Como a inspeção aparece"
        title="Marcações que explicam o que foi verificado"
        description="Veja como uma verificação visual pode indicar o que está conforme e o que precisa de revisão humana."
        alt
      >
        <Reveal>
          <VisionInspectionDemo />
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="aplicacoes"
        eyebrow="Aplicações possíveis"
        title="Onde a visão computacional pode apoiar a operação"
        description="Exemplos de aplicações avaliadas caso a caso. A viabilidade de cada uma depende das condições do processo."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <InteractiveSurface className="h-full rounded-[1.25rem] border border-primary/30 bg-card/75 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    Em destaque
                  </span>
                </div>
                <h3 className="font-heading mt-6 text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <li key={example} className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      {example}
                    </li>
                  ))}
                </ul>
              </InteractiveSurface>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </IndustrialSection>

      <IndustrialSection
        id="como-funciona"
        eyebrow="Como funciona"
        title="Da imagem ao registro"
        description={
          <p>
            Os resultados podem alimentar{" "}
            <Link href={industrialPages.data.href} className="text-primary underline-offset-4 hover:underline">painéis de dados industriais</Link>{" "}
            e sistemas da operação, conforme o escopo e as interfaces disponíveis.
          </p>
        }
        alt
      >
        <FlowDiagram label="Etapas de uma inspeção por visão computacional" nodes={flow} />
        <Note className="mt-6">
          Rejeição automática de peças, comandos a máquinas e atuação em sistemas de segurança não fazem parte de uma
          entrega padrão. Quando o processo exigir atuação física, isso demanda projeto, integração e validação
          específicos, em conjunto com a equipe responsável pela automação da linha.
        </Note>
      </IndustrialSection>

      <IndustrialSection
        id="viabilidade"
        eyebrow="Viabilidade"
        title="Cada processo tem condições próprias"
        description="A viabilidade de uma aplicação depende de fatores físicos da linha. Por isso, avaliamos antes de prometer resultados."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {factors.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-5">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="data-panel grid gap-6 rounded-2xl border border-white/10 p-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] text-primary">
              <Layers className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Como o piloto é avaliado</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Os critérios consideram defeitos não detectados, rejeições indevidas e tempo de processamento. Não
                prometemos precisão de 100% nem a eliminação da inspeção humana: o objetivo é dar à equipe
                verificações mais consistentes, registradas e fáceis de auditar.
              </p>
            </div>
          </div>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection id="jornada" eyebrow="Jornada do projeto" title="Do critério de aceitação à operação" alt>
        <Journey steps={journey} />
      </IndustrialSection>

      <IndustrialFaq items={faq} />
      <RelatedIndustrialPages current="vision" />

      <ContactSection
        eyebrow="Próximo passo"
        title="O que você gostaria de verificar com imagens?"
        description="Conte qual processo, produto ou verificação você tem em mente. A primeira conversa ajuda a entender o contexto e a definir se vale seguir para uma avaliação técnica."
        defaultInterest="visao-computacional"
        messageLabel="Qual é o seu desafio?"
        messagePlaceholder="Ex.: a conferência de montagem é visual e alguns itens seguem sem um componente."
      />
      <Footer />
    </main>
  )
}
