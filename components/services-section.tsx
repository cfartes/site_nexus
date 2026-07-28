"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  BarChart3,
  Brain,
  ChevronRight,
  Code,
  Database,
  EyeOff,
  Layers3,
  Radio,
  Shield,
  TimerReset,
} from "lucide-react"
import { FermiVisual, SurvivalVisual, ZenoVisual } from "@/components/philosophy-visuals"
import { Reveal } from "@/components/reveal"

const philosophies = [
  {
    id: "sobrevivencia",
    problem: "Análise incompleta",
    philosophy: "Viés de sobrevivência",
    quote: "Seus dados mostram o que aconteceu — e o que conseguiu chegar até eles.",
    description:
      "Governança revela lacunas e fontes frágeis. Analytics transforma o conjunto completo em decisões mais confiáveis.",
    thesis: "Nem todo problema deixa rastros visíveis.",
    explanation:
      "No viés de sobrevivência, enxergamos apenas aquilo que passou pelo filtro e esquecemos o que ficou pelo caminho. Com dados acontece o mesmo: falhas, exceções e fontes desconectadas podem nunca chegar ao relatório.",
    icon: EyeOff,
    services: [
      { id: "servico-governanca", title: "Governança de Dados", icon: Shield },
      { id: "servico-analytics", title: "Analytics & DataViz", icon: BarChart3 },
    ],
  },
  {
    id: "fermi",
    problem: "Potencial não aproveitado",
    philosophy: "Paradoxo de Fermi",
    quote: "Se existem tantas oportunidades nos seus dados, onde estão os resultados?",
    description:
      "Engenharia torna os sinais acessíveis. Ciência de Dados e IA transforma possibilidades em ações verificáveis.",
    thesis: "O silêncio não significa ausência — talvez seja preciso saber onde procurar.",
    explanation:
      "O paradoxo de Fermi pergunta: se existem tantas possibilidades no universo, onde estão os sinais? Nas empresas, dados e oportunidades também podem estar por toda parte sem nunca se transformar em resultado.",
    icon: Radio,
    services: [
      { id: "servico-engenharia", title: "Engenharia de Dados", icon: Database },
      { id: "servico-ia", title: "Ciência de Dados e IA", icon: Brain },
    ],
  },
  {
    id: "zenao",
    problem: "Execução interminável",
    philosophy: "Paradoxo de Zenão",
    quote: "Metade do caminho ainda não é uma entrega.",
    description:
      "Aplicações personalizadas reduzem a distância até o uso. Nosso método conduz estratégia, implementação e operação.",
    thesis: "Nosso trabalho é fazer a entrega chegar à operação.",
    explanation:
      "No paradoxo da dicotomia, você percorre metade da distância até o destino. Depois, metade do que resta. E continua assim — sempre avançando, aparentemente sem chegar. Projetos de tecnologia podem dar a mesma sensação.",
    icon: TimerReset,
    services: [
      { id: "servico-aplicacoes", title: "Aplicações personalizadas", icon: Code },
      { id: "servico-operacao", title: "Da estratégia à operação", icon: Layers3 },
    ],
  },
] as const

