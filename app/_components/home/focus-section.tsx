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
    <section id="focus" className="scroll-mt-24 bg-[#000000] py-14 text-white md:py-24">
      <Container className="px-3 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <h2 className="font-serif-brand text-[2rem] leading-[2.5rem] font-normal text-white md:text-[5rem] md:leading-[5.625rem]">
              Our Focus
            </h2>
            <div
              aria-label="Focus sectors"
              className="mt-2 flex flex-nowrap items-center justify-center gap-x-3 font-serif-brand text-[1rem] leading-[2rem] font-normal tracking-normal text-center whitespace-nowrap text-white md:mt-4 md:gap-x-5 md:text-[1.875rem] md:leading-[4.625rem] md:text-white/42"
              role="group"
            >
              {focusItems.map((item, index) => (
                <div key={item.title} className="flex items-center gap-x-3 md:gap-x-5">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-white/70 md:text-white/22">
                      |
                    </span>
                  ) : null}
                  <button
                    aria-pressed={index === activeIndex}
                    className={cn(
                      "transition hover:text-white/75",
                      index === activeIndex ? "text-white" : "text-white/42",
                    )}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-[15.5rem] font-sans-brand text-[0.75rem] leading-[1.08rem] font-light text-white/82 md:mt-6 md:max-w-2xl md:text-sm md:leading-6 md:text-white/58">
              We invest in established{" "}
              <em className="font-serif-brand text-[0.82rem] font-semibold md:text-sm">
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

          <div className="grid items-stretch gap-0 md:grid-cols-[0.9fr_1.2fr] md:items-end md:gap-16">
            <div className="order-2 flex flex-col pb-0 md:order-1 md:block md:min-h-0 md:pb-0">
              <p
                aria-live="polite"
                className="mb-8 hidden font-serif-brand text-[2.625rem] leading-[2.75rem] font-normal tracking-normal md:block md:text-[3.75rem] md:leading-[2.5rem]"
              >
                {activeFocus.title}
              </p>
              <p className="mx-auto mt-9 max-w-[15rem] text-center font-sans-brand text-[0.86rem] leading-[1.07rem] font-light tracking-normal text-white/82 md:mx-0 md:mt-0 md:min-h-[12rem] md:max-w-xl md:text-left md:text-[1.5rem] md:leading-[2.125rem] md:text-white/62">
                {activeFocus.copy}
              </p>
              <div className="mt-9 flex items-center justify-center gap-6 text-white md:mt-8 md:justify-start md:gap-4 md:text-white/70">
                <button
                  type="button"
                  aria-label="Previous focus"
                  onClick={goToPrevious}
                  className="grid size-6 place-items-center rounded-full border border-white text-sm leading-none transition hover:border-white hover:text-white md:size-8 md:border-white/35"
                >
                  {"<"}
                </button>
                <div
                  className="flex items-center gap-3 md:gap-2"
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
                        "size-1.5 rounded-full transition",
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
                  className="grid size-6 place-items-center rounded-full border border-white text-sm leading-none transition hover:border-white hover:text-white md:size-8 md:border-white/35"
                >
                  {">"}
                </button>
              </div>
            </div>
            <div className="relative order-1 mx-auto aspect-[239/110] w-full max-w-[24rem] overflow-hidden rounded-sm bg-white/5 md:order-2 md:mx-0 md:aspect-[16/10] md:h-auto md:min-h-0 md:max-w-none">
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
