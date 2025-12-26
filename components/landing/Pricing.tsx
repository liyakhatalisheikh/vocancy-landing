import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-6 bg-slate-950/50 border-y border-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    Beta Launch Pricing
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">Early access pricing for engineers</p>

                <div className="max-w-lg mx-auto bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500 rounded-2xl p-8 relative overflow-hidden">

                    <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold">
                        BETA
                    </div>

                    <div className="text-center mb-8">
                        <div className="text-6xl font-extrabold text-white mb-2">$99</div>
                        <div className="text-slate-400 text-base">Beta pricing</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                        {[
                            "500 tech job applications over 2-3 weeks",
                            "Resume optimization for each role type",
                            "Daily WhatsApp updates with screenshots",
                            "Personal attention from our team",
                            "Full transparency - see every application",
                            "Real-time dashboard to track progress"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-200 text-base">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#apply"
                        className="block w-full px-8 py-4 bg-emerald-500 text-slate-950 font-bold text-base rounded-lg hover:bg-emerald-400 transition text-center"
                    >
                        Join Beta - $99 →
                    </Link>

                    <div className="mt-6 text-center text-sm text-slate-400">
                        <div>✓ 24hr response • ✓ Secure payment</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
