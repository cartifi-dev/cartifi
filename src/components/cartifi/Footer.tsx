import { Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { CountrySelector } from "./CountrySelector";

export const Footer = () => {
  const { t } = useLang();
  return (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
            <span className="text-primary font-bold">c</span>
          </div>
          <span className="font-semibold">Cartifi.ai</span>
          <span className="text-sm text-muted-foreground ml-3 hidden sm:inline">{t.footer.tagline}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.privacy}</Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.terms}</Link>
          <Link to="/gdpr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.gdpr}</Link>
          <a href="mailto:hello@cartifi.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@cartifi.ai</a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Github" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          </div>
          <CountrySelector />
        </div>
      </div>
    </div>
  </footer>
  );
};
