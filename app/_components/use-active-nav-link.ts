"use client";

import { useEffect, useMemo, useState } from "react";

import type { NavLink } from "@/app/_components/site-header";

export function useActiveNavLink(links: NavLink[]) {
  const sectionIds = useMemo(
    () =>
      links
        .map((link) => link.href)
        .filter((href) => href.startsWith("#"))
        .map((href) => href.slice(1)),
    [links],
  );
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    let animationFrame = 0;

    function updateActiveLink() {
      cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        const sections = sectionIds
          .map((id) => document.getElementById(id))
          .filter((section): section is HTMLElement => Boolean(section));

        if (sections.length === 0) {
          setActiveHref(window.location.pathname.startsWith("/leadership") ? "#leadership" : null);
          return;
        }

        const activationLine = window.innerHeight * 0.35;
        const activeSection = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activationLine && rect.bottom > activationLine;
        });

        if (activeSection) {
          setActiveHref(`#${activeSection.id}`);
          return;
        }

        setActiveHref(window.location.pathname.startsWith("/leadership") ? "#leadership" : null);
      });
    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, [sectionIds]);

  return activeHref;
}
