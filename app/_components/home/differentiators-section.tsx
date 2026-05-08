import Image from "next/image";
import { Container } from "@/app/_components/container";
import { DifferentiatorMobileCards } from "@/app/_components/home/differentiator-mobile-cards";

const differentiators = [
  {
    title: "Business Builders, Not Passive Capital",
    image: "/images/svg/differentiaror-image1.svg",
    copy: "We work alongside founders and management teams to turn strategy into measurable execution, operational focus, and durable growth.",
  },
  {
    title: "Institutional, Yet Entrepreneurial",
    image: "/images/svg/differentiator-image2.svg",
    copy: "We bring institutional discipline, governance, and networks while staying hands-on, pragmatic, and fast-moving with every business.",
  },
  {
    title: "Climate Positive DNA",
    image: "/images/svg/differentiator-image3.svg",
    copy: "We treat climate as a commercial advantage, helping businesses improve efficiency, resilience, and long-term value creation.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="edge"
      className="scroll-mt-24 bg-black pt-12 pb-13 text-white md:pt-[5.625rem] md:pb-10"
    >
      <Container className="max-w-none px-0 sm:px-0 lg:px-0">
        <div className="mx-auto w-full">
          <div className="mb-8 text-center md:mb-[5.5rem]">
            <h2 className="font-serif-brand text-[1.375rem] leading-[1.05] font-light md:text-[3.5rem] md:leading-[1.1]">
              What Sets Us Apart
            </h2>
          </div>
          <DifferentiatorMobileCards items={differentiators} />
          <div className="hidden gap-8 px-6 sm:px-10 md:grid md:grid-cols-3 md:gap-9 md:px-0">
            {differentiators.map((item) => (
              <article
                key={item.title}
                aria-label={item.title}
                tabIndex={0}
                className="group relative aspect-[606/648] bg-white/5 [perspective:1200px]"
              >
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] motion-reduce:transition-none">
                  <div className="absolute inset-0 overflow-hidden rounded-md [backface-visibility:hidden]">
                    <Image
                      fill
                      sizes="(max-width: 768px) calc(100vw - 3rem), 33vw"
                      src={item.image}
                      alt=""
                      loading="eager"
                      className="object-cover"
                    />
                    <h3 className="sr-only">{item.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-md bg-[#101010] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-10">
                    <h3 className="max-w-80 font-serif-brand text-3xl leading-[1.08] font-light md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-96 font-sans-brand text-base leading-7 text-white/78 md:text-lg">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
