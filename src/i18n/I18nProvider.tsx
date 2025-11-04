import React from "react";
import { dict, Locale } from "./dictionary";

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <K extends string>(path: K) => any; // returns string or object
};

const I18nContext = React.createContext<I18nContextType | null>(null);

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("azu.locale") as Locale | null;
  if (saved === "en" || saved === "fr") return saved;
  const nav = navigator.language.toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

function get(dictObj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), dictObj);
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = React.useState<Locale>(getInitialLocale());

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("azu.locale", l);
  };

  React.useEffect(() => {
    // keep <html lang="..."> in sync for accessibility/SEO
    document.documentElement.lang = locale;
  }, [locale]);

  const value: I18nContextType = {
    locale,
    setLocale,
    t: (path) => get(dict[locale], path) ?? path
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
