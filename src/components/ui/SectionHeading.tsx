"use client"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    tag?: string
    title: string
    subtitle?: string | React.ReactNode
    className?: string
    titleClassName?: string
    align?: "left" | "center" | "right"
}

export const SectionHeading = ({
    tag,
    title,
    subtitle,
    className,
    titleClassName = "text-5xl md:text-7xl",
    align = "center"
}: SectionHeadingProps) => {
    const words = title.split(" ")
    const lastWordIndex = words.length - 1

    return (
        <div className={cn(
            "mb-16 md:mb-24",
            align === "center" && "text-center",
            align === "right" && "text-right",
            className
        )}>
            {tag && (
                <div className={cn(
                    "mb-6",
                    align === "center" && "flex justify-center",
                    align === "right" && "flex justify-end"
                )}>
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] tracking-[0.2em] font-bold text-zinc-400 uppercase">
                        {tag}
                    </div>
                </div>
            )}

            <div className={cn(
                "flex flex-wrap mb-6",
                align === "center" && "justify-center",
                align === "right" && "justify-end",
                align === "left" && "justify-start"
            )}>
                {words.map((word, i) => (
                    <h2
                        key={i}
                        className={cn(
                            "font-hero tracking-tighter mr-[0.2em] whitespace-nowrap text-white leading-[1.1]",
                            titleClassName
                        )}
                    >
                        {i === lastWordIndex ? (
                            <span className="text-primary">{word}</span>
                        ) : word}
                    </h2>
                ))}
            </div>

            {subtitle && (
                <p className={cn(
                    "text-lg md:text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed tracking-tight",
                    align === "center" && "mx-auto",
                    align === "right" && "ml-auto",
                    align === "left" && "mr-auto"
                )}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}
