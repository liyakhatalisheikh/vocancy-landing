export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "15-Min Onboarding",
            desc: "Hop on a quick call. Share your preferred tech stack, target companies, salary expectations, and location."
        },
        {
            num: "02",
            title: "We Tailor Resumes",
            desc: "We optimize your resume for different role types (Backend, Frontend, Full Stack). You approve everything first."
        },
        {
            num: "03",
            title: "We Apply Daily",
            desc: "We apply to 15-20 relevant positions daily (200+ total). You get daily WhatsApp updates with screenshot proof."
        },
        {
            num: "04",
            title: "You Interview",
            desc: "You focus purely on LeetCode and System Design prep. Respond to interview requests when they roll in."
        }
    ];

    return (
        <section id="how" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    The <span className="text-brand-green font-mono">O(1)</span> Workflow
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">From sign-up to interviews in 48 hours</p>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg border-2 border-brand-green bg-slate-900 flex items-center justify-center font-mono font-bold text-brand-green">
                                {step.num}
                            </div>
                            <div className="flex-1 p-6 rounded-xl border border-slate-800 bg-slate-900 group-hover:border-brand-green/50 transition">
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-base">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
