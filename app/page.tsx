import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { IndustrialAiHighlight } from "@/components/industrial/industrial-ai-highlight"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <IndustrialAiHighlight
        id="industria"
        intro="Conectamos o chão de fábrica aos dados, à inteligência artificial e à gestão. Para a indústria, duas aplicações se destacam: visão computacional nas verificações visuais da produção e o AI Wiki na consulta à documentação técnica."
        showHubLink
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
