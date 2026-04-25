import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/8 bg-white">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 px-6 py-4 sm:px-10 lg:px-18">
        <Link href="/" aria-label="One Planet Partners home" className="shrink-0">
          <Image
            priority
            width={205}
            height={65}
            alt="One Planet Partners"
            src="/images/svg/header-logo.svg"
            className="h-auto w-37.5 sm:w-45 lg:w-51.25"
          />
        </Link>
      </div>
    </header>
  );
}
