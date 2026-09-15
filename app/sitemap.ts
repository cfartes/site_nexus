import type { MetadataRoute } from "next"

const baseUrl = "https://nexusdataanalytics.com.br"

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/produtos/ai-wiki", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/finops", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/argus", priority: 0.8, changeFrequency: "monthly" },
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
