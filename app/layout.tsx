import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Breakpoint } from "./_components/breakpoint";

const siteUrl = "https://www.oneplanetpartners.com";
const logoUrl = "/images/OPP-logo-s.jpg";
const description =
  "One Planet Partners is an India-focused private equity firm investing in mid-market businesses where active ownership, operational expertise, and climate insight create enduring value.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "One Planet Partners",
    template: "%s | One Planet Partners",
  },
  description,
  icons: {
    icon: [{ url: logoUrl, type: "image/jpeg", sizes: "852x852" }],
    apple: [{ url: logoUrl, type: "image/jpeg", sizes: "852x852" }],
  },
  openGraph: {
    title: "One Planet Partners",
    description,
    siteName: "One Planet Partners",
    images: [
      {
        url: logoUrl,
        width: 852,
        height: 852,
        alt: "One Planet Partners logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "One Planet Partners",
    description,
    images: [
      {
        url: logoUrl,
        alt: "One Planet Partners logo",
      },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One Planet Partners",
  url: siteUrl,
  logo: `${siteUrl}${logoUrl}`,
  image: `${siteUrl}${logoUrl}`,
  sameAs: [
    "https://in.linkedin.com/company/oneplanetpartners",
    "https://x.com/OnePlanetP",
    "https://www.instagram.com/oneplanetpartners",
  ],
};

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-source-sans",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSerif.variable} ${sourceSans.variable} h-full antialiased`}
      // style={{ scrollPaddingTop: "5.4625rem" }}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        {process.env.NODE_ENV === "development" ? <Breakpoint /> : null}
      </body>
    </html>
  );
}
