import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Vocancy | Job Application Service for Software Engineers",
  description: "Human-powered job application service for software engineers. We manually apply to 200+ tech jobs for you while you focus on interview prep.",
  keywords: ["job application service", "apply to jobs for me", "automated job search", "job search help", "reverse recruiter for engineers", "tech career agent", "human powered job search"],
  openGraph: {
    title: "Vocancy | We Apply to Tech Jobs For You",
    description: "Human-powered job application service for software engineers. We apply to 200+ tech jobs for you.",
    type: "website",
    locale: "en_US",
    siteName: "Vocancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocancy",
    description: "Stop Applying. Start Interviewing. We apply to 500+ tech jobs for you.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-obsidian text-slate-200 selection:bg-brand-green/30 font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
