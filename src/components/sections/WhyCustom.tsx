"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { Code, Search, Shield, Zap, AlertTriangle } from "lucide-react"

const problems = [
    {
        icon: AlertTriangle,
        title: "Zero Search Visibility",
        description: "Domain Rating of 0 and zero organic keywords mean Club House ENC is invisible to searchers."
    },
    {
        icon: AlertTriangle,
        title: "Missing Local SEO",
        description: "When people search 'recovery studio Encinitas' or 'movement classes near me', you don't appear."
    },
    {
        icon: AlertTriangle,
        title: "Lost Referral Links",
        description: "29 historical backlinks are no longer active—lost opportunity for domain authority."
    }
]

const solutions = [
    {
        icon: Code,
        title: "Custom-Coded Next.js",
        description: "Not WordPress. Not Webflow. Real code that gives you full control, optimal performance, and true ownership."
    },
    {
        icon: Search,
        title: "SEO-Optimized Architecture",
        description: "Next.js makes your site appear as multi-page to browsers, dramatically improving search rankings and organic traffic."
    },
    {
        icon: Zap,
        title: "Vercel Edge Deployment",
        description: "The same hosting used by Netflix, Spotify, and Stripe. Sub-second load times from anywhere in the world."
    },
    {
        icon: Shield,
        title: "Full Code Ownership",
        description: "No platform lock-in. No hostage situations. You own everything—website, hosting, all of it."
    }
]

export const WhyCustom = () => {
    return (
        <section id="why-custom" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <SectionHeading
                    tag="The Problem"
                    title="Why Club House ENC Needs This"
                    subtitle="Based on Ahrefs data, here's what's holding back your online presence—and how we'll fix it."
                />

                {/* Current Problems */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h3 className="text-xl font-bold text-red-400 mb-8 text-center">
                        Current Website Issues
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {problems.map((problem) => (
                            <div
                                key={problem.title}
                                className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5"
                            >
                                <problem.icon className="w-8 h-8 text-red-400 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">{problem.title}</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Solutions */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold text-success mb-8 text-center">
                        Our Solution
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {solutions.map((solution) => (
                            <div
                                key={solution.title}
                                className="bento-card flex gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <solution.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{solution.title}</h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{solution.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
