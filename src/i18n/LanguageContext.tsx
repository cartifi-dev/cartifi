import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react";
import { translations, type Translations } from "./translations";
import { LOCALES, type Lang, getMeta, formatPrice as fmtPrice } from "./locales";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  meta: ReturnType<typeof getMeta>;
  formatPrice: (czk: number) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

const STORAGE_KEY = "cartifi.lang";
const SUPPORTED = LOCALES.map((l) => l.code);

const detectFromBrowser = (): Lang => {
  if (typeof navigator === "undefined") return "en";
  const navs = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((s) => s.toLowerCase().split("-")[0]);
  for (const code of navs) {
    if (SUPPORTED.includes(code as Lang)) return code as Lang;
  }
  return "en";
};

const getInitial = (): Lang => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && SUPPORTED.includes(saved)) return saved;
  return detectFromBrowser();
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const value = useMemo<Ctx>(() => {
    const meta = getMeta(lang);
    return {
      lang,
      setLang: setLangState,
      t: translations[lang],
      meta,
      formatPrice: (czk: number) => fmtPrice(czk, lang),
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
