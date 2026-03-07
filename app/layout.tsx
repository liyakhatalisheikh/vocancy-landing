import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ModalProvider } from "@/components/ui/ModalProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vocancy.com"),
  title: "Vocancy | The Curated Talent Network for GCC Engineers",
  description: "Vocancy is a curated talent marketplace where vetted engineers in Qatar, UAE, and Saudi Arabia receive interview requests from top companies. Free for engineers.",
  keywords: [
    "tech jobs GCC",
    "engineer jobs UAE",
    "engineer jobs Saudi Arabia",
    "tech jobs Qatar",
    "talent marketplace GCC",
    "vetted engineers",
    "reverse recruiting",
    "GCC hiring",
    "no ghosting hiring",
    "curated talent placement",
    "curated talent marketplace",
    "verified engineers",
    "verified talent",
    "verified talent marketplace",
    "verified talent solutions",
    "GCC tech jobs",
  ],
  openGraph: {
    title: "Vocancy | The Curated Talent Network for GCC Engineers",
    description: "The curated talent network where top GCC companies compete for vetted engineers. Get vetted once. Let companies come to you.",
    type: "website",
    locale: "en_US",
    siteName: "Vocancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocancy | GCC Talent Network",
    description: "Vetted engineers in Qatar, UAE & Saudi Arabia. Companies pay for access, engineers join free.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vocancy",
    "url": "https://vocancy.com",
    "logo": "https://vocancy.com/icon.png",
    "sameAs": [
      "https://twitter.com/vocancy",
      "https://linkedin.com/company/vocancy"
    ],
    "description": "The curated talent marketplace where top GCC companies compete for vetted engineers.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    }
  };

  return (
    <html lang="en" className="scroll-smooth scroll-pt-24" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-blue-50 to-blue-100 dark:from-obsidian dark:to-obsidian text-foreground font-mono custom-scrollbar min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
