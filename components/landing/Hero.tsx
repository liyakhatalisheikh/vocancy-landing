import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-brand-green mb-8 shadow-sm hover:border-brand-green/50 transition-colors">
          <Terminal className="w-4 h-4" />
          <span>BETA ACCESS OPEN</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Job Application Service <br className="hidden md:block" />
          for <span className="text-slate-300">Software Engineers</span>
        </h1>

        {/* Hook */}
        <div className="text-2xl md:text-3xl font-bold text-brand-green mb-8 font-mono">
          We Apply. You Interview. You Win.
        </div>

        {/* Subhead */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl font-mono text-sm md:text-base">
          Tired of spending 40+ hours on applications? <span className="text-white font-semibold">Human-powered service</span> that applies to 200+ tech jobs on your behalf.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-green"></div>
            <span>ATS Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-green"></div>
            <span>Built by engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-green"></div>
            <span>Full transparency with screenshots</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <Link
            href="#apply"
            className="px-8 py-4 bg-brand-green text-obsidian font-bold text-base rounded-full hover:bg-brand-green/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(61,242,181,0.5)] flex items-center justify-center gap-2 group"
          >
            Join Beta - $199
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#how"
            className="px-8 py-4 bg-slate-900 border-2 border-slate-700 text-slate-300 font-bold text-base rounded-full hover:border-brand-green hover:text-white transition-all flex items-center justify-center gap-2"
          >
            See How It Works
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <span className="text-slate-300">Verified by engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-green" />
            <span className="text-slate-300">24hr response guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
