import { CtaSection } from "@/app/_components/home/cta-section";
import { DifferentiatorsSection } from "@/app/_components/home/differentiators-section";
import { FocusSection } from "@/app/_components/home/focus-section";
import { FooterSection } from "@/app/_components/home/footer-section";
import { LeadershipSection } from "@/app/_components/home/leadership-section";
import { OpportunitySection } from "@/app/_components/home/opportunity-section";
import { ValueCreationSection } from "@/app/_components/home/value-creation-section";

export function HomeSections() {
  return (
    <>
      <OpportunitySection />
      <FocusSection />
      <LeadershipSection />
      <DifferentiatorsSection />
      <ValueCreationSection />
      <CtaSection />
      <FooterSection />
    </>
  );
}
