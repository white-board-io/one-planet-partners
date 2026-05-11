import Image from "next/image";
import { Container } from "@/app/_components/container";

const opportunityCards = [
  {
    title: ["India’s structural", "growth"],
    copy: "India is entering a period of sustained industrial growth, infrastructure buildout, rising domestic consumption, and accelerating formalization. Much of this value creation lies in the mid-market, which contributes to 30% of national GDP where businesses are scaling rapidly but remain underpenetrated by institutional capital.",
    image: "/images/svg/opportunity-image1.svg",
    alt: "Aerial view of an Indian industrial corridor and roadway",
  },
  {
    title: ["The missing", "middle"],
    copy: "These growth-stage businesses remain underserved by institutional capital. Too large for early-stage investors. Too small for global buyout firms. They require strategic support, institutionalisation, and active partnership. They need partners that help them build.",
    image: "/images/svg/opportunity-image2.svg",
    alt: "Industrial facility with manufacturing buildings",
  },
  {
    title: ["Climate as a", "commercial advantage"],
    copy: "India’s energy transition is one of the most significant scalable opportunities of this decade. One Planet leverages its climate intelligence as an underwriting lens to identify businesses with stronger growth prospects, greater resilience, and superior exit potential.",
    image: "/images/svg/opportunity-image3.svg",
    alt: "Aerial view of a concentrated solar power facility",
  },
];

export function OpportunitySection() {
  return (
    <section id="opportunity" className="scroll-mt-24 bg-white py-16 text-black lg:py-[7.5rem]">
      <Container>
        <div>
          <div className="mb-14 text-center lg:mb-[6.25rem]">
            <h2 className="font-serif-brand text-[2.5rem] leading-[1.1] font-normal tracking-normal lg:text-[5rem] lg:leading-[2.1875rem]">
              The Opportunity
            </h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 xl:px-16">
            {opportunityCards.map((card) => (
              <article key={card.title.join(" ")} className="flex flex-col">
                <Image
                  width={391}
                  height={504}
                  src={card.image}
                  alt={card.alt}
                  className="mb-6 h-auto w-full rounded-sm lg:mb-12"
                />
                <h3 className="mb-4 font-serif-brand text-[1.75rem] leading-[2.125rem] font-normal tracking-normal lg:mb-7 lg:text-[2.625rem] lg:leading-[3.25rem]">
                  {card.title.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="font-sans-brand text-base leading-6 font-light tracking-normal text-black/80 lg:text-[1.5rem] lg:leading-[2.125rem]">
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
