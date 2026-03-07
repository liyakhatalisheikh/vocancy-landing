export default function PrivacyPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-sans">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-sm text-muted-foreground font-mono mb-8">Last Updated: February 2026</p>

                <p className="text-muted-foreground leading-relaxed">
                    At Vocancy, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your
                    personal information when you use our platform.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">1. Information We Collect</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, update your profile,
                    or communicate with us. This includes your name, email address, work history, and salary expectations.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">2. How We Use Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We use your information to facilitate the hiring process, matching engineers with companies. We never sell your
                    data to third-party advertisers.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">3. Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data from unauthorized access, disclosure,
                    alteration, and destruction.
                </p>
            </div>
        </main>
    );
}
