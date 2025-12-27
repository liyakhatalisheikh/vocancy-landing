import { Calendar, Phone, Rocket, MessageCircle } from "lucide-react";

export default function WhatHappens() {
    const steps = [
        {
            icon: Calendar,
            title: "You'll receive payment confirmation and Calendly link",
            desc: "Instant email with next steps"
        },
        {
            icon: Phone,
            title: "We schedule a 15-min onboarding call within 24 hours",
            desc: "Book a time that works for you"
        },
        {
            icon: Rocket,
            title: "Applications start within 48 hours",
            desc: "We begin applying to 15-20 jobs daily"
        },
        {
            icon: MessageCircle,
            title: "Daily WhatsApp updates with screenshots",
            desc: "Full transparency on every application"
        }
    ];

    return (
        <section className="py-20 px-6 border-t border-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    What Happens After You Sign Up
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">Your journey from signup to interviews</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-brand-green/50 transition"
                            >
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-green text-obsidian font-bold font-mono flex items-center justify-center text-sm">
                                    {index + 1}
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-bold text-white mb-2 leading-tight">{step.title}</h3>
                                        <p className="text-sm text-slate-400">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
