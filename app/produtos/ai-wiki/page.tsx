import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WikiDemo } from "@/components/wiki-demo"

export const metadata: Metadata = {
  title: "Demonstração AI Wiki | Nexus Data Analytics",
  description: "Explore uma demonstração com dados simulados do AI Wiki da Nexus.",
}

export default function AiWikiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-20 size-[28rem] rounded-full bg-accent/[0.08] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/#produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent">
            <ArrowLeft className="size-4" /> Voltar aos produtos
          </Link>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-accent">Demonstração interativa</p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">AI Wiki</h1>
          <p className="mb-10 mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Experimente como documentos internos podem se transformar em respostas claras e rastreáveis.{" "}
            <Link href="/ai-wiki-industrial" className="text-accent underline-offset-4 hover:underline">
              Veja também a aplicação na indústria.
            </Link>
          </p>
          <WikiDemo />
        </div>
      </section>
      <Footer />
    </main>
  )
}
