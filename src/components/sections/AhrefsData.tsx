"use client"

import { SectionHeading } from "../ui/SectionHeading"
import { TrendingUp, TrendingDown, ExternalLink, Target, Trophy, AlertTriangle, CheckCircle } from "lucide-react"

// Current Site Metrics from Ahrefs - January 2025
const siteMetrics = {
    domainRating: 0,
    organicKeywords: 0,
    organicTraffic: 0,
    liveBacklinks: 0,
    allTimeBacklinks: 44,
    liveRefDomains: 0,
    allTimeRefDomains: 29,
}

// Quality Backlinks (dofollow from authoritative sites)
const qualityBacklinks = [
    { source: "San Diego Magazine", dr: 76, anchor: "Club House", context: "Best of San Diego 2025", dofollow: true },
    { source: "NewYou.com", dr: 47, anchor: "Club House", context: "Contrast Therapy Article", dofollow: true },
    { source: "LocallyWell.com", dr: 35, anchor: "Club House Enc", context: "SD Wellness Gift Guide", dofollow: true },
    { source: "ClassPass.com", dr: 79, anchor: "clubhouse-enc.com", context: "Studio Listing", dofollow: false },
    { source: "Inn at Moonlight Beach", dr: 20, anchor: "Clubhouse Encinitas", context: "Partner Page", dofollow: true },
    { source: "Tribe Coffee", dr: 11, anchor: "Club House", context: "Event Partnership", dofollow: true },
]

// Target Keywords with Search Volume
const keywordOpportunities = [
    { keyword: "cold plunge near me", volume: 8300, difficulty: 26, currentRank: null, potential: "high" },
    { keyword: "contrast therapy near me", volume: 450, difficulty: 52, currentRank: null, potential: "medium" },
    { keyword: "cold plunge san diego", volume: 350, difficulty: 8, currentRank: null, potential: "high" },
    { keyword: "sauna san diego", volume: 250, difficulty: 29, currentRank: null, potential: "medium" },
    { keyword: "cryotherapy san diego", volume: 200, difficulty: 23, currentRank: null, potential: "medium" },
    { keyword: "infrared sauna san diego", volume: 150, difficulty: 12, currentRank: null, potential: "high" },
    { keyword: "cold plunge encinitas", volume: 30, difficulty: 1, currentRank: "1-2", potential: "owned" },
    { keyword: "cryotherapy encinitas", volume: 30, difficulty: 11, currentRank: null, potential: "high" },
    { keyword: "sauna encinitas", volume: 30, difficulty: null, currentRank: null, potential: "high" },
]

// Local Competitors from SERP
const competitors = [
    { name: "Breathe Degrees", dr: 31, traffic: 625, position: 5, keyword: "cold plunge encinitas" },
    { name: "Chiltonic", dr: 10, traffic: 368, position: 6, keyword: "cold plunge encinitas" },
    { name: "Blissfusion Wellness", dr: 17, traffic: 59, position: 13, keyword: "cold plunge encinitas" },
    { name: "Pure Infrared Sauna", dr: 18, traffic: 166, position: 12, keyword: "cold plunge encinitas" },
    { name: "REJUV Cryo", dr: 35, traffic: 488, position: 20, keyword: "cold plunge encinitas" },
]

