import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 bg-gradient-to-b from-[#f4f4f4] to-white p-5">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl leading-[1.2] tracking-[-0.04em]">
          © 2026 The Crayon Box. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-base font-medium leading-[1.2] hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="relative h-[180px] w-full opacity-90 mix-blend-multiply sm:h-[280px]" aria-hidden="true">
        <Image
          src="/images/footer-texture.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <Reveal className="wordmark w-full text-center text-[clamp(2.15rem,11.6vw,10.94rem)] leading-none tracking-[-0.02em] text-ink">
        TheCrayonBox
      </Reveal>
    </footer>
  );
}
