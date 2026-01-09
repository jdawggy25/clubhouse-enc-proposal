"use client"

import { ArrowRight } from "lucide-react"
import { config } from "@/config/template.config"

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-50" />
            </div>

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl text-[10px] tracking-[0.2em] font-bold text-zinc-400 uppercase flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Premium Web Development Proposal
                        </div>
                    </div>

                    {/* Hero Title */}
                    <div className="mb-8">
                        <div className="text-6xl md:text-8xl lg:text-9xl font-hero tracking-[-0.05em] mb-4 leading-[0.9] text-white">
                            {config.client.name}
                        </div>
                        <div className="text-4xl md:text-5xl lg:text-6xl font-hero tracking-[-0.05em] leading-[0.9]">
                            <span className="text-zinc-500">x</span>{" "}
                            <span className="text-primary">COMCREATE</span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed tracking-tight mb-12 max-w-2xl mx-auto">
                        {config.hero.subheadline || `Elevating ${config.client.city}'s ${config.client.industry} Experience with a premium digital presence.`}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => document.getElementById('proposal')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group h-14 px-8 rounded-full bg-primary text-white font-bold overflow-hidden flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                        >
                            View Proposal
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
                        {config.techBadges.map((badge) => (
                            <div key={badge} className="text-[10px] tracking-[0.3em] font-black text-zinc-600">
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
