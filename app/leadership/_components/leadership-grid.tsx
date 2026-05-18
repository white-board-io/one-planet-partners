import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";
import { leaders } from "./data";
import { splitDesignation } from "./split-designation";
import { splitPersonName } from "./split-person-name";

function LeaderCard({
  id,
  name,
  designation,
  image,
}: {
  id: string;
  name: string;
  designation: string;
  image: string;
}) {
  const { line1, line2 } = splitPersonName(name);
  const { line1: designationLine1, line2: designationLine2 } =
    splitDesignation(designation);

  return (
    <Link
      href={`/leadership/${id}`}
      className="group flex flex-col items-center rounded-lg px-4 py-8 transition-colors hover:bg-neutral-100 lg:px-6"
    >
      <div className="relative size-36 overflow-hidden rounded-full bg-neutral-200 sm:size-44 lg:size-[250px]">
        <Image
          fill
          src={image}
          alt={name}
          className="object-cover"
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 250px"
        />
      </div>
      <div className="mt-6 text-center">
        <p className="font-serif-brand text-lg font-semibold leading-snug sm:leading-normal lg:text-2xl">
          <span className="block sm:inline">{line1}</span>
          {line2 ? (
            <>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">{line2}</span>
            </>
          ) : null}
        </p>
        <p className="mt-2 font-sans-brand text-sm font-normal text-black/70 lg:text-base">
          <span className="block sm:inline">{designationLine1}</span>
          {designationLine2 ? (
            <>
              <span className="hidden sm:inline"> </span>
              <span className="block sm:inline">{designationLine2}</span>
            </>
          ) : null}
        </p>
      </div>
    </Link>
  );
}

export function LeadershipGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif-brand text-4xl lg:text-7xl font-normal text-black">
            Leadership
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {leaders.map((leader, index) => (
            <Reveal key={leader.id} delay={(index % 4) * 110}>
              <LeaderCard {...leader} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
