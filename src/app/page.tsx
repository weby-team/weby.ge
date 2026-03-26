import type { Metadata } from "next";
import Link from "next/link";
import { LocaleRedirect } from "@/components/LocaleRedirect";
import { defaultLocale } from "@/i18n/translations";

const redirectPath = `/${defaultLocale}`;

export const metadata: Metadata = {
  title: {
    absolute: "Weby",
  },
  alternates: {
    canonical: redirectPath,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <LocaleRedirect to={redirectPath} />
      <p className="text-sm text-muted">
        Redirecting...
        <Link className="ml-2 underline" href={redirectPath}>
          Continue
        </Link>
      </p>
    </main>
  );
}
