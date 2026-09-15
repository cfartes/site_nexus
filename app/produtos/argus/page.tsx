import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArgusDemo } from "@/components/argus-demo"

export const metadata: Metadata = {
  title: "Demonstração Argus Sentinel | Nexus Data Analytics",
  description: "Explore uma demonstração com dados simulados do Argus Sentinel, a torre de controle para ambientes Microsoft Fabric e Power BI.",
}

export default function ArgusPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-20 size-[28rem] rounded-full bg-[#8b7cf6]/[0.08] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/#produtos" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#8b7cf6]">
            <ArrowLeft className="size-4" /> Voltar aos produtos
          </Link>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-[#8b7cf6]">Demonstração interativa</p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Argus Sentinel</h1>
          <p className="mb-10 mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Monitore capacidades e workspaces, investigue falhas e veja a IA propor correções para aprovação do time
            em um ambiente Microsoft Fabric e Power BI simulado.
          </p>
          <ArgusDemo />
        </div>
      </section>
      <Footer />
    </main>
  )
}
