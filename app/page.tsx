import { SiteHeader } from "@/app/_components/site-header";
import { HeroSection } from "@/app/_components/hero-section";
import { HomeSections } from "@/app/_components/home-sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "One Planet Partners",
  },
  description: "One Planet Partners is an India-focused private equity firm investing in mid-market businesses where active ownership, operational expertise, and climate insight create enduring value.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <HomeSections />
    </main>
  );
}
