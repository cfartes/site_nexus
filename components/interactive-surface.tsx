"use client"

import { type CSSProperties, type PointerEvent, type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

export function InteractiveSurface({
  children,
  className,
  accent = "#7bf36a",
}: {
  children: ReactNode
  className?: string
  accent?: string
}) {
  const frame = useRef<number | null>(null)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return
    const node = event.currentTarget
    const { left, top } = node.getBoundingClientRect()
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty("--glow-x", `${event.clientX - left}px`)
      node.style.setProperty("--glow-y", `${event.clientY - top}px`)
    })
  }

  return (
    <div
      className={cn("interactive-surface", className)}
      onPointerMove={handlePointerMove}
      style={{ "--surface-accent": accent } as CSSProperties}
    >
      {children}
    </div>
  )
}
