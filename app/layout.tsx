import "./globals.css";
import type { ReactNode } from "react";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Breakpoint } from "./_components/breakpoint";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-source-sans",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        {process.env.NODE_ENV === "development" ? <Breakpoint /> : null}
      </body>
    </html>
  );
}
