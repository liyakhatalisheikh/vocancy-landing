"use client";

import { useState } from "react";

export default function ApplyForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        // In production: send to API
    };

    return (
        <section id="apply" className="py-24 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Join the Beta
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Limited to 5 engineers. Tell me about your background.
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
                    {submitted ? (
                        <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg p-8 text-center">
                            <h3 className="text-xl font-bold mb-2">Application Received!</h3>
                            <p>Check your email within 24 hours for next steps.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Full Name *</label>
                                <input type="text" name="name" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition"
                                    placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Email Address *</label>
                                <input type="email" name="email" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition"
                                    placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Current/Recent Role *</label>
                                <input type="text" name="role" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition"
                                    placeholder="e.g., Senior Software Engineer at Google" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Years of Experience *</label>
                                <select name="experience" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition">
                                    <option value="">Select...</option>
                                    <option value="0-2">0-2 years (Junior)</option>
                                    <option value="2-5">2-5 years (Mid-level)</option>
                                    <option value="5-8">5-8 years (Senior)</option>
                                    <option value="8+">8+ years (Staff+)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Primary Tech Stack *</label>
                                <input type="text" name="stack" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition"
                                    placeholder="e.g., Python, React, AWS, Kubernetes" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Target Role Type *</label>
                                <select name="roletype" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition">
                                    <option value="">Select...</option>
                                    <option value="backend">Backend Engineer</option>
                                    <option value="frontend">Frontend Engineer</option>
                                    <option value="fullstack">Full Stack Engineer</option>
                                    <option value="devops">DevOps/SRE</option>
                                    <option value="mobile">Mobile Engineer</option>
                                    <option value="data">Data Engineer</option>
                                    <option value="ml">ML Engineer</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Why do you want to join the beta? *</label>
                                <textarea name="why" required rows={4}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition resize-none"
                                    placeholder="Tell me about your job search and what you're looking for..."></textarea>
                            </div>

                            <button type="submit"
                                className="w-full px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition"
                            >
                                Apply for Beta - $99
                            </button>

                            <p className="text-center text-sm text-slate-500 font-mono">
                                🔒 Secure payment • ⚡ 24hr response • 👨‍💻 Engineer-only beta
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
