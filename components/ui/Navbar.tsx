import Link from "next/link";
import Logo from "../icons/Logo";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 relative transition-transform group-hover:scale-110">
                        <Logo className="w-full h-full" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">Vocancy</span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#how" className="hover:text-emerald-400 transition">How it Works</a>
                    <a href="#founder" className="hover:text-emerald-400 transition">Founder</a>
                    <a href="#pricing" className="hover:text-emerald-400 transition">Pricing</a>
                    <a
                        href="#apply"
                        className="px-4 py-2 bg-emerald-500 text-slate-950 rounded hover:bg-emerald-400 transition font-bold text-xs uppercase tracking-wide"
                    >
                        Join Beta
                    </a>
                </div>
            </div>
        </nav>
    );
}
