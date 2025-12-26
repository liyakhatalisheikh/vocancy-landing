import { UserCheck, Target, MessageSquare, Code2, Sparkles, Zap } from "lucide-react";

export default function Benefits() {
    const benefits = [
        {
            icon: <UserCheck className="w-10 h-10 text-emerald-500 mb-4" />,
            title: "Manual Review",
            desc: "Not bots. An engineer manually reviews every job posting. Wrong tech stack? Skip. Mislabeled role? Skip. Quality over quantity."
        },
        {
            icon: <Target className="w-10 h-10 text-cyan-500 mb-4" />,
            title: "FAANG + Startups",
            desc: "We apply to big tech (Google, Meta, Amazon) AND high-growth startups. Mix of stability and upside potential."
        },
        {
            icon: <MessageSquare className="w-10 h-10 text-purple-500 mb-4" />,
            title: "Daily Transparency",
            desc: "WhatsApp updates every afternoon. See every company applied to, with screenshots. No black box, complete visibility."
        },
        {
            icon: <Code2 className="w-10 h-10 text-blue-500 mb-4" />,
            title: "Focus on Prep",
            desc: "Save 30+ hours. Use that time for technical interview preparation, system design practice, and ace your interviews."
        },
        {
            icon: <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />,
            title: "Resume Tailoring",
            desc: "We create 3-5 versions: Backend-focused, Frontend-focused, Full Stack. Each application gets the right resume."
        },
        {
            icon: <Zap className="w-10 h-10 text-orange-500 mb-4" />,
            title: "Volume = Offers",
            desc: "It's a numbers game. 500 applications = 10-15 interview requests typically. We make sure you hit that volume."
        }
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    Why Engineers Choose Vocancy
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">Human-powered quality, engineer-vetted roles</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition duration-300">
                            {item.icon}
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
