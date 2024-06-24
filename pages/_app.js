import "@/styles/globals.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import Navigationbar from "./homepage/components/navbar";
import Footer from "./homepage/components/footer";
// import { Providers } from "./Providers";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Head>
          <title>Under The Drum | Music Festival | 28th September 2024</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="A new music festival in the Antrim hills. Music | Art | Food"
            key="desc"
          />
          <meta
            property="og:title"
            content="Under The Drum | Music Festival in the Antrim hills"
          />
          <meta
            property="og:description"
            content="A new music festival in the Antrim hills. Music | Art | Food"
          />
          <meta property="og:image" content="public\Vector LOGO - MAIN.jpg" />
          <meta property="og:image:alt" content="Under The Drum logo" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.underthedrum.co.uk" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta
            property="article:author"
            content="https://gr-next-portfolio.vercel.app/"
          />
        </Head>
        {/* <Providers> */}
        <Navigationbar />
        <Component {...pageProps} /> <Footer />
        {/* </Providers> */}
        <GoogleTagManager
          gtmId="G-L3XTL8FY14
"
        />{" "}
      </NextUIProvider>
    </>
  );
}
