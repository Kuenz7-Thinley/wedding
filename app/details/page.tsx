"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";
import { VENUE } from "@/lib/constants";
import { withBasePath } from "@/lib/paths";

export default function DetailsPage() {
  const { locale, t } = useLocale();
  usePageTitle("details");

  return (
    <section className="page-section">
      <AnimateIn>
        <div className="page-intro">
          <h1 className="page-intro__title">{t("details.title")}</h1>
          <p className="page-intro__subtitle">{t("details.subtitle")}</p>
        </div>
      </AnimateIn>

      <AnimateIn delay={1}>
        <div className="content-image">
          <Image
            src={withBasePath("/images/venue.jpg")}
            alt={t("images.venue")}
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </AnimateIn>

      <AnimateIn delay={2}>
        <article className="content-block">
          <h2 className="content-block__title">{t("details.location.title")}</h2>
          <p
            className="content-block__body"
            dangerouslySetInnerHTML={{ __html: t("details.location.body") }}
          />
          <a className="content-block__link" href={VENUE.mapsUrl} target="_blank" rel="noopener noreferrer">
            {t("details.location.maps")}
          </a>
          &nbsp;·&nbsp;
          <a className="content-block__link" href={VENUE.website} target="_blank" rel="noopener noreferrer">
            {t("details.location.website")}
          </a>
        </article>
      </AnimateIn>

      <AnimateIn>
        <article className="content-block">
          <h2 className="content-block__title">{t("details.dateTime.title")}</h2>
          <p className="content-block__body">
            <strong>{t("details.dateTime.lead")}</strong> {t("details.dateTime.arrival")}{" "}
            {locale === "en" ? (
              <>
                {t("details.dateTime.linksPrefix")}{" "}
                <Link className="content-block__link" href="/travel">
                  {t("details.dateTime.travelLink")}
                </Link>{" "}
                {t("details.dateTime.linksMiddle")}{" "}
                <Link className="content-block__link" href="/schedule">
                  {t("details.dateTime.scheduleLink")}
                </Link>{" "}
                {t("details.dateTime.linksSuffix")}
              </>
            ) : (
              <>
                {t("details.dateTime.linksPrefix")}{" "}
                <Link className="content-block__link" href="/travel">
                  {t("details.dateTime.travelLink")}
                </Link>
                {t("details.dateTime.linksMiddle")}{" "}
                <Link className="content-block__link" href="/schedule">
                  {t("details.dateTime.scheduleLink")}
                </Link>
                {t("details.dateTime.linksSuffix")}
              </>
            )}
          </p>
        </article>
      </AnimateIn>

      <AnimateIn>
        <article className="content-block">
          <h2 className="content-block__title">{t("details.attire.title")}</h2>
          <p className="content-block__body">{t("details.attire.body")}</p>
        </article>
      </AnimateIn>

      <AnimateIn>
        <article className="content-block">
          <h2 className="content-block__title">{t("details.parking.title")}</h2>
          <p className="content-block__body">{t("details.parking.body")}</p>
        </article>
      </AnimateIn>
    </section>
  );
}
