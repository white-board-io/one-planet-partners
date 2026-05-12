"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Differentiator = {
  title: string;
  image: string;
  copy: string;
};

export function DifferentiatorMobileCards({ items }: { items: Differentiator[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-9 px-4 md:hidden">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const contentId = `differentiator-mobile-copy-${index}`;

        return (
          <article key={item.title} className="overflow-hidden rounded-md bg-[#050505]">
            <div className="relative aspect-[606/648] overflow-hidden rounded-md">
              <Image
                fill
                sizes="calc(100vw - 2rem)"
                src={item.image}
                alt=""
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/88 via-black/38 to-transparent" />
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                aria-label={`${isOpen ? "Hide" : "Show"} ${item.title}`}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="absolute top-3 right-3 grid size-8 place-items-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 rotate-45 border-white transition-transform duration-200",
                    isOpen
                      ? "translate-y-0.5 border-t-2 border-l-2"
                      : "-translate-y-0.5 border-r-2 border-b-2",
                  )}
                />
              </button>
            </div>
            <div
              id={contentId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="bg-white px-8 pt-10 pb-16 text-black">
                  <h4 className="font-serif-brand text-5xl leading-none font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-9 font-sans-brand text-lg leading-6 font-light tracking-normal text-black">
                    {item.copy}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
