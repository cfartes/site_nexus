"use client"

import { type CSSProperties, type FormEvent, useState } from "react"
import {
  BookOpen,
  Check,
  ChevronRight,
  Database,
  FileText,
  FlaskConical,
  LoaderCircle,
  MessageSquareText,
  RefreshCw,
  RotateCcw,
  Send,
  Settings2,
  Sparkles,
  Trash2,
  UploadCloud,
  UserRound,
} from "lucide-react"
import { wikiQuestions, type WikiQuestion } from "@/lib/demo-data"
import { Button } from "@/components/ui/button"

type DemoMode = "user" | "admin"
type ChatMessage = {
  role: "user" | "assistant"
  content: string
  sources?: WikiQuestion["sources"]
}

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content: "Olá! Consulte políticas, processos e manuais publicados neste ambiente demonstrativo.",
  },
]

const sources = [
  { name: "Wiki de Pessoas", kind: "URL", detail: "84 páginas", icon: BookOpen },
  { name: "Manual financeiro.pdf", kind: "PDF", detail: "32 páginas", icon: FileText },
  { name: "Política de acessos.pdf", kind: "PDF", detail: "12 páginas", icon: FileText },
]

export function WikiDemo() {
  const [mode, setMode] = useState<DemoMode>("user")
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [prompt, setPrompt] = useState("")
  const [thinking, setThinking] = useState(false)
  const [forceNew, setForceNew] = useState(false)
  const [status, setStatus] = useState("Configuração publicada e pronta para consulta.")
  const [provider, setProvider] = useState("OpenAI")
  const [model, setModel] = useState("GPT-5")
  const [indexing, setIndexing] = useState(false)
  const [published, setPublished] = useState(true)

  function answerQuestion(question: WikiQuestion) {
    if (thinking) return
    const existingIndex = messages.findIndex(
      (message) => message.role === "user" && message.content === question.question,
    )
    if (existingIndex >= 0 && !forceNew) {
      setStatus("Resposta localizada no histórico da conversa.")
      return
    }

    setMessages((current) => [...current, { role: "user", content: question.question }])
    setThinking(true)
    setStatus("Consultando o índice publicado…")
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: question.answer, sources: question.sources },
      ])
      setThinking(false)
      setStatus("Resposta concluída com fontes.")
    }, 700)
  }

  function submitPrompt(event: FormEvent) {
    event.preventDefault()
    const text = prompt.trim()
    if (!text || thinking) return
    const known = wikiQuestions.find((item) =>
      item.question.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    )
    setPrompt("")
    if (known) {
      answerQuestion(known)
      return
    }

    setMessages((current) => [...current, { role: "user", content: text }])
    setThinking(true)
    setStatus("Consultando o índice publicado…")
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "Nesta demonstração, tente uma das perguntas sugeridas para ver uma resposta completa com fontes.",
        },
      ])
      setThinking(false)
      setStatus("A pergunta não faz parte do cenário demonstrativo.")
    }, 700)
  }

  function simulateIndexing() {
    setIndexing(true)
    setPublished(false)
    setStatus("Processando fontes demonstrativas…")
    window.setTimeout(() => {
      setIndexing(false)
      setStatus("Índice atualizado. Publique para disponibilizar no chat.")
    }, 1000)
  }

  function publish() {
    setPublished(true)
    setStatus("Configuração publicada para os usuários.")
    window.setTimeout(() => setMode("user"), 450)
  }

  function resetDemo() {
    setMode("user")
    setMessages(initialMessages)
    setPrompt("")
    setThinking(false)
    setForceNew(false)
    setStatus("Configuração publicada e pronta para consulta.")
    setProvider("OpenAI")
    setModel("GPT-5")
    setIndexing(false)
    setPublished(true)
  }

  const productTheme = {
    "--background": "#060a12",
    "--foreground": "#dafce9",
    "--card": "#0b111c",
    "--card-foreground": "#dafce9",
    "--primary": "#64cfa3",
    "--primary-foreground": "#060a12",
    "--secondary": "#0d1f2a",
    "--secondary-foreground": "#dafce9",
    "--muted": "#101c29",
    "--muted-foreground": "#9ad5be",
    "--accent": "#6bb7e6",
    "--accent-foreground": "#060a12",
    "--border": "rgba(99, 194, 161, 0.3)",
    "--input": "#0b101b",
    "--ring": "#64cfa3",
  } as CSSProperties

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-[#6bb7e6]/30 bg-[#060a12] text-foreground shadow-[0_32px_100px_rgba(0,0,0,0.48),0_0_0_1px_rgba(100,207,163,0.06)]"
      style={productTheme}
    >
      <header className="flex flex-col gap-4 border-b border-[#63c2a1]/25 bg-[linear-gradient(120deg,rgba(13,31,42,0.96),rgba(11,19,32,0.92))] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-[#64cfa3]/25 bg-[#64cfa3]/10 text-[#64cfa3] shadow-[0_0_18px_rgba(100,207,163,0.08)]">
            <BookOpen className="size-5" />
          </span>
          <div>
            <p className="font-heading font-semibold text-[#dafce9]">AI Wiki</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#9ad5be]">
              Ambiente de teste do produto
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#64cfa3]/20 bg-[#64cfa3]/[0.07] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#aaf4c8]">
            <span className="size-1.5 rounded-full bg-[#63e594]" />
            Sandbox ativo
          </span>
          <button
            type="button"
            onClick={resetDemo}
            className="inline-flex items-center gap-2 rounded-full border border-[#6bb7e6]/20 px-3 py-2 text-xs text-[#9ad5be] transition-colors hover:border-[#6bb7e6]/45 hover:text-[#afe7ff]"
          >
            <RotateCcw className="size-3.5" />
            Reiniciar demo
          </button>
        </div>
      </header>

      <div className="grid gap-4 p-3 sm:p-5">
        <div className="flex items-start gap-3 rounded-xl border border-[#f0c668]/25 bg-[#f0c668]/[0.055] px-4 py-3 text-sm text-[#d8cda7]">
          <FlaskConical className="mt-0.5 size-4 shrink-0 text-[#f0c668]" />
          <span><strong className="font-medium text-[#f6dda1]">Demonstração com dados simulados.</strong> Nenhum documento ou resultado apresentado é real.</span>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-card/65 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-2 rounded-xl bg-background/70 p-1">
            <button
              onClick={() => setMode("user")}
              aria-pressed={mode === "user"}
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-colors ${mode === "user" ? "bg-accent/12 text-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              <UserRound className="size-4" />
              Experiência do usuário
            </button>
            <button
              onClick={() => setMode("admin")}
              aria-pressed={mode === "admin"}
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-colors ${mode === "admin" ? "bg-primary/12 text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Settings2 className="size-4" />
              Admin resumido
            </button>
          </div>
          <div className="flex items-center gap-2 px-2 font-mono text-[11px] text-muted-foreground">
            <span className={`size-2 rounded-full ${published ? "bg-primary" : "bg-[#f0c668]"}`} />
            {published ? "Publicação disponível" : "Alterações não publicadas"}
          </div>
        </div>

        {mode === "user" ? (
          <UserExperience
            messages={messages}
            prompt={prompt}
            thinking={thinking}
            forceNew={forceNew}
            status={status}
            published={published}
            onPromptChange={setPrompt}
            onForceNewChange={setForceNew}
            onSubmit={submitPrompt}
            onQuestion={answerQuestion}
            onClear={() => {
              setMessages(initialMessages)
              setStatus("Conversa limpa.")
            }}
            onReload={() => setStatus("Publicação recarregada com sucesso.")}
          />
        ) : (
          <AdminExperience
            provider={provider}
            model={model}
            indexing={indexing}
            published={published}
            status={status}
            onProviderChange={(next) => {
              setProvider(next)
              setModel(next === "OpenAI" ? "GPT-5" : next === "Claude" ? "Claude Sonnet" : "Gemini Pro")
              setPublished(false)
            }}
            onModelChange={(next) => {
              setModel(next)
              setPublished(false)
            }}
            onIndex={simulateIndexing}
            onPublish={publish}
          />
        )}
      </div>
    </div>
  )
}

function UserExperience({
  messages,
  prompt,
  thinking,
  forceNew,
  status,
  published,
  onPromptChange,
  onForceNewChange,
  onSubmit,
  onQuestion,
  onClear,
  onReload,
}: {
  messages: ChatMessage[]
  prompt: string
  thinking: boolean
  forceNew: boolean
  status: string
  published: boolean
  onPromptChange: (value: string) => void
  onForceNewChange: (value: boolean) => void
  onSubmit: (event: FormEvent) => void
  onQuestion: (question: WikiQuestion) => void
  onClear: () => void
  onReload: () => void
}) {
  return (
    <div className="grid min-h-[42rem] overflow-hidden rounded-2xl border border-white/10 bg-card/65 lg:grid-cols-[17rem_1fr]">
      <aside className="border-b border-white/10 bg-background/45 p-4 lg:border-b-0 lg:border-r">
        <div className="rounded-xl border border-accent/15 bg-accent/[0.055] p-4">
          <p className="font-heading font-semibold text-accent">Nexus Knowledge</p>
          <p className="mt-1 text-xs text-muted-foreground">Base interna demonstrativa</p>
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Perguntas sugeridas</p>
        <div className="mt-3 grid gap-1.5">
          {wikiQuestions.map((question) => (
            <button
              key={question.id}
              onClick={() => onQuestion(question)}
              disabled={!published || thinking}
              className="group flex items-start justify-between gap-2 rounded-xl px-3 py-3 text-left text-xs leading-5 text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground disabled:opacity-40"
            >
              {question.question}
              <ChevronRight className="mt-0.5 size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Publicação ativa</p>
          <div className="mt-3 flex items-center gap-3 text-xs">
            <Database className="size-4 text-accent" />
            Pessoas & Operações
          </div>
          <p className="ml-7 mt-1 text-[11px] text-muted-foreground">128 páginas · 486 trechos</p>
        </div>
      </aside>

      <section className="grid min-h-0 grid-rows-[auto_auto_1fr_auto]">
        <header className="flex flex-col gap-3 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="font-heading font-semibold">AI Wiki Chat</h2>
            <p className="mt-1 text-xs text-muted-foreground">Chat para usuários com configuração publicada</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onReload} className="rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:text-accent" aria-label="Recarregar publicação">
              <RefreshCw className="size-4" />
            </button>
            <button onClick={onClear} className="rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:text-red-300" aria-label="Limpar conversa">
              <Trash2 className="size-4" />
            </button>
            <span className="rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[10px] text-primary">demo.user</span>
          </div>
        </header>

        <div className="flex items-center gap-2 border-b border-white/10 bg-background/25 px-5 py-2.5 font-mono text-[10px] text-muted-foreground" role="status">
          <span className={`size-1.5 rounded-full ${thinking ? "bg-[#f5b84b]" : "bg-primary"}`} />
          {status}
        </div>

        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4 sm:p-6" aria-live="polite">
          {messages.map((message, index) => (
            <article
              key={`${message.role}-${index}`}
              className={`max-w-[90%] rounded-2xl border p-4 ${message.role === "user" ? "ml-auto border-primary/20 bg-primary/[0.07]" : "border-accent/15 bg-accent/[0.045]"}`}
            >
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {message.role === "user" ? <UserRound className="size-3.5 text-primary" /> : <Sparkles className="size-3.5 text-accent" />}
                {message.role === "user" ? "Você" : "Assistente"}
              </div>
              <p className="text-sm leading-6 text-foreground/90">{message.content}</p>
              {message.sources && (
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-3 sm:grid-cols-2">
                  {message.sources.map((source) => (
                    <div key={source.title} className="rounded-lg bg-background/50 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <FileText className="size-3.5 text-accent" />
                        {source.title}
                      </div>
                      <p className="mt-1 text-[10px] text-muted-foreground">{source.section}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
          {thinking && (
            <article className="max-w-[90%] rounded-2xl border border-accent/15 bg-accent/[0.045] p-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <LoaderCircle className="size-4 animate-spin text-accent" />
                Consultando a base de conhecimento…
              </div>
            </article>
          )}
        </div>

        <form onSubmit={onSubmit} className="border-t border-white/10 bg-background/30 p-3 sm:p-4">
          <div className="flex gap-2">
            <input
              value={prompt}
              onChange={(event) => onPromptChange(event.target.value)}
              disabled={!published || thinking}
              placeholder={published ? "Pergunte algo sobre a base publicada…" : "Aguardando publicação do Admin…"}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-background/65 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50"
            />
            <Button type="submit" disabled={!published || thinking || !prompt.trim()} aria-label="Enviar pergunta">
              <Send className="size-4" />
              <span className="hidden sm:inline">Enviar</span>
            </Button>
          </div>
          <label className="mt-3 inline-flex items-center gap-2 text-[11px] text-muted-foreground">
            <input type="checkbox" checked={forceNew} onChange={(event) => onForceNewChange(event.target.checked)} className="accent-[#55ddeb]" />
            Forçar nova consulta em vez de reutilizar o histórico
          </label>
        </form>
      </section>
    </div>
  )
}

function AdminExperience({
  provider,
  model,
  indexing,
  published,
  status,
  onProviderChange,
  onModelChange,
  onIndex,
  onPublish,
}: {
  provider: string
  model: string
  indexing: boolean
  published: boolean
  status: string
  onProviderChange: (value: string) => void
  onModelChange: (value: string) => void
  onIndex: () => void
  onPublish: () => void
}) {
  const models = provider === "OpenAI"
    ? ["GPT-5", "GPT-4.1"]
    : provider === "Claude"
      ? ["Claude Sonnet", "Claude Opus"]
      : ["Gemini Pro", "Gemini Flash"]

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-card/65 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary">1</span>
            <div>
              <h2 className="font-heading font-semibold">Inteligência do assistente</h2>
              <p className="mt-1 text-xs text-muted-foreground">Configuração resumida de LLM</p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="text-xs text-muted-foreground">Provedor</span>
              <select value={provider} onChange={(event) => onProviderChange(event.target.value)} className="rounded-xl border border-white/10 bg-background/70 px-3 py-3 outline-none focus:border-primary/45">
                <option>OpenAI</option>
                <option>Claude</option>
                <option>Gemini</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-xs text-muted-foreground">Modelo de chat</span>
              <select value={model} onChange={(event) => onModelChange(event.target.value)} className="rounded-xl border border-white/10 bg-background/70 px-3 py-3 outline-none focus:border-primary/45">
                {models.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-xl bg-background/45 p-3 text-xs text-muted-foreground">
            <Check className="size-4 text-primary" />
            Embeddings e limites usam uma configuração segura pré-definida na demo.
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-card/65 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary">2</span>
            <div>
              <h2 className="font-heading font-semibold">Base de conhecimento</h2>
              <p className="mt-1 text-xs text-muted-foreground">Fontes publicadas para o chat</p>
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            {sources.map((source) => (
              <div key={source.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/45 p-3">
                <source.icon className="size-4 text-accent" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{source.name}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{source.kind} · {source.detail}</p>
                </div>
                <Check className="size-4 text-primary" />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-white/10 bg-card/65 p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary">3</span>
              <div>
                <h2 className="font-heading font-semibold">Índice e publicação</h2>
                <p className="mt-1 text-xs text-muted-foreground">Prepare as fontes e disponibilize para os usuários</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[["Páginas", "128"], ["Trechos", "486"], ["Pendentes", indexing ? "3" : "0"]].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-background/45 p-3">
                  <p className="text-[10px] text-muted-foreground">{label}</p>
                  <p className="mt-1 font-mono text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-w-60 flex-col gap-2">
            <Button variant="outline" onClick={onIndex} disabled={indexing}>
              {indexing ? <LoaderCircle className="animate-spin" /> : <UploadCloud />}
              {indexing ? "Indexando fontes…" : "Simular nova indexação"}
            </Button>
            <Button onClick={onPublish} disabled={indexing || published}>
              <MessageSquareText />
              {published ? "Já publicado" : "Publicar para usuários"}
            </Button>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[10px] text-muted-foreground" role="status">
          <span className={`size-1.5 rounded-full ${indexing ? "bg-[#f5b84b]" : "bg-primary"}`} />
          {status}
        </div>
      </section>
    </div>
  )
}
