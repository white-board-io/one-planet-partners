import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/app/_components/reveal";
import { cn } from "@/lib/utils";

// Vertical rhythm comes from block margins, which collapse between siblings
// so a quote's larger bottom gap wins over the next block's top gap.

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-7 first:mt-0 md:mt-8 lg:mt-9">
      <p>{children}</p>
    </Reveal>
  );
}

export function Attribution({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-12 md:mt-14 lg:mt-15 lg:max-w-[36em]">
      <p>{children}</p>
    </Reveal>
  );
}

export function PullQuote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className="mt-10 mb-14 pl-12 md:mt-14 md:mb-16 md:pl-28 lg:mt-15 lg:mb-19 lg:pl-40.5">
      <blockquote>
        <p className={cn("relative italic lg:max-w-229", className)}>
          <span
            aria-hidden="true"
            className="absolute top-[-0.1em] right-full mr-[0.26em] font-serif-brand text-[3.68em] leading-none not-italic"
          >
            &ldquo;
          </span>
          {children}
          <span
            aria-hidden="true"
            className="relative top-[0.54em] ml-[0.17em] align-top font-serif-brand text-[3.68em] leading-0 not-italic"
          >
            &rdquo;
          </span>
        </p>
      </blockquote>
    </Reveal>
  );
}

export function ArticleLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="article-link transition-opacity hover:opacity-60">
      {children}
    </Link>
  );
}

export function AboutBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className="mt-14 bg-[#f5f5f5] px-6 py-8 md:mt-16 md:px-10 md:py-10 lg:mt-17 lg:px-14 lg:pt-11 lg:pb-13">
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-7 md:mt-8 lg:mt-9">{children}</div>
    </Reveal>
  );
}

export function MediaContact({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  return (
    <Reveal className="mt-14 md:mt-16 lg:mt-18">
      <h2 className="font-semibold">Media Contact</h2>
      <p>{name}</p>
      <p>
        <a href={`mailto:${email}`} className="transition-opacity hover:opacity-60">
          {email}
        </a>
      </p>
      <p>
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="transition-opacity hover:opacity-60"
        >
          {phone}
        </a>
      </p>
    </Reveal>
  );
}
