"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { useLocale } from "@/components/LocaleProvider";
import { submitToGoogleFormFromBrowser } from "@/lib/google-form";
import {
  hasRsvpErrors,
  validateRsvpForm,
  type RsvpField,
  type RsvpFieldErrors,
  type RsvpFormValues,
} from "@/lib/rsvp-validation";

function readPrefill(searchParams: URLSearchParams): Partial<RsvpFormValues> {
  const attendingParam = searchParams.get("attending");
  let attending: RsvpFormValues["attending"] = "";
  if (attendingParam === "yes" || attendingParam === "no") attending = attendingParam;
  if (attendingParam === "accept") attending = "yes";
  if (attendingParam === "decline") attending = "no";

  const guests = searchParams.get("guests");
  const validGuests = guests && ["1", "2", "3", "4"].includes(guests) ? guests : undefined;

  return {
    name: searchParams.get("name") ?? undefined,
    email: searchParams.get("email") ?? undefined,
    attending: attending || undefined,
    guests: validGuests,
    dietary: searchParams.get("dietary") ?? undefined,
    message: searchParams.get("message") ?? undefined,
  };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="form-field__error" role="alert">
      {message}
    </p>
  );
}

export function RsvpForm() {
  const { t } = useLocale();
  const searchParams = useSearchParams();
  const prefill = useMemo(() => readPrefill(searchParams), [searchParams]);

  const [form, setForm] = useState<RsvpFormValues>({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<RsvpFieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [touched, setTouched] = useState<Partial<Record<RsvpField, boolean>>>({});

  useEffect(() => {
    setForm((current) => ({
      name: prefill.name ?? current.name,
      email: prefill.email ?? current.email,
      attending: prefill.attending ?? current.attending,
      guests: prefill.guests ?? current.guests,
      dietary: prefill.dietary ?? current.dietary,
      message: prefill.message ?? current.message,
    }));
  }, [prefill]);

  function updateField<K extends RsvpField>(field: K, value: RsvpFormValues[K]) {
    const nextForm = { ...form, [field]: value };
    setForm(nextForm);

    if (touched[field] || status === "error") {
      const nextErrors = validateRsvpForm(nextForm);
      setFieldErrors((current) => ({ ...current, [field]: nextErrors[field] }));
    }
  }

  function markTouched(field: RsvpField) {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validateRsvpForm(form);
    setFieldErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validateRsvpForm(form);
    setFieldErrors(errors);
    setTouched({
      name: true,
      email: true,
      attending: true,
      guests: true,
      dietary: true,
      message: true,
    });
    setSubmitError("");

    if (hasRsvpErrors(errors)) {
      setStatus("error");
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await submitToGoogleFormFromBrowser({
        name: form.name.trim(),
        email: form.email.trim(),
        attending: form.attending as "yes" | "no",
        guests: form.guests,
        dietary: form.dietary.trim(),
        message: form.message.trim(),
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError(t("rsvp.error"));
    }
  }

  if (status === "success") {
    return (
      <AnimateIn delay={2}>
        <div className="rsvp-success visible">
          <h2 className="rsvp-success__title">{t("rsvp.thankYou")}</h2>
          <p className="content-block__body">{t("rsvp.confirmation")}</p>
        </div>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn delay={2}>
      <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
        <div className={`form-field${fieldErrors.name ? " form-field--error" : ""}`}>
          <label htmlFor="rsvp-name">{t("rsvp.name")}</label>
          <input
            id="rsvp-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "rsvp-name-error" : undefined}
            onBlur={() => markTouched("name")}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <FieldError id="rsvp-name-error" message={fieldErrors.name ? t(fieldErrors.name) : undefined} />
        </div>

        <div className={`form-field${fieldErrors.email ? " form-field--error" : ""}`}>
          <label htmlFor="rsvp-email">{t("rsvp.email")}</label>
          <input
            id="rsvp-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "rsvp-email-error" : undefined}
            onBlur={() => markTouched("email")}
            onChange={(e) => updateField("email", e.target.value)}
          />
          <FieldError id="rsvp-email-error" message={fieldErrors.email ? t(fieldErrors.email) : undefined} />
        </div>

        <fieldset className={`form-field${fieldErrors.attending ? " form-field--error" : ""}`}>
          <legend>{t("rsvp.attending")}</legend>
          <div className="form-radios">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={form.attending === "yes"}
                aria-invalid={Boolean(fieldErrors.attending)}
                onBlur={() => markTouched("attending")}
                onChange={() => updateField("attending", "yes")}
              />
              <span>{t("rsvp.accept")}</span>
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === "no"}
                aria-invalid={Boolean(fieldErrors.attending)}
                onBlur={() => markTouched("attending")}
                onChange={() => updateField("attending", "no")}
              />
              <span>{t("rsvp.decline")}</span>
            </label>
          </div>
          <FieldError
            id="rsvp-attending-error"
            message={fieldErrors.attending ? t(fieldErrors.attending) : undefined}
          />
        </fieldset>

        <div className={`form-field${fieldErrors.guests ? " form-field--error" : ""}`}>
          <label htmlFor="rsvp-guests">{t("rsvp.guests")}</label>
          <select
            id="rsvp-guests"
            name="guests"
            value={form.guests}
            aria-invalid={Boolean(fieldErrors.guests)}
            aria-describedby={fieldErrors.guests ? "rsvp-guests-error" : undefined}
            onBlur={() => markTouched("guests")}
            onChange={(e) => updateField("guests", e.target.value)}
          >
            {["1", "2", "3", "4"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <FieldError id="rsvp-guests-error" message={fieldErrors.guests ? t(fieldErrors.guests) : undefined} />
        </div>

        <div className={`form-field${fieldErrors.dietary ? " form-field--error" : ""}`}>
          <label htmlFor="rsvp-dietary">{t("rsvp.dietary")}</label>
          <input
            id="rsvp-dietary"
            name="dietary"
            type="text"
            placeholder={t("rsvp.optional")}
            value={form.dietary}
            aria-invalid={Boolean(fieldErrors.dietary)}
            aria-describedby={fieldErrors.dietary ? "rsvp-dietary-error" : undefined}
            onBlur={() => markTouched("dietary")}
            onChange={(e) => updateField("dietary", e.target.value)}
          />
          <FieldError
            id="rsvp-dietary-error"
            message={fieldErrors.dietary ? t(fieldErrors.dietary) : undefined}
          />
        </div>

        <div className={`form-field${fieldErrors.message ? " form-field--error" : ""}`}>
          <label htmlFor="rsvp-message">{t("rsvp.message")}</label>
          <textarea
            id="rsvp-message"
            name="message"
            placeholder={t("rsvp.optional")}
            value={form.message}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "rsvp-message-error" : undefined}
            onBlur={() => markTouched("message")}
            onChange={(e) => updateField("message", e.target.value)}
          />
          <FieldError id="rsvp-message-error" message={fieldErrors.message ? t(fieldErrors.message) : undefined} />
        </div>

        {submitError && <p className="rsvp-form__error">{submitError}</p>}

        <button type="submit" className="btn" disabled={status === "submitting"}>
          {status === "submitting" ? t("rsvp.submitting") : t("rsvp.submit")}
        </button>
      </form>
    </AnimateIn>
  );
}
