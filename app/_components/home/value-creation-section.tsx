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
    copyClassName: "md:max-w-72",
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
                our value creation framework unlocks stronger growth, greater resilience,
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
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1297_985"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1297_985)">
        <path
          d="M33.6 43.2502L30.3 39.9502L33.45 36.7502L30.3 33.6002L33.6 30.2002L36.8 33.4002L39.95 30.2002L43.35 33.6002L40.15 36.7502L43.35 39.9502L39.95 43.2502L36.8 40.1002L33.6 43.2502ZM12.525 38.3252C12.9083 37.9419 13.1 37.4669 13.1 36.9002C13.1 36.3335 12.9083 35.8585 12.525 35.4752C12.1417 35.0919 11.6667 34.9002 11.1 34.9002C10.5333 34.9002 10.0583 35.0919 9.675 35.4752C9.29167 35.8585 9.1 36.3335 9.1 36.9002C9.1 37.4669 9.29167 37.9419 9.675 38.3252C10.0583 38.7085 10.5333 38.9002 11.1 38.9002C11.6667 38.9002 12.1417 38.7085 12.525 38.3252ZM11.1 43.2502C9.3 43.2502 7.79167 42.6419 6.575 41.4252C5.35833 40.2085 4.75 38.7085 4.75 36.9252C4.75 35.1419 5.35833 33.6335 6.575 32.4002C7.79167 31.1669 9.3 30.5502 11.1 30.5502C12.3333 30.5502 13.45 30.8835 14.45 31.5502C15.45 32.2169 16.2 33.1002 16.7 34.2002C18.0333 34.2002 19.1917 33.7335 20.175 32.8002C21.1583 31.8669 21.65 30.7335 21.65 29.4002V19.6002C21.65 16.8335 22.6167 14.4835 24.55 12.5502C26.4833 10.6169 28.85 9.6502 31.65 9.6502H34.2L31.35 6.8502L34.75 3.4502L43.3 12.0002L34.75 20.5002L31.35 17.2002L34.2 14.3502H31.65C30.15 14.3502 28.8917 14.8585 27.875 15.8752C26.8583 16.8919 26.35 18.1335 26.35 19.6002V29.4002C26.35 31.9669 25.4583 34.1585 23.675 35.9752C21.8917 37.7919 19.7333 38.7502 17.2 38.8502C16.7667 40.1835 15.9917 41.2502 14.875 42.0502C13.7583 42.8502 12.5 43.2502 11.1 43.2502ZM8.05 17.7502L4.75 14.4502L7.9 11.2502L4.75 8.1002L8.05 4.7002L11.25 7.9002L14.4 4.7002L17.75 8.1002L14.55 11.2502L17.75 14.4502L14.4 17.7502L11.25 14.6002L8.05 17.7502Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

