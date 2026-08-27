"use client";

import { Suspense } from "react";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { RsvpForm } from "@/components/RsvpForm";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";
import { withBasePath } from "@/lib/paths";

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
        <div className="content-image">
          <Image
            src={withBasePath("/images/pages/rsvp.png")}
            alt={t("images.couple")}
            fill
            sizes="(max-width: 640px) 100vw, 640px"
            className="content-image__img"
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
