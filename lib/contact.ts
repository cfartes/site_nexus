export const contactInterestGroups = [
  {
    label: "Dados, IA e produtos",
    options: [
      { value: "consultoria", label: "Consultoria em Dados e IA" },
      { value: "cto-as-a-service", label: "CTO as a Service" },
      { value: "ai-wiki", label: "AI Wiki" },
      { value: "finops", label: "FinOps Intelligence" },
      { value: "argus", label: "Argus Sentinel" },
      { value: "delegometro", label: "Delegômetro" },
      { value: "projeto-personalizado", label: "Projeto personalizado" },
      { value: "fabrica-de-software", label: "Fábrica de Software" },
      { value: "outsourcing-ti", label: "Outsourcing de TI" },
    ],
  },
  {
    label: "Indústria",
    options: [
      { value: "visao-computacional", label: "Visão Computacional" },
      { value: "ai-wiki-industrial", label: "AI Wiki Industrial" },
      { value: "dados-industriais", label: "Dados Industriais" },
      { value: "mes", label: "MES e Otimização da Produção" },
      { value: "cyber-ot", label: "Cyber OT" },
      { value: "automacao-industrial", label: "Integração e Automação Industrial" },
    ],
  },
  {
    label: "Outros assuntos",
    options: [{ value: "outro", label: "Outro" }],
  },
] as const

export type ContactInterest = (typeof contactInterestGroups)[number]["options"][number]["value"]

export const contactInterestValues = contactInterestGroups.flatMap((group) =>
  group.options.map((option) => option.value),
) as [ContactInterest, ...ContactInterest[]]

export const contactInterestLabels = Object.fromEntries(
  contactInterestGroups.flatMap((group) => group.options.map((option) => [option.value, option.label])),
) as Record<ContactInterest, string>
