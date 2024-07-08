import "@/styles/globals.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import Navigationbar from "./homepage/components/navbar";
import Footer from "./homepage/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Head>
          <title>Under The Drum | Music Festival</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="A new music festival in the Antrim hills | 28th September 2024"
            key="desc"
          />
          <meta property="og:title" content="Under The Drum" />
          <meta
            property="og:description"
            content="A new music festival in the Antrim hills | 28th September 2024"
          />
          <meta property="og:image" content="public\Vector LOGO - MAIN.jpg" />
          <meta property="og:image:alt" content="Under The Drum logo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.underthedrum.co.uk" />
          <meta property="og:site_name" content="Under The Drum" />
          <meta
            property="twitter:image"
            content="public\Vector LOGO - MAIN.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Under The Drum" />
          <meta
            property="twitter:description"
            content="A new music festival in the Antrim hills | 28th September 2024"
          />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta
            property="article:author"
            content="https://gr-next-portfolio.vercel.app/"
          />
        </Head>
        <Navigationbar />
        <Component {...pageProps} /> <Footer />
        <Analytics />
      </NextUIProvider>
      <SpeedInsights />{" "}
      <GoogleTagManager
        gtmId="G-L3XTL8FY14
"
      />{" "}
    </>
  );
}
