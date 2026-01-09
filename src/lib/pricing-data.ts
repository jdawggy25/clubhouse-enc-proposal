// ============================================================================
// PRICING CONFIGURATION - Club House ENC
// ============================================================================
// Website Redesign + SEO Optimization - $7,500
// ============================================================================

export interface PricingConfig {
    price: number
    websiteFeatures: string[]
    integrationFeatures: string[]
    qualityFeatures: string[]
    paymentSplit: { upfront: number; completion: number }
}

export const pricingConfig: PricingConfig = {
    // -------------------------------------------------------------------------
    // PRICING - $7,500
    // -------------------------------------------------------------------------
    price: 7500,

    // -------------------------------------------------------------------------
    // WEBSITE REDESIGN FEATURES
    // -------------------------------------------------------------------------
    websiteFeatures: [
        "Custom coded design (no templates)",
        "Mobile-first responsive design",
        "Premium Framer Motion animations",
        "Fast load times & Core Web Vitals",
        "Modern UI/UX design",
        "Vercel edge deployment",
    ],

    // -------------------------------------------------------------------------
    // SEO OPTIMIZATION FEATURES
    // -------------------------------------------------------------------------
    integrationFeatures: [
        "Local SEO optimization (Encinitas)",
        "Google Business Profile optimization",
        "Schema markup for rich results",
        "Keyword-optimized content structure",
        "Meta tags & Open Graph setup",
        "XML sitemap & robots.txt",
    ],

    // -------------------------------------------------------------------------
    // QUALITY & STANDARDS
    // -------------------------------------------------------------------------
    qualityFeatures: [
        "Performance optimized (Core Web Vitals)",
        "Security best practices (HTTPS, headers)",
        "WCAG 2.1 AA accessibility",
        "Contact forms with notifications",
    ],

    // -------------------------------------------------------------------------
    // PAYMENT TERMS - 50% Upfront, 50% on Completion
    // -------------------------------------------------------------------------
    paymentSplit: {
        upfront: 50,    // $3,750 due upfront
        completion: 50, // $3,750 due on completion
    },
}

// Helper functions
export const getPaymentAmounts = (price: number = pricingConfig.price) => ({
    upfront: price * (pricingConfig.paymentSplit.upfront / 100),
    completion: price * (pricingConfig.paymentSplit.completion / 100),
})

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)
}
