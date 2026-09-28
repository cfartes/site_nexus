import Link from "next/link"
import { industrialPages } from "@/lib/industrial-pages"
import { servicePages } from "@/lib/navigation"

const linkGroups = [
  {
    title: "Serviços",
    links: [
      { label: servicePages.dataAi.label, href: servicePages.dataAi.href },
      { label: servicePages.cto.label, href: servicePages.cto.href },
      { label: servicePages.softwareFactory.label, href: servicePages.softwareFactory.href },
      { label: servicePages.outsourcing.label, href: servicePages.outsourcing.href },
      { label: "Sobre a Nexus", href: "/#sobre" },
      { label: "Contato", href: "/#contato" },
    ],
  },
  {
    title: "Produtos",
    links: [
      { label: "AI Wiki", href: "/produtos/ai-wiki" },
      { label: "FinOps Intelligence", href: "/produtos/finops" },
      { label: "Argus Sentinel", href: "/produtos/argus" },
      { label: "Delegômetro", href: "/produtos/delegometro" },
    ],
  },
  {
    title: "Indústria",
    links: [
      { label: industrialPages.hub.shortName, href: industrialPages.hub.href },
      { label: "MES", href: `${industrialPages.hub.href}#mes` },
      { label: "Cyber OT", href: `${industrialPages.hub.href}#cyber-ot` },
      { label: industrialPages.vision.shortName, href: industrialPages.vision.href },
      { label: industrialPages.wiki.shortName, href: industrialPages.wiki.href },
      { label: industrialPages.data.shortName, href: industrialPages.data.href },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
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
          <nav className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3" aria-label="Rodapé">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary/80">{group.title}</p>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
