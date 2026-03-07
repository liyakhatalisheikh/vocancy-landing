"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 3, suffix: "", label: "GCC Countries", detail: "Qatar • UAE • Saudi Arabia" },
    { value: 8, suffix: "%", label: "Vetted Talent", detail: "Only top engineers accepted" },
    { value: 14, suffix: " day", label: "Decision Guarantee", detail: "Companies commit or lose access" },
    { value: 3, suffix: " max", label: "Interview Rounds", detail: "No 7-round marathons" },
];

function useCountUp(end: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, start]);

    return count;
}

function StatCard({ value, suffix, label, detail, delay }: { value: number; suffix: string; label: string; detail: string; delay: number }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    const count = useCountUp(value, 1500, visible);

    return (
        <div ref={ref} className="text-center group">
            <div className="text-3xl md:text-5xl font-bold text-foreground font-mono mb-1 group-hover:text-brand-green transition-colors flex items-baseline justify-center gap-0.5">
                {count}<span className="text-lg md:text-2xl text-brand-green">{suffix}</span>
            </div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider font-mono mt-1">
                {label}
            </div>
            <div className="text-[11px] text-muted-foreground/60 mt-1 hidden md:block">
                {detail}
            </div>
        </div>
    );
}

export default function Stats() {
    return (
        <section className="py-16 px-6 border-t border-border">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} delay={i * 200} />
                    ))}
                </div>
            </div>
        </section>
    );
}
