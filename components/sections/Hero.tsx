"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Briefcase, Zap } from "lucide-react";
import Image from "next/image";
import { useModal } from "../ui/ModalProvider";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* 2026 Aurora Background */}
      <div className="aurora-bg" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Asymmetric Typography */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full borderless-glass text-xs font-semibold text-brand-green mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>The Premier India Talent Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold mb-8 leading-[1.02] tracking-tighter text-foreground"
          >
            Your Next Job <br />
            <span className="text-muted-foreground">Finds You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-muted-foreground/80 mb-12 max-w-xl leading-relaxed tracking-tight"
          >
            Engage with top-tier technical challenges and high-caliber teams tailored to your unique expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => openModal("engineer")}
              className="px-8 py-4 bg-brand-green text-black rounded-full font-bold shadow-[0_0_40px_rgba(61,242,181,0.3)] hover:shadow-[0_0_60px_rgba(61,242,181,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Discover Your Match <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openModal("company")}
              className="px-8 py-4 borderless-glass text-foreground rounded-full font-semibold hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              Hire Top Talent
            </button>
          </motion.div>
        </div>

        {/* Right Column: Floating UI Widgets (2026 Product-Led Style) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] hidden md:block w-full"
        >
          {/* Main Mock Widget */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] borderless-glass p-6 rounded-[2rem] animate-float z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-blue-500 p-[2px]">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground">Z</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Arya</h4>
                <p className="text-xs text-brand-green font-medium">98% Match Score</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Python / Go</span>
                <span className="text-foreground font-medium">Expert</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">System Design</span>
                <span className="text-foreground font-medium">Senior</span>
              </div>
            </div>
          </div>

          {/* Secondary Floating Widget */}
          <div className="absolute top-[10%] right-[10%] w-[260px] borderless-glass p-5 rounded-[1.5rem] animate-float z-10" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-green/20 rounded-xl text-brand-green"><Briefcase className="w-4 h-4" /></div>
              <h5 className="font-semibold text-sm text-foreground">New Opportunity</h5>
            </div>
            <p className="text-xs text-muted-foreground">Senior Backend Engineer at Bengaluru stealth startup.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
