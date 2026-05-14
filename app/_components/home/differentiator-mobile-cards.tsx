"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { cn } from "@/lib/utils";

type Differentiator = {
  title: string;
  image: string;
  copy: string;
};

const verticalSwipeThreshold = 48;
const verticalSwipeAxisBias = 1.2;
const fastScrollDistanceThreshold = 64;
const fastScrollVelocityThreshold = 0.45;

type SwipeStart = {
  index: number;
  x: number;
  y: number;
  hasHandled: boolean;
};

export function DifferentiatorMobileCards({ items }: { items: Differentiator[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastScrollSampleRef = useRef({ timestamp: 0, y: 0 });
  const pointerSwipeStartRef = useRef<(SwipeStart & { pointerId: number }) | null>(null);
  const touchSwipeStartRef = useRef<SwipeStart | null>(null);
  const suppressClickUntilRef = useRef(0);

  const getMostVisibleImageIndex = useCallback(() => {
    const viewportHeight = window.innerHeight;
    let bestIndex: number | null = null;
    let bestVisibleArea = 0;

    imageButtonRefs.current.forEach((element, index) => {
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

      if (visibleHeight <= 0) {
        return;
      }

      const imageCenter = rect.top + rect.height / 2;
      const isInRevealBand =
        imageCenter >= viewportHeight * 0.18 && imageCenter <= viewportHeight * 0.82;

      if (isInRevealBand && visibleHeight > bestVisibleArea) {
        bestIndex = index;
        bestVisibleArea = visibleHeight;
      }
    });

    return bestIndex;
  }, []);

  useEffect(() => {
    imageButtonRefs.current.length = items.length;
  }, [items.length]);

  useEffect(() => {
    lastScrollSampleRef.current = {
      timestamp: window.performance.now(),
      y: window.scrollY,
    };

    const handlePageScroll = () => {
      const currentY = window.scrollY;
      const currentTimestamp = window.performance.now();
      const previousSample = lastScrollSampleRef.current;
      const deltaY = currentY - previousSample.y;
      const deltaTime = Math.max(currentTimestamp - previousSample.timestamp, 1);

      lastScrollSampleRef.current = {
        timestamp: currentTimestamp,
        y: currentY,
      };

      if (!window.matchMedia("(max-width: 1279px)").matches) {
        return;
      }

      const isFastUpwardScroll =
        deltaY > 0 &&
        (deltaY >= fastScrollDistanceThreshold ||
          deltaY / deltaTime >= fastScrollVelocityThreshold);

      if (!isFastUpwardScroll) {
        return;
      }

      const visibleIndex = getMostVisibleImageIndex();

      if (visibleIndex !== null) {
        setActiveIndex(visibleIndex);
      }
    };

    window.addEventListener("scroll", handlePageScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, [getMostVisibleImageIndex]);

  const updateFromVerticalSwipe = (
    swipeStart: SwipeStart | null,
    index: number,
    x: number,
    y: number,
  ) => {
    if (!swipeStart || swipeStart.hasHandled || swipeStart.index !== index) {
      return;
    }

    const deltaX = x - swipeStart.x;
    const deltaY = y - swipeStart.y;
    const isVerticalSwipe =
      Math.abs(deltaY) >= verticalSwipeThreshold &&
      Math.abs(deltaY) > Math.abs(deltaX) * verticalSwipeAxisBias;

    if (!isVerticalSwipe) {
      return;
    }

    swipeStart.hasHandled = true;
    suppressClickUntilRef.current = window.performance.now() + 700;
    setActiveIndex(deltaY < 0 ? index : null);
  };

  const handleCardToggle = (index: number) => {
    if (suppressClickUntilRef.current > window.performance.now()) {
      suppressClickUntilRef.current = 0;
      return;
    }

    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  const handleImagePointerDown = (event: ReactPointerEvent<HTMLButtonElement>, index: number) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    pointerSwipeStartRef.current = {
      pointerId: event.pointerId,
      index,
      x: event.clientX,
      y: event.clientY,
      hasHandled: false,
    };
  };

  const handleImageSwipe = (event: ReactPointerEvent<HTMLButtonElement>, index: number) => {
    const swipeStart = pointerSwipeStartRef.current;

    if (!swipeStart || swipeStart.pointerId !== event.pointerId) {
      return;
    }

    updateFromVerticalSwipe(swipeStart, index, event.clientX, event.clientY);
  };

  const handleImagePointerUp = (event: ReactPointerEvent<HTMLButtonElement>, index: number) => {
    handleImageSwipe(event, index);
    pointerSwipeStartRef.current = null;
  };

  const handleImagePointerCancel = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (pointerSwipeStartRef.current?.pointerId === event.pointerId) {
      pointerSwipeStartRef.current = null;
    }
  };

  const handleImageTouchStart = (event: ReactTouchEvent<HTMLButtonElement>, index: number) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    touchSwipeStartRef.current = {
      index,
      x: touch.clientX,
      y: touch.clientY,
      hasHandled: false,
    };
  };

  const handleImageTouchMove = (event: ReactTouchEvent<HTMLButtonElement>, index: number) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    updateFromVerticalSwipe(touchSwipeStartRef.current, index, touch.clientX, touch.clientY);
  };

  const handleImageTouchEnd = (event: ReactTouchEvent<HTMLButtonElement>, index: number) => {
    const touch = event.changedTouches[0];

    if (touch) {
      updateFromVerticalSwipe(touchSwipeStartRef.current, index, touch.clientX, touch.clientY);
    }

    touchSwipeStartRef.current = null;
  };

  const handleImageWheel = (event: ReactWheelEvent<HTMLButtonElement>, index: number) => {
    if (Math.abs(event.deltaY) < verticalSwipeThreshold) {
      return;
    }

    setActiveIndex(event.deltaY > 0 ? index : null);
  };

  return (
    <div className="grid gap-9 px-4 md:grid-cols-2 md:gap-7 md:px-8 xl:hidden">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const contentId = `differentiator-mobile-copy-${index}`;

        return (
          <article key={item.title} className="overflow-hidden rounded-md bg-[#050505]">
            <button
              type="button"
              ref={(element) => {
                imageButtonRefs.current[index] = element;
              }}
              aria-controls={contentId}
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Hide" : "Show"} details for ${item.title}`}
              className="relative block aspect-[606/648] w-full touch-pan-y overflow-hidden rounded-md border-0 bg-transparent p-0 text-left"
              onClick={() => handleCardToggle(index)}
              onPointerCancel={handleImagePointerCancel}
              onPointerDown={(event) => handleImagePointerDown(event, index)}
              onPointerMove={(event) => handleImageSwipe(event, index)}
              onPointerUp={(event) => handleImagePointerUp(event, index)}
              onTouchEnd={(event) => handleImageTouchEnd(event, index)}
              onTouchMove={(event) => handleImageTouchMove(event, index)}
              onTouchStart={(event) => handleImageTouchStart(event, index)}
              onWheel={(event) => handleImageWheel(event, index)}
            >
              <Image
                fill
                sizes="calc(100vw - 2rem)"
                src={item.image}
                alt=""
                loading="eager"
                className="select-none object-cover"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/88 via-black/38 to-transparent" />
            </button>
            <div
              id={contentId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="bg-white px-8 py-12 text-black md:px-6 md:py-8">
                  <p className="font-sans-brand text-xl leading-6 font-light tracking-normal text-black md:text-lg">
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
