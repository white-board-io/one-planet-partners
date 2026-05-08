import Image from "next/image";
import { Container } from "@/app/_components/container";

const opportunityCards = [
  {
    title: "India’s structural growth.",
    copy: "India is entering a period of sustained industrial growth, infrastructure buildout, rising domestic consumption, and accelerating formalization. Much of this value creation lies in the mid-market, which contributes to 30% of national GDP where businesses are scaling rapidly but remain underpenetrated by institutional capital.",
    image: "/images/svg/opportunity-image1.svg",
    alt: "Aerial view of an Indian industrial corridor and roadway",
  },
  {
    title: "The missing middle.",
    copy: "These growth-stage businesses remain underserved by institutional capital. Too large for early-stage investors. Too small for global buyout firms. They require strategic support, institutionalisation, and active partnership. They need partners that help them build.",
    image: "/images/svg/opportunity-image2.svg",
    alt: "Industrial facility with manufacturing buildings",
  },
  {
    title: "Climate as a commercial advantage.",
    copy: "India’s energy transition is one of the most significant scalable opportunities of this decade. One Planet leverages its climate intelligence as an underwriting lens to identify businesses with stronger growth prospects, greater resilience, and superior exit potential.",
    image: "/images/svg/opportunity-image3.svg",
    alt: "Aerial view of a concentrated solar power facility",
  },
];

export function OpportunitySection() {
  return (
    <section id="opportunity" className="scroll-mt-24 bg-white py-20 text-black md:py-30">
      <Container>
        <div className="mx-auto max-w-[65.875rem]">
          <div className="mb-14 text-center md:mb-18">
            <h2 className="font-serif-brand text-5xl leading-tight font-normal md:text-[4rem] md:leading-[4.75rem]">
              The Opportunity
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-[5.625rem]">
            {opportunityCards.map((card) => (
              <article key={card.title} className="flex flex-col">
                <Image
                  width={391}
                  height={504}
                  src={card.image}
                  alt={card.alt}
                  className="mb-10 h-auto w-full rounded-sm"
                />
                <h3 className="mb-7 font-serif-brand text-[2rem] leading-[2.5rem] font-normal tracking-normal">
                  {card.title}
                </h3>
                <p className="font-sans-brand text-[1.125rem] leading-[1.55rem] font-light tracking-normal text-black/80">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
