"use client";

import { Button } from "@/components/ui/Button/Button";
import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Booking = (): React.JSX.Element => {
  const { t } = useLocale();
  const bookHref = siteConfig.bookingUrl || siteConfig.phoneHref;
  const bookProps = siteConfig.bookingUrl
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <section className="book" id="contatti">
      <Placeholder
        src={siteConfig.images.book}
        label={t.booking.imageLabel}
      />
      <div className="book-in">
        <h2>{t.booking.title}</h2>
        <p className="sub">{t.booking.subtitle}</p>
        <dl className="facts">
          <div>
            <dt>{t.booking.phone}</dt>
            <dd>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </dd>
          </div>
          <div>
            <dt>{t.booking.address}</dt>
            <dd>
              {siteConfig.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <div className="acts">
          <Button href={bookHref} solid data-book {...bookProps}>
            {t.booking.cta}
          </Button>
          <Button
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.booking.maps}
          </Button>
          {siteConfig.instagramUrl ? (
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="ig"
            >
              {t.booking.instagram}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};
