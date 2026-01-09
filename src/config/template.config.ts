import { Users, MapPin, Activity, Trophy, Heart, Sparkles, TrendingUp, Search, type LucideIcon } from "lucide-react"

// ============================================================================
// TEMPLATE CONFIGURATION - Club House ENC
// ============================================================================
// Website Redesign + SEO Optimization Proposal
// ============================================================================

export interface StatConfig {
    value: string
    label: string
    icon: LucideIcon
}

export interface PillarConfig {
    icon: LucideIcon
    title: string
    description: string
}

export interface InsightConfig {
    label: string
    text: string
}

export interface ServiceConfig {
    name: string
    description: string
    image: string
    tag?: string
}

export interface TestimonialConfig {
    name: string
    title: string
    image: string
}

export interface LocationConfig {
    name: string
    address: string
    city: string
    image: string
}

export interface TemplateConfig {
    client: {
        name: string
        tagline: string
        description: string
        logo: string
        industry: string
        city: string
        website: string
    }
    hero: {
        headline: string
        subheadline: string
        label: string
    }
    stats: StatConfig[]
    pillars: PillarConfig[]
    insights: InsightConfig[]
    services: ServiceConfig[]
    testimonials: TestimonialConfig[]
    locations: LocationConfig[]
    integration: {
        name: string
    }
    cta: {
        headline: string
        subheadline: string
    }
    techBadges: string[]
}

export const config: TemplateConfig = {
    // -------------------------------------------------------------------------
    // CLIENT IDENTITY
    // -------------------------------------------------------------------------
    client: {
        name: "Club House ENC",
        tagline: "Recovery ain't easy. Together we thrive.",
        description: "A space designed for those who strive for more—physically, mentally, all while connecting with community. Club House ENC offers recovery and movement classes in the heart of Encinitas.",
        logo: "/placeholders/client-logo.svg",
        industry: "Fitness & Recovery",
        city: "Encinitas",
        website: "clubhouse-enc.com",
    },

    // -------------------------------------------------------------------------
    // HERO SECTION
    // -------------------------------------------------------------------------
    hero: {
        headline: "A Modern Website for Modern Recovery",
        subheadline: "Transform your digital presence with a high-performance website and SEO strategy that puts Club House ENC on the map.",
        label: "Encinitas' Premier Recovery & Movement Studio",
    },

    // -------------------------------------------------------------------------
    // STATISTICS - SEO OPPORTUNITY DATA
    // -------------------------------------------------------------------------
    stats: [
        { value: "0", label: "Current Domain Rating", icon: Activity },
        { value: "0", label: "Organic Keywords", icon: Search },
        { value: "29", label: "Historical Backlinks", icon: TrendingUp },
        { value: "100%", label: "Growth Potential", icon: Trophy },
    ],

    // -------------------------------------------------------------------------
    // BRAND PILLARS (key differentiators)
    // -------------------------------------------------------------------------
    pillars: [
        {
            icon: Heart,
            title: "Community-Centered",
            description: "A welcoming space where recovery meets connection, bringing together like-minded individuals in Encinitas.",
        },
        {
            icon: Sparkles,
            title: "Holistic Approach",
            description: "Combining movement classes, recovery sessions, and wellness practices for complete mind-body transformation.",
        },
        {
            icon: TrendingUp,
            title: "Results-Driven",
            description: "Evidence-based recovery methods and movement practices that deliver real, measurable results.",
        },
    ],

    // -------------------------------------------------------------------------
    // KEY INSIGHTS - SEO & DIGITAL OPPORTUNITY
    // -------------------------------------------------------------------------
    insights: [
        { label: "SEO Gap", text: "Zero organic search visibility despite being an established Encinitas studio" },
        { label: "Local Opportunity", text: "High search volume for 'recovery studio Encinitas' and related terms" },
        { label: "Competitive Edge", text: "Modern website will outperform template-based competitor sites" },
        { label: "Brand Potential", text: "Unique penguin branding creates memorable, shareable identity" },
    ],

    // -------------------------------------------------------------------------
    // SERVICES (for mockup)
    // -------------------------------------------------------------------------
    services: [
        {
            name: "Recovery Classes",
            description: "Guided recovery sessions for optimal restoration",
            image: "/placeholders/service-1.svg",
            tag: "Most Popular",
        },
        {
            name: "Movement Classes",
            description: "Dynamic movement practices for all levels",
            image: "/placeholders/service-2.svg",
        },
        {
            name: "Private Sessions",
            description: "One-on-one personalized training",
            image: "/placeholders/service-3.svg",
        },
        {
            name: "Memberships",
            description: "Flexible packages for regular visitors",
            image: "/placeholders/service-4.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // TESTIMONIALS / SOCIAL PROOF
    // -------------------------------------------------------------------------
    testimonials: [
        {
            name: "Community Member",
            title: "Regular Attendee",
            image: "/placeholders/testimonial-1.svg",
        },
        {
            name: "Community Member",
            title: "Recovery Enthusiast",
            image: "/placeholders/testimonial-2.svg",
        },
        {
            name: "Community Member",
            title: "Movement Practitioner",
            image: "/placeholders/testimonial-3.svg",
        },
        {
            name: "Community Member",
            title: "Wellness Advocate",
            image: "/placeholders/testimonial-4.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // LOCATIONS
    // -------------------------------------------------------------------------
    locations: [
        {
            name: "Club House ENC",
            address: "449 S. Coast Hwy 101",
            city: "Encinitas, CA 92024",
            image: "/placeholders/location-1.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // INTEGRATION (not applicable for this project)
    // -------------------------------------------------------------------------
    integration: {
        name: "SEO",
    },

    // -------------------------------------------------------------------------
    // CALL-TO-ACTION
    // -------------------------------------------------------------------------
    cta: {
        headline: "Let's Build Club House ENC's Digital Future",
        subheadline: "Ready to dominate local search and attract new members?",
    },

    // -------------------------------------------------------------------------
    // TECH BADGES (shown in Hero)
    // -------------------------------------------------------------------------
    techBadges: ["NEXT.JS", "SEO OPTIMIZED", "VERCEL"],
}

// Helper function to get location count
export const getLocationCount = () => config.locations.length

// Helper function to check if config value is still a template token
export const isTemplateToken = (value: string): boolean => {
    return value.startsWith("{{") && value.endsWith("}}")
}
