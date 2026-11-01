"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  sent: boolean;
};

function required(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

async function maybeSend(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "The Crayon Box <onboarding@resend.dev>",
      to: [to],
      subject,
      text,
    }),
  });

  return response.ok;
}

export async function submitEnquiry(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = required(formData, "name");
  const email = required(formData, "email");
  const phone = required(formData, "phone");
  const age = required(formData, "age");
  const help = required(formData, "help");

  if (!name || !email || !phone || !help) {
    return {
      status: "error",
      sent: false,
      message: "Please add your name, email, phone number and how we can help.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", sent: false, message: "Please enter a valid email address." };
  }

  const sent = await maybeSend(
    `Visit enquiry from ${name}`,
    [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Child's age: ${age || "Not shared"}`, "", help].join("\n"),
  );

  return {
    status: "success",
    sent,
    message: sent
      ? "Thank you. We have your enquiry and will be in touch."
      : "Thank you. Your message is noted here. Email delivery is not switched on yet, so please call us if you would like a reply today.",
  };
}

export async function submitApplication(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = required(formData, "name");
  const email = required(formData, "email");
  const phone = required(formData, "phone");
  const role = required(formData, "role");
  const note = required(formData, "note");

  if (!name || !email || !phone || !role || !note) {
    return {
      status: "error",
      sent: false,
      message: "Please complete every field, including a short note about your experience.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", sent: false, message: "Please enter a valid email address." };
  }

  const sent = await maybeSend(
    `Application: ${role} — ${name}`,
    [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Role: ${role}`, "", note].join("\n"),
  );

  return {
    status: "success",
    sent,
    message: sent
      ? "Thank you. We have your application and will read it with care."
      : "Thank you. Your application is noted here. Email delivery is not switched on yet, so please call us if you would like to follow up today.",
  };
}
