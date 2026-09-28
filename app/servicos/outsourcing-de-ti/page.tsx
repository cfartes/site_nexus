import { CalendarClock, Headset, Layers, ServerCog, UserPlus, Users, Wrench } from "lucide-react"
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
  path: servicePages.outsourcing.href,
  title: "Outsourcing de TI | Nexus Data Analytics",
  description:
    "Outsourcing de TI com a Nexus: alocação de profissionais, squads dedicados, sustentação de sistemas e suporte e infraestrutura, no modelo adequado à demanda da sua empresa.",
})

const models = [
  {
    icon: UserPlus,
    title: "Alocação de profissionais",
    text: "Especialistas da Nexus em dados, desenvolvimento e BI trabalhando junto ao seu time, com a gestão do dia a dia feita pela sua empresa.",
  },
  {
    icon: Users,
    title: "Squads dedicados",
    text: "Times completos, gerenciados pela Nexus, dedicados a um produto, projeto ou frente de trabalho, com objetivos e entregas acordados.",
  },
  {
    icon: Wrench,
    title: "Sustentação de sistemas",
    text: "Manutenção, correções e evolução de sistemas e ambientes de dados que já estão em produção.",
  },
  {
    icon: ServerCog,
    title: "Suporte e infraestrutura",
    text: "Service desk, administração de ambientes e gestão de infraestrutura e nuvem.",
  },
]

const situations = [
  { icon: CalendarClock, title: "Projetos com prazo", text: "Uma demanda cresceu e o time atual não comporta o volume no prazo necessário." },
  { icon: Layers, title: "Especialidades que faltam", text: "O projeto precisa de competências que a empresa não tem ou não quer manter em tempo integral." },
  { icon: Wrench, title: "Sistemas sem dono", text: "Sistemas importantes estão em produção sem um time responsável pela sustentação." },
  { icon: Headset, title: "Foco no estratégico", text: "A equipe interna precisa sair da rotina operacional para se dedicar a iniciativas prioritárias." },
]

const journey = [
  { title: "Entendimento da demanda", description: "Levantamos escopo, perfis necessários, volume de trabalho e o nível de serviço esperado." },
  { title: "Definição do modelo", description: "Escolhemos juntos entre alocação, squad ou serviço gerenciado, com indicadores e rotinas de acompanhamento." },
  { title: "Início e integração", description: "Os profissionais são integrados às ferramentas, processos e canais de comunicação da sua empresa." },
  { title: "Acompanhamento contínuo", description: "Revisões periódicas de entregas e indicadores, com ajustes de equipe e escopo quando necessário." },
]

const faq = [
  {
    question: "Qual a diferença entre alocação de profissionais e squad dedicado?",
    answer:
      "Na alocação, o profissional se integra ao seu time e a gestão das atividades fica com a sua empresa. No squad dedicado, a Nexus monta e gerencia o time e responde pelas entregas combinadas.",
  },
  {
    question: "Vocês assumem a sustentação de sistemas desenvolvidos por outras empresas?",
    answer:
      "Sim, após uma avaliação técnica do código, da documentação e do ambiente. Essa avaliação indica os riscos e o que precisa ser feito antes de assumir a sustentação.",
  },
  {
    question: "Como o serviço é acompanhado?",
    answer:
      "Com indicadores, rotinas de acompanhamento e níveis de serviço definidos em contrato, de acordo com o modelo escolhido.",
  },
  {
    question: "O trabalho é remoto ou presencial?",
    answer: "O formato é combinado em cada contrato, conforme a necessidade da operação e a localização da equipe.",
  },
]

export default function OutsourcingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IndustrialPageHero
        breadcrumb={servicePages.outsourcing.label}
        breadcrumbParent={{ href: "/#servicos", label: "Serviços" }}
        eyebrow="Serviços"
        title="Outsourcing de TI"
        lead="Amplie a capacidade da sua equipe de tecnologia com profissionais e times da Nexus."
        support={
          <p>
            Da alocação de especialistas à sustentação de sistemas e infraestrutura, o modelo é definido conforme o
            momento da empresa, o tamanho da demanda e o nível de gestão que você quer manter.
          </p>
        }
        primaryCta={{ href: "#contato", label: "Conversar sobre minha demanda" }}
        secondaryCta={{ href: "#modelos", label: "Conhecer os modelos" }}
      />

      <IndustrialSection
        id="modelos"
        eyebrow="Modelos de atuação"
        title="Quatro formas de contar com a Nexus"
        description="Os modelos podem ser combinados, por exemplo: um squad para um projeto novo e sustentação para os sistemas existentes."
        alt
      >
        <div className="grid gap-4 md:grid-cols-2">
          {models.map((item, index) => (
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
      </IndustrialSection>

      <IndustrialSection id="quando" eyebrow="Quando faz sentido" title="Situações em que o outsourcing ajuda">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Note className="mt-6">
          Documentação e transferência de conhecimento fazem parte do serviço, para que a sua empresa não fique
          dependente de pessoas específicas.
        </Note>
      </IndustrialSection>

      <IndustrialSection id="como-funciona" eyebrow="Como funciona" title="Do entendimento da demanda ao acompanhamento" alt>
        <Journey steps={journey} />
      </IndustrialSection>

      <IndustrialFaq items={faq} />

      <ServiceRelated
        links={[
          { href: servicePages.softwareFactory.href, title: "Fábrica de Software", text: "Sistemas web, aplicativos mobile e integrações desenvolvidos sob medida." },
          { href: "/#servicos", title: "Serviços de dados e IA", text: "Governança, engenharia, analytics e ciência de dados aplicados ao negócio." },
          { href: "/#produtos", title: "Produtos próprios", text: "AI Wiki, FinOps Intelligence, Argus Sentinel e Delegômetro." },
        ]}
      />

      <ContactSection
        eyebrow="Próximo passo"
        title="Conte qual demanda você precisa atender."
        description="Descreva os perfis, o volume de trabalho ou os sistemas envolvidos. Com isso, indicamos o modelo de atuação mais adequado."
        defaultInterest="outsourcing-ti"
        messageLabel="Qual é a sua demanda?"
        messagePlaceholder="Ex.: precisamos de dois engenheiros de dados por seis meses para um projeto de migração."
      />
      <Footer />
    </main>
  )
}
