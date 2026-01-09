"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { Palette, Code, Rocket, Check } from "lucide-react"

const phases = [
    {
        week: "Weeks 1-2",
        title: "Discovery & Design",
        icon: Palette,
        items: [
            "Brand asset collection",
            "Design mockups & approval",
            "Content strategy planning",
            "Keyword research finalization"
        ]
    },
    {
        week: "Weeks 3-4",
        title: "Development",
        icon: Code,
        items: [
            "Next.js site build",
            "SEO-optimized content",
            "Schema markup implementation",
            "Mobile responsive design"
        ]
    },
    {
        week: "Weeks 5-6",
        title: "SEO & Launch",
        icon: Rocket,
        items: [
            "Google Business optimization",
            "Core Web Vitals tuning",
            "Analytics & tracking setup",
            "Production deployment"
        ]
    }
]

export const ProjectPhases = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <SectionHeading
                    tag="The Plan"
                    title="6-Week Development Timeline"
                    subtitle="A thorough timeline to deliver your premium website with comprehensive SEO optimization."
                />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {phases.map((phase) => (
                        <div
                            key={phase.week}
                            className="bento-card relative"
                        >
                            {/* Week badge */}
                            <div className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-bold text-white mb-4">
                                {phase.week}
                            </div>

                            <div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <phase.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>

                                <div className="space-y-2">
                                    {phase.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                                            <Check className="w-4 h-4 text-success shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline line (desktop) */}
                <div className="hidden md:block max-w-5xl mx-auto mt-8">
                    <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full" />
                </div>
            </div>
        </section>
    )
}
