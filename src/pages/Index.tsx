import { Nav } from "@/components/cartifi/Nav";
import { Hero } from "@/components/cartifi/Hero";
import { GlassDemo } from "@/components/cartifi/GlassDemo";
import { ValueProof } from "@/components/cartifi/ValueProof";
import { BeforeAfter } from "@/components/cartifi/BeforeAfter";
import { LifeBenefit } from "@/components/cartifi/LifeBenefit";
import { Demo } from "@/components/cartifi/Demo";
import { HowItWorks } from "@/components/cartifi/HowItWorks";
import { AppDemo } from "@/components/cartifi/AppDemo";
import { FinalCTA } from "@/components/cartifi/FinalCTA";
import { Footer } from "@/components/cartifi/Footer";
import { useReveal } from "@/components/cartifi/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <GlassDemo />
      <Demo />
      <ValueProof />
      <BeforeAfter />
      <LifeBenefit />
      <HowItWorks />
      <AppDemo />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
