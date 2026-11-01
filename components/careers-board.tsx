"use client";

import { useState } from "react";
import { ApplicationForm } from "@/components/application-form";
import { Reveal } from "@/components/reveal";
import { roles } from "@/content/stories";

export function CareersBoard() {
  const [role, setRole] = useState<string>(roles[0].title);

  return (
    <>
        <div id="roles" className="mx-auto flex w-full max-w-[820px] scroll-mt-24 flex-col gap-4 pb-28">
        {roles.map((item, index) => (
          <Reveal
            as="article"
            key={item.id}
            delay={(index % 4) as 0 | 1 | 2 | 3}
            className="flex flex-col gap-6 rounded-2xl bg-white p-8 md:flex-row md:items-start md:gap-6 md:p-10"
          >
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">{item.title}</h2>
              <p className="mt-2 flex flex-wrap gap-2 font-mono text-sm leading-none text-[#6c6c6c]">
                <span>{item.type}</span>
                <span aria-hidden="true">·</span>
                <span>{item.place}</span>
              </p>
              <p className="mt-6 font-serif text-xl leading-snug tracking-[-0.04em]">{item.body}</p>
              <p className="mt-4 font-serif text-xl leading-snug tracking-[-0.04em]">You’ll bring: {item.bring}</p>
            </div>
            <a
              href="#apply"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-black p-3 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
              onClick={() => setRole(item.title)}
            >
              Apply Now →
            </a>
          </Reveal>
        ))}
      </div>
      <div className="-mx-5 w-[calc(100%+2.5rem)] self-stretch bg-white">
        <section className="flex flex-col items-center gap-8 px-5 py-24 text-center">
          <h2 className="max-w-[752px] font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
            A little curiosity. A lot of heart.
          </h2>
          <p className="max-w-[644px] font-serif text-xl leading-snug tracking-[-0.04em]">
            We value people who notice the small things, respect every child’s pace and bring care to everything they do. If that sounds like you, we’d love to meet you.
          </p>
          <p className="max-w-[644px] font-serif text-xl leading-snug tracking-[-0.04em]">
            Your next chapter could start here. Share your CV, the role you’re interested in and a short note about why you’d like to join The Crayon Box.
          </p>
          <a
            href="#apply"
            className="inline-flex cursor-pointer items-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
          >
            <span className="size-1 bg-white" aria-hidden="true" />
            Send your application
          </a>
        </section>
        <ApplicationForm key={role} defaultRole={role} />
      </div>
    </>
  );
}
