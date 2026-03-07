"use client";
import { ShieldCheck, Zap, Clock, MessageSquare, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
    { icon: ShieldCheck, title: "Verified Skills Only", desc: "90-minute assessment. Pass score: 70/100. Top 8% only." },
    { icon: Clock, title: "Max 3 Rounds", desc: "Strict 3-round interview limit. No 7-round marathons." },
    { icon: Zap, title: "2-Week Decision", desc: "Guaranteed decision within 14 days. No endless waiting." },
    { icon: MessageSquare, title: "Zero Ghosting", desc: "Mandatory feedback on every application. No response = ban." },
    { icon: TrendingUp, title: "Transparent Pay", desc: "Salary ranges disclosed upfront. No surprises." },
    { icon: Users, title: "Accountability", desc: "Companies tracked on response times and fairness." },
];

export default function Features() {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="features"
            ref={ref}
            className={`py-24 md:py-32 px-6 border-t border-border transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs font-bold text-brand-green uppercase tracking-widest mb-4 font-mono">
                        The Standard
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans">
                        Rules that protect{" "}
                        <span className="text-muted-foreground">both sides.</span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl border border-border bg-secondary/30 hover:border-brand-green/30 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-5 text-brand-green group-hover:bg-brand-green group-hover:text-obsidian transition-colors duration-300">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
