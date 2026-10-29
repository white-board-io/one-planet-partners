import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";
import { getPressReleaseTitle, pressReleases } from "@/app/news/_components/data";

export function PressReleaseSection() {
  const [release] = pressReleases;

  return (
    <section
      id="news"
      className="scroll-mt-10 bg-white pb-30 text-black md:pb-36 lg:scroll-mt-24 lg:pb-38"
    >
      <Container>
        <div className="mx-auto grid max-w-2xl gap-10 lg:max-w-none lg:grid-cols-[493fr_663fr] lg:items-center lg:gap-x-19.5 lg:pl-[4.8%]">
          <Reveal>
            <div className="relative aspect-[583/360] overflow-hidden rounded-md bg-black">
              <Image
                fill
                src={release.image}
                alt={release.imageAlt}
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, (min-width: 672px) 672px, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="font-serif-brand text-lg leading-6 font-semibold tracking-normal xl:text-[1.25rem] xl:leading-7">
              News
            </p>
            <h2 className="mt-4 font-serif-brand text-[1.625rem] leading-8 font-normal tracking-normal lg:mt-5 xl:mt-6.5 xl:text-[1.875rem] xl:leading-9.5">
              {getPressReleaseTitle(release)}
            </h2>
            <p className="mt-4 font-sans-brand text-lg leading-6 font-light tracking-normal xl:mt-5 xl:text-[1.25rem] xl:leading-6.5">
              {release.subtitle}
            </p>
            <Link
              href={`/news/${release.slug}`}
              className="group mt-8 inline-flex h-11 items-center rounded-full border-[1.5px] border-black px-6.5 font-serif-brand text-[1.25rem] leading-none transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black xl:mt-10 xl:h-12 xl:px-7 xl:text-[1.4375rem]"
            >
              {/* Global `a { color: inherit }` is unlayered and beats color utilities on the link itself. */}
              <span className="transition-colors group-hover:text-white">Read More</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
