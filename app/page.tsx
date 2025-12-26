import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import Founder from "@/components/landing/Founder";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import ApplyForm from "@/components/landing/ApplyForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Founder />
      <HowItWorks />
      <Pricing />
      <ApplyForm />
      <Footer />
    </main>
  );
}
