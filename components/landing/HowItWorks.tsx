export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "15-Min Tech Call",
            desc: "Tell us your stack, preferred roles (Backend/Frontend/Full Stack), target companies, salary expectations. We'll understand your context."
        },
        {
            num: "02",
            title: "Resume Optimization",
            desc: "We create 3-5 tailored versions of your resume (Backend-focused, Frontend-focused, etc.). You approve before we start."
        },
        {
            num: "03",
            title: "Applications Begin",
            desc: "We apply to 15-20 relevant positions daily. You get WhatsApp updates every afternoon with companies, screenshots, and progress."
        },
        {
            num: "04",
            title: "You Focus on Interviews",
            desc: "Spend your time on technical interview prep, system design, and behavioral practice. Show up fresh when interview requests arrive."
        }
    ];

    return (
        <section id="how" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    The <span className="text-emerald-500 font-mono">O(1)</span> Workflow
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">From signup to interviews in 48 hours</p>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg border-2 border-emerald-500 bg-slate-900 flex items-center justify-center font-mono font-bold text-emerald-400">
                                {step.num}
                            </div>
                            <div className="flex-1 p-6 rounded-xl border border-slate-800 bg-slate-900 group-hover:border-emerald-500/50 transition">
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
