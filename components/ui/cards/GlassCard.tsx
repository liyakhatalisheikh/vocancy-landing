"use client";
import React from "react";
import { type LucideIcon } from "lucide-react";

interface GlassCardProps {
    icon?: LucideIcon;
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function GlassCard({ icon: Icon, title, description, children, className = "" }: GlassCardProps) {
    return (
        <div className={`group p-8 rounded-3xl bg-white/60 dark:bg-slate-900/20 border border-slate-200 dark:border-white/5 hover:border-brand-green/30 transition-all duration-500 hover:bg-white/80 dark:hover:bg-slate-900/40 backdrop-blur-sm relative overflow-hidden flex flex-col shadow-sm hover:shadow-md ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className={`relative z-10 flex-1 ${className.includes("text-center") ? "flex flex-col items-center" : ""}`}>
                {Icon && (
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 dark:bg-white/5 border border-brand-green/20 dark:border-white/10 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6" />
                    </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{title}</h3>

                {description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </div>
    );
}
