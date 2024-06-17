import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import UtdBanner from "../components/utdBanner";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-0 mx-0 pb-0 my-0 bg-utd-navy">
      <div className="main-logo place-content-center">
        <Image
          src="/UTDpost1.png"
          className="w-screen md:w-fit"
          alt="Under The Drum"
          width="500"
          height="500"
          priority
        />
      </div>

      <h1
        className={`font-light text-4xl md:text-5xl pt-4 leading-loose text-center uppercase" ${roboto.className}`}
      >
        UNDER THE DRUM
      </h1>
      <h2 className="lowercase italic text-xl md:text-2xl">
        a music festival in the Antrim Hills
      </h2>
      <p className="text-xl md:text-2xl leading-loose text-center uppercase py-6">
        Saturday September 28th 2024
      </p>
      <UtdBanner />

      <Image
        src="/Banner1.png"
        className="md:hidden"
        alt="Under The Drum"
        width="2500"
        height="998"
      />
    </div>
  );
}
