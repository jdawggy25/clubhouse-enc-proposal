"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
    { label: 'Proposal', href: '#proposal' },
    { label: 'Solution', href: '#solution' },
    { label: 'Investment', href: '#investment' },
]

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleNavClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled || isOpen
                        ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container relative px-6 mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/comcreate-logo.png"
                            alt="ComCreate"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="font-hero text-xl tracking-tighter text-white hidden sm:inline">COMCREATE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="font-medium text-zinc-400 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <Link
                            href="/mockups/index.html"
                            target="_blank"
                            className="px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            View Mockups
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-6 z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-12 h-12 flex flex-col items-center justify-center gap-[6px] group transition-all rounded-full hover:bg-white/5"
                        >
                            <span
                                className={cn(
                                    "w-6 h-0.5 bg-white block transition-transform origin-center duration-300",
                                    isOpen && "rotate-45 translate-y-[8px]"
                                )}
                            />
                            <span
                                className={cn(
                                    "w-4 h-0.5 bg-primary block transition-all group-hover:w-6 duration-300",
                                    isOpen && "opacity-0"
                                )}
                            />
                            <span
                                className={cn(
                                    "w-6 h-0.5 bg-white block transition-transform origin-center duration-300",
                                    isOpen && "-rotate-45 -translate-y-[8px]"
                                )}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center overflow-hidden md:hidden"
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] opacity-20" />
                        </div>

                        <div className="flex flex-col items-center gap-6 relative z-10">
                            {navItems.map((item, i) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="group relative"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.05 + i * 0.05,
                                            duration: 0.3,
                                        }}
                                        className="text-5xl font-hero tracking-tighter text-zinc-600 group-hover:text-white transition-colors duration-300"
                                    >
                                        {item.label}
                                    </motion.div>
                                </button>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                                className="mt-8 flex flex-col items-center gap-4"
                            >
                                <div className="w-12 h-1 bg-white/10 rounded-full" />
                                <Link
                                    href="/mockups/index.html"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 inline-block"
                                >
                                    View Mockups
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-12 text-zinc-600 text-xs font-medium tracking-[0.3em] uppercase"
                        >
                            Premium Web Development
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
