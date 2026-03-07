"use client";
import React from "react";

export default function InboxSimulation() {
    return (
        <div className="relative flex items-center justify-center lg:h-[600px] mt-8 lg:mt-0">
            {/* Ambient Glow */}
            <div className="absolute w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-brand-green/10 rounded-full blur-[80px] lg:blur-[100px] -z-10" />

            {/* Mobile Card (Simplified) */}
            <div className="lg:hidden w-full max-w-[320px] bg-white dark:bg-slate-950 border border-border rounded-xl p-4 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green rounded-l-xl" />
                <div className="flex justify-between items-start mb-2">
                    <div className="text-foreground font-bold text-sm">Principal Engineer</div>
                    <span className="text-[10px] text-muted-foreground">1h ago</span>
                </div>
                <div className="text-xs text-muted-foreground mb-3">Confidential • Series C Startup • Riyadh</div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                    <span className="bg-secondary px-2 py-1 rounded border border-border">SAR 45k+/mo</span>
                    <span className="bg-secondary px-2 py-1 rounded border border-border">Equity: 0.2%</span>
                </div>
                {/* Mobile Toast */}
                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping" />
                    <span className="text-[10px] text-muted-foreground">
                        <span className="font-bold text-foreground">Series B Company</span> viewed your profile
                    </span>
                </div>
            </div>

            {/* Desktop App Window */}
            <div className="hidden lg:block relative w-full max-w-[480px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">

                {/* Window Header */}
                <div className="h-10 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="ml-auto text-[10px] font-mono text-muted-foreground">vocancy.com/platform</div>
                </div>

                {/* App Layout */}
                <div className="flex h-[320px]">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-slate-200 dark:border-white/5 flex flex-col items-center py-4 gap-4 bg-slate-50/50 dark:bg-slate-900/20">
                        <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-muted-foreground flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-muted-foreground flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5 bg-white dark:bg-transparent">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-foreground font-bold text-sm">Inbox (3)</h3>
                            <span className="text-[10px] text-brand-green bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">Open to Offers</span>
                        </div>

                        <div className="space-y-3">
                            {/* Item 1 */}
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-green/20 transition-colors group cursor-pointer relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green" />
                                <div className="flex justify-between items-start mb-1">
                                    <div className="text-foreground font-bold text-xs">Principal Engineer</div>
                                    <span className="text-[10px] text-muted-foreground">1h ago</span>
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Confidential • Series C Startup • Riyadh</div>
                                <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
                                    <span className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-100 dark:border-transparent">SAR 45k+/mo</span>
                                    <span className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-100 dark:border-transparent">Equity: 0.2%</span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors cursor-pointer opacity-75">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="text-foreground font-bold text-xs">Backend Lead</div>
                                    <span className="text-[10px] text-muted-foreground">4h ago</span>
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Confidential • NeoBank • Dubai</div>
                                <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
                                    <span className="bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded">AED 42k/mo</span>
                                    <span className="bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded text-brand-green">Signing Bonus</span>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="p-3 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors cursor-pointer opacity-50">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="text-foreground font-bold text-xs">Security Architect</div>
                                    <span className="text-[10px] text-muted-foreground">1d ago</span>
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">Confidential • Energy Giant • Doha</div>
                                <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
                                    <span className="bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded">QAR 38k/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Toast */}
                <div className="absolute bottom-4 right-4 max-w-[200px] bg-brand-green text-obsidian p-3 rounded-lg shadow-xl shadow-brand-green/20 transform animate-pulse">
                    <div className="font-bold text-xs flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-obsidian rounded-full animate-ping" />
                        New Request
                    </div>
                    <div className="text-[10px] leading-tight mt-1 opacity-90">
                        &quot;Series B Company&quot; viewed your profile.
                    </div>
                </div>
            </div>
        </div>
    );
}
