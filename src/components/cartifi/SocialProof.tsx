const quotes = [
  { q: "Saved almost 600 Kč on my first weekly cart. I'm not going back.", a: "Tereza", c: "Praha" },
  { q: "I used to compare apps for 30 minutes. Now I just open Cartifi.", a: "Marek", c: "Brno" },
  { q: "Same groceries my family loves — just 18% cheaper. Quietly brilliant.", a: "Lucie", c: "Olomouc" },
];

export const SocialProof = () => (
  <section className="py-24 lg:py-32 bg-gradient-soft">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-sm font-medium text-orange uppercase tracking-widest mb-3">Loved across Czech Republic</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Quiet proof. <span className="text-gradient">Real savings.</span>
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {quotes.map((qu, i) => (
          <figure key={i} className="reveal rounded-3xl bg-card border border-border p-8 shadow-soft hover-lift">
            <blockquote className="font-[Fraunces] text-lg leading-snug">
              "{qu.q}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center font-semibold text-foreground/80">
                {qu.a[0]}
              </div>
              <div className="text-sm">
                <div className="font-medium">{qu.a}</div>
                <div className="text-muted-foreground">{qu.c}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
