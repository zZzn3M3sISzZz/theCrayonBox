"use client";

import { useActionState } from "react";
import { submitEnquiry, type FormState } from "@/app/actions";

const initialFormState: FormState = { status: "idle", message: "", sent: false };

const fields = [
  { name: "name", label: "Parent/Guardian Name", type: "text", placeholder: "Enter your full name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
  { name: "age", label: "Child's Age", type: "text", placeholder: "Enter your child's age" },
] as const;

const control =
  "w-full rounded-[9px] border border-transparent bg-[#f3f3f5] px-3.5 py-2.5 font-serif text-[15px] leading-snug tracking-[-0.04em] text-ink placeholder:text-[#9b9b9b]";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initialFormState);

  if (state.status === "success") {
    return (
      <p className="font-serif text-lg leading-snug" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col">
      {fields.map((field) => (
        <label key={field.name} className="mt-[18px] flex flex-col gap-2 first:mt-0 font-display text-xl font-medium leading-none tracking-[-0.03em]">
          {field.label}
          <input
            name={field.name}
            type={field.type}
            required={field.name !== "age"}
            placeholder={field.placeholder}
            className={control}
          />
        </label>
      ))}
      <label className="mt-[18px] flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        How Can We Help?
        <textarea
          name="help"
          required
          rows={4}
          placeholder="Tell us how we can help"
          className={`${control} min-h-[109px]`}
        />
      </label>
      {state.status === "error" ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-[18px] inline-flex w-full cursor-pointer items-center justify-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="size-1 bg-white" aria-hidden="true" />
        {pending ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
