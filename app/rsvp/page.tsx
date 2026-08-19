"use client";

import { Suspense } from "react";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { RsvpForm } from "@/components/RsvpForm";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";

function RsvpContent() {
  const { t } = useLocale();
  usePageTitle("rsvp");

  return (
    <section className="page-section">
      <AnimateIn>
        <div className="page-intro">
          <h1 className="page-intro__title">{t("rsvp.title")}</h1>
          <p className="page-intro__subtitle">{t("rsvp.subtitle")}</p>
        </div>
      </AnimateIn>

      <AnimateIn delay={1}>
        <div className="content-image content-image--portrait">
          <Image
            src="/images/couple-2.jpeg"
            alt={t("images.couple")}
            width={360}
            height={480}
            sizes="(max-width: 480px) 90vw, 360px"
          />
        </div>
      </AnimateIn>

      <Suspense fallback={null}>
        <RsvpForm />
      </Suspense>
    </section>
  );
}

export default function RsvpPage() {
  return (
    <Suspense fallback={null}>
      <RsvpContent />
    </Suspense>
  );
}
