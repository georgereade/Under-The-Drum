import { Inconsolata } from "next/font/google";
import React from "react";
import Contact from "./homepage/contact";
import Artists from "./homepage/artists";
import Hero from "./homepage/hero";
import CookieConsentBanner from "./homepage/components/CookieConsent";
import AboutUTD from "./homepage/aboututd";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen font-nunito bg-utd-navy ${inconsolata.className} z-0 scroll-smooth `}
    >
      <CookieConsentBanner />
      <Hero />
      <AboutUTD />
      <Artists />
      <Contact />
    </main>
  );
}
