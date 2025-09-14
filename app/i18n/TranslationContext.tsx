"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import { Language } from "./type";
import { NestedKeyOf } from "./utils";

// Merge all translations
const translations = { en, fr };

// Infer the structure of a translation object
type TranslationObject = typeof en;

// Create a union of all nested keys like "home.title", "auth.login.button", etc.
type TranslationKey = NestedKeyOf<TranslationObject>;

// Define context props
interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey | string) => string; // Accept both known keys and arbitrary strings
}

// Create context
const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

// Provider component
export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Language.en);

  const t = (key: TranslationKey | string): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // fallback if key is not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook for consuming translation context
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within a TranslationProvider");
  return context;
};