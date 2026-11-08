"use client";

import { useEffect, useRef } from "react";

import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Gallery = (): React.JSX.Element => {
  const { t } = useLocale();
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = mosaicRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".ph"));

    // Observe the mosaic container — not the tiles. Fully clipped tiles
    // report 0 intersection, so watching them never adds `.in`.
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (!visible) return;

        items.forEach((el, index) => {
          el.style.transitionDelay = `${(index % 3) * 0.12}s`;
          el.classList.add("in");
        });
        io.disconnect();
      },
      { threshold: 0.12 },
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section className="work" id="gallery">
      <h2>{t.gallery.title}</h2>
      <div className="mosaic" ref={mosaicRef}>
        {siteConfig.gallery.map((item) => (
          <Placeholder
            key={item.id}
            className={item.className}
            src={siteConfig.images[item.imageKey]}
            label={t.gallery[item.labelKey]}
          />
        ))}
      </div>
    </section>
  );
};
