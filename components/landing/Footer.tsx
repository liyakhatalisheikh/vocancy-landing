import Logo from "../icons/Logo";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-800 bg-obsidian text-sm text-center font-mono">
            <div className="flex flex-col items-center gap-6">
                <div className="w-10 h-10 text-brand-green">
                    <Logo />
                </div>
                <div className="text-slate-500">
                    &copy; {new Date().getFullYear()} Vocancy. Built by engineers, for engineers.
                </div>
            </div>
        </footer>
    );
}
