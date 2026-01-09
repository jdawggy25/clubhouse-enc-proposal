import { Hero } from "@/components/sections/Hero"
import { AboutClient } from "@/components/sections/AboutClient"
import { AhrefsData } from "@/components/sections/AhrefsData"
import { WhyCustom } from "@/components/sections/WhyCustom"
import { OurSolution } from "@/components/sections/OurSolution"
import { ProjectPhases } from "@/components/sections/ProjectPhases"
import { Investment } from "@/components/sections/Investment"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutClient />
      <AhrefsData />
      <WhyCustom />
      <OurSolution />
      <ProjectPhases />
      <Investment />
      <CTA />
    </>
  )
}
