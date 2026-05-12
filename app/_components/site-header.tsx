import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";
import { MobileNav } from "@/app/_components/mobile-nav";

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

export function SiteHeader() {
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
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 font-sans-brand lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-right text-body-sm font-normal tracking-normal text-brand-black not-italic transition-colors hover:text-black/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}
