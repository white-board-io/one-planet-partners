"use client";

import Image from "next/image";
import {
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

type SwipeStart = {
  index: number;
  x: number;
  y: number;
  hasHandled: boolean;
};

export function DifferentiatorMobileCards({ items }: { items: Differentiator[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pointerSwipeStartRef = useRef<(SwipeStart & { pointerId: number }) | null>(null);
  const touchSwipeStartRef = useRef<SwipeStart | null>(null);

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
    setActiveIndex(deltaY < 0 ? index : null);
  };

  const handleImagePointerDown = (event: ReactPointerEvent<HTMLDivElement>, index: number) => {
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

  const handleImageSwipe = (event: ReactPointerEvent<HTMLDivElement>, index: number) => {
    const swipeStart = pointerSwipeStartRef.current;

    if (!swipeStart || swipeStart.pointerId !== event.pointerId) {
      return;
    }

    updateFromVerticalSwipe(swipeStart, index, event.clientX, event.clientY);
  };

  const handleImagePointerUp = (event: ReactPointerEvent<HTMLDivElement>, index: number) => {
    handleImageSwipe(event, index);
    pointerSwipeStartRef.current = null;
  };

  const handleImagePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerSwipeStartRef.current?.pointerId === event.pointerId) {
      pointerSwipeStartRef.current = null;
    }
  };

  const handleImageTouchStart = (event: ReactTouchEvent<HTMLDivElement>, index: number) => {
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

  const handleImageTouchMove = (event: ReactTouchEvent<HTMLDivElement>, index: number) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    updateFromVerticalSwipe(touchSwipeStartRef.current, index, touch.clientX, touch.clientY);
  };

  const handleImageTouchEnd = (event: ReactTouchEvent<HTMLDivElement>, index: number) => {
    const touch = event.changedTouches[0];

    if (touch) {
      updateFromVerticalSwipe(touchSwipeStartRef.current, index, touch.clientX, touch.clientY);
    }

    touchSwipeStartRef.current = null;
  };

  const handleImageWheel = (event: ReactWheelEvent<HTMLDivElement>, index: number) => {
    if (Math.abs(event.deltaY) < verticalSwipeThreshold) {
      return;
    }

    setActiveIndex(event.deltaY > 0 ? index : null);
  };

  return (
    <div className="grid gap-9 px-4 md:hidden">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const contentId = `differentiator-mobile-copy-${index}`;

        return (
          <article key={item.title} className="overflow-hidden rounded-md bg-[#050505]">
            <div
              className="relative aspect-[606/648] touch-pan-y overflow-hidden rounded-md"
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
                <div className="bg-white px-8 py-12 text-black">
                  <p className="font-sans-brand text-xl leading-6 font-light tracking-normal text-black">
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
