import { cn } from "@/lib/utils"

export const inspectionMarkers = [
  {
    id: 1,
    title: "Componente presente",
    detail: "Encaixe localizado na posição esperada da embalagem.",
    status: "Conforme",
    color: "#7bf36a",
  },
  {
    id: 2,
    title: "Rótulo identificado",
    detail: "Rótulo presente na área prevista, com código de barras visível para leitura.",
    status: "Conforme",
    color: "#55ddeb",
  },
  {
    id: 3,
    title: "Possível desvio para revisão",
    detail: "Marca na superfície próxima à borda inferior, encaminhada para avaliação de uma pessoa da qualidade.",
    status: "Revisar",
    color: "#f5b84b",
  },
] as const

const markerBoxes = [
  { id: 1, x: 378, y: 138, width: 68, height: 68, dashed: false },
  { id: 2, x: 168, y: 136, width: 200, height: 132, dashed: false },
  { id: 3, x: 376, y: 252, width: 82, height: 52, dashed: true },
]

const barcode = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2, 2, 1, 3].reduce<Array<{ x: number; width: number }>>(
  (bars, units) => {
    const previous = bars.at(-1)
    const x = previous ? previous.x + previous.width + 2 : 192
    return [...bars, { x, width: units * 2 }]
  },
  [],
)

/** Ilustração original de uma embalagem sobre esteira, com marcações opcionais de inspeção. */
export function InspectionIllustration({
  showMarkers = true,
  className,
}: {
  showMarkers?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label="Ilustração de uma embalagem sobre uma esteira com três marcações de inspeção: componente presente, rótulo identificado e possível desvio para revisão."
      className={cn("h-auto w-full", className)}
    >
      <rect width="640" height="400" rx="18" fill="#07120f" />
      {Array.from({ length: 15 }, (_, i) => (
        <line key={`v${i}`} x1={i * 44 + 12} y1="0" x2={i * 44 + 12} y2="400" stroke="#55ddeb" strokeOpacity="0.05" />
      ))}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 44 + 14} x2="640" y2={i * 44 + 14} stroke="#55ddeb" strokeOpacity="0.05" />
      ))}

      {/* Cantos do enquadramento da câmera */}
      <g stroke="#9baea6" strokeOpacity="0.55" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M34 70 V40 H64" />
        <path d="M576 40 H606 V70" />
        <path d="M606 330 V360 H576" />
        <path d="M64 360 H34 V330" />
      </g>

      {/* Esteira */}
      <rect x="40" y="318" width="560" height="20" rx="10" fill="#10211c" stroke="#25433a" />
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={62 + i * 47} cy="328" r="5" fill="#1b332b" stroke="#25433a" />
      ))}

      {/* Embalagem */}
      <polygon points="150,120 192,88 512,88 470,120" fill="#24413a" stroke="#3a6457" />
      <polygon points="470,120 512,88 512,288 470,318" fill="#11241f" stroke="#2f5247" />
      <rect x="150" y="120" width="320" height="198" rx="4" fill="#1a3029" stroke="#3a6457" />
      <line x1="310" y1="88" x2="310" y2="120" stroke="#3a6457" />

      {/* Rótulo */}
      <rect x="178" y="146" width="180" height="112" rx="6" fill="#e6efe9" />
      <rect x="192" y="160" width="112" height="9" rx="3" fill="#7d9189" />
      <rect x="192" y="177" width="148" height="7" rx="3" fill="#a9bab3" />
      <rect x="192" y="191" width="96" height="7" rx="3" fill="#a9bab3" />
      <g fill="#0b1512">
        {barcode.map((bar) => (
          <rect key={bar.x} x={bar.x} y="212" width={bar.width} height="34" />
        ))}
      </g>

      {/* Componente encaixado */}
      <circle cx="412" cy="172" r="24" fill="#2a4a40" stroke="#7f9d92" strokeWidth="3" />
      <circle cx="412" cy="172" r="10" fill="#0d1b17" stroke="#56756b" strokeWidth="2" />

      {/* Marca na superfície */}
      <path d="M392 272 l10 5 l-4 5 l13 4 l-3 6 l16 3 l-2 5 l12 2" fill="none" stroke="#d8b27a" strokeOpacity="0.85" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {showMarkers && (
        <g>
          {markerBoxes.map((box) => {
            const marker = inspectionMarkers.find((item) => item.id === box.id)!
            return (
              <g key={box.id}>
                <rect
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  rx="7"
                  fill={marker.color}
                  fillOpacity="0.06"
                  stroke={marker.color}
                  strokeWidth="2.5"
                  strokeDasharray={box.dashed ? "7 6" : undefined}
                />
                <circle cx={box.x} cy={box.y} r="14" fill={marker.color} />
                <text x={box.x} y={box.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#07130f" fontFamily="sans-serif">
                  {box.id}
                </text>
              </g>
            )
          })}
        </g>
      )}

      <text x="40" y="384" fontSize="12" letterSpacing="2" fill="#9baea6" fontFamily="monospace">ILUSTRAÇÃO</text>
    </svg>
  )
}
