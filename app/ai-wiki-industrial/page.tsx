import Link from "next/link"
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  FileSearch,
  FileStack,
  GraduationCap,
  History,
  KeyRound,
  Lock,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection, Note } from "@/components/industrial/section"
import { IndustrialFaq } from "@/components/industrial/faq"
import { RelatedIndustrialPages } from "@/components/industrial/related-pages"
import { WikiIndustrialExample } from "@/components/industrial/wiki-industrial-example"
import { industrialPages } from "@/lib/industrial-pages"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: industrialPages.wiki.href,
  title: "AI Wiki para a Indústria | Nexus Data Analytics",
  description:
    "Aplicação do AI Wiki da Nexus à consulta de manuais de equipamentos, procedimentos operacionais, instruções de qualidade e documentação técnica industrial.",
})

const useCases = [
  { icon: BookOpenCheck, title: "Manuais de equipamentos", text: "Localizar rapidamente a seção relevante de um manual extenso, sem depender de quem conhece o documento de cor." },
  { icon: FileSearch, title: "Procedimentos operacionais", text: "Encontrar o procedimento correto para uma atividade, a partir de uma pergunta em linguagem natural." },
  { icon: GraduationCap, title: "Treinamento e integração", text: "Apoiar novos profissionais a encontrar as informações de que precisam durante os primeiros meses." },
  { icon: ClipboardCheck, title: "Instruções de qualidade", text: "Consultar critérios e instruções de inspeção vigentes de cada produto ou processo." },
  { icon: History, title: "Documentação técnica e manutenção", text: "Buscar em documentação técnica e em históricos de manutenção, quando esses registros estiverem disponíveis e em formato compatível." },
]

const requirements = [
  { icon: FileStack, title: "Documentos aprovados e atualizados", text: "A qualidade das respostas depende da base. Definimos com a empresa quais documentos entram e como são mantidos." },
  { icon: KeyRound, title: "Acesso autorizado", text: "As fontes consultadas e os usuários com acesso são definidos conforme as políticas da empresa." },
  { icon: ShieldCheck, title: "Validação das respostas", text: "Antes da implantação, especialistas da operação avaliam as respostas a perguntas reais." },
  { icon: UserCheck, title: "Apoio, não substituição", text: "O assistente ajuda a encontrar a informação. Ele não substitui procedimentos oficiais nem os profissionais responsáveis." },
]

const faq = [
  {
    question: "O AI Wiki já é uma solução específica para a indústria?",
    answer:
      "O AI Wiki é um produto da Nexus para consulta ao conhecimento interno. Esta página apresenta a aplicação dele à documentação industrial. A adequação a cada operação é avaliada com a sua equipe antes de qualquer implantação.",
  },
  {
    question: "O assistente pode orientar a execução de uma atividade?",
    answer:
      "Ele ajuda a localizar o documento e o trecho relevante. A execução deve seguir o procedimento oficial aprovado e as orientações dos responsáveis pela área.",
  },
  {
    question: "Pode funcionar no ambiente da própria empresa?",
    answer:
      "O AI Wiki conta com opção de execução on-premise, ou seja, na infraestrutura da própria empresa. A arquitetura e os requisitos são definidos na avaliação de cada projeto.",
  },
  {
    question: "Quais documentos podem ser usados?",
    answer:
      "Depende do formato, da qualidade e da organização dos arquivos. Na avaliação, analisamos uma amostra da documentação para indicar o que pode ser usado diretamente e o que precisa ser preparado.",
  },
]

export default function AiWikiIndustrialPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={industrialPages.wiki.shortName}
        eyebrow="AI Wiki na indústria"
        title="AI Wiki para a Indústria"
        lead="Facilite o acesso ao conhecimento técnico da sua operação."
        support={
          <p>
            Explore a aplicação do AI Wiki à consulta de manuais, procedimentos e documentação industrial, ajudando as
            equipes a encontrar as informações de que precisam.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Solicitar demonstração do AI Wiki" }}
        secondaryCta={{ href: "#exemplo", label: "Ver exemplo" }}
      />

      <IndustrialSection
        id="produto"
        eyebrow="Sobre o AI Wiki"
        title="Um produto da Nexus aplicado à documentação técnica"
        description={
          <p>
            O{" "}
            <Link href="/produtos/ai-wiki" className="text-accent underline-offset-4 hover:underline">AI Wiki</Link>{" "}
            transforma políticas, manuais e processos internos em respostas vinculadas às fontes utilizadas. Na
            indústria, a mesma proposta pode ajudar equipes de produção, manutenção, qualidade e engenharia a
            encontrar o documento certo com mais rapidez.
          </p>
        }
        alt
      >
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Lock className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="leading-7 text-muted-foreground">
                O AI Wiki conta com opção de execução on-premise, na infraestrutura da própria empresa. A demonstração
                existente usa documentos corporativos fictícios.
              </p>
            </div>
            <Button variant="outline" className="button-sheen group shrink-0" asChild>
              <Link href="/produtos/ai-wiki">
                Testar demonstração do AI Wiki
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </IndustrialSection>

      <IndustrialSection id="casos-de-uso" eyebrow="Casos de uso" title="Onde o AI Wiki pode ajudar na operação">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-card/60 p-6">
                <div className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent">
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
        id="exemplo"
        eyebrow="Exemplo"
        title="Uma pergunta do dia a dia"
        description="O objetivo é levar a pessoa ao documento correto, e não improvisar uma instrução."
        alt
      >
        <Reveal className="max-w-3xl">
          <WikiIndustrialExample />
        </Reveal>
      </IndustrialSection>

      <IndustrialSection
        id="requisitos"
        eyebrow="Cuidados na aplicação"
        title="O que um projeto precisa considerar"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="font-heading mt-5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Note className="mt-6">
          Integrações com outros sistemas, formatos de documentos e requisitos de infraestrutura são avaliados em cada
          projeto e confirmados antes da proposta.
        </Note>
      </IndustrialSection>

      <IndustrialFaq items={faq} />
      <RelatedIndustrialPages current="wiki" />

      <ContactSection
        eyebrow="Próximo passo"
        title="Veja o AI Wiki com o contexto da sua operação."
        description="Conte quais documentos a equipe mais consulta e onde a busca por informação atrasa o trabalho. A demonstração é conduzida a partir desse contexto."
        defaultInterest="ai-wiki-industrial"
        messageLabel="Qual é o seu desafio?"
        messagePlaceholder="Ex.: os procedimentos estão espalhados em pastas e as equipes de turno têm dificuldade para encontrá-los."
      />
      <Footer />
    </main>
  )
}