const serviceToPhilosophy = new Map(
  philosophies.flatMap((philosophy, index) => philosophy.services.map((service) => [`#${service.id}`, index])),
)

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const advanceTimerRef = useRef<number | null>(null)
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const [userControlled, setUserControlled] = useState(false)
  const [nextGlow, setNextGlow] = useState<number | null>(null)
  const [conceptLocked, setConceptLocked] = useState(false)
  const [conceptPreview, setConceptPreview] = useState(false)

  useEffect(() => {
    const selectFromHash = () => {
      const matching = serviceToPhilosophy.get(window.location.hash)
      if (matching === undefined) return
      if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current)
      setActive(matching)
      setUserControlled(true)
      setConceptLocked(false)
      setConceptPreview(false)
    }

    selectFromHash()
    window.addEventListener("hashchange", selectFromHash)
    return () => {
      window.removeEventListener("hashchange", selectFromHash)
      if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const handleComplete = useCallback(() => {
    if (
      !started ||
      userControlled ||
      active >= philosophies.length - 1 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }
    const next = active + 1
    setNextGlow(next)
    advanceTimerRef.current = window.setTimeout(() => {
      setActive(next)
      setNextGlow(null)
      setConceptLocked(false)
      setConceptPreview(false)
    }, 2400)
  }, [active, started, userControlled])

  function stopAutoplay() {
    setUserControlled(true)
    setNextGlow(null)
    if (advanceTimerRef.current) {
      window.clearTimeout(advanceTimerRef.current)
      advanceTimerRef.current = null
    }
  }

  function selectPhilosophy(index: number) {
    stopAutoplay()
    setConceptLocked(false)
    setConceptPreview(false)
    setActive(index)
  }

  const ActiveVisual = [SurvivalVisual, FermiVisual, ZenoVisual][active]
  const activePhilosophy = philosophies[active]
  const conceptOpen = conceptLocked || conceptPreview

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="section-alt relative scroll-mt-24 overflow-hidden border-b border-white/10 py-24 md:py-32"
      onPointerDown={() => setUserControlled(true)}
      onFocusCapture={() => setUserControlled(true)}
    >
      <svg className="service-flow pointer-events-none absolute inset-0 size-full opacity-35" viewBox="0 0 1440 1000" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-80 180 C 220 70, 330 380, 650 280 S 1050 70, 1520 230" />
        <path d="M-120 510 C 210 360, 420 720, 760 530 S 1160 330, 1540 610" />
        <path d="M-60 830 C 260 650, 510 930, 820 750 S 1200 560, 1510 810" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Como pensamos e construímos</p>
            <h2 className="font-heading mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Três problemas que tecnologia ainda não resolveu sozinha.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Dados podem esconder ausências, possibilidades podem permanecer silenciosas e projetos
            podem avançar sem chegar. É nesses intervalos que nosso trabalho começa.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-3" role="tablist" aria-label="Problemas e serviços">
            {philosophies.map((philosophy, index) => {
              const selected = active === index
              const glowing = nextGlow === index
              return (
                <Reveal key={philosophy.id} delay={index * 70}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="philosophy-stage"
                    onClick={() => selectPhilosophy(index)}
                    onFocus={() => {
                      if (!selected) return
                      stopAutoplay()
                      setConceptPreview(true)
                    }}
                    onBlur={() => setConceptPreview(false)}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                      selected
                        ? "border-primary/30 bg-[#10231c] shadow-[0_18px_50px_rgba(0,0,0,0.26)]"
                        : glowing
                          ? "border-primary/45 bg-primary/[0.07] shadow-[0_0_34px_rgba(123,243,106,0.14)]"
                          : "border-white/10 bg-card/65 hover:-translate-y-0.5 hover:border-white/20 hover:bg-card/90"
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-0.5 transition-colors ${
                        selected || glowing ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    <span className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          selected
                            ? "border-primary/25 bg-primary/[0.09] text-primary"
                            : "border-white/10 bg-white/[0.025] text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        <philosophy.icon className="size-4.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          {philosophy.problem}
                        </span>
                        <span
                          className={`mt-1 block w-fit font-heading text-sm font-semibold transition-all duration-300 sm:text-base ${
                            selected && conceptOpen
                              ? "text-primary [text-shadow:0_0_18px_rgba(123,243,106,0.4)]"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                          onPointerEnter={() => {
                            if (!selected) return
                            stopAutoplay()
                            setConceptPreview(true)
                          }}
                          onPointerLeave={() => setConceptPreview(false)}
                        >
                          {philosophy.philosophy}
                        </span>
                        <span className="font-heading mt-3 block text-lg font-semibold leading-snug text-foreground">
                          {philosophy.quote}
                        </span>
                        <span className={`mt-3 text-sm leading-6 text-muted-foreground ${selected ? "block" : "hidden"}`}>
                          {philosophy.description}
                        </span>
                        <span className="mt-4 flex flex-wrap gap-2">
                          {philosophy.services.map((service) => (
                            <span
                              key={service.id}
                              id={service.id}
                              className="scroll-mt-32 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                            >
                              <service.icon className="size-3 text-primary" />
                              {service.title}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </button>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={100} className="lg:sticky lg:top-24">
            <div
              id="philosophy-stage"
              role="tabpanel"
              aria-label={`Animação: ${activePhilosophy.philosophy}`}
              className="relative"
            >
              {started ? (
                <div key={`${activePhilosophy.id}-${active}`} className="animate-in fade-in duration-500">
                  <ActiveVisual onComplete={handleComplete} />
                  <div className="relative mt-4">
                    <span
                      className={`absolute -top-4 left-8 h-4 w-px bg-gradient-to-b from-primary/70 to-primary/10 transition-opacity duration-300 ${
                        conceptOpen ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      aria-expanded={conceptOpen}
                      aria-controls="philosophy-concept"
                      onClick={() => {
                        stopAutoplay()
                        setConceptLocked((current) => !current)
                        setConceptPreview(false)
                      }}
                      onPointerEnter={() => setConceptPreview(true)}
                      onPointerLeave={() => setConceptPreview(false)}
                      onFocus={() => setConceptPreview(true)}
                      onBlur={() => setConceptPreview(false)}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                        conceptOpen
                          ? "border-primary/30 bg-primary/[0.055] shadow-[0_0_32px_rgba(123,243,106,0.1)]"
                          : "border-white/10 bg-card/55 hover:border-primary/20 hover:bg-card/75"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="font-heading text-sm font-semibold text-foreground">
                          O que isso revela
                        </span>
                        <ChevronRight
                          className={`size-4 shrink-0 text-primary transition-transform duration-300 ${
                            conceptOpen ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                        {activePhilosophy.thesis}
                      </span>
                      <span
                        id="philosophy-concept"
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          conceptOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                        aria-hidden={!conceptOpen}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-3 block border-t border-primary/10 pt-3 text-sm leading-6 text-muted-foreground">
                            {activePhilosophy.explanation}
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-[29rem] animate-pulse rounded-[1.5rem] border border-white/10 bg-[#07100f]/70 motion-reduce:animate-none" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
