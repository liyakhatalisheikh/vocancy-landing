import { X, Check } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-20 border-y border-slate-900 bg-slate-950/50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    The Problem Every Engineer Knows
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">
                    You should be <span className="text-emerald-400 font-semibold">preparing for interviews</span>, not filling out forms
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Without Vocancy */}
                    <div className="p-8 rounded-2xl bg-red-950/20 border-2 border-red-900/50 hover:border-red-800 transition">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                <span className="text-2xl">❌</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Without Vocancy</h3>
                        </div>
                        <ul className="space-y-3 text-slate-300 text-base">
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">3-5 hours daily</span> on applications</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                <span>Upload resume <span className="font-semibold text-white">200+ times</span> manually</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                <span>Answer same questions <span className="font-semibold text-white">repeatedly</span></span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">No time</span> for interview prep</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">Burned out</span> before interviews even start</span>
                            </li>
                        </ul>
                    </div>

                    {/* With Vocancy */}
                    <div className="p-8 rounded-2xl bg-emerald-950/20 border-2 border-emerald-900/50 hover:border-emerald-700 transition relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                <span className="text-2xl">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">With Vocancy</h3>
                        </div>
                        <ul className="space-y-3 text-slate-300 text-base">
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-emerald-400">We handle</span> all applications daily</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span>Resume <span className="font-semibold text-emerald-400">customized</span> for each role</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-emerald-400">Human review</span> of every job posting</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-emerald-400">30+ hours saved</span> for interview prep</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                <span>Show up <span className="font-semibold text-emerald-400">fresh and prepared</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
