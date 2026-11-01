"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/95 backdrop-blur-sm">
      <div className="reveal-load mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link href="/" className="wordmark text-[1.65rem] leading-none text-ink" onClick={() => setOpen(false)}>
          THE CRAYON BOX
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-sm tracking-tight ${active ? "underline decoration-1 underline-offset-4" : "hover:opacity-70"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {"arrow" in item && item.arrow ? " →" : ""}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="cursor-pointer font-display text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {"arrow" in item && item.arrow ? " →" : ""}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
