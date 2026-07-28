import { expect, test } from "@playwright/test"

test("home navega e não possui overflow horizontal", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Transforme dados")
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }))
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth)

  await page.getByRole("link", { name: "Explorar produtos" }).click()
  await expect(page.locator("#produtos")).toBeInViewport()
})

test("menu mobile abre e navega", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: "Abrir menu" }).click()
  const mobileNav = page.locator("header nav").last()
  await expect(mobileNav.getByRole("link", { name: "Produtos", exact: true })).toBeVisible()
  await mobileNav.getByRole("link", { name: "Produtos", exact: true }).click()
  await expect(page.locator("#produtos")).toBeInViewport()
})

test("hero oferece caminhos contextuais para serviços e produtos", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("link", { name: /Governança/ }).click()
  await expect(page.locator("#servico-governanca")).toBeInViewport()

  await page.goto("/")
  await page.getByRole("button", { name: "FinOps" }).click()
  await expect(page.getByRole("link", { name: "Testar demonstração do FinOps" })).toHaveAttribute("href", "/produtos/finops")
})

test("previews do hero demonstram os dois produtos em ação", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: "Consultar base de exemplo" }).click()
  await expect(page.getByText("Consultando 2 fontes simuladas…")).toBeVisible()
  await expect(page.getByText("Resposta encontrada com fontes")).toBeVisible()

  await page.getByRole("button", { name: "FinOps" }).click()
  await page.getByRole("button", { name: "Analisar arquivo de exemplo" }).click()
  await expect(page.getByText("Analisando recursos…")).toBeVisible()
  await expect(page.getByText("3 oportunidades priorizadas")).toBeVisible()
  await expect(page.getByText("Impacto médio")).toBeVisible()
  await expect(page.getByText("Impacto baixo")).toBeVisible()
  await expect(page.getByText("R$ 5,4 mil/mês")).toBeVisible()

  await page.getByRole("button", { name: "AI Wiki" }).click()
  await expect(page.getByText("Resposta encontrada com fontes")).toBeVisible()
  await page.getByRole("button", { name: "FinOps" }).click()
  await expect(page.getByText("Auditoria concluída")).toBeVisible()
})

test("filosofias conectam serviços a problemas clássicos de tecnologia", async ({ page }) => {
  await page.goto("/")
  const services = page.locator("#servicos")
  await services.scrollIntoViewIfNeeded()

  await expect(page.getByRole("tab", { name: /Análise incompleta/ })).toHaveAttribute("aria-selected", "true")
  const concept = page.getByRole("button", { name: /O que isso revela/ })
  await expect(concept).toHaveAttribute("aria-expanded", "false")
  await concept.click()
  await expect(concept).toHaveAttribute("aria-expanded", "true")
  await expect(page.getByText(/No viés de sobrevivência, enxergamos/)).toBeVisible()

  await page.getByRole("tab", { name: /Potencial não aproveitado/ }).click()
  await expect(page.getByText("Paradoxo de Fermi", { exact: true }).last()).toBeVisible()
  await expect(page.getByText("Potencial convertido em próxima ação")).toBeVisible({ timeout: 16_000 })

  await page.getByRole("tab", { name: /Execução interminável/ }).click()
  await expect(page.getByText("1/256 restante")).toBeVisible({ timeout: 12_000 })
  await expect(page.getByText("Entrega alcançada")).toBeVisible({ timeout: 15_000 })
  await expect(page.getByText("A entrega chegou à operação")).toBeVisible()
})

test("AI Wiki troca pergunta e exibe fontes", async ({ page }) => {
  await page.goto("/produtos/ai-wiki")
  await page.getByRole("button", { name: "Qual é o fluxo para reembolso de despesas?" }).click()
  await expect(page.getByText("Consultando a base de conhecimento…")).toBeVisible()
  await expect(page.getByText("A solicitação deve ser registrada")).toBeVisible()
  await expect(page.getByText("Manual financeiro")).toBeVisible()
})

test("AI Wiki conecta a publicação do admin à experiência do usuário", async ({ page }) => {
  await page.goto("/produtos/ai-wiki")
  await page.getByRole("button", { name: "Admin resumido" }).click()

  await page.getByLabel("Provedor").selectOption("Claude")
  await expect(page.getByLabel("Modelo de chat")).toHaveValue("Claude Sonnet")
  await expect(page.getByText("Alterações não publicadas")).toBeVisible()

  await page.getByRole("button", { name: "Simular nova indexação" }).click()
  await expect(page.getByRole("button", { name: "Indexando fontes…" })).toBeVisible()
  await page.getByRole("button", { name: "Publicar para usuários" }).click()

  await expect(page.getByRole("button", { name: "Experiência do usuário" })).toHaveAttribute("aria-pressed", "true")
  await expect(page.getByText("Configuração publicada para os usuários.")).toBeVisible()
})

test("FinOps executa auditoria e apresenta recomendações", async ({ page }) => {
  await page.goto("/produtos/finops")
  await page.getByRole("button", { name: "Executar auditoria de exemplo" }).click()
  await page.getByRole("button", { name: "Iniciar auditoria demonstrativa" }).click()
  await expect(page.getByText("EM EXECUÇÃO")).toBeVisible()
  await expect(page.getByText("Auditoria demonstrativa concluída.")).toBeVisible()
  await page.getByRole("button", { name: "Ver recomendações priorizadas" }).click()
  await expect(page.getByText("vm-app-prod-03")).toBeVisible()
  await expect(page.getByText("Oportunidades para avaliação humana, não economias garantidas.")).toBeVisible()
})

test("formulário só mostra sucesso depois da resposta do endpoint", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 150))
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) })
  })

  await page.goto("/#contato")
  await page.getByLabel("Nome completo").fill("Pessoa Teste")
  await page.getByLabel("E-mail").fill("teste@example.com")
  await page.getByLabel("Interesse").click()
  await page.getByRole("option", { name: "Consultoria" }).click()
  await page.getByLabel("Como podemos ajudar?").fill("Quero conversar sobre um projeto de dados.")
  await page.getByRole("button", { name: "Enviar mensagem" }).click()
  await expect(page.getByText("Enviando…")).toBeVisible()
  await expect(page.getByRole("heading", { name: "Mensagem enviada" })).toBeVisible()
})

test("honeypot responde sem disparar envio", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: {
      name: "Bot",
      email: "bot@example.com",
      company: "",
      interest: "consultoria",
      message: "Mensagem automatizada de teste.",
      website: "https://spam.example",
    },
  })
  expect(response.status()).toBe(200)
  await expect(response.json()).resolves.toEqual({ ok: true })
})
