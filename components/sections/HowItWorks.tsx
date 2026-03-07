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
            className={`py-32 md:py-48 px-6 relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
                        How it works
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                        A seamless, fast-tracked process designed to respect your time and maximize your value.
                    </p>
                </div>

                {/* Vertical Organic Timeline */}
                <div className="relative space-y-20 md:space-y-32 mb-32">
                    {/* Faint connecting line */}
                    <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={step.num} className="flex gap-8 md:gap-16 relative">
                            {/* Number Indicator */}
                            <div className="relative shrink-0 flex flex-col items-center">
                                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full borderless-glass flex items-center justify-center text-lg md:text-2xl font-bold text-foreground relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                                    {step.num}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-2 md:pt-4 max-w-xl">
                                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Guarantees - Floating soft pill layout instead of boxes */}
                <div className="mb-24">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">The Vocancy Guarantee</h4>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {guarantees.map((g) => (
                            <div key={g} className="flex items-center gap-3 px-5 py-3 rounded-full borderless-glass text-sm text-foreground hover:bg-white/5 transition-colors">
                                <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                                <span className="font-medium">{g}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dual CTA */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                    <button
                        onClick={() => openModal("engineer")}
                        className="px-8 py-4 bg-foreground text-background font-bold rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        Apply as Engineer
                    </button>
                    <button
                        onClick={() => openModal("company")}
                        className="px-8 py-4 borderless-glass font-bold rounded-full text-foreground hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center gap-2"
                    >
                        Hire Talent
                    </button>
                </div>
            </div>
        </section>
    );
}
