"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Nav = (): React.JSX.Element => {
  const { t } = useLocale();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = (): void => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setSolid(y > 60);

      if (menuOpen || y <= 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const bookHref = siteConfig.bookingUrl || "#contatti";
  const bookProps = siteConfig.bookingUrl
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const closeMenu = (): void => setMenuOpen(false);
  const navClassName = [solid ? "solid" : "", hidden ? "nav-hidden" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav id="nav" className={navClassName} aria-label="Primary">
        <a href="#top" className="logo" aria-label={t.nav.logoAria}>
          {siteConfig.brand}
          <small>{siteConfig.brandSub}</small>
        </a>

        <div className="links">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {t.nav[link.labelKey]}
            </a>
          ))}
        </div>

        <Button
          href={bookHref}
          className="nav-cta"
          data-book
          {...bookProps}
        >
          {t.nav.book}
        </Button>

        <button
          className="burger"
          id="burger"
          type="button"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>
      </nav>

      <div
        className={`menu${menuOpen ? " open" : ""}`}
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        {siteConfig.navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {t.nav[link.labelKey]}
          </a>
        ))}
        <Button
          href={bookHref}
          data-book
          onClick={closeMenu}
          {...bookProps}
        >
          {t.nav.bookLong}
        </Button>
      </div>
    </>
  );
};
