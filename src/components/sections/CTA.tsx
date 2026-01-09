"use client"

import { ArrowRight, Mail, Phone, Shield, Award, Zap } from "lucide-react"
import { config } from "@/config/template.config"

const trustBadges = [
    { icon: Shield, label: "Secure" },
    { icon: Award, label: "Professional" },
    { icon: Zap, label: "Results-Driven" },
]

export const CTA = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-[10px] tracking-[0.2em] font-bold text-primary uppercase">
                            Ready to Start
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl font-hero tracking-tighter text-white mb-6">
                        Let&apos;s Build {config.client.name}&apos;s{" "}
                        <span className="text-primary">Digital Future</span>
                    </h2>

                    <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
                        {config.cta.subheadline}
                    </p>

                    {/* Contact buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a href="mailto:josh@comcreate.org">
                            <button className="group h-14 px-8 rounded-full bg-primary text-white font-bold overflow-hidden flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
                                <Mail size={18} />
                                Send Email
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </a>

                        <a href="tel:+1234567890">
                            <button className="group h-14 px-8 rounded-full border border-white/20 text-white font-bold overflow-hidden flex items-center gap-2 hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
                                <Phone size={18} />
                                Schedule Call
                            </button>
                        </a>
                    </div>

                    {/* Contact info */}
                    <div className="mb-12">
                        <p className="text-zinc-500 text-sm mb-1">Contact</p>
                        <p className="text-white font-medium">Josh Nolan</p>
                        <a href="mailto:josh@comcreate.org" className="text-primary hover:underline">
                            josh@comcreate.org
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-8">
                        {trustBadges.map((badge) => (
                            <div key={badge.label} className="flex items-center gap-2 text-zinc-500">
                                <badge.icon className="w-4 h-4" />
                                <span className="text-xs font-medium uppercase tracking-wider">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
