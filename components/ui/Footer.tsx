"use client";
import React from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import { ArrowRight, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useModal } from "../ui/ModalProvider";

const footerLinks = {
    platform: [
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Hiring Standards", href: "/hiring-standards" },
    ],
};

export default function Footer() {
    const { openModal } = useModal();
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    return (
        <footer
            ref={ref}
            className={`border-t border-border transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* CTA Banner */}
            <div id="join" className="py-20 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-sans">
                        Ready to start?
                    </h3>
                    <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                        Whether you&apos;re an engineer or a company — Vocancy is built for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                            onClick={() => openModal("engineer")}
                            className="px-8 py-4 bg-foreground text-background font-bold text-sm rounded-full hover:scale-[1.02] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            Get Vetted — It&apos;s Free
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => openModal("company")}
                            className="px-8 py-4 borderless-glass text-foreground font-bold text-sm rounded-full hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95"
                        >
                            Hire Engineers
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Grid */}
            <div className="px-6 pb-12 pt-8 border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 text-brand-green">
                                    <Logo className="w-full h-full" />
                                </div>
                                <span className="font-bold text-xl text-foreground font-sans">Vocancy</span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
                                The curated talent network for GCC engineers.
                            </p>
                            <div className="flex gap-2 text-xs text-muted-foreground font-mono">
                                <span className="px-2 py-1 rounded bg-secondary border border-border">🇶🇦 Qatar</span>
                                <span className="px-2 py-1 rounded bg-secondary border border-border">🇦🇪 UAE</span>
                                <span className="px-2 py-1 rounded bg-secondary border border-border">🇸🇦 KSA</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-foreground mb-4 font-mono uppercase tracking-wider">Platform</h4>
                            <ul className="space-y-2">
                                {footerLinks.platform.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand-green transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-foreground mb-4 font-mono uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand-green transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-foreground mb-4 font-mono uppercase tracking-wider">Legal</h4>
                            <ul className="space-y-2">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand-green transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
                        <div className="text-xs text-muted-foreground font-mono">
                            &copy; {new Date().getFullYear()} Vocancy. All rights reserved.
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for GCC engineers
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
