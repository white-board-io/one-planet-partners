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
          <div className="grid pt-25 pb-21 md:grid-cols-[340px_1fr_309px] md:items-start md:gap-0 md:pt-25 md:pb-25">
            <div className="order-2 mt-11 w-full max-w-full border-white/50 md:order-1 md:mt-0 md:border-y">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid h-17 grid-cols-[1fr_auto] items-center border-b border-white/50 font-sans-brand text-base leading-none text-white transition-colors hover:text-white/70 md:h-15 md:grid-cols-[122px_1fr] md:text-5xl md:last:border-b-0"
                >
                  <span className="flex h-6 w-6 items-center justify-start md:h-7 md:w-7">{item.icon}</span>
                  <span>{item.handle}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/"
              aria-label="One Planet Partners home"
              className="order-1 justify-self-center md:order-2"
            >
              <Image
                width={366}
                height={368}
                alt="One Planet Partners"
                src="/images/svg/logo1.svg"
                className="h-auto w-36 md:w-40  xl:w-56"
              />
            </Link>

            <address className="order-3 w-full border-white/30 pt-7 not-italic md:mt-1 md:border-y md:py-7">
              <div className="flex items-start gap-5">
                <MapPinIcon />
                <div>
                  <h2 className="font-serif-brand text-base leading-tight text-white md:text-3xl">
                    Our Office Address
                  </h2>
                  <p className="mt-5 font-sans-brand text-lg leading-snug text-white md:text-base md:text-3xl md:leading-6">
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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current md:h-7 md:w-7">
      <path d="M5.37 7.95H1.58v12.08h3.79V7.95ZM3.48 2a2.17 2.17 0 1 0 0 4.34 2.17 2.17 0 0 0 0-4.34Zm6.1 5.95H5.95v12.08h3.78v-6.32c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38v6.21h3.78v-7c0-3.43-.74-6.07-4.74-6.07a4.16 4.16 0 0 0-3.75 2.06h-.05l.18-1.07Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current md:h-7 md:w-7">
      <path d="m14.23 10.16 8.03-9.33h-1.9L13.39 8.93 7.82.83H1.4l8.43 12.26L1.4 22.88h1.9l7.37-8.57 5.89 8.57h6.42l-8.75-12.72Zm-2.61 3.03-.85-1.22-6.8-9.7h2.94l5.48 7.83.85 1.22 7.13 10.18h-2.94l-5.81-8.31Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 md:h-7 md:w-7"
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
      width="15"
      height="21"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 shrink-0 md:mt-2"
    >
    <path d="M2.86607 20.1206C1.66964 19.5344 1.07143 18.7775 1.07143 17.85C1.07143 17.43 1.20089 17.0406 1.45982 16.6819C1.71875 16.3231 2.08036 16.0125 2.54464 15.75L4.23214 17.2987C4.07143 17.3687 3.89732 17.4475 3.70982 17.535C3.52232 17.6225 3.375 17.7275 3.26786 17.85C3.5 18.13 4.03571 18.375 4.875 18.585C5.71429 18.795 6.58929 18.9 7.5 18.9C8.41071 18.9 9.29018 18.795 10.1384 18.585C10.9866 18.375 11.5268 18.13 11.7589 17.85C11.6339 17.71 11.4732 17.5963 11.2768 17.5088C11.0804 17.4213 10.8929 17.3425 10.7143 17.2725L12.375 15.6975C12.875 15.9775 13.2589 16.2969 13.5268 16.6556C13.7946 17.0144 13.9286 17.4125 13.9286 17.85C13.9286 18.7775 13.3304 19.5344 12.1339 20.1206C10.9375 20.7069 9.39286 21 7.5 21C5.60714 21 4.0625 20.7069 2.86607 20.1206ZM7.5 17.85C4.98214 16.03 3.10268 14.2625 1.86161 12.5475C0.620536 10.8325 0 9.1525 0 7.5075C0 6.265 0.227679 5.17562 0.683036 4.23937C1.13839 3.30312 1.72321 2.52 2.4375 1.89C3.15179 1.26 3.95536 0.7875 4.84821 0.4725C5.74107 0.1575 6.625 0 7.5 0C8.375 0 9.25893 0.1575 10.1518 0.4725C11.0446 0.7875 11.8482 1.26 12.5625 1.89C13.2768 2.52 13.8616 3.30312 14.317 4.23937C14.7723 5.17562 15 6.265 15 7.5075C15 9.1525 14.3795 10.8325 13.1384 12.5475C11.8973 14.2625 10.0179 16.03 7.5 17.85ZM7.5 9.45C8.08929 9.45 8.59375 9.24438 9.01339 8.83313C9.43304 8.42188 9.64286 7.9275 9.64286 7.35C9.64286 6.7725 9.43304 6.27812 9.01339 5.86687C8.59375 5.45563 8.08929 5.25 7.5 5.25C6.91071 5.25 6.40625 5.45563 5.98661 5.86687C5.56696 6.27812 5.35714 6.7725 5.35714 7.35C5.35714 7.9275 5.56696 8.42188 5.98661 8.83313C6.40625 9.24438 6.91071 9.45 7.5 9.45Z" fill="white"/>
    </svg>
    
  );
}
