import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";
import { ValueIconAnimator } from "@/app/_components/home/value-icon-animator";
import { cn } from "@/lib/utils";

type ValueIconProps = Pick<SVGProps<SVGSVGElement>, "className" | "aria-hidden">;
type ValueIcon = ComponentType<ValueIconProps>;

const valueItems: Array<{ lines: string[]; icon: ValueIcon; copyClassName?: string }> = [
  {
    lines: ["Sharpen strategy and", "investor messaging"],
    icon: StrategyIcon,
  },
  {
    lines: ["Accelerate growth and", "expand margins"],
    icon: GrowthIcon,
  },
  {
    lines: ["Enhance capital", "efficiency"],
    icon: CapitalIcon,
  },
  {
    lines: ["Elevate talent,", "link to value"],
    icon: TalentIcon,
  },
  {
    lines: ["Strengthen governance,", "climate integrated", "reporting and controls"],
    icon: ReportingIcon,
    copyClassName: "max-w-53",
  },
  {
    lines: ["Develop exit maturity,", "multiply pathways to exit"],
    icon: FootprintIcon,
  },
];

export function ValueCreationSection() {
  return (
    <section
      id="value-creation"
      className="scroll-mt-24 bg-white pt-41 pb-36 text-black md:min-h-screen md:py-44 lg:py-53"
    >
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal>
            <Image
              src="/images/svg/logo.svg"
              alt="One Planet Partners"
              width={84}
              height={84}
              className="size-13 md:size-21"
              priority={false}
            />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-6 max-w-59 font-serif-brand text-4xl leading-9 font-normal tracking-normal text-black md:mt-8 md:max-w-none md:text-7xl md:leading-16">
              <span className="block md:inline">How We </span>
              <span className="block md:inline">Create Value</span>
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 font-sans-brand text-xl leading-6 font-normal text-black md:mt-5 md:text-xl lg:text-2xl lg:leading-7">
              <span className="block">
                We approach every investment with an owner’s mindset. Tailored to mid-market
                businesses,
              </span>
              <span className="block">
                our value creation framework unlocks stronger growth, greater resilience, exits.
              </span>
              <span className="block">climate positivity and higher-quality exits.</span>
            </p>
          </Reveal>

          <ValueIconAnimator className="mt-17 grid w-full grid-cols-2 gap-x-7 gap-y-18 sm:gap-x-12 md:mt-18 md:grid-cols-3 md:gap-x-20 md:gap-y-24">
            {valueItems.map(({ lines, icon: Icon, copyClassName }, index) => (
              <div key={lines.join(" ")} className="flex flex-col items-center">
                <span
                  data-value-icon=""
                  className="inline-flex size-10 will-change-transform lg:size-12"
                >
                  <Icon aria-hidden="true" className="size-full text-black/85" />
                </span>
                <Reveal delay={(index % 3) * 120}>
                  <p
                    className={cn(
                      "mt-7 max-w-52 text-center font-serif-brand text-2xl leading-7 font-normal text-black md:mt-7 md:max-w-64 md:leading-8",
                      copyClassName,
                    )}
                  >
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </Reveal>
              </div>
            ))}
          </ValueIconAnimator>
        </div>
      </Container>
    </section>
  );
}

function StrategyIcon(props: ValueIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M8 24c7.8 0 4.9-16 16-16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m20 4 4 4-4 4M6 8l4 4M10 8l-4 4M22 22l4 4M26 22l-4 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="24" r="2.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function GrowthIcon(props: ValueIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1297_993"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1297_993)">
        <path
          d="M15.5992 27.6502V11.7002H20.6992V27.4002L18.1492 25.0502L15.5992 27.6502ZM25.5992 31.9502V3.4502H30.6492V26.8502L25.5992 31.9502ZM5.64922 37.5002V20.0002H10.6992V32.4502L5.64922 37.5002ZM4.69922 42.6002L18.2492 29.0502L25.6992 35.6002L39.1992 22.1002H34.9992V17.9502H46.2992V29.1502H42.1492V25.0002L25.7492 41.4002L18.3992 34.6502L10.4992 42.6002H4.69922Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function CapitalIcon(props: ValueIconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1374_304"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1374_304)">
        <path
          d="M12 48.2L2.75 38.9L12 29.7L15.3 33.05L11.8 36.55H36.2L32.7 33.05L36.1 29.7L45.3 38.925L36.05 48.2L32.7 44.85L36.3 41.25H11.8L15.3 44.85L12 48.2ZM23.988 19.6C22.596 19.6 21.4167 19.1127 20.45 18.138C19.4833 17.1637 19 15.9803 19 14.588C19 13.2293 19.4873 12.0583 20.462 11.075C21.4363 10.0917 22.6197 9.6 24.012 9.6C25.404 9.6 26.5833 10.0957 27.55 11.087C28.5167 12.078 29 13.253 29 14.612C29 16.004 28.5127 17.1833 27.538 18.15C26.5637 19.1167 25.3803 19.6 23.988 19.6ZM9.4 28.3C8.10733 28.3 7.00083 27.8348 6.0805 26.9045C5.16017 25.9745 4.7 24.8563 4.7 23.55V5.7C4.7 4.40767 5.16017 3.30117 6.0805 2.3805C7.00083 1.46017 8.10733 1 9.4 1H38.55C39.8563 1 40.9745 1.46017 41.9045 2.3805C42.8348 3.30117 43.3 4.40767 43.3 5.7V23.55C43.3 24.8563 42.8348 25.9745 41.9045 26.9045C40.9745 27.8348 39.8563 28.3 38.55 28.3H9.4ZM13.85 24.1H34.1C34.1 22.7333 34.5917 21.5583 35.575 20.575C36.5583 19.5917 37.7333 19.1 39.1 19.1V10.1C37.7333 10.1 36.5583 9.61667 35.575 8.65C34.5917 7.68333 34.1 6.5 34.1 5.1H13.8395C13.8395 6.5 13.3578 7.68333 12.3945 8.65C11.4315 9.61667 10.25 10.1 8.85 10.1V19.1C10.25 19.1 11.4333 19.5917 12.4 20.575C13.3667 21.5583 13.85 22.7333 13.85 24.1Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function TalentIcon(props: ValueIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="15" r="3.25" stroke="currentColor" strokeWidth="3" />
      <path
        d="M10 24c1.2-3.2 10.8-3.2 12 0M5 11V6h5m17 5V6h-5M5 21v5h5m17-5v5h-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReportingIcon(props: ValueIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="5" fill="currentColor" />
      <path
        d="M16 3v5m0 16v5M3 16h5m16 0h5M6.8 6.8l3.5 3.5m11.4 11.4 3.5 3.5m0-18.4-3.5 3.5M10.3 21.7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FootprintIcon({ className, "aria-hidden": ariaHidden }: ValueIconProps) {
  return (
    <Image
      src="/images/svg/footprint.svg"
      alt=""
      width={32}
      height={32}
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}
