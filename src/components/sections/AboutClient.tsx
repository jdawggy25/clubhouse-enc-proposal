"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { config } from "@/config/template.config"
import { TrendingDown, Search, Link2, Globe, ExternalLink } from "lucide-react"

const ahrefsStats = [
    { value: "0", label: "Domain Rating", icon: Globe, status: "critical" },
    { value: "0", label: "Organic Keywords", icon: Search, status: "critical" },
    { value: "0", label: "Monthly Traffic", icon: TrendingDown, status: "critical" },
    { value: "0", label: "Live Backlinks", icon: Link2, status: "critical" },
    { value: "29", label: "Lost Referring Domains", icon: ExternalLink, status: "warning" },
]

export const AboutClient = () => {
    return (
        <section id="proposal" className="relative py-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    tag="The Vision"
                    title={`We Understand ${config.client.name}`}
                    subtitle={config.client.description}
                />

                {/* Ahrefs Stats Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bento-card border-red-500/20 bg-red-500/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Current SEO Performance</h3>
                                <p className="text-xs sm:text-sm text-zinc-500">Data from Ahrefs - January 2025</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold w-fit">
                                Needs Attention
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {ahrefsStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-black/20"
                                >
                                    <stat.icon className={`w-5 h-5 mx-auto mb-2 ${
                                        stat.status === 'critical' ? 'text-red-400' : 'text-amber-400'
                                    }`} />
                                    <div className={`text-2xl md:text-3xl font-hero mb-1 ${
                                        stat.status === 'critical' ? 'text-red-400' : 'text-amber-400'
                                    }`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-zinc-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-zinc-400 mt-4 text-center">
                            Zero organic visibility means potential customers searching for recovery studios in Encinitas can&apos;t find you.
                        </p>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bento-card max-w-3xl mx-auto mb-16">
                    <h3 className="text-xl font-bold text-white mb-6">Key Insights</h3>
                    <div className="space-y-4 text-zinc-400">
                        {config.insights.map((insight, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <p><span className="text-white font-medium">{insight.label}:</span> {insight.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brand Pillars */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {config.pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bento-card text-center"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <pillar.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
