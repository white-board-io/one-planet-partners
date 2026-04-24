import { HeroSection } from "@/components/home/hero-section";
import { SiteHeader } from "@/components/home/site-header";

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
    </main>
  );
}
