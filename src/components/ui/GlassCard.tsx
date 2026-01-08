"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface GlassCardProps {
    icon?: LucideIcon
    title: string
    description?: string
    children?: React.ReactNode
    className?: string
    delay?: number
}

export const GlassCard = ({
    icon: Icon,
    title,
    description,
    children,
    className,
    delay = 0
}: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
            }}
            className={cn(
                "bento-card group will-change-transform",
                className
            )}
        >
            {Icon && (
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {description && (
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            )}
            {children}
        </motion.div>
    )
}
