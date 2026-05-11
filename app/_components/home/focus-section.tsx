"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const focusItems = [
  {
    title: "Energy",
    copy: "We partner with platforms helping India expand cleaner, more reliable power. Our focus is on businesses that improve efficiency, strengthen distributed infrastructure, and make the energy transition commercially durable.",
    image: "/images/svg/opportunity-image3.svg",
    alt: "Solar power infrastructure and clean energy systems",
  },
  {
    title: "Mobility",
    copy: "We back companies moving people, goods, and critical supply chains with greater reliability. These businesses benefit from India's infrastructure buildout, digitized logistics, and the shift toward lower-carbon transport.",
    image: "/images/svg/opportunity-image1.svg",
    alt: "Road and logistics infrastructure across an industrial corridor",
  },
  {
    title: "Manufacturing",
    copy: "We partner with category leaders in discrete manufacturing, serving India and global markets — businesses with the competitive position to capture India's manufacturing decade and a clear pathway to green that turns the transition into an edge.",
    image: "/images/svg/focus-image.svg",
    alt: "Manufacturing equipment and industrial automation",
  },
];

function renderFocusCopy(title: string, copy: string) {
  if (title !== "Manufacturing") {
    return copy;
  }

  return (
    <>
      <span className="xl:block xl:whitespace-nowrap">
        We partner with category leaders in discrete
      </span>{" "}
      <span className="xl:block xl:whitespace-nowrap">
        manufacturing, serving India and global
      </span>{" "}
      <span className="xl:block xl:whitespace-nowrap">
        markets — businesses with the competitive
      </span>{" "}
      <span className="xl:block xl:whitespace-nowrap">
        position to capture India&apos;s manufacturing
      </span>{" "}
      <span className="xl:block xl:whitespace-nowrap">
        decade and a clear{" "}
        <em className="font-serif-brand text-[24px] leading-[34px] font-semibold text-white italic">
          pathway to green
        </em>{" "}
        that
      </span>{" "}
      <span className="xl:block xl:whitespace-nowrap">turns the transition into an edge.</span>
    </>
  );
}

export function FocusSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeFocus = focusItems[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? focusItems.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === focusItems.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section
      id="focus"
      className="scroll-mt-24 bg-[#000000] py-14 text-white md:pt-[100px] md:pb-0"
    >
      <Container>
        <div className="mx-auto">
          <div className="mx-auto mb-10 text-center md:mb-[62px]">
            <h2 className="font-serif-brand text-[2rem] leading-[2.5rem] font-normal text-white md:text-[80px] md:leading-[90px]">
              Our Focus
            </h2>
            <div
              aria-label="Focus sectors"
              className="mt-2 flex flex-nowrap items-center justify-center gap-x-3 text-center font-serif-brand text-[1rem] leading-[2rem] font-normal tracking-normal whitespace-nowrap text-white md:mt-0 md:gap-x-[28px] md:text-[30px] md:leading-[74px]"
              role="group"
            >
              {focusItems.map((item, index) => (
                <div key={item.title} className="flex items-center gap-x-3 md:gap-x-[28px]">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-white">
                      |
                    </span>
                  ) : null}
                  <button
                    aria-pressed={index === activeIndex}
                    className="text-white transition hover:text-white"
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-[15.5rem] font-sans-brand text-[0.75rem] leading-[1.08rem] font-light text-white md:mt-0 md:max-w-[1328px] md:text-[24px] md:leading-[34px]">
              We invest in established{" "}
              <em className="font-serif-brand text-[0.82rem] font-semibold text-white md:text-[24px] md:leading-[34px]">
                mid-market businesses
              </em>{" "}
              positioned to benefit from India’s industrial growth, infrastructure buildout, rising
              domestic consumption, and transition toward a more sustainable economy. Strong micro
              in a supportive macro.
            </p>
          </div>

          <p
            aria-live="polite"
            className="mb-5 text-center font-serif-brand text-[1.65rem] leading-[2rem] font-normal tracking-normal md:hidden"
          >
            {activeFocus.title}
          </p>

          <div className="grid items-stretch gap-0 md:grid-cols-[0.9fr_1.2fr] md:items-start md:gap-16 xl:grid-cols-[0.8fr_1.2fr] xl:gap-24 2xl:grid-cols-[470px_762px] 2xl:gap-16">
            <div className="order-2 flex flex-col pb-0 md:order-1 md:block md:min-h-0 md:pb-0">
              <p
                aria-live="polite"
                className="mb-8 hidden font-serif-brand text-[2.625rem] leading-[2.75rem] font-normal tracking-normal md:block md:text-[60px] md:leading-[40px]"
              >
                {activeFocus.title}
              </p>
              <p className="mx-auto mt-9 max-w-[15rem] text-center font-sans-brand text-[0.86rem] leading-[1.07rem] font-light tracking-normal text-white md:mx-0 md:mt-0 md:min-h-[204px] md:max-w-[470px] md:text-left md:text-[24px] md:leading-[34px]">
                {renderFocusCopy(activeFocus.title, activeFocus.copy)}
              </p>
              <div className="mt-9 flex items-center justify-center gap-6 text-white md:mt-[56px] md:justify-start md:gap-4 xl:w-[300px] xl:justify-between xl:gap-0">
                <button
                  type="button"
                  aria-label="Previous focus"
                  onClick={goToPrevious}
                  className="grid size-8 place-items-center rounded-full border border-white text-base leading-none text-white transition hover:border-white hover:text-white md:size-11 md:text-2xl"
                >
                  {"<"}
                </button>
                <div
                  className="flex items-center gap-4 md:gap-3"
                  aria-label="Focus slide indicators"
                >
                  {focusItems.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      aria-label={`Show ${item.title}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "size-2.5 rounded-full transition md:size-3",
                        index === activeIndex
                          ? "bg-white"
                          : "border border-white/70 bg-transparent",
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next focus"
                  onClick={goToNext}
                  className="grid size-8 place-items-center rounded-full border border-white text-base leading-none text-white transition hover:border-white hover:text-white md:size-11 md:text-2xl"
                >
                  {">"}
                </button>
              </div>
            </div>
            <div className="relative order-1 mx-auto aspect-[239/110] w-full max-w-[24rem] overflow-hidden rounded-sm bg-white/5 md:order-2 md:mx-0 md:aspect-[762/665] md:h-auto md:min-h-0 md:max-w-[762px] md:rounded-t-[6px] md:rounded-b-none">
              <Image
                key={activeFocus.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={activeFocus.image}
                alt={activeFocus.alt}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
