"use client";

import Link from "next/link";

import type { NavLink } from "@/app/_components/site-header";
import { useActiveNavLink } from "@/app/_components/use-active-nav-link";

type PrimaryNavProps = {
  basePath?: string;
  links: NavLink[];
};

export function PrimaryNav({ basePath = "", links }: PrimaryNavProps) {
  const activeHref = useActiveNavLink(links);

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-6 font-sans-brand lg:flex"
    >
      {links.map((link) => {
        const isActive = activeHref === link.href;

        return (
          <Link
            key={link.href}
            href={`${basePath}${link.href}`}
            aria-current={isActive ? "location" : undefined}
            className={`text-right text-body-sm tracking-normal text-brand-black not-italic transition-colors hover:text-black/60 ${
              isActive ? "font-bold" : "font-normal"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
