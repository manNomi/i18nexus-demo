"use client";

import { I18nProvider } from "i18nexus";
import { ReactNode } from "react";

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <I18nProvider
      languageManagerOptions={{
        defaultLanguage: "ko",
        availableLanguages: [
          {
            code: "ko",
            name: "한국어",
            flag: "🇰🇷",
          },
          {
            code: "en",
            name: "English",
            flag: "🇺🇸",
          },
        ],
        enableAutoDetection: false, // Hydration 에러 방지
      }}>
      {children}
    </I18nProvider>
  );
}
