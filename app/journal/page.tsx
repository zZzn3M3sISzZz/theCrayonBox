import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { latestArticles } from "@/content/latest-articles";

export const metadata: Metadata = {
  title: "Journal",
  description: "Latest articles from The Crayon Box on early childhood, play, choosing a preschool, and the people who care for young children.",
};

export default function JournalPage() {
  return (
    <>
      <header className="px-5">
        <div className="relative mx-auto aspect-[1240/480] w-full max-w-[1500px] overflow-hidden">
          <Image
            src="/images/journal-banner.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1540px) 1500px, 100vw"
            className="object-cover"
          />
          <h1 className="absolute inset-0 flex flex-col items-center justify-center text-center font-display text-[clamp(2.25rem,6vw,4.64rem)] font-normal leading-[0.9] tracking-[-0.05em]">
            <span>The Crayon Box</span>
            <span>Journal</span>
          </h1>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-[1540px] flex-col items-center gap-10 px-5 pb-10 pt-20">
        <h2 className="w-full max-w-[612px] text-center font-display text-[2.5rem] font-medium leading-none tracking-[-0.03em]">Latest articles</h2>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-20 pb-6 min-[1200px]:grid-cols-2">
          {latestArticles.map((article, index) => (
            <Reveal as="article" key={article.slug} id={article.slug} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <Link href={article.href} className="flex flex-col gap-5 hover:opacity-70">
                <div className="relative aspect-[612/356] w-full overflow-hidden">
                  <Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 1200px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{article.title}</h3>
                    <p className="mt-2 flex gap-2 font-mono text-sm leading-none text-[#6c6c6c]">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.minutes}</span>
                    </p>
                  </div>
                  <p className="font-serif text-xl leading-snug tracking-[-0.04em]">{article.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
