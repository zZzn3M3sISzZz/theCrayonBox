import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { programmes, programmesIntro } from "@/content/programmes";

export const metadata: Metadata = {
  title: "Programmes",
  description: programmesIntro.body,
};

export default function ProgrammesPage() {
  return (
    <>
      <main className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#a8d3ff] to-[#fff4df] px-5 pb-28 pt-32 md:pt-[140px]">
        <Reveal when="load" className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-[35px] text-center">
          <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">{programmesIntro.kicker}</p>
          <h1 className="text-[clamp(2.75rem,7vw,5rem)] leading-none tracking-[-0.04em]">
            <span className="block font-serif font-normal md:whitespace-nowrap">{programmesIntro.lead}</span>
            <span className="mt-1 block font-display font-normal tracking-[-0.05em] md:whitespace-nowrap">{programmesIntro.accent}</span>
          </h1>
          <p className="max-w-[820px] font-serif text-xl leading-snug tracking-[-0.04em]">{programmesIntro.body}</p>
        </Reveal>
        <div className="mx-auto flex w-full max-w-[820px] flex-col gap-4">
          {programmes.map((programme, index) => (
            <Reveal
              as="article"
              key={programme.slug}
              delay={(index % 4) as 0 | 1 | 2 | 3}
              className={
                programme.dashed
                  ? "flex min-h-[194px] flex-col gap-6 rounded-2xl border border-dashed border-black p-8 md:flex-row md:items-start md:gap-6 md:p-10"
                  : "flex flex-col gap-6 rounded-2xl bg-white p-8 md:flex-row md:items-start md:gap-6 md:p-10"
              }
            >
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{programme.cardTitle}</h2>
                <p className="mt-2 flex flex-wrap gap-2 font-mono text-sm leading-none text-[#6c6c6c]">
                  <span>{programme.age}</span>
                  <span aria-hidden="true">·</span>
                  <span>{programme.schedule}</span>
                </p>
                <p className="mt-6 font-serif text-xl leading-snug tracking-[-0.04em]">{programme.blurb}</p>
              </div>
              <Link
                href={`/programmes/${programme.slug}`}
                className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-black p-3 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
              >
                {programme.action}
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <section className="flex flex-col items-center gap-8 bg-white px-5 py-24 text-center">
        <h2 className="max-w-[752px] font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
          Come see childhood, thoughtfully nurtured.
        </h2>
        <p className="max-w-[644px] font-serif text-xl leading-snug tracking-[-0.04em]">
          Visit The Crayon Box, meet our educators and discover a learning environment where your child can feel secure, seen and excited to grow.
        </p>
        <Link
          href="/contact"
          className="inline-flex cursor-pointer items-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
        >
          <span className="size-1 bg-white" aria-hidden="true" />
          Book a Visit
        </Link>
      </section>
    </>
  );
}
