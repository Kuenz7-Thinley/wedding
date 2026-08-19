"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { useLocale } from "@/components/LocaleProvider";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <AnimateIn>
        <p className="site-footer__text">{t("footer.tagline")}</p>
        <p className="site-footer__names">Kuenzang &amp; Miyu</p>
      </AnimateIn>
    </footer>
  );
}
