import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinOpsDemo } from "@/components/finops-demo"

export const metadata: Metadata = {
  title: "Demonstração FinOps Intelligence | Nexus Data Analytics",
  description: "Explore uma demonstração com dados simulados do FinOps Intelligence da Nexus.",
}

export default function FinOpsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute right-1/4 top-20 size-[28rem] rounded-full bg-[#f5b84b]/[0.07] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/#produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#f5b84b]">
            <ArrowLeft className="size-4" /> Voltar aos produtos
          </Link>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-[#f5b84b]">Demonstração interativa</p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">FinOps Intelligence</h1>
          <p className="mb-10 mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Execute uma auditoria demonstrativa, acompanhe o processamento e investigue recomendações priorizadas por impacto.
          </p>
          <FinOpsDemo />
        </div>
      </section>
      <Footer />
    </main>
  )
}
