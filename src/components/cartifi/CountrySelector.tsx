import { useLang } from "@/i18n/LanguageContext";
import { LOCALES } from "@/i18n/locales";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const CountrySelector = ({ className }: { className?: string }) => {
  const { lang, setLang, meta } = useLang();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 transition-colors backdrop-blur",
          className,
        )}
        aria-label="Select country and language"
      >
        <span className="text-base leading-none">{meta.flag}</span>
        <span className="hidden sm:inline">{meta.langNative}</span>
        <span className="text-muted-foreground/70">· {meta.currency}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 max-h-[60vh] overflow-y-auto">
        {LOCALES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={cn(
              "flex items-center gap-3 cursor-pointer",
              l.code === lang && "bg-accent",
            )}
          >
            <span className="text-lg leading-none">{l.flag}</span>
            <span className="flex-1">
              <span className="block text-sm font-medium">{l.countryNative}</span>
              <span className="block text-[11px] text-muted-foreground">
                {l.langNative} · {l.currency}
              </span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
