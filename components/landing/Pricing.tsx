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

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-brand-green text-obsidian text-xs font-bold px-3 py-1 rounded-bl-lg font-mono">
                        BETA PRICING
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-white mb-2">Beta Access</h3>
                            <div className="flex items-baseline justify-center md:justify-start gap-2">
                                <span className="text-5xl font-extrabold text-brand-green">$199</span>
                                <span className="text-lg text-slate-500 line-through decoration-slate-500">$499</span>
                            </div>
                            <p className="text-slate-400 mt-2 font-mono text-sm">One-time payment. 200+ Applications.</p>
                        </div>

                        <ul className="space-y-3 text-left">
                            <li className="flex items-center gap-3 text-slate-300">
                                <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>Manually applied by Senior Engineer</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>200+ targeted applications</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>Resume tailoring included</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>Daily WhatsApp updates</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href="#apply"
                            className="inline-block w-full md:w-auto px-10 py-4 bg-brand-green text-obsidian font-bold text-lg rounded-lg hover:bg-brand-green/90 transition"
                        >
                            Get Beta Access →
                        </Link>
                        <p className="mt-4 text-sm text-slate-400">
                            Early beta pricing. Secure your access now.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
