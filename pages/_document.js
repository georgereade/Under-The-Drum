import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Music festival in the Antrim hills | Art, food and more"
          key="desc"
        />
        <meta property="og:title" content="Under The Drum" />
        <meta
          property="og:description"
          content="Music festival in the Antrim hills | Art, food and more"
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
          content="Music festival in the Antrim hills | Art, food and more"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          property="article:author"
          content="https://gr-next-portfolio.vercel.app/"
        />
      </Head>
      <GoogleTagManager
        gtmId="G-L3XTL8FY14
"
      />{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
