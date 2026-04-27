import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { LangSwitch } from "./LangSwitch";

export const Nav = () => {
  const { t } = useLang();
  return (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container flex items-center justify-between py-4">
      <a href="#top" className="flex items-center gap-2 group">
        <div className="w-9 h-9 rounded-2xl bg-primary/15 flex items-center justify-center shadow-soft">
          <span className="text-primary font-bold text-lg">c</span>
        </div>
        <span className="font-semibold tracking-tight text-lg">Cartifi<span className="text-primary">.ai</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#how" className="hover:text-foreground transition-colors">{t.nav.how}</a>
        <a href="#demo" className="hover:text-foreground transition-colors">{t.nav.try}</a>
        <a href="#proof" className="hover:text-foreground transition-colors">{t.nav.proof}</a>
      </nav>
      <div className="flex items-center gap-2">
        <LangSwitch className="hidden sm:flex" />
        <Button variant="cta" size="sm" asChild>
          <a href="#demo">{t.nav.cta}</a>
        </Button>
      </div>
    </div>
  </header>
  );
};
