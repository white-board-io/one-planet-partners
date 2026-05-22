import Image from "next/image";
import { Container } from "@/app/_components/container";
import { Reveal } from "@/app/_components/reveal";

export function LeadershipHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5.5rem)] items-end bg-black">
      <div className="absolute inset-x-0 top-0 h-[50svh] sm:inset-0 sm:h-auto">
        <Image
          fill
          alt=""
          priority
          src="/images/leadership-hero.webp"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"
      />
      <Container className="relative pb-24 text-center sm:pb-16 lg:pb-28">
        <Reveal>
          <h1 className="font-serif-brand text-3xl font-normal text-white md:text-7xl lg:text-8xl">
            A Proven Team
            <br />
            <em className="font-medium italic">Building Together Again</em>
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}
