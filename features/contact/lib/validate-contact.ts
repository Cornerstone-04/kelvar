import type { ContactFieldErrors, ContactFields } from "../types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const limits: Record<keyof ContactFields, number> = {
  name: 100,
  email: 254,
  organisation: 120,
  subject: 160,
  message: 2_000,
};

export function parseContactForm(formData: FormData): ContactFields {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    organisation: String(formData.get("organisation") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function validateContactFields(
  fields: ContactFields,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  for (const [key, value] of Object.entries(fields) as Array<
    [keyof ContactFields, string]
  >) {
    if (!value) errors[key] = "This field is required.";
    else if (value.length > limits[key]) {
      errors[key] = `Keep this field under ${limits[key]} characters.`;
    }
  }

  if (fields.email && !emailPattern.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export function buildContactMailto(
  recipient: string,
  fields: ContactFields,
): string {
  const subject = fields.subject || "Kelvar Industries enquiry";
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Organisation: ${fields.organisation}`,
    "",
    fields.message,
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
