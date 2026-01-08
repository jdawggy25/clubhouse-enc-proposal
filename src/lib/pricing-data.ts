// ============================================================================
// PRICING CONFIGURATION
// ============================================================================
// Customize the pricing for each client proposal.
// Replace {{PRICE}} with the actual project price.
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
    // PRICING - {{PRICE}} - Replace with actual project price
    // -------------------------------------------------------------------------
    price: 0, // TODO: Set project price (e.g., 15000)

    // -------------------------------------------------------------------------
    // WEBSITE FEATURES
    // -------------------------------------------------------------------------
    websiteFeatures: [
        "Custom coded design (no templates)",
        "Multi-location support",
        "Mobile responsive",
        "LLM SEO optimization",
        "Premium Framer Motion animations",
        "Vercel deployment",
    ],

    // -------------------------------------------------------------------------
    // INTEGRATION FEATURES
    // -------------------------------------------------------------------------
    integrationFeatures: [
        "Secure API proxy layer",
        "Custom booking flows",
        "Member portal & dashboard",
        "Real-time scheduling",
        "Package purchase flows",
        "Webhook notifications",
    ],

    // -------------------------------------------------------------------------
    // QUALITY & STANDARDS
    // -------------------------------------------------------------------------
    qualityFeatures: [
        "Performance optimized (Core Web Vitals)",
        "Security best practices",
        "WCAG 2.1 AA accessibility",
        "Contact forms with notifications",
    ],

    // -------------------------------------------------------------------------
    // PAYMENT TERMS
    // -------------------------------------------------------------------------
    paymentSplit: {
        upfront: 50,    // Percentage due upfront
        completion: 50, // Percentage due on completion
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
