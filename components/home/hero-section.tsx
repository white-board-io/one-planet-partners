import Image from "next/image";

import { heroContent } from "@/components/home/content";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[calc(100vh-97px)]">
        <Image
          src="/images/svg/hero-bg.svg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 flex min-h-[620px] items-center px-6 py-16 sm:min-h-[700px] sm:px-10 sm:py-20 lg:min-h-[calc(100vh-97px)] lg:px-[4.5rem]">
          <div className="max-w-[760px]">
            <h1
              className="text-[3.55rem] leading-[0.92] tracking-[-0.045em] text-white sm:text-[4.75rem] md:text-[5.7rem] lg:text-[6.6rem]"
              style={{
                fontFamily:
                  'var(--font-display, "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif)',
                textShadow: "0 10px 32px rgba(0, 0, 0, 0.22)",
              }}
            >
              <span className="block">{heroContent.title.firstLine}</span>
              <span className="block">
                {heroContent.title.secondLinePrefix}{" "}
                <em className="italic">{heroContent.title.secondLineEmphasis}</em>
              </span>
              <span className="block italic">{heroContent.title.thirdLine}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
