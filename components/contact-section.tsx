"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@nexusdataanalytics.com",
    href: "mailto:contato@nexusdataanalytics.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP - Brasil",
    href: "#",
  },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Contato</p>
          <h2 className="mt-4 mb-6 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Entre em contato conosco para discutir como podemos ajudar a transformar 
            seus dados em resultados concretos para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex size-12 items-center justify-center rounded-md border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <info.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
              <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Sábados: 9h às 13h
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="data-panel rounded-2xl border border-white/10 p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="size-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="demo">
                  <FieldGroup>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
                      <Input id="name" placeholder="Seu nome" required />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="company">Empresa</FieldLabel>
                        <Input id="company" placeholder="Nome da empresa" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="interest">Interesse</FieldLabel>
                        <Select>
                          <SelectTrigger id="interest">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="consultoria">Consultoria</SelectItem>
                              <SelectItem value="ai-wiki">AI Wiki</SelectItem>
                              <SelectItem value="finops">FinOps Intelligence</SelectItem>
                              <SelectItem value="custom">Projeto Personalizado</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>

                    <Field>
                    <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      rows={5}
                      required
                    />
                    </Field>

                    <Button type="submit" size="lg" className="w-full">
                      <Send data-icon="inline-start" />
                      Enviar Mensagem
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
