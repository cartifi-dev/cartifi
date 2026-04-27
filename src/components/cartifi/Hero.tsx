import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import mascotOverwhelmed from "@/assets/mascot-overwhelmed.png";

export const Hero = () => {
  // A/B headline — deterministic by day so no hydration mismatch
  const variant = new Date().getDate() % 2;
  const headline = variant === 0
    ? "How much are you overpaying on groceries?"
    : "Same groceries. Lower total.";

  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Soft ambient gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-xs text-muted-foreground shadow-soft mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange" />
            Trusted by smart shoppers across Czech Republic
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            {headline.split(" ").map((w, i, arr) => (
              <span key={i}>
                {i === arr.length - 2 || i === arr.length - 1 ? (
                  <span className="text-gradient">{w} </span>
                ) : (
                  <span>{w} </span>
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Cartifi builds your cheapest possible cart across stores — instantly.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <a href="#demo">
                Check your savings <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              No switching apps. No comparing. No effort.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-orange", "bg-gold", "bg-primary"].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-background`} />
                ))}
              </div>
              <span>4,200+ carts optimized this week</span>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div className="relative animate-fade-in" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-8 rounded-full bg-gradient-warm opacity-40 blur-3xl" />

            {/* Floating Kč tags */}
            <div className="absolute top-6 left-2 z-10 animate-float-slow">
              <PriceTag value="89 Kč" tone="orange" />
            </div>
            <div className="absolute top-20 right-4 z-10 animate-float-med">
              <PriceTag value="124 Kč" tone="gold" />
            </div>
            <div className="absolute bottom-24 left-0 z-10 animate-float-med" style={{ animationDelay: "1s" }}>
              <PriceTag value="56 Kč" tone="blue" />
            </div>
            <div className="absolute bottom-10 right-8 z-10 animate-float-slow" style={{ animationDelay: "0.5s" }}>
              <PriceTag value="219 Kč" tone="orange" />
            </div>

            <img
              src={mascotOverwhelmed}
              alt="Cartifi mascot overwhelmed by grocery prices"
              width={1024}
              height={1024}
              className="relative z-0 w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceTag = ({ value, tone }: { value: string; tone: "orange" | "gold" | "blue" }) => {
  const tones = {
    orange: "bg-orange-soft text-orange border-orange/30",
    gold: "bg-gold-soft text-gold border-gold/30",
    blue: "bg-primary-soft text-primary border-primary/30",
  } as const;
  return (
    <div className={`px-4 py-2 rounded-2xl border backdrop-blur-sm font-semibold text-sm shadow-soft ${tones[tone]}`}>
      {value}
    </div>
  );
};
