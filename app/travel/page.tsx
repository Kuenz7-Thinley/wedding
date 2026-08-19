"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";
import { HOTELS, VENUE } from "@/lib/constants";
import { withBasePath } from "@/lib/paths";

export default function TravelPage() {
  const { t } = useLocale();
  usePageTitle("travel");

  return (
    <section className="page-section">
      <AnimateIn>
        <div className="page-intro">
          <h1 className="page-intro__title">{t("travel.title")}</h1>
          <p className="page-intro__subtitle">{t("travel.subtitle")}</p>
        </div>
      </AnimateIn>

      <AnimateIn delay={1}>
        <div className="content-image">
          <Image
            src={withBasePath("/images/tavel.jpeg")}
            alt={t("images.travel")}
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </AnimateIn>

      <AnimateIn delay={2}>
        <article className="content-block">
          <h2 className="content-block__title">{t("travel.gettingThere.title")}</h2>
          <p className="content-block__body">{t("travel.gettingThere.body")}</p>
          <a className="content-block__link" href={VENUE.mapsUrl} target="_blank" rel="noopener noreferrer">
            {t("travel.gettingThere.directions")}
          </a>
        </article>
      </AnimateIn>

      <AnimateIn>
        <article className="content-block">
          <h2 className="content-block__title">{t("travel.stay.title")}</h2>
          <p className="content-block__body">{t("travel.stay.body")}</p>
        </article>
      </AnimateIn>

      <div className="travel-cards">
        {HOTELS.map((hotel, index) => (
          <AnimateIn key={hotel.url} delay={(index + 2) as 2 | 3} className="travel-card">
            <div className="travel-card__photo">
              <Image
                src={withBasePath(hotel.image)}
                alt={t(hotel.altKey)}
                width={400}
                height={300}
                sizes="(max-width: 560px) 100vw, 320px"
              />
            </div>
            <h3 className="travel-card__name">{t(hotel.nameKey)}</h3>
            <p className="travel-card__desc">{t(hotel.descKey)}</p>
            <a className="content-block__link" href={hotel.url} target="_blank" rel="noopener noreferrer">
              {t("travel.learnMore")}
            </a>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn>
        <article className="content-block content-block--spaced">
          <h2 className="content-block__title">{t("travel.notes.title")}</h2>
          <p className="content-block__body">{t("travel.notes.body")}</p>
        </article>
      </AnimateIn>
    </section>
  );
}
