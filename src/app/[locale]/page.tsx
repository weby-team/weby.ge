import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection } from "@/features/landing/components/ContactSection";
import { HeroAboutStack } from "@/features/landing/components/HeroAboutStack";
import { MotionSection } from "@/features/landing/components/MotionSection";
import { ProjectsSection } from "@/features/landing/components/ProjectsSection";
import { getProjects } from "@/features/landing/data/projects";
import { getPageMetadata } from "@/lib/site";
import {
  getTranslations,
  isLocale,
  type Locale,
} from "@/i18n/translations";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ka" }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(locale);
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const copy = getTranslations(typedLocale);
  const projects = getProjects(typedLocale);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      lang={typedLocale}
    >
      <main className="relative">
        <HeroAboutStack copy={copy} />
        <ProjectsSection copy={copy.projects} projects={projects} />
        <MotionSection copy={copy.motion} />
        <ContactSection copy={copy.contact} />
      </main>
      <footer className="border-t border-white/10 bg-background py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Weby. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
