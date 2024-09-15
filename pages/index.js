import { Inconsolata } from "next/font/google";
import React from "react";
import Contact from "./home/contact";
import Artists from "./home/artists";
import Hero from "./home/hero";
import CookieConsentBanner from "../components/CookieConsent";
import AboutUTD from "./home/aboututd";
import Head from "next/head";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen font-nunito bg-utd-navy ${inconsolata.className} z-0 scroll-smooth `}
    >
      <Head>
        <title>
          Under The Drum | Music Festival | Northern Ireland Saturday September
          2024
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Under The Drum",
              alternateName: ["UnderTheDrum", "UTD", "Under The Drum Festival"],
              url: "https://www.underthedrum.co.uk/",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              name: "Under The Drum",
              startDate: "2024-09-28T11:00:00",
              endDate: "2024-09-29T12:00:00",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "Breckenhill",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "45 Breckenhill Road",
                  addressLocality: "Ballyclare",
                  postalCode: "BT39 0TB",
                  addressCountry: "UK",
                },
              },
              image: ["https://www.underthedrum.co.uk/main-logo.png"],
              description:
                "A new music festival in the Antrim hills featuring Joshua Burnside | Art, food, drinks and more",
              offers: {
                "@type": "Offer",
                url: "https://www.underthedrum.co.uk/tickets",
                price: "50",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                validFrom: "2024-07-21T12:00",
              },
              performer: {
                "@type": "MusicGroup",
                name: "Joshua Burnside",
              },
            }),
          }}
        />
      </Head>
      <CookieConsentBanner />
      <Hero />
      <AboutUTD />
      <Artists />
      <Contact />
    </main>
  );
}
