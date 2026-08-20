"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { Timeline } from "@/components/Timeline";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";
import { withBasePath } from "@/lib/paths";

export default function SchedulePage() {
  const { t } = useLocale();
  usePageTitle("schedule");

  return (
    <section className="page-section">
      <AnimateIn>
        <div className="page-intro">
          <h1 className="page-intro__title">{t("schedule.title")}</h1>
          <p className="page-intro__subtitle">{t("schedule.subtitle")}</p>
        </div>
      </AnimateIn>

      <AnimateIn delay={1}>
        <div className="content-image">
          <Image
            src={withBasePath("/images/schedule.jpeg")}
            alt={t("images.garden")}
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </AnimateIn>

      <Timeline />
    </section>
  );
}
