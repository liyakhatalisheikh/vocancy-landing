"use client";
import { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle } from "lucide-react";

type ModalType = "engineer" | "company";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: ModalType;
    plan?: string;
}

export default function WaitlistModal({ isOpen, onClose, type, plan }: WaitlistModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        setSubmitted(false);
    }, [type]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email") as string;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid business email address.");
            setSubmitting(false);
            return;
        }

        formData.append("type", type);
        if (plan) formData.append("plan", plan);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const inputClasses = "w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-brand-green/50 focus:bg-background transition-all text-sm";
    const labelClasses = "block text-xs font-bold text-muted-foreground mb-1.5 font-mono uppercase tracking-wider";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-md borderless-glass rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Green gradient accent */}
                <div className="h-px bg-gradient-to-r from-transparent via-brand-green to-transparent" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all z-10"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="p-8">
                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="inline-flex p-4 rounded-2xl bg-brand-green/10 border border-brand-green/20 mb-6 animate-in zoom-in spin-in-12 duration-500 glow-green">
                                <CheckCircle className="w-10 h-10 text-brand-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 font-sans">You&apos;re on the list!</h3>
                            <p className="text-muted-foreground text-sm mb-6">
                                {type === "engineer"
                                    ? "We'll reach out when your vetting slot opens. Check your email."
                                    : "Our team will contact you within 24 hours with access details."
                                }
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-secondary/50 rounded-full text-foreground text-sm font-bold hover:bg-secondary/80 active:scale-95 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground font-sans mb-2">
                                    {type === "engineer" ? "Join as an Engineer" : plan ? `Hire Engineers — ${plan}` : "Hire Vetted Engineers"}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {type === "engineer"
                                        ? "Free forever. Get vetted, receive interview requests from top GCC companies."
                                        : "Access pre-vetted engineering talent in Qatar, UAE & Saudi Arabia."
                                    }
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className={labelClasses}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className={inputClasses}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className={labelClasses}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className={inputClasses}
                                        placeholder="you@company.com"
                                    />
                                </div>

                                {type === "company" && (
                                    <div>
                                        <label className={labelClasses}>Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            required
                                            className={inputClasses}
                                            placeholder="Your company"
                                        />
                                    </div>
                                )}

                                {type === "engineer" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClasses}>Experience</label>
                                            <select
                                                name="experience"
                                                required
                                                className={inputClasses + " appearance-none"}
                                            >
                                                <option value="">Select</option>
                                                <option value="2-4">2-4 yrs</option>
                                                <option value="4-6">4-6 yrs</option>
                                                <option value="6-8">6-8 yrs</option>
                                                <option value="8+">8+ yrs</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Location</label>
                                            <select
                                                name="location"
                                                required
                                                className={inputClasses + " appearance-none"}
                                            >
                                                <option value="">Select</option>
                                                <option value="UAE">🇦🇪 UAE</option>
                                                <option value="KSA">🇸🇦 KSA</option>
                                                <option value="Qatar">🇶🇦 Qatar</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full px-6 py-4 bg-foreground text-background font-bold rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm mt-4"
                                >
                                    {submitting ? "Submitting..." : type === "engineer" ? "Request Vetting Slot" : "Get Network Access"}
                                    {!submitting && <ArrowRight className="w-4 h-4" />}
                                </button>
                                {error && (
                                    <p className="text-red-500 text-xs text-center font-medium animate-in fade-in slide-in-from-top-1">
                                        {error}
                                    </p>
                                )}
                            </form>

                            <p className="text-[10px] text-muted-foreground/60 text-center mt-4">
                                {type === "engineer" ? "Free forever. No credit card required. Secure data." : "Our team will follow up within 24 hours. No spam."}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
