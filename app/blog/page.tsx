export default function BlogPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">Blog</h1>
            <div className="text-slate-300">
                <p className="text-lg">Latest updates from the Vocancy team.</p>

                <div className="mt-12 grid gap-8">
                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                        <span className="text-brand-green text-sm font-mono">Feb 2026</span>
                        <h2 className="text-2xl font-bold text-white mt-2 mb-3">The State of Tech Hiring in India</h2>
                        <p className="text-slate-400">Why salaries are rising in Bengaluru and Hyderabad, and what it means for senior engineers.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
