"use client";
import GlassCard from "@/components/ui/cards/GlassCard";
import { Clock, ShieldCheck, Zap } from "lucide-react";

export default function HiringStandardsPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-sans">Hiring Standards</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Our promise to engineers. All companies on Vocancy agree to these rules.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <GlassCard
                    icon={ShieldCheck}
                    title="Zero Ghosting"
                    description="Companies must respond to every interview request within 5 working days, even if it's a decline."
                    className="h-full"
                >
                    <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs font-mono text-brand-green uppercase tracking-wider">Mandatory</span>
                    </div>
                </GlassCard>

                <GlassCard
                    icon={Zap}
                    title="Transparent Compensation"
                    description="Salary ranges and equity components must be disclosed upfront in the offer request."
                    className="h-full"
                >
                    <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs font-mono text-brand-green uppercase tracking-wider">Required</span>
                    </div>
                </GlassCard>

                <GlassCard
                    icon={Clock}
                    title="Speed"
                    description="The entire process from first intro to final decision should take no longer than 14 days."
                    className="h-full"
                >
                    <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-xs font-mono text-brand-green uppercase tracking-wider">Guaranteed</span>
                    </div>
                </GlassCard>
            </div>
        </main>
    );
}
