"use client";
import React from "react";
import { XCircle, Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProblemSection() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="problem"
            ref={ref}
            className={`py-24 md:py-32 px-6 bg-slate-950 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-4 font-mono">
                        The Reality
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-sans">
                        Hiring is <span className="text-brand-green">broken</span>{" "}
                        <span className="text-slate-400">for everyone.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Engineer Pain */}
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                            <XCircle className="w-5 h-5 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Application Black Hole</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Top engineers send 200+ applications only to get rejected by ATS bots.
                        </p>
                        <p className="text-sm text-white font-medium">
                            Result: Ghosting &amp; Frustration.
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-800">
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Engineers</span>
                        </div>
                    </div>

                    {/* Company Pain */}
                    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                            <Search className="w-5 h-5 text-amber-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Drowning in Noise</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Companies spend 6 months filtering 1,000+ unqualified resumes to find 1 senior hire.
                        </p>
                        <p className="text-sm text-white font-medium">
                            Result: ₹50L+ Opportunity Cost.
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-800">
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Companies</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
