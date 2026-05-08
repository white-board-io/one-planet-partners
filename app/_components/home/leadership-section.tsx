"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

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
  const [activeLeader, setActiveLeader] = useState<number | null>(null);

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
              className="mb-16 flex min-h-[14rem] items-start justify-center pt-4 md:justify-center"
              onMouseLeave={() => setActiveLeader(null)}
            >
              {leaders.map((leader, index) => (
                <figure
                  key={leader.name}
                  aria-label={`${leader.name}, ${leader.designation}`}
                  tabIndex={0}
                  onFocus={() => setActiveLeader(index)}
                  onBlur={() => setActiveLeader(null)}
                  onMouseEnter={() => setActiveLeader(index)}
                  className={cn(
                    "relative z-0 -ml-3 flex w-[5.75rem] shrink-0 flex-col items-center text-center first:ml-0 focus-visible:outline-none md:-ml-4 md:w-[6.25rem]",
                    activeLeader === index ? "z-20" : null,
                  )}
                >
                  <div
                    className={cn(
                      "relative size-[4.75rem] origin-top overflow-hidden rounded-full bg-black/8 ring-4 ring-white transition-transform duration-300 ease-out md:size-[6rem]",
                      activeLeader === index ? "scale-[1.8] md:scale-[1.8]" : "scale-100",
                    )}
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
                      "pointer-events-none absolute left-1/2 top-[9.75rem] w-[13rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out md:top-[12.5rem]",
                      activeLeader === index ? "translate-y-0 opacity-100" : null,
                    )}
                  >
                    <p className="font-serif-brand text-base leading-tight font-semibold underline decoration-black/45 underline-offset-2">
                      {leader.name}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-black/65">{leader.designation}</p>
                  </figcaption>
                </figure>
              ))}
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
