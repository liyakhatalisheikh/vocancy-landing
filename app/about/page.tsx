export default function AboutPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">About Vocancy</h1>
            <div className="prose prose-invert prose-lg text-slate-300">
                <p className="text-xl text-brand-green mb-8">
                    We are building the curated talent network for the GCC.
                </p>
                <p>
                    Vocancy was born from a simple frustration: hiring great engineers in the GCC is harder than it should be.
                    Resumes get lost in black holes, recruiters charge 20% for unvetted profiles, and months are wasted on
                    interviews that go nowhere.
                </p>
                <p className="mt-4">
                    We flip the script. Instead of engineers applying to companies, companies apply to engineers.
                    We check skills, verify experience, and ensure salary expectations align before a single conversation happens.
                </p>
            </div>
        </main>
    );
}
