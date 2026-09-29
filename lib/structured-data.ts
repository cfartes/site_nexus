import { industrialPages } from "@/lib/industrial-pages"
import { siteName, siteUrl } from "@/lib/seo"
import { whatsappNumber } from "@/lib/site-config"

const organizationId = `${siteUrl}/#organization`

const services = [
  {
    name: "Dados e IA",
    path: "/servicos/dados-e-ia",
    description: "Consultoria em Governança de Dados, Engenharia de Dados, Analytics & DataViz e Ciência de Dados e IA.",
  },
  {
    name: "CTO as a Service",
    path: "/servicos/cto-as-a-service",
    description: "Assessment executivo, estratégia de tecnologia, roadmap de transformação e liderança fracionada de tecnologia.",
  },
  {
    name: "Fábrica de Software",
    path: "/servicos/fabrica-de-software",
    description: "Sistemas web sob medida, aplicativos mobile, integrações e APIs, e manutenção evolutiva de sistemas.",
  },
  {
    name: "Outsourcing de TI",
    path: "/servicos/outsourcing-de-ti",
    description: "Alocação de profissionais, squads dedicados, sustentação de sistemas e suporte e infraestrutura.",
  },
  ...Object.values(industrialPages).map(({ name, href, description }) => ({ name, path: href, description })),
]

const products = [
  {
    name: "AI Wiki",
    path: "/produtos/ai-wiki",
    category: "BusinessApplication",
    description: "Transforma políticas, manuais e processos internos em respostas rastreáveis, com acesso às fontes utilizadas.",
  },
  {
    name: "FinOps Intelligence",
    path: "/produtos/finops",
    category: "BusinessApplication",
    description: "Reúne custos de nuvem, investiga variações e prioriza oportunidades de otimização em uma visão operacional.",
  },
  {
    name: "Argus Sentinel",
    path: "/produtos/argus",
    category: "BusinessApplication",
    description: "Torre de controle para ambientes Microsoft Fabric e Power BI: monitora capacidades e falhas e usa IA para propor correções, com aprovação humana.",
  },
  {
    name: "Delegômetro",
    path: "/produtos/delegometro",
    category: "BusinessApplication",
    description: "Delegação que desenvolve líderes, com a metodologia CASAR, Coach de Delegação com IA, relatórios para o RH e controles de LGPD.",
  },
]

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      image: `${siteUrl}/images/logo.png`,
      description:
        "Consultoria em Data & Analytics, Inteligência Artificial, Governança de Dados, Automação Industrial e desenvolvimento de software, com produtos SaaS próprios.",
      email: "comercial@nexusdataanalytics.com.br",
      telephone: `+${whatsappNumber}`,
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsLanguage: "pt-BR",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "comercial@nexusdataanalytics.com.br",
        telephone: `+${whatsappNumber}`,
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços e produtos",
        itemListElement: [
          ...services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              url: `${siteUrl}${service.path}`,
              provider: { "@id": organizationId },
            },
          })),
          ...products.map((product) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: product.name,
              description: product.description,
              url: `${siteUrl}${product.path}`,
              applicationCategory: product.category,
              operatingSystem: "Web",
              publisher: { "@id": organizationId },
            },
          })),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "pt-BR",
      publisher: { "@id": organizationId },
    },
  ],
}

// Escapa "<" para que o conteúdo não feche a tag <script> antes da hora.
export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
