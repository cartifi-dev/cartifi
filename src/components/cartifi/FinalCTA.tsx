import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mascotHappy from "@/assets/mascot-happy.png";

export const FinalCTA = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" />
    </div>
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="reveal">
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            See how much you can save on your <span className="text-gradient">next grocery run.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Free. Fast. No effort.</p>
          <div className="mt-8">
            <Button variant="cta" size="xl" asChild>
              <a href="#demo">Try Cartifi <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Same groceries. Lower total.</p>
        </div>
        <div className="reveal flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm opacity-40 blur-3xl rounded-full" />
            <img src={mascotHappy} alt="Happy Cartifi mascot relaxing" loading="lazy" width={1024} height={1024} className="relative w-full max-w-md object-contain drop-shadow-2xl animate-pulse-soft" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
