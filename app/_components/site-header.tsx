import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";
import { MobileNav } from "@/app/_components/mobile-nav";
import { PrimaryNav } from "@/app/_components/primary-nav";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "The Opportunity", href: "#opportunity" },
  { label: "Our Focus", href: "#focus" },
  { label: "Leadership", href: "#leadership" },
  { label: "Our Edge", href: "#edge" },
  { label: "Value Creation", href: "#value-creation" },
  { label: "Contact", href: "#contact" },
];

type SiteHeaderProps = {
  basePath?: string;
};

export function SiteHeader({ basePath = "" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white">
      <Container className="relative flex items-center justify-between py-5">
        <Link href="/" aria-label="One Planet Partners home" className="shrink-0">
          <Image
            priority
            width={205}
            height={65}
            alt="One Planet Partners"
            src="/images/svg/header-logo.svg"
            className="h-auto w-37.5"
          />
        </Link>
        <PrimaryNav basePath={basePath} links={navLinks} />
        <MobileNav basePath={basePath} links={navLinks} />
      </Container>
    </header>
  );
}
