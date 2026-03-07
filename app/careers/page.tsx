export default function CareersPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">Join Vocancy</h1>
            <div className="prose prose-invert prose-lg text-slate-300">
                <p className="text-xl text-white mb-8">
                    Help us rewrite the hiring playbook for the GCC.
                </p>
                <p>
                    We are a small, high-density team of engineers and operators. We don't have open roles right this second,
                    but we are always looking for exceptional talent.
                </p>
                <div className="mt-8 p-6 bg-slate-900/50 border border-brand-green/20 rounded-xl">
                    <p className="text-sm font-mono text-brand-green">Open Roles</p>
                    <p className="mt-2 text-slate-400">No active listings. Check back soon.</p>
                </div>
            </div>
        </main>
    );
}
