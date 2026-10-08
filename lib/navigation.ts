import { industrialPages } from "@/lib/industrial-pages"

export type NavLink = { href: string; label: string; description?: string; accent?: string }
export type NavGroup = { title?: string; links: NavLink[] }
export type NavMenu = { label: string; groups: NavGroup[]; overview: NavLink }

export const servicePages = {
  dataAi: { href: "/servicos/dados-e-ia", label: "Dados e IA" },
  cto: { href: "/servicos/cto-as-a-service", label: "CTO as a Service" },
  softwareFactory: { href: "/servicos/fabrica-de-software", label: "Fábrica de Software" },
  outsourcing: { href: "/servicos/outsourcing-de-ti", label: "Outsourcing de TI" },
} as const

export const dataServices = [
  { id: "governanca", label: "Governança de Dados", description: "Confiança e controle sobre os dados" },
  { id: "engenharia", label: "Engenharia de Dados", description: "Pipelines e arquitetura" },
  { id: "analytics", label: "Analytics & DataViz", description: "Indicadores que orientam decisões" },
  { id: "ciencia-de-dados", label: "Ciência de Dados e IA", description: "Modelos e IA em operação" },
] as const

export const navMenus: NavMenu[] = [
  {
    label: "Serviços",
    overview: { href: "/#servicos", label: "Ver todos os serviços" },
    groups: [
      {
        title: "Dados e IA",
        links: dataServices.map((service) => ({
          href: `${servicePages.dataAi.href}#${service.id}`,
          label: service.label,
          description: service.description,
        })),
      },
      {
        title: "Estratégia e tecnologia",
        links: [
          { ...servicePages.cto, description: "Estratégia, roadmap e liderança de TI" },
          { ...servicePages.softwareFactory, description: "Sistemas web, apps e integrações" },
          { ...servicePages.outsourcing, description: "Profissionais, squads e sustentação" },
        ],
      },
    ],
  },
  {
    label: "Produtos",
    overview: { href: "/#produtos", label: "Ver todos os produtos" },
    groups: [
      {
        links: [
          { href: "/produtos/ai-wiki", label: "AI Wiki", description: "Conhecimento interno com respostas e fontes", accent: "#55ddeb" },
          { href: "/produtos/finops", label: "FinOps Intelligence", description: "Visibilidade e otimização de custos cloud", accent: "#f5b84b" },
          { href: "/produtos/argus", label: "Argus Sentinel", description: "Torre de controle Fabric & Power BI", accent: "#8b7cf6" },
          { href: "/produtos/nexus-amplify", label: "Nexus Amplify", description: "Delegação que desenvolve líderes", accent: "#f47c6b" },
        ],
      },
    ],
  },
  {
    label: "Indústria",
    overview: { href: industrialPages.hub.href, label: "Ver a frente de Automação Industrial" },
    groups: [
      {
        links: [
          { href: industrialPages.hub.href, label: industrialPages.hub.shortName, description: "Conectividade, integração e Indústria 4.0" },
          { href: industrialPages.vision.href, label: industrialPages.vision.shortName, description: "Inspeção visual e conferência com IA" },
          { href: industrialPages.wiki.href, label: industrialPages.wiki.shortName, description: "Manuais e procedimentos acessíveis" },
          { href: industrialPages.data.href, label: industrialPages.data.shortName, description: "OEE, paradas, perdas e rastreabilidade" },
          { href: `${industrialPages.hub.href}#mes`, label: "MES", description: "Arquitetura e otimização da produção" },
          { href: `${industrialPages.hub.href}#cyber-ot`, label: "Cyber OT", description: "Proteção de sistemas industriais" },
        ],
      },
    ],
  },
]

export const navLinks: NavLink[] = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
]

/** Menu cujo conteúdo inclui a página atual, para destacar o item na barra. */
export function activeMenuLabel(pathname: string) {
  return navMenus.find((menu) =>
    menu.groups.some((group) => group.links.some((link) => link.href.split("#")[0] === pathname)),
  )?.label
}
