"use client"

import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="relative py-20 border-t border-white/5">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/comcreate-logo.png"
                            alt="ComCreate"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="font-hero text-xl tracking-tighter text-white">COMCREATE</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm text-zinc-500">
                        <Link href="https://comcreate.org" target="_blank" className="hover:text-white transition-colors">
                            comcreate.org
                        </Link>
                        <a href="mailto:hayden@comcreate.org" className="hover:text-white transition-colors">
                            hayden@comcreate.org
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-zinc-600 font-medium tracking-wider uppercase">
                        &copy; {new Date().getFullYear()} ComCreate. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