function GrowthIcon(props: ValueIconProps) {
  return (
    <svg
      width="48"
      height="48"
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
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1368_284"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1368_284)">
        <path
          d="M24.0055 24.0002C22.2352 24.0002 20.7333 23.3835 19.5 22.1502C18.2667 20.9169 17.65 19.4002 17.65 17.6002C17.65 15.8612 18.2698 14.3682 19.5095 13.1212C20.7492 11.8739 22.249 11.2502 24.009 11.2502C25.7753 11.2502 27.282 11.8739 28.529 13.1212C29.7763 14.3682 30.4 15.8612 30.4 17.6002C30.4 19.4002 29.7783 20.9169 28.535 22.1502C27.2913 23.3835 25.7815 24.0002 24.0055 24.0002ZM23.9825 20.2502C24.7275 20.2502 25.3583 19.9989 25.875 19.4962C26.3917 18.9935 26.65 18.3705 26.65 17.6272C26.65 16.9092 26.3942 16.2919 25.8825 15.7752C25.3708 15.2585 24.7292 15.0002 23.9575 15.0002C23.2525 15.0002 22.65 15.2579 22.15 15.7732C21.65 16.2882 21.4 16.9132 21.4 17.6482C21.4 18.3829 21.6545 19.0002 22.1635 19.5002C22.6728 20.0002 23.2792 20.2502 23.9825 20.2502ZM11.65 36.3502V32.1827C11.65 31.215 11.9583 30.3677 12.575 29.6407C13.1917 28.9137 13.9333 28.3002 14.8 27.8002C16.2607 27.0669 17.7617 26.5169 19.303 26.1502C20.8447 25.7835 22.4128 25.6002 24.0075 25.6002C25.6025 25.6002 27.175 25.7835 28.725 26.1502C30.275 26.5169 31.7667 27.0669 33.2 27.8002C34.077 28.2792 34.8295 28.8875 35.4575 29.6252C36.0858 30.3625 36.4 31.215 36.4 32.1827V36.3502H11.65ZM20.25 29.8252C19.0167 30.1419 17.8333 30.6002 16.7 31.2002V32.6002H31.3V31.2002C30.1667 30.6002 28.9833 30.1419 27.75 29.8252C26.5167 29.5085 25.2667 29.3502 24 29.3502C22.7333 29.3502 21.4833 29.5085 20.25 29.8252ZM7.45 45.2502C6.14833 45.2502 5.0395 44.7924 4.1235 43.8767C3.20783 42.9607 2.75 41.8519 2.75 40.5502V32.4002H7.45V40.5502H15.6V45.2502H7.45ZM2.75 15.6002V7.4502C2.75 6.13486 3.20783 5.01436 4.1235 4.0887C5.0395 3.16303 6.14833 2.7002 7.45 2.7002H15.6V7.4502H7.45V15.6002H2.75ZM32.4 45.2502V40.5502H40.55V32.4002H45.3V40.5502C45.3 41.8519 44.8372 42.9607 43.9115 43.8767C42.9858 44.7924 41.8653 45.2502 40.55 45.2502H32.4ZM40.55 15.6002V7.4502H32.4V2.7002H40.55C41.8653 2.7002 42.9858 3.16303 43.9115 4.0887C44.8372 5.01436 45.3 6.13486 45.3 7.4502V15.6002H40.55Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function ReportingIcon(props: ValueIconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1297_996"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1297_996)">
        <path
          d="M21.6516 10.0501V0.850098H26.3516V10.0501H21.6516ZM35.5016 15.8001L32.1516 12.4501L38.7016 5.9501L42.0516 9.2501L35.5016 15.8001ZM37.9516 26.3501V21.6501H47.1516V26.3501H37.9516ZM21.6516 47.1501V37.9501H26.3516V47.1501H21.6516ZM12.4516 15.8501L6.00156 9.3501L9.35156 6.0501L15.8516 12.5501L12.4516 15.8501ZM38.7516 42.0501L32.1516 35.5001L35.4516 32.2001L42.0516 38.5501L38.7516 42.0501ZM0.851562 26.3501V21.6501H10.0516V26.3501H0.851562ZM9.40156 42.0001L6.00156 38.6501L12.5016 32.1501L14.2016 33.8001L15.9516 35.4501L9.40156 42.0001ZM15.7016 32.3001C13.4349 30.0334 12.3016 27.2668 12.3016 24.0001C12.3016 20.7334 13.4349 17.9668 15.7016 15.7001C17.9682 13.4334 20.7349 12.3001 24.0016 12.3001C27.2682 12.3001 30.0349 13.4334 32.3016 15.7001C34.5682 17.9668 35.7016 20.7334 35.7016 24.0001C35.7016 27.2668 34.5682 30.0334 32.3016 32.3001C30.0349 34.5668 27.2682 35.7001 24.0016 35.7001C20.7349 35.7001 17.9682 34.5668 15.7016 32.3001Z"
          fill="#1C1B1F"
        />
      </g>
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
