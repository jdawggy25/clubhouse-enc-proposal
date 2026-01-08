"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { Check, Sparkles } from "lucide-react"
import { pricingConfig, getPaymentAmounts, formatPrice } from "@/lib/pricing-data"
import { config } from "@/config/template.config"

const FeatureItem = ({ feature }: { feature: string }) => (
    <div className="flex items-center gap-3 text-sm text-zinc-400">
        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-primary/10">
            <Check className="w-3 h-3 text-primary" />
        </div>
        <span>{feature}</span>
    </div>
)

export const Investment = () => {
    const paymentAmounts = getPaymentAmounts()

    return (
        <section id="investment" className="relative py-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <SectionHeading
                    tag="Investment"
                    title="Your Investment"
                    subtitle={`A complete digital transformation for ${config.client.name} - custom website and seamless ${config.integration.name} integration.`}
                />

                {/* Price Display */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-6xl md:text-7xl font-hero text-white mb-2">
                        {formatPrice(pricingConfig.price)}
                    </div>
                    <p className="text-zinc-500">Complete package - everything included</p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Website Features */}
                        <div className="bento-card border-primary/30">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">Premium Website</h3>
                                <div className="text-3xl font-hero text-primary">
                                    {formatPrice(pricingConfig.price / 2)}
                                </div>
                            </div>
                            <div className="space-y-3">
                                {pricingConfig.websiteFeatures.map((feature) => (
                                    <FeatureItem key={feature} feature={feature} />
                                ))}
                            </div>
                        </div>

                        {/* Integration Features */}
                        <div className="bento-card border-primary/30">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{config.integration.name} Integration</h3>
                                <div className="text-3xl font-hero text-primary">
                                    {formatPrice(pricingConfig.price / 2)}
                                </div>
                            </div>
                            <div className="space-y-3">
                                {pricingConfig.integrationFeatures.map((feature) => (
                                    <FeatureItem key={feature} feature={feature} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Payment Terms */}
                <motion.div
                    className="max-w-2xl mx-auto mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bento-card border-primary/30 shadow-blue text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold text-white">Payment Terms</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                            <div>
                                <div className="text-2xl font-hero text-white">
                                    {pricingConfig.paymentSplit.upfront}%
                                </div>
                                <div className="text-sm text-zinc-500">
                                    Upfront ({formatPrice(paymentAmounts.upfront)})
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/10" />
                            <div>
                                <div className="text-2xl font-hero text-white">
                                    {pricingConfig.paymentSplit.completion}%
                                </div>
                                <div className="text-sm text-zinc-500">
                                    On Completion ({formatPrice(paymentAmounts.completion)})
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
