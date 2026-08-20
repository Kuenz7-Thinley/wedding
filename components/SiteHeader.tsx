"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { NAV_ITEMS } from "@/lib/constants";
import { withBasePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobileNav(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header${open ? " site-header--menu-open" : ""}`}>
      <div
        className={`site-nav-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <Link href="/" className="site-logo" aria-label={t("common.homeLabel")}>
        <Image src={withBasePath("/images/monogram.svg")} alt="K & M monogram" width={52} height={52} priority />
      </Link>
      <div className="site-header__row">
        <nav
          id="site-nav"
          className={`site-nav${open ? " open" : ""}`}
          aria-label="Main"
          aria-hidden={isMobileNav ? !open : undefined}
          {...(isMobileNav && !open ? { inert: true } : {})}
        >
          <button
            type="button"
            className="site-nav__close"
            aria-label={t("common.close")}
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="site-nav__links">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="site-header__tools">
          <div className="lang-switcher" role="group" aria-label={t("common.langLabel")}>
            {(["en", "ja"] as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-switcher__btn${locale === code ? " active" : ""}`}
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
              >
                {code === "en" ? "EN" : "日本語"}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={t("common.menu")}
            onClick={() => setOpen(!open)}
          >
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
