import type { TranslationKey } from "@/lib/i18n";

export type RsvpFormValues = {
  name: string;
  email: string;
  attending: "" | "yes" | "no";
  guests: string;
  dietary: string;
  message: string;
};

export type RsvpField = keyof RsvpFormValues;

export type RsvpFieldErrors = Partial<Record<RsvpField, TranslationKey>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_GUESTS = ["1", "2", "3", "4"] as const;

export function validateRsvpForm(form: RsvpFormValues): RsvpFieldErrors {
  const errors: RsvpFieldErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();

  if (!name) {
    errors.name = "rsvp.validation.nameRequired";
  } else if (name.length < 2) {
    errors.name = "rsvp.validation.nameMin";
  } else if (name.length > 100) {
    errors.name = "rsvp.validation.nameMax";
  }

  if (!email) {
    errors.email = "rsvp.validation.emailRequired";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "rsvp.validation.emailInvalid";
  }

  if (!form.attending) {
    errors.attending = "rsvp.validation.attendingRequired";
  }

  if (!VALID_GUESTS.includes(form.guests as (typeof VALID_GUESTS)[number])) {
    errors.guests = "rsvp.validation.guestsInvalid";
  }

  if (form.dietary.trim().length > 500) {
    errors.dietary = "rsvp.validation.dietaryMax";
  }

  if (form.message.trim().length > 1000) {
    errors.message = "rsvp.validation.messageMax";
  }

  return errors;
}

export function hasRsvpErrors(errors: RsvpFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
