import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mascotHappy from "@/assets/mascot-happy.jpg";
import { useLang } from "@/i18n/LanguageContext";

export const FinalCTA = () => {
  const { t } = useLang();
  return (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" />
    </div>
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="reveal">
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {t.finalCta.titleA} <span className="text-gradient">{t.finalCta.titleB}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t.finalCta.sub}</p>
          <div className="mt-8">
            <Button variant="cta" size="xl" asChild>
              <a href="#demo">{t.finalCta.cta} <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t.finalCta.tagline}</p>
        </div>
        <div className="reveal flex justify-center">
          <div className="relative max-w-md w-full">
            <div className="absolute -inset-6 bg-gradient-warm opacity-30 blur-3xl rounded-[2.5rem]" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-card border border-border/60">
              <img src={mascotHappy} alt={t.finalCta.mascotAlt} loading="lazy" width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
