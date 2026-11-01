import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammePage } from "@/components/programme-page";
import { getProgramme, programmes } from "@/content/programmes";

export function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) return { title: "Programme" };
  return { title: programme.title, description: programme.summary };
}

export default async function ProgrammeRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();
  return <ProgrammePage programme={programme} />;
}
