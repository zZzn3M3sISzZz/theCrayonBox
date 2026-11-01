import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { home } from "@/content/pages";
import { journalArticles } from "@/content/stories";

export const metadata: Metadata = {
  title: { absolute: "The Crayon Box" },
  description: home.hero.body,
};

export default function HomePage() {
  return (
    <>
      <section className="bg-sky">
        <div className="mx-auto max-w-[980px] px-5 pb-6 pt-16 text-center md:px-8 md:pt-20">
          <Reveal when="load" delay={1}>
            <h1 className="text-[clamp(2.8rem,6.4vw,5.1rem)] font-medium leading-[0.96]">
              Where little minds <span className="md:block">grow into their own.</span>
            </h1>
          </Reveal>
          <Reveal when="load" delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">{home.hero.body}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/contact">Book a Visit</ButtonLink>
              <ButtonLink href="/programmes">Explore Our Programmes</ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal when="load" delay={3} className="mx-auto max-w-[1100px] px-5 pb-10 md:px-8">
          <Image
            src="/images/hero.png"
            alt="Five children with backpacks posed among hand-drawn doodles"
            width={1476}
            height={1066}
            priority
            className="h-auto w-full rounded-[26px]"
          />
        </Reveal>
      </section>

      <Reveal as="section" className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/flourish.png"
            alt="A smiling child on a stool, surrounded by paper cutouts of letters, a heart, and a paper plane"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">{home.flourish.title}</h2>
          {home.flourish.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 space-y-5">
            {home.flourish.pillars.map((pillar, index) => (
              <Reveal
                as="li"
                key={pillar.number}
                delay={(index % 4) as 0 | 1 | 2 | 3}
                className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4"
              >
                <div>
                  <p className="font-display text-lg">{pillar.title}</p>
                  <p className="font-display text-xs text-muted">{pillar.number}</p>
                </div>
                <p className="leading-relaxed">{pillar.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-paper">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8">
          <h2 className="max-w-xl text-4xl font-medium leading-tight md:text-5xl">{home.principles.title}</h2>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {home.principles.items.map((item) => (
              <li key={item.title} className="grid gap-3 py-6 md:grid-cols-2">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-8 md:grid-cols-2 md:px-8">
        <blockquote>
          <p className="text-3xl font-medium leading-snug md:text-4xl">“{home.quote.text}”</p>
          <footer className="mt-6">
            <p className="font-display">{home.quote.name}</p>
            <p className="text-muted">{home.quote.role}</p>
          </footer>
        </blockquote>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/quote.png"
            alt="A child in an orange jacket crouching beside a backpack and line drawings"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <section className="relative px-5 py-24 md:py-[120px]">
        <Image
          src="/images/attention-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-10">
          <Reveal>
            <h2 className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-[-0.04em]">
              <span className="block font-serif font-normal">Thoughtful attention</span>
              <span className="mt-1 block font-display font-normal">at every stage</span>
            </h2>
          </Reveal>
          <ul className="grid w-full gap-4 md:grid-cols-3">
            {home.attention.stats.map((stat, index) => (
              <Reveal
                as="li"
                key={stat.title}
                delay={(index % 4) as 0 | 1 | 2 | 3}
                className="flex min-h-[246px] flex-col gap-6 rounded-2xl bg-white p-8 md:p-10"
              >
                <img src={stat.icon} alt="" width={42} height={42} />
                <div>
                  <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{stat.title}</h3>
                  <p className="mt-2 font-serif text-xl leading-snug">{stat.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Reveal as="section" className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/space.png"
            alt="A child crouching and pointing at a large drawn character and flowers"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-medium leading-tight">{home.space.title}</h2>
          {home.space.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 space-y-2 text-lg">
            {home.space.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <section className="px-5 pb-8 md:px-8">
        <Reveal as="figure" className="mx-auto max-w-[820px]">
          <Image
            src="/images/parent.png"
            alt="Parents and a toddler playing with blocks and crayons at a table"
            width={1500}
            height={1000}
            className="h-auto w-full rounded-lg object-cover"
          />
          <figcaption className="mt-8 bg-[#e7f4fb] p-8 md:p-10">
            <p className="font-display text-sm">{home.parent.label}</p>
            <blockquote className="mt-3 text-xl leading-relaxed">“{home.parent.quote}”</blockquote>
            <p className="mt-4 font-display text-sm">— {home.parent.name}</p>
          </figcaption>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[680px] px-5 py-16 md:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-medium">From the journal</h2>
        </Reveal>
        <ul className="mt-8 border-t border-[#dbe0ec]">
          {journalArticles.map((article, index) => (
            <Reveal as="li" key={article.slug} delay={(index % 4) as 0 | 1 | 2 | 3} className="border-b border-[#dbe0ec]">
              <Link href={article.href} className="flex items-start gap-6 py-6 hover:opacity-70">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={165}
                  height={100}
                  className="h-[100px] w-[165px] shrink-0 object-cover"
                />
                <span className="flex min-w-0 flex-1 flex-col gap-2">
                  <span className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{article.title}</span>
                  <span className="font-mono text-sm leading-none text-[#6c6c6c]">
                    {article.category} · {article.minutes}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <ButtonLink href="/journal">Visit the Journal</ButtonLink>
        </div>
      </section>
    </>
  );
}
