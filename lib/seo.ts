import type { Metadata } from "next"

export const siteUrl = "https://nexusdataanalytics.com.br"
export const siteName = "Nexus Data Analytics"

export function buildPageMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: path,
      siteName,
      title,
      description,
      images: [{ url: "/images/logo.png", width: 800, height: 600, alt: "Nexus Data Analytics Logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.png"],
    },
  }
}
