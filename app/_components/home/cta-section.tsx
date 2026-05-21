import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="bg-black pt-33 pb-30 text-center text-white md:min-h-150 md:pt-30 md:pb-30"
    >
      <Container>
        <div className="mx-auto max-w-230">
          <Reveal>
          <p className="mx-auto text-center font-serif-brand text-[28px] leading-tight font-normal tracking-normal sm:text-[34px] md:max-w-3xl md:py-10 md:text-5xl md:leading-tight lg:max-w-none lg:py-14 lg:text-6xl lg:leading-15 lg:text-balance">
            <span>Let&rsquo;s build the next </span>
            <br className="lg:hidden" aria-hidden />
            <span> generation of responsible </span>
            <br className="lg:hidden" aria-hidden />
            <em className="font-normal italic">market-leaders&hellip;together.</em>
          </p>
          </Reveal>
          <Reveal delay={140}>
          <p className="mx-auto  pt-8 text-center font-sans-brand text-2xl leading-[1.35] font-normal tracking-normal text-white md:max-w-205 md:text-2xl md:leading-7">
            <span className="lg:hidden">
              <span className="block">We welcome conversations</span>
              <span className="block">with partners who share our</span>
              <span className="block">conviction in</span>
              <strong className="block text-2xl leading-[1.35] font-semibold">
                India&rsquo;s mid-market
                <br />
                opportunity and the power
                <br />
                of climate-aligned value
                <br />
                creation.
              </strong>
            </span>
            <span className="hidden lg:inline">
              We welcome conversations with partners
              <br />
              who share our conviction in
              <br />
              <strong className="font-medium">
                India&rsquo;s mid-market opportunity and the power of
                <br />
                climate-aligned value creation.
              </strong>
            </span>
          </p>
          </Reveal>
          <Reveal delay={280}>
          <Link
            href="mailto:info@oneplanetpartners.com"
            className="group mt-20 inline-flex max-w-full transition-opacity hover:opacity-80 md:mt-15"
          >
            <Image
              width={646}
              height={74}
              alt="info@oneplanetpartners.com"
              src="/images/svg/info.svg"
              className="h-auto w-96 max-w-full transition-transform duration-300 ease-out group-hover:scale-150 group-focus-visible:scale-150 md:w-auto"
            />
          </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
