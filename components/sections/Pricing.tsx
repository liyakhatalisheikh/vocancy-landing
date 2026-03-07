"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useModal } from "../ui/ModalProvider";

const plans = [
    {
        name: "Per-Hire",
        price: "AED 25,000",
        period: "per hire",
        desc: "Pay only when you succeed. Competitive 10–12% effective rate.",
        features: [
            "Unlimited candidate browsing",
            "Unlimited interview requests",
            "AED 25,000 per success",
            "90-day retention guarantee",
            "Standard support",
        ],
        cta: "Start Hiring",
        popular: false,
    },
    {
        name: "Growth",
        price: "AED 55,000",
        period: "per year",
        desc: "For growing teams hiring 2–3 engineers per year.",
        features: [
            "Up to 3 successful hires/yr",
            "~AED 18,300 effective cost/hire",
            "Unlimited browsing & requests",
            "Priority support",
            "Custom branding on profile",
        ],
        cta: "Get Membership",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "annual",
        desc: "For teams scaling fast. Unlimited hiring at a fixed cost.",
        features: [
            "Unlimited hires",
            "Dedicated account manager",
            "API Access & ATS Integration",
            "Custom vetting pipelines",
            "SLA guarantees",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    const { openModal } = useModal();
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="pricing"
            ref={ref}
            className={`py-24 md:py-32 px-6 border-t border-border relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 font-sans">
                        Pricing
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        No hidden fees. Equivalent pricing in SAR and QAR available.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative glass rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 ${plan.popular
                                ? "border-brand-green/40 glow-green shadow-lg"
                                : "hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/5"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-green text-obsidian text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-brand-green/30">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-3xl font-bold text-foreground tracking-tight">{plan.price}</span>
                                    {plan.period !== "annual" && <span className="text-sm text-muted-foreground">/{plan.period}</span>}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
                            </div>

                            <div className="flex-grow mb-8 space-y-3">
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-brand-green" : "text-muted-foreground/60"}`} />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => openModal("company", plan.name)}
                                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 active:scale-95 ${plan.popular
                                    ? "bg-brand-green text-obsidian hover:shadow-2xl hover:shadow-brand-green/25 hover:scale-[1.02]"
                                    : "glass text-foreground hover:border-brand-green/30 hover:scale-[1.02]"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
