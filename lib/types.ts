export type Locale = "it" | "en";

export type NavLink = {
  href: string;
  labelKey: "metodo" | "servizi" | "gallery" | "contatti";
};

export type ServiceItem = {
  id: string;
  number: string;
  titleKey: "cut" | "beard" | "combo";
  imageKey: "s1" | "s2" | "s3";
  labelKey: "cutLabel" | "beardLabel" | "comboLabel";
  /** Mock price in EUR */
  price: number;
  /** Approximate duration in minutes */
  durationMin: number;
};

export type GalleryItem = {
  id: string;
  imageKey: "w1" | "w2" | "w3" | "w4" | "w5" | "w6" | "w7";
  labelKey: "w1" | "w2" | "w3" | "w4" | "w5" | "w6" | "w7";
  className: string;
};

export type ImageKey =
  | "hero"
  | "exp1"
  | "exp2"
  | "s1"
  | "s2"
  | "s3"
  | "w1"
  | "w2"
  | "w3"
  | "w4"
  | "w5"
  | "w6"
  | "w7"
  | "book";

export type SiteImages = Record<ImageKey, string>;

export type SiteConfig = {
  brand: string;
  brandSub: string;
  phone: string;
  phoneHref: string;
  addressLines: string[];
  mapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bookingUrl: string;
  instagramUrl: string;
  images: SiteImages;
  navLinks: NavLink[];
  services: ServiceItem[];
  gallery: GalleryItem[];
};
