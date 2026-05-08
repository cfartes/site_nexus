import Link from "next/link"
import { Linkedin, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  servicos: [
    { label: "Governança de Dados", href: "#servicos" },
    { label: "Engenharia de Dados", href: "#servicos" },
    { label: "DataViz", href: "#servicos" },
    { label: "Ciência de Dados", href: "#servicos" },
    { label: "Inteligência Artificial", href: "#servicos" },
  ],
  produtos: [
    { label: "AI Wiki", href: "#produtos" },
    { label: "FinOps Intelligence", href: "#produtos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="flex flex-col leading-none" aria-label="Nexus Data Analytics">
                <span className="text-3xl font-black text-primary">nexus</span>
                <span className="text-sm font-medium text-primary/80">data & analytics</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Transformando dados em vantagem competitiva. Consultoria especializada 
              em Data & Analytics, Governança de Dados e Inteligência Artificial.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-secondary transition-colors hover:bg-primary/15"
                >
                  <social.icon className="size-5 text-muted-foreground transition-colors hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Nexus Data Analytics. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
