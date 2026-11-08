"use client";

import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Experience = (): React.JSX.Element => {
  const { t } = useLocale();

  return (
    <section className="exp" id="metodo">
      <Placeholder
        className="big"
        src={siteConfig.images.exp1}
        label={t.experience.imageLabel1}
      />
      <h2>{t.experience.title}</h2>
      <Placeholder
        className="small"
        src={siteConfig.images.exp2}
        label={t.experience.imageLabel2}
      />
      <p>{t.experience.body}</p>
    </section>
  );
};
