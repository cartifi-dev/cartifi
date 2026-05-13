import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { ShoppingCart, ShoppingBasket, Milk, Apple, Egg, Carrot, Croissant } from "lucide-react";

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
 * HeroStage — dark cinematic basket showcase with floating product orbs,
 * glowing energy lines, and glassmorphism rows.
 */
const baskets = [
  { key: "cheap", title: "Nejlevnější košík", price: "1 246 Kč", color: "#22c55e", glow: "34, 197, 94" },
  { key: "quality", title: "Košík nejlepší kvality", price: "1 589 Kč", color: "#f59e0b", glow: "245, 158, 11" },
  { key: "family", title: "Rodinný košík", price: "1 450 Kč", color: "#60a5fa", glow: "96, 165, 250" },
  { key: "eco", title: "Eco / Zdravý košík", price: "1 523 Kč", color: "#16a34a", glow: "22, 163, 74" },
  { key: "smart", title: "Smíšený chytrý košík", price: "1 312 Kč", color: "#c084fc", glow: "192, 132, 252" },
];

const orbs = [
  { side: "left",  top: "8%",  Icon: Milk,      label: "Mléko",   price: "28,90 Kč", glow: "96,165,250" },
  { side: "right", top: "22%", Icon: Apple,     label: "Jablko",  price: "9,90 Kč",  glow: "239,68,68"  },
  { side: "left",  top: "46%", Icon: Croissant, label: "Pečivo",  price: "12,50 Kč", glow: "245,158,11" },
  { side: "right", top: "60%", Icon: Egg,       label: "Vejce",   price: "49,00 Kč", glow: "250,204,21" },
  { side: "left",  top: "78%", Icon: Carrot,    label: "Mrkev",   price: "2,90 Kč",  glow: "249,115,22" },
] as const;

const HeroStage = ({ alt }: { alt: string }) => {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px] aspect-[9/16] select-none"
      role="img"
      aria-label={alt}
    >
      {/* Outer ambient glows */}
      <div className="pointer-events-none absolute -inset-10 rounded-[3.5rem] opacity-80 blur-3xl"
           style={{ background: "radial-gradient(40% 35% at 20% 25%, rgba(34,211,238,0.35), transparent 60%), radial-gradient(45% 35% at 85% 75%, rgba(245,158,11,0.30), transparent 60%)" }} />

      {/* Phone glass frame */}
      <div
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #0d1117 0%, #0a0d12 40%, #05070a 100%)",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.7), inset 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Inner nebula glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-50"
               style={{ background: "radial-gradient(circle, rgba(34,211,238,0.45), transparent 70%)" }} />
          <div className="absolute bottom-0 -right-10 w-80 h-80 rounded-full blur-3xl opacity-50"
               style={{ background: "radial-gradient(circle, rgba(245,158,11,0.45), transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
               style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
        </div>

        {/* Header */}
        <div className="relative pt-8 pb-4 px-6 text-center">
          <div className="inline-flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-white/90" strokeWidth={1.6} />
            <span className="text-white text-xl font-semibold tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
              cartifi
            </span>
          </div>
          <p className="mt-1 text-[11px] font-light text-white/50 tracking-wide">
            Porovnáváme ceny za vás
          </p>
        </div>

        {/* Basket list */}
        <div className="relative px-4 space-y-2.5">
          {baskets.map((b, i) => (
            <div
              key={b.key}
              className="flex items-center justify-between rounded-2xl px-3 py-2.5 border border-white/10 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px -10px rgba(${b.glow},0.5)`,
                animation: `basket-rise 700ms ${150 + i * 110}ms cubic-bezier(0.22,1,0.36,1) both`,
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(${b.glow},0.35), rgba(${b.glow},0.08))`,
                    boxShadow: `0 0 16px rgba(${b.glow},0.45), inset 0 0 0 1px rgba(${b.glow},0.4)`,
                  }}
                >
                  <ShoppingBasket className="w-4.5 h-4.5" style={{ color: b.color }} strokeWidth={2} />
                </div>
                <span className="text-[13px] font-medium text-white/85 truncate">{b.title}</span>
              </div>
              <span
                className="text-[14px] font-bold tabular-nums tracking-tight"
                style={{ color: b.color, textShadow: `0 0 12px rgba(${b.glow},0.65)` }}
              >
                {b.price}
              </span>
            </div>
          ))}
        </div>

        {/* Savings */}
        <div className="relative mt-4 mx-4 rounded-2xl border border-emerald-400/30 px-4 py-3 flex items-center justify-between"
             style={{
               background: "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(16,185,129,0.05))",
               boxShadow: "0 0 30px -8px rgba(16,185,129,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
             }}>
          <span className="text-[12px] uppercase tracking-widest text-white/70 font-medium">Vaše úspora</span>
          <span className="text-emerald-400 text-lg font-bold tabular-nums" style={{ textShadow: "0 0 14px rgba(16,185,129,0.7)" }}>
            237 Kč
          </span>
        </div>

        {/* Bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Floating product orbs + energy lines */}
      {orbs.map((o, i) => {
        const isLeft = o.side === "left";
        return (
          <div
            key={i}
            className="absolute z-10"
            style={{
              top: o.top,
              [isLeft ? "left" : "right"]: "-14px",
              animation: `orb-bob 4.${(i % 5) + 2}s ease-in-out ${i * 0.3}s infinite`,
            }}
          >
            {/* Energy line */}
            <div
              className="absolute top-1/2 h-px"
              style={{
                [isLeft ? "left" : "right"]: "100%",
                width: "42px",
                background: `linear-gradient(${isLeft ? "to right" : "to left"}, rgba(${o.glow},0.9), rgba(${o.glow},0))`,
                boxShadow: `0 0 8px rgba(${o.glow},0.7)`,
                animation: `line-pulse 2.${i}s ease-in-out infinite`,
              }}
            />
            <div
              className="flex items-center gap-2 rounded-full backdrop-blur-md border px-2.5 py-1.5"
              style={{
                background: `linear-gradient(135deg, rgba(${o.glow},0.18), rgba(255,255,255,0.04))`,
                borderColor: `rgba(${o.glow},0.45)`,
                boxShadow: `0 0 22px -4px rgba(${o.glow},0.6)`,
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(${o.glow},0.55), rgba(${o.glow},0.1))`,
                  boxShadow: `inset 0 0 0 1px rgba(${o.glow},0.5)`,
                }}
              >
                <o.Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-tight pr-1">
                <div className="text-[9px] uppercase tracking-wider text-white/60 font-light">{o.label}</div>
                <div className="text-[11px] font-bold text-white tabular-nums" style={{ textShadow: `0 0 8px rgba(${o.glow},0.7)` }}>
                  {o.price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
