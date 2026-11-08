"use client";

import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Footer = (): React.JSX.Element => {
  const { t } = useLocale();

  return (
    <footer>
      <a href="#top" className="logo" aria-label={t.nav.logoAria}>
        {siteConfig.brand}
        <small>{siteConfig.brandSub}</small>
      </a>
      <span>
        {t.footer.location} ·{" "}
        <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
      </span>
      <nav aria-label="Footer">
        {siteConfig.navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {t.nav[link.labelKey]}
          </a>
        ))}
      </nav>
      <span className="c">{t.footer.copyright}</span>
    </footer>
  );
};
