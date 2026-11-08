"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { dictionaries, defaultLocale } from "@/data/dictionary";
import type { Locale } from "@/lib/types";

type Dictionary = (typeof dictionaries)["it"];

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = defaultLocale,
}: LocaleProviderProps): React.JSX.Element => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const value = useMemo(
    (): LocaleContextValue => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
};
