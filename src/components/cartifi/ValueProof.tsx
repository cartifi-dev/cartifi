import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { name: "Mléko 1 L", a: 28, b: 24, c: 22 },
  { name: "Chléb", a: 45, b: 39, c: 36 },
  { name: "Kuřecí prsa 1 kg", a: 199, b: 189, c: 169 },
  { name: "Jablka 1 kg", a: 49, b: 42, c: 38 },
  { name: "Vejce (10)", a: 78, b: 72, c: 65 },
];

const totals = {
  a: items.reduce((s, i) => s + i.a, 0),
  b: items.reduce((s, i) => s + i.b, 0),
  c: items.reduce((s, i) => s + i.c, 0),
};

function useCountUp(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

export const ValueProof = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const ta = useCountUp(totals.a, run);
  const tb = useCountUp(totals.b, run);
  const tc = useCountUp(totals.c, run);
  const savings = useCountUp(totals.a - totals.c, run);

  return (
    <section id="proof" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-medium text-orange uppercase tracking-widest mb-3">Real comparison</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Same list. <span className="text-gradient">Different total.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Same five items, three stores. The gap adds up — every week.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto reveal">
          <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
            <div className="grid grid-cols-4 gap-2 p-5 border-b border-border bg-secondary/40 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <div>Item</div>
              <div className="text-right">Albert</div>
              <div className="text-right">Tesco</div>
              <div className="text-right">Cartifi pick</div>
            </div>
            {items.map((it) => {
              const min = Math.min(it.a, it.b, it.c);
              const cell = (v: number) =>
                `text-right tabular-nums ${v === min ? "text-success font-semibold" : "text-muted-foreground"}`;
              return (
                <div key={it.name} className="grid grid-cols-4 gap-2 px-5 py-4 border-b border-border/60 items-center text-sm">
                  <div className="font-medium">{it.name}</div>
                  <div className={cell(it.a)}>{it.a} Kč</div>
                  <div className={cell(it.b)}>{it.b} Kč</div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-soft text-success font-semibold tabular-nums">
                      <Check className="w-3.5 h-3.5" /> {it.c} Kč
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-4 gap-2 px-5 py-5 bg-secondary/30 items-center font-semibold">
              <div>Total</div>
              <div className="text-right text-muted-foreground tabular-nums">{ta} Kč</div>
              <div className="text-right text-muted-foreground tabular-nums">{tb} Kč</div>
              <div className="text-right text-success tabular-nums text-lg">{tc} Kč</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-success-soft border border-success/20 px-6 py-3">
              <span className="text-success font-semibold">You save {savings} Kč</span>
              <span className="text-muted-foreground text-sm">on this list alone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
