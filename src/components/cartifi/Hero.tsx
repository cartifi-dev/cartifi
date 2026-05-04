import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import shibaRunning from "@/assets/shiba-running.png";
import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  const variant = new Date().getDate() % 2;
  const headline = variant === 0 ? t.hero.headlineA : t.hero.headlineB;

  return (
    <section id="top" className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-xs text-muted-foreground shadow-soft mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange" />
            {t.hero.badge}
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
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <a href="#demo">
                {t.hero.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              {t.hero.note}
            </p>
          </div>
        </div>

        {/* Animated mascot orbiting a phone */}
        <div className="relative animate-fade-in" style={{ animationDelay: "120ms" }}>
          <MascotOrbit alt={t.hero.mascotAlt} />
        </div>
      </div>
    </section>
  );
};

const MascotOrbit = ({ alt }: { alt: string }) => {
  // Elliptical orbit: wider horizontally than vertically so the mascot
  // stays around the mid-section and never crosses the headline/CTA.
  const orbitVars = {
    ["--orbit-rx" as string]: "min(40%, 175px)",
    ["--orbit-ry" as string]: "min(14%, 55px)",
  } as React.CSSProperties;

  return (
    <div className="relative mx-auto w-full max-w-[460px] aspect-square">
      {/* Ambient glow */}
      <div className="absolute inset-10 rounded-full bg-gradient-warm opacity-35 blur-3xl animate-soft-pulse" />

      {/* Phone in center (above back half of orbit, below front half via z-index layering) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="animate-phone-float">
          <PhoneMock />
        </div>
      </div>

      {/* Mascot orbit — elliptical path via two nested animations.
          Sits above the phone (z-20) but its own depth keyframe dims/blurs
          it during the back half, creating the "pass behind" illusion
          without ever overlapping the app UI awkwardly. */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={orbitVars}
      >
        {/* X axis (left↔right) */}
        <div className="animate-orbit-x will-change-transform">
          {/* Y axis (subtle up/down to make it elliptical) */}
          <div className="animate-orbit-y will-change-transform">
            {/* Depth: opacity + slight blur on back half */}
            <div className="animate-mascot-depth">
              {/* Perspective scale */}
              <div className="animate-mascot-scale will-change-transform">
                {/* Facing direction flip */}
                <div className="animate-mascot-face will-change-transform">
                  <div className="relative">
                    <img
                      src={shibaRunning}
                      alt={alt}
                      width={140}
                      height={140}
                      className="w-[80px] sm:w-[120px] h-auto select-none drop-shadow-[0_10px_18px_hsl(var(--primary)/0.35)]"
                      draggable={false}
                    />
                    {/* Soft ground shadow under mascot */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-2 w-12 sm:w-16 rounded-full bg-foreground/40 blur-md animate-mascot-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneMock = () => (
  <div className="relative w-[170px] sm:w-[200px] aspect-[9/19] rounded-[2rem] bg-foreground/90 p-1.5 shadow-card">
    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-foreground rounded-b-2xl z-10" />
    <div className="relative w-full h-full rounded-[1.65rem] bg-gradient-to-b from-background to-secondary/40 overflow-hidden p-3 pt-7">
      <div className="text-[9px] font-semibold tracking-wider uppercase text-primary">Cartifi</div>
      <div className="mt-1 text-[10px] font-semibold leading-tight">Your cheapest cart</div>
      <div className="mt-2 space-y-1.5">
        {["Milk 1L", "Bread", "Eggs (10)", "Apples 1kg"].map((it, i) => (
          <div key={it} className="flex items-center justify-between rounded-md bg-card/80 border border-border px-2 py-1 text-[8px]">
            <span className="truncate">{it}</span>
            <span className="text-primary font-semibold">✓</span>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-md bg-gradient-cta text-primary-foreground text-[8px] font-semibold py-1 text-center">
        Save 24%
      </div>
    </div>
  </div>
);
