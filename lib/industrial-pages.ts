export const industrialPages = {
  hub: {
    href: "/automacao-industrial",
    name: "Automação Industrial & Indústria 4.0",
    shortName: "Automação Industrial",
    description: "Arquitetura de automação, MES, Cyber OT, conectividade e integração com sistemas de gestão.",
  },
  vision: {
    href: "/visao-computacional-industrial",
    name: "Visão Computacional para a Indústria",
    shortName: "Visão Computacional",
    description: "Inspeção visual, conferência de montagem e rastreabilidade com apoio de IA.",
  },
  wiki: {
    href: "/ai-wiki-industrial",
    name: "AI Wiki para a Indústria",
    shortName: "AI Wiki Industrial",
    description: "Manuais, procedimentos e conhecimento técnico mais acessíveis às equipes.",
  },
  data: {
    href: "/dados-industriais",
    name: "Dados & Inteligência Industrial",
    shortName: "Dados Industriais",
    description: "Indicadores de produção, paradas, perdas, OEE e rastreabilidade em painéis confiáveis.",
  },
} as const

export type IndustrialPageKey = keyof typeof industrialPages
