import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import shibaMascot from "@/assets/shiba-running.png";

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
          <HeroStage alt={t.hero.mascotAlt} />
        </div>
      </div>
    </section>
  );
};

/**
 * HeroStage — phone mockup is one element, mascot is a SIBLING element
 * that orbits OUTSIDE the phone container. Mascot never enters the phone UI.
 */
const HeroStage = ({ alt }: { alt: string }) => {
  return (
    <div
      className="relative mx-auto w-full max-w-[460px] aspect-[9/16]"
      style={{ ["--orbit-rx" as any]: "180px", ["--orbit-ry" as any]: "230px" }}
    >
      {/* Ambient warm glow */}
      <div className="absolute inset-6 rounded-[3rem] bg-gradient-warm opacity-30 blur-3xl animate-soft-pulse pointer-events-none" />

      {/* Layer 2 — Phone mockup (clean, untouched) */}
      <PhoneMock />

      {/* Layer 3 — Mascot orbiting OUTSIDE the phone, sibling not child */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-x">
          <div className="animate-orbit-y">
            <div className="animate-mascot-scale">
              <div className="animate-mascot-depth">
                <div className="animate-mascot-face">
                  <img
                    src={shibaMascot}
                    alt={alt}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_12px_18px_rgba(30,60,120,0.25)]"
                    style={{ filter: "none", opacity: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Static, premium phone mockup. Self-contained — no mascot inside. */
const PhoneMock = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[58%] aspect-[9/19] animate-phone-float">
      <div className="relative w-full h-full rounded-[2.2rem] bg-foreground/95 p-[6px] shadow-card">
        <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-gradient-soft">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-foreground/90 z-10" />

          {/* App UI */}
          <div className="absolute inset-0 pt-8 px-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground px-1">
              <span className="font-semibold text-foreground">Cartifi</span>
              <span className="px-2 py-0.5 rounded-full bg-success/15 text-success font-semibold">−24%</span>
            </div>

            <div className="rounded-xl bg-card shadow-soft p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Mléko 1 L</div>
                <div className="text-xs font-semibold">29 Kč</div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-success/15 text-success font-semibold">−12%</span>
            </div>
            <div className="rounded-xl bg-card shadow-soft p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Chléb</div>
                <div className="text-xs font-semibold">34 Kč</div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-success/15 text-success font-semibold">−18%</span>
            </div>
            <div className="rounded-xl bg-card shadow-soft p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Vejce (10)</div>
                <div className="text-xs font-semibold">62 Kč</div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-success/15 text-success font-semibold">−9%</span>
            </div>

            <div className="mt-auto mb-3 rounded-2xl bg-gradient-cta p-3 text-primary-foreground shadow-glow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider opacity-90">Ušetřeno</span>
                <span className="text-base font-bold">284 Kč</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-primary-foreground/20 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-primary-foreground/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
