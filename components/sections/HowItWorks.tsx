"use client";
import React from "react";
import { UserPlus, Building2, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useModal } from "../ui/ModalProvider";

const steps = [
    {
        num: "01",
        title: "Get Vetted",
        desc: "One 90-minute assessment. We accept the top 8%. Your verified profile goes live to every company in the network.",
    },
    {
        num: "02",
        title: "Receive Offers",
        desc: "Companies apply to you — not the other way around. Salary, role, and team details shared upfront.",
    },
    {
        num: "03",
        title: "Interview",
        desc: "Maximum 3 rounds. Companies respond within 48 hours. Decision guaranteed in 2 weeks. Mandatory feedback.",
    },
    {
        num: "04",
        title: "Get Hired",
        desc: "Accept the right offer. Zero fees for engineers. Companies pay only on success. 90-day guarantee.",
    },
];

const guarantees = [
    "Top 8% engineers only",
    "Verified salary ranges",
    "Max 3 interview rounds",
    "2-week decision guarantee",
    "Zero ghosting policy",
    "90-day retention warranty",
];

export default function HowItWorks() {
    const { openModal } = useModal();
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="how-it-works"
            ref={ref}
            className={`py-24 md:py-32 px-6 border-t border-border relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gradient font-sans">
                        How it works
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                        A simple, fair process — designed for engineers and companies in the GCC.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {steps.map((step) => (
                        <div
                            key={step.num}
                            className="glass rounded-2xl p-8 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-3xl font-black text-brand-green/20 font-mono group-hover:text-brand-green/40 transition-colors">
                                    {step.num}
                                </span>
                                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Guarantees */}
                <div className="glass rounded-2xl p-6 md:p-8 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {guarantees.map((g) => (
                            <div key={g} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                                <span>{g}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dual CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => openModal("engineer")}
                        className="px-8 py-4 bg-brand-green text-obsidian font-bold rounded-2xl hover:shadow-2xl hover:shadow-brand-green/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        Apply as Engineer
                        <UserPlus className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => openModal("company")}
                        className="px-8 py-4 glass font-bold rounded-2xl text-foreground hover:border-brand-green/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        Hire Talent
                        <Building2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
