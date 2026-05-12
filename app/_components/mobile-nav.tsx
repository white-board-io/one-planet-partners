"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/app/_components/site-header";
import { useActiveNavLink } from "@/app/_components/use-active-nav-link";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  basePath?: string;
  links: NavLink[];
};

export function MobileNav({ basePath = "", links }: MobileNavProps) {
  const activeHref = useActiveNavLink(links);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={navRef} className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
        className="flex size-11 items-center justify-center bg-white text-brand-black transition-colors hover:border-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-primary-navigation"
          aria-label="Primary navigation"
          className="absolute top-full right-6 left-6 mt-2 border border-black/10 bg-white p-2 font-sans shadow-lg sm:right-10 sm:left-10"
        >
          {links.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <Link
                key={link.href}
                href={`${basePath}${link.href}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm leading-none font-normal text-brand-black transition-colors hover:bg-black/5 focus-visible:bg-black/5 focus-visible:outline-none",
                  isActive ? "font-bold" : null,
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
