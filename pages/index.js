import { Inconsolata } from "next/font/google";
import React from "react";
import Contact from "./homepage/contact";
import Artists from "./homepage/artists";
import Hero from "./homepage/hero";
import CookieConsentBanner from "./homepage/components/CookieConsent";
import AboutUTD from "./homepage/aboututd";
import Head from "next/head";
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen font-nunito bg-utd-navy ${inconsolata.className} z-0 scroll-smooth `}
    >
      <Head>
        <title>Under The Drum | Music Festival | Saturday September 2024</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Under The Drum",
              startDate: "2024-09-28T11:00:00Z",
              endDate: "2024-09-29T12:00:00Z",
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
              image: [
                "https://www.underthedrum.co.uk/_next/image?url=%2FUTDLogoWhite.png&w=64&q=75",
              ],
              description: "A new annual music festival in the Antrim hills.",
              offers: {
                "@type": "Offer",
                url: "https://www.underthedrum.co.uk/tickets",
                price: "45",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                validFrom: "2024-07-21T12:00:00Z",
              },
              performer: {
                "@type": "Person",
                name: "Joshua Burnside",
              },
              performer: {
                "@type": "Person",
                name: "Roe",
              },
              performer: {
                "@type": "Person",
                name: "Junk Drawer",
              },
              performer: {
                "@type": "Person",
                name: "Arliston",
              },
              performer: {
                "@type": "Person",
                name: "Arborist",
              },
              performer: {
                "@type": "Person",
                name: "Oh Boland",
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
