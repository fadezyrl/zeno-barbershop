"use client";

import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

const formatPrice = (price: number, locale: string): string =>
  new Intl.NumberFormat(locale === "en" ? "en-IE" : "it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

export const Services = (): React.JSX.Element => {
  const { t, locale } = useLocale();

  return (
    <section className="serv" id="servizi">
      <div className="serv-head">
        <h2>{t.services.title}</h2>
        <p className="serv-note">{t.services.priceNote}</p>
      </div>
      {siteConfig.services.map((service) => (
        <div className="row" key={service.id}>
          <span className="n">{service.number}</span>
          <div className="row-main">
            <h3>{t.services[service.titleKey]}</h3>
            <span className="row-meta">
              {t.services.duration.replace("{min}", String(service.durationMin))}
            </span>
          </div>
          <span className="price" aria-label={formatPrice(service.price, locale)}>
            {formatPrice(service.price, locale)}
          </span>
          <Placeholder
            src={siteConfig.images[service.imageKey]}
            label={t.services[service.labelKey]}
          />
        </div>
      ))}
    </section>
  );
};
