import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artem Litovchenko — Film & Game Composer",
  description: "Film & Game Composer · Remote Cello Recording. Official website of Artem Litovchenko.",
  keywords: "film composer, game composer, cello recording, remote cello, Artem Litovchenko",
  openGraph: {
    title: "Artem Litovchenko — Film & Game Composer",
    description: "Film & Game Composer · Remote Cello Recording",
    url: "https://artemlitovchenko.com",
    siteName: "Artem Litovchenko",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}