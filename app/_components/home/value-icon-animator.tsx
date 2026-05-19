"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type ValueIconAnimatorProps = ComponentPropsWithoutRef<"div">;

export function ValueIconAnimator({ children, className, ...props }: ValueIconAnimatorProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) {
      return;
    }

    const icons = Array.from(grid.querySelectorAll<HTMLElement>("[data-value-icon]"));
    if (!icons.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(icons, {
      autoAlpha: prefersReducedMotion ? 1 : 0,
      clipPath: prefersReducedMotion ? "none" : "circle(0% at 50% 50%)",
      scale: prefersReducedMotion ? 1 : 0.72,
      transformOrigin: "50% 50%",
    });

    if (prefersReducedMotion) {
      return;
    }

    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        gsap.set(icons, { clearProps: "clipPath,transform,opacity,visibility" });
      },
    });

    timeline.to(icons, {
      autoAlpha: 1,
      clipPath: "circle(75% at 50% 50%)",
      duration: 0.82,
      ease: "power2.out",
      scale: 1,
      stagger: 0.08,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        timeline.restart();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );

    observer.observe(grid);

    return () => {
      observer.disconnect();
      timeline.kill();
      gsap.killTweensOf(icons);
    };
  }, []);

  return (
    <div ref={gridRef} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
