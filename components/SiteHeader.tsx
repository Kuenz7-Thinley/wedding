"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { NAV_ITEMS } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label={t("common.homeLabel")}>
        <Image src="/images/monogram.svg" alt="K & M monogram" width={52} height={52} priority />
      </Link>
      <div className="site-header__row">
        <nav className={`site-nav${open ? " open" : ""}`} aria-label="Main">
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
            onClick={() => setOpen(!open)}
          >
            {t("common.menu")}
          </button>
        </div>
      </div>
    </header>
  );
}
