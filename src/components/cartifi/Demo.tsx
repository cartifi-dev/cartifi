import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Demo = () => {
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
    <section id="demo" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-medium text-orange uppercase tracking-widest mb-3">{t.demo.eyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.demo.titleA} <span className="text-gradient">{t.demo.titleB}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.demo.subtitle}
          </p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-xl mx-auto reveal">
          <div className="bg-card rounded-3xl border border-border shadow-card p-3 sm:p-3 flex flex-col sm:flex-row gap-3 items-stretch">
            <Input
              type="email"
              required
              placeholder={t.demo.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state !== "idle"}
              className="h-14 rounded-2xl bg-secondary/40 border-0 focus-visible:ring-primary/40 text-base px-5 flex-1"
            />
            <Button
              type="submit"
              variant="cta"
              size="xl"
              disabled={state !== "idle"}
              className="sm:w-auto w-full"
            >
              {state === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> {t.demo.ctaLoading}</>}
              {state === "idle" && <>{t.demo.ctaIdle} <ArrowRight className="w-4 h-4" /></>}
              {state === "done" && <><Check className="w-4 h-4" /> {t.demo.ctaDone}</>}
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {t.demo.footnote}
          </p>

          {state === "done" && (
            <div className="mt-6 rounded-3xl bg-success-soft border border-success/20 p-6 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 text-success font-semibold">
                <Check className="w-5 h-5" /> {t.demo.welcome}
              </div>
              <p className="mt-2 text-sm text-foreground/80">
                {t.demo.welcomeBody}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
