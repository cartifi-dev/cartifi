export type Lang = "en" | "cs";

const data = {
  en: {
    nav: {
      how: "How it works",
      try: "Try it",
      proof: "Savings",
      cta: "Check savings",
    },
    hero: {
      badge: "Built for smart shoppers",
      headlineA: "How much are you overpaying on groceries?",
      headlineB: "Same groceries. Lower total.",
      subtitle: "Cartifi builds your cheapest possible cart across stores, instantly.",
      cta: "Check your savings",
      note: "No switching apps. No comparing. No effort.",
      mascotAlt: "Cartifi mascot overwhelmed by grocery prices and store apps",
    },
    proof: {
      eyebrow: "Real comparison",
      titleA: "Same list.",
      titleB: "Different total.",
      subtitle: "Same five items, three stores. The gap adds up every week.",
      colItem: "Item",
      colPick: "Cartifi pick",
      total: "Total",
      youSave: "You save",
      onThisList: "on this list alone",
      items: [
        { name: "Milk 1 L" },
        { name: "Bread" },
        { name: "Chicken breast 1 kg" },
        { name: "Apples 1 kg" },
        { name: "Eggs (10)" },
      ],
    },
    beforeAfter: {
      before: "Before",
      beforeTitle: "Comparing, switching, hoping.",
      apps: "5 store apps open",
      time: "30+ minutes lost each week",
      flyers: "Flyers, screenshots, second-guessing",
      quoteA: "You can keep comparing…",
      quoteB: "or let it be done for you.",
      after: "After",
      afterTitle: "One clean result. Done.",
      saved: "saved",
      summary: "12 items, optimized across 3 stores in 2.4s",
      mascotAlt: "Calm Cartifi mascot",
    },
    life: {
      titleA: "Less time checking prices.",
      titleB: "More time living.",
      walk: "A longer walk",
      hike: "An unhurried hike",
      coffee: "A slower coffee",
      family: "Time with family",
    },
    demo: {
      eyebrow: "Be first in line",
      titleA: "See your savings",
      titleB: "before everyone else.",
      subtitle: "Drop your email and we'll send you early access and your first optimized cart.",
      placeholder: "you@email.com",
      ctaIdle: "Get early access",
      ctaLoading: "Saving spot…",
      ctaDone: "You're in",
      footnote: "Free. No spam. One email when Cartifi opens.",
      welcome: "Welcome aboard",
      welcomeBody: "We saved your spot. Check your inbox soon for your first cheapest cart.",
    },
    how: {
      titleA: "Three steps.",
      titleB: "That's it.",
      steps: [
        { title: "Add your list", body: "Type, paste, or photograph what you need." },
        { title: "We compare", body: "Cartifi checks every store, every price, instantly." },
        { title: "Get the cheapest cart", body: "One result. Lowest total. Done." },
      ],
    },
    finalCta: {
      titleA: "See how much you can save on your",
      titleB: "next grocery run.",
      sub: "Free. Fast. No effort.",
      cta: "Try Cartifi",
      tagline: "Same groceries. Lower total.",
      mascotAlt: "Happy Cartifi mascot relaxing with savings receipt",
    },
    finalCta2: {
      eyebrow: "Ready when you are",
      titleA: "Ready to start",
      titleB: "saving every week?",
      subtitle: "Get your first optimized cart and see exactly where your money goes.",
      placeholder: "you@email.com",
      ctaIdle: "See my savings",
      ctaLoading: "One moment…",
      ctaDone: "On its way",
      footnote: "Free. No spam. One email when Cartifi opens.",
      welcome: "You're set",
      welcomeBody: "Your savings report is on its way. Watch your inbox.",
    },
    footer: {
      tagline: "Same groceries. Lower total.",
    },
  },
  cs: {
    nav: {
      how: "Jak to funguje",
      try: "Vyzkoušet",
      proof: "Úspory",
      cta: "Zjistit úspory",
    },
    hero: {
      badge: "Pro chytré nakupující",
      headlineA: "Kolik přeplácíte za potraviny?",
      headlineB: "Stejné potraviny. Nižší účet.",
      subtitle: "Cartifi sestaví váš nejlevnější košík napříč obchody, okamžitě.",
      cta: "Zjistit úspory",
      note: "Žádné přepínání aplikací. Žádné porovnávání. Žádná námaha.",
      mascotAlt: "Maskot Cartifi zahlcený cenami a aplikacemi obchodů",
    },
    proof: {
      eyebrow: "Skutečné srovnání",
      titleA: "Stejný seznam.",
      titleB: "Jiný účet.",
      subtitle: "Stejných pět položek, tři obchody. Rozdíl se sčítá každý týden.",
      colItem: "Položka",
      colPick: "Volba Cartifi",
      total: "Celkem",
      youSave: "Ušetříte",
      onThisList: "jen na tomto seznamu",
      items: [
        { name: "Mléko 1 L" },
        { name: "Chléb" },
        { name: "Kuřecí prsa 1 kg" },
        { name: "Jablka 1 kg" },
        { name: "Vejce (10)" },
      ],
    },
    beforeAfter: {
      before: "Předtím",
      beforeTitle: "Porovnávání, přepínání, doufání.",
      apps: "5 otevřených aplikací obchodů",
      time: "30+ minut týdně pryč",
      flyers: "Letáky, screenshoty, pochybnosti",
      quoteA: "Můžete dál porovnávat…",
      quoteB: "nebo to nechat udělat za sebe.",
      after: "Potom",
      afterTitle: "Jeden čistý výsledek. Hotovo.",
      saved: "ušetřeno",
      summary: "12 položek, optimalizováno ve 3 obchodech za 2,4 s",
      mascotAlt: "Klidný maskot Cartifi",
    },
    life: {
      titleA: "Méně času nad cenami.",
      titleB: "Více času pro život.",
      walk: "Delší procházka",
      hike: "Klidný výlet",
      coffee: "Pomalejší kafe",
      family: "Čas s rodinou",
    },
    demo: {
      eyebrow: "Buďte první v řadě",
      titleA: "Uvidíte své úspory",
      titleB: "dřív než ostatní.",
      subtitle: "Nechte nám e-mail a pošleme vám předběžný přístup a váš první optimalizovaný košík.",
      placeholder: "vy@email.cz",
      ctaIdle: "Získat předběžný přístup",
      ctaLoading: "Ukládám místo…",
      ctaDone: "Jste uvnitř",
      footnote: "Zdarma. Žádný spam. Jeden e-mail, až Cartifi spustíme.",
      welcome: "Vítejte na palubě",
      welcomeBody: "Vaše místo je rezervováno. Brzy zkontrolujte schránku, dorazí váš první nejlevnější košík.",
    },
    how: {
      titleA: "Tři kroky.",
      titleB: "A je to.",
      steps: [
        { title: "Přidejte seznam", body: "Napište, vložte nebo vyfoťte, co potřebujete." },
        { title: "Porovnáme", body: "Cartifi zkontroluje každý obchod a cenu, okamžitě." },
        { title: "Nejlevnější košík", body: "Jeden výsledek. Nejnižší cena. Hotovo." },
      ],
    },
    finalCta: {
      titleA: "Zjistěte, kolik můžete ušetřit při",
      titleB: "příštím nákupu.",
      sub: "Zdarma. Rychle. Bez námahy.",
      cta: "Vyzkoušet Cartifi",
      tagline: "Stejné potraviny. Nižší účet.",
      mascotAlt: "Spokojený maskot Cartifi s účtenkou plnou úspor",
    },
    finalCta2: {
      eyebrow: "Až budete chtít",
      titleA: "Jste připraveni",
      titleB: "začít šetřit každý týden?",
      subtitle: "Získejte svůj první optimalizovaný košík a uvidíte, kam tečou vaše peníze.",
      placeholder: "vy@email.cz",
      ctaIdle: "Podívat se na úspory",
      ctaLoading: "Moment…",
      ctaDone: "Posíláme",
      footnote: "Zdarma. Žádný spam. Jeden e-mail, až Cartifi spustíme.",
      welcome: "Hotovo",
      welcomeBody: "Váš přehled úspor je na cestě. Sledujte schránku.",
    },
    footer: {
      tagline: "Stejné potraviny. Nižší účet.",
    },
  },
} as const;

type DeepWiden<T> = T extends ReadonlyArray<infer U>
  ? DeepWiden<U>[]
  : T extends object
    ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
    : T extends string
      ? string
      : T extends number
        ? number
        : T extends boolean
          ? boolean
          : T;

export type Translations = DeepWiden<typeof data.en>;

export const translations: Record<Lang, Translations> = data as unknown as Record<Lang, Translations>;