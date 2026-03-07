"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
    {
        q: "How does the engineer vetting process work?",
        a: "Engineers complete a 90–120 minute technical assessment covering core engineering skills relevant to their domain. We also review portfolios and contact references. The pass score is 70/100, and only ~8% of applicants are accepted.",
    },
    {
        q: "Is Vocancy really free for engineers?",
        a: "Yes, completely free — always. Revenue comes exclusively from companies who pay for access to our curated network. Engineers never pay a dirham.",
    },
    {
        q: "How do you enforce the zero-ghosting policy?",
        a: "Every company on Vocancy commits to our Hiring Standards Agreement. They must respond within the committed timeline, provide written feedback if declining, and make decisions within 2 weeks. Repeated offenders lose network access permanently.",
    },
    {
        q: "Why focus on the GCC region?",
        a: "Focus creates quality. The GCC market is booming, but hiring is broken. By focusing on engineers in Qatar, UAE, and Saudi Arabia, we can vet deeply and build a truly curated network where quality is guaranteed.",
    },
    {
        q: "What if I'm not actively looking for a job?",
        a: "No problem. Set your status to 'Open to Offers' or 'Not Looking.' When you switch to 'Actively Looking,' you'll start receiving interview requests immediately.",
    },
    {
        q: "How is pricing structured for companies?",
        a: "Simple options: Pay-per-Hire (AED 25,000) or Growth Membership (AED 55,000/yr) for continuous hiring. Enterprise plans are custom. All pricing is transparent — no hidden recruiter commissions.",
    },
    {
        q: "Can companies outside the GCC join?",
        a: "Currently, Vocancy focuses on companies hiring for GCC-based roles (Qatar, UAE, Saudi Arabia). If you're a global company hiring engineers for GCC offices, you're welcome.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="faq"
            ref={ref}
            className={`py-24 md:py-32 px-6 border-t border-border relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gradient font-sans">
                        FAQ
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`glass rounded-2xl transition-all duration-300 ${openIndex === i
                                ? "border-brand-green/30 shadow-lg shadow-brand-green/5"
                                : "hover:border-brand-green/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                            >
                                <span className="text-foreground font-bold text-sm md:text-base font-sans pr-4">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-brand-green" : ""}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5 md:pb-6" : "max-h-0"}`}
                            >
                                <p className="px-5 md:px-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
