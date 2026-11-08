import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";

import { LocaleProvider } from "@/context/LocaleContext";
import { getDictionary, defaultLocale } from "@/data/dictionary";

import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dictionary = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#20372E",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html
      lang={defaultLocale}
      className={`${serif.variable} ${sans.variable}`}
    >
      <body>
        <LocaleProvider initialLocale={defaultLocale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
