export default function TermsPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-sans">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-sm text-muted-foreground font-mono mb-8">Last Updated: February 2026</p>

                <p className="text-muted-foreground leading-relaxed">
                    Please read these Terms of Service ("Terms") carefully before using the Vocancy platform.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Vocancy, you agree to be bound by these Terms. If you disagree with any part of the terms,
                    you may not access the service.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">2. Platform Usage</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Vocancy is a talent marketplace. Companies agree to effectively review and respond to candidates. Engineers
                    agree to provide accurate information about their experience and skills.
                </p>

                <h3 className="text-foreground font-bold text-xl mt-8 mb-4">3. Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                    We may terminate or suspend access to our service immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you breach the Terms.
                </p>
            </div>
        </main>
    );
}
