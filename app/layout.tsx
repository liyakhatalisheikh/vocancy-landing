import type { Metadata } from "next";
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
  title: "Vocancy | Automate Your Job Search",
  description: "Stop Applying. Start LeetCoding. We apply to 500+ tech jobs for you.",
  openGraph: {
    title: "Vocancy | Automate Your Job Search",
    description: "Stop Applying. Start LeetCoding. We apply to 500+ tech jobs for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocancy",
    description: "Stop Applying. Start LeetCoding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-slate-950 text-slate-200 selection:bg-emerald-500/30 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
