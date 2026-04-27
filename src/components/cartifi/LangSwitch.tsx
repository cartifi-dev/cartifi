import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export const LangSwitch = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "flex items-center text-xs text-muted-foreground rounded-full border border-border px-1 py-1",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-colors",
          lang === "en"
            ? "bg-foreground text-background font-semibold"
            : "hover:text-foreground",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("cs")}
        aria-pressed={lang === "cs"}
        className={cn(
          "px-2.5 py-1 rounded-full transition-colors",
          lang === "cs"
            ? "bg-foreground text-background font-semibold"
            : "hover:text-foreground",
        )}
      >
        CZ
      </button>
    </div>
  );
};