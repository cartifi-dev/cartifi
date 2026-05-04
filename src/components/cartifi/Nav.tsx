import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { CountrySelector } from "./CountrySelector";

export const Nav = () => {
  const { t } = useLang();
  return (
    <header className="relative w-full bg-transparent">
      <div className="container flex flex-nowrap items-center justify-between gap-3 px-4 py-3 sm:py-4">
        {/* LEFT: Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0 min-w-0">
          <div className="w-9 h-9 rounded-2xl bg-primary/15 flex items-center justify-center shadow-soft">
            <span className="text-primary font-bold text-lg">c</span>
          </div>
          <span className="font-semibold tracking-tight text-lg truncate">
            Cartifi<span className="text-primary">.ai</span>
          </span>
        </a>

        {/* CENTER: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">{t.nav.how}</a>
          <a href="#demo" className="hover:text-foreground transition-colors">{t.nav.try}</a>
          <a href="#proof" className="hover:text-foreground transition-colors">{t.nav.proof}</a>
        </nav>

        {/* RIGHT: Selector (desktop) + single primary CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <CountrySelector className="hidden md:inline-flex" />
          {/* Secondary text link — desktop only */}
          <a
            href="#proof"
            className="hidden md:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-2"
          >
            {t.nav.proof}
          </a>
          {/* Primary CTA — always visible */}
          <Button variant="cta" size="sm" asChild>
            <a href="#demo">{t.nav.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
