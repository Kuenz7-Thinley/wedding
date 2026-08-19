export const GOOGLE_FORM_ID = "1FAIpQLSdHwchNI96R4tFkLKvPk9S49Y00ihAzqLx8IR6fIlmmmsMijQ";

export const GOOGLE_FORM_SUBMIT_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

/** Field entry IDs from the Google Form (do not change unless the form is recreated). */
export const GOOGLE_FORM_ENTRIES = {
  name: "entry.1587477920",
  email: "entry.1411675770",
  attending: "entry.1628886789",
  guests: "entry.1149201063",
  dietary: "entry.362603963",
  message: "entry.1574913326",
} as const;

/** Exact option labels required by Google Forms. */
export const GOOGLE_FORM_ATTENDING = {
  yes: "Joyfully accepts / 出席します",
  no: "Regretfully declines /  欠席します",
} as const;

export type RsvpPayload = {
  name: string;
  email: string;
  attending: "yes" | "no";
  guests: string;
  dietary: string;
  message: string;
};

export function buildGoogleFormBody(data: RsvpPayload): URLSearchParams {
  const body = new URLSearchParams();
  body.set(GOOGLE_FORM_ENTRIES.name, data.name.trim());
  body.set(GOOGLE_FORM_ENTRIES.email, data.email.trim());
  body.set(GOOGLE_FORM_ENTRIES.attending, GOOGLE_FORM_ATTENDING[data.attending]);
  body.set(GOOGLE_FORM_ENTRIES.guests, data.guests);
  body.set(GOOGLE_FORM_ENTRIES.dietary, data.dietary.trim());
  body.set(GOOGLE_FORM_ENTRIES.message, data.message.trim());
  return body;
}

export async function submitToGoogleForm(data: RsvpPayload): Promise<boolean> {
  const response = await fetch(GOOGLE_FORM_SUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: buildGoogleFormBody(data).toString(),
    redirect: "manual",
  });

  return response.status === 200 || response.status === 302;
}

/** Browser submission for static hosting (GitHub Pages has no server). */
export async function submitToGoogleFormFromBrowser(data: RsvpPayload): Promise<void> {
  await fetch(GOOGLE_FORM_SUBMIT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: buildGoogleFormBody(data).toString(),
  });
}
