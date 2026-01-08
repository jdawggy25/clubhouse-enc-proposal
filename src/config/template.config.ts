import { Users, MapPin, Activity, Trophy, Heart, Sparkles, TrendingUp, type LucideIcon } from "lucide-react"

// ============================================================================
// TEMPLATE CONFIGURATION
// ============================================================================
// Replace all {{TOKEN}} values with your client's information.
// This is the central configuration file for customizing the proposal.
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
        name: "{{CLIENT_NAME}}",
        tagline: "{{CLIENT_TAGLINE}}",
        description: "{{CLIENT_DESCRIPTION}}",
        logo: "/placeholders/client-logo.svg",
        industry: "{{CLIENT_INDUSTRY}}",
        city: "{{CLIENT_CITY}}",
        website: "{{CLIENT_WEBSITE}}",
    },

    // -------------------------------------------------------------------------
    // HERO SECTION
    // -------------------------------------------------------------------------
    hero: {
        headline: "{{HERO_HEADLINE}}",
        subheadline: "{{HERO_SUBHEADLINE}}",
        label: "{{CLIENT_CITY}}'s Premier {{CLIENT_INDUSTRY}} Destination",
    },

    // -------------------------------------------------------------------------
    // STATISTICS (shown in AboutClient section)
    // -------------------------------------------------------------------------
    stats: [
        { value: "{{STAT_1_VALUE}}", label: "{{STAT_1_LABEL}}", icon: Users },
        { value: "{{STAT_2_VALUE}}", label: "{{STAT_2_LABEL}}", icon: MapPin },
        { value: "{{STAT_3_VALUE}}", label: "{{STAT_3_LABEL}}", icon: Activity },
        { value: "{{STAT_4_VALUE}}", label: "{{STAT_4_LABEL}}", icon: Trophy },
    ],

    // -------------------------------------------------------------------------
    // BRAND PILLARS (key differentiators)
    // -------------------------------------------------------------------------
    pillars: [
        {
            icon: Heart,
            title: "{{PILLAR_1_TITLE}}",
            description: "{{PILLAR_1_DESC}}",
        },
        {
            icon: Sparkles,
            title: "{{PILLAR_2_TITLE}}",
            description: "{{PILLAR_2_DESC}}",
        },
        {
            icon: TrendingUp,
            title: "{{PILLAR_3_TITLE}}",
            description: "{{PILLAR_3_DESC}}",
        },
    ],

    // -------------------------------------------------------------------------
    // KEY INSIGHTS (bullet points about the client)
    // -------------------------------------------------------------------------
    insights: [
        { label: "{{INSIGHT_1_LABEL}}", text: "{{INSIGHT_1_TEXT}}" },
        { label: "{{INSIGHT_2_LABEL}}", text: "{{INSIGHT_2_TEXT}}" },
        { label: "{{INSIGHT_3_LABEL}}", text: "{{INSIGHT_3_TEXT}}" },
        { label: "{{INSIGHT_4_LABEL}}", text: "{{INSIGHT_4_TEXT}}" },
    ],

    // -------------------------------------------------------------------------
    // SERVICES (for mockup)
    // -------------------------------------------------------------------------
    services: [
        {
            name: "{{SERVICE_1_NAME}}",
            description: "{{SERVICE_1_DESC}}",
            image: "/placeholders/service-1.svg",
            tag: "Most Popular",
        },
        {
            name: "{{SERVICE_2_NAME}}",
            description: "{{SERVICE_2_DESC}}",
            image: "/placeholders/service-2.svg",
        },
        {
            name: "{{SERVICE_3_NAME}}",
            description: "{{SERVICE_3_DESC}}",
            image: "/placeholders/service-3.svg",
        },
        {
            name: "{{SERVICE_4_NAME}}",
            description: "{{SERVICE_4_DESC}}",
            image: "/placeholders/service-4.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // TESTIMONIALS / SOCIAL PROOF
    // -------------------------------------------------------------------------
    testimonials: [
        {
            name: "{{TESTIMONIAL_1_NAME}}",
            title: "{{TESTIMONIAL_1_TITLE}}",
            image: "/placeholders/testimonial-1.svg",
        },
        {
            name: "{{TESTIMONIAL_2_NAME}}",
            title: "{{TESTIMONIAL_2_TITLE}}",
            image: "/placeholders/testimonial-2.svg",
        },
        {
            name: "{{TESTIMONIAL_3_NAME}}",
            title: "{{TESTIMONIAL_3_TITLE}}",
            image: "/placeholders/testimonial-3.svg",
        },
        {
            name: "{{TESTIMONIAL_4_NAME}}",
            title: "{{TESTIMONIAL_4_TITLE}}",
            image: "/placeholders/testimonial-4.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // LOCATIONS
    // -------------------------------------------------------------------------
    locations: [
        {
            name: "{{LOCATION_1_NAME}}",
            address: "{{LOCATION_1_ADDRESS}}",
            city: "{{LOCATION_1_CITY}}",
            image: "/placeholders/location-1.svg",
        },
        {
            name: "{{LOCATION_2_NAME}}",
            address: "{{LOCATION_2_ADDRESS}}",
            city: "{{LOCATION_2_CITY}}",
            image: "/placeholders/location-2.svg",
        },
        {
            name: "{{LOCATION_3_NAME}}",
            address: "{{LOCATION_3_ADDRESS}}",
            city: "{{LOCATION_3_CITY}}",
            image: "/placeholders/location-3.svg",
        },
    ],

    // -------------------------------------------------------------------------
    // INTEGRATION (e.g., MindBody, Acuity, etc.)
    // -------------------------------------------------------------------------
    integration: {
        name: "{{INTEGRATION_NAME}}", // e.g., "MindBody", "Acuity", "Square"
    },

    // -------------------------------------------------------------------------
    // CALL-TO-ACTION
    // -------------------------------------------------------------------------
    cta: {
        headline: "Let's Build {{CLIENT_NAME}}'s Digital Future",
        subheadline: "Ready to elevate your online presence?",
    },

    // -------------------------------------------------------------------------
    // TECH BADGES (shown in Hero)
    // -------------------------------------------------------------------------
    techBadges: ["NEXT.JS", "{{INTEGRATION_NAME}} API", "VERCEL"],
}

// Helper function to get location count
export const getLocationCount = () => config.locations.length

// Helper function to check if config value is still a template token
export const isTemplateToken = (value: string): boolean => {
    return value.startsWith("{{") && value.endsWith("}}")
}
