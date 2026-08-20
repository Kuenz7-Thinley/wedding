"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { useLocale } from "@/components/LocaleProvider";
import { COUPLE_GALLERY_IMAGES } from "@/lib/constants";
import { withBasePath } from "@/lib/paths";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 48;
const SLIDE_COUNT = COUPLE_GALLERY_IMAGES.length;

export function CoupleGallery() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const next = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused || SLIDE_COUNT <= 1) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [next, paused]);

  const onTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
  };

  const onTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return;

    const delta = clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else prev();
  };

  return (
    <AnimateIn className="couple-gallery">
      <div
        className="couple-gallery__carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => onTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
        aria-roledescription="carousel"
        aria-label={t("home.gallery.aria")}
      >
        <div className="couple-gallery__viewport">
          <div
            className="couple-gallery__ring"
            style={
              {
                "--count": SLIDE_COUNT,
                "--active": active,
              } as CSSProperties
            }
          >
            {COUPLE_GALLERY_IMAGES.map((src, index) => (
              <div
                key={src}
                className={`couple-gallery__slide${index === active ? " is-active" : ""}`}
                style={{ "--index": index } as CSSProperties}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${SLIDE_COUNT}`}
                aria-hidden={index !== active}
              >
                <Image
                  src={withBasePath(src)}
                  alt={t("images.couple")}
                  fill
                  sizes="(max-width: 640px) 72vw, 280px"
                  className="couple-gallery__image"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {SLIDE_COUNT > 1 && (
          <>
            <button
              type="button"
              className="couple-gallery__control couple-gallery__control--prev"
              onClick={prev}
              aria-label={t("home.gallery.prev")}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="couple-gallery__control couple-gallery__control--next"
              onClick={next}
              aria-label={t("home.gallery.next")}
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="couple-gallery__dots" role="tablist" aria-label={t("home.gallery.aria")}>
              {COUPLE_GALLERY_IMAGES.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  className={`couple-gallery__dot${index === active ? " is-active" : ""}`}
                  aria-selected={index === active}
                  aria-label={`${t("home.gallery.goTo")} ${index + 1}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </AnimateIn>
  );
}
