"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statementLines = ["This is how we", "help ambitious", "companies", "succeed."];
const statementText = statementLines.join(" ");

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const background = backgroundRef.current;
    const headline = headlineRef.current;
    const statement = statementRef.current;

    if (!section || !viewport || !background || !headline || !statement) {
      return;
    }

    const context = gsap.context(() => {
      const statementRevealLines = gsap.utils.toArray<HTMLElement>(
        "[data-statement-reveal-line]",
      );
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(headline, { opacity: 1, yPercent: 0 });
        gsap.set(statement, { opacity: 1, y: 0 });
        gsap.set(statementRevealLines, { clipPath: "inset(0% 0% 0% 0%)" });
        return;
      }

      gsap.set(statement, { opacity: 0, y: 72 });
      gsap.set(statementRevealLines, {
        clipPath: "inset(0% 100% 0% 0%)",
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(background, { scale: 1.08, yPercent: -7, duration: 1 }, 0)
        .to(headline, { yPercent: -118, duration: 0.42 }, 0.04)
        .to(headline, { opacity: 0, duration: 0.18 }, 0.28)
        .to(statement, { opacity: 1, y: 0, duration: 0.22 }, 0.42)
        .to(
          statementRevealLines,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.22,
            stagger: 0.28,
          },
          0.5,
        )
        .to(statement, { y: -18, duration: 0.2 }, 1.7);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-black"
      style={{ minHeight: "340vh" }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 h-[100svh] min-h-155 overflow-hidden sm:min-h-175"
      >
        <div ref={backgroundRef} className="absolute inset-0">
          <Image
            fill
            alt=""
            priority
            sizes="100vw"
            src="/images/svg/hero-bg.svg"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 flex h-full items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-18">
          <div className="max-w-190 overflow-hidden py-2">
            <h1
              ref={headlineRef}
              className="text-[3.55rem] leading-[0.92] tracking-normal text-white sm:text-[4.75rem] md:text-[5.7rem] lg:text-[6.6rem]"
            >
              <span className="block">{"Invest in India's"}</span>
              <span className="block">
                Rapidly <em className="italic">Growing</em>
              </span>
              <span className="block italic">Mid-Market.</span>
            </h1>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex h-full items-center justify-center px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-18">
          <div
            ref={statementRef}
            className="relative max-w-250 text-[3rem] leading-[1.02] tracking-normal sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem]"
            style={{ opacity: 0 }}
          >
            <h2 aria-label={statementText}>
              {statementLines.map((line) => (
                <span key={line} aria-hidden="true" className="relative block">
                  <span className="text-transparent">{line}</span>
                  <span
                    data-statement-reveal-line
                    className="absolute inset-0 text-white"
                    style={{
                      clipPath: "inset(0% 100% 0% 0%)",
                      willChange: "clip-path",
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
