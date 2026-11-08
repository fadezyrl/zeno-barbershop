"use client";

import { Button } from "@/components/ui/Button/Button";
import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Hero = (): React.JSX.Element => {
  const { t } = useLocale();
  const bookHref = siteConfig.bookingUrl || "#contatti";
  const bookProps = siteConfig.bookingUrl
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <header className="hero">
      <div className="hero-txt">
        <h1>
          <span>
            <b>{t.hero.line1}</b>
          </span>
          <span>
            <b>{t.hero.line2}</b>
          </span>
        </h1>
        <p>{t.hero.body}</p>
        <div>
          <Button href={bookHref} data-book {...bookProps}>
            {t.hero.cta}
          </Button>
        </div>
      </div>
      <Placeholder
        src={siteConfig.images.hero}
        label={t.hero.imageLabel}
      />
      <div className="loc">{t.hero.location}</div>
    </header>
  );
};
