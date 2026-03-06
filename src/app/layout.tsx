import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";
import { defaultLocale } from "@/i18n/translations";

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
  title: {
    default: "Weby",
    template: "%s | Weby",
  },
  description:
    "A modern portfolio landing page for a three-person studio specializing in premium web experiences.",
  openGraph: {
    title: "Weby",
    description:
      "A modern portfolio landing page for a three-person studio specializing in premium web experiences.",
    type: "website",
    images: [
      {
        url: "/images/weby-logo.png",
        width: 1536,
        height: 1536,
        alt: "Weby logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weby",
    description:
      "A modern portfolio landing page for a three-person studio specializing in premium web experiences.",
    images: ["/images/weby-logo.png"],
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
