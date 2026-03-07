"use client";
import GlassCard from "@/components/ui/cards/GlassCard";
import { Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Contact Us</h1>
                <p className="text-xl text-muted-foreground">
                    Questions? Need help? We&apos;re here.
                </p>
            </div>

            <div className="max-w-xl mx-auto">
                <GlassCard
                    icon={Mail}
                    title="Get in Touch"
                    description="For both companies and engineers."
                    className="text-center flex flex-col items-center"
                >
                    <div className="mt-6">
                        <a
                            href="mailto:hello@vocancy.com"
                            className="text-2xl md:text-3xl font-bold text-foreground hover:text-brand-green transition-colors font-sans"
                        >
                            hello@vocancy.com
                        </a>
                    </div>
                </GlassCard>
            </div>
        </main>
    );
}
