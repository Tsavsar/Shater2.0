import type { Metadata } from "next";
import "./globals.css";
import { mena, p22, satoshi, p22800, satoshiBold, satoshiMedium } from "./fonts";
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
      
        className={`${mena.variable} ${p22.variable} ${satoshi.variable} ${satoshiBold.variable} ${satoshiMedium.variable} ${p22800.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
