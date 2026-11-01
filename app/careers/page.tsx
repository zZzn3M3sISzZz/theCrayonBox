import type { Metadata } from "next";
import { CareersBoard } from "@/components/careers-board";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a team that makes room for curiosity, creativity and care at The Crayon Box in Ekkaduthangal, Chennai.",
};

export default function CareersPage() {
  return (
    <>
      <main className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#a8d3ff] to-[#fff4df] px-5 pt-32 md:pt-[140px]">
        <Reveal when="load" className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center">
          <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">Careers at The Crayon Box</p>
          <h1 className="mt-8 text-[clamp(2.75rem,7vw,5rem)] leading-none tracking-[-0.04em]">
            <span className="block font-serif font-normal">Help little minds</span>
            <span className="mt-1 block font-display font-normal">do big things.</span>
          </h1>
          <p className="mt-8 max-w-[546px] font-serif text-xl leading-snug tracking-[-0.04em]">
            Join a team that makes room for curiosity, creativity and care. At The Crayon Box, we’re looking for thoughtful people who find joy in helping children explore, express themselves and grow.
          </p>
          <a
            href="#roles"
            className="mt-8 inline-flex cursor-pointer items-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
          >
            <span className="size-1 bg-white" aria-hidden="true" />
            Explore opportunities
          </a>
        </Reveal>
        <CareersBoard />
      </main>
    </>
  );
}
