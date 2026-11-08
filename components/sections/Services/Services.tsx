"use client";

import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Services = (): React.JSX.Element => {
  const { t } = useLocale();

  return (
    <section className="serv" id="servizi">
      <h2>{t.services.title}</h2>
      {siteConfig.services.map((service) => (
        <div className="row" key={service.id}>
          <span className="n">{service.number}</span>
          <h3>{t.services[service.titleKey]}</h3>
          <Placeholder
            src={siteConfig.images[service.imageKey]}
            label={t.services[service.labelKey]}
          />
        </div>
      ))}
    </section>
  );
};
