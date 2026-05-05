import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Check, Search, Share2, Sparkles, ChevronLeft, ChevronRight, MessageCircle, Link2, Mail } from "lucide-react";

/**
 * Interactive phone demo. One slide visible at a time.
 * Arrow controls (desktop + mobile) and swipe (mobile).
 */
export const AppDemo = () => {
  const { t } = useLang();
  const steps = t.appDemo.steps;
  const [active, setActive] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = (dir: 1 | -1) =>
    setActive((a) => Math.min(steps.length - 1, Math.max(0, a + dir)));

  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  return (
    <section id="app-demo" className="py-24 lg:py-32 bg-background" aria-label="Cartifi live demo">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary/80">
            <Sparkles className="w-3.5 h-3.5" /> {t.appDemo.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight">
            See it <span className="text-gradient">in action</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.appDemo.subtitle}</p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-4 sm:gap-8">
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Previous slide"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-card border border-border shadow-soft flex items-center justify-center disabled:opacity-30 hover:border-primary/40 hover:shadow-card transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            className="relative w-[260px] sm:w-[300px] aspect-[9/19] reveal"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <PhoneFrame>
              <div className="absolute inset-0">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      i === active
                        ? "opacity-100 translate-x-0"
                        : i < active
                          ? "opacity-0 -translate-x-6 pointer-events-none"
                          : "opacity-0 translate-x-6 pointer-events-none"
                    }`}
                  >
                    <PhoneScreen index={i} step={s} />
                  </div>
                ))}
              </div>
            </PhoneFrame>
          </div>

          <button
            onClick={() => go(1)}
            disabled={active === steps.length - 1}
            aria-label="Next slide"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-card border border-border shadow-soft flex items-center justify-center disabled:opacity-30 hover:border-primary/40 hover:shadow-card transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 max-w-md mx-auto text-center min-h-[3.5rem]">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary">
            {steps[active].tag}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{steps[active].title}</h3>
        </div>
      </div>
    </section>
  );
};

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-full rounded-[2.5rem] bg-foreground/90 p-2 shadow-glow">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
    <div className="relative w-full h-full rounded-[2rem] bg-background overflow-hidden">
      {children}
    </div>
  </div>
);

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
}) => {
  const { formatPrice } = useLang();
  return (
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
              i === 1 ? "border-primary bg-primary/5" : "border-border bg-card"
            }`}
          >
            <span className="font-medium">{s}</span>
            <span className={`font-semibold ${i === 1 ? "text-primary" : "text-muted-foreground line-through"}`}>
              {formatPrice([412, 358, 401][i])}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-primary self-start">
        <Check className="w-3 h-3" /> {screen.picked}
      </div>
    </div>
  );
};

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
  screen: { header: string; summary: string; cta: string };
}) => {
  const { formatPrice } = useLang();
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
        <Check className="w-6 h-6 text-primary" />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{screen.header}</p>
      <p className="text-3xl font-bold tracking-tight text-gradient">{formatPrice(247)}</p>
      <p className="mt-2 text-[11px] text-muted-foreground">{screen.summary}</p>
      <button className="mt-5 w-full rounded-full bg-gradient-cta text-primary-foreground text-xs font-semibold py-2.5 shadow-soft">
        {screen.cta}
      </button>
    </div>
  );
};
