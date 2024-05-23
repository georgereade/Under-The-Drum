import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Under The Drum</title>
      </Head>
      <Component {...pageProps} />{" "}
      <GoogleTagManager
        gtmId="G-L3XTL8FY14
"
      />
    </>
  );
}
