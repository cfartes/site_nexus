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

export type ArgusCapacity = {
  name: string
  sku: string
  status: "Saudável" | "Atenção"
  workspaces: number
  items: number
  background: number
  interactive: number
  delay: number
  rejection: number
}

export const argusCapacities: ArgusCapacity[] = [
  { name: "prod-fabric-01", sku: "F64", status: "Saudável", workspaces: 11, items: 704, background: 18.8, interactive: 2.7, delay: 19.5, rejection: 1.2 },
  { name: "dev-fabric-02", sku: "F32", status: "Atenção", workspaces: 6, items: 213, background: 41.2, interactive: 12.4, delay: 34.1, rejection: 9.6 },
]

export const argusConsumption = [21, 34, 28, 52, 38, 61, 45, 72, 39, 58, 84, 47]

export type ArgusWorkspace = {
  name: string
  items: number
  events: number
  users: number
}

export const argusWorkspaces: ArgusWorkspace[] = [
  { name: "Comercial BI", items: 68, events: 67703, users: 195 },
  { name: "Logística & CS", items: 84, events: 51041, users: 62 },
  { name: "Financeiro", items: 12, events: 2990, users: 18 },
  { name: "People Analytics", items: 23, events: 8760, users: 41 },
]

export type ArgusExecution = {
  when: string
  workspace: string
  item: string
  type: string
  status: "OK" | "Falha" | "Em execução"
  duration: string
}

export const argusExecutions: ArgusExecution[] = [
  { when: "01/09 · 23:35", workspace: "Comercial BI", item: "Report Usage Metrics", type: "Dataset", status: "OK", duration: "1s" },
  { when: "01/09 · 21:53", workspace: "Integração SFTP", item: "notebook_ingestao_pedidos", type: "Notebook", status: "Falha", duration: "—" },
  { when: "01/09 · 20:59", workspace: "Logística & CS", item: "silver_to_gold_ctrl_preco", type: "Notebook", status: "Em execução", duration: "—" },
  { when: "01/09 · 20:53", workspace: "Financeiro", item: "Copy_Data_Fechamento", type: "Pipeline", status: "OK", duration: "1m 43s" },
  { when: "01/09 · 18:12", workspace: "Comercial BI", item: "Carteira por Ordem", type: "Relatório", status: "OK", duration: "8s" },
]

export const argusAutoFix = {
  workspace: "Integração SFTP",
  notebook: "notebook_ingestao_pedidos",
  error: "System Cancelled Session Statements Failed",
  rule: "session_cancelled",
  failures14d: 14,
  diagnosis:
    "A sessão Spark foi encerrada pelo sistema antes de concluir a leitura do arquivo de origem, provavelmente por tempo ocioso acima do limite configurado no gateway.",
  recommendation:
    "Ajustar o timeout de sessão do notebook e adicionar uma rotina de retomada automática após reconexão do gateway.",
  prBranch: "auto-fix/notebook-ingestao-pedidos",
}
