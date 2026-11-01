import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const styles =
    variant === "solid"
      ? "bg-ink text-white hover:bg-black"
      : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex cursor-pointer items-center justify-center px-4 py-2.5 font-display text-sm tracking-tight transition-colors duration-200 ease-out ${styles}`}
    >
      {children}
    </Link>
  );
}
