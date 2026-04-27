import { Smartphone, Clock, Layers, Sparkles } from "lucide-react";
import mascotCalm from "@/assets/mascot-calm.jpg";

export const BeforeAfter = () => (
  <section className="py-24 lg:py-32 bg-gradient-soft">
    <div className="container">
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-6 items-center">
        {/* Before */}
        <div className="reveal">
          <div className="rounded-3xl bg-card/80 border border-border p-8 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Before</p>
            <h3 className="text-2xl font-semibold mb-6">Comparing, switching, hoping.</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-muted-foreground/70" /> 5 store apps open</li>
              <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-muted-foreground/70" /> 30+ minutes lost each week</li>
              <li className="flex items-center gap-3"><Layers className="w-5 h-5 text-muted-foreground/70" /> Flyers, screenshots, second-guessing</li>
            </ul>
          </div>
        </div>

        {/* Center quote */}
        <div className="reveal text-center max-w-xs px-2">
          <p className="font-[Fraunces] text-2xl lg:text-3xl leading-snug">
            You can keep comparing… <span className="text-gradient italic">or let it be done for you.</span>
          </p>
        </div>

        {/* After */}
        <div className="reveal">
          <div className="rounded-3xl bg-card border border-border p-8 shadow-card relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <p className="text-xs uppercase tracking-widest text-primary mb-4">After</p>
            <h3 className="text-2xl font-semibold mb-6">One clean result. Done.</h3>
            <div className="rounded-2xl overflow-hidden mb-5 border border-border/60">
              <img src={mascotCalm} alt="Calm Cartifi mascot" loading="lazy" width={1200} height={900} className="w-full h-44 object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-3">
              <div className="text-3xl font-semibold tabular-nums">487 Kč</div>
              <div className="text-sm text-success font-medium">−128 Kč saved</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-orange" /> 12 items, optimized across 3 stores in 2.4s
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
