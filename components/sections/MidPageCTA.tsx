"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "../ui/WaitlistModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MidPageCTA() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"engineer" | "company">("engineer");
    const [ref, isVisible] = useScrollAnimation<HTMLElement>();

    const openModal = (type: "engineer" | "company") => {
        setModalType(type);
        setModalOpen(true);
    };

    return (
        <section
            ref={ref}
            className={`py-12 px-6 flex justify-center transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="w-full max-w-4xl bg-secondary/40 border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-sans">
                        Ready to make your move?
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Join vetted engineers and top Indian companies already in the network.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <button
                        onClick={() => openModal("engineer")}
                        className="px-6 py-3 bg-brand-green text-obsidian rounded-xl font-bold hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/20 text-sm active:scale-95"
                    >
                        Get Vetted (Free)
                    </button>
                    <button
                        onClick={() => openModal("company")}
                        className="px-6 py-3 bg-secondary text-foreground border border-border rounded-xl font-bold hover:border-brand-green/30 transition-all text-sm active:scale-95"
                    >
                        Hire Engineers
                    </button>
                </div>
            </div>

            <WaitlistModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </section>
    );
}
