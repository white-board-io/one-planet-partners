import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";
import type { PressRelease } from "../../_components/data";

export function PressReleaseDetail({ release }: { release: PressRelease }) {
  return (
    <>
      <section className="bg-black py-20 text-center text-white md:py-28 lg:py-35">
        <Container>
          <Reveal>
            <h1 className="mx-auto max-w-5xl font-serif-brand text-[1.75rem] leading-9 font-normal tracking-normal md:text-[2rem] md:leading-10 lg:max-w-none lg:text-[2.1875rem] lg:leading-11">
              {release.titleLines.map((line, index) => (
                <span key={line} className="lg:block">
                  {index > 0 ? " " : null}
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 font-sans-brand text-lg leading-7 font-light md:mt-8 md:text-[1.375rem] md:leading-8 lg:mt-10 lg:text-2xl lg:leading-8">
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
