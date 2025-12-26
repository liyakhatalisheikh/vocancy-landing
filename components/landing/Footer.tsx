import Logo from "../icons/Logo";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950 text-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-6">
                    <Logo className="w-full h-full" />
                </div>
                <span className="text-slate-200 font-bold text-lg">Vocancy</span>
            </div>
            <div className="text-slate-500 mb-4">
                Stop Applying. Start Interviewing.
            </div>
            <div className="text-slate-600 text-xs">
                &copy; 2024 Vocancy Inc. Built by engineers, for engineers.
            </div>
        </footer>
    );
}
