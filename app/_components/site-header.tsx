import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";

export function SiteHeader() {
  return (
    <header className="border-b border-black/8 bg-white">
      <Container className="flex items-center justify-between py-4">
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
      </Container>
    </header>
  );
}
