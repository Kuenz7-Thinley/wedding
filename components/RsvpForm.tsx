"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { useLocale } from "@/components/LocaleProvider";
import { submitToGoogleFormFromBrowser } from "@/lib/google-form";

type FormState = {
  name: string;
  email: string;
  attending: "" | "yes" | "no";
  guests: string;
  dietary: string;
  message: string;
};

function readPrefill(searchParams: URLSearchParams): Partial<FormState> {
  const attendingParam = searchParams.get("attending");
  let attending: FormState["attending"] = "";
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

export function RsvpForm() {
  const { t } = useLocale();
  const searchParams = useSearchParams();
  const prefill = useMemo(() => readPrefill(searchParams), [searchParams]);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.attending) return;

    setStatus("submitting");
    setErrorMessage("");

    const name = form.name.trim();
    const email = form.email.trim();

    if (!name || !email || !form.attending) {
      setStatus("error");
      setErrorMessage(t("rsvp.error"));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage(t("rsvp.error"));
      return;
    }

    try {
      await submitToGoogleFormFromBrowser({
        name,
        email,
        attending: form.attending,
        guests: form.guests,
        dietary: form.dietary,
        message: form.message,
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(t("rsvp.error"));
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
        <div className="form-field">
          <label htmlFor="rsvp-name">{t("rsvp.name")}</label>
          <input
            id="rsvp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="rsvp-email">{t("rsvp.email")}</label>
          <input
            id="rsvp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <fieldset className="form-field">
          <legend>{t("rsvp.attending")}</legend>
          <div className="form-radios">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                required
                checked={form.attending === "yes"}
                onChange={() => setForm({ ...form, attending: "yes" })}
              />
              <span>{t("rsvp.accept")}</span>
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === "no"}
                onChange={() => setForm({ ...form, attending: "no" })}
              />
              <span>{t("rsvp.decline")}</span>
            </label>
          </div>
        </fieldset>

        <div className="form-field">
          <label htmlFor="rsvp-guests">{t("rsvp.guests")}</label>
          <select
            id="rsvp-guests"
            name="guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
          >
            {["1", "2", "3", "4"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="rsvp-dietary">{t("rsvp.dietary")}</label>
          <input
            id="rsvp-dietary"
            name="dietary"
            type="text"
            placeholder={t("rsvp.optional")}
            value={form.dietary}
            onChange={(e) => setForm({ ...form, dietary: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label htmlFor="rsvp-message">{t("rsvp.message")}</label>
          <textarea
            id="rsvp-message"
            name="message"
            placeholder={t("rsvp.optional")}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        {status === "error" && <p className="rsvp-form__error">{errorMessage}</p>}

        <button type="submit" className="btn" disabled={status === "submitting"}>
          {status === "submitting" ? t("rsvp.submitting") : t("rsvp.submit")}
        </button>
      </form>
    </AnimateIn>
  );
}
