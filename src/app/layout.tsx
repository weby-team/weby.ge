import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";
import { defaultLocale } from "@/i18n/translations";
import {
  faviconPath,
  normalizedSiteUrl,
  siteDescription,
  siteName,
  socialImageUrl,
} from "@/lib/site";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const displayFont = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(normalizedSiteUrl),
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  title: {
    default: siteName,
    template: "%s | Weby",
  },
  alternates: {
    canonical: "/",
  },
  description: siteDescription,
  keywords: [
    "Weby",
    "web design studio",
    "business websites",
    "website development",
    "portfolio studio",
    "Georgia web studio",
  ],
  authors: [{ name: siteName, url: normalizedSiteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: faviconPath, type: "image/jpeg", sizes: "1080x1080" }],
    shortcut: [faviconPath],
    apple: [{ url: faviconPath, sizes: "1080x1080" }],
  },
  openGraph: {
    title: siteName,
    url: "/",
    siteName,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: socialImageUrl,
        secureUrl: socialImageUrl,
        type: "image/jpeg",
        width: 2000,
        height: 2000,
        alt: "Weby logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body
        suppressHydrationWarning
        className={`${bodyFont.variable} ${displayFont.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
