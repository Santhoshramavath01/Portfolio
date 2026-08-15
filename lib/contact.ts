// Abstraction layer for the contact form.
//
// There is no backend wired up yet. `sendContactMessage` is the single
// place to plug one in later — Resend, EmailJS, Formspree, a custom API
// route, etc. Swap the implementation below; nothing in the UI needs to
// change since it only depends on this function's signature.

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResult> {
  // --- Wire up a real backend here, for example: ---
  //
  // const res = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) return { success: false, error: "Something went wrong. Please try again." };
  // return { success: true };

  // Placeholder behaviour until a backend is connected: simulate latency
  // so the loading/success UI can be built and tested end to end.
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (!payload.name || !payload.email || !payload.message) {
    return { success: false, error: "Please fill in every field." };
  }

  console.info("[contact:not-yet-connected] Message ready to send:", payload);
  return { success: true };
}

export function validateContactPayload(
  payload: ContactPayload
): Partial<Record<keyof ContactPayload, string>> {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name.trim()) {
    errors.name = "Your name is required.";
  }

  if (!payload.email.trim()) {
    errors.email = "Your email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.message.trim()) {
    errors.message = "Add a short message.";
  } else if (payload.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}
