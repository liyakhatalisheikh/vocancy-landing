import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/landing/Hero";
// import ProblemSolution from "@/components/landing/ProblemSolution"; // Commented out for streamlining
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import ApplyForm from "@/components/landing/ApplyForm";
import WhatHappens from "@/components/landing/WhatHappens";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      {/* <ProblemSolution /> */}
      <Benefits />
      <Pricing />
      <FAQ />
      <ApplyForm />
      <WhatHappens />
      <Footer />
    </main>
  );
}
