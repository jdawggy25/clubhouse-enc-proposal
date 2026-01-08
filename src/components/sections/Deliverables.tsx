"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { Check } from "lucide-react"
import { config } from "@/config/template.config"

interface Deliverable {
    name: string
    description: string
}

const websiteDeliverables: Deliverable[] = [
    {
        name: "Custom Next.js Website",
        description: "Fully custom-coded, no templates",
    },
    {
        name: "Premium Homepage",
        description: "Hero, services, locations, CTAs",
    },
    {
        name: "Service Pages",
        description: "Detailed modality pages",
    },
    {
        name: "Multi-Location Support",
        description: "All client locations",
    },
    {
        name: "Premium Animations",
        description: "Framer Motion interactions",
    },
    {
        name: "LLM SEO Optimization",
        description: "Structured data, AI-ready content",
    },
    {
        name: "Mobile Responsive",
        description: "Optimized for all devices",
    },
    {
        name: "Vercel Deployment",
        description: "Edge hosting, CDN, SSL",
    },
]

const integrationDeliverables: Deliverable[] = [
    {
        name: `${config.integration.name} API Connection`,
        description: "Secure server-side integration",
    },
    {
        name: "Custom Booking Flows",
        description: "On-site scheduling experience",
    },
    {
        name: "Real-Time Availability",
        description: "Live schedule sync",
    },
    {
        name: "Member Portal",
        description: "Login, dashboard, history",
    },
    {
        name: "Package Purchases",
        description: "Buy memberships on-site",
    },
    {
        name: "Webhook Notifications",
        description: "Real-time event updates",
    },
]

const qualityDeliverables: Deliverable[] = [
    {
        name: "Performance Optimized",
        description: "Core Web Vitals passing",
    },
    {
        name: "Security Best Practices",
        description: "HTTPS, secure API proxy",
    },
    {
        name: "Accessibility",
        description: "WCAG 2.1 AA compliance",
    },
    {
        name: "Contact Forms",
        description: "Inquiry forms with notifications",
    },
]

const DeliverableItem = ({ item }: { item: Deliverable }) => (
    <div className="flex items-start gap-3 py-3">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5 text-primary" />
        </div>
        <div>
            <div className="text-sm font-medium text-white">{item.name}</div>
            <div className="text-xs text-zinc-500">{item.description}</div>
        </div>
    </div>
)

const DeliverableSection = ({ deliverables, title }: { deliverables: Deliverable[], title: string }) => (
    <div className="bento-card">
        <h3 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/5">{title}</h3>
        <div className="divide-y divide-white/5">
            {deliverables.map((item) => (
                <DeliverableItem key={item.name} item={item} />
            ))}
        </div>
    </div>
)

export const Deliverables = () => {
    return (
        <section id="deliverables" className="relative py-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    tag="Deliverables"
                    title="What's Included"
                    subtitle="Everything you need for a complete digital transformation."
                />

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <DeliverableSection deliverables={websiteDeliverables} title="Website Development" />
                        <DeliverableSection deliverables={integrationDeliverables} title={`${config.integration.name} Integration`} />
                    </div>
                    <DeliverableSection deliverables={qualityDeliverables} title="Quality & Standards" />
                </div>
            </div>
        </section>
    )
}
