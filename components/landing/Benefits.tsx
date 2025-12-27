import { UserCheck, Target, MessageSquare, Code2, Sparkles, Zap } from "lucide-react";

export default function Benefits() {
    const benefits = [
        {
            icon: <UserCheck className="w-10 h-10 text-brand-green mb-4" />,
            title: "Human-Powered, Not Bots",
            desc: "A real Senior Engineer reviews every job posting manually. No automated spam. We ensure quality over quantity."
        },
        // {
        //     icon: <Code2 className="w-10 h-10 text-brand-green mb-4" />,
        //     title: "Engineer-Built for Engineers",
        //     desc: "Founded by a Senior SWE who understands tech stacks and roles. Not a generic VA service."
        // },
        {
            icon: <Target className="w-10 h-10 text-brand-green mb-4" />,
            title: "Quality Over Quantity",
            desc: "We skip irrelevant roles (wrong stack, mislabeled seniority, low quality). We only apply to jobs that fit your profile."
        },
        {
            icon: <MessageSquare className="w-10 h-10 text-brand-green mb-4" />,
            title: "Complete Transparency",
            desc: "Daily WhatsApp updates with screenshots. Full dashboard access. No black box - you see exactly what we do."
        },
        {
            icon: <Sparkles className="w-10 h-10 text-brand-green mb-4" />,
            title: "Resume Tailoring",
            desc: "Multiple versions optimized for different role types (Backend, Frontend, Full Stack) and seniority levels."
        },
        // {
        //     icon: <Zap className="w-10 h-10 text-brand-green mb-4" />,
        //     title: "Focus on Interviews",
        //     desc: "Stop wasting time on data entry. Spend your energy on LeetCode, System Design, and getting hired."
        // }
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-4">
                    Why Engineers Choose Vocancy
                </h2>
                <p className="text-center text-slate-400 mb-12 text-lg">Human-powered quality, engineer-vetted roles</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-green/50 transition duration-300">
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
