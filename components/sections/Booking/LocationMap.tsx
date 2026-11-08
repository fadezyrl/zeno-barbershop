"use client";

import { useLocale } from "@/context/LocaleContext";
import { siteConfig } from "@/data/site";

const buildEmbedUrl = (lat: number, lng: number): string => {
  const padLng = 0.008;
  const padLat = 0.0055;
  const west = lng - padLng;
  const south = lat - padLat;
  const east = lng + padLng;
  const north = lat + padLat;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${west}%2C${south}%2C${east}%2C${north}&layer=mapnik`;
};

export const LocationMap = (): React.JSX.Element => {
  const { t } = useLocale();
  const { lat, lng } = siteConfig.coordinates;
  const embedUrl = buildEmbedUrl(lat, lng);

  return (
    <div className="book-map" role="region" aria-label={t.booking.mapLabel}>
      <div className="book-map__canvas" aria-hidden="true">
        <iframe
          className="book-map__frame"
          title={t.booking.mapLabel}
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
        />
      </div>

      <div className="book-map__grade" aria-hidden="true" />
      <div className="book-map__vignette" aria-hidden="true" />
      <div className="book-map__grain" aria-hidden="true" />

      <a
        className="book-map__pin"
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.booking.maps}
      >
        <span className="book-map__pulse" />
        <span className="book-map__marker">
          <svg viewBox="0 0 40 52" width="40" height="52" aria-hidden="true">
            <path
              className="book-map__marker-body"
              d="M20 0C9.5 0 1 8.4 1 18.8c0 12.6 16.2 30.5 17.2 31.6a2 2 0 0 0 3.1 0C22.3 49.3 39 31.4 39 18.8 39 8.4 30.5 0 20 0z"
            />
            <circle className="book-map__marker-core" cx="20" cy="19" r="7.5" />
            <text className="book-map__marker-letter" x="20" y="23" textAnchor="middle">
              Z
            </text>
          </svg>
        </span>
      </a>

      <p className="book-map__credit">{t.booking.mapAttribution}</p>
    </div>
  );
};
