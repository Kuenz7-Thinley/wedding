"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { SCHEDULE_ITEMS } from "@/lib/constants";
import type { TranslationKey } from "@/lib/i18n";

function TimelineItem({
  index,
  timeKey,
  titleKey,
  descKey,
}: {
  index: number;
  timeKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}) {
  const { t } = useLocale();
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`timeline__item${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="timeline__time">{t(timeKey)}</span>
      <div>
        <h2 className="timeline__title">{t(titleKey)}</h2>
        <p className="timeline__desc">{t(descKey)}</p>
      </div>
    </li>
  );
}

export function Timeline() {
  return (
    <ol className="timeline">
      {SCHEDULE_ITEMS.map((item, index) => (
        <TimelineItem
          key={item}
          index={index}
          timeKey={`schedule.item${item}.time` as TranslationKey}
          titleKey={`schedule.item${item}.title` as TranslationKey}
          descKey={`schedule.item${item}.desc` as TranslationKey}
        />
      ))}
    </ol>
  );
}
