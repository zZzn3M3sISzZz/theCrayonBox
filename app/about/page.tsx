import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { VisitCta } from "@/components/visit-cta";
import { about } from "@/content/pages";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      <Reveal as="section" when="load" className="mx-auto flex max-w-[820px] flex-col items-center px-5 pb-20 pt-24 text-center md:pt-[120px]">
        <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">{about.kicker}</p>
        <h1 className="mt-8 text-[clamp(2.75rem,7vw,5rem)] leading-none tracking-[-0.04em]">
          <span className="block font-serif font-normal">Built around a belief</span>
          <span className="mt-1 block font-display font-normal">in childhood</span>
        </h1>
        <p className="mt-8 max-w-[634px] font-serif text-xl leading-snug tracking-[-0.04em]">{about.intro}</p>
      </Reveal>

      <Reveal as="section" className="grid items-center gap-10 md:grid-cols-2 md:gap-4">
        <div className="relative mx-auto aspect-square w-full max-w-[560px] md:mx-0 md:h-[624px] md:max-w-none">
          <Image
            src="/images/about-story.png"
            alt="The Crayon Box bunny sitting on the grass beside a flower"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-12 px-5 pb-16 md:py-10 md:pl-16 md:pr-20">
          <div className="max-w-[560px]">
            <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">{about.story.kicker}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-0.03em]">
              {about.story.title}
            </h2>
            {about.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 font-serif text-xl leading-snug tracking-[-0.04em]">
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href="/programmes"
            className="inline-flex w-fit cursor-pointer items-center gap-3 bg-black p-4 font-mono text-[15px] font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
          >
            <span className="size-1 bg-white" aria-hidden="true" />
            Experience Our Approach
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 pb-32 pt-24 md:pt-[120px]">
        <h2 className="text-center font-display text-4xl font-medium leading-none tracking-[-0.03em]">Our values</h2>
        <ul className="mx-auto mt-10 grid max-w-[1100px] gap-4 md:grid-cols-3">
          {about.values.slice(0, 3).map((value) => (
            <li key={value.title} className="flex min-h-[246px] flex-col gap-6 rounded-2xl bg-[#f6f8fb] p-8 md:p-10">
              <img src={value.icon} alt="" width={42} height={42} />
              <div>
                <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{value.title}</h3>
                <p className="mt-2 font-serif text-xl leading-snug tracking-[-0.04em]">{value.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mx-auto mt-4 grid max-w-[1100px] gap-4 md:grid-cols-2">
          {about.values.slice(3).map((value) => (
            <li key={value.title} className="flex min-h-[246px] flex-col gap-6 rounded-2xl bg-[#f6f8fb] p-8 md:p-10">
              <img src={value.icon} alt="" width={42} height={42} />
              <div>
                <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{value.title}</h3>
                <p className="mt-2 font-serif text-xl leading-snug tracking-[-0.04em]">{value.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="grid items-center pb-24 md:grid-cols-2 md:pb-[120px] md:pl-16">
        <div className="relative aspect-[612/700] md:-mr-14">
          <Image
            src="/images/about-vision.png"
            alt="A child in an orange jacket and purple hat, surrounded by paper flowers"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 px-5 py-12 md:px-24">
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.03em]">
            {about.vision.title}
          </h2>
          <div className="space-y-4 font-serif text-xl leading-snug tracking-[-0.04em]">
            {about.vision.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-[#f6f8fb] px-5 py-24 md:px-20 md:py-[120px]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.03em]">
            Management
          </h2>
          <dl className="mt-16">
            {about.management.map((person) => (
              <div
                key={person.role}
                className="grid gap-2 border-b border-[#dbe0ec] py-4 sm:grid-cols-2 sm:items-center"
              >
                <dt className="font-serif text-xl leading-snug tracking-[-0.04em]">{person.role}</dt>
                <dd className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{person.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <VisitCta />
    </>
  );
}
