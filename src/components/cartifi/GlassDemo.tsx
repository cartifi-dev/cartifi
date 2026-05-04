import { useState } from "react";
import { ShoppingCart, Sparkles, Share2, PiggyBank, ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Translucent glassmorphism "How it works" demo placed right below the hero.
 * Horizontal swipe / scroll on mobile, arrow controls on desktop.
 */
export const GlassDemo = () => {
  const { t, formatPrice } = useLang();
  const [active, setActive] = useState(0);

  const steps = [
    {
      icon: ShoppingCart,
      title: t.how.steps[0]?.title ?? "Create your cart",
      body: t.how.steps[0]?.body ?? "Add what you need — Cartifi handles the rest.",
    },
    {
      icon: Sparkles,
      title: t.how.steps[1]?.title ?? "Optimize prices",
      body: t.how.steps[1]?.body ?? "We compare every store in seconds.",
    },
    {
      icon: Share2,
      title: t.how.steps[2]?.title ?? "Share cart",
      body: t.how.steps[2]?.body ?? "Send to family, split it, sync it.",
    },
    {
      icon: PiggyBank,
      title: t.how.steps[3]?.title ?? "Save money",
      body: `${t.how.steps[3]?.body ?? "Average savings of"} ${formatPrice(247)}/mo.`,
    },
  ];

  const go = (dir: 1 | -1) =>
    setActive((a) => Math.min(steps.length - 1, Math.max(0, a + dir)));

  return (
    <section id="how-glass" className="relative -mt-8 lg:-mt-16 mb-16 lg:mb-24">
      <div className="container">
        <div className="relative reveal">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-3xl" />

          <div className="glass-panel rounded-[2rem] p-5 sm:p-8 lg:p-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                  How it works
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                  From cart to <span className="text-gradient">savings</span>
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  disabled={active === 0}
                  aria-label="Previous step"
                  className="h-10 w-10 rounded-full glass border border-border/60 flex items-center justify-center disabled:opacity-40 hover:bg-card transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  disabled={active === steps.length - 1}
                  aria-label="Next step"
                  className="h-10 w-10 rounded-full glass border border-border/60 flex items-center justify-center disabled:opacity-40 hover:bg-card transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal scroll / swipe rail */}
            <div className="mt-6 -mx-2 px-2 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2">
              <div className="flex gap-4">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`snap-start shrink-0 text-left w-[78%] sm:w-[55%] md:w-[280px] lg:w-[300px]
                        rounded-2xl p-5 border transition-all duration-300
                        ${isActive
                          ? "bg-card/85 border-primary/40 shadow-card scale-[1.01]"
                          : "bg-card/55 border-border/60 hover:bg-card/75"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-9 w-9 rounded-xl flex items-center justify-center
                          ${isActive ? "bg-gradient-cta text-primary-foreground shadow-soft" : "bg-primary/10 text-primary"}`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-4 flex items-center gap-2">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-primary" : "w-3 bg-foreground/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};