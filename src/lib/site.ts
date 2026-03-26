import type { Metadata } from "next";
import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/i18n/translations";

export const siteName = "Weby";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://weby.ge";
export const normalizedSiteUrl = siteUrl.startsWith("http")
  ? siteUrl
  : `https://${siteUrl}`;
export const siteOrigin = normalizedSiteUrl.replace(/\/$/, "");
export const siteTitle = "Weby";
export const siteDescription =
  "We build high-quality business websites that combine strategy, performance, and design to help companies grow credibility and attract customers.";
export const socialImagePath = "/images/weby-logo.jpg";
export const socialImageUrl = `${siteOrigin}${socialImagePath}`;
export const faviconPath = "/favicon.png";
export const faviconIcoPath = "/favicon.ico";
export const appleTouchIconPath = "/apple-touch-icon.png";

const localeMetadata: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphLocale: string;
  }
> = {
  en: {
    title: siteTitle,
    description: siteDescription,
    openGraphLocale: "en_US",
  },
  ka: {
    title: siteName,
    description:
      "ვქმნით მაღალი ხარისხის ბიზნეს ვებსაიტებს, რომლებიც აერთიანებს სტრატეგიას, წარმადობას და დიზაინს, რათა კომპანიებმა მეტი ნდობა და მომხმარებელი მოიზიდონ.",
    openGraphLocale: "ka_GE",
  },
};

export const languageAlternates = Object.fromEntries(
  locales.map((locale) => [locale, `/${locale}`]),
) as Record<Locale, string>;

export const getPageMetadata = (locale: string): Metadata => {
  const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
  const { title, description, openGraphLocale } =
    localeMetadata[resolvedLocale];
  const canonical = `/${resolvedLocale}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: openGraphLocale,
      type: "website",
      images: [
        {
          url: socialImageUrl,
          secureUrl: socialImageUrl,
          type: "image/jpeg",
          width: 2000,
          height: 2000,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl],
    },
  };
};
