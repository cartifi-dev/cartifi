import { ListPlus, Wand2, ShoppingBag, PiggyBank } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [ListPlus, Wand2, ShoppingBag, PiggyBank];

export const HowItWorks = () => {
  const { t } = useLang();
  // Pull first 3 from translations, append a 4th "Save money" step.
  const baseSteps = t.how.steps.slice(0, 3);
  const saveStep = {
    title: t.how.steps[3]?.title ?? "Save money",
    body: t.how.steps[3]?.body ?? "Keep more in your pocket — every single week.",
  };
  const steps = [...baseSteps, saveStep].map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <section id="how" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-3">
            {t.nav.how}
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.how.titleA} <span className="text-gradient">{t.how.titleB}</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="rounded-3xl bg-card border border-border p-7 h-full hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-primary-soft flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                    Step 0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
