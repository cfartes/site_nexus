import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().default(""),
  interest: z.enum(["consultoria", "ai-wiki", "finops", "argus", "projeto-personalizado", "outro"]),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default(""),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const isBot = typeof body === "object" && body !== null && "website" in body && Boolean(body.website)
    if (isBot) return NextResponse.json({ ok: true })
    return NextResponse.json({ error: "Revise os campos e tente novamente." }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    console.error("Contact endpoint is missing Resend environment variables")
    return NextResponse.json({ error: "O envio está temporariamente indisponível. Use nosso WhatsApp." }, { status: 503 })
  }

  const { name, email, company, interest, message } = parsed.data
  const resend = new Resend(apiKey)
  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Novo contato Nexus — ${interest}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Empresa: ${company || "Não informada"}`,
      `Interesse: ${interest}`,
      "",
      message,
    ].join("\n"),
  })

  if (result.error) {
    console.error("Resend contact error", result.error)
    return NextResponse.json({ error: "Não foi possível enviar agora. Tente novamente em instantes." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
