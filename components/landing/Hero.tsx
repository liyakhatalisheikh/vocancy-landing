import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-emerald-400 mb-8 backdrop-blur-sm shadow-lg shadow-emerald-900/20 ring-1 ring-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          BETA LAUNCH: LIMITED ENGINEER SPOTS
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-[1] mb-6">
          Stop Applying.<br />
          Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">Interviewing.</span>
        </h1>

        {/* Subhead */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
          We apply to <span className="text-white font-semibold">500+ tech jobs</span> for you while you focus on System Design and DP problems.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
            <span>Human-powered, not bots</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
            <span>Built by engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
            <span>Full transparency with screenshots</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <Link
            href="#apply"
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold text-base rounded-full hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group"
          >
            Join Beta - $99
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#how"
            className="px-8 py-4 bg-slate-900 border-2 border-slate-700 text-slate-300 font-bold text-base rounded-full hover:border-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            See How It Works
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-300">Verified by engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-300">24hr response guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
