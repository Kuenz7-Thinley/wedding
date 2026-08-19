"use client";

import { useEffect, useState } from "react";
import { WEDDING_DATE } from "@/lib/constants";
import { useLocale } from "@/components/LocaleProvider";

export function Countdown() {
  const { t } = useLocale();
  const [values, setValues] = useState({ days: "—", hours: "—", minutes: "—", seconds: "—" });
  const [tickSeconds, setTickSeconds] = useState(false);

  useEffect(() => {
    let prevSeconds: number | null = null;

    const tick = () => {
      const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTickSeconds(prevSeconds !== null && prevSeconds !== seconds);
      prevSeconds = seconds;

      setValues({
        days: String(days),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown-section animate-in is-visible" aria-label={t("home.countdown.aria")}>
      <h2 className="countdown-section__title">{t("home.countdown.title")}</h2>
      <p className="countdown-section__subtitle">{t("home.countdown.subtitle")}</p>
      <div className="countdown">
        {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
          <div key={unit} className="countdown__unit">
            <div
              className={`countdown__value${unit === "seconds" && tickSeconds ? " is-ticking" : ""}`}
            >
              {values[unit]}
            </div>
            <div className="countdown__label">{t(`countdown.${unit}`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
