// AUTO-GENERATED. Edit /tmp/gen_translations.mjs and re-run if you need to regenerate.
import type { Lang } from "./locales";

export type { Lang };

export interface Translations {
  nav: { how: string; try: string; proof: string; cta: string };
  hero: { badge: string; headlineA: string; headlineB: string; subtitle: string; cta: string; note: string; mascotAlt: string };
  proof: { eyebrow: string; titleA: string; titleB: string; subtitle: string; colItem: string; colPick: string; total: string; youSave: string; onThisList: string; items: { name: string }[] };
  beforeAfter: { before: string; beforeTitle: string; apps: string; time: string; flyers: string; quoteA: string; quoteB: string; after: string; afterTitle: string; saved: string; summary: string; mascotAlt: string };
  life: { titleA: string; titleB: string; walk: string; hike: string; coffee: string; family: string; walkSub: string; hikeSub: string; coffeeSub: string; familySub: string };
  appDemo: { eyebrow: string; titleA: string; titleB: string; subtitle: string; scrollHint: string; steps: any[] };
  demo: { eyebrow: string; titleA: string; titleB: string; subtitle: string; placeholder: string; ctaIdle: string; ctaLoading: string; ctaDone: string; footnote: string; welcome: string; welcomeBody: string };
  how: { titleA: string; titleB: string; steps: { title: string; body: string }[] };
  finalCta: { titleA: string; titleB: string; sub: string; cta: string; tagline: string; mascotAlt: string };
  finalCta2: { eyebrow: string; titleA: string; titleB: string; subtitle: string; placeholder: string; ctaIdle: string; ctaLoading: string; ctaDone: string; footnote: string; welcome: string; welcomeBody: string };
  footer: { tagline: string; privacy: string; terms: string; gdpr: string; country: string };
  legal: { privacyTitle: string; termsTitle: string; gdprTitle: string; lastUpdated: string; back: string };
}

