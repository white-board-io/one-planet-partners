import { Container } from "@/app/_components/container";
import { DifferentiatorDesktopCards } from "@/app/_components/home/differentiator-desktop-cards";
import { DifferentiatorMobileCards } from "@/app/_components/home/differentiator-mobile-cards";

const differentiators = [
  {
    title: "Business builders, not passive capital",
    image: "/images/svg/differentiaror-image1.svg",
    copy: "We take meaningful stakes and act as owners. Capital is just the start. What we bring beyond that — strategic insight, value creation mindset, operational expertise, governance, and deep networks — is where the value is built.",
  },
  {
    title: "Institutional, yet entrepreneurial",
    image: "/images/svg/differentiator-image2.svg",
    copy: "We combine big-firm discipline with start-up energy. Institutional rigour and governance, and entrepreneurial speed and flexibility.",
  },
  {
    title: "Climate Positive DNA",
    image: "/images/svg/differentiator-image3.svg",
    copy: "We build businesses that outperform financially, with the firm conviction that good businesses are also responsible businesses.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section id="edge" className="scroll-mt-24 bg-black pt-20 pb-21 text-white md:pt-30 md:pb-18">
      <Container className="max-w-none px-0 sm:px-0 lg:px-0">
        <div className="mx-auto w-full">
          <div className="mb-8 text-center md:mb-22">
            <h2 className="font-serif-brand text-4xl leading-none font-normal md:text-7xl md:leading-none">
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
