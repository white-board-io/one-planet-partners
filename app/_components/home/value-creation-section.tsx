import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { Container } from "@/app/_components/container";
import { cn } from "@/lib/utils";

type ValueIcon = ComponentType<SVGProps<SVGSVGElement>>;

const valueItems: Array<{ copy: string; icon: ValueIcon; copyClassName?: string }> = [
  {
    copy: "Sharpen strategy and investor messaging.",
    icon: StrategyIcon,
  },
  {
    copy: "Accelerate growth and expand margins.",
    icon: GrowthIcon,
  },
  {
    copy: "Enhance capital efficiency.",
    icon: CapitalIcon,
  },
  {
    copy: "Elevate talent, link to value.",
    icon: TalentIcon,
  },
  {
    copy: "Better reporting, tighter controls and stronger governance. Climate integrated.",
    icon: ReportingIcon,
    copyClassName: "max-w-[13.25rem]",
  },
  {
    copy: "Step-up exit maturity, multiply pathways to exit.",
    icon: ExitIcon,
  },
];

export function ValueCreationSection() {
  return (
    <section
      id="value-creation"
      className="scroll-mt-24 bg-white pt-[8.2rem] pb-28 text-black md:min-h-screen md:py-36 lg:py-[11.25rem]"
    >
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Image
            src="/images/svg/logo.svg"
            alt="One Planet Partners"
            width={84}
            height={84}
            className="size-[3.25rem] md:size-[5.25rem]"
            priority={false}
          />

          <h2 className="mt-6 max-w-[14.75rem] font-serif-brand text-[2.45rem] leading-[2.55rem] font-normal tracking-normal text-black md:mt-8 md:max-w-none md:text-[3.75rem] md:leading-[4.1rem]">
            How We Create Value
          </h2>

          <p className="mt-8 max-w-[21.5rem] font-sans-brand text-[1.16rem] leading-[1.62rem] font-light text-black/72 md:mt-5 md:max-w-[53rem] md:text-base md:leading-[1.65rem]">
            We approach every investment with an owner’s mindset. Tailored to mid-market businesses,
            our value creation framework unlocks stronger growth, greater resilience, climate
            positivity and higher-quality exits.
          </p>

          <div className="mt-[4.35rem] grid w-full grid-cols-2 gap-x-7 gap-y-[4.4rem] sm:gap-x-12 md:mt-[4.5rem] md:grid-cols-3 md:gap-x-20 md:gap-y-24">
            {valueItems.map(({ copy, icon: Icon, copyClassName }) => (
              <div key={copy} className="flex flex-col items-center">
                <Icon aria-hidden="true" className="h-8 w-8 text-black/85" />
                <p
                  className={cn(
                    "mt-9 max-w-[11.5rem] font-serif-brand text-[1.45rem] leading-[1.5rem] font-normal text-black md:mt-6 md:max-w-[16rem] md:text-[1.45rem] md:leading-[1.9rem]",
                    copyClassName,
                  )}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StrategyIcon(props: SVGProps<SVGSVGElement>) {
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

function GrowthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M4 25h4V13m6 12V6m6 19V16m-3 9 9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 16h4v4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapitalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="6" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="3" />
      <circle cx="16" cy="12" r="2.5" fill="currentColor" />
      <path
        d="M7 25h18m0 0-4-4m4 4-4 4m-14-4 4-4m-4 4 4 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TalentIcon(props: SVGProps<SVGSVGElement>) {
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

function ReportingIcon(props: SVGProps<SVGSVGElement>) {
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

function ExitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M11.5 5c4 0 5.5 12 1.5 12S7.5 5 11.5 5Zm9 10c4 0 4 12 0 12s-4-12 0-12Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M13 17c1.6 2.8 4 4.2 7 4.2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
