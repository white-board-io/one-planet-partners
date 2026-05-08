import Link from "next/link";
import { Container } from "@/app/_components/container";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-black pt-[100px] pb-[120px] text-center text-white md:min-h-[600px] md:pt-[168px] md:pb-24"
    >
      <Container>
        <div className="mx-auto max-w-[720px]">
          <p className="mx-auto max-w-[360px] font-serif-brand text-[1.625rem] leading-[1.22] font-light text-balance md:max-w-none md:text-[2.625rem] md:leading-[1.18]">
            <span className="block">Let&rsquo;s build the next generation</span>
            <span className="block">
              of responsible
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <em className="font-light italic">market-leaders... together.</em>
            </span>
          </p>
          <p className="mx-auto mt-[43px] max-w-[260px] font-sans-brand text-[1.0625rem] leading-[1.34] font-light text-white/70 md:max-w-[360px] md:text-[1rem] md:leading-[1.48]">
            We welcome conversations with partners who share our conviction in{" "}
            <strong className="font-semibold text-white">
              India&rsquo;s mid-market opportunity and the power of climate-aligned value creation.
            </strong>
          </p>
          <Link
            href="mailto:info@oneplanetpartners.com"
            className="mt-[102px] inline-flex max-w-full break-all border-b border-white/70 pb-0.5 font-serif-brand text-[1.375rem] leading-none font-light text-white/82 transition hover:border-white hover:text-white sm:text-[1.9375rem] md:mt-[45px]"
          >
            info@oneplanetpartners.com
          </Link>
        </div>
      </Container>
    </section>
  );
}
