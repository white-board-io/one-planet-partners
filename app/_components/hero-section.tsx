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

const STATEMENT_REVEAL_TIME = 0.5;

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
      const statementLineElements = gsap.utils.toArray<HTMLElement>("[data-statement-line]");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(headline, { opacity: 1, yPercent: 0 });
        gsap.set(statement, { opacity: 1, y: 0 });
        gsap.set(statementLineElements, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(statement, { opacity: 0, y: 72 });
      gsap.set(statementLineElements, { opacity: 0, y: 28 });

      const statementReveal = gsap.timeline({ paused: true }).to(statementLineElements, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      });

      let hasRevealedStatement = false;
      const playStatementReveal = () => {
        if (hasRevealedStatement) {
          return;
        }

        hasRevealedStatement = true;
        statementReveal.play();
      };
      const resetStatementReveal = () => {
        if (!hasRevealedStatement && statementReveal.progress() === 0) {
          return;
        }

        hasRevealedStatement = false;
        statementReveal.pause(0);
      };
      const syncStatementReveal = (timeline: gsap.core.Timeline) => {
        if (timeline.time() >= STATEMENT_REVEAL_TIME) {
          playStatementReveal();
          return;
        }

        resetStatementReveal();
      };

      let scrollTimeline: gsap.core.Timeline | null = null;
      scrollTimeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          scrub: 0.7,
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onRefresh: () => {
            if (scrollTimeline) {
              syncStatementReveal(scrollTimeline);
            }
          },
          onUpdate: () => {
            if (scrollTimeline) {
              syncStatementReveal(scrollTimeline);
            }
          },
        },
      });

      scrollTimeline
        .to(background, { scale: 1.08, yPercent: -7, duration: 1 }, 0)
        .to(headline, { yPercent: -118, duration: 0.42 }, 0.04)
        .to(headline, { opacity: 0, duration: 0.18 }, 0.28)
        .to(statement, { opacity: 1, y: 0, duration: 0.08 }, 0.42)
        .to(statement, { y: -18, duration: 0.16 }, 1.02);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate bg-black" style={{ minHeight: "180vh" }}>
      <div ref={viewportRef} className="sticky top-0 h-svh min-h-155 overflow-hidden sm:min-h-175">
        <div ref={backgroundRef} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-bg-thumbnail.png"
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background:
              "linear-gradient(90.16deg, #000000 -17.28%, rgba(0, 0, 0, 0.5) 64.26%, rgba(0, 0, 0, 0) 99.86%)",
          }}
        />

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
              <h2>
                {statementLines.map((line, index) => (
                  <span
                    key={line}
                    data-statement-line
                    className={cn("block my-3", index < 3 ? "italic" : "font-light")}
                  >
                    {line}
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
