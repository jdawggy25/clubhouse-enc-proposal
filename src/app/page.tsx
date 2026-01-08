import { Hero } from "@/components/sections/Hero"
import { AboutClient } from "@/components/sections/AboutClient"
import { WhyCustom } from "@/components/sections/WhyCustom"
import { OurSolution } from "@/components/sections/OurSolution"
import { ProjectPhases } from "@/components/sections/ProjectPhases"
import { Investment } from "@/components/sections/Investment"
import { MockupPreview } from "@/components/sections/MockupPreview"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutClient />
      <WhyCustom />
      <OurSolution />
      <ProjectPhases />
      <Investment />
      <MockupPreview />
      <CTA />
    </>
  )
}
