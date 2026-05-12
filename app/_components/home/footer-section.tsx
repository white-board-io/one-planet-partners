import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    handle: "@oneplanetpartners",
    icon: <LinkedInIcon />,
  },
  {
    href: "#",
    label: "X",
    handle: "@oneplanetpartners",
    icon: <XIcon />,
  },
  {
    href: "#",
    label: "Instagram",
    handle: "@oneplanetpartners",
    icon: <InstagramIcon />,
  },
];

export function FooterSection() {
  return (
    <footer className="border-t border-white/25 bg-black text-white">
      <div className="border-b border-white/20">
        <Container >
          <div className="grid pt-25 pb-21 md:grid-cols-[307px_1fr_309px] md:items-start md:gap-0 md:pt-25 md:pb-25">
            <div className="order-2 mt-11 w-full border-white/30 md:order-1 md:mt-0 md:max-w-77 md:border-y">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid h-17 grid-cols-[1fr_auto] items-center border-b border-white/30 font-sans-brand text-base leading-none text-white transition-colors hover:text-white/70 md:h-15 md:grid-cols-[122px_1fr] md:text-xl md:last:border-b-0"
                >
                  <span className="flex h-5 w-5 items-center justify-start">{item.icon}</span>
                  <span>{item.handle}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/"
              aria-label="One Planet Partners home"
              className="order-1 justify-self-center md:order-2 md:mt-2"
            >
              <Image
                width={586}
                height={543}
                alt="One Planet Partners"
                src="/images/svg/logo1.svg"
                className="h-auto w-31 md:w-44"
              />
            </Link>

            <address className="order-3 w-full border-white/30 pt-7 not-italic md:mt-1 md:border-y md:py-7">
              <div className="flex items-start gap-5">
                <MapPinIcon />
                <div>
                  <h2 className="font-serif-brand text-base leading-tight text-white md:text-2xl">
                    Our Office Address
                  </h2>
                  <p className="mt-5 max-w-3xs font-sans-brand text-sm leading-snug text-white md:text-base md:leading-6">
                    M4, The Quorum, Level 8, Tower 2,
                    <br />
                    One World Centre, Lower Parel,
                    <br />
                    Mumbai 400013, India.
                  </p>
                </div>
              </div>
            </address>
          </div>
        </Container>
      </div>

      <Container className="max-w-307">
        <p className="py-12 font-sans-brand text-xs leading-4 text-white md:py-8 md:text-sm">
          One Planet Partners Copyright &copy; 2026. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M5.37 7.95H1.58v12.08h3.79V7.95ZM3.48 2a2.17 2.17 0 1 0 0 4.34 2.17 2.17 0 0 0 0-4.34Zm6.1 5.95H5.95v12.08h3.78v-6.32c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38v6.21h3.78v-7c0-3.43-.74-6.07-4.74-6.07a4.16 4.16 0 0 0-3.75 2.06h-.05l.18-1.07Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="m14.23 10.16 8.03-9.33h-1.9L13.39 8.93 7.82.83H1.4l8.43 12.26L1.4 22.88h1.9l7.37-8.57 5.89 8.57h6.42l-8.75-12.72Zm-2.61 3.03-.85-1.22-6.8-9.7h2.94l5.48 7.83.85 1.22 7.13 10.18h-2.94l-5.81-8.31Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 fill-current text-white"
    >
      <path d="M12 2.5a5.9 5.9 0 0 0-5.9 5.9c0 4.42 5.9 10.1 5.9 10.1s5.9-5.68 5.9-10.1A5.9 5.9 0 0 0 12 2.5Zm0 8.3a2.35 2.35 0 1 1 0-4.7 2.35 2.35 0 0 1 0 4.7Z" />
      <path d="M8.35 20.25h7.3v1.25h-7.3v-1.25Z" />
    </svg>
  );
}
