import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import carfiHero from "@/assets/carfi-hero.mp4.asset.json";
import carfiPoster from "@/assets/carfi-hero-frame.jpg";

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
 * HeroStage — cinematic 3D hero video. The phone + mascot live in the same
 * 3D environment; mascot stays outside the phone screen at all times.
 */
const HeroStage = ({ alt }: { alt: string }) => {
  return (
    <div className="relative mx-auto w-full max-w-[520px] aspect-[9/16]">
      {/* Warm ambient glow behind the video */}
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-warm opacity-30 blur-3xl animate-soft-pulse pointer-events-none" />
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-card">
        <video
          className="w-full h-full object-cover"
          src={carfiHero.url}
          poster={carfiPoster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
        />
        {/* Soft warm overlay to blend with page background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      </div>
    </div>
  );
};
