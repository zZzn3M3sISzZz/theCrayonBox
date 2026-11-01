import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { VisitCta } from "@/components/visit-cta";
import type { Programme } from "@/content/programmes";

const prose = "font-serif text-xl leading-[1.4] tracking-[-0.04em]";
const heading = "font-display text-xl font-medium leading-none tracking-[-0.02em]";

export function ProgrammePage({ programme }: { programme: Programme }) {
  if (programme.hero && programme.ctaLines && programme.ctaLabel) return <ProgrammeDetail programme={programme} />;

  return (
    <>
      <article>
        <Reveal as="section" when="load" className="bg-sky px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[900px]">
            <Link href="/programmes" className="font-display text-sm hover:opacity-70">
              ← Back to Programmes
            </Link>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.14em]">{programme.kicker}</p>
            <h1 className="mt-3 text-5xl font-medium md:text-6xl">{programme.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">{programme.summary}</p>
          </div>
        </Reveal>
        <Reveal as="section" className="mx-auto grid max-w-[1100px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-8">
          <h2 className="text-3xl font-medium">Programme overview</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {programme.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <section className="bg-card">
          <Reveal className="mx-auto grid max-w-[1100px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-8">
            <h2 className="text-3xl font-medium">About the programme</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {programme.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>
        <Reveal as="section" className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-3xl font-medium">What your child will experience</h2>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed">
              {programme.experience.map((item) => (
                <li key={item} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-medium">What the programme develops</h2>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed">
              {programme.develops.map((item) => (
                <li key={item} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </article>
      <VisitCta title={programme.cta} />
    </>
  );
}

function ProgrammeDetail({ programme }: { programme: Programme }) {
  const hero = programme.hero;
  const ctaLines = programme.ctaLines;
  const ctaLabel = programme.ctaLabel;
  if (!hero || !ctaLines || !ctaLabel) return null;

  return (
    <main className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#a8d3ff] to-[#fff4df] px-5 pb-28 pt-32 md:pt-[140px]">
      <Link
        href="/programmes"
        className="font-serif text-xl leading-snug tracking-[-0.04em] transition-opacity duration-200 ease-out hover:opacity-70"
      >
        ← Back to Programmes
      </Link>
      <Reveal
        as="article"
        when="load"
        className="flex w-full max-w-[820px] flex-col gap-12 rounded-2xl bg-white p-6 md:p-10"
      >
        <header className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="min-w-0 flex-1 md:max-w-[600px]">
            <h1 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
              {programme.cardTitle}
            </h1>
            <p className="mt-2 flex flex-wrap gap-2 font-serif text-xl leading-none text-[#6c6c6c]">
              <span>{programme.detailAge ?? programme.age}</span>
              <span aria-hidden="true">.</span>
              <span>{programme.detailSchedule ?? programme.schedule}</span>
            </p>
            <p className={`mt-6 ${prose}`}>{programme.summary}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-black p-3 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
          >
            Enquire Now
          </Link>
        </header>
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: hero.aspect }}>
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="(min-width: 860px) 740px, 100vw"
            className="object-cover"
            style={{ objectPosition: hero.position }}
          />
        </div>
        <hr className="border-0 border-t border-[#dbe0ec]" />
        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-4">
            <h2 className={heading}>Programme Overview</h2>
            {programme.overview.map((paragraph) => (
              <p key={paragraph} className={prose}>
                {paragraph}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={heading}>About the Programme</h2>
            {programme.about.map((paragraph) => (
              <p key={paragraph} className={prose}>
                {paragraph}
              </p>
            ))}
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={heading}>{programme.experienceTitle ?? "What Your Child Will Experience"}</h2>
            <ul className={`list-disc space-y-2 pl-7 ${prose}`}>
              {programme.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={heading}>{programme.developsTitle ?? "What the Programme Develops"}</h2>
            <ul className={`list-disc space-y-2 pl-7 ${prose}`}>
              {programme.develops.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {programme.moreLists?.map((list) => (
            <section key={list.title} className="flex flex-col gap-4">
              <h2 className={heading}>{list.title}</h2>
              <ul className={`list-disc space-y-2 pl-7 ${prose}`}>
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <hr className="border-0 border-t border-[#dbe0ec]" />
        <section className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
            <span className="block">{ctaLines[0]}</span>
            <span className="block">{ctaLines[1]}</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex cursor-pointer items-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
          >
            <span className="size-1 bg-white" aria-hidden="true" />
            {ctaLabel}
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
