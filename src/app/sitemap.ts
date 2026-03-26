import type { MetadataRoute } from "next";
import { locales } from "@/i18n/translations";
import { normalizedSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: normalizedSiteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${normalizedSiteUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.9 : 0.8,
    })),
  ];
}
