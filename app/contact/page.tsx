import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { school } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan a visit or ask a question. The Crayon Box is in Ekkaduthangal, Chennai.",
};

export default function ContactPage() {
  return (
    <>
      <Reveal as="section" when="load" className="px-5 pb-20 pt-24 md:pt-[120px]">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">Contact Us</p>
          <h1 className="mt-8 text-[clamp(2.75rem,7vw,5rem)] leading-none tracking-[-0.04em]">
            <span className="block font-serif font-normal">Let’s begin with</span>
            <span className="mt-1 block font-display font-normal">a conversation</span>
          </h1>
        </div>
        <div className="relative mx-auto mt-10 aspect-[1240/500] w-full max-w-[1240px] overflow-hidden">
          <Image
            src="/images/contact-hero.png"
            alt="Children in bright clothes posing with oversized toys and doodles"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </Reveal>

      <Reveal as="section" className="grid items-center md:grid-cols-2">
        <div className="px-5 py-16 md:py-24 md:pl-16 md:pr-20">
          <div className="mx-auto max-w-[375px]">
            <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
              Planning a visit or
              <br />
              have a question?
            </h2>
            <p className="mt-4 font-serif text-xl leading-snug tracking-[-0.04em]">
              Whether you are choosing your child’s first programme, looking for dependable day-care or simply want to understand our approach, we would be happy to speak with you.
            </p>
            <p className="mt-4 font-serif text-xl leading-snug tracking-[-0.04em]">
              Share your details here and the right member of our team will get in touch.
            </p>
          </div>
        </div>
        <div className="relative min-h-[760px] overflow-hidden">
          <Image
            src="/images/contact-form-bg.png"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="relative px-6 py-16 md:px-[84px] md:py-[68px]">
            <div className="rounded-2xl bg-white px-7 py-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="grid items-center md:grid-cols-2">
        <div className="relative aspect-[640/802]">
          <Image
            src="/images/contact-map.png"
            alt="Map of Chennai showing the area around Ekkaduthangal"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-12 px-5 py-16 md:px-24">
          <div className="max-w-[500px]">
            <p className="font-serif text-xl leading-snug tracking-[-0.04em] text-[#6c6c6c]">Visit Us</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
              Come experience The Crayon Box in person.
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/images/contact-pin.svg" alt="" width={32} height={40} />
            <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">Phone</h3>
            <a href={school.phoneHref} className="font-serif text-xl leading-snug tracking-[-0.04em] hover:opacity-70">
              (+91) 81245 21521
            </a>
          </div>
          <div className="flex max-w-[500px] flex-col items-start gap-2">
            <img src="/images/contact-pin.svg" alt="" width={32} height={40} />
            <h3 className="font-display text-xl font-medium leading-none tracking-[-0.02em]">Address</h3>
            <p className="font-serif text-xl leading-snug tracking-[-0.04em]">
              No. 14, Manjolai 1st Main Road
              <br />
              Kalaimagal Nagar, Ekkaduthangal
              <br />
              Chennai – 600032
            </p>
            <a
              href={school.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex cursor-pointer items-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80"
            >
              <span className="size-1 bg-white" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
