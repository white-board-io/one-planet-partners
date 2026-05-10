"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const HOVER_SCALE = 255 / 144;

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="scroll-mt-24 bg-white py-18 text-black md:py-24">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center md:hidden">
          <h2 className="font-serif-brand text-[2.75rem] leading-[1.1] font-normal tracking-[0]">
            Leadership
          </h2>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:var(--font-source-sans)] text-base leading-tight font-semibold tracking-[0]">
              A Proven Team Building Together Again
            </h3>
            <p className="[font-family:var(--font-source-sans)] text-sm leading-6 font-normal tracking-[0] text-black/80">
              Belief in India&apos;s entrepreneurship unites us. We bring strong investment and
              value-creation expertise, deep history of working together, and marquee
              relationships across India&apos;s business landscape.
            </p>
          </div>

          <div className="grid w-full grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={cn(
                  "px-1 text-center",
                  index < stats.length - 1 ? "border-r border-black/70" : null,
                )}
              >
                <p className="font-serif-brand text-[1.875rem] leading-[1.1] font-normal whitespace-nowrap">
                  {stat.value}
                </p>
                <p className="mx-auto mt-2 text-xs leading-snug text-black/62">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-xs grid-cols-2 gap-x-8 gap-y-10 pt-2">
            {leaders.map((leader) => (
              <figure
                key={leader.name}
                aria-label={`${leader.name}, ${leader.designation}`}
                className="flex flex-col items-center text-center"
              >
                <div className="relative size-[5.5rem] overflow-hidden rounded-full bg-[#D9D5D0]">
                  <Image
                    fill
                    sizes="6rem"
                    src={leader.image}
                    alt={leader.name}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 px-1">
                  <p className="font-serif-brand text-base leading-tight font-semibold underline decoration-black/45 underline-offset-2">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-black/65">{leader.designation}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            href="#team"
            className="inline-flex items-center rounded-full border border-black px-7 py-2 font-serif-brand text-[1.625rem] leading-none font-normal tracking-[0.03em] transition hover:bg-black hover:text-white"
          >
            Meet the Team
          </Link>
        </div>

        <div className="mx-auto hidden max-w-6xl gap-12 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-serif-brand text-[5rem] leading-[5.625rem] font-normal tracking-[0] text-black">
              Leadership
            </h2>
            <div className="mt-12 w-full max-w-sm">
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

          <div className="w-[35rem] justify-self-end">
            <div
              className="mb-4 flex min-h-[22rem] items-start justify-center pt-4"
              onMouseLeave={() => setActiveIndex(null)}
            >
              {leaders.map((leader, index) => {
                const isActive = activeIndex === index;
                return (
                  <figure
                    key={leader.name}
                    aria-label={`${leader.name}, ${leader.designation}`}
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    style={{ zIndex: isActive ? 20 : 10 }}
                    className="relative -ml-2 flex w-[9rem] shrink-0 flex-col items-center text-center first:ml-0 focus-visible:outline-none"
                  >
                    <div
                      style={{
                        transform: `scale(${isActive ? HOVER_SCALE : 1})`,
                        backgroundColor: isActive ? "#DCDCDC" : "#D9D5D0",
                      }}
                      className="relative size-[9rem] origin-top overflow-hidden rounded-full transition-[transform,background-color] duration-200 ease-out"
                    >
                      <Image
                        fill
                        sizes="10rem"
                        src={leader.image}
                        alt={leader.name}
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={cn(
                        "pointer-events-none absolute left-1/2 top-[17rem] w-[13rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out",
                        isActive ? "translate-y-0 opacity-100" : null,
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
            <div className="grid grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={cn(
                    "px-4 text-center",
                    index < stats.length - 1 ? "border-r border-black/70" : null,
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
