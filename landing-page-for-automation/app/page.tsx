import HeroSection from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
// import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ToolsSection } from "@/components/tools-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      {/* <BenefitsSection /> */}
      <HowItWorksSection />
      <UseCasesSection />
      <ToolsSection />
      <Footer />
    </main>
  )
}
