import { X, Check } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-20 border-y border-slate-900 bg-slate-950/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        The Problem Every Engineer Knows
                    </h2>
                    <p className="text-slate-400 text-lg">
                        You should be <span className="text-brand-green font-semibold">preparing for interviews</span>, not doing data entry
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Without Vocancy */}
                    <div className="p-8 rounded-2xl bg-slate-900/50 border-2 border-slate-800 hover:border-slate-700 transition">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                                <X className="w-6 h-6 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Without Vocancy</h3>
                        </div>
                        <ul className="space-y-3 text-slate-300 text-base font-mono text-sm">
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">30-40+ hours</span> wasted on forms</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                                <span>Upload resume <span className="font-semibold text-white">200+ times</span> manually</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                                <span>Answer same screening questions <span className="font-semibold text-white">repeatedly</span></span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">No time</span> for LeetCode/System Design</span>
                            </li>
                            <li className="flex gap-3">
                                <X className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-white">Burnout</span> before interviews even start</span>
                            </li>
                        </ul>
                    </div>

                    {/* With Vocancy */}
                    <div className="p-8 rounded-2xl bg-slate-900 border-2 border-brand-green/50 hover:border-brand-green transition relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                                <Check className="w-6 h-6 text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white">With Vocancy</h3>
                        </div>
                        <ul className="space-y-3 text-slate-300 text-base font-mono text-sm">
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-brand-green">Senior Engineer</span> reviews every job</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                <span>We apply to <span className="font-semibold text-brand-green">15-20 jobs daily</span></span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                <span>Resume <span className="font-semibold text-brand-green">customized</span> for each role</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                <span><span className="font-semibold text-brand-green">Full transparency</span> via dashboard</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                <span>You focus on <span className="font-semibold text-brand-green">Interview Prep</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
