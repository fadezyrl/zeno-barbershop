"use client";

import { useEffect, useRef, useState } from "react";

import { Placeholder } from "@/components/ui/Placeholder/Placeholder";
import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

export const Gallery = (): React.JSX.Element => {
  const { t } = useLocale();
  const mosaicRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const root = mosaicRef.current;
    if (!root || revealed) return;

    // Watch the mosaic container (tiles start fully clipped, so observing
    // them directly never intersects). threshold 0 so tall mosaics still
    // fire when any part enters the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0 },
    );

    io.observe(root);
    return () => io.disconnect();
  }, [revealed]);

  return (
    <section className="work" id="gallery">
      <h2>{t.gallery.title}</h2>
      <div className="mosaic" ref={mosaicRef}>
        {siteConfig.gallery.map((item, index) => (
          <Placeholder
            key={item.id}
            className={`${item.className}${revealed ? " in" : ""}`}
            src={siteConfig.images[item.imageKey]}
            label={t.gallery[item.labelKey]}
            style={{
              transitionDelay: revealed ? `${(index % 3) * 0.12}s` : undefined,
            }}
          />
        ))}
      </div>
    </section>
  );
};
