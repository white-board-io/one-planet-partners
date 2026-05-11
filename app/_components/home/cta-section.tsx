import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-black pt-[100px] pb-[120px] text-center text-white md:min-h-[600px] md:pt-[168px] md:pb-24"
    >
      <Container>
        <div className="mx-auto max-w-[920px]">
          <p className="mx-auto max-w-[360px] text-center font-serif-brand text-[1.625rem] leading-[1.22] font-normal tracking-[0] text-balance md:max-w-none md:text-[60px] md:leading-[70px]">
            <span className="block">Let&rsquo;s build the next generation</span>
            <span className="block">
              of responsible
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <em className="font-semibold italic">market-leaders... together.</em>
            </span>
          </p>
          <p className="mx-auto mt-[43px] max-w-[260px] text-center font-sans-brand text-[1.0625rem] leading-[1.34] font-light tracking-[0] text-white md:max-w-[820px] md:text-[24px] md:leading-[34px]">
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
            className="mt-[102px] inline-flex max-w-full transition-opacity hover:opacity-80 md:mt-[45px]"
          >
            <Image
              width={796}
              height={94}
              alt="info@oneplanetpartners.com"
              src="/images/svg/info.svg"
              className="h-auto w-[min(100%,796px)]"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
