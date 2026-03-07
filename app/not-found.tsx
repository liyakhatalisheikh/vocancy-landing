import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
            <div className="w-full max-w-md space-y-8">
                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-full h-full border border-brand-green/30 rounded-full flex items-center justify-center bg-obsidian/50 backdrop-blur-sm">
                        <span className="text-4xl font-mono font-bold text-brand-green">404</span>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Lost in the void?</h1>
                    <p className="text-muted-foreground">
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-obsidian font-bold rounded-lg hover:bg-brand-green/90 transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
