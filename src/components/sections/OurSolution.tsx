"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { Check, X, Crown, Zap, Target } from "lucide-react"

const tiers = [
    {
        name: "Essential Start",
        price: "$7,500",
        icon: Zap,
        tagline: "Professional foundation to get started",
        description: "Choose from 3 options focused on website, booking, or a starter foundation.",
        highlights: [
            { text: "Custom Next.js website", included: true },
            { text: "Mobile responsive design", included: true },
            { text: "Basic SEO setup", included: true },
            { text: "Vercel deployment", included: true },
            { text: "Full MindBody integration", included: false },
            { text: "Member portal", included: false },
        ],
        options: ["Premium Website Only", "Core + Booking", "Starter Package"],
    },
    {
        name: "Choose Your Focus",
        price: "$10,000",
        icon: Target,
        tagline: "Prioritize what matters most",
        description: "Choose from 3 options: website-first, integration-first, or balanced essentials.",
        highlights: [
            { text: "Custom Next.js website", included: true },
            { text: "Premium animations", included: "varies" },
            { text: "LLM SEO optimization", included: "varies" },
            { text: "Custom booking flows", included: "varies" },
            { text: "Member portal", included: "varies" },
            { text: "Multi-location support", included: "varies" },
        ],
        options: ["Website-First", "Integration-First", "Balanced Essentials"],
    },
    {
        name: "Full Experience",
        price: "$15,000",
        icon: Crown,
        tagline: "The complete package",
        description: "Everything included. Premium website with full MindBody integration.",
        highlights: [
            { text: "Premium custom website", included: true },
            { text: "Premium Framer Motion animations", included: true },
            { text: "LLM SEO optimization", included: true },
            { text: "Full MindBody integration", included: true },
            { text: "Member portal & dashboard", included: true },
            { text: "Package purchase flows", included: true },
        ],
        recommended: true,
    },
]

const FeatureIndicator = ({ included }: { included: boolean | string }) => {
    if (included === "varies") {
        return (
            <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <span className="text-amber-400 text-xs font-bold">~</span>
            </div>
        )
    }
    return (
        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            included ? 'bg-primary/10' : 'bg-zinc-800'
        }`}>
            {included ? (
                <Check className="w-3 h-3 text-primary" />
            ) : (
                <X className="w-3 h-3 text-zinc-600" />
            )}
        </div>
    )
}

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
                    title="Three Tiers, Your Choice"
                    subtitle="We've designed flexible packages so you can invest in what matters most to your business right now—with room to grow."
                />

                {/* Tier Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`bento-card relative ${
                                tier.recommended ? 'border-primary/30 shadow-blue' : ''
                            }`}
                        >
                            {tier.recommended && (
                                <div className="absolute top-3 right-3 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full">
                                    Recommended
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                    tier.recommended ? 'bg-primary/20' : 'bg-white/5'
                                }`}>
                                    <tier.icon className={`w-5 h-5 ${
                                        tier.recommended ? 'text-primary' : 'text-zinc-400'
                                    }`} />
                                </div>
                                <div>
                                    <div className="text-2xl font-hero text-primary">{tier.price}</div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                            <p className="text-sm text-primary/80 mb-3">{tier.tagline}</p>
                            <p className="text-sm text-zinc-500 mb-6">{tier.description}</p>

                            <div className="space-y-2 mb-6">
                                {tier.highlights.map((highlight) => (
                                    <div
                                        key={highlight.text}
                                        className={`flex items-center gap-3 text-sm ${
                                            highlight.included === true ? 'text-zinc-300' :
                                            highlight.included === "varies" ? 'text-amber-400/80' :
                                            'text-zinc-600'
                                        }`}
                                    >
                                        <FeatureIndicator included={highlight.included} />
                                        <span className={highlight.included === false ? 'line-through' : ''}>
                                            {highlight.text}
                                        </span>
                                        {highlight.included === "varies" && (
                                            <span className="text-[10px] text-amber-400/60">(by option)</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {tier.options && (
                                <div className="pt-4 border-t border-white/5">
                                    <div className="text-xs text-zinc-500 mb-2">3 options to choose from:</div>
                                    <div className="flex flex-wrap gap-1">
                                        {tier.options.map((option) => (
                                            <span
                                                key={option}
                                                className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-zinc-400"
                                            >
                                                {option}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm">
                    <div className="flex items-center gap-2">
                        <FeatureIndicator included={true} />
                        <span className="text-zinc-400">Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FeatureIndicator included="varies" />
                        <span className="text-zinc-400">Varies by option</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FeatureIndicator included={false} />
                        <span className="text-zinc-400">Not included</span>
                    </div>
                </div>

                {/* Architecture Preview - Full Experience */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Full Experience Architecture</h3>
                        <p className="text-sm text-zinc-500">
                            Here's how the complete $15,000 package works. Lower tiers include subsets of this architecture.
                        </p>
                    </div>
                    <div className="bento-card bg-[#0d1117] font-mono text-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 text-zinc-500 text-xs">architecture.md</span>
                        </div>
                        <pre className="text-xs md:text-sm overflow-x-auto">
                            <code className="text-zinc-400">
{`┌─────────────────────────────────────────────┐
│           Next.js Frontend                  │
│  (Marketing, Booking UI, Member Portal)     │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│           Next.js API Routes                │
│  /api/bookings, /api/schedule, /api/members │
│  (Proxy layer - auth, caching, transforms)  │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│          MindBody Public API (v6)           │
│  (Source of truth for business data)        │
└─────────────────────────────────────────────┘`}
                            </code>
                        </pre>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group h-12 px-6 rounded-full bg-primary text-black font-bold overflow-hidden inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                    >
                        See detailed package options
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
