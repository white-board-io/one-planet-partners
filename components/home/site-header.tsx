import Image from "next/image";
import Link from "next/link";

import { navigationItems } from "@/components/home/content";

export function SiteHeader() {
  return (
    <header className="border-b border-black/8 bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 py-4 sm:px-10 lg:px-[4.5rem]">
        <Link href="/" aria-label="One Planet Partners home" className="shrink-0">
          <Image
            src="/images/svg/header-logo.svg"
            alt="One Planet Partners"
            width={205}
            height={65}
            priority
            className="h-auto w-[150px] sm:w-[180px] lg:w-[205px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[13px] font-medium tracking-[-0.01em] text-[#252525] lg:gap-10 lg:text-[14px]">
            {navigationItems.map((item) => (
              <li key={item}>
                <span className="cursor-default transition-colors hover:text-[#6d604f]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* <nav aria-label="Mobile primary" className="border-t border-black/8 px-4 py-3 md:hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-medium tracking-[0.02em] text-[#252525]">
          {navigationItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}
