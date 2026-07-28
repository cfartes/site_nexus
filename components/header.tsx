"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex flex-col leading-none" aria-label="Nexus Data Analytics">
              <span className="text-2xl font-black text-primary">nexus</span>
              <span className="text-xs font-medium text-primary/80">data & analytics</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <Link href="/#contato">Fale Conosco</Link>
            </Button>
            <Button size="sm" className="shadow-[0_0_28px_rgba(149,255,128,0.22)]" asChild>
              <Link href="/#produtos">Testar produtos</Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/#contato">Fale Conosco</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/#produtos">Testar produtos</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
