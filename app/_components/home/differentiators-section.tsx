import { Container } from "@/app/_components/container";
import { DifferentiatorDesktopCards } from "@/app/_components/home/differentiator-desktop-cards";
import { DifferentiatorMobileCards } from "@/app/_components/home/differentiator-mobile-cards";

const differentiatorCopy =
  "We take ownership stakes and act like owners. Capital is only the starting point. What we bring beyond that — strategic insight, operational discipline, governance, and access to deep networks — is where the value is built. We are not advisors on the sidelines, but partners with skin in the game.";

const differentiators = [
  {
    title: "Business Builders, Not Passive Capital",
    image: "/images/svg/differentiaror-image1.svg",
    copy: differentiatorCopy,
  },
  {
    title: "Institutional, Yet Entrepreneurial",
    image: "/images/svg/differentiator-image2.svg",
    copy: differentiatorCopy,
  },
  {
    title: "Climate Positive DNA",
    image: "/images/svg/differentiator-image3.svg",
    copy: differentiatorCopy,
  },
];

export function DifferentiatorsSection() {
  return (
    <section id="edge" className="scroll-mt-24 bg-black pt-20 pb-21 text-white md:pt-30 md:pb-18">
      <Container className="max-w-none px-0 sm:px-0 lg:px-0">
        <div className="mx-auto w-full">
          <div className="mb-8 text-center md:mb-22">
            <h2 className="font-serif-brand text-2xl leading-none font-normal md:text-7xl md:leading-none">
              What Sets Us Apart
            </h2>
          </div>
          <DifferentiatorMobileCards items={differentiators} />
          <DifferentiatorDesktopCards items={differentiators} />
        </div>
      </Container>
    </section>
  );
}
