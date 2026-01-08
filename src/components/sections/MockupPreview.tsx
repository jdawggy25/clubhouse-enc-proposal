"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import { config } from "@/config/template.config"

export const MockupPreview = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <SectionHeading
                    tag="Preview"
                    title="See The Vision"
                    subtitle="We've created detailed mockups showing exactly what your new website will look like."
                />

                <div className="max-w-3xl mx-auto">
                    <div className="bento-card text-center">
                        {/* Preview window mockup */}
                        <div className="bg-[#0d1117] rounded-xl overflow-hidden mb-8">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-zinc-500 text-xs">{config.client.website}</span>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                                <div className="text-center">
                                    <Eye className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                                    <p className="text-zinc-500 text-sm">Interactive mockup preview</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to explore?
                        </h3>
                        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
                            Click below to view the full interactive mockup with all sections, animations, and responsive design.
                        </p>

                        <Link href="/mockups/index.html" target="_blank">
                            <button className="group h-14 px-8 rounded-full bg-primary text-white font-bold overflow-hidden inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
                                View Full Mockup
                                <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
