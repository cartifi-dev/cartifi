export type Lang =
  | "en"
  | "cs"
  | "de"
  | "pl"
  | "nl"
  | "it"
  | "fr"
  | "no"
  | "da"
  | "sv"
  | "fi"
  | "hr";

export type Currency = "EUR" | "CZK" | "PLN" | "NOK" | "DKK" | "SEK" | "GBP";

export interface LocaleMeta {
  code: Lang;
  country: string;          // English country name
  countryNative: string;    // Native country name
  langNative: string;       // Native language name
  flag: string;             // Emoji flag
  currency: Currency;
  intlLocale: string;       // BCP47 for Intl.NumberFormat
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", country: "United Kingdom", countryNative: "United Kingdom", langNative: "English", flag: "🇬🇧", currency: "GBP", intlLocale: "en-GB" },
  { code: "cs", country: "Czechia",        countryNative: "Česko",          langNative: "Čeština",  flag: "🇨🇿", currency: "CZK", intlLocale: "cs-CZ" },
  { code: "de", country: "Germany",        countryNative: "Deutschland",    langNative: "Deutsch",  flag: "🇩🇪", currency: "EUR", intlLocale: "de-DE" },
  { code: "pl", country: "Poland",         countryNative: "Polska",         langNative: "Polski",   flag: "🇵🇱", currency: "PLN", intlLocale: "pl-PL" },
  { code: "nl", country: "Netherlands",    countryNative: "Nederland",      langNative: "Nederlands", flag: "🇳🇱", currency: "EUR", intlLocale: "nl-NL" },
  { code: "it", country: "Italy",          countryNative: "Italia",         langNative: "Italiano", flag: "🇮🇹", currency: "EUR", intlLocale: "it-IT" },
  { code: "fr", country: "France",         countryNative: "France",         langNative: "Français", flag: "🇫🇷", currency: "EUR", intlLocale: "fr-FR" },
  { code: "no", country: "Norway",         countryNative: "Norge",          langNative: "Norsk",    flag: "🇳🇴", currency: "NOK", intlLocale: "nb-NO" },
  { code: "da", country: "Denmark",        countryNative: "Danmark",        langNative: "Dansk",    flag: "🇩🇰", currency: "DKK", intlLocale: "da-DK" },
  { code: "sv", country: "Sweden",         countryNative: "Sverige",        langNative: "Svenska",  flag: "🇸🇪", currency: "SEK", intlLocale: "sv-SE" },
  { code: "fi", country: "Finland",        countryNative: "Suomi",          langNative: "Suomi",    flag: "🇫🇮", currency: "EUR", intlLocale: "fi-FI" },
  { code: "hr", country: "Croatia",        countryNative: "Hrvatska",       langNative: "Hrvatski", flag: "🇭🇷", currency: "EUR", intlLocale: "hr-HR" },
];

// Static FX rates: 1 CZK = X currency. Used only for display approximations.
export const FX_FROM_CZK: Record<Currency, number> = {
  CZK: 1,
  EUR: 0.040,
  PLN: 0.17,
  NOK: 0.46,
  DKK: 0.30,
  SEK: 0.46,
  GBP: 0.034,
};

export const getMeta = (lang: Lang): LocaleMeta =>
  LOCALES.find((l) => l.code === lang) ?? LOCALES[0];

export function formatPrice(czkAmount: number, lang: Lang): string {
  const meta = getMeta(lang);
  const converted = czkAmount * FX_FROM_CZK[meta.currency];
  // Round sensibly: EUR/PLN/NOK/DKK/SEK with no decimals if value > 50 else 2
  const decimals = meta.currency === "CZK" ? 0 : converted >= 50 ? 0 : 2;
  try {
    return new Intl.NumberFormat(meta.intlLocale, {
      style: "currency",
      currency: meta.currency,
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(converted);
  } catch {
    return `${converted.toFixed(decimals)} ${meta.currency}`;
  }
}
