"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Differentiator = {
  title: string;
  image: string;
  copy: string;
};

export function DifferentiatorDesktopCards({ items }: { items: Differentiator[] }) {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const innerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const copyRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const inners = innerRefs.current.filter(Boolean);
    const titles = titleRefs.current.filter(Boolean);
    const copies = copyRefs.current.filter(Boolean);

    if (mediaQuery.matches) {
      gsap.set(inners, { rotationY: 0 });
      gsap.set([...titles, ...copies], { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    gsap.set(inners, { rotationY: 0 });
    gsap.set(titles, { opacity: 0 });
    gsap.set(copies, { opacity: 0, y: 28 });

    return () => {
      gsap.killTweensOf([...inners, ...titles, ...copies]);
    };
  }, []);

  const getTitleStartY = (index: number) => {
    const card = cardRefs.current[index];
    const title = titleRefs.current[index];

    if (!card || !title) {
      return 180;
    }

    const cardRect = card.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    return Math.max(cardRect.height - titleRect.height - 80, 120);
  };

  const revealCard = (index: number) => {
    const inner = innerRefs.current[index];
    const title = titleRefs.current[index];
    const copy = copyRefs.current[index];

    if (!inner || !title || !copy) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(inner, { rotationY: 180 });
      gsap.set([title, copy], { opacity: 1, y: 0 });
      return;
    }

    gsap.killTweensOf([inner, title, copy]);
    gsap.to(inner, { rotationY: 180, duration: 0.72, ease: "power2.inOut" });
    gsap.fromTo(
      title,
      { opacity: 0, y: getTitleStartY(index) },
      { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.12 },
    );
    gsap.fromTo(
      copy,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.36 },
    );
  };

  const resetCard = (index: number) => {
    const inner = innerRefs.current[index];
    const title = titleRefs.current[index];
    const copy = copyRefs.current[index];

    if (!inner || !title || !copy) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(inner, { rotationY: 0 });
      return;
    }

    gsap.killTweensOf([inner, title, copy]);
    gsap.to(inner, { rotationY: 0, duration: 0.62, ease: "power2.inOut" });
    gsap.to(title, { opacity: 0, y: getTitleStartY(index), duration: 0.28, ease: "power2.in" });
    gsap.to(copy, { opacity: 0, y: 28, duration: 0.2, ease: "power2.in" });
  };

  return (
    <div className="hidden gap-8 px-6 sm:px-10 md:grid md:grid-cols-3 md:gap-9 md:px-0">
      {items.map((item, index) => (
        <article
          key={item.title}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
          aria-label={item.title}
          tabIndex={0}
          onMouseEnter={() => revealCard(index)}
          onMouseLeave={() => resetCard(index)}
          onFocus={() => revealCard(index)}
          onBlur={() => resetCard(index)}
          className="group relative aspect-[606/648] bg-white/5 [perspective:1200px]"
        >
          <div
            ref={(element) => {
              innerRefs.current[index] = element;
            }}
            className="relative h-full w-full [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-md [backface-visibility:hidden]">
              <Image
                fill
                sizes="(max-width: 768px) calc(100vw - 3rem), 33vw"
                src={item.image}
                alt=""
                loading="eager"
                className="object-cover"
              />
              <h3 className="sr-only">{item.title}</h3>
            </div>
            <div className="absolute inset-0 flex flex-col justify-start overflow-hidden rounded-md bg-[#101010] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-10">
              <h3
                ref={(element) => {
                  titleRefs.current[index] = element;
                }}
                className="max-w-96 font-serif-brand text-[2.5rem] leading-none font-light will-change-transform lg:text-[3rem]"
              >
                {item.title}
              </h3>
              <p
                ref={(element) => {
                  copyRefs.current[index] = element;
                }}
                className="mt-7 max-w-[28rem] font-sans-brand text-[1.125rem] leading-[1.55] font-light text-white/78 will-change-transform lg:text-[1.375rem] lg:leading-[1.55]"
              >
                {item.copy}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
