import { describe, expect, test } from "bun:test";
import { buildContactMailto, validateContactFields } from "./validate-contact";

const validFields = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organisation: "Analytical Systems",
  subject: "KELVARX partnership",
  message: "I would like to discuss a research partnership.",
};

describe("contact validation", () => {
  test("accepts a complete enquiry", () => {
    expect(validateContactFields(validFields)).toEqual({});
  });

  test("rejects missing and malformed fields", () => {
    const errors = validateContactFields({
      ...validFields,
      name: "",
      email: "not-an-email",
    });

    expect(errors.name).toBe("This field is required.");
    expect(errors.email).toBe("Enter a valid email address.");
  });

  test("encodes the enquiry into a mail link", () => {
    const href = buildContactMailto("hello@kelvarindustries.com", validFields);

    expect(href.startsWith("mailto:hello@kelvarindustries.com?")).toBe(true);
    expect(href.includes("KELVARX%20partnership")).toBe(true);
    expect(href.includes("Ada%20Lovelace")).toBe(true);
  });
});