export const translations: Record<Lang, Translations> = {
  "en": {
    "nav": {
      "how": "How it works",
      "try": "Try it",
      "proof": "Savings",
      "cta": "Check savings"
    },
    "hero": {
      "badge": "Built for smart shoppers",
      "headlineA": "How much are you overpaying on groceries?",
      "headlineB": "Same groceries. Lower total.",
      "subtitle": "Cartifi builds your cheapest possible cart across stores, instantly.",
      "cta": "Check your savings",
      "note": "No switching apps. No comparing. No effort.",
      "mascotAlt": "Cartifi mascot overwhelmed by grocery prices and store apps"
    },
    "proof": {
      "eyebrow": "Real comparison",
      "titleA": "Same list.",
      "titleB": "Different total.",
      "subtitle": "Same five items, three stores. The gap adds up every week.",
      "colItem": "Item",
      "colPick": "Cartifi pick",
      "total": "Total",
      "youSave": "You save",
      "onThisList": "on this list alone",
      "items": [
        {
          "name": "Milk 1 L"
        },
        {
          "name": "Bread"
        },
        {
          "name": "Chicken breast 1 kg"
        },
        {
          "name": "Apples 1 kg"
        },
        {
          "name": "Eggs (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Before",
      "beforeTitle": "Comparing, switching, hoping.",
      "apps": "5 store apps open",
      "time": "30+ minutes lost each week",
      "flyers": "Flyers, screenshots, second-guessing",
      "quoteA": "You can keep comparing…",
      "quoteB": "or let it be done for you.",
      "after": "After",
      "afterTitle": "One clean result. Done.",
      "saved": "saved",
      "summary": "12 items, optimized across 3 stores in 2.4s",
      "mascotAlt": "Calm Cartifi mascot"
    },
    "life": {
      "titleA": "Less time checking prices.",
      "titleB": "More time living.",
      "walk": "A longer walk",
      "hike": "An unhurried hike",
      "coffee": "A slower coffee",
      "family": "Time with family",
      "walkSub": "Because you're not busy comparing prices.",
      "hikeSub": "The trail won't wait. Neither should you.",
      "coffeeSub": "Sip it warm. Not stressed.",
      "familySub": "Be there, not on your phone."
    },
    "appDemo": {
      "eyebrow": "How it works",
      "titleA": "From cart",
      "titleB": "to savings.",
      "subtitle": "Four taps. One cheapest cart.",
      "scrollHint": "Scroll to see the flow",
      "steps": [
        {
          "tag": "Step 1",
          "title": "Create your cart",
          "body": "Type, paste, or photograph your shopping list.",
          "screen": {
            "header": "My cart",
            "search": "Search items…",
            "items": [
              {
                "name": "Milk 1 L",
                "qty": "x2"
              },
              {
                "name": "Bread",
                "qty": "x1"
              },
              {
                "name": "Apples 1 kg",
                "qty": "x1"
              },
              {
                "name": "Eggs (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Add item"
          }
        },
        {
          "tag": "Step 2",
          "title": "We find the best prices",
          "body": "Cartifi compares every store, every price, instantly.",
          "screen": {
            "header": "Optimizing…",
            "sub": "Comparing 3 stores",
            "stores": [
              "Albert",
              "Lidl",
              "Tesco"
            ],
            "picked": "Cheapest pick"
          }
        },
        {
          "tag": "Step 3",
          "title": "Share your cart",
          "body": "Send the optimized cart to family in one tap.",
          "screen": {
            "header": "Share your cart",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Messages",
              "Copy link",
              "Email"
            ]
          }
        },
        {
          "tag": "Step 4",
          "title": "Save time. Save money.",
          "body": "Lowest total. Less effort. Every week.",
          "screen": {
            "header": "You saved",
            "summary": "12 items · 3 stores · 2.4s",
            "cta": "View cheapest cart"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Be first in line",
      "titleA": "See your savings",
      "titleB": "before everyone else.",
      "subtitle": "Drop your email and we'll send you early access and your first optimized cart.",
      "placeholder": "you@email.com",
      "ctaIdle": "Get early access",
      "ctaLoading": "Saving spot…",
      "ctaDone": "You're in",
      "footnote": "Free. No spam. One email when Cartifi opens.",
      "welcome": "Welcome aboard",
      "welcomeBody": "We saved your spot. Check your inbox soon for your first cheapest cart."
    },
    "how": {
      "titleA": "Three steps.",
      "titleB": "That's it.",
      "steps": [
        {
          "title": "Add your list",
          "body": "Type, paste, or photograph what you need."
        },
        {
          "title": "We compare",
          "body": "Cartifi checks every store, every price, instantly."
        },
        {
          "title": "Get the cheapest cart",
          "body": "One result. Lowest total. Done."
        }
      ]
    },
    "finalCta": {
      "titleA": "See how much you can save on your",
      "titleB": "next grocery run.",
      "sub": "Free. Fast. No effort.",
      "cta": "Try Cartifi",
      "tagline": "Same groceries. Lower total.",
      "mascotAlt": "Happy Cartifi mascot relaxing with savings receipt"
    },
    "finalCta2": {
      "eyebrow": "Ready when you are",
      "titleA": "Ready to start",
      "titleB": "saving every week?",
      "subtitle": "Get your first optimized cart and see exactly where your money goes.",
      "placeholder": "you@email.com",
      "ctaIdle": "See my savings",
      "ctaLoading": "One moment…",
      "ctaDone": "On its way",
      "footnote": "Free. No spam. One email when Cartifi opens.",
      "welcome": "You're set",
      "welcomeBody": "Your savings report is on its way. Watch your inbox."
    },
    "footer": {
      "tagline": "Same groceries. Lower total.",
      "privacy": "Privacy",
      "terms": "Terms",
      "gdpr": "GDPR",
      "country": "Country"
    },
    "legal": {
      "privacyTitle": "Privacy Policy",
      "termsTitle": "Terms of Service",
      "gdprTitle": "GDPR",
      "lastUpdated": "Last updated",
      "back": "Back to home"
    }
  },
  "cs": {
    "nav": {
      "how": "Jak to funguje",
      "try": "Vyzkoušet",
      "proof": "Úspory",
      "cta": "Zjistit úspory"
    },
    "hero": {
      "badge": "Pro chytré nakupující",
      "headlineA": "Kolik přeplácíte za potraviny?",
      "headlineB": "Stejné potraviny. Nižší účet.",
      "subtitle": "Cartifi sestaví váš nejlevnější košík napříč obchody, okamžitě.",
      "cta": "Zjistit úspory",
      "note": "Žádné přepínání aplikací. Žádné porovnávání. Žádná námaha.",
      "mascotAlt": "Maskot Cartifi zahlcený cenami a aplikacemi obchodů"
    },
    "proof": {
      "eyebrow": "Skutečné srovnání",
      "titleA": "Stejný seznam.",
      "titleB": "Jiný účet.",
      "subtitle": "Stejných pět položek, tři obchody. Rozdíl se sčítá každý týden.",
      "colItem": "Položka",
      "colPick": "Volba Cartifi",
      "total": "Celkem",
      "youSave": "Ušetříte",
      "onThisList": "jen na tomto seznamu",
      "items": [
        {
          "name": "Mléko 1 L"
        },
        {
          "name": "Chléb"
        },
        {
          "name": "Kuřecí prsa 1 kg"
        },
        {
          "name": "Jablka 1 kg"
        },
        {
          "name": "Vejce (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Předtím",
      "beforeTitle": "Porovnávání, přepínání, doufání.",
      "apps": "5 otevřených aplikací obchodů",
      "time": "30+ minut týdně pryč",
      "flyers": "Letáky, screenshoty, pochybnosti",
      "quoteA": "Můžete dál porovnávat…",
      "quoteB": "nebo to nechat udělat za sebe.",
      "after": "Potom",
      "afterTitle": "Jeden čistý výsledek. Hotovo.",
      "saved": "ušetřeno",
      "summary": "12 položek, optimalizováno ve 3 obchodech za 2,4 s",
      "mascotAlt": "Klidný maskot Cartifi"
    },
    "life": {
      "titleA": "Méně času nad cenami.",
      "titleB": "Více času pro život.",
      "walk": "Delší procházka",
      "hike": "Klidný výlet",
      "coffee": "Pomalejší kafe",
      "family": "Čas s rodinou",
      "walkSub": "Protože neporovnáváte ceny.",
      "hikeSub": "Cesta nepočká. Vy taky ne.",
      "coffeeSub": "Vypijte ho v klidu. Bez stresu.",
      "familySub": "Buďte tam, ne v telefonu."
    },
    "appDemo": {
      "eyebrow": "Jak to funguje",
      "titleA": "Od košíku",
      "titleB": "k úsporám.",
      "subtitle": "Čtyři klepnutí. Jeden nejlevnější košík.",
      "scrollHint": "Scrollujte a uvidíte celý průběh",
      "steps": [
        {
          "tag": "Krok 1",
          "title": "Vytvořte košík",
          "body": "Napište, vložte nebo vyfoťte svůj nákupní seznam.",
          "screen": {
            "header": "Můj košík",
            "search": "Hledat položky…",
            "items": [
              {
                "name": "Mléko 1 L",
                "qty": "x2"
              },
              {
                "name": "Chléb",
                "qty": "x1"
              },
              {
                "name": "Jablka 1 kg",
                "qty": "x1"
              },
              {
                "name": "Vejce (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Přidat položku"
          }
        },
        {
          "tag": "Krok 2",
          "title": "Najdeme nejlepší ceny",
          "body": "Cartifi porovná každý obchod a cenu, okamžitě.",
          "screen": {
            "header": "Optimalizuji…",
            "sub": "Porovnávám 3 obchody",
            "stores": [
              "Albert",
              "Lidl",
              "Tesco"
            ],
            "picked": "Nejlevnější volba"
          }
        },
        {
          "tag": "Krok 3",
          "title": "Sdílejte košík",
          "body": "Pošlete optimalizovaný košík rodině jedním klepnutím.",
          "screen": {
            "header": "Sdílet košík",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Zprávy",
              "Zkopírovat odkaz",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Krok 4",
          "title": "Ušetřete čas i peníze.",
          "body": "Nejnižší cena. Bez námahy. Každý týden.",
          "screen": {
            "header": "Ušetřili jste",
            "summary": "12 položek · 3 obchody · 2,4 s",
            "cta": "Zobrazit nejlevnější košík"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Buďte první v řadě",
      "titleA": "Uvidíte své úspory",
      "titleB": "dřív než ostatní.",
      "subtitle": "Nechte nám e-mail a pošleme vám předběžný přístup a váš první optimalizovaný košík.",
      "placeholder": "vy@email.cz",
      "ctaIdle": "Získat předběžný přístup",
      "ctaLoading": "Ukládám místo…",
      "ctaDone": "Jste uvnitř",
      "footnote": "Zdarma. Žádný spam. Jeden e-mail, až Cartifi spustíme.",
      "welcome": "Vítejte na palubě",
      "welcomeBody": "Vaše místo je rezervováno. Brzy zkontrolujte schránku."
    },
    "how": {
      "titleA": "Tři kroky.",
      "titleB": "A je to.",
      "steps": [
        {
          "title": "Přidejte seznam",
          "body": "Napište, vložte nebo vyfoťte, co potřebujete."
        },
        {
          "title": "Porovnáme",
          "body": "Cartifi zkontroluje každý obchod a cenu, okamžitě."
        },
        {
          "title": "Nejlevnější košík",
          "body": "Jeden výsledek. Nejnižší cena. Hotovo."
        }
      ]
    },
    "finalCta": {
      "titleA": "Zjistěte, kolik můžete ušetřit při",
      "titleB": "příštím nákupu.",
      "sub": "Zdarma. Rychle. Bez námahy.",
      "cta": "Vyzkoušet Cartifi",
      "tagline": "Stejné potraviny. Nižší účet.",
      "mascotAlt": "Spokojený maskot Cartifi s účtenkou plnou úspor"
    },
    "finalCta2": {
      "eyebrow": "Až budete chtít",
      "titleA": "Jste připraveni",
      "titleB": "začít šetřit každý týden?",
      "subtitle": "Získejte svůj první optimalizovaný košík a uvidíte, kam tečou vaše peníze.",
      "placeholder": "vy@email.cz",
      "ctaIdle": "Podívat se na úspory",
      "ctaLoading": "Moment…",
      "ctaDone": "Posíláme",
      "footnote": "Zdarma. Žádný spam. Jeden e-mail, až Cartifi spustíme.",
      "welcome": "Hotovo",
      "welcomeBody": "Váš přehled úspor je na cestě. Sledujte schránku."
    },
    "footer": {
      "tagline": "Stejné potraviny. Nižší účet.",
      "privacy": "Soukromí",
      "terms": "Podmínky",
      "gdpr": "GDPR",
      "country": "Země"
    },
    "legal": {
      "privacyTitle": "Zásady ochrany soukromí",
      "termsTitle": "Podmínky služby",
      "gdprTitle": "GDPR",
      "lastUpdated": "Naposledy aktualizováno",
      "back": "Zpět na úvod"
    }
  },
  "de": {
    "nav": {
      "how": "So funktioniert's",
      "try": "Ausprobieren",
      "proof": "Ersparnis",
      "cta": "Ersparnis prüfen"
    },
    "hero": {
      "badge": "Für clevere Käufer",
      "headlineA": "Wieviel zahlst du zu viel für Lebensmittel?",
      "headlineB": "Gleiche Lebensmittel. Geringerer Preis.",
      "subtitle": "Cartifi stellt sofort deinen günstigsten Warenkorb über alle Läden hinweg zusammen.",
      "cta": "Ersparnis prüfen",
      "note": "Kein App-Wechsel. Kein Vergleichen. Kein Aufwand.",
      "mascotAlt": "Cartifi Maskottchen überfordert von Preisen"
    },
    "proof": {
      "eyebrow": "Echter Vergleich",
      "titleA": "Gleiche Liste.",
      "titleB": "Anderer Preis.",
      "subtitle": "Fünf gleiche Artikel, drei Läden. Der Unterschied summiert sich jede Woche.",
      "colItem": "Artikel",
      "colPick": "Cartifi Auswahl",
      "total": "Gesamt",
      "youSave": "Du sparst",
      "onThisList": "allein bei dieser Liste",
      "items": [
        {
          "name": "Milch 1 L"
        },
        {
          "name": "Brot"
        },
        {
          "name": "Hähnchenbrust 1 kg"
        },
        {
          "name": "Äpfel 1 kg"
        },
        {
          "name": "Eier (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Vorher",
      "beforeTitle": "Vergleichen, wechseln, hoffen.",
      "apps": "5 Läden-Apps offen",
      "time": "30+ Minuten pro Woche verloren",
      "flyers": "Prospekte, Screenshots, Zweifel",
      "quoteA": "Du kannst weiter vergleichen…",
      "quoteB": "oder es erledigen lassen.",
      "after": "Nachher",
      "afterTitle": "Ein klares Ergebnis. Fertig.",
      "saved": "gespart",
      "summary": "12 Artikel, optimiert über 3 Läden in 2,4 s",
      "mascotAlt": "Ruhiges Cartifi Maskottchen"
    },
    "life": {
      "titleA": "Weniger Preise prüfen.",
      "titleB": "Mehr Leben.",
      "walk": "Ein längerer Spaziergang",
      "hike": "Eine ruhige Wanderung",
      "coffee": "Ein langsamer Kaffee",
      "family": "Zeit mit der Familie",
      "walkSub": "Weil du keine Preise mehr vergleichst.",
      "hikeSub": "Der Weg wartet nicht. Du auch nicht.",
      "coffeeSub": "Trink ihn warm. Stressfrei.",
      "familySub": "Sei dabei, nicht am Handy."
    },
    "appDemo": {
      "eyebrow": "So funktioniert's",
      "titleA": "Vom Warenkorb",
      "titleB": "zur Ersparnis.",
      "subtitle": "Vier Tipps. Ein günstigster Warenkorb.",
      "scrollHint": "Scrolle, um den Ablauf zu sehen",
      "steps": [
        {
          "tag": "Schritt 1",
          "title": "Erstelle deinen Warenkorb",
          "body": "Tippe, füge ein oder fotografiere deine Liste.",
          "screen": {
            "header": "Mein Warenkorb",
            "search": "Artikel suchen…",
            "items": [
              {
                "name": "Milch 1 L",
                "qty": "x2"
              },
              {
                "name": "Brot",
                "qty": "x1"
              },
              {
                "name": "Äpfel 1 kg",
                "qty": "x1"
              },
              {
                "name": "Eier (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Artikel hinzufügen"
          }
        },
        {
          "tag": "Schritt 2",
          "title": "Wir finden die besten Preise",
          "body": "Cartifi vergleicht jeden Laden, jeden Preis, sofort.",
          "screen": {
            "header": "Optimiere…",
            "sub": "Vergleiche 3 Läden",
            "stores": [
              "Rewe",
              "Lidl",
              "Edeka"
            ],
            "picked": "Günstigste Wahl"
          }
        },
        {
          "tag": "Schritt 3",
          "title": "Teile deinen Warenkorb",
          "body": "Sende den optimierten Warenkorb mit einem Tipp.",
          "screen": {
            "header": "Warenkorb teilen",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Nachrichten",
              "Link kopieren",
              "E-Mail"
            ]
          }
        },
        {
          "tag": "Schritt 4",
          "title": "Spare Zeit. Spare Geld.",
          "body": "Niedrigster Preis. Weniger Aufwand. Jede Woche.",
          "screen": {
            "header": "Du hast gespart",
            "summary": "12 Artikel · 3 Läden · 2,4 s",
            "cta": "Günstigsten Warenkorb ansehen"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Sei zuerst dabei",
      "titleA": "Sieh deine Ersparnis",
      "titleB": "vor allen anderen.",
      "subtitle": "Hinterlasse deine E-Mail und wir senden dir frühen Zugang und deinen ersten optimierten Warenkorb.",
      "placeholder": "du@email.de",
      "ctaIdle": "Frühzugang sichern",
      "ctaLoading": "Sichere Platz…",
      "ctaDone": "Du bist dabei",
      "footnote": "Kostenlos. Kein Spam. Eine E-Mail beim Start.",
      "welcome": "Willkommen",
      "welcomeBody": "Wir haben deinen Platz reserviert. Schau bald in dein Postfach."
    },
    "how": {
      "titleA": "Drei Schritte.",
      "titleB": "Das war's.",
      "steps": [
        {
          "title": "Liste hinzufügen",
          "body": "Tippe, füge ein oder fotografiere, was du brauchst."
        },
        {
          "title": "Wir vergleichen",
          "body": "Cartifi prüft jeden Laden und Preis sofort."
        },
        {
          "title": "Günstigster Warenkorb",
          "body": "Ein Ergebnis. Niedrigster Preis. Fertig."
        }
      ]
    },
    "finalCta": {
      "titleA": "Sieh, wie viel du beim",
      "titleB": "nächsten Einkauf sparst.",
      "sub": "Kostenlos. Schnell. Mühelos.",
      "cta": "Cartifi testen",
      "tagline": "Gleiche Lebensmittel. Geringerer Preis.",
      "mascotAlt": "Glückliches Cartifi Maskottchen"
    },
    "finalCta2": {
      "eyebrow": "Wenn du bereit bist",
      "titleA": "Bereit, jede Woche",
      "titleB": "zu sparen?",
      "subtitle": "Hol dir deinen ersten optimierten Warenkorb und sieh, wohin dein Geld geht.",
      "placeholder": "du@email.de",
      "ctaIdle": "Ersparnis ansehen",
      "ctaLoading": "Einen Moment…",
      "ctaDone": "Unterwegs",
      "footnote": "Kostenlos. Kein Spam. Eine E-Mail beim Start.",
      "welcome": "Erledigt",
      "welcomeBody": "Dein Sparbericht ist unterwegs. Schau ins Postfach."
    },
    "footer": {
      "tagline": "Gleiche Lebensmittel. Geringerer Preis.",
      "privacy": "Datenschutz",
      "terms": "AGB",
      "gdpr": "DSGVO",
      "country": "Land"
    },
    "legal": {
      "privacyTitle": "Datenschutzerklärung",
      "termsTitle": "Nutzungsbedingungen",
      "gdprTitle": "DSGVO",
      "lastUpdated": "Zuletzt aktualisiert",
      "back": "Zurück zur Startseite"
    }
  },
  "pl": {
    "nav": {
      "how": "Jak to działa",
      "try": "Wypróbuj",
      "proof": "Oszczędności",
      "cta": "Sprawdź oszczędności"
    },
    "hero": {
      "badge": "Dla mądrych kupujących",
      "headlineA": "Ile przepłacasz za zakupy?",
      "headlineB": "Te same zakupy. Niższy rachunek.",
      "subtitle": "Cartifi natychmiast tworzy najtańszy koszyk we wszystkich sklepach.",
      "cta": "Sprawdź oszczędności",
      "note": "Bez przełączania aplikacji. Bez porównywania.",
      "mascotAlt": "Maskotka Cartifi zmęczona cenami"
    },
    "proof": {
      "eyebrow": "Prawdziwe porównanie",
      "titleA": "Ta sama lista.",
      "titleB": "Inna kwota.",
      "subtitle": "Pięć tych samych produktów, trzy sklepy. Różnica rośnie co tydzień.",
      "colItem": "Produkt",
      "colPick": "Wybór Cartifi",
      "total": "Razem",
      "youSave": "Oszczędzasz",
      "onThisList": "tylko na tej liście",
      "items": [
        {
          "name": "Mleko 1 L"
        },
        {
          "name": "Chleb"
        },
        {
          "name": "Filet z kurczaka 1 kg"
        },
        {
          "name": "Jabłka 1 kg"
        },
        {
          "name": "Jajka (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Przed",
      "beforeTitle": "Porównywanie, klikanie, nadzieja.",
      "apps": "5 otwartych aplikacji",
      "time": "30+ minut tygodniowo straconych",
      "flyers": "Gazetki, zrzuty ekranu, wątpliwości",
      "quoteA": "Możesz dalej porównywać…",
      "quoteB": "albo zostawić to nam.",
      "after": "Po",
      "afterTitle": "Jeden czysty wynik. Gotowe.",
      "saved": "zaoszczędzone",
      "summary": "12 produktów, 3 sklepy w 2,4 s",
      "mascotAlt": "Spokojna maskotka Cartifi"
    },
    "life": {
      "titleA": "Mniej sprawdzania cen.",
      "titleB": "Więcej życia.",
      "walk": "Dłuższy spacer",
      "hike": "Spokojna wędrówka",
      "coffee": "Wolniejsza kawa",
      "family": "Czas z rodziną",
      "walkSub": "Bo nie porównujesz cen.",
      "hikeSub": "Szlak nie poczeka. Ty też nie.",
      "coffeeSub": "Wypij ją na spokojnie.",
      "familySub": "Bądź tam, nie w telefonie."
    },
    "appDemo": {
      "eyebrow": "Jak to działa",
      "titleA": "Od koszyka",
      "titleB": "do oszczędności.",
      "subtitle": "Cztery dotknięcia. Jeden najtańszy koszyk.",
      "scrollHint": "Przewiń, aby zobaczyć przepływ",
      "steps": [
        {
          "tag": "Krok 1",
          "title": "Stwórz koszyk",
          "body": "Wpisz, wklej lub sfotografuj swoją listę.",
          "screen": {
            "header": "Mój koszyk",
            "search": "Szukaj produktów…",
            "items": [
              {
                "name": "Mleko 1 L",
                "qty": "x2"
              },
              {
                "name": "Chleb",
                "qty": "x1"
              },
              {
                "name": "Jabłka 1 kg",
                "qty": "x1"
              },
              {
                "name": "Jajka (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Dodaj produkt"
          }
        },
        {
          "tag": "Krok 2",
          "title": "Znajdujemy najlepsze ceny",
          "body": "Cartifi porównuje każdy sklep i każdą cenę.",
          "screen": {
            "header": "Optymalizuję…",
            "sub": "Porównuję 3 sklepy",
            "stores": [
              "Biedronka",
              "Lidl",
              "Carrefour"
            ],
            "picked": "Najtańszy wybór"
          }
        },
        {
          "tag": "Krok 3",
          "title": "Udostępnij koszyk",
          "body": "Wyślij koszyk rodzinie jednym dotknięciem.",
          "screen": {
            "header": "Udostępnij koszyk",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Wiadomości",
              "Kopiuj link",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Krok 4",
          "title": "Oszczędź czas i pieniądze.",
          "body": "Najniższa cena. Mniej wysiłku. Co tydzień.",
          "screen": {
            "header": "Zaoszczędziłeś",
            "summary": "12 produktów · 3 sklepy · 2,4 s",
            "cta": "Pokaż najtańszy koszyk"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Bądź pierwszy",
      "titleA": "Zobacz swoje oszczędności",
      "titleB": "przed wszystkimi.",
      "subtitle": "Zostaw e-mail, a wyślemy ci wczesny dostęp i pierwszy zoptymalizowany koszyk.",
      "placeholder": "ty@email.pl",
      "ctaIdle": "Wczesny dostęp",
      "ctaLoading": "Zapisuję…",
      "ctaDone": "Jesteś w środku",
      "footnote": "Za darmo. Bez spamu. Jeden e-mail przy starcie.",
      "welcome": "Witamy",
      "welcomeBody": "Twoje miejsce jest zapisane. Sprawdź skrzynkę."
    },
    "how": {
      "titleA": "Trzy kroki.",
      "titleB": "I tyle.",
      "steps": [
        {
          "title": "Dodaj listę",
          "body": "Wpisz, wklej lub sfotografuj, czego potrzebujesz."
        },
        {
          "title": "Porównujemy",
          "body": "Cartifi sprawdza każdy sklep i cenę."
        },
        {
          "title": "Najtańszy koszyk",
          "body": "Jeden wynik. Najniższa cena. Gotowe."
        }
      ]
    },
    "finalCta": {
      "titleA": "Zobacz, ile oszczędzisz",
      "titleB": "na kolejnych zakupach.",
      "sub": "Za darmo. Szybko. Bez wysiłku.",
      "cta": "Wypróbuj Cartifi",
      "tagline": "Te same zakupy. Niższy rachunek.",
      "mascotAlt": "Szczęśliwa maskotka Cartifi"
    },
    "finalCta2": {
      "eyebrow": "Gdy będziesz gotów",
      "titleA": "Gotów oszczędzać",
      "titleB": "co tydzień?",
      "subtitle": "Zdobądź pierwszy zoptymalizowany koszyk i zobacz, gdzie idą twoje pieniądze.",
      "placeholder": "ty@email.pl",
      "ctaIdle": "Zobacz oszczędności",
      "ctaLoading": "Chwila…",
      "ctaDone": "W drodze",
      "footnote": "Za darmo. Bez spamu. Jeden e-mail.",
      "welcome": "Gotowe",
      "welcomeBody": "Raport jest w drodze. Sprawdź skrzynkę."
    },
    "footer": {
      "tagline": "Te same zakupy. Niższy rachunek.",
      "privacy": "Prywatność",
      "terms": "Regulamin",
      "gdpr": "RODO",
      "country": "Kraj"
    },
    "legal": {
      "privacyTitle": "Polityka prywatności",
      "termsTitle": "Regulamin",
      "gdprTitle": "RODO",
      "lastUpdated": "Ostatnia aktualizacja",
      "back": "Powrót na stronę"
    }
  },
  "nl": {
    "nav": {
      "how": "Hoe het werkt",
      "try": "Proberen",
      "proof": "Besparingen",
      "cta": "Bekijk besparing"
    },
    "hero": {
      "badge": "Voor slimme shoppers",
      "headlineA": "Hoeveel betaal je teveel voor boodschappen?",
      "headlineB": "Zelfde boodschappen. Lagere rekening.",
      "subtitle": "Cartifi maakt direct je goedkoopste mandje over alle winkels heen.",
      "cta": "Bekijk besparing",
      "note": "Geen apps wisselen. Geen vergelijken.",
      "mascotAlt": "Cartifi mascotte overweldigd door prijzen"
    },
    "proof": {
      "eyebrow": "Echte vergelijking",
      "titleA": "Zelfde lijst.",
      "titleB": "Ander totaal.",
      "subtitle": "Dezelfde vijf items, drie winkels. Het verschil telt elke week op.",
      "colItem": "Product",
      "colPick": "Cartifi keuze",
      "total": "Totaal",
      "youSave": "Je bespaart",
      "onThisList": "alleen al op deze lijst",
      "items": [
        {
          "name": "Melk 1 L"
        },
        {
          "name": "Brood"
        },
        {
          "name": "Kipfilet 1 kg"
        },
        {
          "name": "Appels 1 kg"
        },
        {
          "name": "Eieren (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Voorheen",
      "beforeTitle": "Vergelijken, wisselen, hopen.",
      "apps": "5 winkel-apps open",
      "time": "30+ minuten per week kwijt",
      "flyers": "Folders, screenshots, twijfel",
      "quoteA": "Je kunt blijven vergelijken…",
      "quoteB": "of het laten doen.",
      "after": "Daarna",
      "afterTitle": "Eén helder resultaat. Klaar.",
      "saved": "bespaard",
      "summary": "12 items, geoptimaliseerd over 3 winkels in 2,4 s",
      "mascotAlt": "Rustige Cartifi mascotte"
    },
    "life": {
      "titleA": "Minder prijzen checken.",
      "titleB": "Meer leven.",
      "walk": "Een langere wandeling",
      "hike": "Een rustige tocht",
      "coffee": "Een tragere koffie",
      "family": "Tijd met familie",
      "walkSub": "Omdat je geen prijzen meer vergelijkt.",
      "hikeSub": "Het pad wacht niet. Jij ook niet.",
      "coffeeSub": "Drink hem warm. Zonder stress.",
      "familySub": "Wees erbij, niet op je telefoon."
    },
    "appDemo": {
      "eyebrow": "Hoe het werkt",
      "titleA": "Van mandje",
      "titleB": "naar besparing.",
      "subtitle": "Vier tikken. Eén goedkoopste mandje.",
      "scrollHint": "Scroll om de flow te zien",
      "steps": [
        {
          "tag": "Stap 1",
          "title": "Maak je mandje",
          "body": "Typ, plak of fotografeer je boodschappenlijst.",
          "screen": {
            "header": "Mijn mandje",
            "search": "Zoek producten…",
            "items": [
              {
                "name": "Melk 1 L",
                "qty": "x2"
              },
              {
                "name": "Brood",
                "qty": "x1"
              },
              {
                "name": "Appels 1 kg",
                "qty": "x1"
              },
              {
                "name": "Eieren (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Product toevoegen"
          }
        },
        {
          "tag": "Stap 2",
          "title": "Wij vinden de beste prijzen",
          "body": "Cartifi vergelijkt elke winkel direct.",
          "screen": {
            "header": "Optimaliseren…",
            "sub": "3 winkels vergelijken",
            "stores": [
              "Albert Heijn",
              "Lidl",
              "Jumbo"
            ],
            "picked": "Goedkoopste keuze"
          }
        },
        {
          "tag": "Stap 3",
          "title": "Deel je mandje",
          "body": "Stuur het mandje naar familie met één tik.",
          "screen": {
            "header": "Mandje delen",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Berichten",
              "Link kopiëren",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Stap 4",
          "title": "Bespaar tijd en geld.",
          "body": "Laagste totaal. Minder moeite. Elke week.",
          "screen": {
            "header": "Je bespaarde",
            "summary": "12 items · 3 winkels · 2,4 s",
            "cta": "Bekijk goedkoopste mandje"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Wees als eerste",
      "titleA": "Zie je besparing",
      "titleB": "vóór iedereen.",
      "subtitle": "Laat je e-mail achter en we sturen je vroege toegang en je eerste mandje.",
      "placeholder": "jij@email.nl",
      "ctaIdle": "Vroege toegang",
      "ctaLoading": "Plek reserveren…",
      "ctaDone": "Je bent erbij",
      "footnote": "Gratis. Geen spam. Eén e-mail bij lancering.",
      "welcome": "Welkom",
      "welcomeBody": "We hebben je plek bewaard. Check binnenkort je inbox."
    },
    "how": {
      "titleA": "Drie stappen.",
      "titleB": "Meer niet.",
      "steps": [
        {
          "title": "Voeg je lijst toe",
          "body": "Typ, plak of fotografeer wat je nodig hebt."
        },
        {
          "title": "Wij vergelijken",
          "body": "Cartifi checkt elke winkel direct."
        },
        {
          "title": "Goedkoopste mandje",
          "body": "Eén resultaat. Laagste totaal. Klaar."
        }
      ]
    },
    "finalCta": {
      "titleA": "Zie hoeveel je kunt besparen",
      "titleB": "op je volgende boodschappen.",
      "sub": "Gratis. Snel. Moeiteloos.",
      "cta": "Probeer Cartifi",
      "tagline": "Zelfde boodschappen. Lagere rekening.",
      "mascotAlt": "Vrolijke Cartifi mascotte"
    },
    "finalCta2": {
      "eyebrow": "Wanneer jij wilt",
      "titleA": "Klaar om elke week",
      "titleB": "te besparen?",
      "subtitle": "Krijg je eerste geoptimaliseerde mandje en zie waar je geld heen gaat.",
      "placeholder": "jij@email.nl",
      "ctaIdle": "Mijn besparing zien",
      "ctaLoading": "Moment…",
      "ctaDone": "Onderweg",
      "footnote": "Gratis. Geen spam. Eén e-mail.",
      "welcome": "Klaar",
      "welcomeBody": "Je rapport is onderweg. Check je inbox."
    },
    "footer": {
      "tagline": "Zelfde boodschappen. Lagere rekening.",
      "privacy": "Privacy",
      "terms": "Voorwaarden",
      "gdpr": "AVG",
      "country": "Land"
    },
    "legal": {
      "privacyTitle": "Privacybeleid",
      "termsTitle": "Servicevoorwaarden",
      "gdprTitle": "AVG",
      "lastUpdated": "Laatst bijgewerkt",
      "back": "Terug naar home"
    }
  },
  "it": {
    "nav": {
      "how": "Come funziona",
      "try": "Provalo",
      "proof": "Risparmi",
      "cta": "Vedi risparmi"
    },
    "hero": {
      "badge": "Per chi compra intelligente",
      "headlineA": "Quanto stai pagando in più per la spesa?",
      "headlineB": "Stessa spesa. Totale più basso.",
      "subtitle": "Cartifi crea subito il tuo carrello più economico in tutti i negozi.",
      "cta": "Vedi risparmi",
      "note": "Niente app da cambiare. Niente confronti.",
      "mascotAlt": "Mascotte Cartifi sopraffatta dai prezzi"
    },
    "proof": {
      "eyebrow": "Confronto reale",
      "titleA": "Stessa lista.",
      "titleB": "Totale diverso.",
      "subtitle": "Stessi cinque articoli, tre negozi. La differenza si somma ogni settimana.",
      "colItem": "Articolo",
      "colPick": "Scelta Cartifi",
      "total": "Totale",
      "youSave": "Risparmi",
      "onThisList": "solo su questa lista",
      "items": [
        {
          "name": "Latte 1 L"
        },
        {
          "name": "Pane"
        },
        {
          "name": "Petto di pollo 1 kg"
        },
        {
          "name": "Mele 1 kg"
        },
        {
          "name": "Uova (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Prima",
      "beforeTitle": "Confrontare, cambiare, sperare.",
      "apps": "5 app di negozi aperte",
      "time": "30+ minuti persi a settimana",
      "flyers": "Volantini, screenshot, dubbi",
      "quoteA": "Puoi continuare a confrontare…",
      "quoteB": "o lasciar fare a noi.",
      "after": "Dopo",
      "afterTitle": "Un risultato chiaro. Fatto.",
      "saved": "risparmiati",
      "summary": "12 articoli, ottimizzati in 3 negozi in 2,4 s",
      "mascotAlt": "Mascotte Cartifi tranquilla"
    },
    "life": {
      "titleA": "Meno tempo sui prezzi.",
      "titleB": "Più tempo per vivere.",
      "walk": "Una passeggiata più lunga",
      "hike": "Un'escursione tranquilla",
      "coffee": "Un caffè più lento",
      "family": "Tempo in famiglia",
      "walkSub": "Perché non confronti più prezzi.",
      "hikeSub": "Il sentiero non aspetta. Nemmeno tu.",
      "coffeeSub": "Bevilo caldo. Senza stress.",
      "familySub": "Sii presente, non al telefono."
    },
    "appDemo": {
      "eyebrow": "Come funziona",
      "titleA": "Dal carrello",
      "titleB": "ai risparmi.",
      "subtitle": "Quattro tap. Un carrello al miglior prezzo.",
      "scrollHint": "Scorri per vedere il flusso",
      "steps": [
        {
          "tag": "Passo 1",
          "title": "Crea il tuo carrello",
          "body": "Scrivi, incolla o fotografa la tua lista.",
          "screen": {
            "header": "Il mio carrello",
            "search": "Cerca articoli…",
            "items": [
              {
                "name": "Latte 1 L",
                "qty": "x2"
              },
              {
                "name": "Pane",
                "qty": "x1"
              },
              {
                "name": "Mele 1 kg",
                "qty": "x1"
              },
              {
                "name": "Uova (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Aggiungi articolo"
          }
        },
        {
          "tag": "Passo 2",
          "title": "Troviamo i prezzi migliori",
          "body": "Cartifi confronta ogni negozio, ogni prezzo, subito.",
          "screen": {
            "header": "Ottimizzando…",
            "sub": "Confronto 3 negozi",
            "stores": [
              "Esselunga",
              "Lidl",
              "Conad"
            ],
            "picked": "Scelta migliore"
          }
        },
        {
          "tag": "Passo 3",
          "title": "Condividi il carrello",
          "body": "Manda il carrello alla famiglia con un tap.",
          "screen": {
            "header": "Condividi carrello",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Messaggi",
              "Copia link",
              "Email"
            ]
          }
        },
        {
          "tag": "Passo 4",
          "title": "Risparmia tempo e denaro.",
          "body": "Totale più basso. Meno fatica.",
          "screen": {
            "header": "Hai risparmiato",
            "summary": "12 articoli · 3 negozi · 2,4 s",
            "cta": "Vedi carrello più economico"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Sii il primo",
      "titleA": "Vedi i tuoi risparmi",
      "titleB": "prima di tutti.",
      "subtitle": "Lascia la tua email e ti invieremo accesso anticipato e il tuo primo carrello.",
      "placeholder": "tu@email.it",
      "ctaIdle": "Accesso anticipato",
      "ctaLoading": "Salvo posto…",
      "ctaDone": "Sei dentro",
      "footnote": "Gratis. Niente spam. Una sola email al lancio.",
      "welcome": "Benvenuto",
      "welcomeBody": "Posto salvato. Controlla la casella presto."
    },
    "how": {
      "titleA": "Tre passi.",
      "titleB": "Tutto qui.",
      "steps": [
        {
          "title": "Aggiungi la lista",
          "body": "Scrivi, incolla o fotografa cosa ti serve."
        },
        {
          "title": "Confrontiamo",
          "body": "Cartifi controlla ogni negozio e prezzo."
        },
        {
          "title": "Carrello più economico",
          "body": "Un risultato. Totale più basso."
        }
      ]
    },
    "finalCta": {
      "titleA": "Scopri quanto puoi risparmiare",
      "titleB": "alla prossima spesa.",
      "sub": "Gratis. Veloce. Senza sforzo.",
      "cta": "Prova Cartifi",
      "tagline": "Stessa spesa. Totale più basso.",
      "mascotAlt": "Mascotte Cartifi felice"
    },
    "finalCta2": {
      "eyebrow": "Quando vuoi",
      "titleA": "Pronto a risparmiare",
      "titleB": "ogni settimana?",
      "subtitle": "Ottieni il tuo primo carrello ottimizzato e vedi dove vanno i tuoi soldi.",
      "placeholder": "tu@email.it",
      "ctaIdle": "Vedi i miei risparmi",
      "ctaLoading": "Un attimo…",
      "ctaDone": "In arrivo",
      "footnote": "Gratis. Niente spam. Una sola email.",
      "welcome": "Fatto",
      "welcomeBody": "Il report è in arrivo. Controlla la casella."
    },
    "footer": {
      "tagline": "Stessa spesa. Totale più basso.",
      "privacy": "Privacy",
      "terms": "Termini",
      "gdpr": "GDPR",
      "country": "Paese"
    },
    "legal": {
      "privacyTitle": "Informativa sulla privacy",
      "termsTitle": "Termini di servizio",
      "gdprTitle": "GDPR",
      "lastUpdated": "Ultimo aggiornamento",
      "back": "Torna alla home"
    }
  },
  "fr": {
    "nav": {
      "how": "Comment ça marche",
      "try": "Essayer",
      "proof": "Économies",
      "cta": "Voir les économies"
    },
    "hero": {
      "badge": "Pour les acheteurs malins",
      "headlineA": "Combien payez-vous en trop pour vos courses ?",
      "headlineB": "Mêmes courses. Total plus bas.",
      "subtitle": "Cartifi crée instantanément votre panier le moins cher dans tous les magasins.",
      "cta": "Voir les économies",
      "note": "Pas d'apps à changer. Aucun effort.",
      "mascotAlt": "Mascotte Cartifi débordée par les prix"
    },
    "proof": {
      "eyebrow": "Comparaison réelle",
      "titleA": "Même liste.",
      "titleB": "Total différent.",
      "subtitle": "Cinq mêmes articles, trois magasins. L'écart s'accumule chaque semaine.",
      "colItem": "Article",
      "colPick": "Choix Cartifi",
      "total": "Total",
      "youSave": "Vous économisez",
      "onThisList": "rien que sur cette liste",
      "items": [
        {
          "name": "Lait 1 L"
        },
        {
          "name": "Pain"
        },
        {
          "name": "Filet de poulet 1 kg"
        },
        {
          "name": "Pommes 1 kg"
        },
        {
          "name": "Œufs (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Avant",
      "beforeTitle": "Comparer, changer, espérer.",
      "apps": "5 apps de magasins ouvertes",
      "time": "30+ min perdues par semaine",
      "flyers": "Prospectus, captures, doutes",
      "quoteA": "Vous pouvez continuer à comparer…",
      "quoteB": "ou nous laisser faire.",
      "after": "Après",
      "afterTitle": "Un résultat clair. Terminé.",
      "saved": "économisés",
      "summary": "12 articles, optimisés sur 3 magasins en 2,4 s",
      "mascotAlt": "Mascotte Cartifi détendue"
    },
    "life": {
      "titleA": "Moins de temps sur les prix.",
      "titleB": "Plus de temps pour vivre.",
      "walk": "Une promenade plus longue",
      "hike": "Une randonnée tranquille",
      "coffee": "Un café plus lent",
      "family": "Du temps en famille",
      "walkSub": "Parce que vous ne comparez plus les prix.",
      "hikeSub": "Le sentier n'attend pas. Vous non plus.",
      "coffeeSub": "Buvez-le chaud. Sans stress.",
      "familySub": "Soyez présent, pas sur votre téléphone."
    },
    "appDemo": {
      "eyebrow": "Comment ça marche",
      "titleA": "Du panier",
      "titleB": "aux économies.",
      "subtitle": "Quatre tapotements. Un panier au meilleur prix.",
      "scrollHint": "Faites défiler pour voir le flux",
      "steps": [
        {
          "tag": "Étape 1",
          "title": "Créez votre panier",
          "body": "Tapez, collez ou photographiez votre liste.",
          "screen": {
            "header": "Mon panier",
            "search": "Rechercher des articles…",
            "items": [
              {
                "name": "Lait 1 L",
                "qty": "x2"
              },
              {
                "name": "Pain",
                "qty": "x1"
              },
              {
                "name": "Pommes 1 kg",
                "qty": "x1"
              },
              {
                "name": "Œufs (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Ajouter un article"
          }
        },
        {
          "tag": "Étape 2",
          "title": "Nous trouvons les meilleurs prix",
          "body": "Cartifi compare chaque magasin, chaque prix.",
          "screen": {
            "header": "Optimisation…",
            "sub": "Comparaison de 3 magasins",
            "stores": [
              "Carrefour",
              "Lidl",
              "Auchan"
            ],
            "picked": "Meilleur choix"
          }
        },
        {
          "tag": "Étape 3",
          "title": "Partagez votre panier",
          "body": "Envoyez le panier à votre famille en un clic.",
          "screen": {
            "header": "Partager le panier",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Messages",
              "Copier le lien",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Étape 4",
          "title": "Économisez temps et argent.",
          "body": "Total le plus bas. Moins d'effort.",
          "screen": {
            "header": "Vous avez économisé",
            "summary": "12 articles · 3 magasins · 2,4 s",
            "cta": "Voir le panier le moins cher"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Soyez le premier",
      "titleA": "Voyez vos économies",
      "titleB": "avant tout le monde.",
      "subtitle": "Laissez votre e-mail et nous vous enverrons un accès anticipé.",
      "placeholder": "vous@email.fr",
      "ctaIdle": "Accès anticipé",
      "ctaLoading": "Réservation…",
      "ctaDone": "Vous y êtes",
      "footnote": "Gratuit. Pas de spam. Un e-mail au lancement.",
      "welcome": "Bienvenue",
      "welcomeBody": "Place réservée. Surveillez votre boîte de réception."
    },
    "how": {
      "titleA": "Trois étapes.",
      "titleB": "C'est tout.",
      "steps": [
        {
          "title": "Ajoutez votre liste",
          "body": "Tapez, collez ou photographiez ce qu'il vous faut."
        },
        {
          "title": "Nous comparons",
          "body": "Cartifi vérifie chaque magasin et prix."
        },
        {
          "title": "Le panier le moins cher",
          "body": "Un résultat. Total le plus bas."
        }
      ]
    },
    "finalCta": {
      "titleA": "Voyez combien vous pouvez économiser",
      "titleB": "à votre prochaine course.",
      "sub": "Gratuit. Rapide. Sans effort.",
      "cta": "Essayer Cartifi",
      "tagline": "Mêmes courses. Total plus bas.",
      "mascotAlt": "Mascotte Cartifi heureuse"
    },
    "finalCta2": {
      "eyebrow": "Quand vous voulez",
      "titleA": "Prêt à économiser",
      "titleB": "chaque semaine ?",
      "subtitle": "Obtenez votre premier panier optimisé et voyez où va votre argent.",
      "placeholder": "vous@email.fr",
      "ctaIdle": "Voir mes économies",
      "ctaLoading": "Un instant…",
      "ctaDone": "En route",
      "footnote": "Gratuit. Pas de spam. Un seul e-mail.",
      "welcome": "C'est fait",
      "welcomeBody": "Votre rapport arrive. Surveillez votre boîte."
    },
    "footer": {
      "tagline": "Mêmes courses. Total plus bas.",
      "privacy": "Confidentialité",
      "terms": "Conditions",
      "gdpr": "RGPD",
      "country": "Pays"
    },
    "legal": {
      "privacyTitle": "Politique de confidentialité",
      "termsTitle": "Conditions de service",
      "gdprTitle": "RGPD",
      "lastUpdated": "Dernière mise à jour",
      "back": "Retour à l'accueil"
    }
  },
  "no": {
    "nav": {
      "how": "Slik fungerer det",
      "try": "Prøv det",
      "proof": "Besparelser",
      "cta": "Se besparelser"
    },
    "hero": {
      "badge": "For smarte handlere",
      "headlineA": "Hvor mye betaler du for mye for mat?",
      "headlineB": "Samme varer. Lavere total.",
      "subtitle": "Cartifi lager den billigste handlekurven din på tvers av butikker, umiddelbart.",
      "cta": "Se besparelser",
      "note": "Ingen app-bytting. Ingen sammenligning.",
      "mascotAlt": "Cartifi-maskot overveldet av priser"
    },
    "proof": {
      "eyebrow": "Ekte sammenligning",
      "titleA": "Samme liste.",
      "titleB": "Forskjellig total.",
      "subtitle": "Samme fem varer, tre butikker. Forskjellen vokser hver uke.",
      "colItem": "Vare",
      "colPick": "Cartifi-valg",
      "total": "Totalt",
      "youSave": "Du sparer",
      "onThisList": "bare på denne listen",
      "items": [
        {
          "name": "Melk 1 L"
        },
        {
          "name": "Brød"
        },
        {
          "name": "Kyllingfilet 1 kg"
        },
        {
          "name": "Epler 1 kg"
        },
        {
          "name": "Egg (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Før",
      "beforeTitle": "Sammenligne, bytte, håpe.",
      "apps": "5 butikk-apper åpne",
      "time": "30+ minutter tapt hver uke",
      "flyers": "Tilbudsaviser, skjermbilder, tvil",
      "quoteA": "Du kan fortsette å sammenligne…",
      "quoteB": "eller la oss gjøre det.",
      "after": "Etter",
      "afterTitle": "Ett klart resultat. Ferdig.",
      "saved": "spart",
      "summary": "12 varer, optimert i 3 butikker på 2,4 s",
      "mascotAlt": "Rolig Cartifi-maskot"
    },
    "life": {
      "titleA": "Mindre tid på priser.",
      "titleB": "Mer tid til å leve.",
      "walk": "En lengre tur",
      "hike": "En rolig fjelltur",
      "coffee": "En tregere kaffe",
      "family": "Tid med familien",
      "walkSub": "Fordi du ikke sammenligner priser.",
      "hikeSub": "Stien venter ikke. Det burde ikke du heller.",
      "coffeeSub": "Drikk den varm. Uten stress.",
      "familySub": "Vær der, ikke på telefonen."
    },
    "appDemo": {
      "eyebrow": "Slik fungerer det",
      "titleA": "Fra handlekurv",
      "titleB": "til besparelser.",
      "subtitle": "Fire trykk. Én billigste handlekurv.",
      "scrollHint": "Bla for å se flyten",
      "steps": [
        {
          "tag": "Trinn 1",
          "title": "Lag handlekurven",
          "body": "Skriv, lim inn eller fotografer listen din.",
          "screen": {
            "header": "Min handlekurv",
            "search": "Søk varer…",
            "items": [
              {
                "name": "Melk 1 L",
                "qty": "x2"
              },
              {
                "name": "Brød",
                "qty": "x1"
              },
              {
                "name": "Epler 1 kg",
                "qty": "x1"
              },
              {
                "name": "Egg (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Legg til vare"
          }
        },
        {
          "tag": "Trinn 2",
          "title": "Vi finner beste pris",
          "body": "Cartifi sammenligner hver butikk umiddelbart.",
          "screen": {
            "header": "Optimerer…",
            "sub": "Sammenligner 3 butikker",
            "stores": [
              "Rema 1000",
              "Kiwi",
              "Coop"
            ],
            "picked": "Billigste valg"
          }
        },
        {
          "tag": "Trinn 3",
          "title": "Del handlekurven",
          "body": "Send handlekurven til familien med ett trykk.",
          "screen": {
            "header": "Del handlekurv",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Meldinger",
              "Kopier lenke",
              "E-post"
            ]
          }
        },
        {
          "tag": "Trinn 4",
          "title": "Spar tid og penger.",
          "body": "Lavest total. Mindre arbeid.",
          "screen": {
            "header": "Du sparte",
            "summary": "12 varer · 3 butikker · 2,4 s",
            "cta": "Se billigste handlekurv"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Vær først",
      "titleA": "Se besparelsene",
      "titleB": "før alle andre.",
      "subtitle": "Legg igjen e-posten, så sender vi tidlig tilgang.",
      "placeholder": "du@epost.no",
      "ctaIdle": "Tidlig tilgang",
      "ctaLoading": "Lagrer plass…",
      "ctaDone": "Du er inne",
      "footnote": "Gratis. Ingen spam. Én e-post ved lansering.",
      "welcome": "Velkommen",
      "welcomeBody": "Plassen din er reservert. Sjekk innboksen snart."
    },
    "how": {
      "titleA": "Tre trinn.",
      "titleB": "Det er det.",
      "steps": [
        {
          "title": "Legg til listen",
          "body": "Skriv, lim inn eller fotografer det du trenger."
        },
        {
          "title": "Vi sammenligner",
          "body": "Cartifi sjekker hver butikk og pris."
        },
        {
          "title": "Billigste handlekurv",
          "body": "Ett resultat. Lavest total."
        }
      ]
    },
    "finalCta": {
      "titleA": "Se hvor mye du kan spare",
      "titleB": "på neste handletur.",
      "sub": "Gratis. Raskt. Uten innsats.",
      "cta": "Prøv Cartifi",
      "tagline": "Samme varer. Lavere total.",
      "mascotAlt": "Glad Cartifi-maskot"
    },
    "finalCta2": {
      "eyebrow": "Når du er klar",
      "titleA": "Klar for å spare",
      "titleB": "hver uke?",
      "subtitle": "Få første optimerte handlekurv og se hvor pengene går.",
      "placeholder": "du@epost.no",
      "ctaIdle": "Se besparelsene mine",
      "ctaLoading": "Et øyeblikk…",
      "ctaDone": "På vei",
      "footnote": "Gratis. Ingen spam. Én e-post.",
      "welcome": "Klar",
      "welcomeBody": "Rapporten kommer. Følg med i innboksen."
    },
    "footer": {
      "tagline": "Samme varer. Lavere total.",
      "privacy": "Personvern",
      "terms": "Vilkår",
      "gdpr": "GDPR",
      "country": "Land"
    },
    "legal": {
      "privacyTitle": "Personvernerklæring",
      "termsTitle": "Brukervilkår",
      "gdprTitle": "GDPR",
      "lastUpdated": "Sist oppdatert",
      "back": "Tilbake til hjem"
    }
  },
  "da": {
    "nav": {
      "how": "Sådan virker det",
      "try": "Prøv det",
      "proof": "Besparelser",
      "cta": "Se besparelser"
    },
    "hero": {
      "badge": "Til smarte indkøbere",
      "headlineA": "Hvor meget betaler du for meget for dagligvarer?",
      "headlineB": "Samme varer. Lavere total.",
      "subtitle": "Cartifi laver din billigste indkøbskurv på tværs af butikker, øjeblikkeligt.",
      "cta": "Se besparelser",
      "note": "Ingen app-skift. Ingen sammenligning.",
      "mascotAlt": "Cartifi-maskot overvældet af priser"
    },
    "proof": {
      "eyebrow": "Ægte sammenligning",
      "titleA": "Samme liste.",
      "titleB": "Forskellig total.",
      "subtitle": "Samme fem varer, tre butikker. Forskellen vokser hver uge.",
      "colItem": "Vare",
      "colPick": "Cartifi-valg",
      "total": "I alt",
      "youSave": "Du sparer",
      "onThisList": "kun på denne liste",
      "items": [
        {
          "name": "Mælk 1 L"
        },
        {
          "name": "Brød"
        },
        {
          "name": "Kyllingebryst 1 kg"
        },
        {
          "name": "Æbler 1 kg"
        },
        {
          "name": "Æg (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Før",
      "beforeTitle": "Sammenligne, skifte, håbe.",
      "apps": "5 butiks-apps åbne",
      "time": "30+ minutter tabt hver uge",
      "flyers": "Tilbudsaviser, screenshots, tvivl",
      "quoteA": "Du kan blive ved at sammenligne…",
      "quoteB": "eller lade os gøre det.",
      "after": "Efter",
      "afterTitle": "Ét klart resultat. Færdig.",
      "saved": "sparet",
      "summary": "12 varer, optimeret på 3 butikker på 2,4 s",
      "mascotAlt": "Rolig Cartifi-maskot"
    },
    "life": {
      "titleA": "Mindre tid på priser.",
      "titleB": "Mere tid til at leve.",
      "walk": "En længere gåtur",
      "hike": "En rolig vandring",
      "coffee": "En langsommere kaffe",
      "family": "Tid med familien",
      "walkSub": "Fordi du ikke sammenligner priser.",
      "hikeSub": "Stien venter ikke. Det skal du heller ikke.",
      "coffeeSub": "Drik den varm. Uden stress.",
      "familySub": "Vær der, ikke på telefonen."
    },
    "appDemo": {
      "eyebrow": "Sådan virker det",
      "titleA": "Fra kurv",
      "titleB": "til besparelser.",
      "subtitle": "Fire tryk. Én billigste kurv.",
      "scrollHint": "Scroll for at se forløbet",
      "steps": [
        {
          "tag": "Trin 1",
          "title": "Lav din kurv",
          "body": "Skriv, indsæt eller fotografer din liste.",
          "screen": {
            "header": "Min kurv",
            "search": "Søg varer…",
            "items": [
              {
                "name": "Mælk 1 L",
                "qty": "x2"
              },
              {
                "name": "Brød",
                "qty": "x1"
              },
              {
                "name": "Æbler 1 kg",
                "qty": "x1"
              },
              {
                "name": "Æg (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Tilføj vare"
          }
        },
        {
          "tag": "Trin 2",
          "title": "Vi finder bedste priser",
          "body": "Cartifi sammenligner alle butikker med det samme.",
          "screen": {
            "header": "Optimerer…",
            "sub": "Sammenligner 3 butikker",
            "stores": [
              "Netto",
              "Lidl",
              "Føtex"
            ],
            "picked": "Billigste valg"
          }
        },
        {
          "tag": "Trin 3",
          "title": "Del din kurv",
          "body": "Send kurven til familien med ét tryk.",
          "screen": {
            "header": "Del kurv",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Beskeder",
              "Kopier link",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Trin 4",
          "title": "Spar tid og penge.",
          "body": "Laveste total. Mindre besvær.",
          "screen": {
            "header": "Du sparede",
            "summary": "12 varer · 3 butikker · 2,4 s",
            "cta": "Se billigste kurv"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Vær først",
      "titleA": "Se dine besparelser",
      "titleB": "før alle andre.",
      "subtitle": "Læg din e-mail, og vi sender tidlig adgang.",
      "placeholder": "dig@email.dk",
      "ctaIdle": "Tidlig adgang",
      "ctaLoading": "Reserverer plads…",
      "ctaDone": "Du er med",
      "footnote": "Gratis. Ingen spam. Én e-mail ved lancering.",
      "welcome": "Velkommen",
      "welcomeBody": "Din plads er gemt. Tjek indbakken snart."
    },
    "how": {
      "titleA": "Tre trin.",
      "titleB": "Det er det.",
      "steps": [
        {
          "title": "Tilføj din liste",
          "body": "Skriv, indsæt eller fotografer hvad du har brug for."
        },
        {
          "title": "Vi sammenligner",
          "body": "Cartifi tjekker hver butik og pris."
        },
        {
          "title": "Billigste kurv",
          "body": "Ét resultat. Laveste total."
        }
      ]
    },
    "finalCta": {
      "titleA": "Se hvor meget du kan spare",
      "titleB": "på næste indkøb.",
      "sub": "Gratis. Hurtigt. Uden besvær.",
      "cta": "Prøv Cartifi",
      "tagline": "Samme varer. Lavere total.",
      "mascotAlt": "Glad Cartifi-maskot"
    },
    "finalCta2": {
      "eyebrow": "Når du er klar",
      "titleA": "Klar til at spare",
      "titleB": "hver uge?",
      "subtitle": "Få din første optimerede kurv og se hvor pengene går hen.",
      "placeholder": "dig@email.dk",
      "ctaIdle": "Se mine besparelser",
      "ctaLoading": "Et øjeblik…",
      "ctaDone": "På vej",
      "footnote": "Gratis. Ingen spam. Én e-mail.",
      "welcome": "Klar",
      "welcomeBody": "Din rapport er på vej. Hold øje med indbakken."
    },
    "footer": {
      "tagline": "Samme varer. Lavere total.",
      "privacy": "Privatliv",
      "terms": "Vilkår",
      "gdpr": "GDPR",
      "country": "Land"
    },
    "legal": {
      "privacyTitle": "Privatlivspolitik",
      "termsTitle": "Servicevilkår",
      "gdprTitle": "GDPR",
      "lastUpdated": "Sidst opdateret",
      "back": "Tilbage til forsiden"
    }
  },
  "sv": {
    "nav": {
      "how": "Så funkar det",
      "try": "Testa",
      "proof": "Besparingar",
      "cta": "Se besparingar"
    },
    "hero": {
      "badge": "För smarta shoppare",
      "headlineA": "Hur mycket betalar du för mycket för mat?",
      "headlineB": "Samma varor. Lägre total.",
      "subtitle": "Cartifi bygger din billigaste varukorg över alla butiker direkt.",
      "cta": "Se besparingar",
      "note": "Inga app-byten. Ingen jämförelse.",
      "mascotAlt": "Cartifi-maskot överväldigad av priser"
    },
    "proof": {
      "eyebrow": "Riktig jämförelse",
      "titleA": "Samma lista.",
      "titleB": "Olika total.",
      "subtitle": "Samma fem varor, tre butiker. Skillnaden växer varje vecka.",
      "colItem": "Vara",
      "colPick": "Cartifi-val",
      "total": "Totalt",
      "youSave": "Du sparar",
      "onThisList": "bara på den här listan",
      "items": [
        {
          "name": "Mjölk 1 L"
        },
        {
          "name": "Bröd"
        },
        {
          "name": "Kycklingfilé 1 kg"
        },
        {
          "name": "Äpplen 1 kg"
        },
        {
          "name": "Ägg (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Innan",
      "beforeTitle": "Jämföra, byta, hoppas.",
      "apps": "5 butiks-appar öppna",
      "time": "30+ minuter förlorade per vecka",
      "flyers": "Reklamblad, skärmbilder, tvivel",
      "quoteA": "Du kan fortsätta jämföra…",
      "quoteB": "eller låta oss göra det.",
      "after": "Efter",
      "afterTitle": "Ett tydligt resultat. Klart.",
      "saved": "sparat",
      "summary": "12 varor, optimerat över 3 butiker på 2,4 s",
      "mascotAlt": "Lugn Cartifi-maskot"
    },
    "life": {
      "titleA": "Mindre tid på priser.",
      "titleB": "Mer tid att leva.",
      "walk": "En längre promenad",
      "hike": "En lugn vandring",
      "coffee": "Ett långsammare kaffe",
      "family": "Tid med familjen",
      "walkSub": "För att du inte jämför priser.",
      "hikeSub": "Stigen väntar inte. Inte du heller.",
      "coffeeSub": "Drick det varmt. Utan stress.",
      "familySub": "Var där, inte på telefonen."
    },
    "appDemo": {
      "eyebrow": "Så funkar det",
      "titleA": "Från varukorg",
      "titleB": "till besparingar.",
      "subtitle": "Fyra tryck. En billigaste varukorg.",
      "scrollHint": "Scrolla för att se flödet",
      "steps": [
        {
          "tag": "Steg 1",
          "title": "Skapa din varukorg",
          "body": "Skriv, klistra in eller fotografera din lista.",
          "screen": {
            "header": "Min varukorg",
            "search": "Sök varor…",
            "items": [
              {
                "name": "Mjölk 1 L",
                "qty": "x2"
              },
              {
                "name": "Bröd",
                "qty": "x1"
              },
              {
                "name": "Äpplen 1 kg",
                "qty": "x1"
              },
              {
                "name": "Ägg (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Lägg till vara"
          }
        },
        {
          "tag": "Steg 2",
          "title": "Vi hittar bästa priset",
          "body": "Cartifi jämför varje butik direkt.",
          "screen": {
            "header": "Optimerar…",
            "sub": "Jämför 3 butiker",
            "stores": [
              "ICA",
              "Lidl",
              "Coop"
            ],
            "picked": "Billigaste val"
          }
        },
        {
          "tag": "Steg 3",
          "title": "Dela din varukorg",
          "body": "Skicka varukorgen till familjen med ett tryck.",
          "screen": {
            "header": "Dela varukorg",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Meddelanden",
              "Kopiera länk",
              "E-post"
            ]
          }
        },
        {
          "tag": "Steg 4",
          "title": "Spara tid och pengar.",
          "body": "Lägsta total. Mindre arbete.",
          "screen": {
            "header": "Du sparade",
            "summary": "12 varor · 3 butiker · 2,4 s",
            "cta": "Se billigaste varukorg"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Var först",
      "titleA": "Se dina besparingar",
      "titleB": "före alla andra.",
      "subtitle": "Lämna din e-post så skickar vi tidig åtkomst.",
      "placeholder": "du@epost.se",
      "ctaIdle": "Tidig åtkomst",
      "ctaLoading": "Reserverar plats…",
      "ctaDone": "Du är med",
      "footnote": "Gratis. Ingen spam. Ett mejl vid lansering.",
      "welcome": "Välkommen",
      "welcomeBody": "Din plats är reserverad. Kolla inkorgen snart."
    },
    "how": {
      "titleA": "Tre steg.",
      "titleB": "Det är allt.",
      "steps": [
        {
          "title": "Lägg till listan",
          "body": "Skriv, klistra in eller fotografera vad du behöver."
        },
        {
          "title": "Vi jämför",
          "body": "Cartifi kollar varje butik och pris."
        },
        {
          "title": "Billigaste varukorgen",
          "body": "Ett resultat. Lägsta total."
        }
      ]
    },
    "finalCta": {
      "titleA": "Se hur mycket du kan spara",
      "titleB": "på nästa matinköp.",
      "sub": "Gratis. Snabbt. Utan ansträngning.",
      "cta": "Testa Cartifi",
      "tagline": "Samma varor. Lägre total.",
      "mascotAlt": "Glad Cartifi-maskot"
    },
    "finalCta2": {
      "eyebrow": "När du är redo",
      "titleA": "Redo att spara",
      "titleB": "varje vecka?",
      "subtitle": "Få din första optimerade varukorg och se vart pengarna går.",
      "placeholder": "du@epost.se",
      "ctaIdle": "Se mina besparingar",
      "ctaLoading": "Ett ögonblick…",
      "ctaDone": "På väg",
      "footnote": "Gratis. Ingen spam. Ett mejl.",
      "welcome": "Klart",
      "welcomeBody": "Din rapport är på väg. Håll koll på inkorgen."
    },
    "footer": {
      "tagline": "Samma varor. Lägre total.",
      "privacy": "Integritet",
      "terms": "Villkor",
      "gdpr": "GDPR",
      "country": "Land"
    },
    "legal": {
      "privacyTitle": "Integritetspolicy",
      "termsTitle": "Användarvillkor",
      "gdprTitle": "GDPR",
      "lastUpdated": "Senast uppdaterad",
      "back": "Tillbaka till start"
    }
  },
  "fi": {
    "nav": {
      "how": "Näin se toimii",
      "try": "Kokeile",
      "proof": "Säästöt",
      "cta": "Katso säästöt"
    },
    "hero": {
      "badge": "Fiksuille ostajille",
      "headlineA": "Kuinka paljon ylimaksat ruokakaupassa?",
      "headlineB": "Samat ostokset. Pienempi summa.",
      "subtitle": "Cartifi luo halvimman ostoskorisi kaikista kaupoista heti.",
      "cta": "Katso säästöt",
      "note": "Ei sovellusten vaihtoa. Ei vertailua.",
      "mascotAlt": "Cartifi-maskotti hintojen uuvuttamana"
    },
    "proof": {
      "eyebrow": "Aito vertailu",
      "titleA": "Sama lista.",
      "titleB": "Eri summa.",
      "subtitle": "Samat viisi tuotetta, kolme kauppaa. Ero kasvaa joka viikko.",
      "colItem": "Tuote",
      "colPick": "Cartifin valinta",
      "total": "Yhteensä",
      "youSave": "Säästät",
      "onThisList": "pelkästään tällä listalla",
      "items": [
        {
          "name": "Maito 1 L"
        },
        {
          "name": "Leipä"
        },
        {
          "name": "Kananrintafilee 1 kg"
        },
        {
          "name": "Omenat 1 kg"
        },
        {
          "name": "Kananmunat (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Ennen",
      "beforeTitle": "Vertailua, vaihtelua, toivoa.",
      "apps": "5 kauppasovellusta auki",
      "time": "30+ minuuttia hukkaan viikossa",
      "flyers": "Mainoslehdet, kuvakaappaukset, epäilykset",
      "quoteA": "Voit jatkaa vertailua…",
      "quoteB": "tai antaa meidän hoitaa.",
      "after": "Jälkeen",
      "afterTitle": "Yksi selkeä tulos. Valmis.",
      "saved": "säästetty",
      "summary": "12 tuotetta, optimoitu 3 kaupassa 2,4 s",
      "mascotAlt": "Rauhallinen Cartifi-maskotti"
    },
    "life": {
      "titleA": "Vähemmän aikaa hintoihin.",
      "titleB": "Enemmän aikaa elämään.",
      "walk": "Pidempi kävely",
      "hike": "Rauhallinen vaellus",
      "coffee": "Hitaampi kahvi",
      "family": "Aikaa perheelle",
      "walkSub": "Koska et vertaile hintoja.",
      "hikeSub": "Polku ei odota. Et sinäkään.",
      "coffeeSub": "Juo se lämpimänä. Ilman stressiä.",
      "familySub": "Ole läsnä, älä puhelimessa."
    },
    "appDemo": {
      "eyebrow": "Näin se toimii",
      "titleA": "Korista",
      "titleB": "säästöihin.",
      "subtitle": "Neljä napautusta. Yksi halvin kori.",
      "scrollHint": "Vieritä nähdäksesi kulun",
      "steps": [
        {
          "tag": "Vaihe 1",
          "title": "Luo ostoskorisi",
          "body": "Kirjoita, liitä tai kuvaa listasi.",
          "screen": {
            "header": "Oma kori",
            "search": "Etsi tuotteita…",
            "items": [
              {
                "name": "Maito 1 L",
                "qty": "x2"
              },
              {
                "name": "Leipä",
                "qty": "x1"
              },
              {
                "name": "Omenat 1 kg",
                "qty": "x1"
              },
              {
                "name": "Kananmunat (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Lisää tuote"
          }
        },
        {
          "tag": "Vaihe 2",
          "title": "Löydämme parhaat hinnat",
          "body": "Cartifi vertaa kaikki kaupat heti.",
          "screen": {
            "header": "Optimoi…",
            "sub": "Vertaa 3 kauppaa",
            "stores": [
              "S-Market",
              "Lidl",
              "K-Market"
            ],
            "picked": "Halvin valinta"
          }
        },
        {
          "tag": "Vaihe 3",
          "title": "Jaa korisi",
          "body": "Lähetä kori perheelle yhdellä napautuksella.",
          "screen": {
            "header": "Jaa kori",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Viestit",
              "Kopioi linkki",
              "Sähköposti"
            ]
          }
        },
        {
          "tag": "Vaihe 4",
          "title": "Säästä aikaa ja rahaa.",
          "body": "Pienin summa. Vähemmän vaivaa.",
          "screen": {
            "header": "Säästit",
            "summary": "12 tuotetta · 3 kauppaa · 2,4 s",
            "cta": "Näytä halvin kori"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Ole ensimmäinen",
      "titleA": "Näe säästösi",
      "titleB": "ennen muita.",
      "subtitle": "Jätä sähköpostisi, niin lähetämme aikaisen pääsyn.",
      "placeholder": "sina@email.fi",
      "ctaIdle": "Aikainen pääsy",
      "ctaLoading": "Varataan paikkaa…",
      "ctaDone": "Olet mukana",
      "footnote": "Ilmainen. Ei roskapostia. Yksi viesti julkaisussa.",
      "welcome": "Tervetuloa",
      "welcomeBody": "Paikkasi on varattu. Tarkista postilaatikkosi pian."
    },
    "how": {
      "titleA": "Kolme vaihetta.",
      "titleB": "Siinä se.",
      "steps": [
        {
          "title": "Lisää listasi",
          "body": "Kirjoita, liitä tai kuvaa mitä tarvitset."
        },
        {
          "title": "Vertailemme",
          "body": "Cartifi tarkistaa jokaisen kaupan ja hinnan."
        },
        {
          "title": "Halvin kori",
          "body": "Yksi tulos. Pienin summa."
        }
      ]
    },
    "finalCta": {
      "titleA": "Katso, kuinka paljon säästät",
      "titleB": "seuraavalla ostosreissulla.",
      "sub": "Ilmainen. Nopea. Vaivaton.",
      "cta": "Kokeile Cartifia",
      "tagline": "Samat ostokset. Pienempi summa.",
      "mascotAlt": "Iloinen Cartifi-maskotti"
    },
    "finalCta2": {
      "eyebrow": "Kun olet valmis",
      "titleA": "Valmis säästämään",
      "titleB": "joka viikko?",
      "subtitle": "Hanki ensimmäinen optimoitu korisi ja näe minne rahat menevät.",
      "placeholder": "sina@email.fi",
      "ctaIdle": "Näytä säästöni",
      "ctaLoading": "Hetkinen…",
      "ctaDone": "Matkalla",
      "footnote": "Ilmainen. Ei roskapostia. Yksi viesti.",
      "welcome": "Valmis",
      "welcomeBody": "Raporttisi on tulossa. Pidä silmällä postilaatikkoa."
    },
    "footer": {
      "tagline": "Samat ostokset. Pienempi summa.",
      "privacy": "Tietosuoja",
      "terms": "Ehdot",
      "gdpr": "GDPR",
      "country": "Maa"
    },
    "legal": {
      "privacyTitle": "Tietosuojakäytäntö",
      "termsTitle": "Käyttöehdot",
      "gdprTitle": "GDPR",
      "lastUpdated": "Viimeksi päivitetty",
      "back": "Takaisin etusivulle"
    }
  },
  "hr": {
    "nav": {
      "how": "Kako funkcionira",
      "try": "Isprobaj",
      "proof": "Uštede",
      "cta": "Vidi uštede"
    },
    "hero": {
      "badge": "Za pametne kupce",
      "headlineA": "Koliko preplaćuješ za namirnice?",
      "headlineB": "Iste namirnice. Niži račun.",
      "subtitle": "Cartifi odmah slaže najjeftiniju košaricu kroz sve trgovine.",
      "cta": "Vidi uštede",
      "note": "Bez prebacivanja aplikacija. Bez napora.",
      "mascotAlt": "Cartifi maskota preplavljena cijenama"
    },
    "proof": {
      "eyebrow": "Stvarna usporedba",
      "titleA": "Ista lista.",
      "titleB": "Drugi iznos.",
      "subtitle": "Istih pet artikala, tri trgovine. Razlika raste svaki tjedan.",
      "colItem": "Artikl",
      "colPick": "Cartifi izbor",
      "total": "Ukupno",
      "youSave": "Štediš",
      "onThisList": "samo na ovoj listi",
      "items": [
        {
          "name": "Mlijeko 1 L"
        },
        {
          "name": "Kruh"
        },
        {
          "name": "Pileća prsa 1 kg"
        },
        {
          "name": "Jabuke 1 kg"
        },
        {
          "name": "Jaja (10)"
        }
      ]
    },
    "beforeAfter": {
      "before": "Prije",
      "beforeTitle": "Usporedba, prebacivanje, nada.",
      "apps": "5 otvorenih aplikacija",
      "time": "30+ minuta tjedno izgubljeno",
      "flyers": "Letci, snimke zaslona, sumnje",
      "quoteA": "Možeš nastaviti uspoređivati…",
      "quoteB": "ili nas pustiti da to napravimo.",
      "after": "Nakon",
      "afterTitle": "Jedan jasan rezultat. Gotovo.",
      "saved": "ušteđeno",
      "summary": "12 artikala, optimizirano u 3 trgovine za 2,4 s",
      "mascotAlt": "Smirena Cartifi maskota"
    },
    "life": {
      "titleA": "Manje vremena na cijenama.",
      "titleB": "Više vremena za život.",
      "walk": "Duža šetnja",
      "hike": "Mirno planinarenje",
      "coffee": "Sporija kava",
      "family": "Vrijeme s obitelji",
      "walkSub": "Jer ne uspoređuješ cijene.",
      "hikeSub": "Staza ne čeka. Ni ti ne bi trebao.",
      "coffeeSub": "Popij je toplu. Bez stresa.",
      "familySub": "Budi tu, ne na mobitelu."
    },
    "appDemo": {
      "eyebrow": "Kako funkcionira",
      "titleA": "Iz košarice",
      "titleB": "u uštede.",
      "subtitle": "Četiri tapanja. Jedna najjeftinija košarica.",
      "scrollHint": "Pomakni za prikaz tijeka",
      "steps": [
        {
          "tag": "Korak 1",
          "title": "Stvori košaricu",
          "body": "Upiši, zalijepi ili fotografiraj svoju listu.",
          "screen": {
            "header": "Moja košarica",
            "search": "Pretraži artikle…",
            "items": [
              {
                "name": "Mlijeko 1 L",
                "qty": "x2"
              },
              {
                "name": "Kruh",
                "qty": "x1"
              },
              {
                "name": "Jabuke 1 kg",
                "qty": "x1"
              },
              {
                "name": "Jaja (10)",
                "qty": "x1"
              }
            ],
            "cta": "+ Dodaj artikl"
          }
        },
        {
          "tag": "Korak 2",
          "title": "Nalazimo najbolje cijene",
          "body": "Cartifi uspoređuje svaku trgovinu odmah.",
          "screen": {
            "header": "Optimiziram…",
            "sub": "Uspoređujem 3 trgovine",
            "stores": [
              "Konzum",
              "Lidl",
              "Plodine"
            ],
            "picked": "Najjeftiniji izbor"
          }
        },
        {
          "tag": "Korak 3",
          "title": "Podijeli košaricu",
          "body": "Pošalji košaricu obitelji jednim tapom.",
          "screen": {
            "header": "Podijeli košaricu",
            "link": "cartifi.ai/c/9xq2",
            "options": [
              "WhatsApp",
              "Poruke",
              "Kopiraj link",
              "E-mail"
            ]
          }
        },
        {
          "tag": "Korak 4",
          "title": "Uštedi vrijeme i novac.",
          "body": "Najniži iznos. Manje truda.",
          "screen": {
            "header": "Uštedio si",
            "summary": "12 artikala · 3 trgovine · 2,4 s",
            "cta": "Pogledaj najjeftiniju košaricu"
          }
        }
      ]
    },
    "demo": {
      "eyebrow": "Budi prvi",
      "titleA": "Vidi svoje uštede",
      "titleB": "prije svih.",
      "subtitle": "Ostavi e-mail i poslat ćemo ti rani pristup.",
      "placeholder": "ti@email.hr",
      "ctaIdle": "Rani pristup",
      "ctaLoading": "Spremam mjesto…",
      "ctaDone": "Unutra si",
      "footnote": "Besplatno. Bez spama. Jedan e-mail pri pokretanju.",
      "welcome": "Dobrodošao",
      "welcomeBody": "Tvoje mjesto je rezervirano. Provjeri sandučić uskoro."
    },
    "how": {
      "titleA": "Tri koraka.",
      "titleB": "To je sve.",
      "steps": [
        {
          "title": "Dodaj listu",
          "body": "Upiši, zalijepi ili fotografiraj što trebaš."
        },
        {
          "title": "Mi uspoređujemo",
          "body": "Cartifi provjerava svaku trgovinu i cijenu."
        },
        {
          "title": "Najjeftinija košarica",
          "body": "Jedan rezultat. Najniži iznos."
        }
      ]
    },
    "finalCta": {
      "titleA": "Vidi koliko možeš uštedjeti",
      "titleB": "na sljedećoj kupnji.",
      "sub": "Besplatno. Brzo. Bez napora.",
      "cta": "Isprobaj Cartifi",
      "tagline": "Iste namirnice. Niži račun.",
      "mascotAlt": "Sretna Cartifi maskota"
    },
    "finalCta2": {
      "eyebrow": "Kad budeš spreman",
      "titleA": "Spreman štedjeti",
      "titleB": "svaki tjedan?",
      "subtitle": "Dobij prvu optimiziranu košaricu i vidi gdje ti ide novac.",
      "placeholder": "ti@email.hr",
      "ctaIdle": "Vidi moje uštede",
      "ctaLoading": "Trenutak…",
      "ctaDone": "Na putu",
      "footnote": "Besplatno. Bez spama. Jedan e-mail.",
      "welcome": "Gotovo",
      "welcomeBody": "Izvještaj stiže. Prati sandučić."
    },
    "footer": {
      "tagline": "Iste namirnice. Niži račun.",
      "privacy": "Privatnost",
      "terms": "Uvjeti",
      "gdpr": "GDPR",
      "country": "Država"
    },
    "legal": {
      "privacyTitle": "Pravila privatnosti",
      "termsTitle": "Uvjeti korištenja",
      "gdprTitle": "GDPR",
      "lastUpdated": "Zadnje ažurirano",
      "back": "Natrag na početnu"
    }
  }
} as const;
