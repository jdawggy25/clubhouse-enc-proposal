"use client"

import { cn } from "@/lib/utils"

interface BentoGridProps {
    children: React.ReactNode
    className?: string
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            className
        )}>
            {children}
        </div>
    )
}

interface BentoItemProps {
    children: React.ReactNode
    className?: string
    colSpan?: 1 | 2 | 3
    rowSpan?: 1 | 2
}

export const BentoItem = ({
    children,
    className,
    colSpan = 1,
    rowSpan = 1
}: BentoItemProps) => {
    return (
        <div className={cn(
            colSpan === 2 && "md:col-span-2",
            colSpan === 3 && "lg:col-span-3",
            rowSpan === 2 && "row-span-2",
            className
        )}>
            {children}
        </div>
    )
}
