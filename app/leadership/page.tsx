import type { Metadata } from "next";
import { SiteHeader } from "@/app/_components/site-header";
import { FooterSection } from "@/app/_components/home/footer-section";
import { LeadershipHero } from "./_components/leadership-hero";
import { LeadershipGrid } from "./_components/leadership-grid";
import { SeniorAdvisors } from "./_components/senior-advisors";

export const metadata: Metadata = {
  title: "Leadership | One Planet Partners",
  description:
    "Meet the proven team behind One Planet Partners — a group of experienced investors and advisors building together again.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader basePath="/" />
      <LeadershipHero />
      <LeadershipGrid />
      <SeniorAdvisors />
      <FooterSection />
    </main>
  );
}
