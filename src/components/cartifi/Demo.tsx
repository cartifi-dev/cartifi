import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export const Demo = () => {
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
          <p className="text-sm font-medium text-orange uppercase tracking-widest mb-3">Be first in line</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            See your savings <span className="text-gradient">before everyone else.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Drop your email and we'll send you early access and your first optimized cart.
          </p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-xl mx-auto reveal">
          <div className="bg-card rounded-3xl border border-border shadow-card p-3 sm:p-3 flex flex-col sm:flex-row gap-3 items-stretch">
            <Input
              type="email"
              required
              placeholder="you@email.com"
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
              {state === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> Saving spot…</>}
              {state === "idle" && <>Get early access <ArrowRight className="w-4 h-4" /></>}
              {state === "done" && <><Check className="w-4 h-4" /> You're in</>}
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Free. No spam. One email when Cartifi opens.
          </p>

          {state === "done" && (
            <div className="mt-6 rounded-3xl bg-success-soft border border-success/20 p-6 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 text-success font-semibold">
                <Check className="w-5 h-5" /> Welcome aboard
              </div>
              <p className="mt-2 text-sm text-foreground/80">
                We saved your spot. Check your inbox soon for your first cheapest cart.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
