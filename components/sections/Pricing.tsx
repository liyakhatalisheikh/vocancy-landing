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
            className={`py-32 md:py-48 px-6 relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
                            Transparent Pricing
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            No hidden fees. Pay only for successful placements or secure a flat annual rate.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative borderless-glass p-10 flex flex-col transition-all duration-500 min-h-[500px] ${plan.popular
                                ? "rounded-[3rem] lg:-mt-12 lg:mb-12 shadow-[0_0_60px_rgba(61,242,181,0.1)] z-10"
                                : "rounded-[2.5rem] hover:-translate-y-2 opacity-90 hover:opacity-100"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 right-10 px-4 py-1.5 bg-brand-green text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(61,242,181,0.3)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-foreground mb-4">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl lg:text-5xl font-bold text-foreground tracking-tighter">{plan.price}</span>
                                    {plan.period !== "annual" && <span className="text-sm font-medium text-muted-foreground ml-2">/{plan.period}</span>}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{plan.desc}</p>
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
                                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 ${plan.popular
                                    ? "bg-foreground text-background shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
                                    : "bg-background/20 text-foreground hover:bg-background/40 hover:scale-[1.02]"
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
