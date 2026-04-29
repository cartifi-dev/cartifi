import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import mascotHappy from "@/assets/mascot-happy.jpg";
import { useLang } from "@/i18n/LanguageContext";

export const FinalCTA = () => {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("loading");
    setTimeout(() => setState("done"), 900);
  };

  return (
  <section id="final-cta" className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-orange/15 blur-3xl" />
    </div>
    <div className="container">
      <div className="max-w-4xl mx-auto reveal">
        <div className="relative rounded-[2.5rem] border border-border/60 bg-card/80 backdrop-blur shadow-card overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-warm opacity-20 blur-2xl -z-10" />
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-0">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                {t.finalCta2.eyebrow}
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
                {t.finalCta2.titleA} <span className="text-gradient">{t.finalCta2.titleB}</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">{t.finalCta2.subtitle}</p>

              <form onSubmit={submit} className="mt-8">
                <div className="bg-background rounded-3xl border border-border shadow-soft p-3 flex flex-col sm:flex-row gap-3 items-stretch">
                  <Input
                    type="email"
                    required
                    placeholder={t.finalCta2.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={state !== "idle"}
                    className="h-14 rounded-2xl bg-secondary/40 border-0 focus-visible:ring-primary/40 text-base px-5 flex-1"
                  />
                  <Button type="submit" variant="cta" size="xl" disabled={state !== "idle"} className="sm:w-auto w-full">
                    {state === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> {t.finalCta2.ctaLoading}</>}
                    {state === "idle" && <>{t.finalCta2.ctaIdle} <ArrowRight className="w-4 h-4" /></>}
                    {state === "done" && <><Check className="w-4 h-4" /> {t.finalCta2.ctaDone}</>}
                  </Button>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.finalCta2.footnote}</p>

                {state === "done" && (
                  <div className="mt-6 rounded-2xl bg-success-soft border border-success/20 p-5 animate-fade-in">
                    <div className="inline-flex items-center gap-2 text-success font-semibold">
                      <Check className="w-5 h-5" /> {t.finalCta2.welcome}
                    </div>
                    <p className="mt-2 text-sm text-foreground/80">{t.finalCta2.welcomeBody}</p>
                  </div>
                )}
              </form>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-warm opacity-25" />
              <img
                src={mascotHappy}
                alt={t.finalCta.mascotAlt}
                loading="lazy"
                width={800}
                height={900}
                className="relative w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
