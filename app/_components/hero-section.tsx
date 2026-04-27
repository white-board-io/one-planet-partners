"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Container } from "@/app/_components/container";

gsap.registerPlugin(ScrollTrigger);

const statementLines = [
  "One Planet Partners is an",
  "India-focused private equity firm",
  "investing in mid-market",
  "businesses where active ownership,",
  "operational rigor, and climate",
  "intelligence create enduring value.",
];

const statementText = statementLines.join(" ");
const statementHiddenClip = "inset(-18% 100% -28% 0%)";
const statementVisibleClip = "inset(-18% 0% -28% 0%)";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const statement = statementRef.current;
    const background = backgroundRef.current;
    const headline = headlineRef.current;

    if (!section || !viewport || !background || !headline || !statement) {
      return;
    }

    const context = gsap.context(() => {
      const statementRevealLines = gsap.utils.toArray<HTMLElement>("[data-statement-reveal-line]");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(headline, { opacity: 1, yPercent: 0 });
        gsap.set(statement, { opacity: 1, y: 0 });
        gsap.set(statementRevealLines, { clipPath: statementVisibleClip });
        return;
      }

      gsap.set(statement, { opacity: 0, y: 72 });
      gsap.set(statementRevealLines, {
        clipPath: statementHiddenClip,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          scrub: 0.7,
          trigger: section,
          start: "top top",
          end: "bottom bottom",
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
            clipPath: statementVisibleClip,
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
    <section ref={sectionRef} className="relative isolate bg-black" style={{ minHeight: "340vh" }}>
      <div ref={viewportRef} className="sticky top-0 h-svh min-h-155 overflow-hidden sm:min-h-175">
        <div ref={backgroundRef} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          >
            <source src="/videos/HCC%20Sea%20Link%20Drone%202.mp4" type="video/mp4" />
          </video>
        </div>

        <Container className="relative z-10 flex h-full items-center">
          <div className="overflow-hidden py-2 font-serif-brand text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            <h1 ref={headlineRef} className="text-white">
              <span className="block font-light">{"Invest in India's"}</span>
              <span className="block font-light">
                Rapidly <em className="italic font-semibold">Growing</em>
              </span>
              <span className="block italic font-semibold">Mid-Market.</span>
            </h1>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-20 flex h-full items-center py-8 font-serif-brand text-3xl md:text-4xl xl:text-5xl">
          <Container>
            <div ref={statementRef} className="text-white" style={{ opacity: 0 }}>
              <h2 aria-label={statementText}>
                {statementLines.map((line, index) => (
                  <span
                    key={line}
                    aria-hidden="true"
                    className={cn("relative block my-3", index < 3 ? "italic" : "font-light")}
                  >
                    <span className="text-transparent">{line}</span>
                    <span
                      data-statement-reveal-line
                      className="absolute inset-0 text-white"
                      style={{
                        willChange: "clip-path",
                        clipPath: statementHiddenClip,
                      }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h2>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
