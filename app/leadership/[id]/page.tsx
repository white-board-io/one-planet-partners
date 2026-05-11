import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/app/_components/site-header";
import { FooterSection } from "@/app/_components/home/footer-section";
import { people, getPersonById } from "../_components/data";
import { PersonDetail } from "./_components/person-detail";

export function generateStaticParams() {
  return people.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const person = getPersonById(id);
  if (!person) return {};
  return {
    title: `${person.name} | One Planet Partners`,
    description: person.bio[0],
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = getPersonById(id);

  if (!person) redirect("/leadership");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader basePath="/" />
      <PersonDetail person={person} />
      <FooterSection />
    </main>
  );
}
