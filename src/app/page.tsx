"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/translations";

const LOCALE_COOKIE_PATTERN = /(?:^|;\s*)locale=(en|ka)(?:;|$)/;

const getPreferredLocale = () => {
  if (typeof document === "undefined") {
    return defaultLocale;
  }

  const match = document.cookie.match(LOCALE_COOKIE_PATTERN);
  return match?.[1] ?? defaultLocale;
};

export default function Home() {
  useEffect(() => {
    const nextLocale = getPreferredLocale();
    window.location.replace(`/${nextLocale}`);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <p className="text-sm text-muted">
        Redirecting...
        <a className="ml-2 underline" href={`/${defaultLocale}`}>
          Continue
        </a>
      </p>
    </main>
  );
}
