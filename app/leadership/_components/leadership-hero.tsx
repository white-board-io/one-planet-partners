import Image from "next/image";
import { Container } from "@/app/_components/container";

export function LeadershipHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end bg-black lg:min-h-[80vh]">
      <Image
        fill
        alt=""
        priority
        src="/images/leadership-hero.png"
        className="object-cover opacity-55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"
      />
      <Container className="relative pb-16 text-center lg:pb-28">
        <h1 className="font-serif-brand text-3xl font-light text-white md:text-7xl lg:text-8xl">
          A Proven Team
          <br />
          <em className="font-medium italic">Building Together Again</em>
        </h1>
      </Container>
    </section>
  );
}
