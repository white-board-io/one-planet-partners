import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/app/_components/site-header";
import { CtaSection } from "@/app/_components/home/cta-section";
import { FooterSection } from "@/app/_components/home/footer-section";
import { getPressReleaseBySlug, getPressReleaseTitle, pressReleases } from "../_components/data";
import { PressReleaseDetail } from "./_components/press-release-detail";

export function generateStaticParams() {
  return pressReleases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);
  if (!release) return {};
  return {
    title: getPressReleaseTitle(release),
    description: release.subtitle,
    alternates: {
      canonical: `/press-release/${release.slug}`,
    },
  };
}

export default async function PressReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);

  if (!release) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader basePath="/" />
      <PressReleaseDetail release={release} />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