export const AhrefsData = () => {
    return (
        <section id="ahrefs-data" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <SectionHeading
                    tag="Ahrefs Analysis"
                    title="Complete SEO Audit"
                    subtitle="Comprehensive data pulled from Ahrefs showing current performance, backlink profile, and keyword opportunities."
                />

                {/* Current Metrics Overview */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        Current Site Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bento-card text-center border-red-500/20 bg-red-500/5">
                            <div className="text-3xl font-hero text-red-400">{siteMetrics.domainRating}</div>
                            <div className="text-xs text-zinc-500">Domain Rating</div>
                        </div>
                        <div className="bento-card text-center border-red-500/20 bg-red-500/5">
                            <div className="text-3xl font-hero text-red-400">{siteMetrics.organicKeywords}</div>
                            <div className="text-xs text-zinc-500">Organic Keywords</div>
                        </div>
                        <div className="bento-card text-center border-red-500/20 bg-red-500/5">
                            <div className="text-3xl font-hero text-red-400">{siteMetrics.organicTraffic}</div>
                            <div className="text-xs text-zinc-500">Monthly Traffic</div>
                        </div>
                        <div className="bento-card text-center border-amber-500/20 bg-amber-500/5">
                            <div className="text-3xl font-hero text-amber-400">{siteMetrics.allTimeRefDomains}</div>
                            <div className="text-xs text-zinc-500">Lost Ref. Domains</div>
                        </div>
                    </div>
                </div>

                {/* Keyword Opportunities */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Keyword Opportunities
                    </h3>
                    <div className="bento-card overflow-hidden p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Keyword</th>
                                        <th className="text-right py-3 px-4 text-zinc-400 font-medium">Volume</th>
                                        <th className="text-right py-3 px-4 text-zinc-400 font-medium">KD</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">Current Rank</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">Potential</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {keywordOpportunities.map((kw) => (
                                        <tr key={kw.keyword} className="border-b border-white/5 hover:bg-white/5">
                                            <td className="py-3 px-4 text-white">{kw.keyword}</td>
                                            <td className="py-3 px-4 text-right text-zinc-300">{kw.volume.toLocaleString()}</td>
                                            <td className="py-3 px-4 text-right">
                                                <span className={`${
                                                    kw.difficulty === null ? 'text-zinc-500' :
                                                    kw.difficulty <= 10 ? 'text-green-400' :
                                                    kw.difficulty <= 30 ? 'text-amber-400' :
                                                    'text-red-400'
                                                }`}>
                                                    {kw.difficulty ?? '-'}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                {kw.currentRank ? (
                                                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                                                        #{kw.currentRank}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-600">-</span>
                                                )}
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                                    kw.potential === 'owned' ? 'bg-green-500/20 text-green-400' :
                                                    kw.potential === 'high' ? 'bg-primary/20 text-primary' :
                                                    'bg-amber-500/20 text-amber-400'
                                                }`}>
                                                    {kw.potential === 'owned' ? 'Ranking!' : kw.potential}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-primary/5 border-t border-primary/20">
                            <p className="text-sm text-zinc-400">
                                <span className="text-primary font-bold">Good news:</span> Club House ENC already ranks #1-2 for &quot;cold plunge encinitas&quot; (30 searches/month).
                                With proper SEO, you can capture the 8,300+ monthly searches for &quot;cold plunge near me&quot; and related terms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Backlink Profile */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        Quality Backlinks
                    </h3>
                    <div className="bento-card p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Source</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">DR</th>
                                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Context</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {qualityBacklinks.map((link) => (
                                        <tr key={link.source} className="border-b border-white/5 hover:bg-white/5">
                                            <td className="py-3 px-4 text-white font-medium">{link.source}</td>
                                            <td className="py-3 px-4 text-center">
                                                <span className={`font-bold ${
                                                    link.dr >= 70 ? 'text-green-400' :
                                                    link.dr >= 40 ? 'text-primary' :
                                                    'text-zinc-400'
                                                }`}>
                                                    {link.dr}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-zinc-400">{link.context}</td>
                                            <td className="py-3 px-4 text-center">
                                                {link.dofollow ? (
                                                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                                                        dofollow
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-1 rounded-full bg-zinc-500/20 text-zinc-400 text-xs">
                                                        nofollow
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-green-500/5 border-t border-green-500/20">
                            <p className="text-sm text-zinc-400">
                                <span className="text-green-400 font-bold">Notable:</span> Featured in San Diego Magazine &quot;Best of 2025&quot; (DR 76) -
                                this high-authority backlink should be leveraged with proper on-page SEO.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Local Competitors */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-amber-400" />
                        Local Competitors (SERP Analysis)
                    </h3>
                    <div className="bento-card p-0 sm:p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 px-4 text-zinc-400 font-medium">Competitor</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">DR</th>
                                        <th className="text-right py-3 px-4 text-zinc-400 font-medium">Traffic</th>
                                        <th className="text-center py-3 px-4 text-zinc-400 font-medium">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 bg-green-500/5">
                                        <td className="py-3 px-4 text-green-400 font-bold">Club House ENC (You)</td>
                                        <td className="py-3 px-4 text-center text-green-400">6</td>
                                        <td className="py-3 px-4 text-right text-green-400">15</td>
                                        <td className="py-3 px-4 text-center">
                                            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">#1-2</span>
                                        </td>
                                    </tr>
                                    {competitors.map((comp) => (
                                        <tr key={comp.name} className="border-b border-white/5 hover:bg-white/5">
                                            <td className="py-3 px-4 text-white">{comp.name}</td>
                                            <td className="py-3 px-4 text-center text-zinc-400">{comp.dr}</td>
                                            <td className="py-3 px-4 text-right text-zinc-400">{comp.traffic}</td>
                                            <td className="py-3 px-4 text-center text-zinc-500">#{comp.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-primary/5 border-t border-primary/20">
                            <p className="text-sm text-zinc-400">
                                <span className="text-primary font-bold">Opportunity:</span> You&apos;re outranking competitors with higher DR.
                                Breathe Degrees (DR 31) gets 625 monthly visitors - with SEO optimization, you could capture similar or greater traffic.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="max-w-5xl mx-auto mt-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bento-card text-center border-primary/30">
                            <div className="text-4xl font-hero text-primary mb-2">9,680+</div>
                            <div className="text-sm text-zinc-400">Monthly searches for target keywords</div>
                        </div>
                        <div className="bento-card text-center border-green-500/30">
                            <div className="text-4xl font-hero text-green-400 mb-2">#1</div>
                            <div className="text-sm text-zinc-400">Current rank for &quot;cold plunge encinitas&quot;</div>
                        </div>
                        <div className="bento-card text-center border-amber-500/30">
                            <div className="text-4xl font-hero text-amber-400 mb-2">DR 76</div>
                            <div className="text-sm text-zinc-400">Highest backlink (San Diego Magazine)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
