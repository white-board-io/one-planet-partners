"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  /** Delay in ms before the reveal transition starts. Useful for light staggering. */
  delay?: number;
};

/**
 * Fades and slides its children up once when they first scroll into view.
 * Once revealed it stays revealed — scrolling back past it never replays the
 * animation. Respects the user's reduced-motion preference.
 */
export function Reveal({ children, className, delay = 0, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[1100ms] ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        className,
      )}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
