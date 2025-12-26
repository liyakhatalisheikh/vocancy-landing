export default function Founder() {
    return (
        <section id="founder" className="py-24 px-6 bg-slate-950/50 border-y border-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-16">
                    Built by an Engineer Who Gets It
                </h2>

                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
                    {/* Founder Image Placeholder */}
                    <div className="w-48 h-48 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-6xl mx-auto md:mx-0">
                        👨‍💻
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm [Your Name]</h3>
                        <p className="text-emerald-400 font-mono text-sm mb-6">Senior Software Engineer • Ex-[Company]</p>

                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                I'm a Senior Engineer with [X] years of experience. I've interviewed at FAANG companies,
                                landed offers, and been through 100+ technical interviews.
                            </p>
                            <p>
                                I built Vocancy because I was spending 40+ hours on job applications when I should have been
                                preparing for system design interviews. The irony? The applications didn't get me
                                hired—crushing the technical bar did.
                            </p>
                            <p className="text-white font-semibold">
                                During this beta, I'm personally handling every application to perfect the process. You're
                                getting direct access to me.
                            </p>
                        </div>

                        <div className="mt-6 p-4 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs text-slate-400">
                            <div className="text-emerald-400 mb-2">// Beta commitment:</div>
                            <div>→ I review every job manually</div>
                            <div>→ I customize your resume for each role</div>
                            <div>→ I respond to your questions within 24hrs</div>
                            <div>→ You see every application with screenshots</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
