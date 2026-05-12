"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const focusItems = [
  {
    title: "Energy",
    copy: "We partner with platforms helping India expand cleaner, more reliable power. Our focus is on businesses that improve efficiency, strengthen distributed infrastructure, and make the energy transition commercially durable.",
    image: "/images/svg/focus-image2.png",
    alt: "Solar power infrastructure and clean energy systems",
  },
  {
    title: "Mobility",
    copy: "We back companies moving people, goods, and critical supply chains with greater reliability. These businesses benefit from India's infrastructure buildout, digitized logistics, and the shift toward lower-carbon transport.",
    image: "/images/svg/focus-image1.png",
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
  if (title === "Energy") {
    return (
      <>
        <span className="xl:block xl:whitespace-nowrap">We partner with platforms helping</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          India expand cleaner, more reliable power.
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          Our focus is on businesses that improve
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">efficiency, strengthen distributed</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          infrastructure, and make the energy transition
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">commercially durable.</span>
      </>
    );
  }

  if (title === "Mobility") {
    return (
      <>
        <span className="xl:block xl:whitespace-nowrap">
          We back companies moving people, goods,
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          and critical supply chains with greater
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          {" "}
          reliability. These businesses benefit{" "}
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          from India&apos;s infrastructure buildout,
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">digitized logistics, and the shift</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">toward lower-carbon transport.</span>
      </>
    );
  }

  if (title === "Manufacturing") {
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
          <em className="font-serif-brand text-2xl leading-9 font-semibold text-white italic">
            pathway to green
          </em>{" "}
          that
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">turns the transition into an edge.</span>
      </>
    );
  }

  return copy;
}

export function FocusSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section id="focus" className="scroll-mt-24 bg-black py-24 text-white md:pt-33 md:pb-0">
      <Container>
        <div className="mx-auto">
          <div className="mx-auto mb-10 text-center md:mb-16">
            <h2 className="font-serif-brand text-3xl leading-10 font-normal text-white md:mb-8 md:text-7xl md:leading-18">
              Our Focus
            </h2>
            <div
              aria-label="Focus sectors"
              className="flex flex-nowrap items-center justify-center gap-x-3 text-center font-serif-brand text-base leading-8 font-normal tracking-normal whitespace-nowrap text-white md:mt-0 md:gap-x-7 md:text-3xl md:leading-19"
              role="group"
            >
              {focusItems.map((item, index) => (
                <div key={item.title} className="flex items-center gap-x-3 md:gap-x-7">
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
            <p
              aria-label="We invest in established mid-market businesses positioned to benefit from India’s industrial growth, infrastructure buildout, rising domestic consumption, and transition toward a more sustainable economy. Strong micro in a supportive macro."
              className="mx-auto mt-5 max-w-62 font-sans-brand text-xs leading-4 font-light text-white md:mt-0 md:max-w-332 md:text-2xl md:leading-7"
            >
              <span className="md:hidden">
                We invest in established{" "}
                <em className="font-serif-brand font-semibold text-white italic">
                  mid-market businesses
                </em>{" "}
                positioned to benefit from India’s industrial growth, infrastructure buildout,
                rising domestic consumption, and transition toward a more sustainable economy.
                Strong micro in a supportive macro.
              </span>
              <span aria-hidden="true" className="hidden md:block">
                <span className="block whitespace-nowrap">
                  We invest in established{" "}
                  <em className="font-serif-brand font-semibold text-white italic">
                    mid-market businesses
                  </em>{" "}
                  positioned to benefit from India’s industrial growth, infrastructure buildout,
                  rising domestic
                </span>
                <span className="block whitespace-nowrap">
                  consumption, and transition toward a more sustainable economy. Strong micro in a
                  supportive macro.
                </span>
              </span>
            </p>
          </div>

          <p
            aria-live="polite"
            className="mb-5 text-center font-serif-brand text-2xl leading-8 font-normal tracking-normal md:hidden"
          >
            {activeFocus.title}
          </p>

          <div className="grid items-stretch gap-0 md:grid-cols-[0.9fr_1.2fr] md:items-start md:gap-16 xl:grid-cols-[0.8fr_1.2fr] xl:gap-24 2xl:grid-cols-[470px_762px] 2xl:gap-16">
            <div className="order-2 flex flex-col pb-0 md:order-1 md:block md:min-h-0 md:pb-0">
              <p
                aria-live="polite"
                className="mb-8 hidden font-serif-brand text-3xl leading-11 font-normal tracking-normal md:block md:text-6xl md:leading-10"
              >
                {activeFocus.title}
              </p>
              <p className="mx-auto mt-9 max-w-60 text-center font-sans-brand text-sm leading-4 font-light tracking-normal text-white md:mx-0 md:mt-16 md:min-h-51 md:max-w-118 md:text-left md:text-2xl md:leading-7">
                {renderFocusCopy(activeFocus.title, activeFocus.copy)}
              </p>
              <div className="mt-9 flex items-center justify-center gap-6 text-white md:mt-24 md:justify-start md:gap-4 xl:w-75 xl:justify-between xl:gap-0">
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
            <div className="relative order-1 mx-auto aspect-[239/110] w-full max-w-sm overflow-hidden rounded-sm bg-white/5 md:order-2 md:mx-0 md:aspect-[762/665] md:h-auto md:min-h-0 md:max-w-190 md:rounded-t-md md:rounded-b-none">
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
