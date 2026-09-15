# Nexus Data Analytics

Site oficial em Next.js da Nexus Data Analytics. A pasta `static-site` é mantida apenas como legado e não deve receber novas alterações.

## Desenvolvimento

Requer Node.js 22+ e pnpm.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm test:e2e
```

## Formulário de contato

Copie `.env.example` para `.env.local` e configure:

- `RESEND_API_KEY`: chave da conta Resend;
- `CONTACT_TO_EMAIL`: endereço que receberá os contatos;
- `CONTACT_FROM_EMAIL`: remetente de um domínio verificado no Resend.

Sem essas variáveis, o endpoint retorna indisponibilidade e o site orienta o visitante a usar o WhatsApp.

## Demonstrações

As experiências de AI Wiki, FinOps Intelligence e Argus Sentinel são executadas inteiramente no frontend com dados fictícios. Elas não enviam documentos, custos, falhas ou informações pessoais para um backend.
