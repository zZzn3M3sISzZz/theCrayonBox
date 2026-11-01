import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

export function VisitCta({
  title = "Come see childhood, thoughtfully nurtured.",
  body = "Visit The Crayon Box, meet our educators and discover a learning environment where your child can feel secure, seen and excited to grow.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 py-20 text-center md:px-8">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{body}</p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Visit</ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
