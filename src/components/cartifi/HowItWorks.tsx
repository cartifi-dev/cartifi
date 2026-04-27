import { ListPlus, Wand2, ShoppingBag } from "lucide-react";

const steps = [
  { icon: ListPlus, title: "Add your list", body: "Type, paste, or photograph what you need." },
  { icon: Wand2, title: "We compare", body: "Cartifi checks every store, every price, instantly." },
  { icon: ShoppingBag, title: "Get the cheapest cart", body: "One result. Lowest total. Done." },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 lg:py-32">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Three steps. <span className="text-gradient">That's it.</span>
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="rounded-3xl bg-card border border-border p-8 h-full hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-primary-soft flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
