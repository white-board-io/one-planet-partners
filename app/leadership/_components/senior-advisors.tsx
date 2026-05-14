import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/app/_components/container";
import { advisors } from "./data";
import { splitPersonName } from "./split-person-name";

function AdvisorCard({ id, name, image }: { id: string; name: string; image: string }) {
  const { line1, line2 } = splitPersonName(name);
  return (
    <Link
      href={`/leadership/${id}`}
      className="group flex flex-col items-center rounded-lg px-4 py-8 transition-colors hover:bg-white lg:px-6"
    >
      <div className="relative size-36 overflow-hidden rounded-full bg-neutral-200 sm:size-44 lg:size-[250px]">
        <Image
          fill
          alt={name}
          className="object-cover"
          src={image}
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 250px"
        />
      </div>
      <p className="mt-6 text-center font-serif-brand text-lg font-semibold leading-snug sm:leading-normal lg:text-2xl">
        <span className="block sm:inline">{line1}</span>
        {line2 ? (
          <>
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">{line2}</span>
          </>
        ) : null}
      </p>
    </Link>
  );
}

export function SeniorAdvisors() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
      <h2 className="text-center font-serif-brand text-4xl lg:text-7xl font-normal text-black">
          Senior Advisors
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6 lg:gap-6">
          {advisors.map((advisor, i) => (
            <div
              key={advisor.id}
              className={cn("col-span-1 md:col-span-2", i === 3 && "md:col-start-2")}
            >
              <AdvisorCard id={advisor.id} name={advisor.name} image={advisor.image} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
