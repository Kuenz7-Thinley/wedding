"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { Countdown } from "@/components/Countdown";
import { useLocale, usePageTitle } from "@/components/LocaleProvider";
import { COLLAGE_CARDS } from "@/lib/constants";

export default function HomePage() {
  const { t } = useLocale();
  usePageTitle("home");

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/hero.jpg"
            alt={t("images.hero")}
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__grain" aria-hidden="true" />
        </div>
        <AnimateIn className="hero__content">
          <span className="hero__eyebrow">{t("home.eyebrow")}</span>
          <h1 className="hero__names">Kuenzang &amp; Miyu</h1>
          <p className="hero__date">{t("home.date")}</p>
          <p className="hero__venue">{t("home.venue")}</p>
          <Link href="/rsvp" className="btn btn--hero">
            {t("home.rsvpCta")}
          </Link>
        </AnimateIn>
      </section>

      <section className="page-section">
        <AnimateIn>
          <div className="section-heading">
            <span className="section-heading__line" aria-hidden="true" />
            <h2 className="section-heading__title">{t("home.explore")}</h2>
            <p className="section-heading__subtitle">{t("home.exploreSubtitle")}</p>
          </div>
        </AnimateIn>

        <div className="collage">
          <div className="collage__grid">
            {COLLAGE_CARDS.map((card, index) => (
              <AnimateIn key={card.href} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
                <Link href={card.href} className="collage-card">
                  <div className="collage-card__art">
                    <Image
                      src={card.image}
                      alt=""
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 50vw, 240px"
                    />
                    <span className="collage-card__shine" aria-hidden="true" />
                  </div>
                  <span className="collage-card__label">{t(card.labelKey)}</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="couple-gallery">
          <AnimateIn delay={2} className="couple-gallery__item couple-gallery__item--left">
            <Image
              src="/images/couple-1.jpeg"
              alt={t("images.couple")}
              width={600}
              height={800}
              sizes="(max-width: 640px) 100vw, 480px"
            />
          </AnimateIn>
          <AnimateIn delay={3} className="couple-gallery__item couple-gallery__item--right">
            <Image
              src="/images/couple-2.jpeg"
              alt={t("images.couple")}
              width={600}
              height={800}
              sizes="(max-width: 640px) 100vw, 480px"
            />
          </AnimateIn>
        </div>

        <Countdown />
      </section>
    </>
  );
}
