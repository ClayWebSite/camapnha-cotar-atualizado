import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VantagensSection } from "@/components/vantagens-section"
import { PorQueEscolherSection } from "@/components/por-que-escolher-section"
import { BeneficiosSection } from "@/components/beneficios-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VantagensSection />
      <PorQueEscolherSection />
      <BeneficiosSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
