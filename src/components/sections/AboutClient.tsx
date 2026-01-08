"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { config } from "@/config/template.config"

export const AboutClient = () => {
    return (
        <section id="proposal" className="relative py-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    tag="The Vision"
                    title={`We Understand ${config.client.name}`}
                    subtitle={config.client.description}
                />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {config.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bento-card text-center"
                        >
                            <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                            <div className="text-3xl md:text-4xl font-hero text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-zinc-500">{stat.label}</div>
                        </div>
                    ))}
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
