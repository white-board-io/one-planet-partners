import { SiteHeader } from "@/app/_components/site-header";
import { HeroSection } from "@/app/_components/hero-section";
import { HomeSections } from "@/app/_components/home-sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Planet Partners",
  description: "Invest in India's rapidly growing mid-market.",
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
