import { SiteHeader } from "@/app/_components/site-header";
import { HeroSection } from "@/app/_components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
    </main>
  );
}
