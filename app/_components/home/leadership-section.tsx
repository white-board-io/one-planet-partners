"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const DOCK_INFLUENCE_PX = 280;
const DOCK_MAX_SCALE = 2.0;

function dockScale(distance: number) {
  const t = Math.max(0, 1 - distance / DOCK_INFLUENCE_PX);
  return 1 + (DOCK_MAX_SCALE - 1) * Math.pow(t, 1.4);
}

const leaders = [
  {
    name: "Dr. Mukund Rajan",
    designation: "Managing Partner",
    image: "/images/svg/leadership-image1.svg",
  },
  {
    name: "Mr. Bobby Pauly",
    designation: "Managing Partner",
    image: "/images/svg/leadership-image2.svg",
  },
  {
    name: "Mrinalini Mirchandani",
    designation: "Founder & General Partner",
    image: "/images/svg/leadership-image3.svg",
  },
  {
    name: "Sheetal Thakkar",
    designation: "Partner and Head of Investor Relations",
    image: "/images/svg/leadership-image4.svg",
  },
];

const stats = [
  { value: "25+", label: "years of collaboration" },
  { value: "USD 15+", label: "billion deal experience" },
  { value: "65+", label: "transactions across sectors and cycles" },
];

export function LeadershipSection() {
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [centers, setCenters] = useState<number[]>([]);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const dock = dockRef.current;
      if (!dock) return;
      const dockLeft = dock.getBoundingClientRect().left;
      setCenters(
        itemRefs.current.map((el) => {
          if (!el) return 0;
          const r = el.getBoundingClientRect();
          return r.left + r.width / 2 - dockLeft;
        }),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const distances = centers.map((c) =>
    mouseX === null ? Number.POSITIVE_INFINITY : Math.abs(mouseX - c),
  );
  const closestIndex =
    mouseX === null || distances.length === 0
      ? null
      : distances.reduce((best, d, i) => (d < distances[best] ? i : best), 0);
  const hoveredIndex =
    closestIndex !== null && distances[closestIndex] < DOCK_INFLUENCE_PX ? closestIndex : null;
  const activeIndex = focusedIndex ?? hoveredIndex;

  return (
    <section id="leadership" className="scroll-mt-24 bg-white py-18 text-black md:py-24">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-serif-brand text-[5rem] leading-[5.625rem] font-normal tracking-[0] text-black">
              Leadership
            </h2>
            <div className="mt-12 w-full max-w-[17.5rem] sm:max-w-sm">
              <h3 className="[font-family:var(--font-source-sans)] text-base leading-tight font-semibold tracking-[0] text-wrap">
                A Proven Team Building Together Again
              </h3>
              <p className="mt-8 [font-family:var(--font-source-sans)] text-lg leading-7 font-normal tracking-[0] text-wrap text-black/70">
                Belief in India&apos;s entrepreneurship unites us. We bring strong investment and
                value-creation expertise, deep history of working together, and marquee
                relationships across India&apos;s business landscape.
              </p>
            </div>
            <Link
              href="#team"
              className="mt-18 inline-flex items-center rounded-full border border-black px-7 py-2 font-serif-brand text-[1.625rem] leading-none font-normal tracking-[0.03em] transition hover:bg-black hover:text-white"
            >
              Meet the Team
            </Link>
          </div>

          <div className="md:w-[35rem] md:justify-self-end">
            <div
              ref={dockRef}
              className="mb-16 flex min-h-[14rem] items-start justify-center pt-4 md:min-h-[23rem] md:justify-center"
              onMouseMove={(event) => {
                const dock = dockRef.current;
                if (!dock) return;
                setMouseX(event.clientX - dock.getBoundingClientRect().left);
              }}
              onMouseLeave={() => setMouseX(null)}
            >
              {leaders.map((leader, index) => {
                const center = centers[index];
                const distance =
                  mouseX === null || center === undefined
                    ? Number.POSITIVE_INFINITY
                    : Math.abs(mouseX - center);
                const scale = focusedIndex === index ? DOCK_MAX_SCALE : dockScale(distance);
                const zIndex = Math.round(scale * 10);
                return (
                  <figure
                    key={leader.name}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    aria-label={`${leader.name}, ${leader.designation}`}
                    tabIndex={0}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    style={{ zIndex }}
                    className="relative -ml-2 flex w-[4.75rem] shrink-0 flex-col items-center text-center first:ml-0 focus-visible:outline-none md:-ml-2 md:w-[9rem]"
                  >
                    <div
                      style={{
                        transform: `scale(${scale})`,
                        backgroundColor: activeIndex === index ? "#DCDCDC" : "#D9D5D0",
                      }}
                      className="relative size-[4.75rem] origin-top overflow-hidden rounded-full transition-[transform,background-color] duration-150 ease-out md:size-[9rem]"
                    >
                      <Image
                        fill
                        sizes="(max-width: 768px) 9rem, 10rem"
                        src={leader.image}
                        alt={leader.name}
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={cn(
                        "pointer-events-none absolute left-1/2 top-[10rem] w-[13rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out md:top-[19rem]",
                        activeIndex === index ? "translate-y-0 opacity-100" : null,
                      )}
                    >
                      <p className="font-serif-brand text-base leading-tight font-semibold underline decoration-black/45 underline-offset-2">
                        {leader.name}
                      </p>
                      <p className="mt-2 text-xs leading-snug text-black/65">
                        {leader.designation}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="grid md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={cn(
                    "px-0 text-center md:px-4",
                    index < stats.length - 1 ? "md:border-r md:border-black/70" : null,
                  )}
                >
                  <p className="font-serif-brand text-[2.75rem] leading-[3rem] font-normal tracking-[0] whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-3 max-w-36 text-base leading-6 text-black/62">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
