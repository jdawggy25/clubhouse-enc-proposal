"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { Check, Globe, Search, Gauge, MapPin, FileText, BarChart } from "lucide-react"

const deliverables = [
    {
        icon: Globe,
        title: "Custom Website",
        description: "Hand-coded Next.js site with premium animations and modern design",
    },
    {
        icon: Search,
        title: "Local SEO",
        description: "Encinitas-focused optimization to dominate local search results",
    },
    {
        icon: Gauge,
        title: "Performance",
        description: "Sub-2 second load times with Core Web Vitals optimization",
    },
    {
        icon: MapPin,
        title: "Google Business",
        description: "Optimized Google Business Profile for local discovery",
    },
    {
        icon: FileText,
        title: "Schema Markup",
        description: "Structured data for rich search results and AI visibility",
    },
    {
        icon: BarChart,
        title: "Analytics Setup",
        description: "Track visitors, conversions, and search performance",
    },
]

const highlights = [
    "Custom coded - no templates or page builders",
    "Mobile-first responsive design",
    "Premium Framer Motion animations",
    "Local SEO for Encinitas recovery searches",
    "Google Business Profile optimization",
    "Schema markup for rich results",
    "Core Web Vitals optimized",
    "Vercel edge deployment",
]

export const OurSolution = () => {
    return (
        <section id="solution" className="relative py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <SectionHeading
                    tag="Our Solution"
                    title="Website Redesign + SEO"
                    subtitle="A complete digital transformation that gets Club House ENC found by local customers searching for recovery and movement classes."
                />

                {/* Deliverables Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {deliverables.map((item) => (
                        <div key={item.title} className="bento-card">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* What's Included */}
                <div className="max-w-3xl mx-auto">
                    <div className="bento-card border-primary/30 shadow-blue">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">Everything Included</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {highlights.map((highlight) => (
                                <div key={highlight} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Architecture Preview */}
                <div className="max-w-4xl mx-auto mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Technical Architecture</h3>
                        <p className="text-sm text-zinc-500">
                            Modern, fast, and built for search engine visibility
                        </p>
                    </div>
                    <div className="bento-card bg-[#0d1117] font-mono text-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 text-zinc-500 text-xs">architecture.md</span>
                        </div>
                        <div className="flex justify-center overflow-x-auto">
                            <pre className="text-[9px] sm:text-xs md:text-sm whitespace-pre">
                                <code className="text-zinc-400">
{`┌───────────────────────────────────────┐
│         Next.js Frontend              │
│  (Homepage, Services, About, Contact) │
│  • Server-side rendering for SEO      │
│  • Framer Motion animations           │
│  • Mobile-first responsive design     │
└─────────────────┬─────────────────────┘
                  │
                  ▼
┌───────────────────────────────────────┐
│         Vercel Edge Network           │
│  • Global CDN (sub-100ms responses)   │
│  • Automatic HTTPS & security headers │
│  • 99.99% uptime guarantee            │
└─────────────────┬─────────────────────┘
                  │
                  ▼
┌───────────────────────────────────────┐
│         Google Search & Maps          │
│  • Schema markup for rich results     │
│  • Local SEO signals                  │
│  • Google Business Profile            │
└───────────────────────────────────────┘`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group h-12 px-6 rounded-full bg-primary text-black font-bold overflow-hidden inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                    >
                        See investment details
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
