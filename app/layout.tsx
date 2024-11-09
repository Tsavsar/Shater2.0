import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { mena, p22, satoshi, mena800, satoshiBold, satoshiMedium, p22Italic } from "./fonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Shater Mchiaga Tsavar",
  description: "Shater Tsavsar - product designer by day, Knicks & Arsenal fan by night. Currently building Opentape    , my design approach focuses on solving real problems, optimizing user journeys, and making every interaction seamless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${mena.variable} ${p22.variable} ${satoshi.variable} ${satoshiBold.variable} ${satoshiMedium.variable} ${mena800.variable} ${p22Italic.variable}  antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
