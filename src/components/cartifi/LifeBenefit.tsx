import { Footprints, Mountain, Coffee, Heart } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const LifeBenefit = () => {
  const { t } = useLang();
  const items = [
    { icon: Footprints, label: t.life.walk },
    { icon: Mountain, label: t.life.hike },
    { icon: Coffee, label: t.life.coffee },
    { icon: Heart, label: t.life.family },
  ];
  return (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-soft opacity-60" />
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          {t.life.titleA} <span className="text-gradient">{t.life.titleB}</span>
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto reveal">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="rounded-3xl bg-card border border-border p-6 lg:p-8 text-center hover-lift">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-warm/40 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
            </div>
            <p className="font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
