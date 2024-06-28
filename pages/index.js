import { Montserrat, Bitter } from "next/font/google";
import React from "react";
import Venue from "./homepage/venue";
import Contact from "./homepage/contact";
import Artists from "./homepage/artists";
import Hero from "./homepage/hero";
import MailchimpForm from "./homepage/components/mailchimpForm";
import CookieConsentBanner from "./homepage/components/CookieConsent";

const montserrat = Montserrat({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen dark pb-6 font-nunito bg-utd-navy ${montserrat.className} z-0 scroll-smooth`}
    >
      <CookieConsentBanner />
      <Hero />
      <Artists />
      <Venue />
      <Contact />
      <MailchimpForm />
    </main>
  );
}
