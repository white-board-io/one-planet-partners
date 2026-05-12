import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-black pt-33 pb-38 text-center text-white md:min-h-150 md:pt-30 md:pb-30"
    >
      <Container>
        <div className="mx-auto max-w-230">
          <p className="mx-auto max-w-90 text-center font-serif-brand text-2xl leading-tight font-normal tracking-normal text-balance md:max-w-none md:text-6xl md:py-14 md:leading-15">
            <span className="block">Let&rsquo;s build the next generation</span>
            <span className="block">
              of responsible
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <em className="font-semibold italic">market-leaders... together.</em>
            </span>
          </p>
          <p className="mx-auto max-w-65 text-center font-sans-brand text-base leading-snug font-light tracking-normal text-white md:max-w-205 md:text-xl md:leading-7">
            We welcome conversations with partners
            <br className="hidden md:block" />
            who share our conviction in
            <br className="hidden md:block" />
            <strong className="font-medium">
              India&rsquo;s mid-market opportunity and the power of
              <br className="hidden md:block" />
              climate-aligned value creation.
            </strong>
          </p>
          <Link
            href="mailto:info@oneplanetpartners.com"
            className="group mt-26 inline-flex max-w-full transition-opacity hover:opacity-80 md:mt-15"
          >
            <Image
              width={646}
              height={74}
              alt="info@oneplanetpartners.com"
              src="/images/svg/info.svg"
              className="h-auto transition-transform duration-300 ease-out group-hover:scale-150 group-focus-visible:scale-150"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
