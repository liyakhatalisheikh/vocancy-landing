"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How do I know you'll apply to quality jobs?",
            answer: "Every application is manually reviewed by a Senior Engineer before submission. We target companies matching your tech stack, experience level, and salary expectations. You receive daily WhatsApp updates with screenshots of every application."
        },
        {
            question: "What if I don't get any interviews?",
            answer: "A Senior Engineer hand-picks every job to match your profile, maximizing your chances of getting interviews. We're confident in our process because we focus on quality applications to relevant positions. Most engineers start receiving interview requests within the first 2-3 weeks."
        },
        {
            question: "Is this legal/safe?",
            answer: "Yes, 100%. We're applying on your behalf with your explicit consent. All applications are submitted through official company career pages and job boards. We never access your existing accounts. We create fresh applications for each position."
        },
        {
            question: "How long does this take?",
            answer: "Applications start within 48 hours of your onboarding call. We apply to 15-20 positions daily, completing 200+ applications within 2-3 weeks. You'll start receiving interview requests typically within the first week."
        }
    ];

    return (
        <section id="faq" className="py-20 px-6 bg-slate-950/50 border-y border-slate-900">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">Everything you need to know</p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-brand-green/50 transition"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 pt-0">
                                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
