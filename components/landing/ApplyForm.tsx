"use client";

import { useState } from "react";
import { ArrowRight, Lock, Zap, Terminal } from "lucide-react";

export default function ApplyForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Oops! There was a problem submitting your form');
            }
        } catch (error) {
            alert('Oops! There was a problem submitting your form');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="apply" className="py-20 px-6">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Join the Beta
                    </h2>
                    <p className="text-slate-400 text-lg">
                        A Senior Engineer will review your profile within 24 hours.
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
                    {submitted ? (
                        <div className="bg-brand-green/20 border border-brand-green text-brand-green rounded-lg p-8 text-center">
                            <h3 className="text-xl font-bold mb-2">Application Received!</h3>
                            <p>Check your email within 24 hours for next steps.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Full Name *</label>
                                <input type="text" name="name" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-green transition"
                                    placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-200 mb-2">Email Address *</label>
                                <input type="email" name="email" required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-green transition"
                                    placeholder="john@example.com" />
                            </div>

                            <button type="submit" disabled={submitting}
                                className="w-full px-8 py-4 bg-brand-green text-obsidian font-bold rounded-lg hover:bg-brand-green/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Submitting...' : 'Apply for Beta - $199'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
