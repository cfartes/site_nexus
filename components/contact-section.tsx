"use client"

import { type FormEvent, useState } from "react"
import { AlertCircle, CheckCircle, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Reveal } from "@/components/reveal"
import { buildWhatsappUrl, whatsappDisplay } from "@/lib/site-config"

const contactInfo = [
  { icon: Mail, title: "E-mail", value: "comercial@nexusdataanalytics.com.br", href: "mailto:comercial@nexusdataanalytics.com.br" },
  { icon: Phone, title: "WhatsApp", value: whatsappDisplay, href: buildWhatsappUrl(), newTab: true },
  { icon: MapPin, title: "Atuação", value: "Projetos em todo o Brasil" },
]

type SubmitState = "idle" | "sending" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<SubmitState>("idle")
  const [interest, setInterest] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    setStatus("sending")
    setErrorMessage("")
    const form = new FormData(formElement)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          interest,
          message: form.get("message"),
          website: form.get("website"),
        }),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Não foi possível enviar sua mensagem.")

      setStatus("success")
      formElement.reset()
      setInterest("")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.")
    }
  }

  return (
    <section id="contato" className="section-alt relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <svg className="contact-convergence pointer-events-none absolute inset-0 size-full opacity-45" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-100 100 C 360 120, 740 380, 1080 510" />
        <path d="M-100 450 C 340 450, 720 500, 1080 510" />
        <path d="M-100 820 C 350 760, 700 600, 1080 510" />
        <path d="M1540 90 C 1370 190, 1230 360, 1080 510" />
        <path d="M1540 820 C 1360 710, 1220 590, 1080 510" />
      </svg>
      <div className="pointer-events-none absolute right-[17%] top-[52%] size-64 rounded-full bg-primary/[0.055] blur-[90px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Próximo passo</p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Conte onde os dados estão travando o trabalho.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Pode ser uma planilha que virou processo, um custo difícil de explicar ou conhecimento
            que ninguém consegue encontrar. A primeira conversa serve para organizar o problema
            e definir um próximo passo útil.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="flex flex-col gap-4">
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07] text-primary">
                    <info.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.title}</p>
                    <p className="mt-1 text-sm font-medium">{info.value}</p>
                  </div>
                </>
              )
              return info.href ? (
                <a key={info.title} href={info.href} target={info.newTab ? "_blank" : undefined} rel={info.newTab ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-primary/30">
                  {content}
                </a>
              ) : (
                <div key={info.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  {content}
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={80}>
            <div className="data-panel rounded-[1.25rem] border border-white/10 p-6 md:p-8">
              {status === "success" ? (
                <div className="flex min-h-[25rem] flex-col items-center justify-center text-center" role="status">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="size-8 text-primary" />
                  </div>
                  <h3 className="font-heading mt-5 text-2xl font-semibold">Mensagem enviada</h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">Recebemos seu contato e retornaremos assim que possível.</p>
                  <Button variant="outline" className="mt-7" onClick={() => setStatus("idle")}>Enviar outra mensagem</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="demo">
                  <input name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px]" aria-hidden="true" />
                  <FieldGroup>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                        <Input id="name" name="name" placeholder="Seu nome" required maxLength={100} />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">E-mail</FieldLabel>
                        <Input id="email" name="email" type="email" placeholder="seu@email.com" required maxLength={160} />
                      </Field>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="company">Empresa</FieldLabel>
                        <Input id="company" name="company" placeholder="Nome da empresa" maxLength={120} />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="interest">Interesse</FieldLabel>
                        <Select value={interest} onValueChange={setInterest} required>
                          <SelectTrigger id="interest" aria-label="Selecione o interesse">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="consultoria">Consultoria</SelectItem>
                              <SelectItem value="ai-wiki">AI Wiki</SelectItem>
                              <SelectItem value="finops">FinOps Intelligence</SelectItem>
                              <SelectItem value="argus">Argus Sentinel</SelectItem>
                              <SelectItem value="projeto-personalizado">Projeto personalizado</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="message">Como podemos ajudar?</FieldLabel>
                      <Textarea id="message" name="message" placeholder="Descreva brevemente o problema, contexto ou objetivo..." rows={5} required minLength={10} maxLength={2000} />
                    </Field>
                    {status === "error" && (
                      <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-red-200" role="alert">
                        <AlertCircle className="mt-0.5 size-4 shrink-0" />
                        {errorMessage}
                      </div>
                    )}
                    <Button type="submit" size="lg" className="button-sheen w-full" disabled={status === "sending" || !interest}>
                      {status === "sending" ? <LoaderCircle className="animate-spin" /> : <Send />}
                      {status === "sending" ? "Enviando…" : "Enviar mensagem"}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Seus dados serão utilizados apenas para responder a este contato.
                    </p>
                  </FieldGroup>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
