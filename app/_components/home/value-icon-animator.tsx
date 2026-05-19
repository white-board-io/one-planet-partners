"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

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

    const setInitialIconState = () => {
      gsap.set(icons, {
        autoAlpha: 0,
        clipPath: "circle(0% at 50% 50%)",
        scale: 0.72,
        transformOrigin: "50% 50%",
      });
    };

    const showIcons = () => {
      gsap.set(icons, {
        autoAlpha: 1,
        clipPath: "none",
        scale: 1,
        transformOrigin: "50% 50%",
      });
    };

    if (prefersReducedMotion) {
      showIcons();
      return;
    }

    setInitialIconState();

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

    const playIcons = () => {
      setInitialIconState();
      timeline.restart();
    };

    const resetIcons = () => {
      timeline.pause(0);
      setInitialIconState();
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: grid,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: playIcons,
      onEnterBack: playIcons,
      onLeave: resetIcons,
      onLeaveBack: resetIcons,
    });

    return () => {
      scrollTrigger.kill();
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
