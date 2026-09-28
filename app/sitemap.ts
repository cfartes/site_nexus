import type { MetadataRoute } from "next"
import { industrialPages } from "@/lib/industrial-pages"
import { siteUrl as baseUrl } from "@/lib/seo"

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/produtos/ai-wiki", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/finops", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/argus", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/delegometro", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicos/dados-e-ia", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicos/cto-as-a-service", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicos/fabrica-de-software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicos/outsourcing-de-ti", priority: 0.8, changeFrequency: "monthly" },
  { path: industrialPages.hub.href, priority: 0.9, changeFrequency: "monthly" },
  { path: industrialPages.vision.href, priority: 0.8, changeFrequency: "monthly" },
  { path: industrialPages.wiki.href, priority: 0.8, changeFrequency: "monthly" },
  { path: industrialPages.data.href, priority: 0.8, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
