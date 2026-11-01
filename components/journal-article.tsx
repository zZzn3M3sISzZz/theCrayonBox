import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const prose = "font-serif text-xl leading-[1.4] tracking-[-0.04em]";
const heading = "font-display text-xl font-medium leading-none tracking-[-0.02em]";

type Article = {
  category: string;
  minutes: string;
  title: string;
  titleLines?: readonly [string, string];
  published: string;
  author: string;
  hero: string;
  heroAlt: string;
  heroAspect?: string;
  heroPosition?: string;
  intro: readonly string[];
  sections: readonly { title: string; paragraphs: readonly string[] }[];
};

type Recent = {
  href: string;
  category: string;
  minutes: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export function JournalArticle({ article, recentArticles }: { article: Article; recentArticles: readonly Recent[] }) {
  return (
    <>
      <header className="mx-auto flex max-w-[1030px] flex-col items-center gap-4 px-5 pb-10 pt-32 text-center md:pt-[140px]">
        <p className="flex gap-2 font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.minutes}</span>
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-none tracking-[-0.05em]">
          {article.titleLines ? (
            article.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))
          ) : (
            article.title
          )}
        </h1>
      </header>
      <div className="px-5">
        <div
          className="relative mx-auto w-full max-w-[1240px] overflow-hidden"
          style={{ aspectRatio: article.heroAspect ?? "1240/738" }}
        >
          <Image
            src={article.hero}
            alt={article.heroAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="object-cover"
            style={{ objectPosition: article.heroPosition ?? "center 60%" }}
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-12 px-5 pb-20 pt-16 md:flex-row md:items-start md:justify-between md:px-[100px] md:pt-20">
        <aside className="flex gap-10 font-serif text-xl leading-snug tracking-[-0.04em] md:w-[200px] md:flex-col md:gap-10">
          <p>
            <span className="block text-[#6c6c6c]">Published</span>
            <span className="mt-1 block font-display text-xl leading-none tracking-[-0.02em]">{article.published}</span>
          </p>
          <p>
            <span className="block text-[#6c6c6c]">Author</span>
            <span className="mt-1 block font-display text-xl leading-none tracking-[-0.02em]">{article.author}</span>
          </p>
        </aside>
        <article className="flex w-full max-w-[740px] flex-col gap-12">
          <div className="flex flex-col gap-4">
            {article.intro.map((paragraph) => (
              <p key={paragraph} className={prose}>
                {paragraph}
              </p>
            ))}
          </div>
          <hr className="border-0 border-t border-[#dbe0ec]" />
          {article.sections.map((section) => (
            <section key={section.title} className="flex flex-col gap-4">
              <h2 className={heading}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={prose}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </div>
      <aside className="bg-[#f6f8fb] px-5 py-20 md:px-[100px]">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.03em]">Recent articles</h2>
            <Link href="/journal" className="font-serif text-xl leading-snug tracking-[-0.04em] underline underline-offset-4">
              View all articles
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recentArticles.map((item, index) => (
              <Reveal as="article" key={item.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <Link href={item.href} className="flex flex-col gap-5 hover:opacity-70">
                  <div className="relative aspect-[612/356] w-full overflow-hidden">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{item.title}</h3>
                      <p className="mt-2 flex gap-2 font-mono text-sm leading-none text-[#6c6c6c]">
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.minutes}</span>
                      </p>
                    </div>
                    <p className="font-serif text-xl leading-snug tracking-[-0.04em]">{item.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
