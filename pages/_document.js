import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en" className="dark select-none">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <SpeedInsights />
    </Html>
  );
}
