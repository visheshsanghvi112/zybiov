"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

type TranslationKeys = typeof translations.en;

interface LanguageContextType {
  language: Language;
  lang: Language;
  setLanguage: (lang: Language) => void;
  setLang: (lang: Language) => void;
  t: (keyPath: string) => any;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("zybiov-lang") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("zybiov-lang", language);
    
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    if (language === "ar") {
      document.documentElement.classList.add("lang-ar");
      document.documentElement.classList.add("ar-mode");
    } else {
      document.documentElement.classList.remove("lang-ar");
      document.documentElement.classList.remove("ar-mode");
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (keyPath: string): string => {
    const dict = translations[language];
    const keys = keyPath.split(".");
    let result: any = dict;
    
    for (const key of keys) {
      if (result && typeof result === "object" && key in result) {
        result = result[key];
      } else {
        // Fallback to English
        let fallback: any = translations.en;
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    
    return typeof result === "string" ? result : keyPath;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, lang: language, setLanguage, setLang: setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
