import Image from "next/image";
import { Container } from "@/app/_components/container";
import type { Person } from "../../_components/data";

export function PersonDetail({ person }: { person: Person }) {
  const hasSocial = person.social.linkedin || person.social.twitter || person.social.website;

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-4xl">
        {/* Top two-column row: portrait left, name + designation right */}
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <div className="relative size-52 overflow-hidden rounded-full bg-neutral-200 md:size-64">
              <Image
                fill
                priority
                src={person.image}
                alt={person.name}
                className="object-cover"
                sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 311px"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-serif-brand text-5xl font-semibold text-black md:text-3xl lg:text-[2.75rem] lg:leading-tight">
              {person.name}
            </h1>
            <p className="font-sans-brand text-lg font-light text-black/60 md:text-lg">
              {person.designation}
            </p>
          </div>
        </div>

        {/* Bio text — full width below the portrait/name row */}
        <div className="mt-12 space-y-6 lg:mt-16">
          {person.bio.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif-brand text-2xl font-normal not-italic leading-8 tracking-normal text-black/80"
                  : "font-sans-brand text-base font-light leading-8 text-black/80 md:text-2xl"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Social icons — below bio, left-aligned */}
        {hasSocial && (
          <div className="mt-10 flex justify-center gap-6 lg:justify-start">
            {person.social.linkedin && (
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black/50 transition-colors hover:text-black"
              >
                <LinkedInIcon />
              </a>
            )}
            {person.social.twitter && (
              <a
                href={person.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-black/50 transition-colors hover:text-black"
              >
                <XIcon />
              </a>
            )}
            {person.social.website && (
              <a
                href={person.social.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="text-black/50 transition-colors hover:text-black"
              >
                <GlobeIcon />
              </a>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-current">
      <path d="M5.37 7.95H1.58v12.08h3.79V7.95ZM3.48 2a2.17 2.17 0 1 0 0 4.34 2.17 2.17 0 0 0 0-4.34Zm6.1 5.95H5.95v12.08h3.78v-6.32c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38v6.21h3.78v-7c0-3.43-.74-6.07-4.74-6.07a4.16 4.16 0 0 0-3.75 2.06h-.05l.18-1.07Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-current">
      <path d="m14.23 10.16 8.03-9.33h-1.9L13.39 8.93 7.82.83H1.4l8.43 12.26L1.4 22.88h1.9l7.37-8.57 5.89 8.57h6.42l-8.75-12.72Zm-2.61 3.03-.85-1.22-6.8-9.7h2.94l5.48 7.83.85 1.22 7.13 10.18h-2.94l-5.81-8.31Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
