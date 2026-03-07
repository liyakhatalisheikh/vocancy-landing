"use client";
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useModal } from "../ui/ModalProvider";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/8 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute top-[100px] right-[-100px] w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] -z-10" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid -z-10 opacity-50" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-brand-green mb-10 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
          </span>
          Now Open — Qatar · UAE · Saudi Arabia
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6 leading-[1.05] tracking-tight">
          Your Next Job <br />
          <span className="text-brand-green bg-none [-webkit-text-fill-color:unset]">Finds You.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          The curated talent marketplace where top GCC companies
          compete for vetted engineers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openModal("engineer")}
            className="group px-8 py-4 bg-brand-green text-obsidian font-bold rounded-2xl hover:shadow-2xl hover:shadow-brand-green/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get Vetted — It&apos;s Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => openModal("company")}
            className="px-8 py-4 glass font-bold rounded-2xl text-foreground hover:border-brand-green/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hire Engineers
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {["Verified Salaries", "Direct to Interview", "Zero Ghosting"].map((item) => (
            <div key={item} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50">
              <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
              <span className="text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
