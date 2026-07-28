export type DemoProduct = "ai-wiki" | "finops"

export type DemoScenario<TData> = {
  product: DemoProduct
  title: string
  description: string
  state: "ready" | "simulating"
  data: TData
}

export type WikiQuestion = {
  id: string
  question: string
  answer: string
  sources: Array<{ title: string; section: string }>
}

export const wikiQuestions: WikiQuestion[] = [
  {
    id: "onboarding",
    question: "Como funciona o processo de onboarding?",
    answer: "O processo é dividido em preparação de acessos, integração com a equipe e acompanhamento inicial. O gestor valida os acessos antes do primeiro dia, o novo colaborador conclui os treinamentos essenciais e participa de um check-in após 30 dias.",
    sources: [
      { title: "Manual de onboarding", section: "Etapas 1–3" },
      { title: "Política de acessos", section: "Aprovação do gestor" },
    ],
  },
  {
    id: "expenses",
    question: "Qual é o fluxo para reembolso de despesas?",
    answer: "A solicitação deve ser registrada até o quinto dia útil, acompanhada do comprovante e do centro de custo. Após a aprovação do gestor, o financeiro inclui o valor no próximo ciclo disponível.",
    sources: [
      { title: "Manual financeiro", section: "Reembolsos" },
      { title: "Matriz de aprovação", section: "Despesas operacionais" },
    ],
  },
  {
    id: "access",
    question: "Como solicitar acesso a um novo sistema?",
    answer: "Abra uma solicitação informando sistema, perfil necessário e justificativa. O responsável pelo dado e o gestor da área avaliam o pedido antes do provisionamento pelo time de tecnologia.",
    sources: [
      { title: "Política de acessos", section: "Novas permissões" },
      { title: "Catálogo de serviços", section: "Acessos e identidades" },
    ],
  },
]

export type FinOpsRecommendation = {
  service: string
  resource: string
  impact: string
  savings: string
  diagnosis: string
  recommendation: string
  estimatedValue: string
}

export const finopsRecommendations: FinOpsRecommendation[] = [
  {
    service: "VirtualMachines",
    resource: "vm-app-prod-03",
    impact: "Impacto alto",
    savings: "28% estimados",
    diagnosis: "Utilização média abaixo do perfil esperado durante o período analisado.",
    recommendation: "Validar rightsizing para uma família menor após revisar picos e dependências.",
    estimatedValue: "R$ 5,4 mil/mês",
  },
  {
    service: "SQLDatabases",
    resource: "sql-reporting-dev",
    impact: "Impacto médio",
    savings: "21% estimados",
    diagnosis: "Banco de desenvolvimento permanece provisionado fora da janela de trabalho.",
    recommendation: "Avaliar pausa programada e política de retomada para dias úteis.",
    estimatedValue: "R$ 3,1 mil/mês",
  },
  {
    service: "StorageAccounts",
    resource: "stlogsarchive",
    impact: "Impacto baixo",
    savings: "16% estimados",
    diagnosis: "Objetos antigos permanecem em uma camada de armazenamento de acesso frequente.",
    recommendation: "Simular política de ciclo de vida antes de migrar itens elegíveis.",
    estimatedValue: "R$ 1,7 mil/mês",
  },
]

export type FinOpsRun = {
  id: string
  period: string
  resources: number
  cost: string
  potential: string
}

export const finopsRuns: FinOpsRun[] = [
  { id: "RUN-006", period: "Jun/2026", resources: 148, cost: "R$ 84,2 mil", potential: "R$ 12,8 mil" },
  { id: "RUN-005", period: "Mai/2026", resources: 141, cost: "R$ 79,3 mil", potential: "R$ 10,6 mil" },
  { id: "RUN-004", period: "Abr/2026", resources: 136, cost: "R$ 80,6 mil", potential: "R$ 11,1 mil" },
]
