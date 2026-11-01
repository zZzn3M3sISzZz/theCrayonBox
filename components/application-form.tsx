"use client";

import { useActionState } from "react";
import { submitApplication, type FormState } from "@/app/actions";

import { roles } from "@/content/stories";

const initialFormState: FormState = { status: "idle", message: "", sent: false };

const control =
  "w-full rounded-[9px] border border-transparent bg-[#f3f3f5] px-3.5 py-2.5 font-serif text-[15px] leading-snug tracking-[-0.04em] text-ink";

export function ApplicationForm({ defaultRole }: { defaultRole?: string }) {
  const [state, action, pending] = useActionState(submitApplication, initialFormState);

  if (state.status === "success") {
    return (
      <p id="apply" className="scroll-mt-28 mx-auto max-w-[520px] px-5 pb-24 font-serif text-lg leading-snug" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form id="apply" action={action} className="scroll-mt-28 mx-auto flex w-full max-w-[520px] flex-col px-5 pb-24">
      <h2 className="font-display text-3xl font-medium leading-none tracking-[-0.03em]">Send your application</h2>
      <label className="mt-6 flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        Name
        <input name="name" required placeholder="Enter your full name" className={control} />
      </label>
      <label className="mt-[18px] flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        Email Address
        <input name="email" type="email" required placeholder="Enter your email address" className={control} />
      </label>
      <label className="mt-[18px] flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        Phone Number
        <input name="phone" type="tel" required placeholder="Enter your phone number" className={control} />
      </label>
      <label className="mt-[18px] flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        Role
        <select name="role" required defaultValue={defaultRole ?? ""} className={control}>
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.title}>
              {role.title}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-[18px] flex flex-col gap-2 font-display text-xl font-medium leading-none tracking-[-0.03em]">
        A short note about your experience
        <textarea name="note" required rows={5} placeholder="Tell us why you’d like to join" className={`${control} min-h-[120px]`} />
      </label>
      {state.status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-[18px] inline-flex w-full cursor-pointer items-center justify-center gap-2.5 bg-black p-4 font-mono text-sm font-medium leading-none text-white transition-opacity duration-200 ease-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="size-1 bg-white" aria-hidden="true" />
        {pending ? "Sending…" : "Send your application"}
      </button>
    </form>
  );
}
