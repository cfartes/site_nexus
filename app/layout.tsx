import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsappFloatButton } from '@/components/whatsapp-float-button'
import { serializeJsonLd, siteJsonLd } from '@/lib/structured-data'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", preload: false })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", preload: false })
const isVercelProduction = process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusdataanalytics.com.br'),
  title: 'Nexus Data Analytics | Consultoria em Data & Analytics, IA e Governança de Dados',
  description: 'Transforme seus dados em vantagem competitiva. Consultoria especializada em Governança de Dados, Engenharia de Dados, DataViz, Ciência de Dados e Inteligência Artificial. Conheça nossos produtos SaaS: AI Wiki, FinOps Intelligence, Argus Sentinel e Nexus Amplify.',
  keywords: ['consultoria de dados', 'data analytics', 'governança de dados', 'engenharia de dados', 'ciência de dados', 'inteligência artificial', 'IA', 'dataviz', 'visualização de dados', 'FinOps', 'otimização de custos cloud', 'Azure', 'AWS', 'GCP', 'Nexus Amplify', 'desenvolvimento de liderança', 'delegação'],
  authors: [{ name: 'Nexus Data Analytics' }],
  creator: 'Nexus Data Analytics',
  publisher: 'Nexus Data Analytics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nexusdataanalytics.com.br',
    siteName: 'Nexus Data Analytics',
    title: 'Nexus Data Analytics | Consultoria em Data & Analytics',
    description: 'Transforme seus dados em vantagem competitiva. Especialistas em Governança, Engenharia, DataViz, Ciência de Dados e IA.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Nexus Data Analytics Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Data Analytics | Consultoria em Data & Analytics',
    description: 'Transforme seus dados em vantagem competitiva.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#07110f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark bg-background">
      <body className={`${geist.variable} ${geistMono.variable} ${sora.variable} font-sans antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        {children}
        <WhatsappFloatButton />
        {isVercelProduction && <Analytics />}
      </body>
    </html>
  )
}
