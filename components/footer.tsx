import Link from "next/link"

const links = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
  { label: "AI Wiki", href: "/produtos/ai-wiki" },
  { label: "FinOps Intelligence", href: "/produtos/finops" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Link href="/" className="inline-flex flex-col leading-none" aria-label="Nexus Data Analytics">
              <span className="font-heading text-3xl font-bold text-primary">nexus</span>
              <span className="mt-1 text-xs font-medium text-primary/70">data & analytics</span>
            </Link>
            <p className="mt-5 max-w-lg leading-7 text-muted-foreground">
              Organizamos dados, conectamos conhecimento e ajudamos equipes a tomar decisões
              com mais clareza.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3" aria-label="Rodapé">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Nexus Data Analytics. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
