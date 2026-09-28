import Link from "next/link"
import { BookOpenCheck, Cable, Globe, RefreshCcw, ShieldCheck, Smartphone, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { InteractiveSurface } from "@/components/interactive-surface"
import { Reveal } from "@/components/reveal"
import { IndustrialPageHero } from "@/components/industrial/page-hero"
import { IndustrialSection, Note } from "@/components/industrial/section"
import { Journey } from "@/components/industrial/journey"
import { IndustrialFaq } from "@/components/industrial/faq"
import { ServiceRelated } from "@/components/service-related"
import { servicePages } from "@/lib/navigation"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  path: servicePages.softwareFactory.href,
  title: "Fábrica de Software | Nexus Data Analytics",
  description:
    "Fábrica de software da Nexus: sistemas web sob medida, aplicativos mobile, integrações e APIs, e manutenção evolutiva de sistemas.",
})

const offers = [
  {
    icon: Globe,
    title: "Sistemas web sob medida",
    text: "Aplicações e portais desenvolvidos a partir dos processos da sua empresa, para substituir planilhas, controles manuais e ferramentas que não se adaptam.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    text: "Apps para iOS e Android para equipes em campo, clientes ou parceiros.",
  },
  {
    icon: Cable,
    title: "Integrações e APIs",
    text: "Integração entre sistemas, criação de APIs e automação de processos que hoje dependem de digitação duplicada.",
  },
  {
    icon: RefreshCcw,
    title: "Manutenção evolutiva",
    text: "Evolução contínua de sistemas entregues pela Nexus ou por terceiros, com novas funcionalidades, ajustes e correções.",
  },
]

const principles = [
  { icon: Users, title: "Validação frequente", text: "Entregas em ciclos curtos, para que as pessoas que vão usar o sistema participem desde o início." },
  { icon: ShieldCheck, title: "Segurança desde o projeto", text: "Controle de acessos e cuidado com dados pessoais considerados no desenho da solução." },
  { icon: BookOpenCheck, title: "Conhecimento que permanece", text: "Documentação e transferência de conhecimento fazem parte da entrega." },
]

const journey = [
  { title: "Descoberta", description: "Entendemos objetivos, usuários, processos e restrições para definir o que precisa ser construído." },
  { title: "Desenho da solução", description: "Fluxos, protótipos e arquitetura, com o escopo da primeira versão bem delimitado." },
  { title: "Desenvolvimento em ciclos", description: "Entregas frequentes para validação, com ajustes de prioridade a cada ciclo." },
  { title: "Testes e publicação", description: "Verificação de qualidade e segurança antes de colocar o sistema em uso." },
  { title: "Evolução", description: "Manutenção evolutiva com a Nexus ou transferência para a equipe da sua empresa." },
]

const faq = [
  {
    question: "Quanto custa e quanto tempo leva?",
    answer:
      "Depende do escopo. A etapa de descoberta define o que será construído na primeira versão e, a partir dela, apresentamos prazo e investimento.",
  },
  {
    question: "Vocês evoluem um sistema que já existe?",
    answer:
      "Sim. Começamos por uma avaliação técnica do código, da documentação e do ambiente, para indicar riscos e o melhor caminho antes de propor mudanças.",
  },
  {
    question: "Quem mantém o sistema depois da entrega?",
    answer:
      "Você escolhe: a Nexus pode seguir com a manutenção evolutiva, ou a sua equipe assume com o apoio da documentação e da transferência de conhecimento.",
  },
]

export default function FabricaDeSoftwarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={servicePages.softwareFactory.label}
        breadcrumbParent={{ href: "/#servicos", label: "Serviços" }}
        eyebrow="Serviços"
        title="Fábrica de Software"
        lead="Tire do papel os sistemas de que a sua operação precisa."
        support={
          <p>
            Desenvolvemos sistemas web, aplicativos mobile e integrações sob medida, e seguimos evoluindo o que foi
            entregue.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Conversar sobre meu projeto" }}
        secondaryCta={{ href: "#o-que-desenvolvemos", label: "Ver o que desenvolvemos" }}
      />

      <IndustrialSection
        id="o-que-desenvolvemos"
        eyebrow="O que desenvolvemos"
        title="Software sob medida, do primeiro protótipo à evolução contínua"
        alt
      >
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
        <Note className="mt-6">
          Quando o sistema precisa de dados ou inteligência artificial, a mesma equipe conecta o desenvolvimento aos{" "}
          <Link href="/#servicos" className="text-primary underline-offset-4 hover:underline">serviços de dados e IA</Link>{" "}
          da Nexus. Veja também os{" "}
          <Link href="/#produtos" className="text-primary underline-offset-4 hover:underline">produtos próprios</Link>{" "}
          que desenvolvemos.
        </Note>
      </IndustrialSection>

      <IndustrialSection id="principios" eyebrow="Como trabalhamos" title="Princípios que acompanham cada projeto">
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </IndustrialSection>

      <IndustrialSection id="etapas" eyebrow="Etapas" title="Da descoberta à evolução" alt>
        <Journey steps={journey} />
      </IndustrialSection>

      <IndustrialFaq items={faq} />

      <ServiceRelated
        links={[
          { href: servicePages.outsourcing.href, title: "Outsourcing de TI", text: "Profissionais, squads dedicados, sustentação de sistemas e suporte." },
          { href: "/#servicos", title: "Serviços de dados e IA", text: "Governança, engenharia, analytics e ciência de dados aplicados ao negócio." },
          { href: "/automacao-industrial", title: "Automação Industrial", text: "Software, dados e IA conectando o chão de fábrica à gestão." },
        ]}
      />

      <ContactSection
        eyebrow="Próximo passo"
        title="Conte qual sistema você precisa."
        description="Descreva o processo, quem vai usar e o que existe hoje. A primeira conversa ajuda a definir o escopo da descoberta."
        defaultInterest="fabrica-de-software"
        messageLabel="Qual é o seu projeto?"
        messagePlaceholder="Ex.: queremos um app para a equipe de campo registrar visitas e sincronizar com o nosso ERP."
      />
      <Footer />
    </main>
  )
}
