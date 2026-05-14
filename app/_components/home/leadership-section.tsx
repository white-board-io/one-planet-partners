"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

const HOVER_SCALE = 192 / 144;
const DEFAULT_ACTIVE_INDEX = 0;

const leaders = [
  {
    id: "mukund",
    name: "Dr. Mukund Rajan",
    nameLines: ["Dr. Mukund", "Rajan"] as const,
    designation: "Founder & General Partner",
    image: "/images/svg/leadership-image1.svg",
  },
  {
    id: "bobby",
    name: "Mr. Bobby Pauly",
    nameLines: ["Mr. Bobby", "Pauly"] as const,
    designation: "Founder & General Partner",
    image: "/images/svg/leadership-image2.svg",
  },
  {
    id: "mrinalini",
    name: "Mrinalini Mirchandani",
    nameLines: ["Mrinalini", "Mirchandani"] as const,
    designation: "Founder & General Partner",
    image: "/images/svg/leadership-image3.svg",
  },
  {
    id: "sheetal",
    name: "Sheetal Thakkar",
    nameLines: ["Sheetal", "Thakkar"] as const,
    designation: "Founder & General Partner",
    image: "/images/svg/leadership-image4.svg",
  },
];

const stats = [
  { value: "25+", label: "years of collaboration", desktopLabel: ["years of", "collaboration"] },
  {
    value: "~14bn",
    label: "billion deal experience",
    desktopLabel: ["billion deal", "experience"],
  },
  {
    value: "65+",
    label: "transactions across sectors and cycles",
    desktopLabel: ["transactions", "across sectors", "and cycles"],
  },
];

export function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);

  return (
    <section id="leadership" className="scroll-mt-24 bg-white py-32 text-black md:py-40">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:gap-10 lg:hidden">
          <h2 className="font-serif-brand text-4xl leading-none font-normal tracking-normal md:text-6xl">
            Leadership
          </h2>

          <div className="flex max-w-2xl flex-col gap-6">
            <h3 className="[font-family:var(--font-source-sans)] text-base leading-tight font-semibold tracking-normal md:text-2xl">
              A Proven Team Building Together Again
            </h3>
            <p className="[font-family:var(--font-source-sans)] text-xl leading-6 font-normal tracking-normal text-black/80 md:text-2xl md:leading-8">
              Belief in India&apos;s entrepreneurship unites us. We bring strong investment and
              value-creation expertise, deep history of working together, and marquee relationships
              across India&apos;s business landscape.
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
                <p className="font-serif-brand text-3xl leading-none font-normal whitespace-nowrap">
                  {stat.value}
                </p>
                <p className="mx-auto mt-2 text-xs leading-snug text-black/62">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-xs grid-cols-2 gap-x-8 gap-y-10 pt-2 md:max-w-3xl md:grid-cols-4 md:gap-x-6">
            {leaders.map((leader) => (
              <figure
                key={leader.id}
                aria-label={`${leader.name}, ${leader.designation}`}
                className="flex flex-col items-center text-center"
              >
                <Link
                  href={`/leadership/${leader.id}`}
                  aria-label={`Read ${leader.name}'s bio`}
                  className="relative block size-22 overflow-hidden rounded-full bg-[#D9D5D0] md:size-32"
                >
                  <Image
                    fill
                    sizes="6rem"
                    src={leader.image}
                    alt={leader.name}
                    className="object-cover"
                  />
                </Link>
                <figcaption className="mt-3 px-1">
                  <Link
                    href={`/leadership/${leader.id}`}
                    aria-label={`Read ${leader.name}'s bio`}
                    className="font-serif-brand text-base leading-tight font-semibold underline decoration-black/45 underline-offset-2"
                  >
                    <span className="flex flex-col">
                      <span>{leader.nameLines[0]}</span>
                      <span>{leader.nameLines[1]}</span>
                    </span>
                  </Link>
                  <p className="mt-1 text-xs leading-snug text-black/65 md:text-sm">
                    {leader.designation}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            href="/leadership"
            className="inline-flex items-center rounded-full border border-black px-5 py-1.5 font-serif-brand text-base leading-normal font-normal tracking-wide text-black transition hover:border-[#47a685] hover:!text-[#47a685] md:px-7 md:py-2 md:text-2xl md:leading-relaxed"
          >
            Meet Our People
          </Link>
        </div>

        <div className="hidden w-full gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-serif-brand text-7xl leading-16 font-normal tracking-normal text-black">
              Leadership
            </h2>
            <div className="mt-18 w-full max-w-136">
              <h3 className="font-sans-brand text-2xl leading-8 font-semibold tracking-normal whitespace-nowrap">
                A Proven Team Building Together Again
              </h3>
              <p className="mt-5 font-sans-brand text-2xl leading-7 font-light tracking-normal text-black/70">
                Belief in India&apos;s entrepreneurship unites us. We bring
                <br />
                strong investment and value-creation expertise, deep
                <br />
                history of working together, and marquee relationships
                <br />
                across India&apos;s business landscape.
              </p>
            </div>
            <Link
              href="/leadership"
              className="mt-12 inline-flex items-center rounded-full border-1 border-black px-7 py-2 font-serif-brand text-xl leading-7 font-normal text-black transition hover:border-[#47a685] hover:!text-[#47a685]"
            >
              Meet Our People
            </Link>
          </div>

          <div className="w-140 justify-self-en mr-16">
            <div
              className="flex min-h-88 items-start justify-center pt-4"
              onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
            >
              {leaders.map((leader, index) => {
                const isActive = activeIndex === index;
                return (
                  <figure
                    key={leader.id}
                    aria-label={`${leader.name}, ${leader.designation}`}
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
                    style={{ zIndex: isActive ? 20 : 10 }}
                    className="relative -ml-2 flex w-36 shrink-0 flex-col items-center text-center first:ml-0 focus-visible:outline-none"
                  >
                    <div
                      style={{
                        transform: `scale(${isActive ? HOVER_SCALE : 1})`,
                        backgroundColor: isActive ? "#DCDCDC" : "#D9D5D0",
                      }}
                      className="relative size-36 origin-center overflow-hidden rounded-full transition-[transform,background-color] duration-200 ease-out"
                    >
                      <Link
                        href={`/leadership/${leader.id}`}
                        aria-label={`Read ${leader.name}'s bio`}
                        className="absolute inset-0 block"
                      >
                        <Image
                          fill
                          sizes="10rem"
                          src={leader.image}
                          alt={leader.name}
                          className="object-cover"
                        />
                      </Link>
                    </div>
                    <figcaption
                      className={cn(
                        "absolute left-1/2 top-48 w-52 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out",
                        isActive ? "translate-y-0 opacity-100" : null,
                      )}
                    >
                      <Link
                        href={`/leadership/${leader.id}`}
                        aria-label={`Read ${leader.name}'s bio`}
                        className="font-serif-brand text-base leading-tight font-semibold underline decoration-black/45 underline-offset-2"
                      >
                        {leader.name}
                      </Link>
                      <p className="text-xs leading-snug text-black/65">{leader.designation}</p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="-mt-15 grid grid-cols-[0.75fr_1fr_0.75fr]">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={cn(
                    "px-4 text-center",
                    index < stats.length - 1 ? "border-r border-black/70" : null,
                  )}
                >
                  <p className="font-serif-brand text-5xl leading-10 font-normal tracking-normal whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-3 max-w-44 font-sans-brand text-2xl leading-7 font-light tracking-normal text-black/62">
                    {stat.desktopLabel.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
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
