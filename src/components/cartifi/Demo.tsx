import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Sparkles, Check, Loader2 } from "lucide-react";

const stores = ["Albert", "Lidl", "Tesco", "Billa", "Kaufland"];

function priceFor(name: string) {
  const seed = name.toLowerCase().split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  const base = 25 + (seed % 90);
  return [0, 1, 2].map((i) => Math.max(12, Math.round(base + ((seed * (i + 3)) % 18) - 8)));
}

export const Demo = () => {
  const [items, setItems] = useState(["", "", ""]);
  const [result, setResult] = useState<null | { rows: any[]; total: number; saved: number }>(null);
  const [loading, setLoading] = useState(false);

  const update = (i: number, v: string) => setItems((s) => s.map((x, j) => (j === i ? v : x)));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = items.map((s) => s.trim()).filter(Boolean);
    if (!list.length) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const rows = list.map((name) => {
        const prices = priceFor(name);
        const min = Math.min(...prices);
        const idx = prices.indexOf(min);
        const max = Math.max(...prices);
        return { name, store: stores[idx], price: min, was: max };
      });
      const total = rows.reduce((s, r) => s + r.price, 0);
      const saved = rows.reduce((s, r) => s + (r.was - r.price), 0);
      setResult({ rows, total, saved });
      setLoading(false);
    }, 1100);
  };

  return (
    <section id="demo" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-sm font-medium text-orange uppercase tracking-widest mb-3">Try it now</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Enter 3 items <span className="text-gradient">you buy often.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We'll show you the cheapest cart across stores. No signup.
          </p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-2xl mx-auto reveal">
          <div className="bg-card rounded-3xl border border-border shadow-card p-6 lg:p-8">
            <div className="space-y-3">
              {items.map((v, i) => (
                <Input
                  key={i}
                  placeholder={["e.g. Mléko 1 L", "e.g. Chléb", "e.g. Kuřecí prsa"][i]}
                  value={v}
                  onChange={(e) => update(i, e.target.value)}
                  className="h-12 rounded-2xl bg-secondary/40 border-border focus-visible:ring-primary/40"
                />
              ))}
            </div>
            <Button type="submit" variant="cta" size="xl" className="w-full mt-5" disabled={loading}>
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Finding cheapest…</> : <><Sparkles className="w-4 h-4" /> See cheapest cart</>}
            </Button>
          </div>

          {result && (
            <div className="mt-6 bg-card rounded-3xl border border-border shadow-card p-6 lg:p-8 animate-fade-in">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Your cheapest cart</p>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-success-soft text-success">Saved {result.saved} Kč</span>
              </div>
              <div className="divide-y divide-border/60">
                {result.rows.map((r) => (
                  <div key={r.name} className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">Best at {r.store}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold tabular-nums">{r.price} Kč</div>
                      <div className="text-xs text-muted-foreground line-through tabular-nums">{r.was} Kč</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-success">
                  <Check className="w-4 h-4" /> <span className="font-medium">Optimized in 2.1s</span>
                </div>
                <div className="text-2xl font-semibold tabular-nums">{result.total} Kč</div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
