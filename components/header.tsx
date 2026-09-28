"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { activeMenuLabel, type NavLink, type NavMenu, navLinks, navMenus } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const triggerClass =
  "h-9 bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-white/[0.05] hover:text-foreground focus:bg-white/[0.05] focus:text-foreground data-[state=open]:bg-white/[0.06] data-[state=open]:text-foreground data-[state=open]:hover:bg-white/[0.06] data-[state=open]:focus:bg-white/[0.06] aria-[current=page]:text-primary"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname()
  const activeMenu = activeMenuLabel(pathname)

  function closeMobileMenu() {
    setIsMenuOpen(false)
    setOpenGroup(null)
  }

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

          <NavigationMenu className="hidden md:flex" aria-label="Principal" viewport={false}>
            <NavigationMenuList className="gap-0.5 lg:gap-1">
              {navMenus.map((menu, index) => (
                <NavigationMenuItem key={menu.label}>
                  <NavigationMenuTrigger className={triggerClass} aria-current={activeMenu === menu.label ? "page" : undefined}>
                    {menu.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "z-50 !rounded-2xl !border-white/10 !bg-[#0b1714] !p-0 !shadow-[0_24px_70px_rgba(0,0,0,0.5)]",
                      index > 0 && "!left-1/2 -translate-x-1/2",
                    )}
                  >
                    <DesktopMenuPanel menu={menu} pathname={pathname} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className={cn(triggerClass, "inline-flex items-center rounded-md")}>
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden text-muted-foreground hover:text-foreground lg:inline-flex" asChild>
              <Link href="/#contato">Fale Conosco</Link>
            </Button>
            <Button size="sm" className="shadow-[0_0_28px_rgba(149,255,128,0.22)]" asChild>
              <Link href="/#produtos">Testar produtos</Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-foreground"
            onClick={() => (isMenuOpen ? closeMobileMenu() : setIsMenuOpen(true))}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="menu-mobile" className="md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 py-4">
            <nav className="flex flex-col gap-1" aria-label="Menu">
              {navMenus.map((menu) => {
                const expanded = openGroup === menu.label
                const panelId = `menu-mobile-${menu.label.toLowerCase().normalize("NFD").replace(/[^a-z]/g, "")}`
                return (
                  <div key={menu.label}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(expanded ? null : menu.label)}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg py-2.5 text-sm font-medium transition-colors hover:text-foreground",
                        activeMenu === menu.label ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {menu.label}
                      <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} aria-hidden="true" />
                    </button>
                    {expanded && (
                      <div id={panelId} className="mb-2 grid gap-3 border-l border-white/10 pl-4">
                        {menu.groups.map((group, index) => (
                          <div key={group.title ?? index}>
                            {group.title && <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary/80">{group.title}</p>}
                            <ul className="grid gap-0.5">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    aria-current={link.href === pathname ? "page" : undefined}
                                    className="block rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-primary"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link href={menu.overview.href} onClick={closeMobileMenu} className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-primary">
                          {menu.overview.label}
                          <ArrowRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/#contato" onClick={closeMobileMenu}>Fale Conosco</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/#produtos" onClick={closeMobileMenu}>Testar produtos</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function DesktopMenuPanel({ menu, pathname }: { menu: NavMenu; pathname: string }) {
  const columns = menu.groups.length > 1 || menu.groups[0].links.length > 4
  return (
    <div className={cn("p-3", columns ? "w-[36rem]" : "w-[22rem]")}>
      <div className={cn("grid gap-3", columns && "grid-cols-2")}>
        {menu.groups.map((group, index) => (
          <div key={group.title ?? index} className={cn(!group.title && columns && "col-span-2")}>
            {group.title && <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary/80">{group.title}</p>}
            <ul className={cn("grid gap-0.5", !group.title && columns && "grid-cols-2")}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <MenuLink link={link} current={link.href === pathname} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-white/10 pt-2">
        <NavigationMenuLink asChild className="flex-row items-center gap-1.5 px-3 font-medium text-primary hover:bg-white/[0.05] hover:text-primary focus:bg-white/[0.05] focus:text-primary">
          <Link href={menu.overview.href}>
            {menu.overview.label}
            <ArrowRight className="size-3.5 text-primary" aria-hidden="true" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  )
}

function MenuLink({ link, current }: { link: NavLink; current: boolean }) {
  return (
    <NavigationMenuLink
      asChild
      active={current}
      className="gap-0.5 rounded-lg px-3 py-2.5 hover:bg-white/[0.05] hover:text-foreground focus:bg-white/[0.05] focus:text-foreground data-[active=true]:bg-primary/[0.08] data-[active=true]:text-foreground data-[active=true]:hover:bg-primary/[0.1] data-[active=true]:focus:bg-primary/[0.1]"
    >
      <Link href={link.href} aria-current={current ? "page" : undefined}>
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          {link.accent && <span className="size-1.5 shrink-0 rounded-full" style={{ background: link.accent }} aria-hidden="true" />}
          {link.label}
        </span>
        {link.description && <span className="text-xs leading-5 text-muted-foreground">{link.description}</span>}
      </Link>
    </NavigationMenuLink>
  )
}
