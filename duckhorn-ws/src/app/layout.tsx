import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Fira_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const cormorant = Cormorant_Garamond({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const firaSans = Fira_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Duckhorn Collection | Wine Spectator",
  description:
    "Crafting Timeless Wines From Iconic Terroirs. Celebrating 50 Years of Napa Valley Heritage.",
  icons: {
    icon: "/images/WSFavIcon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/kls5ojz.css" />
      </head>
      <body
        className={`${cormorant.variable} ${firaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
