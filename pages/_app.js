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
          <title>Under The Drum</title>
        </Head>
        <GoogleTagManager
          gtmId="G-L3XTL8FY14
"
        />{" "}
        <Navigationbar />
        <Component {...pageProps} /> <Footer />
        <Analytics />
      </NextUIProvider>
      <SpeedInsights />{" "}
    </>
  );
}
