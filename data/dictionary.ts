import type { Locale } from "@/lib/types";

type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    metodo: string;
    servizi: string;
    gallery: string;
    contatti: string;
    book: string;
    bookLong: string;
    openMenu: string;
    closeMenu: string;
    logoAria: string;
  };
  hero: {
    line1: string;
    line2: string;
    body: string;
    cta: string;
    location: string;
    imageLabel: string;
  };
  experience: {
    title: string;
    body: string;
    imageLabel1: string;
    imageLabel2: string;
  };
  services: {
    title: string;
    cut: string;
    beard: string;
    combo: string;
    cutLabel: string;
    beardLabel: string;
    comboLabel: string;
    duration: string;
    priceNote: string;
  };
  gallery: {
    title: string;
    w1: string;
    w2: string;
    w3: string;
    w4: string;
    w5: string;
    w6: string;
    w7: string;
  };
  booking: {
    title: string;
    subtitle: string;
    phone: string;
    address: string;
    cta: string;
    maps: string;
    instagram: string;
    mapLabel: string;
    mapAttribution: string;
  };
  footer: {
    location: string;
    copyright: string;
  };
};

const it: Dictionary = {
  meta: {
    title: "Zeno Barbershop — Genzano di Roma",
    description:
      "Un ambiente dove calma, precisione e qualità definiscono ogni dettaglio.",
  },
  nav: {
    metodo: "Il Metodo",
    servizi: "Servizi",
    gallery: "Gallery",
    contatti: "Contatti",
    book: "Prenota",
    bookLong: "Prenota un appuntamento",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    logoAria: "Zeno Barbershop",
  },
  hero: {
    line1: "Non è solo un taglio.",
    line2: "È il tuo momento.",
    body: "Un ambiente dove calma, precisione e qualità definiscono ogni dettaglio.",
    cta: "Prenota un appuntamento",
    location: "GENZANO DI ROMA, ITALIA",
    imageLabel: "Fotografia: interno Zeno",
  },
  experience: {
    title: "Qui non si viene per correre.",
    body: "Crediamo nel valore del tempo, nella cura dei dettagli e nella qualità di ogni servizio. Un’esperienza dedicata a chi apprezza le cose fatte bene.",
    imageLabel1: "Fotografia: interno Zeno",
    imageLabel2: "Dettaglio architettonico",
  },
  services: {
    title: "I servizi",
    cut: "Taglio uomo",
    beard: "Cura e modellatura barba",
    combo: "Taglio + barba",
    cutLabel: "Taglio",
    beardLabel: "Barba",
    comboLabel: "Taglio + barba",
    duration: "{min} min",
    priceNote: "Prezzi indicativi",
  },
  gallery: {
    title: "Il nostro lavoro",
    w1: "Taglio di precisione",
    w2: "Dettaglio sfumatura",
    w3: "Cura della barba",
    w4: "Acconciatura finita",
    w5: "Dettaglio",
    w6: "Sfumatura",
    w7: "Il lavoro in poltrona",
  },
  booking: {
    title: "Il tuo prossimo appuntamento ti aspetta.",
    subtitle: "Prenditi il tuo tempo. Noi ci occupiamo dei dettagli.",
    phone: "Telefono",
    address: "Indirizzo",
    cta: "Prenota un appuntamento",
    maps: "Apri in Google Maps",
    instagram: "Instagram",
    mapLabel: "Mappa: Zeno Barbershop, Via Orlando Ferrazza 31, Genzano di Roma",
    mapAttribution: "© OpenStreetMap",
  },
  footer: {
    location: "Genzano di Roma, Italia",
    copyright: "© 2026 Zeno Barbershop",
  },
};

const en: Dictionary = {
  meta: {
    title: "Zeno Barbershop — Genzano di Roma",
    description:
      "A space where calm, precision, and quality define every detail.",
  },
  nav: {
    metodo: "The Method",
    servizi: "Services",
    gallery: "Gallery",
    contatti: "Contact",
    book: "Book",
    bookLong: "Book an appointment",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoAria: "Zeno Barbershop",
  },
  hero: {
    line1: "It’s not just a cut.",
    line2: "It’s your moment.",
    body: "A space where calm, precision, and quality define every detail.",
    cta: "Book an appointment",
    location: "GENZANO DI ROMA, ITALY",
    imageLabel: "Photo: Zeno interior",
  },
  experience: {
    title: "You don’t come here to rush.",
    body: "We believe in the value of time, care for detail, and the quality of every service. An experience for those who appreciate things done well.",
    imageLabel1: "Photo: Zeno interior",
    imageLabel2: "Architectural detail",
  },
  services: {
    title: "Services",
    cut: "Men’s cut",
    beard: "Beard care and shaping",
    combo: "Cut + beard",
    cutLabel: "Cut",
    beardLabel: "Beard",
    comboLabel: "Cut + beard",
    duration: "{min} min",
    priceNote: "Indicative prices",
  },
  gallery: {
    title: "Our work",
    w1: "Precision cut",
    w2: "Fade detail",
    w3: "Beard care",
    w4: "Finished style",
    w5: "Detail",
    w6: "Fade",
    w7: "Chair work",
  },
  booking: {
    title: "Your next appointment is waiting.",
    subtitle: "Take your time. We’ll take care of the details.",
    phone: "Phone",
    address: "Address",
    cta: "Book an appointment",
    maps: "Open in Google Maps",
    instagram: "Instagram",
    mapLabel: "Map: Zeno Barbershop, Via Orlando Ferrazza 31, Genzano di Roma",
    mapAttribution: "© OpenStreetMap",
  },
  footer: {
    location: "Genzano di Roma, Italy",
    copyright: "© 2026 Zeno Barbershop",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { it, en };

export const defaultLocale: Locale = "it";

export const getDictionary = (locale: Locale = defaultLocale): Dictionary =>
  dictionaries[locale];
