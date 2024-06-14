import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="flex flex-col items-center pb-0 my-0 bg-utd-navy">
      <div className="w">
        {" "}
        <Image
          src="/Banner.jpg"
          className="md:w-screen w-dvw"
          alt="Under The Drum"
          width="2500"
          height="998"
        />
      </div>

      <div className="main-logo px-0 mx-0 place-content-center md:hidden">
        {" "}
        {/* <Image
          src="/Vector LOGO - MAIN.jpg"
          className="block dark:hidden"
          alt="Under The Drum"
          width="400"
          height="400"
        /> */}
        <Image
          src="/UTDLogoWhite.png"
          className=""
          alt="Under The Drum"
          width="400"
          height="400"
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
      <Image
        src="/Banner1.png"
        className="md:hidden w-dvw"
        alt="Under The Drum"
        width="2500"
        height="998"
      />
    </div>
  );
}
