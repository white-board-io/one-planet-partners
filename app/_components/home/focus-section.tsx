"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const focusItems = [
  {
    title: "Energy",
    copy: "We invest in the businesses enabling India's shift to cleaner energy: renewable generation, battery storage, resource-efficient industrials, and the supply chains that make them possible. Where clean and competitive converge, returns follow.",
    image: "/images/svg/focus-image2.png",
    alt: "Solar power infrastructure and clean energy systems",
  },
  {
    title: "Mobility",
    copy: "We back the companies that are beneficiaries of — and architects of — how India moves: EV platforms, fleet operators, charging networks, and sustainable logistics. A billion-person mobility transition is one of the defining commercial opportunities of the next decade.",
    image: "/images/svg/focus-image1.png",
    alt: "Road and logistics infrastructure across an industrial corridor",
  },
  {
    title: "Manufacturing",
    copy: "We partner with category leaders in discrete manufacturing, including within the supply chain, serving India and global markets. Businesses with the competitive position to capture India's manufacturing decade and a clear pathway to green that turns the transition into an edge.",
    image: "/images/svg/focus-image.svg",
    alt: "Manufacturing equipment and industrial automation",
  },
];

const swipeThreshold = 48;
const swipeAxisBias = 1.2;

function renderFocusCopy(title: string, copy: string) {
  if (title === "Energy") {
    return (
      <>
        <span className="xl:block xl:whitespace-nowrap">We invest in the businesses enabling</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          India&apos;s shift to cleaner energy: renewable
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          generation, battery storage, resource-efficient
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          industrials, and the supply chains that make
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">them possible. Where clean and </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">competitive converge, returns follow.</span>
      </>
    );
  }

  if (title === "Mobility") {
    return (
      <>
        <span className="xl:block xl:whitespace-nowrap">
          We back the companies that are beneficiaries
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          of — and architects of — how India moves:
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          EV platforms, fleet operators, charging
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">networks, and sustainable logistics.</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          A billion-person mobility transition is one of
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          the defining commercial opportunities of the
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">next decade.</span>
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
          manufacturing, including within the supply
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          chain, serving India and global markets.
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          Businesses with the competitive position to
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">
          capture India&apos;s manufacturing decade and a
        </span>{" "}
        <span className="xl:block xl:whitespace-nowrap">clear pathway to green that turns the</span>{" "}
        <span className="xl:block xl:whitespace-nowrap">transition into an edge.</span>
      </>
    );
  }

  return copy;
}

export function FocusSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartRef = useRef<{ pointerId: number; x: number; y: number } | null>(null);
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

  const handleSlidePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    swipeStartRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleSlidePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const swipeStart = swipeStartRef.current;

    if (!swipeStart || swipeStart.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - swipeStart.x;
    const deltaY = event.clientY - swipeStart.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY) * swipeAxisBias;

    swipeStartRef.current = null;

    if (!isHorizontalSwipe) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  const handleSlidePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (swipeStartRef.current?.pointerId === event.pointerId) {
      swipeStartRef.current = null;
    }
  };

  return (
    <section
      id="focus"
      className="scroll-mt-24 bg-black py-24 text-white md:pt-28 md:pb-24 lg:pt-33 lg:pb-0"
    >
      <Container>
        <div className="mx-auto">
          <div className="mx-auto mb-10 text-center md:mb-16">
            <h2 className="font-serif-brand text-4xl mb-6 leading-10 font-normal text-white md:mb-8 md:text-6xl md:leading-tight lg:text-7xl lg:leading-18">
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
              className="mx-auto mt-5 max-w-62 font-sans-brand text-base text-xl leading-6 font-light text-white md:mt-6 md:max-w-2xl lg:mt-0 lg:max-w-332 lg:text-2xl lg:leading-8"
            >
              <span className="lg:hidden">
                We invest in established{" "}
                <em className="font-serif-brand font-semibold text-white italic">
                  mid-market businesses
                </em>{" "}
                positioned to benefit from India’s industrial growth, infrastructure buildout,
                rising domestic consumption, and transition toward a more sustainable economy.
                Strong micro in a supportive macro.
              </span>
              <span aria-hidden="true" className="hidden lg:block">
                <span className="block whitespace-nowrap">
                  We invest in established{" "}
                  <em className="font-serif-brand font-semibold text-white italic">
                    mid-market businesses
                  </em>{" "}
                  positioned to benefit from India’s industrial growth, infrastructure buildout,
                </span>
                <span className="block whitespace-nowrap">
                  rising domestic consumption, and transition toward a more sustainable economy.
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

          <div
            className="grid touch-pan-y items-stretch gap-0 md:gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-start lg:gap-16 xl:grid-cols-[0.8fr_1.2fr] xl:gap-24 2xl:grid-cols-[470px_762px] 2xl:gap-16"
            onPointerCancel={handleSlidePointerCancel}
            onPointerDown={handleSlidePointerDown}
            onPointerUp={handleSlidePointerUp}
          >
            <div className="order-2 flex flex-col pb-0 md:block md:min-h-0 md:pb-0 lg:order-1">
              <p
                aria-live="polite"
                className="mb-8 hidden text-center font-serif-brand text-3xl leading-11 font-normal tracking-normal md:block md:text-5xl md:leading-tight lg:text-left lg:text-6xl lg:leading-10"
              >
                {activeFocus.title}
              </p>
              <p className="mx-auto mt-9 max-w-60 text-center font-sans-brand text-base text-xl leading-6 font-light tracking-normal text-white md:mt-10 md:max-w-2xl md:min-h-0 lg:mx-0 lg:mt-16 lg:min-h-51 lg:max-w-118 lg:text-left lg:text-2xl lg:leading-8">
                {renderFocusCopy(activeFocus.title, activeFocus.copy)}
              </p>
              <div className="mt-9 flex items-center justify-center gap-6 text-white md:mt-12 md:gap-4 lg:mt-24 lg:justify-start xl:w-75 xl:justify-between xl:gap-0">
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
            <div className="relative order-1 mx-auto aspect-[239/110] w-full max-w-sm overflow-hidden rounded-sm bg-white/5 md:aspect-[16/9] md:max-w-2xl lg:order-2 lg:mx-0 lg:aspect-[762/665] lg:h-auto lg:min-h-0 lg:max-w-190 lg:rounded-t-md lg:rounded-b-none">
              <Image
                key={activeFocus.image}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={activeFocus.image}
                alt={activeFocus.alt}
                className="select-none object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
