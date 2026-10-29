import Image from "next/image";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";
import type { PressRelease } from "../../_components/data";

export function PressReleaseDetail({ release }: { release: PressRelease }) {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-[#f5f5f500] to-[#f5f5f5] pt-14 pb-28 text-black sm:pb-36 md:pt-20 lg:pt-23 lg:pb-29">
        <Image
          width={809}
          height={189}
          alt=""
          aria-hidden="true"
          src="/images/svg/news-hero-waves.svg"
          className="pointer-events-none absolute right-0 bottom-0 h-auto w-[85%] sm:w-[60%] lg:w-[42.15%]"
        />
        <Container className="relative">
          <Reveal>
            <h1 className="font-serif-brand text-[1.75rem] leading-9 font-normal tracking-normal italic md:text-[2rem] md:leading-10 lg:text-[2.1875rem] lg:leading-11">
              {release.titleLines.map((line, index) => (
                <span key={line} className="lg:block">
                  {index > 0 ? " " : null}
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 h-px max-w-142 bg-[#d56a34] lg:mt-10" />
            <p className="mt-6 max-w-140 font-sans-brand text-lg leading-7 font-light md:text-[1.375rem] md:leading-8 lg:mt-6.5 lg:text-2xl lg:leading-7.5">
              {release.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pt-16 pb-20 md:pt-24 md:pb-24 lg:pt-31 lg:pb-18">
        <Container>
          <div className="font-sans-brand text-lg leading-7 font-normal tracking-normal text-black md:text-[1.375rem] md:leading-8 lg:max-w-319.5 lg:text-[1.5625rem] lg:leading-9 [&_strong]:font-semibold">
            {release.content}
          </div>
        </Container>
      </section>
    </>
  );
}
