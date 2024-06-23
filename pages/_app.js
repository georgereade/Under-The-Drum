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
