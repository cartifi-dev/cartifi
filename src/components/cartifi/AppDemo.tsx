import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Check, Search, Share2, Sparkles, MessageCircle, Link2, Mail } from "lucide-react";

/**
 * Sticky horizontal-scroll showcase of the app flow.
 * Desktop: section pins, scroll translates the panel rail horizontally.
 * Mobile: falls back to a snap-scroll carousel.
 */
export const AppDemo = () => {
  const { t } = useLang();
  const steps = t.appDemo.steps;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Total scrollable distance inside the sticky section
      const total = el.offsetHeight - vh;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      setProgress(p);
      setActive(Math.min(steps.length - 1, Math.round(p * (steps.length - 1))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", sync);
    };
  }, [steps.length]);

  // Translate the rail. Each step takes a full viewport width.
  const translatePct = -(progress * (steps.length - 1) * 100);

  return (
    <section
      ref={sectionRef}
      id="app-demo"
      className="relative bg-background"
      style={isDesktop ? { height: `${steps.length * 100}vh` } : undefined}
      aria-label="App flow demo"
    >
      {/* MOBILE fallback: snap carousel, hidden on lg */}
      <div className="lg:hidden">
        <div className="container py-20">
          <Header />
          <div className="mt-10 -mx-4 px-4 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-6">
            {steps.map((s, i) => (
              <div key={i} className="snap-center shrink-0 w-[80%] max-w-[340px]">
                <StepCard step={s} index={i} active />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP sticky horizontal scroll */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="relative h-full container flex flex-col">
          <div className="pt-24">
            <Header />
          </div>

          {/* progress dots */}
          <div className="mt-6 flex items-center gap-3">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-primary" : "w-6 bg-foreground/15"
                }`}
              />
            ))}
            <span className="ml-3 text-xs text-muted-foreground">
              {active + 1} / {steps.length}
            </span>
          </div>

          {/* rail */}
          <div className="flex-1 mt-8 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-150 ease-out will-change-transform"
              style={{ width: `${steps.length * 100}%`, transform: `translateX(${translatePct}%)` }}
            >
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="h-full shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  <StepCard step={s} index={i} active={i === active} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  const { t } = useLang();
  return (
    <div className="max-w-2xl reveal">
      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-primary/80">
        <Sparkles className="w-3.5 h-3.5" /> {t.appDemo.eyebrow}
      </span>
      <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight">
        {t.appDemo.titleA} <span className="text-gradient">{t.appDemo.titleB}</span>
      </h2>
      <p className="mt-3 text-muted-foreground">{t.appDemo.subtitle}</p>
    </div>
  );
};

const StepCard = ({
  step,
  index,
  active,
}: {
  step: ReturnType<typeof useLang>["t"]["appDemo"]["steps"][number];
  index: number;
  active: boolean;
}) => {
  return (
    <div
      className={`grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-16 w-full max-w-5xl transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
      }`}
    >
      <div className="order-2 lg:order-1 max-w-md">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary">
          {step.tag}
        </span>
        <h3 className="mt-2 text-3xl lg:text-4xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-3 text-muted-foreground text-base lg:text-lg">{step.body}</p>
      </div>
      <div className="order-1 lg:order-2 mx-auto">
        <PhoneFrame>
          <PhoneScreen index={index} step={step} />
        </PhoneFrame>
      </div>
    </div>
  );
};

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[2.5rem] bg-foreground/90 p-2 shadow-glow">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
    <div className="relative w-full h-full rounded-[2rem] bg-background overflow-hidden">
      {children}
    </div>
  </div>
);

// ---- per-step screen content ----
const PhoneScreen = ({
  index,
  step,
}: {
  index: number;
  step: ReturnType<typeof useLang>["t"]["appDemo"]["steps"][number];
}) => {
  if (index === 0) return <ScreenCart screen={step.screen as any} />;
  if (index === 1) return <ScreenOptimize screen={step.screen as any} />;
  if (index === 2) return <ScreenShare screen={step.screen as any} />;
  return <ScreenSave screen={step.screen as any} />;
};

const ScreenCart = ({
  screen,
}: {
  screen: { header: string; search: string; items: { name: string; qty: string }[]; cta: string };
}) => (
  <div className="h-full flex flex-col p-4 pt-8">
    <p className="text-xs text-muted-foreground">9:41</p>
    <h4 className="mt-2 text-base font-semibold">{screen.header}</h4>
    <div className="mt-3 flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-xs text-muted-foreground">
      <Search className="w-3.5 h-3.5" />
      <span>{screen.search}</span>
    </div>
    <div className="mt-3 space-y-2 flex-1 overflow-hidden">
      {screen.items.map((it, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-xl bg-card border border-border px-3 py-2.5 text-xs"
          style={{ animation: `fade-in 0.4s ease-out ${i * 0.08}s both` }}
        >
          <span className="font-medium truncate">{it.name}</span>
          <span className="text-primary font-semibold shrink-0 ml-2">{it.qty}</span>
        </div>
      ))}
    </div>
    <button className="mt-3 w-full rounded-full bg-gradient-cta text-primary-foreground text-xs font-semibold py-2.5 shadow-soft">
      {screen.cta}
    </button>
  </div>
);

const ScreenOptimize = ({
  screen,
}: {
  screen: { header: string; sub: string; stores: string[]; picked: string };
}) => (
  <div className="h-full flex flex-col p-4 pt-8">
    <p className="text-xs text-muted-foreground">9:41</p>
    <h4 className="mt-2 text-base font-semibold">{screen.header}</h4>
    <p className="text-xs text-muted-foreground">{screen.sub}</p>
    <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
      <div className="h-full w-2/3 bg-gradient-cta animate-pulse" />
    </div>
    <div className="mt-4 space-y-2 flex-1">
      {screen.stores.map((s, i) => (
        <div
          key={s}
          className={`flex items-center justify-between rounded-xl border px-3 py-3 text-xs ${
            i === 1
              ? "border-primary bg-primary/5"
              : "border-border bg-card"
          }`}
        >
          <span className="font-medium">{s}</span>
          <span className={`font-semibold ${i === 1 ? "text-primary" : "text-muted-foreground line-through"}`}>
            {[412, 358, 401][i]} Kč
          </span>
        </div>
      ))}
    </div>
    <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-primary self-start">
      <Check className="w-3 h-3" /> {screen.picked}
    </div>
  </div>
);

const ScreenShare = ({
  screen,
}: {
  screen: { header: string; link: string; options: string[] };
}) => {
  const icons = [MessageCircle, MessageCircle, Link2, Mail];
  return (
    <div className="h-full flex flex-col p-4 pt-8">
      <p className="text-xs text-muted-foreground">9:41</p>
      <h4 className="mt-2 text-base font-semibold">{screen.header}</h4>
      <div className="mt-3 rounded-xl border border-border bg-card p-3">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Link</p>
        <p className="text-xs font-mono mt-0.5 truncate">{screen.link}</p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 flex-1">
        {screen.options.map((o, i) => {
          const Icon = icons[i] ?? Share2;
          return (
            <button
              key={o}
              className="flex flex-col items-center justify-center rounded-xl bg-card border border-border py-3 text-[11px] font-medium gap-1.5 hover:border-primary/40 transition-colors"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-center px-1 leading-tight">{o}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ScreenSave = ({
  screen,
}: {
  screen: { header: string; amount: string; summary: string; cta: string };
}) => (
  <div className="h-full flex flex-col items-center justify-center p-4 text-center">
    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
      <Check className="w-6 h-6 text-primary" />
    </div>
    <p className="mt-4 text-xs text-muted-foreground">{screen.header}</p>
    <p className="text-3xl font-bold tracking-tight text-gradient">{screen.amount}</p>
    <p className="mt-2 text-[11px] text-muted-foreground">{screen.summary}</p>
    <button className="mt-5 w-full rounded-full bg-gradient-cta text-primary-foreground text-xs font-semibold py-2.5 shadow-soft">
      {screen.cta}
    </button>
  </div>
);
